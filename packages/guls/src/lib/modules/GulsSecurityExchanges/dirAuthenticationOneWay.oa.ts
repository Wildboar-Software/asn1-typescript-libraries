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
import { SEC_EXCHG_ITEM } from '../Notation/SEC-EXCHG-ITEM.oca';
export { SEC_EXCHG_ITEM } from '../Notation/SEC-EXCHG-ITEM.oca';
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
import { credentials } from '../GulsSecurityExchanges/credentials.oa';
export { credentials } from '../GulsSecurityExchanges/credentials.oa';
import { securityExchanges } from '../ObjectIdentifiers/securityExchanges.va';
export { securityExchanges } from '../ObjectIdentifiers/securityExchanges.va';
import { SECURITY_EXCHANGE } from '../Notation/SECURITY-EXCHANGE.oca';
export { SECURITY_EXCHANGE } from '../Notation/SECURITY-EXCHANGE.oca';

/* START_OF_SYMBOL_DEFINITION dirAuthenticationOneWay */
/**
 * @summary dirAuthenticationOneWay
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dirAuthenticationOneWay SECURITY-EXCHANGE ::= {
 *   SE-ITEMS    {credentials}
 *   IDENTIFIER  global:{securityExchanges dir-authent-one-way(1)}
 * }
 * ```
 *
 * @constant
 * @type {SECURITY_EXCHANGE}
 * @implements {SECURITY_EXCHANGE}
 */
export const dirAuthenticationOneWay: SECURITY_EXCHANGE = {
  class: 'SECURITY-EXCHANGE',
  decoderFor: {},
  encoderFor: {},
  '&SE-Items': [credentials] /* OBJECT_FIELD_SETTING */,
  '&sE-Identifier': {
    global: new _OID([/* dir-authent-one-way */ 1], securityExchanges),
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dirAuthenticationOneWay */

/* eslint-enable */
