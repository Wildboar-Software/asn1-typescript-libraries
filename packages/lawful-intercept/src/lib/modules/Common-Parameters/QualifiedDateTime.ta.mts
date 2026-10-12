/* eslint-disable */
import {
    ASN1Element as _Element,
    GeneralizedTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QualifiedDateTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QualifiedDateTime  ::=  GeneralizedTime
 * ```
 */
export
type QualifiedDateTime = GeneralizedTime; // GeneralizedTime

let _cached_decoder_for_QualifiedDateTime: $.ASN1Decoder<QualifiedDateTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QualifiedDateTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QualifiedDateTime (el: _Element): QualifiedDateTime {
    if (!_cached_decoder_for_QualifiedDateTime) { _cached_decoder_for_QualifiedDateTime = $._decodeGeneralizedTime; }
    return _cached_decoder_for_QualifiedDateTime(el);
}

let _cached_encoder_for_QualifiedDateTime: $.ASN1Encoder<QualifiedDateTime> | null = null;

/**
 * @summary Encodes a(n) QualifiedDateTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QualifiedDateTime, encoded as an ASN.1 Element.
 */
export
function _encode_QualifiedDateTime (value: QualifiedDateTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QualifiedDateTime) { _cached_encoder_for_QualifiedDateTime = $._encodeGeneralizedTime; }
    return _cached_encoder_for_QualifiedDateTime(value, elGetter);
}


/* eslint-enable */
