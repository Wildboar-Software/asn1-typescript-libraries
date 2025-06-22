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
import { id_stc } from '../SCVP-2009/id-stc.va.mjs';
/**
 * @summary id_stc_build_valid_pkc_path
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-stc-build-valid-pkc-path  OBJECT IDENTIFIER ::= { id-stc 2 }
 * ```
 *
 * @constant
 */
export const id_stc_build_valid_pkc_path: OBJECT_IDENTIFIER = _OID.fromParts(
  [2],
  id_stc
);

/* eslint-enable */
