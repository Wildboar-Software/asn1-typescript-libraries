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
import * as $ from 'asn1-ts/dist/functional.mjs';


/**
 * @summary AE_qualifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AE-qualifier  ::=  TYPE-IDENTIFIER.&Type
 * ```
 */
export type AE_qualifier = _Element; // ObjectClassFieldType




export const _decode_AE_qualifier = $._decodeAny;




export const _encode_AE_qualifier = $._encodeAny;


/* eslint-enable */
