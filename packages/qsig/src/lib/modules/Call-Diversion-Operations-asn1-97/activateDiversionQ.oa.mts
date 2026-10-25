/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { _decode_activateDiversionQ_ArgumentType, _encode_activateDiversionQ_ArgumentType, activateDiversionQ_ArgumentType } from "../Call-Diversion-Operations-asn1-97/activateDiversionQ-ArgumentType.ta.mjs";
import { _decode_activateDiversionQ_ResultType, _encode_activateDiversionQ_ResultType, type activateDiversionQ_ResultType } from "../Call-Diversion-Operations-asn1-97/activateDiversionQ-ResultType.ta.mjs";
import { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { basicServiceNotProvided } from "../General-Error-List/basicServiceNotProvided.oa.mjs";
import { resourceUnavailable } from "../General-Error-List/resourceUnavailable.oa.mjs";
import { invalidDivertedToNr } from "../Call-Diversion-Operations-asn1-97/invalidDivertedToNr.oa.mjs";
import { specialServiceNr } from "../Call-Diversion-Operations-asn1-97/specialServiceNr.oa.mjs";
import { diversionToServedUserNr } from "../Call-Diversion-Operations-asn1-97/diversionToServedUserNr.oa.mjs";
import { temporarilyUnavailable } from "../Call-Diversion-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
import { notAuthorized } from "../Call-Diversion-Operations-asn1-97/notAuthorized.oa.mjs";
import { unspecified } from "../Call-Diversion-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary activateDiversionQ
 * @description
 *
 * Remote activation of CFU, CFB, or CFNR. The Activating PINX sends this to the
 * Served User PINX on a call-independent signalling connection when the user
 * requests activation (ECMA-174 §6.5.6.1). ROSE local code 15.
 *
 * The Served User PINX checks `basicService` for `servedUserNr`, checks that
 * remote activation is supported and enabled, and may take `activatingUserNr`
 * into account (ECMA-174 §6.5.3.1.1). It may verify the diverted-to number by
 * `checkRestriction` or locally (§6.5.3.1.4). If the request is acceptable it
 * activates `procedure`, stores the diverted-to number and any subaddress,
 * returns a result, and may notify the served user.
 *
 * The Activating PINX runs timer T2, at least 30 s. Expiry is treated as a
 * reject (ECMA-174 §6.9.2). On a return error or reject it indicates rejection
 * to the activating user (§6.5.6.2).
 *
 * Errors: `userNotSubscribed`, `notAvailable`, `invalidServedUserNr`,
 * `basicServiceNotProvided`, and `resourceUnavailable` (imported from
 * General-Error-List; this Standard does not define them), plus
 * `invalidDivertedToNr`, `specialServiceNr`, `diversionToServedUserNr`,
 * `temporarilyUnavailable`, `notAuthorized`, and `unspecified`. §6.5.3.2.1
 * requires an appropriate error and does not name the code. Stage 1 rejection
 * causes are in ECMA-173 §6.2.3.1.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
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
