/* eslint-disable */
import {
    ASN1Element as _Element,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ResourceReportId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceReportId  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type ResourceReportId = OBJECT_IDENTIFIER; // ObjectIdentifierType

let _cached_decoder_for_ResourceReportId: $.ASN1Decoder<ResourceReportId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResourceReportId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResourceReportId (el: _Element): ResourceReportId {
    if (!_cached_decoder_for_ResourceReportId) { _cached_decoder_for_ResourceReportId = $._decodeObjectIdentifier; }
    return _cached_decoder_for_ResourceReportId(el);
}

let _cached_encoder_for_ResourceReportId: $.ASN1Encoder<ResourceReportId> | null = null;

/**
 * @summary Encodes a(n) ResourceReportId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceReportId, encoded as an ASN.1 Element.
 */
export
function _encode_ResourceReportId (value: ResourceReportId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResourceReportId) { _cached_encoder_for_ResourceReportId = $._encodeObjectIdentifier; }
    return _cached_encoder_for_ResourceReportId(value, elGetter);
}


/* eslint-enable */
