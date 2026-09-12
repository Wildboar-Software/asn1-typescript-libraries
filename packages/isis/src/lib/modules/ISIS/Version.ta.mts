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
 * @summary Version
 * @description
 *
 * Edition of ISO/IEC 10589 to which the implementation conforms (`version`
 * attribute). Also the protocol version reported by a neighbour in a
 * `versionSkew` alarm (`notificationVersion`).
 *
 * (ISO/IEC 10589:2002 clauses 11.2.4, 11.2.5.1 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Version  ::=  GraphicString
 * ```
 */
export type Version = GraphicString; // GraphicString


export const _decode_Version = $._decodeGraphicString;


export const _encode_Version = $._encodeGraphicString;


/* eslint-enable */
