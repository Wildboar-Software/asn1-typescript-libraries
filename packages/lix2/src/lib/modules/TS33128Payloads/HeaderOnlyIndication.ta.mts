/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HeaderOnlyIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HeaderOnlyIndication  ::=  BOOLEAN
 * ```
 */
export
type HeaderOnlyIndication = BOOLEAN; // BooleanType

let _cached_decoder_for_HeaderOnlyIndication: $.ASN1Decoder<HeaderOnlyIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HeaderOnlyIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HeaderOnlyIndication (el: _Element): HeaderOnlyIndication {
    if (!_cached_decoder_for_HeaderOnlyIndication) { _cached_decoder_for_HeaderOnlyIndication = $._decodeBoolean; }
    return _cached_decoder_for_HeaderOnlyIndication(el);
}

let _cached_encoder_for_HeaderOnlyIndication: $.ASN1Encoder<HeaderOnlyIndication> | null = null;

/**
 * @summary Encodes a(n) HeaderOnlyIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HeaderOnlyIndication, encoded as an ASN.1 Element.
 */
export
function _encode_HeaderOnlyIndication (value: HeaderOnlyIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HeaderOnlyIndication) { _cached_encoder_for_HeaderOnlyIndication = $._encodeBoolean; }
    return _cached_encoder_for_HeaderOnlyIndication(value, elGetter);
}


/* eslint-enable */
