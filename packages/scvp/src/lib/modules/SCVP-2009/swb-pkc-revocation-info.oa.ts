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
  RevInfoWantBack,
  _decode_RevInfoWantBack,
  _encode_RevInfoWantBack,
} from '../SCVP-2009/RevInfoWantBack.ta';
export {
  RevInfoWantBack,
  _decode_RevInfoWantBack,
  _encode_RevInfoWantBack,
} from '../SCVP-2009/RevInfoWantBack.ta';
import { id_swb_pkc_revocation_info } from '../SCVP-2009/id-swb-pkc-revocation-info.va';
export { id_swb_pkc_revocation_info } from '../SCVP-2009/id-swb-pkc-revocation-info.va';
import { WANT_BACK } from '../SCVP-2009/WANT-BACK.oca';
export { WANT_BACK } from '../SCVP-2009/WANT-BACK.oca';

/* START_OF_SYMBOL_DEFINITION swb_pkc_revocation_info */
/**
 * @summary swb_pkc_revocation_info
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * swb-pkc-revocation-info WANT-BACK ::= { RevInfoWantBack IDENTIFIED BY id-swb-pkc-revocation-info }
 * ```
 *
 * @constant
 * @type {WANT_BACK<RevInfoWantBack>}
 * @implements {WANT_BACK<RevInfoWantBack>}
 */
export const swb_pkc_revocation_info: WANT_BACK<RevInfoWantBack> = {
  class: 'TYPE-IDENTIFIER',
  decoderFor: {
    '&Type': _decode_RevInfoWantBack,
  },
  encoderFor: {
    '&Type': _encode_RevInfoWantBack,
  },
  '&id': id_swb_pkc_revocation_info /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION swb_pkc_revocation_info */

/* eslint-enable */
