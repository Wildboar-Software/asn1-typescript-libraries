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
 * @summary DLExpansionProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLExpansionProhibited  ::=  ENUMERATED {
 *   dl-expansion-allowed(0), dl-expansion-prohibited(1)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_DLExpansionProhibited {
    dl_expansion_allowed = 0,
    dl_expansion_prohibited = 1,
}

/**
 * @summary DLExpansionProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLExpansionProhibited  ::=  ENUMERATED {
 *   dl-expansion-allowed(0), dl-expansion-prohibited(1)}
 * ```
 *
 * @enum {number}
 */
export type DLExpansionProhibited = _enum_for_DLExpansionProhibited;

/**
 * @summary DLExpansionProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLExpansionProhibited  ::=  ENUMERATED {
 *   dl-expansion-allowed(0), dl-expansion-prohibited(1)}
 * ```
 *
 * @enum {number}
 */
export const DLExpansionProhibited = _enum_for_DLExpansionProhibited;

/**
 * @summary DLExpansionProhibited_dl_expansion_allowed
 * @constant
 * @type {number}
 */
export const DLExpansionProhibited_dl_expansion_allowed: DLExpansionProhibited =
    DLExpansionProhibited.dl_expansion_allowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dl_expansion_allowed
 * @constant
 * @type {number}
 */
export const dl_expansion_allowed: DLExpansionProhibited =
    DLExpansionProhibited.dl_expansion_allowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DLExpansionProhibited_dl_expansion_prohibited
 * @constant
 * @type {number}
 */
export const DLExpansionProhibited_dl_expansion_prohibited: DLExpansionProhibited =
    DLExpansionProhibited.dl_expansion_prohibited; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dl_expansion_prohibited
 * @constant
 * @type {number}
 */
export const dl_expansion_prohibited: DLExpansionProhibited =
    DLExpansionProhibited.dl_expansion_prohibited; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_DLExpansionProhibited = $._decodeEnumerated;


export const _encode_DLExpansionProhibited = $._encodeEnumerated;


/* eslint-enable */
