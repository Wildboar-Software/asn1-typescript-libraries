/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDUSessionID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDUSessionID  ::=  INTEGER (0..255)
 * ```
 */
export
type PDUSessionID = INTEGER;

let _cached_decoder_for_PDUSessionID: $.ASN1Decoder<PDUSessionID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDUSessionID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDUSessionID (el: _Element): PDUSessionID {
    if (!_cached_decoder_for_PDUSessionID) { _cached_decoder_for_PDUSessionID = $._decodeInteger; }
    return _cached_decoder_for_PDUSessionID(el);
}

let _cached_encoder_for_PDUSessionID: $.ASN1Encoder<PDUSessionID> | null = null;

/**
 * @summary Encodes a(n) PDUSessionID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDUSessionID, encoded as an ASN.1 Element.
 */
export
function _encode_PDUSessionID (value: PDUSessionID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDUSessionID) { _cached_encoder_for_PDUSessionID = $._encodeInteger; }
    return _cached_encoder_for_PDUSessionID(value, elGetter);
}


/* eslint-enable */
