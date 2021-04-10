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
import { initiatorCredentials } from '../GulsSecurityExchanges/initiatorCredentials.oa';
export { initiatorCredentials } from '../GulsSecurityExchanges/initiatorCredentials.oa';
import { responderCredentials } from '../GulsSecurityExchanges/responderCredentials.oa';
export { responderCredentials } from '../GulsSecurityExchanges/responderCredentials.oa';
import { securityExchanges } from '../ObjectIdentifiers/securityExchanges.va';
export { securityExchanges } from '../ObjectIdentifiers/securityExchanges.va';
import { SECURITY_EXCHANGE } from '../Notation/SECURITY-EXCHANGE.oca';
export { SECURITY_EXCHANGE } from '../Notation/SECURITY-EXCHANGE.oca';

/* START_OF_SYMBOL_DEFINITION dirAuthenticationTwoWay */
/**
 * @summary dirAuthenticationTwoWay
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dirAuthenticationTwoWay SECURITY-EXCHANGE ::= {
 *   SE-ITEMS    {initiatorCredentials | responderCredentials}
 *   IDENTIFIER  global:{securityExchanges dir-authent-two-way(2)}
 * }
 * ```
 *
 * @constant
 * @type {SECURITY_EXCHANGE}
 * @implements {SECURITY_EXCHANGE}
 */
export const dirAuthenticationTwoWay: SECURITY_EXCHANGE = {
  class: 'SECURITY-EXCHANGE',
  decoderFor: {},
  encoderFor: {},
  '&SE-Items': [
    initiatorCredentials,
    responderCredentials,
  ] /* OBJECT_FIELD_SETTING */,
  '&sE-Identifier': {
    global: new _OID([/* dir-authent-two-way */ 2], securityExchanges),
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dirAuthenticationTwoWay */

/* eslint-enable */
