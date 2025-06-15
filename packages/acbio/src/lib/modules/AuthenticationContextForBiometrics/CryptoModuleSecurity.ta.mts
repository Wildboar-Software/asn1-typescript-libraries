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

/* START_OF_SYMBOL_DEFINITION CryptoModuleSecurity */
/**
 * @summary CryptoModuleSecurity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CryptoModuleSecurity  ::=  OCTET STRING (SIZE(1..MAX))
 * ```
 */
export type CryptoModuleSecurity = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION CryptoModuleSecurity */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CryptoModuleSecurity */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CryptoModuleSecurity */

/* START_OF_SYMBOL_DEFINITION _decode_CryptoModuleSecurity */
export const _decode_CryptoModuleSecurity = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_CryptoModuleSecurity */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CryptoModuleSecurity */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CryptoModuleSecurity */

/* START_OF_SYMBOL_DEFINITION _encode_CryptoModuleSecurity */
export const _encode_CryptoModuleSecurity = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_CryptoModuleSecurity */

/* eslint-enable */
