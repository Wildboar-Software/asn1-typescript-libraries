/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ObjectClassKind
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObjectClassKind  ::=  ENUMERATED {
 *   abstract   (0),
 *   structural (1),
 *   auxiliary  (2)}
 * ```
 * 
 * @enum {number}
 */
export
const _enum_for_ObjectClassKind: {
    readonly abstract: 0;
    readonly structural: 1;
    readonly auxiliary: 2;
} = {
    abstract: 0,
    structural: 1,
    auxiliary: 2,
};

export
type _enum_for_ObjectClassKind = ENUMERATED;

/**
 * @summary ObjectClassKind
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObjectClassKind  ::=  ENUMERATED {
 *   abstract   (0),
 *   structural (1),
 *   auxiliary  (2)}
 * ```
 * 
 * @enum {number}
 */
export
type ObjectClassKind = _enum_for_ObjectClassKind;

/**
 * @summary ObjectClassKind
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObjectClassKind  ::=  ENUMERATED {
 *   abstract   (0),
 *   structural (1),
 *   auxiliary  (2)}
 * ```
 * 
 * @enum {number}
 */
export
const ObjectClassKind: typeof _enum_for_ObjectClassKind = _enum_for_ObjectClassKind;

/**
 * @summary ObjectClassKind_abstract
 * @constant
 * @type {number}
 */
export
const ObjectClassKind_abstract: number = ObjectClassKind.abstract satisfies ObjectClassKind; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abstract
 * @constant
 * @type {number}
 */
export
const abstract: number = ObjectClassKind_abstract; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ObjectClassKind_structural
 * @constant
 * @type {number}
 */
export
const ObjectClassKind_structural: number = ObjectClassKind.structural satisfies ObjectClassKind; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary structural
 * @constant
 * @type {number}
 */
export
const structural: number = ObjectClassKind_structural; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ObjectClassKind_auxiliary
 * @constant
 * @type {number}
 */
export
const ObjectClassKind_auxiliary: number = ObjectClassKind.auxiliary satisfies ObjectClassKind; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auxiliary
 * @constant
 * @type {number}
 */
export
const auxiliary: number = ObjectClassKind_auxiliary; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ObjectClassKind: $.ASN1Decoder<ObjectClassKind> = $._decodeEnumerated;

export
const _encode_ObjectClassKind: $.ASN1Encoder<ObjectClassKind> = $._encodeEnumerated;

/* eslint-enable */
