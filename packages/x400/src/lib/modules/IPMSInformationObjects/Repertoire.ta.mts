/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary Repertoire
 * @description
 *
 * Defined in ITU-T X.420 (1999) (§7).
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
export const Repertoire: typeof _enum_for_Repertoire = _enum_for_Repertoire;

/**
 * @summary Repertoire_ita2
 * @constant
 * @type {number}
 */
export const Repertoire_ita2: _enum_for_Repertoire.ita2 =
    Repertoire.ita2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ita2
 * @constant
 * @type {number}
 */
export const ita2: _enum_for_Repertoire.ita2 =
    Repertoire.ita2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Repertoire_ia5
 * @constant
 * @type {number}
 */
export const Repertoire_ia5: _enum_for_Repertoire.ia5 =
    Repertoire.ia5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ia5
 * @constant
 * @type {number}
 */
export const ia5: _enum_for_Repertoire.ia5 =
    Repertoire.ia5; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_Repertoire(el: _Element): Repertoire {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case Repertoire.ita2: return Repertoire.ita2;
        case Repertoire.ia5: return Repertoire.ia5;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for Repertoire.',
                el,
            );
    }
}


export const _encode_Repertoire: $.ASN1Encoder<Repertoire> = $._encodeEnumerated as $.ASN1Encoder<Repertoire>;


/* eslint-enable */
