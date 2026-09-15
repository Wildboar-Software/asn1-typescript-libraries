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
 * @summary CommunicationsEntityId
 * @description
 *
 * Naming attribute of a `communicationsEntity` managed object.
 *
 * (ISO/IEC 10589:2002 Annex E.1.2, E.1.9 and E.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommunicationsEntityId  ::=  GraphicString
 * ```
 */
export type CommunicationsEntityId = GraphicString; // GraphicString


export const _decode_CommunicationsEntityId = $._decodeGraphicString;


export const _encode_CommunicationsEntityId = $._encodeGraphicString;


/* eslint-enable */
