/**
 * @description
 *
 * ASN.1 module `MAP-CallHandlingOperations` (clause 17.6.3): MAP operations for
 * routing-information interrogation, roaming-number enquiry, call-control
 * transfer, reporting (`setReportingState` / `statusReport` /
 * `remoteUserFree`), IST alert/command, and MSRN resource release. Service
 * definitions are in clauses 10.1–10.3 and 10.10–10.15. Application contexts
 * are in clause 17.3. Timer ranges are in clause 17.1.2. (3GPP TS 29.002
 * V19.1.0.)
 */
export * from "./ist-Alert.oa.mjs";
export * from "./ist-Command.oa.mjs";
export * from "./provideRoamingNumber.oa.mjs";
export * from "./releaseResources.oa.mjs";
export * from "./remoteUserFree.oa.mjs";
export * from "./resumeCallHandling.oa.mjs";
export * from "./sendRoutingInfo.oa.mjs";
export * from "./setReportingState.oa.mjs";
export * from "./statusReport.oa.mjs";
