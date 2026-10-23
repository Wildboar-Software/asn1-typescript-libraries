/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { _decode_divertingLegInformation1_ArgumentType, _encode_divertingLegInformation1_ArgumentType, divertingLegInformation1_ArgumentType } from "../Call-Diversion-Operations-asn1-97/divertingLegInformation1-ArgumentType.ta.mjs";

/**
 * @summary divertingLegInformation1
 * @description
 *
 * Notification from the Rerouteing PINX to the Originating PINX that the call
 * is diverting (ECMA-174 §6.3.1, §6.5.4.1). Unconfirmed: no result and no
 * errors. ROSE local code 20. The argument's `diversionReason`,
 * `subscriptionOption`, and `nominatedNr` are taken from `callRerouteing`'s
 * `rerouteingReason`, `subscriptionOption`, and `calledAddress`.
 *
 * For CFU/CFB it is sent in a call-related FACILITY after the new SETUP, and
 * the Originating and Diverted-to legs are then joined. For CFNR it is sent in
 * a FACILITY when ALERTING arrives from the Diverted-to PINX, or in the CONNECT
 * if no ALERTING arrived (ECMA-174 §6.5.4.1). The Interpretation APDU discards
 * an unrecognised invoke (§6.3.2.1).
 *
 * The Originating PINX notifies the calling user according to
 * `subscriptionOption`. It does not present the diverted-to number at this
 * stage (ECMA-174 §6.5.1.1). A further `cfu` or `cfb` is not notified. A
 * further `cfnr` may be, unless any subscription option for the call was
 * `noNotification`. If diversion occurs in another network, the Originating
 * PINX does not receive this notification or `divertingLegInformation3`. It may
 * instead receive a Notification indicator from the Outgoing Gateway PINX
 * (§6.5.1.1, §6.3.2.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * divertingLegInformation1 OPERATION ::= {
 *     -- Sent from the Rerouteing PINX to the Originating PINX
 *     ARGUMENT SEQUENCE {
 *         diversionReason DiversionReason,
 *         subscriptionOption SubscriptionOption,
 *         nominatedNr PartyNumber,
 *         extension CHOICE {
 *             single [9] IMPLICIT Extension {{DiversionExtensionSet}},
 *             multiple [10] IMPLICIT SEQUENCE OF Extension {{DiversionExtensionSet}}
 *         } OPTIONAL
 *     }
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 20
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<divertingLegInformation1_ArgumentType>}
 * @implements {OPERATION<divertingLegInformation1_ArgumentType>}
 */
export
const divertingLegInformation1: OPERATION<divertingLegInformation1_ArgumentType> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_divertingLegInformation1_ArgumentType,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_divertingLegInformation1_ArgumentType,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 20 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
