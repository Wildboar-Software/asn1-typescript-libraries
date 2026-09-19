/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OSIIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OSIIndicator  ::=  [129] IMPLICIT BOOLEAN
 * ```
 */
export
type OSIIndicator = BOOLEAN; // BooleanType

let _cached_decoder_for_OSIIndicator: $.ASN1Decoder<OSIIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OSIIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OSIIndicator (el: _Element): OSIIndicator {
    if (!_cached_decoder_for_OSIIndicator) { _cached_decoder_for_OSIIndicator = $._decode_implicit<OSIIndicator>(() => $._decodeBoolean); }
    return _cached_decoder_for_OSIIndicator(el);
}

let _cached_encoder_for_OSIIndicator: $.ASN1Encoder<OSIIndicator> | null = null;

/**
 * @summary Encodes a(n) OSIIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OSIIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_OSIIndicator (value: OSIIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OSIIndicator) { _cached_encoder_for_OSIIndicator = $._encode_implicit(_TagClass.context, 129, () => $._encodeBoolean, $.BER); }
    return _cached_encoder_for_OSIIndicator(value, elGetter);
}


/* eslint-enable */
