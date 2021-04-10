/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE */
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
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeMultipleBiometricTypes */
/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeMultipleBiometricTypes
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeMultipleBiometricTypes: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeMultipleBiometricTypes */

/* START_OF_SYMBOL_DEFINITION typeMultipleBiometricTypes */
/**
 * @summary typeMultipleBiometricTypes
 * @constant
 */
export const typeMultipleBiometricTypes: number = BioAPI_BIR_BIOMETRIC_TYPE_typeMultipleBiometricTypes; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION typeMultipleBiometricTypes */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeFace */
/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeFace
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeFace: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeFace */

/* START_OF_SYMBOL_DEFINITION typeFace */
/**
 * @summary typeFace
 * @constant
 */
export const typeFace: number = BioAPI_BIR_BIOMETRIC_TYPE_typeFace; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION typeFace */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeVoice */
/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeVoice
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeVoice: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeVoice */

/* START_OF_SYMBOL_DEFINITION typeVoice */
/**
 * @summary typeVoice
 * @constant
 */
export const typeVoice: number = BioAPI_BIR_BIOMETRIC_TYPE_typeVoice; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION typeVoice */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeFinger */
/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeFinger
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeFinger: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeFinger */

/* START_OF_SYMBOL_DEFINITION typeFinger */
/**
 * @summary typeFinger
 * @constant
 */
export const typeFinger: number = BioAPI_BIR_BIOMETRIC_TYPE_typeFinger; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION typeFinger */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeIris */
/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeIris
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeIris: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeIris */

/* START_OF_SYMBOL_DEFINITION typeIris */
/**
 * @summary typeIris
 * @constant
 */
export const typeIris: number = BioAPI_BIR_BIOMETRIC_TYPE_typeIris; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION typeIris */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeRetina */
/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeRetina
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeRetina: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeRetina */

/* START_OF_SYMBOL_DEFINITION typeRetina */
/**
 * @summary typeRetina
 * @constant
 */
export const typeRetina: number = BioAPI_BIR_BIOMETRIC_TYPE_typeRetina; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION typeRetina */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeHandGeometry */
/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeHandGeometry
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeHandGeometry: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeHandGeometry */

/* START_OF_SYMBOL_DEFINITION typeHandGeometry */
/**
 * @summary typeHandGeometry
 * @constant
 */
export const typeHandGeometry: number = BioAPI_BIR_BIOMETRIC_TYPE_typeHandGeometry; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION typeHandGeometry */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeSignatureSign */
/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeSignatureSign
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeSignatureSign: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeSignatureSign */

/* START_OF_SYMBOL_DEFINITION typeSignatureSign */
/**
 * @summary typeSignatureSign
 * @constant
 */
export const typeSignatureSign: number = BioAPI_BIR_BIOMETRIC_TYPE_typeSignatureSign; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION typeSignatureSign */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeKeystroke */
/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeKeystroke
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeKeystroke: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeKeystroke */

/* START_OF_SYMBOL_DEFINITION typeKeystroke */
/**
 * @summary typeKeystroke
 * @constant
 */
export const typeKeystroke: number = BioAPI_BIR_BIOMETRIC_TYPE_typeKeystroke; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION typeKeystroke */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeLipMovement */
/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeLipMovement
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeLipMovement: number = 9; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeLipMovement */

/* START_OF_SYMBOL_DEFINITION typeLipMovement */
/**
 * @summary typeLipMovement
 * @constant
 */
export const typeLipMovement: number = BioAPI_BIR_BIOMETRIC_TYPE_typeLipMovement; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION typeLipMovement */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeGait */
/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeGait
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeGait: number = 12; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeGait */

/* START_OF_SYMBOL_DEFINITION typeGait */
/**
 * @summary typeGait
 * @constant
 */
export const typeGait: number = BioAPI_BIR_BIOMETRIC_TYPE_typeGait; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION typeGait */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeVein */
/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeVein
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeVein: number = 13; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeVein */

/* START_OF_SYMBOL_DEFINITION typeVein */
/**
 * @summary typeVein
 * @constant
 */
