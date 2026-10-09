/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PrimitiveDataType
 * @description
 * Primitive datatype of a schema element, a tag-set element, or a variant
 * value. The standard names the values and does not define them further, except
 * `noneOfTheAbove`: see the element's description. If a tag-set element's
 * datatype is structured, the schema describes it and this value is omitted on
 * the tag-set element. ANSI/NISO Z39.50-2003 Explain ASN.1; §3.2.10.3.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrimitiveDataType  ::=  INTEGER {
 *     octetString    (0),
 *     numeric        (1),
 *     date           (2),
 *     external       (3),
 *     string         (4),
 *     trueOrFalse    (5),
 *     oid            (6),
 *     intUnit        (7),
 *     empty          (8),
 *     noneOfTheAbove (100) -- See 'description'
 * }
 * ```
 */
export
type PrimitiveDataType = INTEGER;

/**
 * @summary PrimitiveDataType_octetString
 * @description
 * Named primitive `octetString`. The standard does not define this value beyond
 * that name.
 * @constant
 * @type {number}
 */
export
const PrimitiveDataType_octetString: PrimitiveDataType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_octetString
 * @description
 * Short name for `PrimitiveDataType_octetString`.
 * @constant
 * @type {number}
 */
export
const octetString: PrimitiveDataType = PrimitiveDataType_octetString; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_numeric
 * @description
 * Named primitive `numeric`. The standard does not define this value beyond
 * that name.
 * @constant
 * @type {number}
 */
export
const PrimitiveDataType_numeric: PrimitiveDataType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_numeric
 * @description
 * Short name for `PrimitiveDataType_numeric`.
 * @constant
 * @type {number}
 */
export
const numeric: PrimitiveDataType = PrimitiveDataType_numeric; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_date
 * @description
 * Named primitive `date`. The standard does not define this value beyond that
 * name.
 * @constant
 * @type {number}
 */
export
const PrimitiveDataType_date: PrimitiveDataType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_date
 * @description
 * Short name for `PrimitiveDataType_date`.
 * @constant
 * @type {number}
 */
export
const date: PrimitiveDataType = PrimitiveDataType_date; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_external
 * @description
 * Named primitive `external`. The standard does not define this value beyond
 * that name.
 * @constant
 * @type {number}
 */
export
const PrimitiveDataType_external: PrimitiveDataType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_external
 * @description
 * Short name for `PrimitiveDataType_external`.
 * @constant
 * @type {number}
 */
export
const external: PrimitiveDataType = PrimitiveDataType_external; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_string_
 * @description
 * Named primitive `string`. The standard does not define this value beyond that
 * name.
 * @constant
 * @type {number}
 */
export
const PrimitiveDataType_string_: PrimitiveDataType = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_string_
 * @description
 * Short name for `PrimitiveDataType_string_`.
 * @constant
 * @type {number}
 */
export
const string_: PrimitiveDataType = PrimitiveDataType_string_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_trueOrFalse
 * @description
 * Named primitive `trueOrFalse`. The standard does not define this value beyond
 * that name.
 * @constant
 * @type {number}
 */
export
const PrimitiveDataType_trueOrFalse: PrimitiveDataType = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_trueOrFalse
 * @description
 * Short name for `PrimitiveDataType_trueOrFalse`.
 * @constant
 * @type {number}
 */
export
const trueOrFalse: PrimitiveDataType = PrimitiveDataType_trueOrFalse; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_oid
 * @description
 * Named primitive `oid`. The standard does not define this value beyond that
 * name.
 * @constant
 * @type {number}
 */
export
const PrimitiveDataType_oid: PrimitiveDataType = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_oid
 * @description
 * Short name for `PrimitiveDataType_oid`.
 * @constant
 * @type {number}
 */
export
const oid: PrimitiveDataType = PrimitiveDataType_oid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_intUnit
 * @description
 * Named primitive `intUnit`. The standard does not define this value beyond
 * that name.
 * @constant
 * @type {number}
 */
export
const PrimitiveDataType_intUnit: PrimitiveDataType = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_intUnit
 * @description
 * Short name for `PrimitiveDataType_intUnit`.
 * @constant
 * @type {number}
 */
export
const intUnit: PrimitiveDataType = PrimitiveDataType_intUnit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_empty
 * @description
 * Named primitive `empty`. The standard does not define this value beyond that
 * name.
 * @constant
 * @type {number}
 */
export
const PrimitiveDataType_empty: PrimitiveDataType = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_empty
 * @description
 * Short name for `PrimitiveDataType_empty`.
 * @constant
 * @type {number}
 */
export
const empty: PrimitiveDataType = PrimitiveDataType_empty; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_noneOfTheAbove
 * @description
 * Not one of the named primitives. The element's description carries the
 * datatype. ANSI/NISO Z39.50-2003 Explain ASN.1 (`noneOfTheAbove`).
 * @constant
 * @type {number}
 */
export
const PrimitiveDataType_noneOfTheAbove: PrimitiveDataType = 100; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimitiveDataType_noneOfTheAbove
 * @description
 * Short name for `PrimitiveDataType_noneOfTheAbove`.
 * @constant
 * @type {number}
 */
export
const noneOfTheAbove: PrimitiveDataType = PrimitiveDataType_noneOfTheAbove; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_PrimitiveDataType = $._decodeInteger;
export const _encode_PrimitiveDataType = $._encodeInteger;


/* eslint-enable */
