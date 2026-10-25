/* eslint-disable */
import {
    type INTEGER,
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
 * @summary BilateralDeferral
 * @description
 *
 * Defined in ITU-T X.411 (1999) (MTA managed objects).
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
export const BilateralDeferral_agreement: 0 = 0 satisfies BilateralDeferral; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BilateralDeferral_agreement
 * @constant
 * @type {number}
 */
export const agreement: 0 = BilateralDeferral_agreement; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BilateralDeferral_no_agreement
 * @constant
 * @type {number}
 */
export const BilateralDeferral_no_agreement: 1 = 1 satisfies BilateralDeferral; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BilateralDeferral_no_agreement
 * @constant
 * @type {number}
 */
export const no_agreement: 1 = BilateralDeferral_no_agreement; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_BilateralDeferral: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_BilateralDeferral: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
