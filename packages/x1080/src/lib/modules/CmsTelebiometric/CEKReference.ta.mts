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

/* START_OF_SYMBOL_DEFINITION CEKReference */
/**
 * @summary CEKReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CEKReference  ::=  OCTET STRING
 * ```
 */
export type CEKReference = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION CEKReference */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CEKReference */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CEKReference */

/* START_OF_SYMBOL_DEFINITION _decode_CEKReference */
export const _decode_CEKReference = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_CEKReference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CEKReference */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CEKReference */

/* START_OF_SYMBOL_DEFINITION _encode_CEKReference */
export const _encode_CEKReference = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_CEKReference */

/* eslint-enable */
