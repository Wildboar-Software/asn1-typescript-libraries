/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ConnectionModeBMap
 * @description
 *
 * Bitmap of supported media-service connection modes (same values as
 * `ConnectionMode`). Used in capability exchange. ECMA-269 §19.1.1; ECMA-285
 * §9.15.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/ ECMA-285}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionModeBMap  ::=  BIT STRING
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
 */
export
type ConnectionModeBMap = BIT_STRING;

/**
 * @summary ConnectionModeBMap_consultationConference
 * @description
 *
 * Conference the MAD via Consultation Call and Conference Call. ECMA-269
 * §19.1.1.
 *
 * @constant
 */
export
const ConnectionModeBMap_consultationConference: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary consultationConference
 * @constant
 */
export
const consultationConference: number = ConnectionModeBMap_consultationConference; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionModeBMap_consultationConferenceHold
 * @description
 *
 * Conference the MAD via Consultation Call and Hold (attaching device held).
 * ECMA-269 §19.1.1.
 *
 * @constant
 */
export
const ConnectionModeBMap_consultationConferenceHold: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary consultationConferenceHold
 * @constant
 */
export
const consultationConferenceHold: number = ConnectionModeBMap_consultationConferenceHold; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionModeBMap_deflect
 * @description
 *
 * Move the call to the MAD via Deflect Call. ECMA-269 §19.1.1.
 *
 * @constant
 */
export
const ConnectionModeBMap_deflect: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary deflect
 * @constant
 */
export
const deflect: number = ConnectionModeBMap_deflect; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionModeBMap_directedPickup
 * @description
 *
 * Direct the call to the MAD via Directed Pickup. ECMA-269 §19.1.1.
 *
 * @constant
 */
export
const ConnectionModeBMap_directedPickup: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary directedPickup
 * @constant
 */
export
const directedPickup: number = ConnectionModeBMap_directedPickup; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionModeBMap_join
 * @description
 *
 * Add a device via Join Call; the application chooses the MAD. ECMA-269
 * §19.1.1.
 *
 * @constant
 */
export
const ConnectionModeBMap_join: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary join
 * @constant
 */
export
const join: number = ConnectionModeBMap_join; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionModeBMap_singleStepConference
 * @description
 *
 * Conference the MAD via Single Step Conference. ECMA-269 §19.1.1.
 *
 * @constant
 */
export
const ConnectionModeBMap_singleStepConference: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary singleStepConference
 * @constant
 */
export
const singleStepConference: number = ConnectionModeBMap_singleStepConference; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionModeBMap_singleStepConferenceHold
 * @description
 *
 * Single Step Conference plus Hold at the attaching device. ECMA-269 §19.1.1.
 *
 * @constant
 */
export
const ConnectionModeBMap_singleStepConferenceHold: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary singleStepConferenceHold
 * @constant
 */
export
const singleStepConferenceHold: number = ConnectionModeBMap_singleStepConferenceHold; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionModeBMap_singleStepTransfer
 * @description
 *
 * Transfer the MAD in via Single Step Transfer. ECMA-269 §19.1.1.
 *
 * @constant
 */
export
const ConnectionModeBMap_singleStepTransfer: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary singleStepTransfer
 * @constant
 */
export
const singleStepTransfer: number = ConnectionModeBMap_singleStepTransfer; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionModeBMap_transfer
 * @description
 *
 * Transfer the MAD via Consultation Call and Transfer. ECMA-269 §19.1.1.
 *
 * @constant
 */
export
const ConnectionModeBMap_transfer: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary transfer
 * @constant
 */
export
const transfer: number = ConnectionModeBMap_transfer; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionModeBMap_direct
 * @description
 *
 * Bind the media service to the existing connection; MAD already in the call.
 * ECMA-269 §19.1.1.
 *
 * @constant
 */
export
const ConnectionModeBMap_direct: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary direct
 * @constant
 */
export
const direct: number = ConnectionModeBMap_direct; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ConnectionModeBMap: $.ASN1Decoder<ConnectionModeBMap> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionModeBMap
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectionModeBMap (el: _Element): ConnectionModeBMap {
    if (!_cached_decoder_for_ConnectionModeBMap) { _cached_decoder_for_ConnectionModeBMap = $._decodeBitString; }
    return _cached_decoder_for_ConnectionModeBMap(el);
}

let _cached_encoder_for_ConnectionModeBMap: $.ASN1Encoder<ConnectionModeBMap> | null = null;

/**
 * @summary Encodes a(n) ConnectionModeBMap into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionModeBMap, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectionModeBMap (value: ConnectionModeBMap, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectionModeBMap) { _cached_encoder_for_ConnectionModeBMap = $._encodeBitString; }
    return _cached_encoder_for_ConnectionModeBMap(value, elGetter);
}


/* eslint-enable */
