/* eslint-disable */
import {
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

/* START_OF_SYMBOL_DEFINITION _enum_for_ProtectionGroupType */
/**
 * @summary ProtectionGroupType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionGroupType  ::=  ENUMERATED {
 *   plus(0), -- 1+1 (1 plus 1) or hot-standby
 *   colon(1) -- M:N (M for N) --}
 * ```@enum {number}
 */
export enum _enum_for_ProtectionGroupType {
    plus = 0,
    colon = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ProtectionGroupType */

/* START_OF_SYMBOL_DEFINITION ProtectionGroupType */
/**
 * @summary ProtectionGroupType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionGroupType  ::=  ENUMERATED {
 *   plus(0), -- 1+1 (1 plus 1) or hot-standby
 *   colon(1) -- M:N (M for N) --}
 * ```@enum {number}
 */
export type ProtectionGroupType = _enum_for_ProtectionGroupType;
/* END_OF_SYMBOL_DEFINITION ProtectionGroupType */

/* START_OF_SYMBOL_DEFINITION ProtectionGroupType */
/**
 * @summary ProtectionGroupType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionGroupType  ::=  ENUMERATED {
 *   plus(0), -- 1+1 (1 plus 1) or hot-standby
 *   colon(1) -- M:N (M for N) --}
 * ```@enum {number}
 */
export const ProtectionGroupType = _enum_for_ProtectionGroupType;
/* END_OF_SYMBOL_DEFINITION ProtectionGroupType */

/* START_OF_SYMBOL_DEFINITION ProtectionGroupType_plus */
/**
 * @summary ProtectionGroupType_plus
 * @constant
 * @type {number}
 */
export const ProtectionGroupType_plus: ProtectionGroupType =
    ProtectionGroupType.plus; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProtectionGroupType_plus */

/* START_OF_SYMBOL_DEFINITION plus */
/**
 * @summary plus
 * @constant
 * @type {number}
 */
export const plus: ProtectionGroupType =
    ProtectionGroupType.plus; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION plus */

/* START_OF_SYMBOL_DEFINITION ProtectionGroupType_colon */
/**
 * @summary ProtectionGroupType_colon
 * @constant
 * @type {number}
 */
export const ProtectionGroupType_colon: ProtectionGroupType =
    ProtectionGroupType.colon; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProtectionGroupType_colon */

/* START_OF_SYMBOL_DEFINITION colon */
/**
 * @summary colon
 * @constant
 * @type {number}
 */
export const colon: ProtectionGroupType =
    ProtectionGroupType.colon; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION colon */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionGroupType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionGroupType */

/* START_OF_SYMBOL_DEFINITION _decode_ProtectionGroupType */
export const _decode_ProtectionGroupType = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_ProtectionGroupType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionGroupType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionGroupType */

/* START_OF_SYMBOL_DEFINITION _encode_ProtectionGroupType */
export const _encode_ProtectionGroupType = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_ProtectionGroupType */

/* eslint-enable */
