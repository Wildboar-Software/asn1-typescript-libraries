/* eslint-disable */
import {
  GeneralString,
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
 * @summary KerberosString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KerberosString   ::=  GeneralString (IA5String)
 * ```
 */
export type KerberosString = GeneralString; // GeneralString




export const _decode_KerberosString = $._decodeGeneralString;




export const _encode_KerberosString = $._encodeGeneralString;


/* eslint-enable */
