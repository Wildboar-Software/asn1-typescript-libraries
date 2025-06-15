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

/* START_OF_SYMBOL_DEFINITION AttributeId */
/**
 * @summary AttributeId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeId  ::=  OBJECT IDENTIFIER
 * ```
 */
export type AttributeId = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION AttributeId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeId */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeId */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeId */
export const _decode_AttributeId = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_AttributeId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeId */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeId */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeId */
export const _encode_AttributeId = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_AttributeId */

/* eslint-enable */
