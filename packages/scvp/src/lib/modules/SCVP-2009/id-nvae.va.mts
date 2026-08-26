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
import { id_svp_nameValAlg } from '../SCVP-2009/id-svp-nameValAlg.va.mjs';
/**
 * @summary id_nvae
 * @description
 *
 * Arc for name validation algorithm errors (`id-nvae` ::= `id-svp-nameValAlg`) ([RFC 5055 §3.2.4.2.4](https://datatracker.ietf.org/doc/html/rfc5055#section-3.2.4.2.4)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nvae OBJECT IDENTIFIER ::= id-svp-nameValAlg
 * ```
 *
 * @constant
 */
export const id_nvae: OBJECT_IDENTIFIER = id_svp_nameValAlg;

/* eslint-enable */
