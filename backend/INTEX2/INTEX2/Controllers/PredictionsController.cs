using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class PredictionsController : ControllerBase
{
    private readonly LogisticRegressionModel _model;

    public PredictionsController()
    {
        _model = new LogisticRegressionModel("model_params.json");
    }

    [HttpPost]
    public ActionResult<int> Predict(double[] features)
    {
        int prediction = _model.Predict(features);
        return Ok(prediction);
    }
}
