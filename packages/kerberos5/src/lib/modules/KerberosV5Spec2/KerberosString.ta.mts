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
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION KerberosString */
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
/* END_OF_SYMBOL_DEFINITION KerberosString */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KerberosString */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KerberosString */

/* START_OF_SYMBOL_DEFINITION _decode_KerberosString */
export const _decode_KerberosString = $._decodeGeneralString;
/* END_OF_SYMBOL_DEFINITION _decode_KerberosString */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KerberosString */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KerberosString */

/* START_OF_SYMBOL_DEFINITION _encode_KerberosString */
export const _encode_KerberosString = $._encodeGeneralString;

/* END_OF_SYMBOL_DEFINITION _encode_KerberosString */

/* eslint-enable */
