/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary InputOutputServicesC2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InputOutputServicesC2  ::=  BIT STRING
 *     {startDataPathService           (0),
 *      stopDataPathService            (1),
 *      sendDataService                (2),
 *      sendMulticastDataService       (3),
 *      sendBroadcastDataService       (4),
 *      suspendDataPathService     (5),
 *      dataPathSuspendedService       (6),
 *      resumeDataPath             (7),
 *      dataPathResumedService     (8),
 *      fastData                       (9)     }
 * ```
 */
export
type InputOutputServicesC2 = BIT_STRING;

/**
 * @summary InputOutputServicesC2_startDataPathService
 * @constant
 */
export
const InputOutputServicesC2_startDataPathService: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary startDataPathService
 * @constant
 */
export
const startDataPathService: number = InputOutputServicesC2_startDataPathService; /* SHORT_NAMED_BIT */

/**
 * @summary InputOutputServicesC2_stopDataPathService
 * @constant
 */
export
const InputOutputServicesC2_stopDataPathService: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary stopDataPathService
 * @constant
 */
export
const stopDataPathService: number = InputOutputServicesC2_stopDataPathService; /* SHORT_NAMED_BIT */

/**
 * @summary InputOutputServicesC2_sendDataService
 * @constant
 */
export
const InputOutputServicesC2_sendDataService: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary sendDataService
 * @constant
 */
export
const sendDataService: number = InputOutputServicesC2_sendDataService; /* SHORT_NAMED_BIT */

/**
 * @summary InputOutputServicesC2_sendMulticastDataService
 * @constant
 */
export
const InputOutputServicesC2_sendMulticastDataService: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary sendMulticastDataService
 * @constant
 */
export
const sendMulticastDataService: number = InputOutputServicesC2_sendMulticastDataService; /* SHORT_NAMED_BIT */

/**
 * @summary InputOutputServicesC2_sendBroadcastDataService
 * @constant
 */
export
const InputOutputServicesC2_sendBroadcastDataService: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary sendBroadcastDataService
 * @constant
 */
export
const sendBroadcastDataService: number = InputOutputServicesC2_sendBroadcastDataService; /* SHORT_NAMED_BIT */

/**
 * @summary InputOutputServicesC2_suspendDataPathService
 * @constant
 */
export
const InputOutputServicesC2_suspendDataPathService: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary suspendDataPathService
 * @constant
 */
export
const suspendDataPathService: number = InputOutputServicesC2_suspendDataPathService; /* SHORT_NAMED_BIT */

/**
 * @summary InputOutputServicesC2_dataPathSuspendedService
 * @constant
 */
export
const InputOutputServicesC2_dataPathSuspendedService: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary dataPathSuspendedService
 * @constant
 */
export
const dataPathSuspendedService: number = InputOutputServicesC2_dataPathSuspendedService; /* SHORT_NAMED_BIT */

/**
 * @summary InputOutputServicesC2_resumeDataPath
 * @constant
 */
export
const InputOutputServicesC2_resumeDataPath: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary resumeDataPath
 * @constant
 */
export
const resumeDataPath: number = InputOutputServicesC2_resumeDataPath; /* SHORT_NAMED_BIT */

/**
 * @summary InputOutputServicesC2_dataPathResumedService
 * @constant
 */
export
const InputOutputServicesC2_dataPathResumedService: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary dataPathResumedService
 * @constant
 */
export
const dataPathResumedService: number = InputOutputServicesC2_dataPathResumedService; /* SHORT_NAMED_BIT */

/**
 * @summary InputOutputServicesC2_fastData
 * @constant
 */
export
const InputOutputServicesC2_fastData: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary fastData
 * @constant
 */
export
const fastData: number = InputOutputServicesC2_fastData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_InputOutputServicesC2: $.ASN1Decoder<InputOutputServicesC2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InputOutputServicesC2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InputOutputServicesC2 (el: _Element): InputOutputServicesC2 {
    if (!_cached_decoder_for_InputOutputServicesC2) { _cached_decoder_for_InputOutputServicesC2 = $._decodeBitString; }
    return _cached_decoder_for_InputOutputServicesC2(el);
}

let _cached_encoder_for_InputOutputServicesC2: $.ASN1Encoder<InputOutputServicesC2> | null = null;

/**
 * @summary Encodes a(n) InputOutputServicesC2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InputOutputServicesC2, encoded as an ASN.1 Element.
 */
export
function _encode_InputOutputServicesC2 (value: InputOutputServicesC2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InputOutputServicesC2) { _cached_encoder_for_InputOutputServicesC2 = $._encodeBitString; }
    return _cached_encoder_for_InputOutputServicesC2(value, elGetter);
}


/* eslint-enable */
