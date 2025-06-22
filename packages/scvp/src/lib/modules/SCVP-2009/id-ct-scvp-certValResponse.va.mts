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
} from 'asn1-ts';
import { id_ct } from '../SCVP-2009/id-ct.va.mjs';
/**
 * @summary id_ct_scvp_certValResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ct-scvp-certValResponse OBJECT IDENTIFIER ::= { id-ct 11 }
 * ```
 *
 * @constant
 */
export const id_ct_scvp_certValResponse: OBJECT_IDENTIFIER = _OID.fromParts(
  [11],
  id_ct
);

/* eslint-enable */
