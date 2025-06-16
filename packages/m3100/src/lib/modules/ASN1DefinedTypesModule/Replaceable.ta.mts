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
 * @summary Replaceable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Replaceable  ::=  ENUMERATED {yes(0), no(1), notapplicable(2)}
 * ```
 * 
 * @enum {number}
 */
export enum _enum_for_Replaceable {
    yes = 0,
    no = 1,
    notapplicable = 2,
}


/**
 * @summary Replaceable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Replaceable  ::=  ENUMERATED {yes(0), no(1), notapplicable(2)}
 * ```
 * 
 * @enum {number}
 */
export type Replaceable = _enum_for_Replaceable;


/**
 * @summary Replaceable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Replaceable  ::=  ENUMERATED {yes(0), no(1), notapplicable(2)}
 * ```
 * 
 * @enum {number}
 */
export const Replaceable = _enum_for_Replaceable;


/**
 * @summary Replaceable_yes
 * @constant
 * @type {number}
 */
export const Replaceable_yes: Replaceable =
    Replaceable.yes; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary yes
 * @constant
 * @type {number}
 */
export const yes: Replaceable =
    Replaceable.yes; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Replaceable_no
 * @constant
 * @type {number}
 */
export const Replaceable_no: Replaceable =
    Replaceable.no; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary no
 * @constant
 * @type {number}
 */
export const no: Replaceable =
    Replaceable.no; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Replaceable_notapplicable
 * @constant
 * @type {number}
 */
export const Replaceable_notapplicable: Replaceable =
    Replaceable.notapplicable; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary notapplicable
 * @constant
 * @type {number}
 */
export const notapplicable: Replaceable =
    Replaceable.notapplicable; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_Replaceable = $._decodeEnumerated;




export const _encode_Replaceable = $._encodeEnumerated;


/* eslint-enable */
