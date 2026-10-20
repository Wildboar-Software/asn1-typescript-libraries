/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { _decode_checkRestriction_ArgumentType, _encode_checkRestriction_ArgumentType, checkRestriction_ArgumentType } from "../Call-Diversion-Operations-asn1-97/checkRestriction-ArgumentType.ta.mjs";
// export { checkRestriction_ArgumentType, _decode_checkRestriction_ArgumentType, _encode_checkRestriction_ArgumentType } from "../Call-Diversion-Operations-asn1-97/checkRestriction-ArgumentType.ta.mjs";
import { _decode_checkRestriction_ResultType, _encode_checkRestriction_ResultType, checkRestriction_ResultType } from "../Call-Diversion-Operations-asn1-97/checkRestriction-ResultType.ta.mjs";
// export { checkRestriction_ResultType, _decode_checkRestriction_ResultType, _encode_checkRestriction_ResultType } from "../Call-Diversion-Operations-asn1-97/checkRestriction-ResultType.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
// export { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
// export { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { invalidDivertedToNr } from "../Call-Diversion-Operations-asn1-97/invalidDivertedToNr.oa.mjs";
// export { invalidDivertedToNr } from "../Call-Diversion-Operations-asn1-97/invalidDivertedToNr.oa.mjs";
import { specialServiceNr } from "../Call-Diversion-Operations-asn1-97/specialServiceNr.oa.mjs";
// export { specialServiceNr } from "../Call-Diversion-Operations-asn1-97/specialServiceNr.oa.mjs";
import { unspecified } from "../Call-Diversion-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../Call-Diversion-Operations-asn1-97/unspecified.oa.mjs";


/**
 * @summary checkRestriction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * checkRestriction OPERATION ::= {
 *     -- Sent from the Served User PINX to the Diverted-to PINX
 *     ARGUMENT SEQUENCE {
 *         servedUserNr PartyNumber,
 *         basicService BasicService,
 *         divertedToNr PartyNumber,
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
 *         notAvailable
 *         | invalidServedUserNr
 *         | invalidDivertedToNr
 *         | specialServiceNr
 *         | unspecified
 *     }
 *     CODE local: 18
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<checkRestriction_ArgumentType, checkRestriction_ResultType>}
 * @implements {OPERATION<checkRestriction_ArgumentType, checkRestriction_ResultType>}
 */
export
const checkRestriction: OPERATION<checkRestriction_ArgumentType, checkRestriction_ResultType> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_checkRestriction_ArgumentType,
        "&ResultType": _decode_checkRestriction_ResultType,
    },
    encoderFor: {
        "&ArgumentType": _encode_checkRestriction_ArgumentType,
        "&ResultType": _encode_checkRestriction_ResultType,
    },
    "&Errors": [ notAvailable, invalidServedUserNr, invalidDivertedToNr, specialServiceNr, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 18 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
