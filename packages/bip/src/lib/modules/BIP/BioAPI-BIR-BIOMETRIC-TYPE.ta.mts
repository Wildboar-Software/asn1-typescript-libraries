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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';


/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-BIR-BIOMETRIC-TYPE  ::=  BIT STRING {
 *   typeMultipleBiometricTypes(0), typeFace(1), typeVoice(2), typeFinger(3),
 *   typeIris(4), typeRetina(5), typeHandGeometry(6), typeSignatureSign(7),
 *   typeKeystroke(8), typeLipMovement(9), typeGait(12), typeVein(13),
 *   typeDNA(14), typeEar(15), typeFoot(16), typeScent(17), typeOther(30),
 *   typePassword(31)}(SIZE (32))
 * ```
 */
export type BioAPI_BIR_BIOMETRIC_TYPE = BIT_STRING;


/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeMultipleBiometricTypes
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeMultipleBiometricTypes: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary typeMultipleBiometricTypes
 * @constant
 */
export const typeMultipleBiometricTypes: number = BioAPI_BIR_BIOMETRIC_TYPE_typeMultipleBiometricTypes; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeFace
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeFace: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary typeFace
 * @constant
 */
export const typeFace: number = BioAPI_BIR_BIOMETRIC_TYPE_typeFace; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeVoice
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeVoice: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary typeVoice
 * @constant
 */
export const typeVoice: number = BioAPI_BIR_BIOMETRIC_TYPE_typeVoice; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeFinger
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeFinger: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary typeFinger
 * @constant
 */
export const typeFinger: number = BioAPI_BIR_BIOMETRIC_TYPE_typeFinger; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeIris
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeIris: number = 4; /* LONG_NAMED_BIT */


/**
 * @summary typeIris
 * @constant
 */
export const typeIris: number = BioAPI_BIR_BIOMETRIC_TYPE_typeIris; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeRetina
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeRetina: number = 5; /* LONG_NAMED_BIT */


/**
 * @summary typeRetina
 * @constant
 */
export const typeRetina: number = BioAPI_BIR_BIOMETRIC_TYPE_typeRetina; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeHandGeometry
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeHandGeometry: number = 6; /* LONG_NAMED_BIT */


/**
 * @summary typeHandGeometry
 * @constant
 */
export const typeHandGeometry: number = BioAPI_BIR_BIOMETRIC_TYPE_typeHandGeometry; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeSignatureSign
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeSignatureSign: number = 7; /* LONG_NAMED_BIT */


/**
 * @summary typeSignatureSign
 * @constant
 */
export const typeSignatureSign: number = BioAPI_BIR_BIOMETRIC_TYPE_typeSignatureSign; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeKeystroke
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeKeystroke: number = 8; /* LONG_NAMED_BIT */


/**
 * @summary typeKeystroke
 * @constant
 */
export const typeKeystroke: number = BioAPI_BIR_BIOMETRIC_TYPE_typeKeystroke; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeLipMovement
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeLipMovement: number = 9; /* LONG_NAMED_BIT */


/**
 * @summary typeLipMovement
 * @constant
 */
export const typeLipMovement: number = BioAPI_BIR_BIOMETRIC_TYPE_typeLipMovement; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeGait
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeGait: number = 12; /* LONG_NAMED_BIT */


/**
 * @summary typeGait
 * @constant
 */
export const typeGait: number = BioAPI_BIR_BIOMETRIC_TYPE_typeGait; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeVein
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeVein: number = 13; /* LONG_NAMED_BIT */


/**
 * @summary typeVein
 * @constant
 */
export const typeVein: number = BioAPI_BIR_BIOMETRIC_TYPE_typeVein; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeDNA
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeDNA: number = 14; /* LONG_NAMED_BIT */


/**
 * @summary typeDNA
 * @constant
 */
export const typeDNA: number = BioAPI_BIR_BIOMETRIC_TYPE_typeDNA; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeEar
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeEar: number = 15; /* LONG_NAMED_BIT */


/**
 * @summary typeEar
 * @constant
 */
export const typeEar: number = BioAPI_BIR_BIOMETRIC_TYPE_typeEar; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeFoot
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeFoot: number = 16; /* LONG_NAMED_BIT */


/**
 * @summary typeFoot
 * @constant
 */
export const typeFoot: number = BioAPI_BIR_BIOMETRIC_TYPE_typeFoot; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeScent
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeScent: number = 17; /* LONG_NAMED_BIT */


/**
 * @summary typeScent
 * @constant
 */
export const typeScent: number = BioAPI_BIR_BIOMETRIC_TYPE_typeScent; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeOther
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeOther: number = 30; /* LONG_NAMED_BIT */


/**
 * @summary typeOther
 * @constant
 */
export const typeOther: number = BioAPI_BIR_BIOMETRIC_TYPE_typeOther; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typePassword
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typePassword: number = 31; /* LONG_NAMED_BIT */


/**
 * @summary typePassword
 * @constant
 */
export const typePassword: number = BioAPI_BIR_BIOMETRIC_TYPE_typePassword; /* SHORT_NAMED_BIT */




export const _decode_BioAPI_BIR_BIOMETRIC_TYPE = $._decodeBitString;




export const _encode_BioAPI_BIR_BIOMETRIC_TYPE = $._encodeBitString;


/* eslint-enable */
