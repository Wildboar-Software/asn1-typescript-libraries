/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MasterOrShadowAccessPoint_category
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MasterOrShadowAccessPoint-category ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MasterOrShadowAccessPoint_category {
    master = 0,
    shadow = 1,
}

/**
 * @summary MasterOrShadowAccessPoint_category
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MasterOrShadowAccessPoint-category ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type MasterOrShadowAccessPoint_category = _enum_for_MasterOrShadowAccessPoint_category;

/**
 * @summary MasterOrShadowAccessPoint_category
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MasterOrShadowAccessPoint-category ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const MasterOrShadowAccessPoint_category = _enum_for_MasterOrShadowAccessPoint_category;

/**
 * @summary MasterOrShadowAccessPoint_category_master
 * @constant
 * @type {number}
 */
export
const MasterOrShadowAccessPoint_category_master: MasterOrShadowAccessPoint_category = MasterOrShadowAccessPoint_category.master; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary master
 * @constant
 * @type {number}
 */
export
const master: MasterOrShadowAccessPoint_category = MasterOrShadowAccessPoint_category.master; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MasterOrShadowAccessPoint_category_shadow
 * @constant
 * @type {number}
 */
export
const MasterOrShadowAccessPoint_category_shadow: MasterOrShadowAccessPoint_category = MasterOrShadowAccessPoint_category.shadow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary shadow
 * @constant
 * @type {number}
 */
export
const shadow: MasterOrShadowAccessPoint_category = MasterOrShadowAccessPoint_category.shadow; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MasterOrShadowAccessPoint_category: $.ASN1Decoder<MasterOrShadowAccessPoint_category> = $._decodeEnumerated;

export
const _encode_MasterOrShadowAccessPoint_category: $.ASN1Encoder<MasterOrShadowAccessPoint_category> = $._encodeEnumerated;

/* eslint-enable */
