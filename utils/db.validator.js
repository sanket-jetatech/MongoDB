const formatErrorMessage = (error) => {
    let errors = error.errInfo.details.schemaRulesNotSatisfied;
    let message = [];

    errors.forEach((e) => {
        if (e.operatorName == "properties") {
            message.push(e.propertiesNotSatisfied.map((p) => p.propertyName + '-' + (p.details.map(d => d.reason).join())).join());
        }
        if (e.operatorName == "required") {
            message.push(`{ ${e.missingProperties.join(",")} } field/s are required`);
        }
    });
    return {
        status: 400,
        message: message.toString()
    };
}

module.exports = {
    formatErrorMessage
}