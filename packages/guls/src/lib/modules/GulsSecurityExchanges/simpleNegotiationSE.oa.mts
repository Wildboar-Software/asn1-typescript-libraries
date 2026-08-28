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
import { type SECURITY_EXCHANGE } from '../Notation/SECURITY-EXCHANGE.oca.mjs';

/**
 * @summary simpleNegotiationSE
 * @description
 *
 * Negotiation-SE: initiator proposes security-exchange OIDs in
 * `offeredIds`; responder returns which of those will be used in
 * `acceptedIds`. An application-context that supports several
 * exchanges for the same services uses this to pick among them,
 * and may repeat it later to change the selection. Contexts that
 * need negotiation must specify use of this exchange. ITU-T Rec.
 * X.830 (04/95) [Annex C.3](https://www.itu.int/rec/T-REC-X.830-199504-I).
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
