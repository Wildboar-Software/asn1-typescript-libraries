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
export enum _enum_for_Purpose {
  no_value_available = 0,
  verify = 1,
  identify = 2,
  enroll = 3,
  enroll_verify = 4,
  enroll_identify = 5,
  audit = 6,
}

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
export const Purpose_no_value_available: _enum_for_Purpose.no_value_available =
  Purpose.no_value_available; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_value_available
 * @constant
 * @type {number}
 */
export const no_value_available: _enum_for_Purpose.no_value_available =
  Purpose.no_value_available; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Purpose_verify
 * @constant
 * @type {number}
 */
export const Purpose_verify: _enum_for_Purpose.verify =
  Purpose.verify; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary verify
 * @constant
 * @type {number}
 */
export const verify: _enum_for_Purpose.verify =
  Purpose.verify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Purpose_identify
 * @constant
 * @type {number}
 */
export const Purpose_identify: _enum_for_Purpose.identify =
  Purpose.identify; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary identify
 * @constant
 * @type {number}
 */
export const identify: _enum_for_Purpose.identify =
  Purpose.identify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Purpose_enroll
 * @constant
 * @type {number}
 */
export const Purpose_enroll: _enum_for_Purpose.enroll =
  Purpose.enroll; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enroll
 * @constant
 * @type {number}
 */
export const enroll: _enum_for_Purpose.enroll =
  Purpose.enroll; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Purpose_enroll_verify
 * @constant
 * @type {number}
 */
export const Purpose_enroll_verify: _enum_for_Purpose.enroll_verify =
  Purpose.enroll_verify; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enroll_verify
 * @constant
 * @type {number}
 */
export const enroll_verify: _enum_for_Purpose.enroll_verify =
  Purpose.enroll_verify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Purpose_enroll_identify
 * @constant
 * @type {number}
 */
export const Purpose_enroll_identify: _enum_for_Purpose.enroll_identify =
  Purpose.enroll_identify; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enroll_identify
 * @constant
 * @type {number}
 */
export const enroll_identify: _enum_for_Purpose.enroll_identify =
  Purpose.enroll_identify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Purpose_audit
 * @constant
 * @type {number}
 */
export const Purpose_audit: _enum_for_Purpose.audit =
  Purpose.audit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary audit
 * @constant
 * @type {number}
 */
export const audit: _enum_for_Purpose.audit = Purpose.audit; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_Purpose: $.ASN1Decoder<number> = $._decodeEnumerated;


export const _encode_Purpose: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
