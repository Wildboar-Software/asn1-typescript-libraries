/* eslint-disable */
import {
  T61String,
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
 * @summary AdditionalReferenceInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdditionalReferenceInformation  ::=  T61String
 * ```
 */
export type AdditionalReferenceInformation = T61String; // T61String




export const _decode_AdditionalReferenceInformation = $._decodeT61String;




export const _encode_AdditionalReferenceInformation = $._encodeT61String;


/* eslint-enable */
