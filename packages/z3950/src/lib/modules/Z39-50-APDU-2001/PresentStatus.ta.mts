/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PresentStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresentStatus  ::=  [27] IMPLICIT INTEGER{
 *     success     (0),
 *     partial-1   (1),
 *     partial-2   (2),
 *     partial-3   (3),
 *     partial-4   (4),
 *     failure     (5)
 * }
 * ```
 */
export
type PresentStatus = INTEGER;

/**
 * @summary PresentStatus_success
 * @constant
 * @type {number}
 */
export
const PresentStatus_success: PresentStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PresentStatus_success
 * @constant
 * @type {number}
 */
export
const success: PresentStatus = PresentStatus_success; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PresentStatus_partial_1
 * @constant
 * @type {number}
 */
export
const PresentStatus_partial_1: PresentStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PresentStatus_partial_1
 * @constant
 * @type {number}
 */
export
const partial_1: PresentStatus = PresentStatus_partial_1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PresentStatus_partial_2
 * @constant
 * @type {number}
 */
export
const PresentStatus_partial_2: PresentStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PresentStatus_partial_2
 * @constant
 * @type {number}
 */
export
const partial_2: PresentStatus = PresentStatus_partial_2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PresentStatus_partial_3
 * @constant
 * @type {number}
 */
export
const PresentStatus_partial_3: PresentStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PresentStatus_partial_3
 * @constant
 * @type {number}
 */
export
const partial_3: PresentStatus = PresentStatus_partial_3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PresentStatus_partial_4
 * @constant
 * @type {number}
 */
export
const PresentStatus_partial_4: PresentStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PresentStatus_partial_4
 * @constant
 * @type {number}
 */
export
const partial_4: PresentStatus = PresentStatus_partial_4; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PresentStatus_failure
 * @constant
 * @type {number}
 */
export
const PresentStatus_failure: PresentStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PresentStatus_failure
 * @constant
 * @type {number}
 */
export
const failure: PresentStatus = PresentStatus_failure; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_PresentStatus: $.ASN1Decoder<PresentStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PresentStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PresentStatus (el: _Element): PresentStatus {
    if (!_cached_decoder_for_PresentStatus) { _cached_decoder_for_PresentStatus = $._decode_implicit<PresentStatus>(() => $._decodeInteger); }
    return _cached_decoder_for_PresentStatus(el);
}

let _cached_encoder_for_PresentStatus: $.ASN1Encoder<PresentStatus> | null = null;

/**
 * @summary Encodes a(n) PresentStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresentStatus, encoded as an ASN.1 Element.
 */
export
function _encode_PresentStatus (value: PresentStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PresentStatus) { _cached_encoder_for_PresentStatus = $._encode_implicit(_TagClass.context, 27, () => $._encode_implicit(_TagClass.context, 27, () => $._encodeInteger, $.BER), $.BER); }
    return _cached_encoder_for_PresentStatus(value, elGetter);
}


/* eslint-enable */
