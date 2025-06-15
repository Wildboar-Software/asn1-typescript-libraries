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

/* START_OF_SYMBOL_DEFINITION InformationType */
/**
 * @summary InformationType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type InformationType = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION InformationType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InformationType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InformationType */

/* START_OF_SYMBOL_DEFINITION _decode_InformationType */
export const _decode_InformationType = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_InformationType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InformationType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InformationType */

/* START_OF_SYMBOL_DEFINITION _encode_InformationType */
export const _encode_InformationType = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_InformationType */

/* eslint-enable */
