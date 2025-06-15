/* eslint-disable */
import {
    PrintableString,
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

/* START_OF_SYMBOL_DEFINITION RegistrationIdentifier */
/**
 * @summary RegistrationIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegistrationIdentifier  ::=
 *   PrintableString(SIZE (1..ub-ua-registration-identifier-length))
 * ```
 */
export type RegistrationIdentifier = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION RegistrationIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RegistrationIdentifier */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RegistrationIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_RegistrationIdentifier */
export const _decode_RegistrationIdentifier = $._decodePrintableString;
/* END_OF_SYMBOL_DEFINITION _decode_RegistrationIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RegistrationIdentifier */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RegistrationIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_RegistrationIdentifier */
export const _encode_RegistrationIdentifier = $._encodePrintableString;

/* END_OF_SYMBOL_DEFINITION _encode_RegistrationIdentifier */

/* eslint-enable */
