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
import {
  asymmetricKeyInformation_KiType,
  _decode_asymmetricKeyInformation_KiType,
  _encode_asymmetricKeyInformation_KiType,
} from '../GulsSecurityTransformations/asymmetricKeyInformation-KiType.ta';
export {
  asymmetricKeyInformation_KiType,
  _decode_asymmetricKeyInformation_KiType,
  _encode_asymmetricKeyInformation_KiType,
} from '../GulsSecurityTransformations/asymmetricKeyInformation-KiType.ta';
import { KEY_INFORMATION } from '../GulsSecurityTransformations/KEY-INFORMATION.oca';
export { KEY_INFORMATION } from '../GulsSecurityTransformations/KEY-INFORMATION.oca';

/* START_OF_SYMBOL_DEFINITION asymmetricKeyInformation */
/**
 * @summary asymmetricKeyInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * asymmetricKeyInformation KEY-INFORMATION ::= {
 *   KEY-INFO-CLASS  local:1
 *   KEY-INFO-TYPE
 *     SEQUENCE {issuerCAName      SecurityIdentity OPTIONAL,
 *               certSerialNumber  INTEGER OPTIONAL,
 *               signerName        SecurityIdentity OPTIONAL,
 *               keyIdentifier     BIT STRING OPTIONAL}
 * }
 * ```
 *
 * @constant
 * @type {KEY_INFORMATION<asymmetricKeyInformation_KiType>}
 * @implements {KEY_INFORMATION<asymmetricKeyInformation_KiType>}
 */
export const asymmetricKeyInformation: KEY_INFORMATION<asymmetricKeyInformation_KiType> = {
  class: 'KEY-INFORMATION',
  decoderFor: {
    '&KiType': _decode_asymmetricKeyInformation_KiType,
  },
  encoderFor: {
    '&KiType': _encode_asymmetricKeyInformation_KiType,
  },
  '&kiClass': {
    local: 1,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&KiType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION asymmetricKeyInformation */

/* eslint-enable */
