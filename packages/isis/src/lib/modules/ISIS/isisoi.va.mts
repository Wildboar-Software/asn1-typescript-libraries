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
import { nl } from "@wildboar/nlm";

/**
 * @summary isisoi
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * isisoi OBJECT IDENTIFIER ::= {nl iSIS(1)}
 * ```
 *
 * @constant
 */
export const isisoi: OBJECT_IDENTIFIER = _OID.fromParts([/* iSIS */ 1], nl);

/* eslint-enable */
