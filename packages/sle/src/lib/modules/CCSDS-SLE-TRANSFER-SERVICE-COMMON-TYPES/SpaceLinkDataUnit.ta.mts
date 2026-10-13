/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SpaceLinkDataUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpaceLinkDataUnit       ::=    OCTET STRING (SIZE (1 .. 65536))
 * ```
 */
export
type SpaceLinkDataUnit = OCTET_STRING; // OctetStringType

let _cached_decoder_for_SpaceLinkDataUnit: $.ASN1Decoder<SpaceLinkDataUnit> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpaceLinkDataUnit
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SpaceLinkDataUnit (el: _Element): SpaceLinkDataUnit {
    if (!_cached_decoder_for_SpaceLinkDataUnit) { _cached_decoder_for_SpaceLinkDataUnit = $._decodeOctetString; }
    return _cached_decoder_for_SpaceLinkDataUnit(el);
}

let _cached_encoder_for_SpaceLinkDataUnit: $.ASN1Encoder<SpaceLinkDataUnit> | null = null;

/**
 * @summary Encodes a(n) SpaceLinkDataUnit into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpaceLinkDataUnit, encoded as an ASN.1 Element.
 */
export
function _encode_SpaceLinkDataUnit (value: SpaceLinkDataUnit, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SpaceLinkDataUnit) { _cached_encoder_for_SpaceLinkDataUnit = $._encodeOctetString; }
    return _cached_encoder_for_SpaceLinkDataUnit(value, elGetter);
}


/* eslint-enable */
