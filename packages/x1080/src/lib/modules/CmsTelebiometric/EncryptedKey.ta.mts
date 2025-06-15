/* eslint-disable */
import {
    OCTET_STRING,
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

/* START_OF_SYMBOL_DEFINITION EncryptedKey */
/**
 * @summary EncryptedKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedKey  ::=  OCTET STRING
 * ```
 */
export type EncryptedKey = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION EncryptedKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedKey */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedKey */

/* START_OF_SYMBOL_DEFINITION _decode_EncryptedKey */
export const _decode_EncryptedKey = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_EncryptedKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedKey */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedKey */

/* START_OF_SYMBOL_DEFINITION _encode_EncryptedKey */
export const _encode_EncryptedKey = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_EncryptedKey */

/* eslint-enable */
