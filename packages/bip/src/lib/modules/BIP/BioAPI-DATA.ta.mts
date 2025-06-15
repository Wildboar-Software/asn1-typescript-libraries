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
import * as $ from 'asn1-ts/dist/functional.mjs';


/**
 * @summary BioAPI_DATA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-DATA  ::=  OCTET STRING(SIZE (0..max-unsigned-int))
 * ```
 */
export type BioAPI_DATA = OCTET_STRING; // OctetStringType




export const _decode_BioAPI_DATA = $._decodeOctetString;




export const _encode_BioAPI_DATA = $._encodeOctetString;


/* eslint-enable */
