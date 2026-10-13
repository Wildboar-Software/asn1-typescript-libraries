/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FspProductionStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspProductionStatus      ::=    INTEGER
 * {  configured                    (0)
 * ,  operationalBd                 (1)
 * ,  operationalAdAndBd            (2)
 * ,  operationalAdSuspended        (3)
 * ,  interrupted                   (4)
 * ,  halted                        (5)
 * }
 * ```
 */
export
type FspProductionStatus = INTEGER;

/**
 * @summary FspProductionStatus_configured
 * @constant
 * @type {number}
 */
export
const FspProductionStatus_configured: FspProductionStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_configured
 * @constant
 * @type {number}
 */
export
const configured: FspProductionStatus = FspProductionStatus_configured; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_operationalBd
 * @constant
 * @type {number}
 */
export
const FspProductionStatus_operationalBd: FspProductionStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_operationalBd
 * @constant
 * @type {number}
 */
export
const operationalBd: FspProductionStatus = FspProductionStatus_operationalBd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_operationalAdAndBd
 * @constant
 * @type {number}
 */
export
const FspProductionStatus_operationalAdAndBd: FspProductionStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_operationalAdAndBd
 * @constant
 * @type {number}
 */
export
const operationalAdAndBd: FspProductionStatus = FspProductionStatus_operationalAdAndBd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_operationalAdSuspended
 * @constant
 * @type {number}
 */
export
const FspProductionStatus_operationalAdSuspended: FspProductionStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_operationalAdSuspended
 * @constant
 * @type {number}
 */
export
const operationalAdSuspended: FspProductionStatus = FspProductionStatus_operationalAdSuspended; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_interrupted
 * @constant
 * @type {number}
 */
export
const FspProductionStatus_interrupted: FspProductionStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_interrupted
 * @constant
 * @type {number}
 */
export
const interrupted: FspProductionStatus = FspProductionStatus_interrupted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_halted
 * @constant
 * @type {number}
 */
export
const FspProductionStatus_halted: FspProductionStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_halted
 * @constant
 * @type {number}
 */
export
const halted: FspProductionStatus = FspProductionStatus_halted; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_FspProductionStatus: $.ASN1Decoder<FspProductionStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspProductionStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspProductionStatus (el: _Element): FspProductionStatus {
    if (!_cached_decoder_for_FspProductionStatus) { _cached_decoder_for_FspProductionStatus = $._decodeInteger; }
    return _cached_decoder_for_FspProductionStatus(el);
}

let _cached_encoder_for_FspProductionStatus: $.ASN1Encoder<FspProductionStatus> | null = null;

/**
 * @summary Encodes a(n) FspProductionStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspProductionStatus, encoded as an ASN.1 Element.
 */
export
function _encode_FspProductionStatus (value: FspProductionStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspProductionStatus) { _cached_encoder_for_FspProductionStatus = $._encodeInteger; }
    return _cached_encoder_for_FspProductionStatus(value, elGetter);
}


/* eslint-enable */
