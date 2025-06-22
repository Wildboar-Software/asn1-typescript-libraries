/* eslint-disable */
import {
  OCTET_STRING,
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
 * @summary MACAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MACAddress  ::=  OCTET STRING(SIZE (6))
 * ```
 */
export type MACAddress = OCTET_STRING; // OctetStringType




export const _decode_MACAddress = $._decodeOctetString;




export const _encode_MACAddress = $._encodeOctetString;


/* eslint-enable */
