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
import * as $ from '@wildboar/asn1/functional';


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
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ProtectionGroupType {
    plus = 0,
    colon = 1,
}


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
 * ```
 *
 * @enum {number}
 */
export type ProtectionGroupType = _enum_for_ProtectionGroupType;


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
 * ```
 *
 * @enum {number}
 */
export const ProtectionGroupType = _enum_for_ProtectionGroupType;


/**
 * @summary ProtectionGroupType_plus
 * @constant
 * @type {number}
 */
export const ProtectionGroupType_plus: ProtectionGroupType =
    ProtectionGroupType.plus; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary plus
 * @constant
 * @type {number}
 */
export const plus: ProtectionGroupType =
    ProtectionGroupType.plus; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ProtectionGroupType_colon
 * @constant
 * @type {number}
 */
export const ProtectionGroupType_colon: ProtectionGroupType =
    ProtectionGroupType.colon; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary colon
 * @constant
 * @type {number}
 */
export const colon: ProtectionGroupType =
    ProtectionGroupType.colon; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_ProtectionGroupType = $._decodeEnumerated;




export const _encode_ProtectionGroupType = $._encodeEnumerated;


/* eslint-enable */
