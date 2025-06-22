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
import { id_ct } from '../SCVP-2009/id-ct.va.mjs';
/**
 * @summary id_ct_scvp_certValRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ct-scvp-certValRequest OBJECT IDENTIFIER ::= { id-ct 10 }
 * ```
 *
 * @constant
 */
export const id_ct_scvp_certValRequest: OBJECT_IDENTIFIER = _OID.fromParts(
  [10],
  id_ct
);

/* eslint-enable */
