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
enum _enum_for_Function {
    acquisition = 1,
    enrolment = 2,
    verification = 3,
    identification = 4,
}

/**
 * @summary Function
 * @description
 *
 * Function of the tested product (Clause 6.4.2.3). Extensible:
 * `acquisition`(1), `enrolment`(2), `verification`(3),
 * `identification`(4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Function  ::=  ENUMERATED {
 *     acquisition     (1),
 *     enrolment       (2),
 *     verification    (3),
 *     identification  (4),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Function = _enum_for_Function | ENUMERATED;

/**
 * @summary Function_acquisition
 * @constant
 * @type {number}
 */
export
const Function_acquisition: Function = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary acquisition
 * @constant
 * @type {number}
 */
export
const acquisition: Function = Function_acquisition; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Function_enrolment
 * @constant
 * @type {number}
 */
export
const Function_enrolment: Function = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enrolment
 * @constant
 * @type {number}
 */
export
const enrolment: Function = Function_enrolment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Function_verification
 * @constant
 * @type {number}
 */
export
const Function_verification: Function = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary verification
 * @constant
 * @type {number}
 */
export
const verification: Function = Function_verification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Function_identification
 * @constant
 * @type {number}
 */
export
const Function_identification: Function = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary identification
 * @constant
 * @type {number}
 */
export
const identification: Function = Function_identification; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Decodes an ASN.1 element into a(n) Function
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Function = $._decodeEnumerated;


/**
 * @summary Encodes a(n) Function into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Function, encoded as an ASN.1 Element.
 */
export const _encode_Function = $._encodeEnumerated;


/* eslint-enable */
