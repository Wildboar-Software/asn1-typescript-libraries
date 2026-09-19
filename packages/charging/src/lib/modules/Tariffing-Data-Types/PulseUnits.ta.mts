/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PulseUnits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PulseUnits  ::=  OCTET STRING (SIZE(1))
 * ```
 */
export
type PulseUnits = OCTET_STRING; // OctetStringType

let _cached_decoder_for_PulseUnits: $.ASN1Decoder<PulseUnits> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PulseUnits
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PulseUnits (el: _Element): PulseUnits {
    if (!_cached_decoder_for_PulseUnits) { _cached_decoder_for_PulseUnits = $._decodeOctetString; }
    return _cached_decoder_for_PulseUnits(el);
}

let _cached_encoder_for_PulseUnits: $.ASN1Encoder<PulseUnits> | null = null;

/**
 * @summary Encodes a(n) PulseUnits into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PulseUnits, encoded as an ASN.1 Element.
 */
export
function _encode_PulseUnits (value: PulseUnits, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PulseUnits) { _cached_encoder_for_PulseUnits = $._encodeOctetString; }
    return _cached_encoder_for_PulseUnits(value, elGetter);
}


/* eslint-enable */
