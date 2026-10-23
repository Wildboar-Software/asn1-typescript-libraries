/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { _decode_deactivateDiversionQ_ArgumentType, _encode_deactivateDiversionQ_ArgumentType, deactivateDiversionQ_ArgumentType } from "../Call-Diversion-Operations-asn1-97/deactivateDiversionQ-ArgumentType.ta.mjs";
import { _decode_deactivateDiversionQ_ResultType, _encode_deactivateDiversionQ_ResultType, deactivateDiversionQ_ResultType } from "../Call-Diversion-Operations-asn1-97/deactivateDiversionQ-ResultType.ta.mjs";
import { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { temporarilyUnavailable } from "../Call-Diversion-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
import { notAuthorized } from "../Call-Diversion-Operations-asn1-97/notAuthorized.oa.mjs";
import { unspecified } from "../Call-Diversion-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary deactivateDiversionQ
 * @description
 *
 * Remote deactivation of CFU, CFB, or CFNR. The Deactivating PINX sends this to
 * the Served User PINX on a call-independent signalling connection when the
 * user requests deactivation (ECMA-174 §6.5.7.1). ROSE local code 16.
 *
 * The Served User PINX checks that `basicService` is consistent for
 * `servedUserNr` and may take `deactivatingUserNr` into account. If the request
 * is valid it deactivates `procedure`, returns a result, and may notify the
 * served user (ECMA-174 §6.5.3.1.2). An invalid request returns an error
 * (§6.5.3.2.2).
 *
 * Timer T3 at the Deactivating PINX is at least 15 s. Expiry is treated as a
 * reject (ECMA-174 §6.9.3, §6.5.7.2).
 *
 * Errors: `userNotSubscribed`, `notAvailable`, `invalidServedUserNr`,
 * `temporarilyUnavailable`, `notAuthorized`, and `unspecified`. The procedures
 * do not map these codes. Stage 1 deactivation causes include service not
 * subscribed, insufficient information, service not activated, and an incorrect
 * served-user number (ECMA-173 §6.2.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
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
