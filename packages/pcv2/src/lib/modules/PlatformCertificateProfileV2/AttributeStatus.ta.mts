/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AttributeStatus
 * @description
 *
 * Whether a component or property was added, modified, or removed relative to
 * the previous platform certificate. Used as `Property.status`, as
 * `ComponentIdentifierV11.status`, and as the value of `statusTrait`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.19 and §4.2.16.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeStatus  ::=  ENUMERATED {
 *     added (0),
 *     modified (1),
 *     removed (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AttributeStatus {
    /**
     * The component or property was added relative to the previous certificate.
     *
     * TCG Platform Certificate Profile, Version 2.1, §3.3.19.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     */
    added = 0,
    /**
     * The component or property was modified relative to the previous
     * certificate.
     *
     * TCG Platform Certificate Profile, Version 2.1, §3.3.19.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     */
    modified = 1,
    /**
     * The component or property was removed relative to the previous
     * certificate.
     *
     * TCG Platform Certificate Profile, Version 2.1, §3.3.19.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     */
    removed = 2,
}

/**
 * @summary AttributeStatus
 * @description
 *
 * Whether a component or property was added, modified, or removed relative to
 * the previous platform certificate. Used as `Property.status`, as
 * `ComponentIdentifierV11.status`, and as the value of `statusTrait`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.19 and §4.2.16.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeStatus  ::=  ENUMERATED {
 *     added (0),
 *     modified (1),
 *     removed (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AttributeStatus = _enum_for_AttributeStatus;

/**
 * @summary AttributeStatus
 * @description
 *
 * Whether a component or property was added, modified, or removed relative to
 * the previous platform certificate. Used as `Property.status`, as
 * `ComponentIdentifierV11.status`, and as the value of `statusTrait`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.19 and §4.2.16.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeStatus  ::=  ENUMERATED {
 *     added (0),
 *     modified (1),
 *     removed (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AttributeStatus = _enum_for_AttributeStatus;

/**
 * @summary AttributeStatus_added
 * @description
 *
 * The component or property was added relative to the previous certificate.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.19.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 * @type {number}
 */
export
const AttributeStatus_added = AttributeStatus.added satisfies AttributeStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary added
 * @description
 *
 * The component or property was added relative to the previous certificate.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.19.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 * @type {number}
 */
export
const added = AttributeStatus.added satisfies AttributeStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeStatus_modified
 * @description
 *
 * The component or property was modified relative to the previous certificate.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.19.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 * @type {number}
 */
export
const AttributeStatus_modified = AttributeStatus.modified satisfies AttributeStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modified
 * @description
 *
 * The component or property was modified relative to the previous certificate.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.19.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 * @type {number}
 */
export
const modified = AttributeStatus.modified satisfies AttributeStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeStatus_removed
 * @description
 *
 * The component or property was removed relative to the previous certificate.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.19.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 * @type {number}
 */
export
const AttributeStatus_removed = AttributeStatus.removed satisfies AttributeStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary removed
 * @description
 *
 * The component or property was removed relative to the previous certificate.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.19.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 * @type {number}
 */
export
const removed = AttributeStatus.removed satisfies AttributeStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_AttributeStatus: $.ASN1Decoder<AttributeStatus> = $._decodeEnumerated;

export
const _encode_AttributeStatus: $.ASN1Encoder<AttributeStatus> = $._encodeEnumerated;

/* eslint-enable */
