/* eslint-disable */
import {
  ENUMERATED,
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

/* START_OF_SYMBOL_DEFINITION _enum_for_BioAPI_BIR_PURPOSE */
export enum _enum_for_BioAPI_BIR_PURPOSE {
  verify = 0,
  identify = 1,
  enroll = 2,
  enrollVerify = 3,
  enrollIdentify = 4,
  audit = 5,
  any_ = 6,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_BioAPI_BIR_PURPOSE */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_PURPOSE */
/**
 * @summary BioAPI_BIR_PURPOSE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-BIR-PURPOSE  ::=  ENUMERATED {
 *   verify, identify, enroll, enrollVerify, enrollIdentify, audit, any, ...
 *   }
 * ```@enum {number}
 */
export type BioAPI_BIR_PURPOSE = _enum_for_BioAPI_BIR_PURPOSE | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_PURPOSE */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_PURPOSE_verify */
/**
 * @summary BioAPI_BIR_PURPOSE_verify
 * @constant
 * @type {number}
 */
export const BioAPI_BIR_PURPOSE_verify: BioAPI_BIR_PURPOSE = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_PURPOSE_verify */

/* START_OF_SYMBOL_DEFINITION verify */
/**
 * @summary verify
 * @constant
 * @type {number}
 */
export const verify: BioAPI_BIR_PURPOSE = BioAPI_BIR_PURPOSE_verify; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION verify */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_PURPOSE_identify */
/**
 * @summary BioAPI_BIR_PURPOSE_identify
 * @constant
 * @type {number}
 */
export const BioAPI_BIR_PURPOSE_identify: BioAPI_BIR_PURPOSE = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_PURPOSE_identify */

/* START_OF_SYMBOL_DEFINITION identify */
/**
 * @summary identify
 * @constant
 * @type {number}
 */
export const identify: BioAPI_BIR_PURPOSE = BioAPI_BIR_PURPOSE_identify; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION identify */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_PURPOSE_enroll */
/**
 * @summary BioAPI_BIR_PURPOSE_enroll
 * @constant
 * @type {number}
 */
export const BioAPI_BIR_PURPOSE_enroll: BioAPI_BIR_PURPOSE = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_PURPOSE_enroll */

/* START_OF_SYMBOL_DEFINITION enroll */
/**
 * @summary enroll
 * @constant
 * @type {number}
 */
export const enroll: BioAPI_BIR_PURPOSE = BioAPI_BIR_PURPOSE_enroll; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION enroll */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_PURPOSE_enrollVerify */
/**
 * @summary BioAPI_BIR_PURPOSE_enrollVerify
 * @constant
 * @type {number}
 */
export const BioAPI_BIR_PURPOSE_enrollVerify: BioAPI_BIR_PURPOSE = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_PURPOSE_enrollVerify */

/* START_OF_SYMBOL_DEFINITION enrollVerify */
/**
 * @summary enrollVerify
 * @constant
 * @type {number}
 */
export const enrollVerify: BioAPI_BIR_PURPOSE = BioAPI_BIR_PURPOSE_enrollVerify; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION enrollVerify */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_PURPOSE_enrollIdentify */
/**
 * @summary BioAPI_BIR_PURPOSE_enrollIdentify
 * @constant
 * @type {number}
 */
export const BioAPI_BIR_PURPOSE_enrollIdentify: BioAPI_BIR_PURPOSE = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_PURPOSE_enrollIdentify */

/* START_OF_SYMBOL_DEFINITION enrollIdentify */
/**
 * @summary enrollIdentify
 * @constant
 * @type {number}
 */
export const enrollIdentify: BioAPI_BIR_PURPOSE = BioAPI_BIR_PURPOSE_enrollIdentify; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION enrollIdentify */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_PURPOSE_audit */
/**
 * @summary BioAPI_BIR_PURPOSE_audit
 * @constant
 * @type {number}
 */
export const BioAPI_BIR_PURPOSE_audit: BioAPI_BIR_PURPOSE = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_PURPOSE_audit */

/* START_OF_SYMBOL_DEFINITION audit */
/**
 * @summary audit
 * @constant
 * @type {number}
 */
export const audit: BioAPI_BIR_PURPOSE = BioAPI_BIR_PURPOSE_audit; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION audit */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_PURPOSE_any_ */
/**
 * @summary BioAPI_BIR_PURPOSE_any_
 * @constant
 * @type {number}
 */
export const BioAPI_BIR_PURPOSE_any_: BioAPI_BIR_PURPOSE = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_PURPOSE_any_ */

/* START_OF_SYMBOL_DEFINITION any_ */
/**
 * @summary any_
 * @constant
 * @type {number}
 */
export const any_: BioAPI_BIR_PURPOSE = BioAPI_BIR_PURPOSE_any_; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION any_ */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_BIR_PURPOSE */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_BIR_PURPOSE */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_BIR_PURPOSE */
export const _decode_BioAPI_BIR_PURPOSE = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_BIR_PURPOSE */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_BIR_PURPOSE */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_BIR_PURPOSE */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_BIR_PURPOSE */
export const _encode_BioAPI_BIR_PURPOSE = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_BIR_PURPOSE */

/* eslint-enable */
