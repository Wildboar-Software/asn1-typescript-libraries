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

/* START_OF_SYMBOL_DEFINITION Simply_encoded_data */
/**
 * @summary Simply_encoded_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Simply-encoded-data  ::=  OCTET STRING
 * ```
 */
export type Simply_encoded_data = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION Simply_encoded_data */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Simply_encoded_data */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Simply_encoded_data */

/* START_OF_SYMBOL_DEFINITION _decode_Simply_encoded_data */
export const _decode_Simply_encoded_data = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_Simply_encoded_data */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Simply_encoded_data */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Simply_encoded_data */

/* START_OF_SYMBOL_DEFINITION _encode_Simply_encoded_data */
export const _encode_Simply_encoded_data = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_Simply_encoded_data */

/* eslint-enable */
