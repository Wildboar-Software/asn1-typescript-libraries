/* eslint-disable */
import {
  OBJECT_IDENTIFIER,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import { genericULS } from '../ObjectIdentifiers/genericULS.va.mjs';

/**
 * @summary securityExchanges
 * @description
 *
 * Arc for registered security-exchange OIDs (`{genericULS 4}`).
 * GULS assigns `dir-authent-one-way(1)`,
 * `dir-authent-two-way(2)`, `simple-negotiation-se(3)`. ITU-T
 * Rec. X.830 (04/95) [Annex F](https://www.itu.int/rec/T-REC-X.830-199504-I), Annex C; Annex B.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * securityExchanges OBJECT IDENTIFIER ::= {genericULS 4}
 * ```
 *
 * @constant
 */
export const securityExchanges: OBJECT_IDENTIFIER = _OID.fromParts([4], genericULS);

/* eslint-enable */
