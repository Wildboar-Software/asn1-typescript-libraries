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

/* START_OF_SYMBOL_DEFINITION EncryptedContent */
/**
 * @summary EncryptedContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedContent  ::=  OCTET STRING
 * ```
 */
export type EncryptedContent = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION EncryptedContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedContent */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedContent */

/* START_OF_SYMBOL_DEFINITION _decode_EncryptedContent */
export const _decode_EncryptedContent = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_EncryptedContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedContent */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedContent */

/* START_OF_SYMBOL_DEFINITION _encode_EncryptedContent */
export const _encode_EncryptedContent = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_EncryptedContent */

/* eslint-enable */
