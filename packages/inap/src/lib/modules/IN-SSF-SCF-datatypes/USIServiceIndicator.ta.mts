/* eslint-disable */
import {
    ASN1Element as _Element,
    type OBJECT_IDENTIFIER,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary USIServiceIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * USIServiceIndicator  ::=  CHOICE {
 *   global  OBJECT IDENTIFIER,
 *   local
 *     OCTET STRING
 *       
 * }
 * ```
 */
export
type USIServiceIndicator =
    { global: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { local: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_USIServiceIndicator: $.ASN1Decoder<USIServiceIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) USIServiceIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_USIServiceIndicator (el: _Element): USIServiceIndicator {
    if (!_cached_decoder_for_USIServiceIndicator) { _cached_decoder_for_USIServiceIndicator = $._decode_inextensible_choice<USIServiceIndicator>({
    "UNIVERSAL 6": [ "global", $._decodeObjectIdentifier ],
    "UNIVERSAL 4": [ "local", $._decodeOctetString ]
}); }
    return _cached_decoder_for_USIServiceIndicator(el);
}

let _cached_encoder_for_USIServiceIndicator: $.ASN1Encoder<USIServiceIndicator> | null = null;

/**
 * @summary Encodes a(n) USIServiceIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The USIServiceIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_USIServiceIndicator (value: USIServiceIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_USIServiceIndicator) { _cached_encoder_for_USIServiceIndicator = $._encode_choice<USIServiceIndicator>({
    "global": $._encodeObjectIdentifier,
    "local": $._encodeOctetString,
}, $.BER); }
    return _cached_encoder_for_USIServiceIndicator(value, elGetter);
}


/* eslint-enable */
