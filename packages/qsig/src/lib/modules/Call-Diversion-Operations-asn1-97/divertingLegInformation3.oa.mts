/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { _decode_divertingLegInformation3_ArgumentType, _encode_divertingLegInformation3_ArgumentType, divertingLegInformation3_ArgumentType } from "../Call-Diversion-Operations-asn1-97/divertingLegInformation3-ArgumentType.ta.mjs";

/**
 * @summary divertingLegInformation3
 * @description
 *
 * Notification from the Diverted-to PINX to the Originating PINX of whether the
 * diverted-to number may be presented, and optionally the diverted-to user's
 * name (ECMA-174 §6.5.5.1.1). Unconfirmed. ROSE local code 22. Sent in
 * FACILITY, ALERTING, or CONNECT once presentation restriction of the
 * diverted-to number is known. For CFNR it is not sent in FACILITY before an
 * ALERTING has been sent. If it has not been sent earlier, it is sent in the
 * CONNECT.
 *
 * The Originating PINX presents `nominatedNr` from the last
 * `divertingLegInformation1` only when every such notification had
 * `notificationWithDivertedToNr`, this and any earlier
 * `presentationAllowedIndicator` allows presentation, and no diverted-to number
 * was already presented unless a later `cfnr` reason was received (ECMA-174
 * §6.5.1.1). `redirectionName` may be presented only under those conditions and
 * when it is not marked presentation restricted. Receipt in CONNECT returns the
 * Originating PINX to CDO-Idle.
 *
 * If this notification is missing up to and including CONNECT, an Incoming
 * Gateway PINX tells the public ISDN that presentation is restricted (ECMA-174
 * §6.6.1.1). If the public ISDN gives the Outgoing Gateway PINX nothing from
 * which to build it, that PINX takes no specific action and the diverted-to
 * number is not presented (§6.6.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * divertingLegInformation3 OPERATION ::= {
 *     -- Sent from the Diverted-to PINX to the Originating PINX
 *     ARGUMENT SEQUENCE {
 *         presentationAllowedIndicator PresentationAllowedIndicator,
 *         redirectionName [0] Name OPTIONAL,
 *         extension CHOICE {
 *             single [1] IMPLICIT Extension {{DiversionExtensionSet}},
 *             multiple [2] IMPLICIT SEQUENCE OF Extension {{DiversionExtensionSet}}
 *         } OPTIONAL
 *     }
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 22
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<divertingLegInformation3_ArgumentType>}
 * @implements {OPERATION<divertingLegInformation3_ArgumentType>}
 */
export
const divertingLegInformation3: OPERATION<divertingLegInformation3_ArgumentType> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_divertingLegInformation3_ArgumentType,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_divertingLegInformation3_ArgumentType,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 22 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
