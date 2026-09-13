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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NameConstraint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameConstraint  ::=  ENUMERATED {
 *     no-name-constraint (0),
 *     local-unambiguity  (1),
 *     global-unambiguity (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NameConstraint {
    no_name_constraint = 0,
    local_unambiguity = 1,
    global_unambiguity = 2,
}

/**
 * @summary NameConstraint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameConstraint  ::=  ENUMERATED {
 *     no-name-constraint (0),
 *     local-unambiguity  (1),
 *     global-unambiguity (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type NameConstraint = _enum_for_NameConstraint;

/**
 * @summary NameConstraint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameConstraint  ::=  ENUMERATED {
 *     no-name-constraint (0),
 *     local-unambiguity  (1),
 *     global-unambiguity (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const NameConstraint = _enum_for_NameConstraint;

/**
 * @summary NameConstraint_no_name_constraint
 * @constant
 * @type {number}
 */
export
const NameConstraint_no_name_constraint: NameConstraint = NameConstraint.no_name_constraint; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_name_constraint
 * @constant
 * @type {number}
 */
export
const no_name_constraint: NameConstraint = NameConstraint.no_name_constraint; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NameConstraint_local_unambiguity
 * @constant
 * @type {number}
 */
export
const NameConstraint_local_unambiguity: NameConstraint = NameConstraint.local_unambiguity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary local_unambiguity
 * @constant
 * @type {number}
 */
export
const local_unambiguity: NameConstraint = NameConstraint.local_unambiguity; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NameConstraint_global_unambiguity
 * @constant
 * @type {number}
 */
export
const NameConstraint_global_unambiguity: NameConstraint = NameConstraint.global_unambiguity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary global_unambiguity
 * @constant
 * @type {number}
 */
export
const global_unambiguity: NameConstraint = NameConstraint.global_unambiguity; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_NameConstraint = $._decodeEnumerated;
export const _encode_NameConstraint = $._encodeEnumerated;


/* eslint-enable */
