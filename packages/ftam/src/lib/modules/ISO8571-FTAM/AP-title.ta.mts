/* eslint-disable */
import {
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
 * @summary AP_title
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AP-title  ::=  TYPE-IDENTIFIER.&Type
 * ```
 */
export type AP_title = _Element; // ObjectClassFieldType




export const _decode_AP_title = $._decodeAny;




export const _encode_AP_title = $._encodeAny;


/* eslint-enable */
