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
 * @summary GraphicStringType
 * @description
 *
 * GraphicString alias. Syntax of `adjacencyId`: unique among adjacencies of a
 * linkage. Names with leading string `Auto` are reserved for protocol-created
 * adjacencies.
 *
 * (ISO/IEC 10589:2002 clauses 11.2.6.4 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GraphicStringType  ::=  GraphicString
 * ```
 */
export type GraphicStringType = GraphicString; // GraphicString


export const _decode_GraphicStringType = $._decodeGraphicString;


export const _encode_GraphicStringType = $._encodeGraphicString;


/* eslint-enable */
