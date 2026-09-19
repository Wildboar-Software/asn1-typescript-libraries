/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceId  ::=  INTEGER {
 *     sid-stp-routing     (42),
 *     sid-sgn-forward     (43),
 *     sid-fgn-filtering   (44),
 *     sid-security        (45),
 *     sid-pdn-filtering   (46),
 *     sid-sysagent        (47)
 * }
 * ```
 */
export
type ServiceId = INTEGER;

/**
 * @summary ServiceId_sid_stp_routing
 * @constant
 * @type {number}
 */
export
const ServiceId_sid_stp_routing: ServiceId = 42; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_stp_routing
 * @constant
 * @type {number}
 */
export
const sid_stp_routing: ServiceId = ServiceId_sid_stp_routing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_sgn_forward
 * @constant
 * @type {number}
 */
export
const ServiceId_sid_sgn_forward: ServiceId = 43; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_sgn_forward
 * @constant
 * @type {number}
 */
export
const sid_sgn_forward: ServiceId = ServiceId_sid_sgn_forward; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_fgn_filtering
 * @constant
 * @type {number}
 */
export
const ServiceId_sid_fgn_filtering: ServiceId = 44; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_fgn_filtering
 * @constant
 * @type {number}
 */
export
const sid_fgn_filtering: ServiceId = ServiceId_sid_fgn_filtering; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_security
 * @constant
 * @type {number}
 */
export
const ServiceId_sid_security: ServiceId = 45; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_security
 * @constant
 * @type {number}
 */
export
const sid_security: ServiceId = ServiceId_sid_security; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_pdn_filtering
 * @constant
 * @type {number}
 */
export
const ServiceId_sid_pdn_filtering: ServiceId = 46; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_pdn_filtering
 * @constant
 * @type {number}
 */
export
const sid_pdn_filtering: ServiceId = ServiceId_sid_pdn_filtering; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_sysagent
 * @constant
 * @type {number}
 */
export
const ServiceId_sid_sysagent: ServiceId = 47; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_sysagent
 * @constant
 * @type {number}
 */
export
const sid_sysagent: ServiceId = ServiceId_sid_sysagent; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ServiceId: $.ASN1Decoder<ServiceId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceId (el: _Element): ServiceId {
    if (!_cached_decoder_for_ServiceId) { _cached_decoder_for_ServiceId = $._decodeInteger; }
    return _cached_decoder_for_ServiceId(el);
}

let _cached_encoder_for_ServiceId: $.ASN1Encoder<ServiceId> | null = null;

/**
 * @summary Encodes a(n) ServiceId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceId, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceId (value: ServiceId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceId) { _cached_encoder_for_ServiceId = $._encodeInteger; }
    return _cached_encoder_for_ServiceId(value, elGetter);
}


/* eslint-enable */
