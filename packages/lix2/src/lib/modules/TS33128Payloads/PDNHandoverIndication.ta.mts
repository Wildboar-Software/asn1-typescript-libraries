/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDNHandoverIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDNHandoverIndication  ::=  BOOLEAN
 * ```
 */
export
type PDNHandoverIndication = BOOLEAN; // BooleanType

let _cached_decoder_for_PDNHandoverIndication: $.ASN1Decoder<PDNHandoverIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDNHandoverIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDNHandoverIndication (el: _Element): PDNHandoverIndication {
    if (!_cached_decoder_for_PDNHandoverIndication) { _cached_decoder_for_PDNHandoverIndication = $._decodeBoolean; }
    return _cached_decoder_for_PDNHandoverIndication(el);
}

let _cached_encoder_for_PDNHandoverIndication: $.ASN1Encoder<PDNHandoverIndication> | null = null;

/**
 * @summary Encodes a(n) PDNHandoverIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDNHandoverIndication, encoded as an ASN.1 Element.
 */
export
function _encode_PDNHandoverIndication (value: PDNHandoverIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDNHandoverIndication) { _cached_encoder_for_PDNHandoverIndication = $._encodeBoolean; }
    return _cached_encoder_for_PDNHandoverIndication(value, elGetter);
}


/* eslint-enable */
