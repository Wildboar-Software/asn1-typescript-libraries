/* eslint-disable */
import {
    BIT_STRING,
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

/* START_OF_SYMBOL_DEFINITION EDIApplicationSecurityElement */
/**
 * @summary EDIApplicationSecurityElement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIApplicationSecurityElement  ::=
 *   BIT STRING(SIZE (0..ub-edi-application-security-elements))
 * ```
 */
export type EDIApplicationSecurityElement = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION EDIApplicationSecurityElement */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIApplicationSecurityElement */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIApplicationSecurityElement */

/* START_OF_SYMBOL_DEFINITION _decode_EDIApplicationSecurityElement */
export const _decode_EDIApplicationSecurityElement = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_EDIApplicationSecurityElement */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIApplicationSecurityElement */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIApplicationSecurityElement */

/* START_OF_SYMBOL_DEFINITION _encode_EDIApplicationSecurityElement */
export const _encode_EDIApplicationSecurityElement = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_EDIApplicationSecurityElement */

/* eslint-enable */
