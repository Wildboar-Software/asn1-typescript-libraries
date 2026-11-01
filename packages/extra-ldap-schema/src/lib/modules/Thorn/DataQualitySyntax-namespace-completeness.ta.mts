/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DataQualitySyntax_namespace_completeness
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataQualitySyntax-namespace-completeness ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const _enum_for_DataQualitySyntax_namespace_completeness: {
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
type _enum_for_DataQualitySyntax_namespace_completeness = ENUMERATED;

/**
 * @summary DataQualitySyntax_namespace_completeness
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataQualitySyntax-namespace-completeness ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type DataQualitySyntax_namespace_completeness = _enum_for_DataQualitySyntax_namespace_completeness;

/**
 * @summary DataQualitySyntax_namespace_completeness
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataQualitySyntax-namespace-completeness ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const DataQualitySyntax_namespace_completeness: typeof _enum_for_DataQualitySyntax_namespace_completeness = _enum_for_DataQualitySyntax_namespace_completeness;

/**
 * @summary DataQualitySyntax_namespace_completeness_none
 * @constant
 * @type {number}
 */
export
const DataQualitySyntax_namespace_completeness_none: number = DataQualitySyntax_namespace_completeness.none satisfies DataQualitySyntax_namespace_completeness; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: number = DataQualitySyntax_namespace_completeness_none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DataQualitySyntax_namespace_completeness_sample
 * @constant
 * @type {number}
 */
export
const DataQualitySyntax_namespace_completeness_sample: number = DataQualitySyntax_namespace_completeness.sample satisfies DataQualitySyntax_namespace_completeness; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sample
 * @constant
 * @type {number}
 */
export
const sample: number = DataQualitySyntax_namespace_completeness_sample; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DataQualitySyntax_namespace_completeness_selected
 * @constant
 * @type {number}
 */
export
const DataQualitySyntax_namespace_completeness_selected: number = DataQualitySyntax_namespace_completeness.selected satisfies DataQualitySyntax_namespace_completeness; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary selected
 * @constant
 * @type {number}
 */
export
const selected: number = DataQualitySyntax_namespace_completeness_selected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DataQualitySyntax_namespace_completeness_substantial
 * @constant
 * @type {number}
 */
export
const DataQualitySyntax_namespace_completeness_substantial: number = DataQualitySyntax_namespace_completeness.substantial satisfies DataQualitySyntax_namespace_completeness; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary substantial
 * @constant
 * @type {number}
 */
export
const substantial: number = DataQualitySyntax_namespace_completeness_substantial; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DataQualitySyntax_namespace_completeness_full
 * @constant
 * @type {number}
 */
export
const DataQualitySyntax_namespace_completeness_full: number = DataQualitySyntax_namespace_completeness.full satisfies DataQualitySyntax_namespace_completeness; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary full
 * @constant
 * @type {number}
 */
export
const full: number = DataQualitySyntax_namespace_completeness_full; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_DataQualitySyntax_namespace_completeness: $.ASN1Decoder<DataQualitySyntax_namespace_completeness> = $._decodeEnumerated;

export
const _encode_DataQualitySyntax_namespace_completeness: $.ASN1Encoder<DataQualitySyntax_namespace_completeness> = $._encodeEnumerated;

/* eslint-enable */
