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
 * @summary ProtocolMachineId
 * @description
 *
 * Naming attribute of a connectionless or connection-mode protocol machine
 * (`clProtocolMachineId` / `coProtocolMachineId`).
 *
 * (ISO/IEC 10589:2002 Annex E.1.9 and E.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtocolMachineId  ::=  GraphicString
 * ```
 */
export type ProtocolMachineId = GraphicString; // GraphicString


export const _decode_ProtocolMachineId = $._decodeGraphicString;


export const _encode_ProtocolMachineId = $._encodeGraphicString;


/* eslint-enable */
