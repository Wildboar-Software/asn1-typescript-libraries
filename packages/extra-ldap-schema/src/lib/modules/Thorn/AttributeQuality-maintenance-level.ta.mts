/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AttributeQuality_maintenance_level
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeQuality-maintenance-level ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const _enum_for_AttributeQuality_maintenance_level: {
    readonly unknown: 1;
    readonly external: 2;
    readonly system_maintained: 3;
    readonly user_supplied: 4;
} = {
    unknown: 1,
    external: 2,
    system_maintained: 3,
    user_supplied: 4,
};

export
type _enum_for_AttributeQuality_maintenance_level = ENUMERATED;

/**
 * @summary AttributeQuality_maintenance_level
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeQuality-maintenance-level ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type AttributeQuality_maintenance_level = _enum_for_AttributeQuality_maintenance_level;

/**
 * @summary AttributeQuality_maintenance_level
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeQuality-maintenance-level ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const AttributeQuality_maintenance_level: typeof _enum_for_AttributeQuality_maintenance_level = _enum_for_AttributeQuality_maintenance_level;

/**
 * @summary AttributeQuality_maintenance_level_unknown
 * @constant
 * @type {number}
 */
export
const AttributeQuality_maintenance_level_unknown: number = AttributeQuality_maintenance_level.unknown satisfies AttributeQuality_maintenance_level; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: number = AttributeQuality_maintenance_level_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeQuality_maintenance_level_external
 * @constant
 * @type {number}
 */
export
const AttributeQuality_maintenance_level_external: number = AttributeQuality_maintenance_level.external satisfies AttributeQuality_maintenance_level; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary external
 * @constant
 * @type {number}
 */
export
const external: number = AttributeQuality_maintenance_level_external; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeQuality_maintenance_level_system_maintained
 * @constant
 * @type {number}
 */
export
const AttributeQuality_maintenance_level_system_maintained: number = AttributeQuality_maintenance_level.system_maintained satisfies AttributeQuality_maintenance_level; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary system_maintained
 * @constant
 * @type {number}
 */
export
const system_maintained: number = AttributeQuality_maintenance_level_system_maintained; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeQuality_maintenance_level_user_supplied
 * @constant
 * @type {number}
 */
export
const AttributeQuality_maintenance_level_user_supplied: number = AttributeQuality_maintenance_level.user_supplied satisfies AttributeQuality_maintenance_level; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary user_supplied
 * @constant
 * @type {number}
 */
export
const user_supplied: number = AttributeQuality_maintenance_level_user_supplied; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_AttributeQuality_maintenance_level: $.ASN1Decoder<AttributeQuality_maintenance_level> = $._decodeEnumerated;

export
const _encode_AttributeQuality_maintenance_level: $.ASN1Encoder<AttributeQuality_maintenance_level> = $._encodeEnumerated;

/* eslint-enable */
