/* eslint-disable */
import {
    GeneralizedTime,
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

/* START_OF_SYMBOL_DEFINITION AuthorizationTime */
/**
 * @summary AuthorizationTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthorizationTime  ::=  GeneralizedTime
 * ```
 */
export type AuthorizationTime = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION AuthorizationTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthorizationTime */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthorizationTime */

/* START_OF_SYMBOL_DEFINITION _decode_AuthorizationTime */
export const _decode_AuthorizationTime = $._decodeGeneralizedTime;
/* END_OF_SYMBOL_DEFINITION _decode_AuthorizationTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthorizationTime */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthorizationTime */

/* START_OF_SYMBOL_DEFINITION _encode_AuthorizationTime */
export const _encode_AuthorizationTime = $._encodeGeneralizedTime;

/* END_OF_SYMBOL_DEFINITION _encode_AuthorizationTime */

/* eslint-enable */
