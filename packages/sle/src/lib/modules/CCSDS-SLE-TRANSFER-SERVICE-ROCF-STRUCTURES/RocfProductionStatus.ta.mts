/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RocfProductionStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfProductionStatus     ::=    INTEGER
 * {  running                       (0)
 * ,  interrupted                   (1)
 * ,  halted                        (2)
 * }
 * ```
 */
export
type RocfProductionStatus = INTEGER;

/**
 * @summary RocfProductionStatus_running
 * @constant
 * @type {number}
 */
export
const RocfProductionStatus_running: RocfProductionStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RocfProductionStatus_running
 * @constant
 * @type {number}
 */
export
const running: RocfProductionStatus = RocfProductionStatus_running; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RocfProductionStatus_interrupted
 * @constant
 * @type {number}
 */
export
const RocfProductionStatus_interrupted: RocfProductionStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RocfProductionStatus_interrupted
 * @constant
 * @type {number}
 */
export
const interrupted: RocfProductionStatus = RocfProductionStatus_interrupted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RocfProductionStatus_halted
 * @constant
 * @type {number}
 */
export
const RocfProductionStatus_halted: RocfProductionStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RocfProductionStatus_halted
 * @constant
 * @type {number}
 */
export
const halted: RocfProductionStatus = RocfProductionStatus_halted; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_RocfProductionStatus: $.ASN1Decoder<RocfProductionStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfProductionStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfProductionStatus (el: _Element): RocfProductionStatus {
    if (!_cached_decoder_for_RocfProductionStatus) { _cached_decoder_for_RocfProductionStatus = $._decodeInteger; }
    return _cached_decoder_for_RocfProductionStatus(el);
}

let _cached_encoder_for_RocfProductionStatus: $.ASN1Encoder<RocfProductionStatus> | null = null;

/**
 * @summary Encodes a(n) RocfProductionStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfProductionStatus, encoded as an ASN.1 Element.
 */
export
function _encode_RocfProductionStatus (value: RocfProductionStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfProductionStatus) { _cached_encoder_for_RocfProductionStatus = $._encodeInteger; }
    return _cached_encoder_for_RocfProductionStatus(value, elGetter);
}


/* eslint-enable */
