/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AddEimResult_addEimResultCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddEimResult-addEimResultCode ::= INTEGER {
 *     ok(0),
 *     insufficientMemory(1),
 *     associatedEimAlreadyExists(2),
 *     ciPKUnknown(3),
 *     invalidAssociationToken(5),
 *     counterValueOutOfRange(6),
 *     commandError(7),
 *     undefinedError(127)
 * }
 * ```
 */
export
type AddEimResult_addEimResultCode = INTEGER;

/**
 * @summary AddEimResult_addEimResultCode_ok
 * @constant
 * @type {number}
 */
export
const AddEimResult_addEimResultCode_ok: AddEimResult_addEimResultCode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_ok
 * @constant
 * @type {number}
 */
export
const ok: AddEimResult_addEimResultCode = AddEimResult_addEimResultCode_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_insufficientMemory
 * @constant
 * @type {number}
 */
export
const AddEimResult_addEimResultCode_insufficientMemory: AddEimResult_addEimResultCode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_insufficientMemory
 * @constant
 * @type {number}
 */
export
const insufficientMemory: AddEimResult_addEimResultCode = AddEimResult_addEimResultCode_insufficientMemory; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_associatedEimAlreadyExists
 * @constant
 * @type {number}
 */
export
const AddEimResult_addEimResultCode_associatedEimAlreadyExists: AddEimResult_addEimResultCode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_associatedEimAlreadyExists
 * @constant
 * @type {number}
 */
export
const associatedEimAlreadyExists: AddEimResult_addEimResultCode = AddEimResult_addEimResultCode_associatedEimAlreadyExists; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_ciPKUnknown
 * @constant
 * @type {number}
 */
export
const AddEimResult_addEimResultCode_ciPKUnknown: AddEimResult_addEimResultCode = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_ciPKUnknown
 * @constant
 * @type {number}
 */
export
const ciPKUnknown: AddEimResult_addEimResultCode = AddEimResult_addEimResultCode_ciPKUnknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_invalidAssociationToken
 * @constant
 * @type {number}
 */
export
const AddEimResult_addEimResultCode_invalidAssociationToken: AddEimResult_addEimResultCode = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_invalidAssociationToken
 * @constant
 * @type {number}
 */
export
const invalidAssociationToken: AddEimResult_addEimResultCode = AddEimResult_addEimResultCode_invalidAssociationToken; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_counterValueOutOfRange
 * @constant
 * @type {number}
 */
export
const AddEimResult_addEimResultCode_counterValueOutOfRange: AddEimResult_addEimResultCode = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_counterValueOutOfRange
 * @constant
 * @type {number}
 */
export
const counterValueOutOfRange: AddEimResult_addEimResultCode = AddEimResult_addEimResultCode_counterValueOutOfRange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_commandError
 * @constant
 * @type {number}
 */
export
const AddEimResult_addEimResultCode_commandError: AddEimResult_addEimResultCode = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_commandError
 * @constant
 * @type {number}
 */
export
const commandError: AddEimResult_addEimResultCode = AddEimResult_addEimResultCode_commandError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_undefinedError
 * @constant
 * @type {number}
 */
export
const AddEimResult_addEimResultCode_undefinedError: AddEimResult_addEimResultCode = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: AddEimResult_addEimResultCode = AddEimResult_addEimResultCode_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AddEimResult_addEimResultCode: $.ASN1Decoder<AddEimResult_addEimResultCode> = $._decodeInteger;
export const _encode_AddEimResult_addEimResultCode: $.ASN1Encoder<AddEimResult_addEimResultCode> = $._encodeInteger;


/* eslint-enable */
