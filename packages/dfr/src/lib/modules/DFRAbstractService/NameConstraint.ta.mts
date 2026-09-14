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
 * Whether `dfr-title` uniqueness is enforced: none, unique within the parent
 * group, or unique in the whole store. Path names are unambiguous only if at
 * least local uniqueness holds. ISO/IEC 10166-1:1991 §7.1.2, §8.1.4.
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
 * Whether `dfr-title` uniqueness is enforced: none, unique within the parent
 * group, or unique in the whole store. Path names are unambiguous only if at
 * least local uniqueness holds. ISO/IEC 10166-1:1991 §7.1.2, §8.1.4.
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
 * Whether `dfr-title` uniqueness is enforced: none, unique within the parent
 * group, or unique in the whole store. Path names are unambiguous only if at
 * least local uniqueness holds. ISO/IEC 10166-1:1991 §7.1.2, §8.1.4.
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
 * @description
 *
 * Titles need not be unique.
 * @constant
 * @type {number}
 */
export
const NameConstraint_no_name_constraint: NameConstraint = NameConstraint.no_name_constraint; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_name_constraint
 * @description
 *
 * Titles need not be unique.
 * @constant
 * @type {number}
 */
export
const no_name_constraint: NameConstraint = NameConstraint.no_name_constraint; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NameConstraint_local_unambiguity
 * @description
 *
 * Title unique among siblings in the parent group.
 * @constant
 * @type {number}
 */
export
const NameConstraint_local_unambiguity: NameConstraint = NameConstraint.local_unambiguity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary local_unambiguity
 * @description
 *
 * Title unique among siblings in the parent group.
 * @constant
 * @type {number}
 */
export
const local_unambiguity: NameConstraint = NameConstraint.local_unambiguity; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NameConstraint_global_unambiguity
 * @description
 *
 * Title unique in the whole document store.
 * @constant
 * @type {number}
 */
export
const NameConstraint_global_unambiguity: NameConstraint = NameConstraint.global_unambiguity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary global_unambiguity
 * @description
 *
 * Title unique in the whole document store.
 * @constant
 * @type {number}
 */
export
const global_unambiguity: NameConstraint = NameConstraint.global_unambiguity; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_NameConstraint = $._decodeEnumerated;
export const _encode_NameConstraint = $._encodeEnumerated;


/* eslint-enable */
