/* eslint-disable */
import {
    EXTERNAL,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CreditCardInfo, _decode_CreditCardInfo, _encode_CreditCardInfo } from "../ESFormat-ItemOrder/CreditCardInfo.ta.mjs";


/**
 * @summary ClientPartToKeep_addlBilling_paymentMethod
 * @description
 * 
 * Payment method for an item order: bill invoice, prepay, deposit account,
 * credit card, card information previously supplied, or a private method.
 * `privateKnown` and `privateNotKnown` are not defined beyond those names.
 * Credit-card details, when used, are the card information in this module.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartToKeep-addlBilling-paymentMethod ::= CHOICE {
 *     billInvoice [0] IMPLICIT NULL,
 *     prepay [1] IMPLICIT NULL,
 *     depositAccount [2] IMPLICIT NULL,
 *     creditCard [3] IMPLICIT CreditCardInfo,
 *     cardInfoPreviouslySupplied [4] IMPLICIT NULL,
 *     privateKnown [5] IMPLICIT NULL,
 *     privateNotKnown [6] IMPLICIT EXTERNAL
 * }
 * ```
 */
export
type ClientPartToKeep_addlBilling_paymentMethod =
    { billInvoice: NULL } /* CHOICE_ALT_ROOT */
    | { prepay: NULL } /* CHOICE_ALT_ROOT */
    | { depositAccount: NULL } /* CHOICE_ALT_ROOT */
    | { creditCard: CreditCardInfo } /* CHOICE_ALT_ROOT */
    | { cardInfoPreviouslySupplied: NULL } /* CHOICE_ALT_ROOT */
    | { privateKnown: NULL } /* CHOICE_ALT_ROOT */
    | { privateNotKnown: EXTERNAL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ClientPartToKeep_addlBilling_paymentMethod: $.ASN1Decoder<ClientPartToKeep_addlBilling_paymentMethod> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClientPartToKeep_addlBilling_paymentMethod
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClientPartToKeep_addlBilling_paymentMethod (el: _Element): ClientPartToKeep_addlBilling_paymentMethod {
    if (!_cached_decoder_for_ClientPartToKeep_addlBilling_paymentMethod) { _cached_decoder_for_ClientPartToKeep_addlBilling_paymentMethod = $._decode_inextensible_choice<ClientPartToKeep_addlBilling_paymentMethod>({
    "CONTEXT 0": [ "billInvoice", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "prepay", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "depositAccount", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "creditCard", $._decode_implicit<CreditCardInfo>(() => _decode_CreditCardInfo) ],
    "CONTEXT 4": [ "cardInfoPreviouslySupplied", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 5": [ "privateKnown", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 6": [ "privateNotKnown", $._decode_implicit<EXTERNAL>(() => $._decodeExternal) ]
}); }
    return _cached_decoder_for_ClientPartToKeep_addlBilling_paymentMethod(el);
}

let _cached_encoder_for_ClientPartToKeep_addlBilling_paymentMethod: $.ASN1Encoder<ClientPartToKeep_addlBilling_paymentMethod> | null = null;

/**
 * @summary Encodes a(n) ClientPartToKeep_addlBilling_paymentMethod into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientPartToKeep_addlBilling_paymentMethod, encoded as an ASN.1 Element.
 */
export
function _encode_ClientPartToKeep_addlBilling_paymentMethod (value: ClientPartToKeep_addlBilling_paymentMethod, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClientPartToKeep_addlBilling_paymentMethod) { _cached_encoder_for_ClientPartToKeep_addlBilling_paymentMethod = $._encode_choice<ClientPartToKeep_addlBilling_paymentMethod>({
    "billInvoice": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "prepay": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "depositAccount": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "creditCard": $._encode_implicit(_TagClass.context, 3, () => _encode_CreditCardInfo, $.BER),
    "cardInfoPreviouslySupplied": $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER),
    "privateKnown": $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER),
    "privateNotKnown": $._encode_implicit(_TagClass.context, 6, () => $._encodeExternal, $.BER),
}, $.BER); }
    return _cached_encoder_for_ClientPartToKeep_addlBilling_paymentMethod(value, elGetter);
}


/* eslint-enable */
