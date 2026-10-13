/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UplinkStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UplinkStatus                   ::=    INTEGER
 * {  uplinkStatusNotAvailable      (0)
 * ,  noRfAvailable                 (1)
 * ,  noBitLock                     (2)
 * ,  nominal                       (3)
 * }
 * ```
 */
export
type UplinkStatus = INTEGER;

/**
 * @summary UplinkStatus_uplinkStatusNotAvailable
 * @constant
 * @type {number}
 */
export
const UplinkStatus_uplinkStatusNotAvailable: UplinkStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UplinkStatus_uplinkStatusNotAvailable
 * @constant
 * @type {number}
 */
export
const uplinkStatusNotAvailable: UplinkStatus = UplinkStatus_uplinkStatusNotAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UplinkStatus_noRfAvailable
 * @constant
 * @type {number}
 */
export
const UplinkStatus_noRfAvailable: UplinkStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UplinkStatus_noRfAvailable
 * @constant
 * @type {number}
 */
export
const noRfAvailable: UplinkStatus = UplinkStatus_noRfAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UplinkStatus_noBitLock
 * @constant
 * @type {number}
 */
export
const UplinkStatus_noBitLock: UplinkStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UplinkStatus_noBitLock
 * @constant
 * @type {number}
 */
export
const noBitLock: UplinkStatus = UplinkStatus_noBitLock; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UplinkStatus_nominal
 * @constant
 * @type {number}
 */
export
const UplinkStatus_nominal: UplinkStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UplinkStatus_nominal
 * @constant
 * @type {number}
 */
export
const nominal: UplinkStatus = UplinkStatus_nominal; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_UplinkStatus: $.ASN1Decoder<UplinkStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UplinkStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UplinkStatus (el: _Element): UplinkStatus {
    if (!_cached_decoder_for_UplinkStatus) { _cached_decoder_for_UplinkStatus = $._decodeInteger; }
    return _cached_decoder_for_UplinkStatus(el);
}

let _cached_encoder_for_UplinkStatus: $.ASN1Encoder<UplinkStatus> | null = null;

/**
 * @summary Encodes a(n) UplinkStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UplinkStatus, encoded as an ASN.1 Element.
 */
export
function _encode_UplinkStatus (value: UplinkStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UplinkStatus) { _cached_encoder_for_UplinkStatus = $._encodeInteger; }
    return _cached_encoder_for_UplinkStatus(value, elGetter);
}


/* eslint-enable */
