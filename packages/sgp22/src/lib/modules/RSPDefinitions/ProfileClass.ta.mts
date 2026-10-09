/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProfileClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileClass  ::=  INTEGER {test(0), provisioning(1), operational(2)}
 * ```
 */
export
type ProfileClass = INTEGER;

/**
 * @summary ProfileClass_test
 * @constant
 * @type {number}
 */
export
const ProfileClass_test: ProfileClass = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileClass_test
 * @constant
 * @type {number}
 */
export
const test: ProfileClass = ProfileClass_test; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileClass_provisioning
 * @constant
 * @type {number}
 */
export
const ProfileClass_provisioning: ProfileClass = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileClass_provisioning
 * @constant
 * @type {number}
 */
export
const provisioning: ProfileClass = ProfileClass_provisioning; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileClass_operational
 * @constant
 * @type {number}
 */
export
const ProfileClass_operational: ProfileClass = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileClass_operational
 * @constant
 * @type {number}
 */
export
const operational: ProfileClass = ProfileClass_operational; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ProfileClass = $._decodeInteger;
export const _encode_ProfileClass = $._encodeInteger;


/* eslint-enable */
