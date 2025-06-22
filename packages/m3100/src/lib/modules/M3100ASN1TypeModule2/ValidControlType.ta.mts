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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary ValidControlType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ValidControlType  ::=  ENUMERATED {momentaryOnly(0), continuousOnly(1), both(2)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ValidControlType {
    momentaryOnly = 0,
    continuousOnly = 1,
    both = 2,
}


/**
 * @summary ValidControlType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ValidControlType  ::=  ENUMERATED {momentaryOnly(0), continuousOnly(1), both(2)}
 * ```
 *
 * @enum {number}
 */
export type ValidControlType = _enum_for_ValidControlType;


/**
 * @summary ValidControlType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ValidControlType  ::=  ENUMERATED {momentaryOnly(0), continuousOnly(1), both(2)}
 * ```
 *
 * @enum {number}
 */
export const ValidControlType = _enum_for_ValidControlType;


/**
 * @summary ValidControlType_momentaryOnly
 * @constant
 * @type {number}
 */
export const ValidControlType_momentaryOnly: ValidControlType =
    ValidControlType.momentaryOnly; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary momentaryOnly
 * @constant
 * @type {number}
 */
export const momentaryOnly: ValidControlType =
    ValidControlType.momentaryOnly; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ValidControlType_continuousOnly
 * @constant
 * @type {number}
 */
export const ValidControlType_continuousOnly: ValidControlType =
    ValidControlType.continuousOnly; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary continuousOnly
 * @constant
 * @type {number}
 */
export const continuousOnly: ValidControlType =
    ValidControlType.continuousOnly; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ValidControlType_both
 * @constant
 * @type {number}
 */
export const ValidControlType_both: ValidControlType =
    ValidControlType.both; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary both
 * @constant
 * @type {number}
 */
export const both: ValidControlType =
    ValidControlType.both; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_ValidControlType = $._decodeEnumerated;




export const _encode_ValidControlType = $._encodeEnumerated;


/* eslint-enable */
