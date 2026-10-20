/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { _decode_deactivateDiversionQ_ArgumentType, _encode_deactivateDiversionQ_ArgumentType, deactivateDiversionQ_ArgumentType } from "../Call-Diversion-Operations-asn1-97/deactivateDiversionQ-ArgumentType.ta.mjs";
// export { deactivateDiversionQ_ArgumentType, _decode_deactivateDiversionQ_ArgumentType, _encode_deactivateDiversionQ_ArgumentType } from "../Call-Diversion-Operations-asn1-97/deactivateDiversionQ-ArgumentType.ta.mjs";
import { _decode_deactivateDiversionQ_ResultType, _encode_deactivateDiversionQ_ResultType, deactivateDiversionQ_ResultType } from "../Call-Diversion-Operations-asn1-97/deactivateDiversionQ-ResultType.ta.mjs";
// export { deactivateDiversionQ_ResultType, _decode_deactivateDiversionQ_ResultType, _encode_deactivateDiversionQ_ResultType } from "../Call-Diversion-Operations-asn1-97/deactivateDiversionQ-ResultType.ta.mjs";
import { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
// export { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
// export { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
// export { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { temporarilyUnavailable } from "../Call-Diversion-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
// export { temporarilyUnavailable } from "../Call-Diversion-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
import { notAuthorized } from "../Call-Diversion-Operations-asn1-97/notAuthorized.oa.mjs";
// export { notAuthorized } from "../Call-Diversion-Operations-asn1-97/notAuthorized.oa.mjs";
import { unspecified } from "../Call-Diversion-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../Call-Diversion-Operations-asn1-97/unspecified.oa.mjs";


/**
 * @summary deactivateDiversionQ
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * deactivateDiversionQ OPERATION ::= {
 *     -- Sent from the Deactivating PINX to the Served User PINX
 *     ARGUMENT SEQUENCE {
 *         procedure Procedure,
 *         basicService BasicService,
 *         servedUserNr PartyNumber,
 *         deactivatingUserNr PartyNumber,
 *         extension CHOICE {
 *             single [1] IMPLICIT Extension {{DiversionExtensionSet}},
 *             multiple [2] IMPLICIT SEQUENCE OF Extension {{DiversionExtensionSet}}
 *         } OPTIONAL
 *     }
 *     RESULT CHOICE {
 *         null NULL,
 *         single [1] IMPLICIT Extension {{DiversionExtensionSet}},
 *         multiple [2] IMPLICIT SEQUENCE OF Extension {{DiversionExtensionSet}}
 *     }
 *     ERRORS {
 *         userNotSubscribed
 *         | notAvailable
 *         | invalidServedUserNr
 *         | temporarilyUnavailable
 *         | notAuthorized
 *         | unspecified
 *     }
 *     CODE local: 16
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<deactivateDiversionQ_ArgumentType, deactivateDiversionQ_ResultType>}
 * @implements {OPERATION<deactivateDiversionQ_ArgumentType, deactivateDiversionQ_ResultType>}
 */
export
const deactivateDiversionQ: OPERATION<deactivateDiversionQ_ArgumentType, deactivateDiversionQ_ResultType> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_deactivateDiversionQ_ArgumentType,
        "&ResultType": _decode_deactivateDiversionQ_ResultType,
    },
    encoderFor: {
        "&ArgumentType": _encode_deactivateDiversionQ_ArgumentType,
        "&ResultType": _encode_deactivateDiversionQ_ResultType,
    },
    "&Errors": [ userNotSubscribed, notAvailable, invalidServedUserNr, temporarilyUnavailable, notAuthorized, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 16 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
