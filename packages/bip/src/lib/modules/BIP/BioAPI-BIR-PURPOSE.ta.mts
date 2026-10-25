/* eslint-disable */
import {
  type ENUMERATED,
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


export enum _enum_for_BioAPI_BIR_PURPOSE {
  verify = 0,
  identify = 1,
  enroll = 2,
  enrollVerify = 3,
  enrollIdentify = 4,
  audit = 5,
  any_ = 6,
}


/**
 * @summary BioAPI_BIR_PURPOSE
 * @description
 *
 * Intended use of a BIR. ASN.1 enumerators are 0-based; C values
 * are 1–7 (`verify` = C 1, `any` = C 7). Other C values are
 * unconvertible (clause 33).
 *
 * ITU-T Rec. X.1083 (11/2007)
 * [§15.14](https://www.itu.int/rec/T-REC-X.1083-200711-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-BIR-PURPOSE  ::=  ENUMERATED {
 *   verify, identify, enroll, enrollVerify, enrollIdentify, audit, any, ...
 *   }
 * ```
 *
 * @enum {number}
 */
export type BioAPI_BIR_PURPOSE = _enum_for_BioAPI_BIR_PURPOSE | ENUMERATED;


/**
 * @summary BioAPI_BIR_PURPOSE_verify
 * @constant
 * @type {number}
 */
export const BioAPI_BIR_PURPOSE_verify = _enum_for_BioAPI_BIR_PURPOSE.verify satisfies BioAPI_BIR_PURPOSE; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary verify
 * @constant
 * @type {number}
 */
export const verify = BioAPI_BIR_PURPOSE_verify satisfies BioAPI_BIR_PURPOSE; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_BIR_PURPOSE_identify
 * @constant
 * @type {number}
 */
export const BioAPI_BIR_PURPOSE_identify = _enum_for_BioAPI_BIR_PURPOSE.identify satisfies BioAPI_BIR_PURPOSE; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary identify
 * @constant
 * @type {number}
 */
export const identify = BioAPI_BIR_PURPOSE_identify satisfies BioAPI_BIR_PURPOSE; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_BIR_PURPOSE_enroll
 * @constant
 * @type {number}
 */
export const BioAPI_BIR_PURPOSE_enroll = _enum_for_BioAPI_BIR_PURPOSE.enroll satisfies BioAPI_BIR_PURPOSE; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary enroll
 * @constant
 * @type {number}
 */
export const enroll = BioAPI_BIR_PURPOSE_enroll satisfies BioAPI_BIR_PURPOSE; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_BIR_PURPOSE_enrollVerify
 * @constant
 * @type {number}
 */
export const BioAPI_BIR_PURPOSE_enrollVerify = _enum_for_BioAPI_BIR_PURPOSE.enrollVerify satisfies BioAPI_BIR_PURPOSE; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary enrollVerify
 * @constant
 * @type {number}
 */
export const enrollVerify = BioAPI_BIR_PURPOSE_enrollVerify satisfies BioAPI_BIR_PURPOSE; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_BIR_PURPOSE_enrollIdentify
 * @constant
 * @type {number}
 */
export const BioAPI_BIR_PURPOSE_enrollIdentify = _enum_for_BioAPI_BIR_PURPOSE.enrollIdentify satisfies BioAPI_BIR_PURPOSE; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary enrollIdentify
 * @constant
 * @type {number}
 */
export const enrollIdentify = BioAPI_BIR_PURPOSE_enrollIdentify satisfies BioAPI_BIR_PURPOSE; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_BIR_PURPOSE_audit
 * @constant
 * @type {number}
 */
export const BioAPI_BIR_PURPOSE_audit = _enum_for_BioAPI_BIR_PURPOSE.audit satisfies BioAPI_BIR_PURPOSE; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary audit
 * @constant
 * @type {number}
 */
export const audit = BioAPI_BIR_PURPOSE_audit satisfies BioAPI_BIR_PURPOSE; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_BIR_PURPOSE_any_
 * @description
 *
 * C `BioAPI_PURPOSE_ANY` (7). ASN.1 enumerator 6, not C 0.
 *
 * @constant
 * @type {number}
 */
export const BioAPI_BIR_PURPOSE_any_ = _enum_for_BioAPI_BIR_PURPOSE.any_ satisfies BioAPI_BIR_PURPOSE; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary any_
 * @description
 *
 * C `BioAPI_PURPOSE_ANY` (7). ASN.1 enumerator 6, not C 0.
 *
 * @constant
 * @type {number}
 */
export const any_ = BioAPI_BIR_PURPOSE_any_ satisfies BioAPI_BIR_PURPOSE; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_BioAPI_BIR_PURPOSE = $._decodeEnumerated;




export const _encode_BioAPI_BIR_PURPOSE = $._encodeEnumerated;


/* eslint-enable */
