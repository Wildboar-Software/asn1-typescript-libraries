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
} from '@wildboar/asn1';
import {
  _decode_Identifier,
  _encode_Identifier,
} from '../Notation/Identifier.ta.mjs';
import { initiatorCredentials } from '../GulsSecurityExchanges/initiatorCredentials.oa.mjs';
import { responderCredentials } from '../GulsSecurityExchanges/responderCredentials.oa.mjs';
import { securityExchanges } from '../ObjectIdentifiers/securityExchanges.va.mjs';
import { type SECURITY_EXCHANGE } from '../Notation/SECURITY-EXCHANGE.oca.mjs';

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
    global: _OID.fromParts([/* dir-authent-two-way */ 2], securityExchanges),
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
