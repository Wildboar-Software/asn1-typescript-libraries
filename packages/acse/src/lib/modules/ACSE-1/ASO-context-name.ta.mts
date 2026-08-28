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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary ASO_context_name
 * @description
 *
 * OBJECT IDENTIFIER naming an ASO-context: the role of the association
 * and the Control Functions of the ASOs communicating over it.
 * Registration follows X.660 | ISO/IEC 9834-1 (no international RA is
 * planned). ITU-T Rec. X.217 bis (1998) §6.1, §8.1.1.1; X.227 bis
 * (1998) §12.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ASO-context-name  ::=  OBJECT IDENTIFIER
 * ```
 */
export type ASO_context_name = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_ASO_context_name = $._decodeObjectIdentifier;


export const _encode_ASO_context_name = $._encodeObjectIdentifier;


/* eslint-enable */
