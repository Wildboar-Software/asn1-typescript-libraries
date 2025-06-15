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

/* START_OF_SYMBOL_DEFINITION _enum_for_SignallingCapabilities */
/**
 * @summary SignallingCapabilities
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignallingCapabilities  ::=  ENUMERATED {
 *   isup(0), isup92(1), itu-tNo5(2), r2(3), itu-tNo6(4), tup(5)
 *
 * -- "..." these ellipses defined in ASN.1 amendment are used here to indicate that this is
 * -- an  extensible type and additional enumerations may be added in future --}
 * ```@enum {number}
 */
export enum _enum_for_SignallingCapabilities {
    isup = 0,
    isup92 = 1,
    itu_tNo5 = 2,
    r2 = 3,
    itu_tNo6 = 4,
    tup = 5,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SignallingCapabilities */

/* START_OF_SYMBOL_DEFINITION SignallingCapabilities */
/**
 * @summary SignallingCapabilities
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignallingCapabilities  ::=  ENUMERATED {
 *   isup(0), isup92(1), itu-tNo5(2), r2(3), itu-tNo6(4), tup(5)
 *
 * -- "..." these ellipses defined in ASN.1 amendment are used here to indicate that this is
 * -- an  extensible type and additional enumerations may be added in future --}
 * ```@enum {number}
 */
export type SignallingCapabilities = _enum_for_SignallingCapabilities;
/* END_OF_SYMBOL_DEFINITION SignallingCapabilities */

/* START_OF_SYMBOL_DEFINITION SignallingCapabilities */
/**
 * @summary SignallingCapabilities
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignallingCapabilities  ::=  ENUMERATED {
 *   isup(0), isup92(1), itu-tNo5(2), r2(3), itu-tNo6(4), tup(5)
 *
 * -- "..." these ellipses defined in ASN.1 amendment are used here to indicate that this is
 * -- an  extensible type and additional enumerations may be added in future --}
 * ```@enum {number}
 */
export const SignallingCapabilities = _enum_for_SignallingCapabilities;
/* END_OF_SYMBOL_DEFINITION SignallingCapabilities */

/* START_OF_SYMBOL_DEFINITION SignallingCapabilities_isup */
/**
 * @summary SignallingCapabilities_isup
 * @constant
 * @type {number}
 */
export const SignallingCapabilities_isup: SignallingCapabilities =
    SignallingCapabilities.isup; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SignallingCapabilities_isup */

/* START_OF_SYMBOL_DEFINITION isup */
/**
 * @summary isup
 * @constant
 * @type {number}
 */
export const isup: SignallingCapabilities =
    SignallingCapabilities.isup; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION isup */

/* START_OF_SYMBOL_DEFINITION SignallingCapabilities_isup92 */
/**
 * @summary SignallingCapabilities_isup92
 * @constant
 * @type {number}
 */
export const SignallingCapabilities_isup92: SignallingCapabilities =
    SignallingCapabilities.isup92; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SignallingCapabilities_isup92 */

/* START_OF_SYMBOL_DEFINITION isup92 */
/**
 * @summary isup92
 * @constant
 * @type {number}
 */
export const isup92: SignallingCapabilities =
    SignallingCapabilities.isup92; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION isup92 */

/* START_OF_SYMBOL_DEFINITION SignallingCapabilities_itu_tNo5 */
/**
 * @summary SignallingCapabilities_itu_tNo5
 * @constant
 * @type {number}
 */
export const SignallingCapabilities_itu_tNo5: SignallingCapabilities =
    SignallingCapabilities.itu_tNo5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SignallingCapabilities_itu_tNo5 */

/* START_OF_SYMBOL_DEFINITION itu_tNo5 */
/**
 * @summary itu_tNo5
 * @constant
 * @type {number}
 */
export const itu_tNo5: SignallingCapabilities =
    SignallingCapabilities.itu_tNo5; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION itu_tNo5 */

/* START_OF_SYMBOL_DEFINITION SignallingCapabilities_r2 */
/**
 * @summary SignallingCapabilities_r2
 * @constant
 * @type {number}
 */
export const SignallingCapabilities_r2: SignallingCapabilities =
    SignallingCapabilities.r2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SignallingCapabilities_r2 */

/* START_OF_SYMBOL_DEFINITION r2 */
/**
 * @summary r2
 * @constant
 * @type {number}
 */
export const r2: SignallingCapabilities =
    SignallingCapabilities.r2; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION r2 */

/* START_OF_SYMBOL_DEFINITION SignallingCapabilities_itu_tNo6 */
/**
 * @summary SignallingCapabilities_itu_tNo6
 * @constant
 * @type {number}
 */
export const SignallingCapabilities_itu_tNo6: SignallingCapabilities =
    SignallingCapabilities.itu_tNo6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SignallingCapabilities_itu_tNo6 */

/* START_OF_SYMBOL_DEFINITION itu_tNo6 */
/**
 * @summary itu_tNo6
 * @constant
 * @type {number}
 */
export const itu_tNo6: SignallingCapabilities =
    SignallingCapabilities.itu_tNo6; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION itu_tNo6 */

/* START_OF_SYMBOL_DEFINITION SignallingCapabilities_tup */
/**
 * @summary SignallingCapabilities_tup
 * @constant
 * @type {number}
 */
export const SignallingCapabilities_tup: SignallingCapabilities =
    SignallingCapabilities.tup; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SignallingCapabilities_tup */

/* START_OF_SYMBOL_DEFINITION tup */
/**
 * @summary tup
 * @constant
 * @type {number}
 */
export const tup: SignallingCapabilities =
    SignallingCapabilities.tup; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION tup */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignallingCapabilities */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignallingCapabilities */

/* START_OF_SYMBOL_DEFINITION _decode_SignallingCapabilities */
export const _decode_SignallingCapabilities = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_SignallingCapabilities */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignallingCapabilities */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignallingCapabilities */

/* START_OF_SYMBOL_DEFINITION _encode_SignallingCapabilities */
export const _encode_SignallingCapabilities = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_SignallingCapabilities */

/* eslint-enable */
