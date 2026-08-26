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
import { id_svp_basicValAlg } from '../SCVP-2009/id-svp-basicValAlg.va.mjs';
/**
 * @summary id_bvae
 * @description
 *
 * Arc for basic validation algorithm errors (`id-bvae` ::= `id-svp-basicValAlg`) ([RFC 5055 §3.2.4.2.2](https://datatracker.ietf.org/doc/html/rfc5055#section-3.2.4.2.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-bvae OBJECT IDENTIFIER ::= id-svp-basicValAlg
 * ```
 *
 * @constant
 */
export const id_bvae: OBJECT_IDENTIFIER = id_svp_basicValAlg;

/* eslint-enable */
