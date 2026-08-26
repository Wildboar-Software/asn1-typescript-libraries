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
import { id_svp } from '../SCVP-2009/id-svp.va.mjs';
/**
 * @summary id_svp_basicValAlg
 * @description
 *
 * OID for the basic validation algorithm ([RFC 5055 §3.2.4.2.1](https://datatracker.ietf.org/doc/html/rfc5055#section-3.2.4.2.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-svp-basicValAlg OBJECT IDENTIFIER ::= { id-svp 3 }
 * ```
 *
 * @constant
 */
export const id_svp_basicValAlg: OBJECT_IDENTIFIER = _OID.fromParts([3], id_svp);

/* eslint-enable */
