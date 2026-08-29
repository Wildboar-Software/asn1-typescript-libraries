/* eslint-disable */
import {
  BIT_STRING,
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
 * @summary BioAPI_GUI_ENROLL_TYPE
 * @description
 *
 * Enrolment GUI style flags. `SIZE(32)` matches the C
 * `uint32_t`. Bit 0 = C `0x00000001` (testVerify); bit 1 =
 * `0x00000002` (multipleCapture). Bits 2–31 are unnamed.
 *
 * ITU-T Rec. X.1083 (11/2007)
 * [§15.38](https://www.itu.int/rec/T-REC-X.1083-200711-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-GUI-ENROLL-TYPE  ::=  BIT STRING {testVerify(0), multipleCapture(1)
 * }(SIZE (32))
 * ```
 */
export type BioAPI_GUI_ENROLL_TYPE = BIT_STRING;


/**
 * @summary BioAPI_GUI_ENROLL_TYPE_testVerify
 * @constant
 */
export const BioAPI_GUI_ENROLL_TYPE_testVerify: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary testVerify
 * @constant
 */
export const testVerify: number = BioAPI_GUI_ENROLL_TYPE_testVerify; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_GUI_ENROLL_TYPE_multipleCapture
 * @constant
 */
export const BioAPI_GUI_ENROLL_TYPE_multipleCapture: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary multipleCapture
 * @constant
 */
export const multipleCapture: number = BioAPI_GUI_ENROLL_TYPE_multipleCapture; /* SHORT_NAMED_BIT */




export const _decode_BioAPI_GUI_ENROLL_TYPE = $._decodeBitString;




export const _encode_BioAPI_GUI_ENROLL_TYPE = $._encodeBitString;


/* eslint-enable */
