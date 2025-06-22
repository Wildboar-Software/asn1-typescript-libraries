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
import { offeredIds } from '../GulsSecurityExchanges/offeredIds.oa.mjs';
import { acceptedIds } from '../GulsSecurityExchanges/acceptedIds.oa.mjs';
import { securityExchanges } from '../ObjectIdentifiers/securityExchanges.va.mjs';
import { SECURITY_EXCHANGE } from '../Notation/SECURITY-EXCHANGE.oca.mjs';

/**
 * @summary simpleNegotiationSE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * simpleNegotiationSE SECURITY-EXCHANGE ::= {
 *   SE-ITEMS    {offeredIds | acceptedIds}
 *   IDENTIFIER  global:{securityExchanges simple-negotiation-se(3)}
 * }
 * ```
 *
 * @constant
 * @type {SECURITY_EXCHANGE}
 * @implements {SECURITY_EXCHANGE}
 */
export const simpleNegotiationSE: SECURITY_EXCHANGE = {
  class: 'SECURITY-EXCHANGE',
  decoderFor: {},
  encoderFor: {},
  '&SE-Items': [offeredIds, acceptedIds] /* OBJECT_FIELD_SETTING */,
  '&sE-Identifier': {
    global: _OID.fromParts([/* simple-negotiation-se */ 3], securityExchanges),
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
