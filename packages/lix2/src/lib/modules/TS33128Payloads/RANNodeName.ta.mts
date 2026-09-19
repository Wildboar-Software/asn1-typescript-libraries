/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RANNodeName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RANNodeName  ::=  CHOICE
 * {
 *     rANNodeNameVisible  [1] OCTET STRING,
 *     rANNodeNameUTF8     [2] UTF8String
 * }
 * ```
 */
export
type RANNodeName =
    { rANNodeNameVisible: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { rANNodeNameUTF8: UTF8String } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RANNodeName: $.ASN1Decoder<RANNodeName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RANNodeName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RANNodeName (el: _Element): RANNodeName {
    if (!_cached_decoder_for_RANNodeName) { _cached_decoder_for_RANNodeName = $._decode_inextensible_choice<RANNodeName>({
    "CONTEXT 1": [ "rANNodeNameVisible", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "rANNodeNameUTF8", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ]
}); }
    return _cached_decoder_for_RANNodeName(el);
}

let _cached_encoder_for_RANNodeName: $.ASN1Encoder<RANNodeName> | null = null;

/**
 * @summary Encodes a(n) RANNodeName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RANNodeName, encoded as an ASN.1 Element.
 */
export
function _encode_RANNodeName (value: RANNodeName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RANNodeName) { _cached_encoder_for_RANNodeName = $._encode_choice<RANNodeName>({
    "rANNodeNameVisible": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "rANNodeNameUTF8": $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER),
}, $.BER); }
    return _cached_encoder_for_RANNodeName(value, elGetter);
}


/* eslint-enable */
