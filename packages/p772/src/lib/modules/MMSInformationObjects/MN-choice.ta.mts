/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MN_choice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MN-choice ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type MN_choice =
    { mn_non_receipt_fields: NonReceiptFields } /* CHOICE_ALT_ROOT */
    | { mn_receipt_fields: ReceiptFields } /* CHOICE_ALT_ROOT */
    | { mn_other_notification_type_fields: OtherNotificationTypeFields } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MN_choice: $.ASN1Decoder<MN_choice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MN_choice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MN_choice (el: _Element): MN_choice {
    if (!_cached_decoder_for_MN_choice) { _cached_decoder_for_MN_choice = $._decode_inextensible_choice<MN_choice>({
    "CONTEXT 0": [ "mn_non_receipt_fields", $._decode_implicit<NonReceiptFields>(() => _decode_NonReceiptFields) ],
    "CONTEXT 1": [ "mn_receipt_fields", $._decode_implicit<ReceiptFields>(() => _decode_ReceiptFields) ],
    "CONTEXT 2": [ "mn_other_notification_type_fields", $._decode_implicit<OtherNotificationTypeFields>(() => _decode_OtherNotificationTypeFields) ]
}); }
    return _cached_decoder_for_MN_choice(el);
}

let _cached_encoder_for_MN_choice: $.ASN1Encoder<MN_choice> | null = null;

/**
 * @summary Encodes a(n) MN_choice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MN_choice, encoded as an ASN.1 Element.
 */
export
function _encode_MN_choice (value: MN_choice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MN_choice) { _cached_encoder_for_MN_choice = $._encode_choice<MN_choice>({
    "mn_non_receipt_fields": $._encode_implicit(_TagClass.context, 0, () => _encode_NonReceiptFields, $.BER),
    "mn_receipt_fields": $._encode_implicit(_TagClass.context, 1, () => _encode_ReceiptFields, $.BER),
    "mn_other_notification_type_fields": $._encode_implicit(_TagClass.context, 2, () => _encode_OtherNotificationTypeFields, $.BER),
}, $.BER); }
    return _cached_encoder_for_MN_choice(value, elGetter);
}


/* eslint-enable */
