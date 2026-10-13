/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EncodedString, _decode_EncodedString, _encode_EncodedString } from "../MmsHI2Operations/EncodedString.ta.mjs";
// export { EncodedString, _decode_EncodedString, _encode_EncodedString } from "../MmsHI2Operations/EncodedString.ta.mjs";


/**
 * @summary FromAddresses
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FromAddresses  ::=  CHOICE
 * {
 *     actualAddress    [1] EncodedString,
 *     insertToken        [2] NULL,
 *     ...
 * }
 * ```
 */
export
type FromAddresses =
    { actualAddress: EncodedString } /* CHOICE_ALT_ROOT */
    | { insertToken: NULL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_FromAddresses: $.ASN1Decoder<FromAddresses> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FromAddresses
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FromAddresses (el: _Element): FromAddresses {
    if (!_cached_decoder_for_FromAddresses) { _cached_decoder_for_FromAddresses = $._decode_extensible_choice<FromAddresses>({
    "CONTEXT 1": [ "actualAddress", $._decode_explicit<EncodedString>(() => _decode_EncodedString) ],
    "CONTEXT 2": [ "insertToken", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_FromAddresses(el);
}

let _cached_encoder_for_FromAddresses: $.ASN1Encoder<FromAddresses> | null = null;

/**
 * @summary Encodes a(n) FromAddresses into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FromAddresses, encoded as an ASN.1 Element.
 */
export
function _encode_FromAddresses (value: FromAddresses, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FromAddresses) { _cached_encoder_for_FromAddresses = $._encode_choice<FromAddresses>({
    "actualAddress": $._encode_explicit(_TagClass.context, 1, () => _encode_EncodedString, $.BER),
    "insertToken": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_FromAddresses(value, elGetter);
}


/* eslint-enable */
