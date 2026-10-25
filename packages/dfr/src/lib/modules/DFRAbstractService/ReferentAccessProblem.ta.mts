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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReferentAccessProblem
 * @description
 *
 * Why the referent could not be used. ISO/IEC 10166-1:1991 §8.3.5; ISO/IEC
 * 10166-1:1991/Cor.2:1994.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReferentAccessProblem  ::=  ENUMERATED {
 *     inappropriate-object-class  (1),
 *     insufficient-access-rights  (2),
 *     reserved-by-a-user          (3),
 *     referent-no-longer-exists   (4),
 * 
 *     -- only used in the case a DFR-Group is copied or listed and only
 *     -- if warnings shall be reported, i.e. referent modified will not
 *     -- terminate the operation
 *     referent-modified           (5),
 *     reference-content-empty     (6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReferentAccessProblem {
    inappropriate_object_class = 1,
    insufficient_access_rights = 2,
    reserved_by_a_user = 3,
    referent_no_longer_exists = 4,
    referent_modified = 5,
    reference_content_empty = 6,
}

/**
 * @summary ReferentAccessProblem
 * @description
 *
 * Why the referent could not be used. ISO/IEC 10166-1:1991 §8.3.5; ISO/IEC
 * 10166-1:1991/Cor.2:1994.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReferentAccessProblem  ::=  ENUMERATED {
 *     inappropriate-object-class  (1),
 *     insufficient-access-rights  (2),
 *     reserved-by-a-user          (3),
 *     referent-no-longer-exists   (4),
 * 
 *     -- only used in the case a DFR-Group is copied or listed and only
 *     -- if warnings shall be reported, i.e. referent modified will not
 *     -- terminate the operation
 *     referent-modified           (5),
 *     reference-content-empty     (6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ReferentAccessProblem = _enum_for_ReferentAccessProblem;

/**
 * @summary ReferentAccessProblem
 * @description
 *
 * Why the referent could not be used. ISO/IEC 10166-1:1991 §8.3.5; ISO/IEC
 * 10166-1:1991/Cor.2:1994.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReferentAccessProblem  ::=  ENUMERATED {
 *     inappropriate-object-class  (1),
 *     insufficient-access-rights  (2),
 *     reserved-by-a-user          (3),
 *     referent-no-longer-exists   (4),
 * 
 *     -- only used in the case a DFR-Group is copied or listed and only
 *     -- if warnings shall be reported, i.e. referent modified will not
 *     -- terminate the operation
 *     referent-modified           (5),
 *     reference-content-empty     (6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ReferentAccessProblem = _enum_for_ReferentAccessProblem;

/**
 * @summary ReferentAccessProblem_inappropriate_object_class
 * @description
 *
 * Referent has the wrong class (e.g. reading content of a group).
 * @constant
 * @type {number}
 */
export
const ReferentAccessProblem_inappropriate_object_class = ReferentAccessProblem.inappropriate_object_class satisfies ReferentAccessProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inappropriate_object_class
 * @description
 *
 * Referent has the wrong class (e.g. reading content of a group).
 * @constant
 * @type {number}
 */
export
const inappropriate_object_class = ReferentAccessProblem.inappropriate_object_class satisfies ReferentAccessProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferentAccessProblem_insufficient_access_rights
 * @description
 *
 * User lacks rights on the referent.
 * @constant
 * @type {number}
 */
export
const ReferentAccessProblem_insufficient_access_rights = ReferentAccessProblem.insufficient_access_rights satisfies ReferentAccessProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary insufficient_access_rights
 * @description
 *
 * User lacks rights on the referent.
 * @constant
 * @type {number}
 */
export
const insufficient_access_rights = ReferentAccessProblem.insufficient_access_rights satisfies ReferentAccessProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferentAccessProblem_reserved_by_a_user
 * @description
 *
 * Referent or its parent is reserved.
 * @constant
 * @type {number}
 */
export
const ReferentAccessProblem_reserved_by_a_user = ReferentAccessProblem.reserved_by_a_user satisfies ReferentAccessProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved_by_a_user
 * @description
 *
 * Referent or its parent is reserved.
 * @constant
 * @type {number}
 */
export
const reserved_by_a_user = ReferentAccessProblem.reserved_by_a_user satisfies ReferentAccessProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferentAccessProblem_referent_no_longer_exists
 * @description
 *
 * Dangling reference; referent was deleted. ISO/IEC 10166-1:1991/Cor.2:1994.
 * @constant
 * @type {number}
 */
export
const ReferentAccessProblem_referent_no_longer_exists = ReferentAccessProblem.referent_no_longer_exists satisfies ReferentAccessProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary referent_no_longer_exists
 * @description
 *
 * Dangling reference; referent was deleted. ISO/IEC 10166-1:1991/Cor.2:1994.
 * @constant
 * @type {number}
 */
export
const referent_no_longer_exists = ReferentAccessProblem.referent_no_longer_exists satisfies ReferentAccessProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferentAccessProblem_referent_modified
 * @description
 *
 * Referent changed after DOR produce-time (qos-level). When copying/listing a
 * group this is a warning only.
 * @constant
 * @type {number}
 */
export
const ReferentAccessProblem_referent_modified = ReferentAccessProblem.referent_modified satisfies ReferentAccessProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary referent_modified
 * @description
 *
 * Referent changed after DOR produce-time (qos-level). When copying/listing a
 * group this is a warning only.
 * @constant
 * @type {number}
 */
export
const referent_modified = ReferentAccessProblem.referent_modified satisfies ReferentAccessProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferentAccessProblem_reference_content_empty
 * @description
 *
 * Reference has no UPI; it is only a placeholder.
 * @constant
 * @type {number}
 */
export
const ReferentAccessProblem_reference_content_empty = ReferentAccessProblem.reference_content_empty satisfies ReferentAccessProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reference_content_empty
 * @description
 *
 * Reference has no UPI; it is only a placeholder.
 * @constant
 * @type {number}
 */
export
const reference_content_empty = ReferentAccessProblem.reference_content_empty satisfies ReferentAccessProblem; /* SHORT_NAMED_ENUMERATED_VALUE */
export function _decode_ReferentAccessProblem(el: _Element): ReferentAccessProblem {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ReferentAccessProblem.inappropriate_object_class: return ReferentAccessProblem.inappropriate_object_class;
        case ReferentAccessProblem.insufficient_access_rights: return ReferentAccessProblem.insufficient_access_rights;
        case ReferentAccessProblem.reserved_by_a_user: return ReferentAccessProblem.reserved_by_a_user;
        case ReferentAccessProblem.referent_no_longer_exists: return ReferentAccessProblem.referent_no_longer_exists;
        case ReferentAccessProblem.referent_modified: return ReferentAccessProblem.referent_modified;
        case ReferentAccessProblem.reference_content_empty: return ReferentAccessProblem.reference_content_empty;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for ReferentAccessProblem.",
                el,
            );
    }
}
export const _encode_ReferentAccessProblem: $.ASN1Encoder<ReferentAccessProblem> = $._encodeEnumerated as $.ASN1Encoder<ReferentAccessProblem>;


/* eslint-enable */
