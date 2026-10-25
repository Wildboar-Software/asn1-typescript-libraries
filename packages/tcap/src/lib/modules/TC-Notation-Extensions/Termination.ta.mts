/* eslint-disable */
import {
    type ASN1Element as _Element,
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
export const Termination: typeof _enum_for_Termination = _enum_for_Termination;

/**
 * @summary Termination_basic
 * @constant
 * @type {number}
 */
export const Termination_basic: _enum_for_Termination.basic =
    Termination.basic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary basic
 * @constant
 * @type {number}
 */
export const basic: _enum_for_Termination.basic =
    Termination.basic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Termination_prearranged
 * @constant
 * @type {number}
 */
export const Termination_prearranged: _enum_for_Termination.prearranged =
    Termination.prearranged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary prearranged
 * @constant
 * @type {number}
 */
export const prearranged: _enum_for_Termination.prearranged =
    Termination.prearranged; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_Termination: $.ASN1Decoder<number> = $._decodeEnumerated;


export const _encode_Termination: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
