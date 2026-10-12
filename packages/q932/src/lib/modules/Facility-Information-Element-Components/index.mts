/**
 * @description
 *
 * ROSE components carried in a Facility information element when the
 * protocol profile is Remote Operations. Invoke identifiers are
 * significant only within the call reference and, for this protocol,
 * lie in -32768..32767. ITU-T Rec. Q.932 (05/1998) §8.2.3; Amendment 1
 * (06/2000) Table 8-7 bis.
 *
 * @see https://www.itu.int/rec/T-REC-Q.932
 */
export * from "./Components.ta.mjs";
export * from "./Errors.vsa.mjs";
export * from "./GFPInvokeIDSet.ta.mjs";
export * from "./GeneralProblem.ta.mjs";
export * from "./Invoke-linkedId.ta.mjs";
export * from "./Invoke.ta.mjs";
export * from "./InvokeId.ta.mjs";
export * from "./InvokeProblem.ta.mjs";
export * from "./NoInvokeId.vsa.mjs";
export * from "./ROS.ta.mjs";
export * from "./Reject-problem.ta.mjs";
export * from "./Reject.ta.mjs";
export * from "./RejectProblem.ta.mjs";
export * from "./ReturnError.ta.mjs";
export {
    type ReturnErrorProblem,
    ReturnErrorProblem_unrecognizedInvocation,
    ReturnErrorProblem_errorResponseUnexpected,
    errorResponseUnexpected,
    ReturnErrorProblem_unrecognizedError,
    unrecognizedError,
    ReturnErrorProblem_unexpectedError,
    unexpectedError,
    ReturnErrorProblem_mistypedParameter,
    mistypedParameter,
    _decode_ReturnErrorProblem,
    _encode_ReturnErrorProblem,
} from "./ReturnErrorProblem.ta.mjs";
export * from "./ReturnResult-result.ta.mjs";
export * from "./ReturnResult.ta.mjs";
export {
    type ReturnResultProblem,
    ReturnResultProblem_unrecognizedInvocation,
    ReturnResultProblem_resultResponseUnexpected,
    resultResponseUnexpected,
    ReturnResultProblem_mistypedResult,
    mistypedResult,
    _decode_ReturnResultProblem,
    _encode_ReturnResultProblem,
} from "./ReturnResultProblem.ta.mjs";
export * from "./noInvokeId.va.mjs";
