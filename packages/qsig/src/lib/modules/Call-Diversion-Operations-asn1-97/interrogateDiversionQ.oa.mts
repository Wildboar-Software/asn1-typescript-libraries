/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { _decode_interrogateDiversionQ_ArgumentType, _encode_interrogateDiversionQ_ArgumentType, interrogateDiversionQ_ArgumentType } from "../Call-Diversion-Operations-asn1-97/interrogateDiversionQ-ArgumentType.ta.mjs";
// export { interrogateDiversionQ_ArgumentType, _decode_interrogateDiversionQ_ArgumentType, _encode_interrogateDiversionQ_ArgumentType } from "../Call-Diversion-Operations-asn1-97/interrogateDiversionQ-ArgumentType.ta.mjs";
import { IntResultList, _decode_IntResultList, _encode_IntResultList } from "../Call-Diversion-Operations-asn1-97/IntResultList.ta.mjs";
// export { IntResultList, _decode_IntResultList, _encode_IntResultList } from "../Call-Diversion-Operations-asn1-97/IntResultList.ta.mjs";
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
 * @summary interrogateDiversionQ
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * interrogateDiversionQ OPERATION ::= {
 *     -- Sent from the Interrogating PINX to the Served User PINX
 *     ARGUMENT SEQUENCE {
 *         procedure Procedure,
 *         basicService BasicService DEFAULT allServices,
 *         servedUserNr PartyNumber,
 *         interrogatingUserNr PartyNumber,
 *         extension CHOICE {
 *             single [1] IMPLICIT Extension {{DiversionExtensionSet}},
 *             multiple [2] IMPLICIT SEQUENCE OF Extension {{DiversionExtensionSet}}
 *         } OPTIONAL
 *     }
 *     RESULT IntResultList
 *     ERRORS {
 *         userNotSubscribed
 *         | notAvailable
 *         | invalidServedUserNr
 *         | temporarilyUnavailable
 *         | notAuthorized
 *         | unspecified
 *     }
 *     CODE local: 17
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<interrogateDiversionQ_ArgumentType, IntResultList>}
 * @implements {OPERATION<interrogateDiversionQ_ArgumentType, IntResultList>}
 */
export
const interrogateDiversionQ: OPERATION<interrogateDiversionQ_ArgumentType, IntResultList> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_interrogateDiversionQ_ArgumentType,
        "&ResultType": _decode_IntResultList,
    },
    encoderFor: {
        "&ArgumentType": _encode_interrogateDiversionQ_ArgumentType,
        "&ResultType": _encode_IntResultList,
    },
    "&Errors": [ userNotSubscribed, notAvailable, invalidServedUserNr, temporarilyUnavailable, notAuthorized, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 17 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
