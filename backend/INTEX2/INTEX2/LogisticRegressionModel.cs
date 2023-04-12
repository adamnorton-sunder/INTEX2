using System;
using System.IO;
using System.Linq;
using Newtonsoft.Json;

public class LogisticRegressionModel
{
    public double[] Coefficients { get; set; }
    public double[] Intercept { get; set; }
    public bool[] SelectedFeatures { get; set; }
    public double[] ScalerMean { get; set; }
    public double[] ScalerScale { get; set; }

    public LogisticRegressionModel(string modelParamsPath)
    {
        dynamic modelParams = JsonConvert.DeserializeObject(File.ReadAllText(modelParamsPath));
        Coefficients = ((JArray)modelParams.coefficients).Select(x => (double)x).ToArray();
        Intercept = ((JArray)modelParams.intercept).Select(x => (double)x).ToArray();
        SelectedFeatures = ((JArray)modelParams.selected_features).Select(x => (bool)x).ToArray();
        ScalerMean = ((JArray)modelParams.scaler_mean).Select(x => (double)x).ToArray();
        ScalerScale = ((JArray)modelParams.scaler_scale).Select(x => (double)x).ToArray();
    }

    public int Predict(double[] features)
    {
        double[] scaledFeatures = ScaleFeatures(features);
        double[] selectedFeatures = SelectFeatures(scaledFeatures);
        double dotProduct = selectedFeatures.Zip(Coefficients, (f, w) => f * w).Sum() + Intercept[0];
        double probability = Sigmoid(dotProduct);
        return probability > 0.5 ? 1 : 0;
    }

    private double[] ScaleFeatures(double[] features)
    {
        return features.Zip(ScalerMean, (f, m) => f - m).Zip(ScalerScale, (f, s) => f / s).ToArray();
    }

    private double[] SelectFeatures(double[] features)
    {
        return features.Where((f, index) => SelectedFeatures[index]).ToArray();
    }

    private double Sigmoid(double x)
    {
        return 1 / (1 + Math.Exp(-x));
    }
}
