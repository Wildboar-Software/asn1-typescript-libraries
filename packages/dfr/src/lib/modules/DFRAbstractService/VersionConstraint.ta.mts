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
 * @summary VersionConstraint
 * @description
 *
 * Whether `version-name` is unique among versions of one conceptual-document.
 * ISO/IEC 10166-1:1991 §7.1.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VersionConstraint  ::=  ENUMERATED {
 *     no-version-constraint (0),
 *     version-unambiguity   (1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_VersionConstraint {
    no_version_constraint = 0,
    version_unambiguity = 1,
}

/**
 * @summary VersionConstraint
 * @description
 *
 * Whether `version-name` is unique among versions of one conceptual-document.
 * ISO/IEC 10166-1:1991 §7.1.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VersionConstraint  ::=  ENUMERATED {
 *     no-version-constraint (0),
 *     version-unambiguity   (1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type VersionConstraint = _enum_for_VersionConstraint;

/**
 * @summary VersionConstraint
 * @description
 *
 * Whether `version-name` is unique among versions of one conceptual-document.
 * ISO/IEC 10166-1:1991 §7.1.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VersionConstraint  ::=  ENUMERATED {
 *     no-version-constraint (0),
 *     version-unambiguity   (1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const VersionConstraint = _enum_for_VersionConstraint;

/**
 * @summary VersionConstraint_no_version_constraint
 * @description
 *
 * Version-names need not be unique.
 * @constant
 * @type {number}
 */
export
const VersionConstraint_no_version_constraint: VersionConstraint = VersionConstraint.no_version_constraint; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_version_constraint
 * @description
 *
 * Version-names need not be unique.
 * @constant
 * @type {number}
 */
export
const no_version_constraint: VersionConstraint = VersionConstraint.no_version_constraint; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary VersionConstraint_version_unambiguity
 * @description
 *
 * Each version of a conceptual-document has a unique version-name in that
 * conceptual-document.
 * @constant
 * @type {number}
 */
export
const VersionConstraint_version_unambiguity: VersionConstraint = VersionConstraint.version_unambiguity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version_unambiguity
 * @description
 *
 * Each version of a conceptual-document has a unique version-name in that
 * conceptual-document.
 * @constant
 * @type {number}
 */
export
const version_unambiguity: VersionConstraint = VersionConstraint.version_unambiguity; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_VersionConstraint = $._decodeEnumerated;
export const _encode_VersionConstraint = $._encodeEnumerated;


/* eslint-enable */
