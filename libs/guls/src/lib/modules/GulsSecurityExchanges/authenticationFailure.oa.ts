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
  Identifier,
  _decode_Identifier,
  _encode_Identifier,
} from '../Notation/Identifier.ta';
export {
  Identifier,
  _decode_Identifier,
  _encode_Identifier,
} from '../Notation/Identifier.ta';
import { SE_ERROR } from '../Notation/SE-ERROR.oca';
export { SE_ERROR } from '../Notation/SE-ERROR.oca';
import {
    SecurityProblem,
    _decode_SecurityProblem,
    _encode_SecurityProblem,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/SecurityProblem.ta";

/* START_OF_SYMBOL_DEFINITION authenticationFailure */
/**
 * @summary authenticationFailure
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authenticationFailure SE-ERROR ::= {
 *   PARAMETER   DirectoryAbstractService.SecurityProblem
 *   ERROR-CODE  local:1
 * }
 * ```
 *
 * @constant
 * @type {SE_ERROR<DirectoryAbstractService.SecurityProblem>}
 * @implements {SE_ERROR<DirectoryAbstractService.SecurityProblem>}
 */
export const authenticationFailure: SE_ERROR<SecurityProblem> = {
  class: 'SE-ERROR',
  decoderFor: {
    '&ParameterType': _decode_SecurityProblem,
  },
  encoderFor: {
    '&ParameterType': _encode_SecurityProblem,
  },
  '&errorCode': {
    local: 1,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION authenticationFailure */

/* eslint-enable */
