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

/* START_OF_SYMBOL_DEFINITION DataElementSeparator */
/**
 * @summary DataElementSeparator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataElementSeparator  ::=  OCTET STRING(SIZE (1))
 * ```
 */
export type DataElementSeparator = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION DataElementSeparator */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DataElementSeparator */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DataElementSeparator */

/* START_OF_SYMBOL_DEFINITION _decode_DataElementSeparator */
export const _decode_DataElementSeparator = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_DataElementSeparator */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DataElementSeparator */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DataElementSeparator */

/* START_OF_SYMBOL_DEFINITION _encode_DataElementSeparator */
export const _encode_DataElementSeparator = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_DataElementSeparator */

/* eslint-enable */
