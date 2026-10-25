/* eslint-disable */
import {
  type T61String,
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
 * @summary AdditionalReferenceInformation
 * @description
 *
 * Optional Additional Reference Information component of the
 * session-connection identifier. ITU-T Rec. X.228 (11/88)
 * §8.1.1.1.3.5, §9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdditionalReferenceInformation  ::=  T61String
 * ```
 */
export type AdditionalReferenceInformation = T61String; // T61String




export const _decode_AdditionalReferenceInformation: $.ASN1Decoder<T61String> = $._decodeT61String;




export const _encode_AdditionalReferenceInformation: $.ASN1Encoder<T61String> = $._encodeT61String;


/* eslint-enable */
