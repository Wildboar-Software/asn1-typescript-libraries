/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QOSFlowDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QOSFlowDescription  ::=  OCTET STRING
 * ```
 */
export
type QOSFlowDescription = OCTET_STRING; // OctetStringType

let _cached_decoder_for_QOSFlowDescription: $.ASN1Decoder<QOSFlowDescription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QOSFlowDescription
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QOSFlowDescription (el: _Element): QOSFlowDescription {
    if (!_cached_decoder_for_QOSFlowDescription) { _cached_decoder_for_QOSFlowDescription = $._decodeOctetString; }
    return _cached_decoder_for_QOSFlowDescription(el);
}

let _cached_encoder_for_QOSFlowDescription: $.ASN1Encoder<QOSFlowDescription> | null = null;

/**
 * @summary Encodes a(n) QOSFlowDescription into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QOSFlowDescription, encoded as an ASN.1 Element.
 */
export
function _encode_QOSFlowDescription (value: QOSFlowDescription, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QOSFlowDescription) { _cached_encoder_for_QOSFlowDescription = $._encodeOctetString; }
    return _cached_encoder_for_QOSFlowDescription(value, elGetter);
}


/* eslint-enable */
