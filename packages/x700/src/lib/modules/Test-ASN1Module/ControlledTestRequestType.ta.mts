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

/**
 * @summary ControlledTestRequestType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlledTestRequestType  ::=  ENUMERATED {independent(0), related(1)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ControlledTestRequestType {
    independent = 0,
    related = 1,
}

/**
 * @summary ControlledTestRequestType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlledTestRequestType  ::=  ENUMERATED {independent(0), related(1)}
 * ```
 *
 * @enum {number}
 */
export type ControlledTestRequestType = _enum_for_ControlledTestRequestType;

/**
 * @summary ControlledTestRequestType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlledTestRequestType  ::=  ENUMERATED {independent(0), related(1)}
 * ```
 *
 * @enum {number}
 */
export const ControlledTestRequestType = _enum_for_ControlledTestRequestType;

/**
 * @summary ControlledTestRequestType_independent
 * @constant
 * @type {number}
 */
export const ControlledTestRequestType_independent: ControlledTestRequestType =
    ControlledTestRequestType.independent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary independent
 * @constant
 * @type {number}
 */
export const independent: ControlledTestRequestType =
    ControlledTestRequestType.independent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ControlledTestRequestType_related
 * @constant
 * @type {number}
 */
export const ControlledTestRequestType_related: ControlledTestRequestType =
    ControlledTestRequestType.related; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary related
 * @constant
 * @type {number}
 */
export const related: ControlledTestRequestType =
    ControlledTestRequestType.related; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ControlledTestRequestType = $._decodeEnumerated;


export const _encode_ControlledTestRequestType = $._encodeEnumerated;


/* eslint-enable */
