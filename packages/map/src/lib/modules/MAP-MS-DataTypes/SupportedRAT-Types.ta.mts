/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SupportedRAT_Types
 * @description
 *
 * Access technologies served by the MSC/VLR, SGSN, or MME. Bits 6-7 shall be
 * ignored if received and not understood.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.3.98 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupportedRAT-Types ::=  BIT STRING {
 *     utran  (0),
 *     geran  (1),
 *     gan    (2),
 *     i-hspa-evolution (3),
 *     e-utran    (4),
 *     nb-iot    (5)} (SIZE (2..8))
 * ```
 */
export
type SupportedRAT_Types = BIT_STRING;

/**
 * @summary SupportedRAT_Types_utran
 * @constant
 */
export
const SupportedRAT_Types_utran: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary utran
 * @constant
 */
export
const utran: number = SupportedRAT_Types_utran; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedRAT_Types_geran
 * @constant
 */
export
const SupportedRAT_Types_geran: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary geran
 * @constant
 */
export
const geran: number = SupportedRAT_Types_geran; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedRAT_Types_gan
 * @constant
 */
export
const SupportedRAT_Types_gan: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary gan
 * @constant
 */
export
const gan: number = SupportedRAT_Types_gan; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedRAT_Types_i_hspa_evolution
 * @constant
 */
export
const SupportedRAT_Types_i_hspa_evolution: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary i_hspa_evolution
 * @constant
 */
export
const i_hspa_evolution: number = SupportedRAT_Types_i_hspa_evolution; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedRAT_Types_e_utran
 * @constant
 */
export
const SupportedRAT_Types_e_utran: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary e_utran
 * @constant
 */
export
const e_utran: number = SupportedRAT_Types_e_utran; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedRAT_Types_nb_iot
 * @constant
 */
export
const SupportedRAT_Types_nb_iot: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary nb_iot
 * @constant
 */
export
const nb_iot: number = SupportedRAT_Types_nb_iot; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) SupportedRAT_Types
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SupportedRAT_Types = (el: _Element): SupportedRAT_Types => {
    const value = $._decodeBitString(el);
    if (value.length < 2 || value.length > 8) {
        throw new ASN1SizeError("SupportedRAT_Types violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) SupportedRAT_Types into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedRAT_Types, encoded as an ASN.1 Element.
 */
export const _encode_SupportedRAT_Types = $._encodeBitString;


/* eslint-enable */
