/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_GPRSEvent {
    pDPContextActivation = 1,
    startOfInterceptionWithPDPContextActive = 2,
    pDPContextDeactivation = 4,
    gPRSAttach = 5,
    gPRSDetach = 6,
    cellOrRAUpdate = 10,
    sMS = 11,
    pDPContextModification = 13,
}

/**
 * @summary GPRSEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRSEvent  ::=  ENUMERATED
 * {
 *     pDPContextActivation(1),
 *     startOfInterceptionWithPDPContextActive(2),
 *     pDPContextDeactivation(4),
 *     gPRSAttach(5),
 *     gPRSDetach(6),
 *     cellOrRAUpdate(10),
 *     sMS(11),
 *     ...,
 *     pDPContextModification(13)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type GPRSEvent = _enum_for_GPRSEvent | ENUMERATED;

/**
 * @summary GPRSEvent_pDPContextActivation
 * @constant
 * @type {number}
 */
export
const GPRSEvent_pDPContextActivation: GPRSEvent = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPContextActivation
 * @constant
 * @type {number}
 */
export
const pDPContextActivation: GPRSEvent = GPRSEvent_pDPContextActivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_startOfInterceptionWithPDPContextActive
 * @constant
 * @type {number}
 */
export
const GPRSEvent_startOfInterceptionWithPDPContextActive: GPRSEvent = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptionWithPDPContextActive
 * @constant
 * @type {number}
 */
export
const startOfInterceptionWithPDPContextActive: GPRSEvent = GPRSEvent_startOfInterceptionWithPDPContextActive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_pDPContextDeactivation
 * @constant
 * @type {number}
 */
export
const GPRSEvent_pDPContextDeactivation: GPRSEvent = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPContextDeactivation
 * @constant
 * @type {number}
 */
export
const pDPContextDeactivation: GPRSEvent = GPRSEvent_pDPContextDeactivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_gPRSAttach
 * @constant
 * @type {number}
 */
export
const GPRSEvent_gPRSAttach: GPRSEvent = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPRSAttach
 * @constant
 * @type {number}
 */
export
const gPRSAttach: GPRSEvent = GPRSEvent_gPRSAttach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_gPRSDetach
 * @constant
 * @type {number}
 */
export
const GPRSEvent_gPRSDetach: GPRSEvent = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPRSDetach
 * @constant
 * @type {number}
 */
export
const gPRSDetach: GPRSEvent = GPRSEvent_gPRSDetach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_cellOrRAUpdate
 * @constant
 * @type {number}
 */
export
const GPRSEvent_cellOrRAUpdate: GPRSEvent = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cellOrRAUpdate
 * @constant
 * @type {number}
 */
export
const cellOrRAUpdate: GPRSEvent = GPRSEvent_cellOrRAUpdate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_sMS
 * @constant
 * @type {number}
 */
export
const GPRSEvent_sMS: GPRSEvent = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMS
 * @constant
 * @type {number}
 */
export
const sMS: GPRSEvent = GPRSEvent_sMS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_pDPContextModification
 * @constant
 * @type {number}
 */
export
const GPRSEvent_pDPContextModification: GPRSEvent = 13; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPContextModification
 * @constant
 * @type {number}
 */
export
const pDPContextModification: GPRSEvent = GPRSEvent_pDPContextModification; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_GPRSEvent: $.ASN1Decoder<GPRSEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GPRSEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GPRSEvent (el: _Element): GPRSEvent {
    if (!_cached_decoder_for_GPRSEvent) { _cached_decoder_for_GPRSEvent = $._decodeEnumerated; }
    return _cached_decoder_for_GPRSEvent(el);
}

let _cached_encoder_for_GPRSEvent: $.ASN1Encoder<GPRSEvent> | null = null;

/**
 * @summary Encodes a(n) GPRSEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GPRSEvent, encoded as an ASN.1 Element.
 */
export
function _encode_GPRSEvent (value: GPRSEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GPRSEvent) { _cached_encoder_for_GPRSEvent = $._encodeEnumerated; }
    return _cached_encoder_for_GPRSEvent(value, elGetter);
}


/* eslint-enable */
