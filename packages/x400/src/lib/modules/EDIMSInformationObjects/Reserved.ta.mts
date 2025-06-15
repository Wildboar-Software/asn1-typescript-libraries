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

/* START_OF_SYMBOL_DEFINITION Reserved */
/**
 * @summary Reserved
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Reserved  ::=  OCTET STRING(SIZE (1))
 * ```
 */
export type Reserved = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION Reserved */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Reserved */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Reserved */

/* START_OF_SYMBOL_DEFINITION _decode_Reserved */
export const _decode_Reserved = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_Reserved */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Reserved */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Reserved */

/* START_OF_SYMBOL_DEFINITION _encode_Reserved */
export const _encode_Reserved = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_Reserved */

/* eslint-enable */
