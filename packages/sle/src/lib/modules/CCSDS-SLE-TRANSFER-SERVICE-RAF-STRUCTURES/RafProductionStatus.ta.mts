/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RafProductionStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafProductionStatus            ::=  INTEGER
 * {   running                           (0)
 * ,   interrupted                       (1)
 * ,   halted                            (2)
 * }
 * ```
 */
export
type RafProductionStatus = INTEGER;

/**
 * @summary RafProductionStatus_running
 * @constant
 * @type {number}
 */
export
const RafProductionStatus_running: RafProductionStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RafProductionStatus_running
 * @constant
 * @type {number}
 */
export
const running: RafProductionStatus = RafProductionStatus_running; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RafProductionStatus_interrupted
 * @constant
 * @type {number}
 */
export
const RafProductionStatus_interrupted: RafProductionStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RafProductionStatus_interrupted
 * @constant
 * @type {number}
 */
export
const interrupted: RafProductionStatus = RafProductionStatus_interrupted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RafProductionStatus_halted
 * @constant
 * @type {number}
 */
export
const RafProductionStatus_halted: RafProductionStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RafProductionStatus_halted
 * @constant
 * @type {number}
 */
export
const halted: RafProductionStatus = RafProductionStatus_halted; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_RafProductionStatus: $.ASN1Decoder<RafProductionStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RafProductionStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RafProductionStatus (el: _Element): RafProductionStatus {
    if (!_cached_decoder_for_RafProductionStatus) { _cached_decoder_for_RafProductionStatus = $._decodeInteger; }
    return _cached_decoder_for_RafProductionStatus(el);
}

let _cached_encoder_for_RafProductionStatus: $.ASN1Encoder<RafProductionStatus> | null = null;

/**
 * @summary Encodes a(n) RafProductionStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafProductionStatus, encoded as an ASN.1 Element.
 */
export
function _encode_RafProductionStatus (value: RafProductionStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RafProductionStatus) { _cached_encoder_for_RafProductionStatus = $._encodeInteger; }
    return _cached_encoder_for_RafProductionStatus(value, elGetter);
}


/* eslint-enable */
