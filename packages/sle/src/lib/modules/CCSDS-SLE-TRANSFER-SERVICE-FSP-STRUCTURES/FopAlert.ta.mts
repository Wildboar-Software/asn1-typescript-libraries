/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FopAlert
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FopAlert                 ::=    INTEGER
 * {  noAlert                       (0)
 * ,  limit                         (1)
 * ,  lockOutDetected               (2)
 * ,  synch                         (3)
 * ,  invalidNR                     (4)
 * ,  clcw                          (5)
 * ,  lowerLayerOutOfSync           (6)
 * ,  terminateADService            (7)
 * }
 * ```
 */
export
type FopAlert = INTEGER;

/**
 * @summary FopAlert_noAlert
 * @constant
 * @type {number}
 */
export
const FopAlert_noAlert: FopAlert = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FopAlert_noAlert
 * @constant
 * @type {number}
 */
export
const noAlert: FopAlert = FopAlert_noAlert; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FopAlert_limit
 * @constant
 * @type {number}
 */
export
const FopAlert_limit: FopAlert = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FopAlert_limit
 * @constant
 * @type {number}
 */
export
const limit: FopAlert = FopAlert_limit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FopAlert_lockOutDetected
 * @constant
 * @type {number}
 */
export
const FopAlert_lockOutDetected: FopAlert = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FopAlert_lockOutDetected
 * @constant
 * @type {number}
 */
export
const lockOutDetected: FopAlert = FopAlert_lockOutDetected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FopAlert_synch
 * @constant
 * @type {number}
 */
export
const FopAlert_synch: FopAlert = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FopAlert_synch
 * @constant
 * @type {number}
 */
export
const synch: FopAlert = FopAlert_synch; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FopAlert_invalidNR
 * @constant
 * @type {number}
 */
export
const FopAlert_invalidNR: FopAlert = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FopAlert_invalidNR
 * @constant
 * @type {number}
 */
export
const invalidNR: FopAlert = FopAlert_invalidNR; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FopAlert_clcw
 * @constant
 * @type {number}
 */
export
const FopAlert_clcw: FopAlert = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FopAlert_clcw
 * @constant
 * @type {number}
 */
export
const clcw: FopAlert = FopAlert_clcw; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FopAlert_lowerLayerOutOfSync
 * @constant
 * @type {number}
 */
export
const FopAlert_lowerLayerOutOfSync: FopAlert = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FopAlert_lowerLayerOutOfSync
 * @constant
 * @type {number}
 */
export
const lowerLayerOutOfSync: FopAlert = FopAlert_lowerLayerOutOfSync; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FopAlert_terminateADService
 * @constant
 * @type {number}
 */
export
const FopAlert_terminateADService: FopAlert = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FopAlert_terminateADService
 * @constant
 * @type {number}
 */
export
const terminateADService: FopAlert = FopAlert_terminateADService; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_FopAlert: $.ASN1Decoder<FopAlert> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FopAlert
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FopAlert (el: _Element): FopAlert {
    if (!_cached_decoder_for_FopAlert) { _cached_decoder_for_FopAlert = $._decodeInteger; }
    return _cached_decoder_for_FopAlert(el);
}

let _cached_encoder_for_FopAlert: $.ASN1Encoder<FopAlert> | null = null;

/**
 * @summary Encodes a(n) FopAlert into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FopAlert, encoded as an ASN.1 Element.
 */
export
function _encode_FopAlert (value: FopAlert, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FopAlert) { _cached_encoder_for_FopAlert = $._encodeInteger; }
    return _cached_encoder_for_FopAlert(value, elGetter);
}


/* eslint-enable */
