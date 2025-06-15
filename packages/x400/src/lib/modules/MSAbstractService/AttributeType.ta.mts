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

/* START_OF_SYMBOL_DEFINITION AttributeType */
/**
 * @summary AttributeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type AttributeType = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION AttributeType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeType */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeType */
export const _decode_AttributeType = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_AttributeType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeType */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeType */
export const _encode_AttributeType = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_AttributeType */

/* eslint-enable */
