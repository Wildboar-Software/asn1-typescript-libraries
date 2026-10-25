/* eslint-disable */
import {
  type INTEGER,
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
 * @summary Presentation_context_identifier
 * @description
 *
 * INTEGER identifying a presentation context (PCI). See ITU-T Rec.
 * X.216 | ISO/IEC 8822. ITU-T Rec. X.227 bis (1998) §9.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Presentation-context-identifier  ::=  INTEGER
 * ```
 */
export type Presentation_context_identifier = INTEGER;


export const _decode_Presentation_context_identifier: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_Presentation_context_identifier: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
