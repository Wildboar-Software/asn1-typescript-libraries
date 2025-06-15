/* eslint-disable */
import {
    BIT_STRING,
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

/* START_OF_SYMBOL_DEFINITION EncryptionKey */
/**
 * @summary EncryptionKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptionKey  ::=  BIT STRING
 * ```
 */
export type EncryptionKey = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION EncryptionKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptionKey */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptionKey */

/* START_OF_SYMBOL_DEFINITION _decode_EncryptionKey */
export const _decode_EncryptionKey = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_EncryptionKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptionKey */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptionKey */

/* START_OF_SYMBOL_DEFINITION _encode_EncryptionKey */
export const _encode_EncryptionKey = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_EncryptionKey */

/* eslint-enable */
