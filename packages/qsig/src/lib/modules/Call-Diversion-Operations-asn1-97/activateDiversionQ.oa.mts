/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { _decode_activateDiversionQ_ArgumentType, _encode_activateDiversionQ_ArgumentType, activateDiversionQ_ArgumentType } from "../Call-Diversion-Operations-asn1-97/activateDiversionQ-ArgumentType.ta.mjs";
// export { activateDiversionQ_ArgumentType, _decode_activateDiversionQ_ArgumentType, _encode_activateDiversionQ_ArgumentType } from "../Call-Diversion-Operations-asn1-97/activateDiversionQ-ArgumentType.ta.mjs";
import { _decode_activateDiversionQ_ResultType, _encode_activateDiversionQ_ResultType, activateDiversionQ_ResultType } from "../Call-Diversion-Operations-asn1-97/activateDiversionQ-ResultType.ta.mjs";
// export { activateDiversionQ_ResultType, _decode_activateDiversionQ_ResultType, _encode_activateDiversionQ_ResultType } from "../Call-Diversion-Operations-asn1-97/activateDiversionQ-ResultType.ta.mjs";
import { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
// export { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
// export { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
// export { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { basicServiceNotProvided } from "../General-Error-List/basicServiceNotProvided.oa.mjs";
// export { basicServiceNotProvided } from "../General-Error-List/basicServiceNotProvided.oa.mjs";
import { resourceUnavailable } from "../General-Error-List/resourceUnavailable.oa.mjs";
// export { resourceUnavailable } from "../General-Error-List/resourceUnavailable.oa.mjs";
import { invalidDivertedToNr } from "../Call-Diversion-Operations-asn1-97/invalidDivertedToNr.oa.mjs";
// export { invalidDivertedToNr } from "../Call-Diversion-Operations-asn1-97/invalidDivertedToNr.oa.mjs";
import { specialServiceNr } from "../Call-Diversion-Operations-asn1-97/specialServiceNr.oa.mjs";
// export { specialServiceNr } from "../Call-Diversion-Operations-asn1-97/specialServiceNr.oa.mjs";
import { diversionToServedUserNr } from "../Call-Diversion-Operations-asn1-97/diversionToServedUserNr.oa.mjs";
// export { diversionToServedUserNr } from "../Call-Diversion-Operations-asn1-97/diversionToServedUserNr.oa.mjs";
import { temporarilyUnavailable } from "../Call-Diversion-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
// export { temporarilyUnavailable } from "../Call-Diversion-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
import { notAuthorized } from "../Call-Diversion-Operations-asn1-97/notAuthorized.oa.mjs";
// export { notAuthorized } from "../Call-Diversion-Operations-asn1-97/notAuthorized.oa.mjs";
import { unspecified } from "../Call-Diversion-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../Call-Diversion-Operations-asn1-97/unspecified.oa.mjs";


/**
 * @summary activateDiversionQ
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * activateDiversionQ OPERATION ::= {
 *     -- Sent from the Activating PINX to the Served User PINX
 *     ARGUMENT SEQUENCE {
 *         procedure Procedure,
 *         basicService BasicService,
 *         divertedToAddress Address,
 *         servedUserNr PartyNumber,
 *         activatingUserNr PartyNumber,
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
 *         | basicServiceNotProvided
 *         | resourceUnavailable
 *         | invalidDivertedToNr
 *         | specialServiceNr
 *         | diversionToServedUserNr
 *         | temporarilyUnavailable
 *         | notAuthorized
 *         | unspecified
 *     }
 *     CODE local: 15
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<activateDiversionQ_ArgumentType, activateDiversionQ_ResultType>}
 * @implements {OPERATION<activateDiversionQ_ArgumentType, activateDiversionQ_ResultType>}
 */
export
const activateDiversionQ: OPERATION<activateDiversionQ_ArgumentType, activateDiversionQ_ResultType> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_activateDiversionQ_ArgumentType,
        "&ResultType": _decode_activateDiversionQ_ResultType,
    },
    encoderFor: {
        "&ArgumentType": _encode_activateDiversionQ_ArgumentType,
        "&ResultType": _encode_activateDiversionQ_ResultType,
    },
    "&Errors": [ userNotSubscribed, notAvailable, invalidServedUserNr, basicServiceNotProvided, resourceUnavailable, invalidDivertedToNr, specialServiceNr, diversionToServedUserNr, temporarilyUnavailable, notAuthorized, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 15 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
