/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LockStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LockStatus                    ::=  INTEGER
 * {   inLock                            (0)
 * ,   outOfLock                         (1)
 * ,   notInUse                          (2)
 * ,   unknown                           (3)
 * }
 * ```
 */
export
type LockStatus = INTEGER;

/**
 * @summary LockStatus_inLock
 * @constant
 * @type {number}
 */
export
const LockStatus_inLock: LockStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_inLock
 * @constant
 * @type {number}
 */
export
const inLock: LockStatus = LockStatus_inLock; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_outOfLock
 * @constant
 * @type {number}
 */
export
const LockStatus_outOfLock: LockStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_outOfLock
 * @constant
 * @type {number}
 */
export
const outOfLock: LockStatus = LockStatus_outOfLock; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_notInUse
 * @constant
 * @type {number}
 */
export
const LockStatus_notInUse: LockStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_notInUse
 * @constant
 * @type {number}
 */
export
const notInUse: LockStatus = LockStatus_notInUse; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_unknown
 * @constant
 * @type {number}
 */
export
const LockStatus_unknown: LockStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_unknown
 * @constant
 * @type {number}
 */
export
const unknown: LockStatus = LockStatus_unknown; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_LockStatus: $.ASN1Decoder<LockStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LockStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LockStatus (el: _Element): LockStatus {
    if (!_cached_decoder_for_LockStatus) { _cached_decoder_for_LockStatus = $._decodeInteger; }
    return _cached_decoder_for_LockStatus(el);
}

let _cached_encoder_for_LockStatus: $.ASN1Encoder<LockStatus> | null = null;

/**
 * @summary Encodes a(n) LockStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LockStatus, encoded as an ASN.1 Element.
 */
export
function _encode_LockStatus (value: LockStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LockStatus) { _cached_encoder_for_LockStatus = $._encodeInteger; }
    return _cached_encoder_for_LockStatus(value, elGetter);
}


/* eslint-enable */