export const typeVein: number = BioAPI_BIR_BIOMETRIC_TYPE_typeVein; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION typeVein */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeDNA */
/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeDNA
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeDNA: number = 14; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeDNA */

/* START_OF_SYMBOL_DEFINITION typeDNA */
/**
 * @summary typeDNA
 * @constant
 */
export const typeDNA: number = BioAPI_BIR_BIOMETRIC_TYPE_typeDNA; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION typeDNA */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeEar */
/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeEar
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeEar: number = 15; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeEar */

/* START_OF_SYMBOL_DEFINITION typeEar */
/**
 * @summary typeEar
 * @constant
 */
export const typeEar: number = BioAPI_BIR_BIOMETRIC_TYPE_typeEar; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION typeEar */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeFoot */
/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeFoot
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeFoot: number = 16; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeFoot */

/* START_OF_SYMBOL_DEFINITION typeFoot */
/**
 * @summary typeFoot
 * @constant
 */
export const typeFoot: number = BioAPI_BIR_BIOMETRIC_TYPE_typeFoot; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION typeFoot */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeScent */
/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeScent
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeScent: number = 17; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeScent */

/* START_OF_SYMBOL_DEFINITION typeScent */
/**
 * @summary typeScent
 * @constant
 */
export const typeScent: number = BioAPI_BIR_BIOMETRIC_TYPE_typeScent; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION typeScent */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeOther */
/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typeOther
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typeOther: number = 30; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typeOther */

/* START_OF_SYMBOL_DEFINITION typeOther */
/**
 * @summary typeOther
 * @constant
 */
export const typeOther: number = BioAPI_BIR_BIOMETRIC_TYPE_typeOther; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION typeOther */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typePassword */
/**
 * @summary BioAPI_BIR_BIOMETRIC_TYPE_typePassword
 * @constant
 */
export const BioAPI_BIR_BIOMETRIC_TYPE_typePassword: number = 31; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_BIOMETRIC_TYPE_typePassword */

/* START_OF_SYMBOL_DEFINITION typePassword */
/**
 * @summary typePassword
 * @constant
 */
export const typePassword: number = BioAPI_BIR_BIOMETRIC_TYPE_typePassword; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION typePassword */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_BIR_BIOMETRIC_TYPE */
let _cached_decoder_for_BioAPI_BIR_BIOMETRIC_TYPE: $.ASN1Decoder<BioAPI_BIR_BIOMETRIC_TYPE> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_BIR_BIOMETRIC_TYPE */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_BIR_BIOMETRIC_TYPE */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_BIR_BIOMETRIC_TYPE
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_BIR_BIOMETRIC_TYPE} The decoded data structure.
 */
export function _decode_BioAPI_BIR_BIOMETRIC_TYPE(el: _Element) {
  if (!_cached_decoder_for_BioAPI_BIR_BIOMETRIC_TYPE) {
    _cached_decoder_for_BioAPI_BIR_BIOMETRIC_TYPE = $._decodeBitString;
  }
  return _cached_decoder_for_BioAPI_BIR_BIOMETRIC_TYPE(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_BIR_BIOMETRIC_TYPE */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_BIR_BIOMETRIC_TYPE */
let _cached_encoder_for_BioAPI_BIR_BIOMETRIC_TYPE: $.ASN1Encoder<BioAPI_BIR_BIOMETRIC_TYPE> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_BIR_BIOMETRIC_TYPE */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_BIR_BIOMETRIC_TYPE */
/**
 * @summary Encodes a(n) BioAPI_BIR_BIOMETRIC_TYPE into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_BIR_BIOMETRIC_TYPE, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_BIR_BIOMETRIC_TYPE(
  value: BioAPI_BIR_BIOMETRIC_TYPE,
  elGetter: $.ASN1Encoder<BioAPI_BIR_BIOMETRIC_TYPE>
) {
  if (!_cached_encoder_for_BioAPI_BIR_BIOMETRIC_TYPE) {
    _cached_encoder_for_BioAPI_BIR_BIOMETRIC_TYPE = $._encodeBitString;
  }
  return _cached_encoder_for_BioAPI_BIR_BIOMETRIC_TYPE(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_BIR_BIOMETRIC_TYPE */

/* eslint-enable */
