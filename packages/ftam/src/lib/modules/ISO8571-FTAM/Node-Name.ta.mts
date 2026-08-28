/* eslint-disable */
import {
  EXTERNAL,
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
 * @summary Node_Name
 * @description
 *
 * Node identifier as `EXTERNAL`. The actual type is the ISO8571-FADU
 * `Node-Name` CHOICE: `ftam-coded` GraphicString (same abstract
 * syntax as structuring information; only when contents type is a
 * document type name) or `user-coded` EXTERNAL (types from the
 * file-contents abstract syntax). ISO 8571-2:1988 Figure 4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Node-Name  ::=  EXTERNAL
 * ```
 */
export type Node_Name = EXTERNAL; // ExternalType




export const _decode_Node_Name = $._decodeExternal;




export const _encode_Node_Name = $._encodeExternal;


/* eslint-enable */
