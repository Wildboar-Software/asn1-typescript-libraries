/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Usage_type
 * @description
 * 
 * Redistribution code for a GRS-1 element (ANSI/NISO Z39.50-2003, RET.3.2.3,
 * ASN1.6).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Usage-type ::= INTEGER {
 *     redistributable (1),
 *     -- Element is freely redistributable
 *     restricted (2),
 *     -- Restriction contains statement
 *     licensePointer (3)  -- Restriction contains license pointer
 * }
 * ```
 */
export
type Usage_type = INTEGER;

/**
 * @summary Usage_type_redistributable
 * @description
 * 
 * The element may be freely redistributed (RET.3.2.3, ASN1.6).
 * @constant
 * @type {number}
 */
export
const Usage_type_redistributable: 1 = 1 satisfies Usage_type; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Usage_type_redistributable
 * @description
 * 
 * Short name for `Usage_type_redistributable`: freely redistributable.
 * @constant
 * @type {number}
 */
export
const redistributable: 1 = Usage_type_redistributable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Usage_type_restricted
 * @description
 * 
 * A restriction applies, and the accompanying restriction is the statement of
 * that restriction (ASN1.6).
 * @constant
 * @type {number}
 */
export
const Usage_type_restricted: 2 = 2 satisfies Usage_type; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Usage_type_restricted
 * @description
 * 
 * Short name for `Usage_type_restricted`: restriction text applies.
 * @constant
 * @type {number}
 */
export
const restricted: 2 = Usage_type_restricted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Usage_type_licensePointer
 * @description
 * 
 * A restriction applies, and the accompanying restriction is a pointer to the
 * license (ASN1.6).
 * @constant
 * @type {number}
 */
export
const Usage_type_licensePointer: 3 = 3 satisfies Usage_type; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Usage_type_licensePointer
 * @description
 * 
 * Short name for `Usage_type_licensePointer`: restriction is a license pointer.
 * @constant
 * @type {number}
 */
export
const licensePointer: 3 = Usage_type_licensePointer; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Usage_type: $.ASN1Decoder<Usage_type> = $._decodeInteger;
export const _encode_Usage_type: $.ASN1Encoder<Usage_type> = $._encodeInteger;


/* eslint-enable */
