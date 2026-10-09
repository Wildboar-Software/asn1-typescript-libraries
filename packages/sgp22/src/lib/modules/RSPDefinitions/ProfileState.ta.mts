/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProfileState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileState  ::=  INTEGER {disabled(0), enabled(1)}
 * ```
 */
export
type ProfileState = INTEGER;

/**
 * @summary ProfileState_disabled
 * @constant
 * @type {number}
 */
export
const ProfileState_disabled: ProfileState = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileState_disabled
 * @constant
 * @type {number}
 */
export
const disabled: ProfileState = ProfileState_disabled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileState_enabled
 * @constant
 * @type {number}
 */
export
const ProfileState_enabled: ProfileState = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileState_enabled
 * @constant
 * @type {number}
 */
export
const enabled: ProfileState = ProfileState_enabled; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ProfileState = $._decodeInteger;
export const _encode_ProfileState = $._encodeInteger;


/* eslint-enable */
