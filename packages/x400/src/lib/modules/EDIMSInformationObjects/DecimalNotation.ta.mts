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

/* START_OF_SYMBOL_DEFINITION DecimalNotation */
/**
 * @summary DecimalNotation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DecimalNotation  ::=  OCTET STRING(SIZE (1))
 * ```
 */
export type DecimalNotation = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION DecimalNotation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DecimalNotation */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DecimalNotation */

/* START_OF_SYMBOL_DEFINITION _decode_DecimalNotation */
export const _decode_DecimalNotation = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_DecimalNotation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DecimalNotation */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DecimalNotation */

/* START_OF_SYMBOL_DEFINITION _encode_DecimalNotation */
export const _encode_DecimalNotation = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_DecimalNotation */

/* eslint-enable */
