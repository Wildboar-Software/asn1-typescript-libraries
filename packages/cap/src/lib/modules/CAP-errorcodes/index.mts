/**
 * @description
 *
 * ASN.1 module `CAP-errorcodes` (3GPP TS 29.078 V19.0.0 clause 5.4).
 *
 * Local ROS error codes for CAP operation errors defined in `CAP-errortypes`
 * (clause 5.2). Codes 0–17 cover CS/SMS/SRF errors; 50–51 are GPRS/CS
 * identifiers (`unknownPDPID`, `unknownCSID`).
 */
export * from "./errcode-canceled.va.mjs";
export * from "./errcode-cancelFailed.va.mjs";
export * from "./errcode-eTCFailed.va.mjs";
export * from "./errcode-improperCallerResponse.va.mjs";
export * from "./errcode-missingCustomerRecord.va.mjs";
export * from "./errcode-missingParameter.va.mjs";
export * from "./errcode-parameterOutOfRange.va.mjs";
export * from "./errcode-requestedInfoError.va.mjs";
export * from "./errcode-systemFailure.va.mjs";
export * from "./errcode-taskRefused.va.mjs";
export * from "./errcode-unavailableResource.va.mjs";
export * from "./errcode-unexpectedComponentSequence.va.mjs";
export * from "./errcode-unexpectedDataValue.va.mjs";
export * from "./errcode-unexpectedParameter.va.mjs";
export * from "./errcode-unknownCSID.va.mjs";
export * from "./errcode-unknownLegID.va.mjs";
export * from "./errcode-unknownPDPID.va.mjs";
