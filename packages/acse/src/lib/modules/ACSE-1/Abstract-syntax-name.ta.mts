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
 * @summary Abstract_syntax_name
 * @description
 *
 * OBJECT IDENTIFIER of an abstract syntax in a presentation context
 * definition. See ITU-T Rec. X.216 | ISO/IEC 8822. ITU-T Rec.
 * X.227 bis (1998) §9.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Abstract-syntax-name  ::=  OBJECT IDENTIFIER
 * ```
 */
export type Abstract_syntax_name = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_Abstract_syntax_name = $._decodeObjectIdentifier;


export const _encode_Abstract_syntax_name = $._encodeObjectIdentifier;


/* eslint-enable */
