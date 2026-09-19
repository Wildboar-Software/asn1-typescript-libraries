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
 * AddEimResult-addEimResultCode ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
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

let _cached_decoder_for_AddEimResult_addEimResultCode: $.ASN1Decoder<AddEimResult_addEimResultCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddEimResult_addEimResultCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AddEimResult_addEimResultCode (el: _Element): AddEimResult_addEimResultCode {
    if (!_cached_decoder_for_AddEimResult_addEimResultCode) { _cached_decoder_for_AddEimResult_addEimResultCode = $._decodeInteger; }
    return _cached_decoder_for_AddEimResult_addEimResultCode(el);
}

let _cached_encoder_for_AddEimResult_addEimResultCode: $.ASN1Encoder<AddEimResult_addEimResultCode> | null = null;

/**
 * @summary Encodes a(n) AddEimResult_addEimResultCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddEimResult_addEimResultCode, encoded as an ASN.1 Element.
 */
export
function _encode_AddEimResult_addEimResultCode (value: AddEimResult_addEimResultCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AddEimResult_addEimResultCode) { _cached_encoder_for_AddEimResult_addEimResultCode = $._encodeInteger; }
    return _cached_encoder_for_AddEimResult_addEimResultCode(value, elGetter);
}


/* eslint-enable */
