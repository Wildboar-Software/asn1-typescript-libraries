/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CscaMasterListVersion
 * @description
 *
 * Version of `CscaMasterList`. Only `v0` is assigned.
 *
 * Doc 9303-12, section 9.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CscaMasterListVersion  ::=  INTEGER {v0(0)}
 * ```
 */
export
type CscaMasterListVersion = INTEGER;

/**
 * The only version assigned by section 9.2.
 * @summary CscaMasterListVersion_v0
 * @constant
 * @type {number}
 */
export
const CscaMasterListVersion_v0: 0 = 0 satisfies CscaMasterListVersion; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link CscaMasterListVersion_v0}.
 * @summary CscaMasterListVersion_v0
 * @constant
 * @type {number}
 */
export
const v0: 0 = CscaMasterListVersion_v0; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CscaMasterListVersion: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_CscaMasterListVersion: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
