/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IPTextRepresentedAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPTextRepresentedAddress  ::=  CHOICE {
 *    iPTextV4Address     [2] IMPLICIT IA5String  ( SIZE( 7 .. 15 ) ),
 *    iPTextV6Address     [3] IMPLICIT IA5String  ( SIZE( 15 .. 45 ) )}
 * ```
 */
export
type IPTextRepresentedAddress =
    { iPTextV4Address: IA5String } /* CHOICE_ALT_ROOT */
    | { iPTextV6Address: IA5String } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IPTextRepresentedAddress: $.ASN1Decoder<IPTextRepresentedAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPTextRepresentedAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPTextRepresentedAddress (el: _Element): IPTextRepresentedAddress {
    if (!_cached_decoder_for_IPTextRepresentedAddress) { _cached_decoder_for_IPTextRepresentedAddress = $._decode_inextensible_choice<IPTextRepresentedAddress>({
    "CONTEXT 2": [ "iPTextV4Address", $._decode_implicit<IA5String>(() => $._decodeIA5String) ],
    "CONTEXT 3": [ "iPTextV6Address", $._decode_implicit<IA5String>(() => $._decodeIA5String) ]
}); }
    return _cached_decoder_for_IPTextRepresentedAddress(el);
}

let _cached_encoder_for_IPTextRepresentedAddress: $.ASN1Encoder<IPTextRepresentedAddress> | null = null;

/**
 * @summary Encodes a(n) IPTextRepresentedAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPTextRepresentedAddress, encoded as an ASN.1 Element.
 */
export
function _encode_IPTextRepresentedAddress (value: IPTextRepresentedAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPTextRepresentedAddress) { _cached_encoder_for_IPTextRepresentedAddress = $._encode_choice<IPTextRepresentedAddress>({
    "iPTextV4Address": $._encode_implicit(_TagClass.context, 2, () => $._encodeIA5String, $.BER),
    "iPTextV6Address": $._encode_implicit(_TagClass.context, 3, () => $._encodeIA5String, $.BER),
}, $.BER); }
    return _cached_encoder_for_IPTextRepresentedAddress(value, elGetter);
}


/* eslint-enable */
