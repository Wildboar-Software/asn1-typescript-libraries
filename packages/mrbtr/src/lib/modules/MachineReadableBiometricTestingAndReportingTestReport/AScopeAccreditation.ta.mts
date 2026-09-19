/* eslint-disable */
import {
    ENUMERATED,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_AScopeAccreditation {
    iso_iec19795_1_2006 = 1,
    iso_iec19795_1_2021 = 2,
    iso_iec19795_3 = 3,
    iso_iec30107_4 = 4,
}

/**
 * @summary AScopeAccreditation
 * @description
 *
 * Claimed accreditation scope (Clause 6.4.3). Extensible:
 * `iso-iec19795-1:2006`(1), `iso-iec19795-1:2021`(2),
 * `iso-iec19795-3`(3), `iso-iec30107-4`(4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AScopeAccreditation  ::=  ENUMERATED {
 *     iso-iec19795-1-2006(1),
 *     iso-iec19795-1-2021(2),
 *     iso-iec19795-3(3),
 *     iso-iec30107-4(4),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AScopeAccreditation = _enum_for_AScopeAccreditation | ENUMERATED;

/**
 * @summary AScopeAccreditation_iso_iec19795_1_2006
 * @constant
 * @type {number}
 */
export
const AScopeAccreditation_iso_iec19795_1_2006: AScopeAccreditation = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iso_iec19795_1_2006
 * @constant
 * @type {number}
 */
export
const iso_iec19795_1_2006: AScopeAccreditation = AScopeAccreditation_iso_iec19795_1_2006; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AScopeAccreditation_iso_iec19795_1_2021
 * @constant
 * @type {number}
 */
export
const AScopeAccreditation_iso_iec19795_1_2021: AScopeAccreditation = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iso_iec19795_1_2021
 * @constant
 * @type {number}
 */
export
const iso_iec19795_1_2021: AScopeAccreditation = AScopeAccreditation_iso_iec19795_1_2021; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AScopeAccreditation_iso_iec19795_3
 * @constant
 * @type {number}
 */
export
const AScopeAccreditation_iso_iec19795_3: AScopeAccreditation = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iso_iec19795_3
 * @constant
 * @type {number}
 */
export
const iso_iec19795_3: AScopeAccreditation = AScopeAccreditation_iso_iec19795_3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AScopeAccreditation_iso_iec30107_4
 * @constant
 * @type {number}
 */
export
const AScopeAccreditation_iso_iec30107_4: AScopeAccreditation = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iso_iec30107_4
 * @constant
 * @type {number}
 */
export
const iso_iec30107_4: AScopeAccreditation = AScopeAccreditation_iso_iec30107_4; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Decodes an ASN.1 element into a(n) AScopeAccreditation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AScopeAccreditation = $._decodeEnumerated;


/**
 * @summary Encodes a(n) AScopeAccreditation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AScopeAccreditation, encoded as an ASN.1 Element.
 */
export const _encode_AScopeAccreditation = $._encodeEnumerated;


/* eslint-enable */
