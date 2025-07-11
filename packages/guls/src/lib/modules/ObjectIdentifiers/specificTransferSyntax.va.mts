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
import { genericULS } from '../ObjectIdentifiers/genericULS.va.mjs';

/**
 * @summary specificTransferSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * specificTransferSyntax OBJECT IDENTIFIER ::= {genericULS 3}
 * ```
 *
 * @constant
 */
export const specificTransferSyntax: OBJECT_IDENTIFIER = _OID.fromParts(
  [3],
  genericULS
);

/* eslint-enable */
