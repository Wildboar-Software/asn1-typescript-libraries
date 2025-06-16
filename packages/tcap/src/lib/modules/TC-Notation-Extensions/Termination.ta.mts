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
 * @summary Termination
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Termination  ::=  ENUMERATED {basic(1), prearranged(2)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_Termination {
    basic = 1,
    prearranged = 2,
}

/**
 * @summary Termination
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Termination  ::=  ENUMERATED {basic(1), prearranged(2)}
 * ```
 *
 * @enum {number}
 */
export type Termination = _enum_for_Termination;

/**
 * @summary Termination
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Termination  ::=  ENUMERATED {basic(1), prearranged(2)}
 * ```
 *
 * @enum {number}
 */
export const Termination = _enum_for_Termination;

/**
 * @summary Termination_basic
 * @constant
 * @type {number}
 */
export const Termination_basic: Termination =
    Termination.basic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary basic
 * @constant
 * @type {number}
 */
export const basic: Termination =
    Termination.basic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Termination_prearranged
 * @constant
 * @type {number}
 */
export const Termination_prearranged: Termination =
    Termination.prearranged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary prearranged
 * @constant
 * @type {number}
 */
export const prearranged: Termination =
    Termination.prearranged; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_Termination = $._decodeEnumerated;


export const _encode_Termination = $._encodeEnumerated;


/* eslint-enable */
