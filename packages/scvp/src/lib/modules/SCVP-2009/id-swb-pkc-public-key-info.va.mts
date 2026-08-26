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
import { id_swb } from '../SCVP-2009/id-swb.va.mjs';
/**
 * @summary id_swb_pkc_public_key_info
 * @description
 *
 * WantBack OID: subject public key info ([RFC 5055 §3.2.3](https://datatracker.ietf.org/doc/html/rfc5055#section-3.2.3)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-swb-pkc-public-key-info      OBJECT IDENTIFIER ::= { id-swb 4 }
 * ```
 *
 * @constant
 */
export const id_swb_pkc_public_key_info: OBJECT_IDENTIFIER = _OID.fromParts(
  [4],
  id_swb
);

/* eslint-enable */
