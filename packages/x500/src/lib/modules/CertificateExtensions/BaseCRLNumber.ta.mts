/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CRLNumber,
    _decode_CRLNumber,
    _encode_CRLNumber,
} from "../CertificateExtensions/CRLNumber.ta.mjs";
/**
 * @summary BaseCRLNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BaseCRLNumber  ::=  CRLNumber
 * ```
 */
export type BaseCRLNumber = CRLNumber; // DefinedType

let _cached_decoder_for_BaseCRLNumber: $.ASN1Decoder<BaseCRLNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BaseCRLNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BaseCRLNumber} The decoded data structure.
 */
export function _decode_BaseCRLNumber(el: _Element): BaseCRLNumber {
    if (!_cached_decoder_for_BaseCRLNumber) {
        _cached_decoder_for_BaseCRLNumber = _decode_CRLNumber;
    }
    return _cached_decoder_for_BaseCRLNumber(el);
}

let _cached_encoder_for_BaseCRLNumber: $.ASN1Encoder<BaseCRLNumber> | null = null;

/**
 * @summary Encodes a(n) BaseCRLNumber into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BaseCRLNumber, encoded as an ASN.1 Element.
 */
export function _encode_BaseCRLNumber(
    value: BaseCRLNumber,
    elGetter: $.ASN1Encoder<BaseCRLNumber>
): _Element {
    if (!_cached_encoder_for_BaseCRLNumber) {
        _cached_encoder_for_BaseCRLNumber = _encode_CRLNumber;
    }
    return _cached_encoder_for_BaseCRLNumber(value, elGetter);
}


/* eslint-enable */
