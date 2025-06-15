/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    FieldID,
    _decode_FieldID,
    _encode_FieldID,
} from "../ANSI-X9-42/FieldID.ta.mjs";

/**
 * @summary FiniteFields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FiniteFields  ::=  FieldID {{ FieldTypes }}
 * ```
 */
export type FiniteFields = FieldID; // DefinedType


let _cached_decoder_for_FiniteFields: $.ASN1Decoder<FiniteFields> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) FiniteFields
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FiniteFields} The decoded data structure.
 */
export function _decode_FiniteFields(el: _Element) {
    if (!_cached_decoder_for_FiniteFields) {
        _cached_decoder_for_FiniteFields = _decode_FieldID;
    }
    return _cached_decoder_for_FiniteFields(el);
}


let _cached_encoder_for_FiniteFields: $.ASN1Encoder<FiniteFields> | null = null;


/**
 * @summary Encodes a(n) FiniteFields into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiniteFields, encoded as an ASN.1 Element.
 */
export function _encode_FiniteFields(
    value: FiniteFields,
    elGetter: $.ASN1Encoder<FiniteFields>
) {
    if (!_cached_encoder_for_FiniteFields) {
        _cached_encoder_for_FiniteFields = _encode_FieldID;
    }
    return _cached_encoder_for_FiniteFields(value, elGetter);
}


/* eslint-enable */
