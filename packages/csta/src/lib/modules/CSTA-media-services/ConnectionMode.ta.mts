/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ConnectionMode
 * @description
 *
 * How a media access device (MAD) is added to a call when attaching a media
 * service. Each value names the call-control model used, except `direct` (MAD
 * already in the call). ECMA-269 §19.1.1.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionMode  ::=  ENUMERATED
 * {     consultationConference             (0),
 *     consultationConferenceHold         (1),
 *     deflect                 (2),
 *     directedPickup                 (3),
 *     join                     (4),
 *     singleStepConference             (5),
 *     singleStepConferenceHold         (6),
 *     singleStepTransfer             (7),
 *     transfer                 (8),
 *     direct                     (9) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ConnectionMode {
    consultationConference = 0,
    consultationConferenceHold = 1,
    deflect = 2,
    directedPickup = 3,
    join = 4,
    singleStepConference = 5,
    singleStepConferenceHold = 6,
    singleStepTransfer = 7,
    transfer = 8,
    direct = 9,
}

/**
 * @summary ConnectionMode
 * @description
 *
 * How a media access device (MAD) is added to a call when attaching a media
 * service. Each value names the call-control model used, except `direct` (MAD
 * already in the call). ECMA-269 §19.1.1.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionMode  ::=  ENUMERATED
 * {     consultationConference             (0),
 *     consultationConferenceHold         (1),
 *     deflect                 (2),
 *     directedPickup                 (3),
 *     join                     (4),
 *     singleStepConference             (5),
 *     singleStepConferenceHold         (6),
 *     singleStepTransfer             (7),
 *     transfer                 (8),
 *     direct                     (9) }
 * ```
 * 
 * @enum {number}
 */
export
type ConnectionMode = _enum_for_ConnectionMode;

/**
 * @summary ConnectionMode
 * @description
 *
 * How a media access device (MAD) is added to a call when attaching a media
 * service. Each value names the call-control model used, except `direct` (MAD
 * already in the call). ECMA-269 §19.1.1.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionMode  ::=  ENUMERATED
 * {     consultationConference             (0),
 *     consultationConferenceHold         (1),
 *     deflect                 (2),
 *     directedPickup                 (3),
 *     join                     (4),
 *     singleStepConference             (5),
 *     singleStepConferenceHold         (6),
 *     singleStepTransfer             (7),
 *     transfer                 (8),
 *     direct                     (9) }
 * ```
 * 
 * @enum {number}
 */
export
const ConnectionMode = _enum_for_ConnectionMode;

/**
 * @summary ConnectionMode_consultationConference
 * @description
 *
 * Conference the MAD via Consultation Call and Conference Call. ECMA-269
 * §19.1.1.
 *
 * @constant
 * @type {number}
 */
export
const ConnectionMode_consultationConference: ConnectionMode = ConnectionMode.consultationConference; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary consultationConference
 * @constant
 * @type {number}
 */
export
const consultationConference: ConnectionMode = ConnectionMode.consultationConference; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConnectionMode_consultationConferenceHold
 * @description
 *
 * Conference the MAD via Consultation Call and Hold (attaching device held).
 * ECMA-269 §19.1.1.
 *
 * @constant
 * @type {number}
 */
export
const ConnectionMode_consultationConferenceHold: ConnectionMode = ConnectionMode.consultationConferenceHold; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary consultationConferenceHold
 * @constant
 * @type {number}
 */
export
const consultationConferenceHold: ConnectionMode = ConnectionMode.consultationConferenceHold; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConnectionMode_deflect
 * @description
 *
 * Move the call to the MAD via Deflect Call. ECMA-269 §19.1.1.
 *
 * @constant
 * @type {number}
 */
export
const ConnectionMode_deflect: ConnectionMode = ConnectionMode.deflect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deflect
 * @constant
 * @type {number}
 */
export
const deflect: ConnectionMode = ConnectionMode.deflect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConnectionMode_directedPickup
 * @description
 *
 * Direct the call to the MAD via Directed Pickup. ECMA-269 §19.1.1.
 *
 * @constant
 * @type {number}
 */
export
const ConnectionMode_directedPickup: ConnectionMode = ConnectionMode.directedPickup; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary directedPickup
 * @constant
 * @type {number}
 */
export
const directedPickup: ConnectionMode = ConnectionMode.directedPickup; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConnectionMode_join
 * @description
 *
 * Add a device via Join Call; the application chooses the MAD. ECMA-269
 * §19.1.1.
 *
 * @constant
 * @type {number}
 */
export
const ConnectionMode_join: ConnectionMode = ConnectionMode.join; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary join
 * @constant
 * @type {number}
 */
export
const join: ConnectionMode = ConnectionMode.join; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConnectionMode_singleStepConference
 * @description
 *
 * Conference the MAD via Single Step Conference. ECMA-269 §19.1.1.
 *
 * @constant
 * @type {number}
 */
export
const ConnectionMode_singleStepConference: ConnectionMode = ConnectionMode.singleStepConference; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary singleStepConference
 * @constant
 * @type {number}
 */
export
const singleStepConference: ConnectionMode = ConnectionMode.singleStepConference; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConnectionMode_singleStepConferenceHold
 * @description
 *
 * Single Step Conference plus Hold at the attaching device. ECMA-269 §19.1.1.
 *
 * @constant
 * @type {number}
 */
export
const ConnectionMode_singleStepConferenceHold: ConnectionMode = ConnectionMode.singleStepConferenceHold; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary singleStepConferenceHold
 * @constant
 * @type {number}
 */
export
const singleStepConferenceHold: ConnectionMode = ConnectionMode.singleStepConferenceHold; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConnectionMode_singleStepTransfer
 * @description
 *
 * Transfer the MAD in via Single Step Transfer. ECMA-269 §19.1.1.
 *
 * @constant
 * @type {number}
 */
export
const ConnectionMode_singleStepTransfer: ConnectionMode = ConnectionMode.singleStepTransfer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary singleStepTransfer
 * @constant
 * @type {number}
 */
export
const singleStepTransfer: ConnectionMode = ConnectionMode.singleStepTransfer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConnectionMode_transfer
 * @description
 *
 * Transfer the MAD via Consultation Call and Transfer. ECMA-269 §19.1.1.
 *
 * @constant
 * @type {number}
 */
export
const ConnectionMode_transfer: ConnectionMode = ConnectionMode.transfer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transfer
 * @constant
 * @type {number}
 */
export
const transfer: ConnectionMode = ConnectionMode.transfer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConnectionMode_direct
 * @description
 *
 * Bind the media service to the existing connection; MAD already in the call.
 * ECMA-269 §19.1.1.
 *
 * @constant
 * @type {number}
 */
export
const ConnectionMode_direct: ConnectionMode = ConnectionMode.direct; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary direct
 * @constant
 * @type {number}
 */
export
const direct: ConnectionMode = ConnectionMode.direct; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ConnectionMode: $.ASN1Decoder<ConnectionMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectionMode (el: _Element): ConnectionMode {
    if (!_cached_decoder_for_ConnectionMode) { _cached_decoder_for_ConnectionMode = $._decodeEnumerated; }
    return _cached_decoder_for_ConnectionMode(el);
}

let _cached_encoder_for_ConnectionMode: $.ASN1Encoder<ConnectionMode> | null = null;

/**
 * @summary Encodes a(n) ConnectionMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionMode, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectionMode (value: ConnectionMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectionMode) { _cached_encoder_for_ConnectionMode = $._encodeEnumerated; }
    return _cached_encoder_for_ConnectionMode(value, elGetter);
}


/* eslint-enable */
