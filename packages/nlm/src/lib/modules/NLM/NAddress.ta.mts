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

/* START_OF_SYMBOL_DEFINITION NAddress */
/**
 * @summary NAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NAddress  ::=  OCTET STRING(SIZE (0..20))
 * ```
 */
export type NAddress = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION NAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NAddress */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NAddress */

/* START_OF_SYMBOL_DEFINITION _decode_NAddress */
export const _decode_NAddress = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_NAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NAddress */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NAddress */

/* START_OF_SYMBOL_DEFINITION _encode_NAddress */
export const _encode_NAddress = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_NAddress */

/* eslint-enable */
