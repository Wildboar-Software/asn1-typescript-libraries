/* eslint-disable */
import {
  NULL,
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
 * @summary FreeBIRHandle_ResponseParams
 * @description
 *
 * Success payload of a `freeBIRHandle` response (slave→master) for
 * BioAPI_FreeBIRHandle. Always `NULL`; outcome is
 * `BIPResponse.returnValue`. X.1083 §16.19.2, §16.19.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FreeBIRHandle-ResponseParams  ::=  NULL
 * ```
 */
export type FreeBIRHandle_ResponseParams = NULL; // NullType




export const _decode_FreeBIRHandle_ResponseParams = $._decodeNull;




export const _encode_FreeBIRHandle_ResponseParams = $._encodeNull;


/* eslint-enable */
