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

/* START_OF_SYMBOL_DEFINITION MessageAuthenticationCode */
/**
 * @summary MessageAuthenticationCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageAuthenticationCode  ::=  OCTET STRING
 * ```
 */
export type MessageAuthenticationCode = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION MessageAuthenticationCode */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageAuthenticationCode */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageAuthenticationCode */

/* START_OF_SYMBOL_DEFINITION _decode_MessageAuthenticationCode */
export const _decode_MessageAuthenticationCode = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_MessageAuthenticationCode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageAuthenticationCode */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageAuthenticationCode */

/* START_OF_SYMBOL_DEFINITION _encode_MessageAuthenticationCode */
export const _encode_MessageAuthenticationCode = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_MessageAuthenticationCode */

/* eslint-enable */
