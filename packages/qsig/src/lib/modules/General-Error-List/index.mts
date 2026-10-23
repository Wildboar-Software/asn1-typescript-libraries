/**
 * @module
 * @description
 *
 * ROSE errors shared by PSS1 supplementary services. ECMA-165 Annex J §J.2
 * identifies the module as ITU-T Q.950 General-Error-List and does not define
 * the errors. The generic indication of each error is Q.950 (06/2000) §5.1.3,
 * except `notActivated`, which Q.950 places in the service-specific list
 * (§5.1.4) and which this module still exports at local value 46. Each
 * supplementary-service standard states when it returns an error; those
 * conditions are not defined in this module.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 * @see https://www.itu.int/rec/T-REC-Q.950/en
 */
export * from "./basicServiceNotProvided.oa.mjs";
export * from "./callFailure.oa.mjs";
export * from "./insufficientInformation.oa.mjs";
export * from "./invalidCallState.oa.mjs";
export * from "./invalidServedUserNr.oa.mjs";
export * from "./notActivated.oa.mjs";
export * from "./notAvailable.oa.mjs";
export * from "./notIncomingCall.oa.mjs";
export * from "./proceduralError.oa.mjs";
export * from "./rejectedByNetwork.oa.mjs";
export * from "./rejectedByUser.oa.mjs";
export * from "./resourceUnavailable.oa.mjs";
export * from "./supplementaryServiceInteractionNotAllowed.oa.mjs";
export * from "./userNotSubscribed.oa.mjs";
