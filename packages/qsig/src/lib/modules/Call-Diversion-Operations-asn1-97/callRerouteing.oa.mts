/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { _decode_callRerouteing_ArgumentType, _encode_callRerouteing_ArgumentType, callRerouteing_ArgumentType } from "../Call-Diversion-Operations-asn1-97/callRerouteing-ArgumentType.ta.mjs";
import { _decode_callRerouteing_ResultType, _encode_callRerouteing_ResultType, callRerouteing_ResultType } from "../Call-Diversion-Operations-asn1-97/callRerouteing-ResultType.ta.mjs";
import { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { resourceUnavailable } from "../General-Error-List/resourceUnavailable.oa.mjs";
import { invalidDivertedToNr } from "../Call-Diversion-Operations-asn1-97/invalidDivertedToNr.oa.mjs";
import { specialServiceNr } from "../Call-Diversion-Operations-asn1-97/specialServiceNr.oa.mjs";
import { diversionToServedUserNr } from "../Call-Diversion-Operations-asn1-97/diversionToServedUserNr.oa.mjs";
import { numberOfDiversionsExceeded } from "../Call-Diversion-Operations-asn1-97/numberOfDiversionsExceeded.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
import { unspecified } from "../Call-Diversion-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary callRerouteing
 * @description
 *
 * Invocation of diversion. The Served User PINX sends this to the Rerouteing
 * PINX in a call-related FACILITY (ECMA-174 §6.5.3.1.5). ROSE local code 19.
 * For CFU, CFB, and Call Deflection Immediate the basic-call state at the
 * Served User PINX is Incoming Call Proceeding or Overlap Receiving. For CFNR
 * and Call Deflection from Alert it is Call Received. The Rerouteing PINX
 * receives it in Overlap Sending or Outgoing Call Proceeding for CFU/CFB, and
 * in Call Delivered for CFNR (§6.5.4.1).
 *
 * `rerouteingReason` selects the CFU/CFB procedure or the CFNR procedure, and
 * is never `unknown` when the Served User PINX sends it (ECMA-174 §6.5.3.1.5,
 * §6.5.4.1). If the request can be performed, the Rerouteing PINX returns a
 * result, sends a new SETUP containing `divertingLegInformation2` toward the
 * diverted-to user, and for CFU/CFB releases the leg toward the Served User
 * PINX. The result for CFU/CFB may be carried in that DISCONNECT. For CFNR the
 * leg to the served user stays until the diverted-to user alerts or answers, or
 * the served user answers (§6.5.4.1).
 *
 * An Incoming Gateway PINX may ask the public ISDN to do partial rerouteing
 * instead of acting as the Rerouteing PINX (ECMA-174 §6.6.1.3). On a return
 * error, reject, or timer T1 expiry the Served User PINX follows an
 * implementation-specific procedure (§6.5.3.2.5). T1 is at least 10 s (§6.9.1).
 *
 * Errors: `userNotSubscribed`, `notAvailable`, `resourceUnavailable`,
 * `invalidDivertedToNr`, `specialServiceNr`, `diversionToServedUserNr`,
 * `numberOfDiversionsExceeded`, `supplementaryServiceInteractionNotAllowed`,
 * and `unspecified`. `numberOfDiversionsExceeded` applies only to partial
 * rerouteing (§6.3.1). A Transferring PINX that has started call transfer by
 * rerouteing returns `supplementaryServiceInteractionNotAllowed` (§6.8.3.5.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callRerouteing OPERATION ::= {
 *     -- Sent from the Served User PINX to the Rerouteing PINX
 *     ARGUMENT SEQUENCE {
 *         rerouteingReason DiversionReason,
 *         originalRerouteingReason [0] IMPLICIT DiversionReason OPTIONAL,
 *         calledAddress Address,
 *         diversionCounter INTEGER (1..15),
 *         pSS1InfoElement PSS1InformationElement,
 *         -- The basic call information elements Bearer capability, High layer compatibility, Low
 *         -- layer compatibity and Progress indicator can be embedded in the
 *         -- pSS1InfoElement in accordance with 6.5.3.1.5.
 *         lastRerouteingNr [1] PresentedNumberUnscreened,
 *         subscriptionOption [2] IMPLICIT SubscriptionOption,
 *         callingPartySubaddress [3] PartySubaddress OPTIONAL,
 *         callingNumber [4] PresentedNumberScreened,
 *         callingName [5] Name OPTIONAL,
 *         originalCalledNr [6] PresentedNumberUnscreened OPTIONAL,
 *         redirectingName [7] Name OPTIONAL,
 *         originalCalledName [8] Name OPTIONAL,
 *         extension CHOICE {
 *             single [9] IMPLICIT Extension {{DiversionExtensionSet}},
 *             multiple [10] IMPLICIT SEQUENCE OF Extension {{DiversionExtensionSet}}
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
 *         | resourceUnavailable
 *         | invalidDivertedToNr
 *         | specialServiceNr
 *         | diversionToServedUserNr
 *         | numberOfDiversionsExceeded
 *         | supplementaryServiceInteractionNotAllowed
 *         | unspecified
 *     }
 *     -- The error value numberOfDiversionsExceeded applies only in case of partial rerouteing.
 *     CODE local: 19
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<callRerouteing_ArgumentType, callRerouteing_ResultType>}
 * @implements {OPERATION<callRerouteing_ArgumentType, callRerouteing_ResultType>}
 */
export
const callRerouteing: OPERATION<callRerouteing_ArgumentType, callRerouteing_ResultType> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_callRerouteing_ArgumentType,
        "&ResultType": _decode_callRerouteing_ResultType,
    },
    encoderFor: {
        "&ArgumentType": _encode_callRerouteing_ArgumentType,
        "&ResultType": _encode_callRerouteing_ResultType,
    },
    "&Errors": [ userNotSubscribed, notAvailable, resourceUnavailable, invalidDivertedToNr, specialServiceNr, diversionToServedUserNr, numberOfDiversionsExceeded, supplementaryServiceInteractionNotAllowed, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 19 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
