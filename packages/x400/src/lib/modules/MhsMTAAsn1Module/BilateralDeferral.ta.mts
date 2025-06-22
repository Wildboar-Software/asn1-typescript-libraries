/* eslint-disable */
import {
    INTEGER,
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
 * @summary BilateralDeferral
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BilateralDeferral  ::=  INTEGER {agreement(0), no-agreement(1)}
 * ```
 */
export type BilateralDeferral = INTEGER;

/**
 * @summary BilateralDeferral_agreement
 * @constant
 * @type {number}
 */
export const BilateralDeferral_agreement: BilateralDeferral = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BilateralDeferral_agreement
 * @constant
 * @type {number}
 */
export const agreement: BilateralDeferral = BilateralDeferral_agreement; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BilateralDeferral_no_agreement
 * @constant
 * @type {number}
 */
export const BilateralDeferral_no_agreement: BilateralDeferral = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BilateralDeferral_no_agreement
 * @constant
 * @type {number}
 */
export const no_agreement: BilateralDeferral = BilateralDeferral_no_agreement; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_BilateralDeferral = $._decodeInteger;


export const _encode_BilateralDeferral = $._encodeInteger;


/* eslint-enable */
