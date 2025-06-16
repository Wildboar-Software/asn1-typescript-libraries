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
 * @summary Repertoire
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Repertoire  ::=  ENUMERATED {ita2(2), ia5(5)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_Repertoire {
    ita2 = 2,
    ia5 = 5,
}

/**
 * @summary Repertoire
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Repertoire  ::=  ENUMERATED {ita2(2), ia5(5)}
 * ```
 *
 * @enum {number}
 */
export type Repertoire = _enum_for_Repertoire;

/**
 * @summary Repertoire
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Repertoire  ::=  ENUMERATED {ita2(2), ia5(5)}
 * ```
 *
 * @enum {number}
 */
export const Repertoire = _enum_for_Repertoire;

/**
 * @summary Repertoire_ita2
 * @constant
 * @type {number}
 */
export const Repertoire_ita2: Repertoire =
    Repertoire.ita2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ita2
 * @constant
 * @type {number}
 */
export const ita2: Repertoire =
    Repertoire.ita2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Repertoire_ia5
 * @constant
 * @type {number}
 */
export const Repertoire_ia5: Repertoire =
    Repertoire.ia5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ia5
 * @constant
 * @type {number}
 */
export const ia5: Repertoire =
    Repertoire.ia5; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_Repertoire = $._decodeEnumerated;


export const _encode_Repertoire = $._encodeEnumerated;


/* eslint-enable */
