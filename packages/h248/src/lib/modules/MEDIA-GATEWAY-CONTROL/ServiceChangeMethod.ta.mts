/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ServiceChangeMethod {
    failover = 0,
    forced = 1,
    graceful = 2,
    restart = 3,
    disconnected = 4,
    handOff = 5,
}

/**
 * @summary ServiceChangeMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceChangeMethod  ::=  ENUMERATED
 *     {
 *         failover(0),
 *         forced(1),
 *         graceful(2),
 *         restart(3),
 *         disconnected(4),
 *         handOff(5),
 *         ...
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type ServiceChangeMethod = _enum_for_ServiceChangeMethod | ENUMERATED;

/**
 * @summary ServiceChangeMethod_failover
 * @constant
 * @type {number}
 */
export
const ServiceChangeMethod_failover: ServiceChangeMethod = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary failover
 * @constant
 * @type {number}
 */
export
const failover: ServiceChangeMethod = ServiceChangeMethod_failover; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceChangeMethod_forced
 * @constant
 * @type {number}
 */
export
const ServiceChangeMethod_forced: ServiceChangeMethod = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forced
 * @constant
 * @type {number}
 */
export
const forced: ServiceChangeMethod = ServiceChangeMethod_forced; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceChangeMethod_graceful
 * @constant
 * @type {number}
 */
export
const ServiceChangeMethod_graceful: ServiceChangeMethod = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary graceful
 * @constant
 * @type {number}
 */
export
const graceful: ServiceChangeMethod = ServiceChangeMethod_graceful; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceChangeMethod_restart
 * @constant
 * @type {number}
 */
export
const ServiceChangeMethod_restart: ServiceChangeMethod = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary restart
 * @constant
 * @type {number}
 */
export
const restart: ServiceChangeMethod = ServiceChangeMethod_restart; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceChangeMethod_disconnected
 * @constant
 * @type {number}
 */
export
const ServiceChangeMethod_disconnected: ServiceChangeMethod = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disconnected
 * @constant
 * @type {number}
 */
export
const disconnected: ServiceChangeMethod = ServiceChangeMethod_disconnected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceChangeMethod_handOff
 * @constant
 * @type {number}
 */
export
const ServiceChangeMethod_handOff: ServiceChangeMethod = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary handOff
 * @constant
 * @type {number}
 */
export
const handOff: ServiceChangeMethod = ServiceChangeMethod_handOff; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ServiceChangeMethod: $.ASN1Decoder<ServiceChangeMethod> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceChangeMethod
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceChangeMethod (el: _Element): ServiceChangeMethod {
    if (!_cached_decoder_for_ServiceChangeMethod) { _cached_decoder_for_ServiceChangeMethod = $._decodeEnumerated; }
    return _cached_decoder_for_ServiceChangeMethod(el);
}

let _cached_encoder_for_ServiceChangeMethod: $.ASN1Encoder<ServiceChangeMethod> | null = null;

/**
 * @summary Encodes a(n) ServiceChangeMethod into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceChangeMethod, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceChangeMethod (value: ServiceChangeMethod, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceChangeMethod) { _cached_encoder_for_ServiceChangeMethod = $._encodeEnumerated; }
    return _cached_encoder_for_ServiceChangeMethod(value, elGetter);
}


/* eslint-enable */
