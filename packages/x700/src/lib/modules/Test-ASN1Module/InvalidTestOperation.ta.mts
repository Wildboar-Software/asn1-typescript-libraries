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

/* START_OF_SYMBOL_DEFINITION InvalidTestOperation */
/**
 * @summary InvalidTestOperation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvalidTestOperation  ::=  OBJECT IDENTIFIER
 * ```
 */
export type InvalidTestOperation = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION InvalidTestOperation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InvalidTestOperation */
let _cached_decoder_for_InvalidTestOperation: $.ASN1Decoder<InvalidTestOperation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InvalidTestOperation */

/* START_OF_SYMBOL_DEFINITION _decode_InvalidTestOperation */
/**
 * @summary Decodes an ASN.1 element into a(n) InvalidTestOperation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvalidTestOperation} The decoded data structure.
 */
export function _decode_InvalidTestOperation(el: _Element) {
    if (!_cached_decoder_for_InvalidTestOperation) {
        _cached_decoder_for_InvalidTestOperation = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_InvalidTestOperation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InvalidTestOperation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InvalidTestOperation */
let _cached_encoder_for_InvalidTestOperation: $.ASN1Encoder<InvalidTestOperation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InvalidTestOperation */

/* START_OF_SYMBOL_DEFINITION _encode_InvalidTestOperation */
/**
 * @summary Encodes a(n) InvalidTestOperation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvalidTestOperation, encoded as an ASN.1 Element.
 */
export function _encode_InvalidTestOperation(
    value: InvalidTestOperation,
    elGetter: $.ASN1Encoder<InvalidTestOperation>
) {
    if (!_cached_encoder_for_InvalidTestOperation) {
        _cached_encoder_for_InvalidTestOperation = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_InvalidTestOperation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InvalidTestOperation */

/* eslint-enable */
