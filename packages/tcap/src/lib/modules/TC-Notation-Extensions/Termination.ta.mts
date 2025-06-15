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

/* START_OF_SYMBOL_DEFINITION _enum_for_Termination */
/**
 * @summary Termination
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Termination  ::=  ENUMERATED {basic(1), prearranged(2)}
 * ```@enum {number}
 */
export enum _enum_for_Termination {
    basic = 1,
    prearranged = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_Termination */

/* START_OF_SYMBOL_DEFINITION Termination */
/**
 * @summary Termination
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Termination  ::=  ENUMERATED {basic(1), prearranged(2)}
 * ```@enum {number}
 */
export type Termination = _enum_for_Termination;
/* END_OF_SYMBOL_DEFINITION Termination */

/* START_OF_SYMBOL_DEFINITION Termination */
/**
 * @summary Termination
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Termination  ::=  ENUMERATED {basic(1), prearranged(2)}
 * ```@enum {number}
 */
export const Termination = _enum_for_Termination;
/* END_OF_SYMBOL_DEFINITION Termination */

/* START_OF_SYMBOL_DEFINITION Termination_basic */
/**
 * @summary Termination_basic
 * @constant
 * @type {number}
 */
export const Termination_basic: Termination =
    Termination.basic; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Termination_basic */

/* START_OF_SYMBOL_DEFINITION basic */
/**
 * @summary basic
 * @constant
 * @type {number}
 */
export const basic: Termination =
    Termination.basic; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION basic */

/* START_OF_SYMBOL_DEFINITION Termination_prearranged */
/**
 * @summary Termination_prearranged
 * @constant
 * @type {number}
 */
export const Termination_prearranged: Termination =
    Termination.prearranged; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Termination_prearranged */

/* START_OF_SYMBOL_DEFINITION prearranged */
/**
 * @summary prearranged
 * @constant
 * @type {number}
 */
export const prearranged: Termination =
    Termination.prearranged; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION prearranged */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Termination */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Termination */

/* START_OF_SYMBOL_DEFINITION _decode_Termination */
export const _decode_Termination = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_Termination */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Termination */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Termination */

/* START_OF_SYMBOL_DEFINITION _encode_Termination */
export const _encode_Termination = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_Termination */

/* eslint-enable */
