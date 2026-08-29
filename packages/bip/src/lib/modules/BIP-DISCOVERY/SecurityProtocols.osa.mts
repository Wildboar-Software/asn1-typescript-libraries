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
import { type SECURITY_PROTOCOL } from '../BIP-DISCOVERY/SECURITY-PROTOCOL.oca.mjs';

/**
 * @summary SecurityProtocols
 * @description
 *
 * Information object set of `SECURITY-PROTOCOL`. Specified as
 * the empty set `{...}` and is to be populated with the
 * protocols an implementation supports. Absence of
 * `securityProtocols` in an `Announcement` means no security
 * is used for BIP transfers. ITU-T Rec. X.1083 (11/2007)
 * [Annex B.12](https://www.itu.int/rec/T-REC-X.1083-200711-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityProtocols SECURITY-PROTOCOL ::= {...}
 * ```
 *
 * @constant
 * @type {SECURITY_PROTOCOL[]}
 *
 */
export const SecurityProtocols: SECURITY_PROTOCOL[] = [];

/* eslint-enable */
