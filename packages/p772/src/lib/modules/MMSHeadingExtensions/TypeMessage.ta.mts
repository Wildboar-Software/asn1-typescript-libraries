/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TypeMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeMessage  ::=  INTEGER {exercise(0), operation(1), project(2), drill(3)}
 * ```
 */
export
type TypeMessage = INTEGER;

/**
 * @summary TypeMessage_exercise
 * @constant
 * @type {number}
 */
export
const TypeMessage_exercise: TypeMessage = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TypeMessage_exercise
 * @constant
 * @type {number}
 */
export
const exercise: TypeMessage = TypeMessage_exercise; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TypeMessage_operation
 * @constant
 * @type {number}
 */
export
const TypeMessage_operation: TypeMessage = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TypeMessage_operation
 * @constant
 * @type {number}
 */
export
const operation: TypeMessage = TypeMessage_operation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TypeMessage_project
 * @constant
 * @type {number}
 */
export
const TypeMessage_project: TypeMessage = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TypeMessage_project
 * @constant
 * @type {number}
 */
export
const project: TypeMessage = TypeMessage_project; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TypeMessage_drill
 * @constant
 * @type {number}
 */
export
const TypeMessage_drill: TypeMessage = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TypeMessage_drill
 * @constant
 * @type {number}
 */
export
const drill: TypeMessage = TypeMessage_drill; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_TypeMessage = $._decodeInteger;
export const _encode_TypeMessage = $._encodeInteger;


/* eslint-enable */
