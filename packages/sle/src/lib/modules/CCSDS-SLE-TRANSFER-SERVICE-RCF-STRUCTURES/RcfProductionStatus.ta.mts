/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RcfProductionStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfProductionStatus          ::=  INTEGER
 * {   running                         (0)
 * ,   interrupted                     (1)
 * ,   halted                          (2)
 * }
 * ```
 */
export
type RcfProductionStatus = INTEGER;

/**
 * @summary RcfProductionStatus_running
 * @constant
 * @type {number}
 */
export
const RcfProductionStatus_running: RcfProductionStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RcfProductionStatus_running
 * @constant
 * @type {number}
 */
export
const running: RcfProductionStatus = RcfProductionStatus_running; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RcfProductionStatus_interrupted
 * @constant
 * @type {number}
 */
export
const RcfProductionStatus_interrupted: RcfProductionStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RcfProductionStatus_interrupted
 * @constant
 * @type {number}
 */
export
const interrupted: RcfProductionStatus = RcfProductionStatus_interrupted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RcfProductionStatus_halted
 * @constant
 * @type {number}
 */
export
const RcfProductionStatus_halted: RcfProductionStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RcfProductionStatus_halted
 * @constant
 * @type {number}
 */
export
const halted: RcfProductionStatus = RcfProductionStatus_halted; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_RcfProductionStatus: $.ASN1Decoder<RcfProductionStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RcfProductionStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RcfProductionStatus (el: _Element): RcfProductionStatus {
    if (!_cached_decoder_for_RcfProductionStatus) { _cached_decoder_for_RcfProductionStatus = $._decodeInteger; }
    return _cached_decoder_for_RcfProductionStatus(el);
}

let _cached_encoder_for_RcfProductionStatus: $.ASN1Encoder<RcfProductionStatus> | null = null;

/**
 * @summary Encodes a(n) RcfProductionStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfProductionStatus, encoded as an ASN.1 Element.
 */
export
function _encode_RcfProductionStatus (value: RcfProductionStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RcfProductionStatus) { _cached_encoder_for_RcfProductionStatus = $._encodeInteger; }
    return _cached_encoder_for_RcfProductionStatus(value, elGetter);
}


/* eslint-enable */
