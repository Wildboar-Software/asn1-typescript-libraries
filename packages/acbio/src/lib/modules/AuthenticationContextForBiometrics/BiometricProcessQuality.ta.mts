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

/* START_OF_SYMBOL_DEFINITION BiometricProcessQuality */
/**
 * @summary BiometricProcessQuality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BiometricProcessQuality  ::=  OCTET STRING (SIZE(1..MAX))
 * ```
 */
export type BiometricProcessQuality = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION BiometricProcessQuality */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BiometricProcessQuality */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BiometricProcessQuality */

/* START_OF_SYMBOL_DEFINITION _decode_BiometricProcessQuality */
export const _decode_BiometricProcessQuality = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_BiometricProcessQuality */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BiometricProcessQuality */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BiometricProcessQuality */

/* START_OF_SYMBOL_DEFINITION _encode_BiometricProcessQuality */
export const _encode_BiometricProcessQuality = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_BiometricProcessQuality */

/* eslint-enable */
