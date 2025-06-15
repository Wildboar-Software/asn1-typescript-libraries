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

/* START_OF_SYMBOL_DEFINITION _enum_for_Repertoire */
/**
 * @summary Repertoire
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Repertoire  ::=  ENUMERATED {ita2(2), ia5(5)}
 * ```@enum {number}
 */
export enum _enum_for_Repertoire {
    ita2 = 2,
    ia5 = 5,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_Repertoire */

/* START_OF_SYMBOL_DEFINITION Repertoire */
/**
 * @summary Repertoire
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Repertoire  ::=  ENUMERATED {ita2(2), ia5(5)}
 * ```@enum {number}
 */
export type Repertoire = _enum_for_Repertoire;
/* END_OF_SYMBOL_DEFINITION Repertoire */

/* START_OF_SYMBOL_DEFINITION Repertoire */
/**
 * @summary Repertoire
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Repertoire  ::=  ENUMERATED {ita2(2), ia5(5)}
 * ```@enum {number}
 */
export const Repertoire = _enum_for_Repertoire;
/* END_OF_SYMBOL_DEFINITION Repertoire */

/* START_OF_SYMBOL_DEFINITION Repertoire_ita2 */
/**
 * @summary Repertoire_ita2
 * @constant
 * @type {number}
 */
export const Repertoire_ita2: Repertoire =
    Repertoire.ita2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Repertoire_ita2 */

/* START_OF_SYMBOL_DEFINITION ita2 */
/**
 * @summary ita2
 * @constant
 * @type {number}
 */
export const ita2: Repertoire =
    Repertoire.ita2; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ita2 */

/* START_OF_SYMBOL_DEFINITION Repertoire_ia5 */
/**
 * @summary Repertoire_ia5
 * @constant
 * @type {number}
 */
export const Repertoire_ia5: Repertoire =
    Repertoire.ia5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Repertoire_ia5 */

/* START_OF_SYMBOL_DEFINITION ia5 */
/**
 * @summary ia5
 * @constant
 * @type {number}
 */
export const ia5: Repertoire =
    Repertoire.ia5; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ia5 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Repertoire */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Repertoire */

/* START_OF_SYMBOL_DEFINITION _decode_Repertoire */
export const _decode_Repertoire = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_Repertoire */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Repertoire */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Repertoire */

/* START_OF_SYMBOL_DEFINITION _encode_Repertoire */
export const _encode_Repertoire = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_Repertoire */

/* eslint-enable */
