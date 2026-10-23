/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { _decode_cfnrDivertedLegFailed_ArgumentType, _encode_cfnrDivertedLegFailed_ArgumentType, cfnrDivertedLegFailed_ArgumentType } from "../Call-Diversion-Operations-asn1-97/cfnrDivertedLegFailed-ArgumentType.ta.mjs";

/**
 * @summary cfnrDivertedLegFailed
 * @description
 *
 * Notification that the diverted-to leg cleared during CFNR. The Rerouteing
 * PINX sends it to the Served User PINX in a FACILITY when, in state
 * CDR-Invoked, it receives DISCONNECT, RELEASE, or RELEASE COMPLETE from the
 * Diverted-to PINX (ECMA-174 §6.5.4.2, §6.3.1). Unconfirmed. ROSE local code
 * 23. The original call remains between the Originating PINX and the Served
 * User PINX. The Served User PINX stays in CDS-Inv-Idle and may notify the
 * served user (§6.5.3.2.5). The Interpretation APDU discards an unrecognised
 * invoke (§6.3.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cfnrDivertedLegFailed OPERATION ::= {
 *     -- Sent from the Rerouteing PINX to the Served User PINX
 *     -- This indicates that the diverted-to leg has been cleared during SS-CFNR execution.
 *     ARGUMENT CHOICE {
 *         null NULL,
 *         single [1] IMPLICIT Extension {{DiversionExtensionSet}},
 *         multiple [2] IMPLICIT SEQUENCE OF Extension {{DiversionExtensionSet}}
 *     }
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 23
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<cfnrDivertedLegFailed_ArgumentType>}
 * @implements {OPERATION<cfnrDivertedLegFailed_ArgumentType>}
 */
export
const cfnrDivertedLegFailed: OPERATION<cfnrDivertedLegFailed_ArgumentType> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_cfnrDivertedLegFailed_ArgumentType,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_cfnrDivertedLegFailed_ArgumentType,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 23 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
