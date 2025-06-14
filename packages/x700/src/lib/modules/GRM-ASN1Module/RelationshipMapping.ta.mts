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

/* START_OF_SYMBOL_DEFINITION RelationshipMapping */
/**
 * @summary RelationshipMapping
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelationshipMapping  ::=  OBJECT IDENTIFIER
 * ```
 */
export type RelationshipMapping = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION RelationshipMapping */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RelationshipMapping */
let _cached_decoder_for_RelationshipMapping: $.ASN1Decoder<RelationshipMapping> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RelationshipMapping */

/* START_OF_SYMBOL_DEFINITION _decode_RelationshipMapping */
/**
 * @summary Decodes an ASN.1 element into a(n) RelationshipMapping
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelationshipMapping} The decoded data structure.
 */
export function _decode_RelationshipMapping(el: _Element) {
    if (!_cached_decoder_for_RelationshipMapping) {
        _cached_decoder_for_RelationshipMapping = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_RelationshipMapping(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RelationshipMapping */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RelationshipMapping */
let _cached_encoder_for_RelationshipMapping: $.ASN1Encoder<RelationshipMapping> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RelationshipMapping */

/* START_OF_SYMBOL_DEFINITION _encode_RelationshipMapping */
/**
 * @summary Encodes a(n) RelationshipMapping into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelationshipMapping, encoded as an ASN.1 Element.
 */
export function _encode_RelationshipMapping(
    value: RelationshipMapping,
    elGetter: $.ASN1Encoder<RelationshipMapping>
) {
    if (!_cached_encoder_for_RelationshipMapping) {
        _cached_encoder_for_RelationshipMapping = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_RelationshipMapping(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RelationshipMapping */

/* eslint-enable */
