/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { _decode_interrogateDiversionQ_ArgumentType, _encode_interrogateDiversionQ_ArgumentType, interrogateDiversionQ_ArgumentType } from "../Call-Diversion-Operations-asn1-97/interrogateDiversionQ-ArgumentType.ta.mjs";
import { IntResultList, _decode_IntResultList, _encode_IntResultList } from "../Call-Diversion-Operations-asn1-97/IntResultList.ta.mjs";
import { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { temporarilyUnavailable } from "../Call-Diversion-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
import { notAuthorized } from "../Call-Diversion-Operations-asn1-97/notAuthorized.oa.mjs";
import { unspecified } from "../Call-Diversion-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary interrogateDiversionQ
 * @description
 *
 * Remote interrogation of CFU, CFB, or CFNR. The Interrogating PINX sends this
 * to the Served User PINX on a call-independent signalling connection (ECMA-174
 * §6.5.8.1). ROSE local code 17. The result is an `IntResultList` when the
 * request is valid and that Call Forwarding is activated (§6.5.3.1.3).
 * `interrogatingUserNr` may be taken into account.
 *
 * If the request is not valid, or that type of Call Forwarding is not
 * activated, the Served User PINX returns an error (§6.5.3.2.3). Timer T4 at
 * the Interrogating PINX is at least 15 s; expiry is treated as a reject
 * (§6.9.4, §6.5.8.2).
 *
 * Errors: `userNotSubscribed`, `notAvailable`, `invalidServedUserNr`,
 * `temporarilyUnavailable`, `notAuthorized`, and `unspecified`. The procedures
 * do not map these codes. Stage 1 interrogation failures include service not
 * subscribed, insufficient information, and a basic service that is not
 * subscribed (ECMA-173 §6.2.3.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
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
