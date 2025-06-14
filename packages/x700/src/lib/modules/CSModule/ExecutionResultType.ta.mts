/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION ExecutionResultType */
/**
 * @summary ExecutionResultType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExecutionResultType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type ExecutionResultType = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION ExecutionResultType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExecutionResultType */
let _cached_decoder_for_ExecutionResultType: $.ASN1Decoder<ExecutionResultType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExecutionResultType */

/* START_OF_SYMBOL_DEFINITION _decode_ExecutionResultType */
/**
 * @summary Decodes an ASN.1 element into a(n) ExecutionResultType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExecutionResultType} The decoded data structure.
 */
export function _decode_ExecutionResultType(el: _Element) {
    if (!_cached_decoder_for_ExecutionResultType) {
        _cached_decoder_for_ExecutionResultType = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_ExecutionResultType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExecutionResultType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExecutionResultType */
let _cached_encoder_for_ExecutionResultType: $.ASN1Encoder<ExecutionResultType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExecutionResultType */

/* START_OF_SYMBOL_DEFINITION _encode_ExecutionResultType */
/**
 * @summary Encodes a(n) ExecutionResultType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExecutionResultType, encoded as an ASN.1 Element.
 */
export function _encode_ExecutionResultType(
    value: ExecutionResultType,
    elGetter: $.ASN1Encoder<ExecutionResultType>
) {
    if (!_cached_encoder_for_ExecutionResultType) {
        _cached_encoder_for_ExecutionResultType = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_ExecutionResultType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExecutionResultType */

/* eslint-enable */
