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
import { genericULS } from '../ObjectIdentifiers/genericULS.va.mjs';

/**
 * @summary generalTransferSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * generalTransferSyntax OBJECT IDENTIFIER ::= {genericULS 2}
 * ```
 *
 * @constant
 */
export const generalTransferSyntax: OBJECT_IDENTIFIER = new _OID(
  [2],
  genericULS
);

/* eslint-enable */
