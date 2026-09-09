/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary RouteRegister
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteRegister  ::=  BIT STRING
 * {     routeingDevice                 ( 0),     -- optional parameters
 *     requestedMonitorMediaClass         ( 1),     -- optional parameters
 *     requestedMonitorMediaClassAudio     ( 2),     -- optional parameters
 *     requestedMonitorMediaClassData         ( 3),     -- optional parameters
 *     requestedMonitorMediaClassImage     ( 4),     -- optional parameters
 *     requestedMonitorMediaClassVoice     ( 5),     -- optional parameters
 *     requestedMonitorMediaClassChat        (10),     -- optional parameters
 *     requestedMonitorMediaClassEmail        (11),     -- optional parameters
 *     requestedMonitorMediaClassMessage    (12),     -- optional parameters
 *     requestedMonitorMediaClassIM        (13),     -- optional parameters
 *     requestedMonitorMediaClassSMS        (14),     -- optional parameters
 *     requestedMonitorMediaClassMMS        (15),     -- optional parameters
 *     privateData                 ( 6),     -- optional parameters
 *     actualRouteingMediaClassInAck         ( 7),     -- optional parameters
 *     privateDataInAck             ( 8),     -- optional parameters
 *     allRouteingDevices             ( 9) }
 * ```
 */
export
type RouteRegister = BIT_STRING;

/**
 * @summary RouteRegister_routeingDevice
 * @constant
 */
export
const RouteRegister_routeingDevice: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary routeingDevice
 * @constant
 */
export
const routeingDevice: number = RouteRegister_routeingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRegister_requestedMonitorMediaClass
 * @constant
 */
export
const RouteRegister_requestedMonitorMediaClass: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary requestedMonitorMediaClass
 * @constant
 */
export
const requestedMonitorMediaClass: number = RouteRegister_requestedMonitorMediaClass; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRegister_requestedMonitorMediaClassAudio
 * @constant
 */
export
const RouteRegister_requestedMonitorMediaClassAudio: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary requestedMonitorMediaClassAudio
 * @constant
 */
export
const requestedMonitorMediaClassAudio: number = RouteRegister_requestedMonitorMediaClassAudio; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRegister_requestedMonitorMediaClassData
 * @constant
 */
export
const RouteRegister_requestedMonitorMediaClassData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary requestedMonitorMediaClassData
 * @constant
 */
export
const requestedMonitorMediaClassData: number = RouteRegister_requestedMonitorMediaClassData; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRegister_requestedMonitorMediaClassImage
 * @constant
 */
export
const RouteRegister_requestedMonitorMediaClassImage: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary requestedMonitorMediaClassImage
 * @constant
 */
export
const requestedMonitorMediaClassImage: number = RouteRegister_requestedMonitorMediaClassImage; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRegister_requestedMonitorMediaClassVoice
 * @constant
 */
export
const RouteRegister_requestedMonitorMediaClassVoice: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary requestedMonitorMediaClassVoice
 * @constant
 */
export
const requestedMonitorMediaClassVoice: number = RouteRegister_requestedMonitorMediaClassVoice; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRegister_requestedMonitorMediaClassChat
 * @constant
 */
export
const RouteRegister_requestedMonitorMediaClassChat: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary requestedMonitorMediaClassChat
 * @constant
 */
export
const requestedMonitorMediaClassChat: number = RouteRegister_requestedMonitorMediaClassChat; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRegister_requestedMonitorMediaClassEmail
 * @constant
 */
export
const RouteRegister_requestedMonitorMediaClassEmail: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary requestedMonitorMediaClassEmail
 * @constant
 */
export
const requestedMonitorMediaClassEmail: number = RouteRegister_requestedMonitorMediaClassEmail; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRegister_requestedMonitorMediaClassMessage
 * @constant
 */
export
const RouteRegister_requestedMonitorMediaClassMessage: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary requestedMonitorMediaClassMessage
 * @constant
 */
export
const requestedMonitorMediaClassMessage: number = RouteRegister_requestedMonitorMediaClassMessage; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRegister_requestedMonitorMediaClassIM
 * @constant
 */
export
const RouteRegister_requestedMonitorMediaClassIM: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary requestedMonitorMediaClassIM
 * @constant
 */
export
const requestedMonitorMediaClassIM: number = RouteRegister_requestedMonitorMediaClassIM; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRegister_requestedMonitorMediaClassSMS
 * @constant
 */
export
const RouteRegister_requestedMonitorMediaClassSMS: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary requestedMonitorMediaClassSMS
 * @constant
 */
export
const requestedMonitorMediaClassSMS: number = RouteRegister_requestedMonitorMediaClassSMS; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRegister_requestedMonitorMediaClassMMS
 * @constant
 */
export
const RouteRegister_requestedMonitorMediaClassMMS: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary requestedMonitorMediaClassMMS
 * @constant
 */
export
const requestedMonitorMediaClassMMS: number = RouteRegister_requestedMonitorMediaClassMMS; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRegister_privateData
 * @constant
 */
export
const RouteRegister_privateData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = RouteRegister_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRegister_actualRouteingMediaClassInAck
 * @constant
 */
export
const RouteRegister_actualRouteingMediaClassInAck: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary actualRouteingMediaClassInAck
 * @constant
 */
export
const actualRouteingMediaClassInAck: number = RouteRegister_actualRouteingMediaClassInAck; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRegister_privateDataInAck
 * @constant
 */
export
const RouteRegister_privateDataInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = RouteRegister_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRegister_allRouteingDevices
 * @constant
 */
export
const RouteRegister_allRouteingDevices: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary allRouteingDevices
 * @constant
 */
export
const allRouteingDevices: number = RouteRegister_allRouteingDevices; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RouteRegister: $.ASN1Decoder<RouteRegister> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteRegister
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteRegister (el: _Element): RouteRegister {
    if (!_cached_decoder_for_RouteRegister) { _cached_decoder_for_RouteRegister = $._decodeBitString; }
    return _cached_decoder_for_RouteRegister(el);
}

let _cached_encoder_for_RouteRegister: $.ASN1Encoder<RouteRegister> | null = null;

/**
 * @summary Encodes a(n) RouteRegister into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteRegister, encoded as an ASN.1 Element.
 */
export
function _encode_RouteRegister (value: RouteRegister, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteRegister) { _cached_encoder_for_RouteRegister = $._encodeBitString; }
    return _cached_encoder_for_RouteRegister(value, elGetter);
}


/* eslint-enable */
