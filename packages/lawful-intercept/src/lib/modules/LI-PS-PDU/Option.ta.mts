/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Option
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Option  ::=  CHOICE
 * {
 *     pDUAcknowledgement  [0] NULL,
 *     ...
 * }
 * ```
 */
export
type Option =
    { pDUAcknowledgement: NULL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Option: $.ASN1Decoder<Option> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Option
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Option (el: _Element): Option {
    if (!_cached_decoder_for_Option) { _cached_decoder_for_Option = $._decode_extensible_choice<Option>({
    "CONTEXT 0": [ "pDUAcknowledgement", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_Option(el);
}

let _cached_encoder_for_Option: $.ASN1Encoder<Option> | null = null;

/**
 * @summary Encodes a(n) Option into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Option, encoded as an ASN.1 Element.
 */
export
function _encode_Option (value: Option, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Option) { _cached_encoder_for_Option = $._encode_choice<Option>({
    "pDUAcknowledgement": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_Option(value, elGetter);
}


/* eslint-enable */
