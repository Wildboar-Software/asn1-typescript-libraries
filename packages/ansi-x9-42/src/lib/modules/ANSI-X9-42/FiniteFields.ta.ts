/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    FieldID,
    _decode_FieldID,
    _encode_FieldID,
} from "../ANSI-X9-42/FieldID.ta.js";
export {
    FieldID,
    _decode_FieldID,
    _encode_FieldID,
} from "../ANSI-X9-42/FieldID.ta.js";

/* START_OF_SYMBOL_DEFINITION FiniteFields */
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
/* END_OF_SYMBOL_DEFINITION FiniteFields */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FiniteFields */
let _cached_decoder_for_FiniteFields: $.ASN1Decoder<FiniteFields> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FiniteFields */

/* START_OF_SYMBOL_DEFINITION _decode_FiniteFields */
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
/* END_OF_SYMBOL_DEFINITION _decode_FiniteFields */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FiniteFields */
let _cached_encoder_for_FiniteFields: $.ASN1Encoder<FiniteFields> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FiniteFields */

/* START_OF_SYMBOL_DEFINITION _encode_FiniteFields */
/**
 * @summary Encodes a(n) FiniteFields into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_FiniteFields */

/* eslint-enable */
