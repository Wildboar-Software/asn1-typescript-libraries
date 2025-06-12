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
import { SE_ERROR } from '../Notation/SE-ERROR.oca.mjs';
export { SE_ERROR } from '../Notation/SE-ERROR.oca.mjs';
import { SEC_EXCHG_ITEM } from '../Notation/SEC-EXCHG-ITEM.oca.mjs';
export { SEC_EXCHG_ITEM } from '../Notation/SEC-EXCHG-ITEM.oca.mjs';
import {
    Credentials,
    _decode_Credentials,
    _encode_Credentials,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/Credentials.ta.mjs";

/* START_OF_SYMBOL_DEFINITION credentials */
/**
 * @summary credentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * credentials SEC-EXCHG-ITEM ::= {
 *   ITEM-TYPE  DirectoryAbstractService.Credentials
 *   ITEM-ID    1
 * }
 * ```
 *
 * @constant
 * @type {SEC_EXCHG_ITEM<DirectoryAbstractService.Credentials>}
 * @implements {SEC_EXCHG_ITEM<DirectoryAbstractService.Credentials>}
 */
export const credentials: SEC_EXCHG_ITEM<Credentials> = {
  class: 'SEC-EXCHG-ITEM',
  decoderFor: {
    '&ItemType': _decode_Credentials,
  },
  encoderFor: {
    '&ItemType': _encode_Credentials,
  },
  '&itemId': 1 /* OBJECT_FIELD_SETTING */,
  '&ItemType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION credentials */

/* eslint-enable */
