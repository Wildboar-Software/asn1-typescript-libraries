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

/* START_OF_SYMBOL_DEFINITION ReleaseIndicator */
/**
 * @summary ReleaseIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReleaseIndicator  ::=  OCTET STRING(SIZE (1))
 * ```
 */
export type ReleaseIndicator = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION ReleaseIndicator */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReleaseIndicator */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReleaseIndicator */

/* START_OF_SYMBOL_DEFINITION _decode_ReleaseIndicator */
export const _decode_ReleaseIndicator = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_ReleaseIndicator */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReleaseIndicator */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReleaseIndicator */

/* START_OF_SYMBOL_DEFINITION _encode_ReleaseIndicator */
export const _encode_ReleaseIndicator = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_ReleaseIndicator */

/* eslint-enable */
