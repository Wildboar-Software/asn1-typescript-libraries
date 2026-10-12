/* eslint-disable */
import {
    ASN1Element as _Element,
    GeneralizedTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QualifiedMicrosecondDateTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QualifiedMicrosecondDateTime  ::=  GeneralizedTime
 * ```
 */
export
type QualifiedMicrosecondDateTime = GeneralizedTime; // GeneralizedTime

let _cached_decoder_for_QualifiedMicrosecondDateTime: $.ASN1Decoder<QualifiedMicrosecondDateTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QualifiedMicrosecondDateTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QualifiedMicrosecondDateTime (el: _Element): QualifiedMicrosecondDateTime {
    if (!_cached_decoder_for_QualifiedMicrosecondDateTime) { _cached_decoder_for_QualifiedMicrosecondDateTime = $._decodeGeneralizedTime; }
    return _cached_decoder_for_QualifiedMicrosecondDateTime(el);
}

let _cached_encoder_for_QualifiedMicrosecondDateTime: $.ASN1Encoder<QualifiedMicrosecondDateTime> | null = null;

/**
 * @summary Encodes a(n) QualifiedMicrosecondDateTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QualifiedMicrosecondDateTime, encoded as an ASN.1 Element.
 */
export
function _encode_QualifiedMicrosecondDateTime (value: QualifiedMicrosecondDateTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QualifiedMicrosecondDateTime) { _cached_encoder_for_QualifiedMicrosecondDateTime = $._encodeGeneralizedTime; }
    return _cached_encoder_for_QualifiedMicrosecondDateTime(value, elGetter);
}


/* eslint-enable */
