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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary BioAPI_UUID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-UUID  ::=  OCTET STRING(SIZE (16))
 * ```
 */
export type BioAPI_UUID = OCTET_STRING; // OctetStringType




export const _decode_BioAPI_UUID = $._decodeOctetString;




export const _encode_BioAPI_UUID = $._encodeOctetString;


/* eslint-enable */
