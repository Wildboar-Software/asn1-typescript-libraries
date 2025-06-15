/* eslint-disable */
import {
    TeletexString,
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

/* START_OF_SYMBOL_DEFINITION AuthorizationInformation */
/**
 * @summary AuthorizationInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthorizationInformation  ::=
 *   TeletexString(SIZE (1..ub-authorization-information))
 * ```
 */
export type AuthorizationInformation = TeletexString; // TeletexString
/* END_OF_SYMBOL_DEFINITION AuthorizationInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthorizationInformation */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthorizationInformation */

/* START_OF_SYMBOL_DEFINITION _decode_AuthorizationInformation */
export const _decode_AuthorizationInformation = $._decodeTeletexString;
/* END_OF_SYMBOL_DEFINITION _decode_AuthorizationInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthorizationInformation */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthorizationInformation */

/* START_OF_SYMBOL_DEFINITION _encode_AuthorizationInformation */
export const _encode_AuthorizationInformation = $._encodeTeletexString;

/* END_OF_SYMBOL_DEFINITION _encode_AuthorizationInformation */

/* eslint-enable */
