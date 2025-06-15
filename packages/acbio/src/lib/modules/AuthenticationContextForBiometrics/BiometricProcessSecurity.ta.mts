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

/* START_OF_SYMBOL_DEFINITION BiometricProcessSecurity */
/**
 * @summary BiometricProcessSecurity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BiometricProcessSecurity  ::=  OCTET STRING (SIZE(1..MAX))
 * ```
 */
export type BiometricProcessSecurity = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION BiometricProcessSecurity */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BiometricProcessSecurity */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BiometricProcessSecurity */

/* START_OF_SYMBOL_DEFINITION _decode_BiometricProcessSecurity */
export const _decode_BiometricProcessSecurity = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_BiometricProcessSecurity */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BiometricProcessSecurity */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BiometricProcessSecurity */

/* START_OF_SYMBOL_DEFINITION _encode_BiometricProcessSecurity */
export const _encode_BiometricProcessSecurity = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_BiometricProcessSecurity */

/* eslint-enable */
