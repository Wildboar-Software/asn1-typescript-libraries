/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { _decode_divertingLegInformation2_ArgumentType, _encode_divertingLegInformation2_ArgumentType, divertingLegInformation2_ArgumentType } from "../Call-Diversion-Operations-asn1-97/divertingLegInformation2-ArgumentType.ta.mjs";

/**
 * @summary divertingLegInformation2
 * @description
 *
 * Notification from the Rerouteing PINX to the Diverted-to PINX, carried in the
 * SETUP of the diverted call (ECMA-174 §6.5.4.1). Unconfirmed. ROSE local code
 * 21. The Interpretation APDU discards an unrecognised invoke (§6.3.2.1).
 *
 * On receipt the Diverted-to PINX enters CDF-Inv-Wait and, if the called user
 * is able and authorized, delivers a diversion notification, the redirecting
 * number, the original called number when diversion was multiple, and
 * optionally the redirecting name and the original called name (ECMA-174
 * §6.5.5.1.1). `divertingNr` is mandatory except when interworking (§6.3.1).
 *
 * An Incoming Gateway PINX also sends this in the SETUP when the public ISDN
 * says the incoming call was already diverted (ECMA-174 §6.6.1.2). If that
 * network indicates a restricted name but does not provide it,
 * `redirectingName` or `originalCalledName` is omitted or is a restricted null
 * name.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * divertingLegInformation2 OPERATION ::= {
 *     -- Sent from the Rerouteing PINX to the Diverted-to PINX
 *     ARGUMENT SEQUENCE {
 *         diversionCounter INTEGER (1..15),
 *         diversionReason DiversionReason,
 *         originalDiversionReason [0] IMPLICIT DiversionReason OPTIONAL,
 *         divertingNr [1] PresentedNumberUnscreened OPTIONAL,
 *         originalCalledNr [2] PresentedNumberUnscreened OPTIONAL,
 *         redirectingName [3] Name OPTIONAL,
 *         originalCalledName [4] Name OPTIONAL,
 *         extension CHOICE {
 *             single [5] IMPLICIT Extension {{DiversionExtensionSet}},
 *             multiple [6] IMPLICIT SEQUENCE OF Extension {{DiversionExtensionSet}}
 *         } OPTIONAL
 *     }
 *     -- The divertingNr element is mandatory except in the case of interworking.
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 21
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<divertingLegInformation2_ArgumentType>}
 * @implements {OPERATION<divertingLegInformation2_ArgumentType>}
 */
export
const divertingLegInformation2: OPERATION<divertingLegInformation2_ArgumentType> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_divertingLegInformation2_ArgumentType,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_divertingLegInformation2_ArgumentType,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 21 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
