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

/* START_OF_SYMBOL_DEFINITION EncryptedData */
/**
 * @summary EncryptedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedData  ::=  BIT STRING(CONSTRAINED BY {BodyPart})
 * ```
 */
export type EncryptedData = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION EncryptedData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedData */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedData */

/* START_OF_SYMBOL_DEFINITION _decode_EncryptedData */
export const _decode_EncryptedData = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_EncryptedData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedData */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedData */

/* START_OF_SYMBOL_DEFINITION _encode_EncryptedData */
export const _encode_EncryptedData = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_EncryptedData */

/* eslint-enable */
