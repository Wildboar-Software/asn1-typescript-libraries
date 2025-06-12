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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  ParamOptions,
  _enum_for_ParamOptions,
  ParamOptions_required /* IMPORTED_LONG_ENUMERATION_ITEM */,
  required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ParamOptions_preferredPresent /* IMPORTED_LONG_ENUMERATION_ITEM */,
  preferredPresent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ParamOptions_preferredAbsent /* IMPORTED_LONG_ENUMERATION_ITEM */,
  preferredAbsent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ParamOptions_absent /* IMPORTED_LONG_ENUMERATION_ITEM */,
  absent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ParamOptions_inheritable /* IMPORTED_LONG_ENUMERATION_ITEM */,
  inheritable /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ParamOptions_optional /* IMPORTED_LONG_ENUMERATION_ITEM */,
  optional /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_ParamOptions,
  _encode_ParamOptions,
} from '../AlgorithmInformation-2009/ParamOptions.ta.mjs';
import { id_sha1 } from '@wildboar/x500/src/lib/modules/AlgorithmObjectIdentifiers/id-sha1.va.mjs';
import { DIGEST_ALGORITHM } from '../AlgorithmInformation-2009/DIGEST-ALGORITHM.oca.mjs';

/* START_OF_SYMBOL_DEFINITION mda_sha1 */
/**
 * @summary mda_sha1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mda-sha1 DIGEST-ALGORITHM ::= {
 * IDENTIFIER id-sha1
 * PARAMS TYPE NULL ARE preferredAbsent
 * }
 * ```
 *
 * @constant
 * @type {DIGEST_ALGORITHM<NULL>}
 * @implements {DIGEST_ALGORITHM<NULL>}
 */
export const mda_sha1: DIGEST_ALGORITHM<NULL> = {
  class: 'DIGEST-ALGORITHM',
  decoderFor: {
    '&Params': $._decodeNull,
  },
  encoderFor: {
    '&Params': $._encodeNull,
  },
  '&id': id_sha1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&paramPresence': preferredAbsent /* OBJECT_FIELD_SETTING */,
  '&Params': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mda_sha1 */

/* eslint-enable */
