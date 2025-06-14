/* eslint-disable */
import {
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import {
  _decode_Identifier,
  _encode_Identifier,
} from '../Notation/Identifier.ta.mjs';
import { credentials } from '../GulsSecurityExchanges/credentials.oa.mjs';
import { securityExchanges } from '../ObjectIdentifiers/securityExchanges.va.mjs';
import { SECURITY_EXCHANGE } from '../Notation/SECURITY-EXCHANGE.oca.mjs';
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
