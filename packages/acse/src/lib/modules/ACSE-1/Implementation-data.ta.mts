/* eslint-disable */
import {
  GraphicString,
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
 * @summary Implementation_data
 * @description
 *
 * Implementation-specific ACPM information. Not used in negotiation;
 * any use depends on common understanding between the two ACPMs.
 * ITU-T Rec. X.227 bis (1998) §7.1.4.15.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Implementation-data  ::=  GraphicString
 * ```
 */
export type Implementation_data = GraphicString; // GraphicString


export const _decode_Implementation_data = $._decodeGraphicString;


export const _encode_Implementation_data = $._encodeGraphicString;


/* eslint-enable */
