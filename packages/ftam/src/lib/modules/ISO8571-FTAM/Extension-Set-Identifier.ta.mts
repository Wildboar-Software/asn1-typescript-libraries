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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Extension_Set_Identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Extension-Set-Identifier  ::=  OBJECT IDENTIFIER
 * ```
 */
export type Extension_Set_Identifier = OBJECT_IDENTIFIER; // ObjectIdentifierType




export const _decode_Extension_Set_Identifier = $._decodeObjectIdentifier;




export const _encode_Extension_Set_Identifier = $._encodeObjectIdentifier;


/* eslint-enable */
