/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AttributeQuality_attribute_completeness
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeQuality-attribute-completeness ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const _enum_for_AttributeQuality_attribute_completeness: {
    readonly none: 1;
    readonly sample: 2;
    readonly selected: 3;
    readonly substantial: 4;
    readonly full: 5;
} = {
    none: 1,
    sample: 2,
    selected: 3,
    substantial: 4,
    full: 5,
};

export
type _enum_for_AttributeQuality_attribute_completeness = ENUMERATED;

/**
 * @summary AttributeQuality_attribute_completeness
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeQuality-attribute-completeness ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type AttributeQuality_attribute_completeness = _enum_for_AttributeQuality_attribute_completeness;

/**
 * @summary AttributeQuality_attribute_completeness
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeQuality-attribute-completeness ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const AttributeQuality_attribute_completeness: typeof _enum_for_AttributeQuality_attribute_completeness = _enum_for_AttributeQuality_attribute_completeness;

/**
 * @summary AttributeQuality_attribute_completeness_none
 * @constant
 * @type {number}
 */
export
const AttributeQuality_attribute_completeness_none: number = AttributeQuality_attribute_completeness.none satisfies AttributeQuality_attribute_completeness; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: number = AttributeQuality_attribute_completeness_none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeQuality_attribute_completeness_sample
 * @constant
 * @type {number}
 */
export
const AttributeQuality_attribute_completeness_sample: number = AttributeQuality_attribute_completeness.sample satisfies AttributeQuality_attribute_completeness; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sample
 * @constant
 * @type {number}
 */
export
const sample: number = AttributeQuality_attribute_completeness_sample; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeQuality_attribute_completeness_selected
 * @constant
 * @type {number}
 */
export
const AttributeQuality_attribute_completeness_selected: number = AttributeQuality_attribute_completeness.selected satisfies AttributeQuality_attribute_completeness; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary selected
 * @constant
 * @type {number}
 */
export
const selected: number = AttributeQuality_attribute_completeness_selected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeQuality_attribute_completeness_substantial
 * @constant
 * @type {number}
 */
export
const AttributeQuality_attribute_completeness_substantial: number = AttributeQuality_attribute_completeness.substantial satisfies AttributeQuality_attribute_completeness; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary substantial
 * @constant
 * @type {number}
 */
export
const substantial: number = AttributeQuality_attribute_completeness_substantial; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeQuality_attribute_completeness_full
 * @constant
 * @type {number}
 */
export
const AttributeQuality_attribute_completeness_full: number = AttributeQuality_attribute_completeness.full satisfies AttributeQuality_attribute_completeness; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary full
 * @constant
 * @type {number}
 */
export
const full: number = AttributeQuality_attribute_completeness_full; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_AttributeQuality_attribute_completeness: $.ASN1Decoder<AttributeQuality_attribute_completeness> = $._decodeEnumerated;

export
const _encode_AttributeQuality_attribute_completeness: $.ASN1Encoder<AttributeQuality_attribute_completeness> = $._encodeEnumerated;

/* eslint-enable */
