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
/* START_OF_SYMBOL_DEFINITION id_ct_scvp_certValResponse */
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
export const id_ct_scvp_certValResponse: OBJECT_IDENTIFIER = new _OID(
  [11],
  id_ct
);
/* END_OF_SYMBOL_DEFINITION id_ct_scvp_certValResponse */

/* eslint-enable */
