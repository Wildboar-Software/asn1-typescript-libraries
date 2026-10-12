/* eslint-disable */
import {
    ASN1Element as _Element,
    VisibleString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CaseId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CaseId  ::=  VisibleString (SIZE(1..25, ...))
 * ```
 */
export
type CaseId = VisibleString; // VisibleString

let _cached_decoder_for_CaseId: $.ASN1Decoder<CaseId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CaseId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CaseId (el: _Element): CaseId {
    if (!_cached_decoder_for_CaseId) { _cached_decoder_for_CaseId = $._decodeVisibleString; }
    return _cached_decoder_for_CaseId(el);
}

let _cached_encoder_for_CaseId: $.ASN1Encoder<CaseId> | null = null;

/**
 * @summary Encodes a(n) CaseId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CaseId, encoded as an ASN.1 Element.
 */
export
function _encode_CaseId (value: CaseId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CaseId) { _cached_encoder_for_CaseId = $._encodeVisibleString; }
    return _cached_encoder_for_CaseId(value, elGetter);
}


/* eslint-enable */
