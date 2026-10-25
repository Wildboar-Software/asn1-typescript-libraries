/* eslint-disable */
import {
    type ASN1Element as _Element,
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Used_RAT_Type {
    utran = 0,
    geran = 1,
    gan = 2,
    i_hspa_evolution = 3,
    e_utran = 4,
    nb_iot = 5,
}

/**
 * @summary Used_RAT_Type
 * @description
 *
 * RAT currently used by the UE. Value `e-utran` indicates wide-band E-UTRAN.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 8.1.7 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Used-RAT-Type ::=  ENUMERATED {
 *     utran  (0),
 *     geran  (1),
 *     gan    (2),
 *     i-hspa-evolution (3),
 *     e-utran    (4),
 *     ...,
 *     nb-iot    (5)}
 * ```
 * 
 * @enum {number}
 */
export
type Used_RAT_Type = _enum_for_Used_RAT_Type | ENUMERATED;

/**
 * @summary Used_RAT_Type_utran
 * @constant
 * @type {number}
 */
export
const Used_RAT_Type_utran: _enum_for_Used_RAT_Type.utran = _enum_for_Used_RAT_Type.utran; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary utran
 * @constant
 * @type {number}
 */
export
const utran: _enum_for_Used_RAT_Type.utran = Used_RAT_Type_utran; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Used_RAT_Type_geran
 * @constant
 * @type {number}
 */
export
const Used_RAT_Type_geran: _enum_for_Used_RAT_Type.geran = _enum_for_Used_RAT_Type.geran; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary geran
 * @constant
 * @type {number}
 */
export
const geran: _enum_for_Used_RAT_Type.geran = Used_RAT_Type_geran; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Used_RAT_Type_gan
 * @constant
 * @type {number}
 */
export
const Used_RAT_Type_gan: _enum_for_Used_RAT_Type.gan = _enum_for_Used_RAT_Type.gan; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gan
 * @constant
 * @type {number}
 */
export
const gan: _enum_for_Used_RAT_Type.gan = Used_RAT_Type_gan; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Used_RAT_Type_i_hspa_evolution
 * @constant
 * @type {number}
 */
export
const Used_RAT_Type_i_hspa_evolution: _enum_for_Used_RAT_Type.i_hspa_evolution = _enum_for_Used_RAT_Type.i_hspa_evolution; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary i_hspa_evolution
 * @constant
 * @type {number}
 */
export
const i_hspa_evolution: _enum_for_Used_RAT_Type.i_hspa_evolution = Used_RAT_Type_i_hspa_evolution; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Used_RAT_Type_e_utran
 * @constant
 * @type {number}
 */
export
const Used_RAT_Type_e_utran: _enum_for_Used_RAT_Type.e_utran = _enum_for_Used_RAT_Type.e_utran; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e_utran
 * @constant
 * @type {number}
 */
export
const e_utran: _enum_for_Used_RAT_Type.e_utran = Used_RAT_Type_e_utran; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Used_RAT_Type_nb_iot
 * @constant
 * @type {number}
 */
export
const Used_RAT_Type_nb_iot: _enum_for_Used_RAT_Type.nb_iot = _enum_for_Used_RAT_Type.nb_iot; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nb_iot
 * @constant
 * @type {number}
 */
export
const nb_iot: _enum_for_Used_RAT_Type.nb_iot = Used_RAT_Type_nb_iot; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) Used_RAT_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Used_RAT_Type: $.ASN1Decoder<number> = $._decodeEnumerated;

/**
 * @summary Encodes a(n) Used_RAT_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Used_RAT_Type, encoded as an ASN.1 Element.
 */
export const _encode_Used_RAT_Type: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
