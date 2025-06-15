/* eslint-disable */
import {
    RELATIVE_OID,
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

/* START_OF_SYMBOL_DEFINITION ExtendedContentType */
/**
 * @summary ExtendedContentType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedContentType  ::=  RELATIVE-OID
 * ```
 */
export type ExtendedContentType = RELATIVE_OID; // RelativeOIDType
/* END_OF_SYMBOL_DEFINITION ExtendedContentType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtendedContentType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtendedContentType */

/* START_OF_SYMBOL_DEFINITION _decode_ExtendedContentType */
export const _decode_ExtendedContentType = $._decodeRelativeOID;
/* END_OF_SYMBOL_DEFINITION _decode_ExtendedContentType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtendedContentType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtendedContentType */

/* START_OF_SYMBOL_DEFINITION _encode_ExtendedContentType */
export const _encode_ExtendedContentType = $._encodeRelativeOID;

/* END_OF_SYMBOL_DEFINITION _encode_ExtendedContentType */

/* eslint-enable */
