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

/* START_OF_SYMBOL_DEFINITION AlgorithmIdentifier */
/**
 * @summary AlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlgorithmIdentifier  ::=  OBJECT IDENTIFIER
 * ```
 */
export type AlgorithmIdentifier = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION AlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AlgorithmIdentifier */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_AlgorithmIdentifier */
export const _decode_AlgorithmIdentifier = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_AlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AlgorithmIdentifier */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_AlgorithmIdentifier */
export const _encode_AlgorithmIdentifier = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_AlgorithmIdentifier */

/* eslint-enable */
