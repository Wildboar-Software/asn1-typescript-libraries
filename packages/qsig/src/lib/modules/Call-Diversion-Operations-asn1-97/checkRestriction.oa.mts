/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { _decode_checkRestriction_ArgumentType, _encode_checkRestriction_ArgumentType, checkRestriction_ArgumentType } from "../Call-Diversion-Operations-asn1-97/checkRestriction-ArgumentType.ta.mjs";
import { _decode_checkRestriction_ResultType, _encode_checkRestriction_ResultType, type checkRestriction_ResultType } from "../Call-Diversion-Operations-asn1-97/checkRestriction-ResultType.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { invalidDivertedToNr } from "../Call-Diversion-Operations-asn1-97/invalidDivertedToNr.oa.mjs";
import { specialServiceNr } from "../Call-Diversion-Operations-asn1-97/specialServiceNr.oa.mjs";
import { unspecified } from "../Call-Diversion-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary checkRestriction
 * @description
 *
 * Verification of a diverted-to number. The Served User PINX may send this to
 * the Diverted-to PINX on a call-independent signalling connection while
 * activating diversion (ECMA-174 §6.5.3.1.4). ROSE local code 18. The
 * called-party number used to establish that connection is outside the scope of
 * the Standard.
 *
 * The Diverted-to PINX checks that `divertedToNr` exists and that no
 * restriction, such as the basic service, would prevent diversion from
 * `servedUserNr`. It returns a result if there is no such restriction, and an
 * error if there is (ECMA-174 §6.5.5.1.2, §6.5.5.2.2). A result means the
 * Served User PINX treats the number as valid. An error means it treats the
 * number as invalid.
 *
 * Timer T5 is at least 15 s (ECMA-174 §6.9.5). If it expires, the connection
 * cannot be established, or the invoke is rejected, the Served User PINX may
 * treat the number as either valid or invalid (§6.5.3.2.4).
 *
 * Errors: `notAvailable`, `invalidServedUserNr`, `invalidDivertedToNr`,
 * `specialServiceNr`, and `unspecified`. `diversionToServedUserNr` is not in
 * this list. The procedures do not map the codes.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
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
