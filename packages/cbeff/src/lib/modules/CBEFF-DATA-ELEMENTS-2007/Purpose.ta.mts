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
 * @summary Purpose
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Purpose  ::=  ENUMERATED {
 *   no-value-available, verify, identify, enroll, enroll-verify, enroll-identify,
 *   audit}
 * ```
 *
 * @enum {number}
 */
export const _enum_for_Purpose = {
  no_value_available: 0,
  verify: 1,
  identify: 2,
  enroll: 3,
  enroll_verify: 4,
  enroll_identify: 5,
  audit: 6,
} as const;

export type _enum_for_Purpose = (typeof _enum_for_Purpose)[keyof typeof _enum_for_Purpose];

/**
 * @summary Purpose
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Purpose  ::=  ENUMERATED {
 *   no-value-available, verify, identify, enroll, enroll-verify, enroll-identify,
 *   audit}
 * ```
 *
 * @enum {number}
 */
export type Purpose = _enum_for_Purpose;

/**
 * @summary Purpose
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Purpose  ::=  ENUMERATED {
 *   no-value-available, verify, identify, enroll, enroll-verify, enroll-identify,
 *   audit}
 * ```
 *
 * @enum {number}
 */
export const Purpose: typeof _enum_for_Purpose = _enum_for_Purpose;

/**
 * @summary Purpose_no_value_available
 * @constant
 * @type {number}
 */
export const Purpose_no_value_available: 0 =
  Purpose.no_value_available; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_value_available
 * @constant
 * @type {number}
 */
export const no_value_available: 0 =
  Purpose.no_value_available; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Purpose_verify
 * @constant
 * @type {number}
 */
export const Purpose_verify: 1 =
  Purpose.verify; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary verify
 * @constant
 * @type {number}
 */
export const verify: 1 =
  Purpose.verify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Purpose_identify
 * @constant
 * @type {number}
 */
export const Purpose_identify: 2 =
  Purpose.identify; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary identify
 * @constant
 * @type {number}
 */
export const identify: 2 =
  Purpose.identify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Purpose_enroll
 * @constant
 * @type {number}
 */
export const Purpose_enroll: 3 =
  Purpose.enroll; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enroll
 * @constant
 * @type {number}
 */
export const enroll: 3 =
  Purpose.enroll; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Purpose_enroll_verify
 * @constant
 * @type {number}
 */
export const Purpose_enroll_verify: 4 =
  Purpose.enroll_verify; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enroll_verify
 * @constant
 * @type {number}
 */
export const enroll_verify: 4 =
  Purpose.enroll_verify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Purpose_enroll_identify
 * @constant
 * @type {number}
 */
export const Purpose_enroll_identify: 5 =
  Purpose.enroll_identify; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enroll_identify
 * @constant
 * @type {number}
 */
export const enroll_identify: 5 =
  Purpose.enroll_identify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Purpose_audit
 * @constant
 * @type {number}
 */
export const Purpose_audit: 6 =
  Purpose.audit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary audit
 * @constant
 * @type {number}
 */
export const audit: 6 = Purpose.audit; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_Purpose: $.ASN1Decoder<Purpose> = $._decodeEnumerated as $.ASN1Decoder<Purpose>;


export const _encode_Purpose: $.ASN1Encoder<Purpose> = $._encodeEnumerated as $.ASN1Encoder<Purpose>;


/* eslint-enable */
