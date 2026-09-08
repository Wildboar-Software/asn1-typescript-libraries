/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AE_title,
    _decode_AE_title,
    _encode_AE_title,
} from "@wildboar/acse";

/**
 * @summary DestinationAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DestinationAddress  ::=  CHOICE {
 *   singleAddress  AE-title,
 *   groupAddress   GraphicString
 * }
 * ```
 */
export
type DestinationAddress =
    { singleAddress: AE_title } /* CHOICE_ALT_ROOT */
    | { groupAddress: GraphicString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DestinationAddress: $.ASN1Decoder<DestinationAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DestinationAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DestinationAddress (el: _Element): DestinationAddress {
    if (!_cached_decoder_for_DestinationAddress) { _cached_decoder_for_DestinationAddress = $._decode_inextensible_choice<DestinationAddress>({
    "*": [ "singleAddress", _decode_AE_title ],
    "UNIVERSAL 25": [ "groupAddress", $._decodeGraphicString ]
}); }
    return _cached_decoder_for_DestinationAddress(el);
}

let _cached_encoder_for_DestinationAddress: $.ASN1Encoder<DestinationAddress> | null = null;

/**
 * @summary Encodes a(n) DestinationAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DestinationAddress, encoded as an ASN.1 Element.
 */
export
function _encode_DestinationAddress (value: DestinationAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DestinationAddress) { _cached_encoder_for_DestinationAddress = $._encode_choice<DestinationAddress>({
    "singleAddress": _encode_AE_title,
    "groupAddress": $._encodeGraphicString,
}, $.BER); }
    return _cached_encoder_for_DestinationAddress(value, elGetter);
}


/* eslint-enable */
