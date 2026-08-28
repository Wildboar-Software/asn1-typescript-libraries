/* eslint-disable */
import {
  PrintableString,
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
 * @summary ASO_qualifier_form3
 * @description
 *
 * PrintableString ASO-qualifier. Extension addition in ITU-T Rec.
 * X.227 bis (1998) §9.1; that text does not assign further semantics.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ASO-qualifier-form3  ::=  PrintableString
 * ```
 */
export type ASO_qualifier_form3 = PrintableString; // PrintableString


export const _decode_ASO_qualifier_form3 = $._decodePrintableString;


export const _encode_ASO_qualifier_form3 = $._encodePrintableString;


/* eslint-enable */
