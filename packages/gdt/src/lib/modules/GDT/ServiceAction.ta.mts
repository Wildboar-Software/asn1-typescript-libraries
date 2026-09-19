/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceAction  ::=  INTEGER {
 *     srvca-request   (0),  -- generic request
 *     srvca-result    (1),  -- generic result
 *     srvca-default   (2),  -- default action
 *     srvca-na        (3)   -- n/a
 * }
 * ```
 */
export
type ServiceAction = INTEGER;

/**
 * @summary ServiceAction_srvca_request
 * @constant
 * @type {number}
 */
export
const ServiceAction_srvca_request: ServiceAction = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceAction_srvca_request
 * @constant
 * @type {number}
 */
export
const srvca_request: ServiceAction = ServiceAction_srvca_request; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceAction_srvca_result
 * @constant
 * @type {number}
 */
export
const ServiceAction_srvca_result: ServiceAction = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceAction_srvca_result
 * @constant
 * @type {number}
 */
export
const srvca_result: ServiceAction = ServiceAction_srvca_result; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceAction_srvca_default
 * @constant
 * @type {number}
 */
export
const ServiceAction_srvca_default: ServiceAction = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceAction_srvca_default
 * @constant
 * @type {number}
 */
export
const srvca_default: ServiceAction = ServiceAction_srvca_default; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceAction_srvca_na
 * @constant
 * @type {number}
 */
export
const ServiceAction_srvca_na: ServiceAction = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceAction_srvca_na
 * @constant
 * @type {number}
 */
export
const srvca_na: ServiceAction = ServiceAction_srvca_na; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ServiceAction: $.ASN1Decoder<ServiceAction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceAction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceAction (el: _Element): ServiceAction {
    if (!_cached_decoder_for_ServiceAction) { _cached_decoder_for_ServiceAction = $._decodeInteger; }
    return _cached_decoder_for_ServiceAction(el);
}

let _cached_encoder_for_ServiceAction: $.ASN1Encoder<ServiceAction> | null = null;

/**
 * @summary Encodes a(n) ServiceAction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceAction, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceAction (value: ServiceAction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceAction) { _cached_encoder_for_ServiceAction = $._encodeInteger; }
    return _cached_encoder_for_ServiceAction(value, elGetter);
}


/* eslint-enable */
