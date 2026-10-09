/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExtendedServicesResponse_operationStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedServicesResponse-operationStatus ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ExtendedServicesResponse_operationStatus = INTEGER;

/**
 * @summary ExtendedServicesResponse_operationStatus_done
 * @constant
 * @type {number}
 */
export
const ExtendedServicesResponse_operationStatus_done: ExtendedServicesResponse_operationStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesResponse_operationStatus_done
 * @constant
 * @type {number}
 */
export
const done: ExtendedServicesResponse_operationStatus = ExtendedServicesResponse_operationStatus_done; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesResponse_operationStatus_accepted
 * @constant
 * @type {number}
 */
export
const ExtendedServicesResponse_operationStatus_accepted: ExtendedServicesResponse_operationStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesResponse_operationStatus_accepted
 * @constant
 * @type {number}
 */
export
const accepted: ExtendedServicesResponse_operationStatus = ExtendedServicesResponse_operationStatus_accepted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesResponse_operationStatus_failure
 * @constant
 * @type {number}
 */
export
const ExtendedServicesResponse_operationStatus_failure: ExtendedServicesResponse_operationStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesResponse_operationStatus_failure
 * @constant
 * @type {number}
 */
export
const failure: ExtendedServicesResponse_operationStatus = ExtendedServicesResponse_operationStatus_failure; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ExtendedServicesResponse_operationStatus: $.ASN1Decoder<ExtendedServicesResponse_operationStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedServicesResponse_operationStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtendedServicesResponse_operationStatus (el: _Element): ExtendedServicesResponse_operationStatus {
    if (!_cached_decoder_for_ExtendedServicesResponse_operationStatus) { _cached_decoder_for_ExtendedServicesResponse_operationStatus = $._decodeInteger; }
    return _cached_decoder_for_ExtendedServicesResponse_operationStatus(el);
}

let _cached_encoder_for_ExtendedServicesResponse_operationStatus: $.ASN1Encoder<ExtendedServicesResponse_operationStatus> | null = null;

/**
 * @summary Encodes a(n) ExtendedServicesResponse_operationStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedServicesResponse_operationStatus, encoded as an ASN.1 Element.
 */
export
function _encode_ExtendedServicesResponse_operationStatus (value: ExtendedServicesResponse_operationStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtendedServicesResponse_operationStatus) { _cached_encoder_for_ExtendedServicesResponse_operationStatus = $._encodeInteger; }
    return _cached_encoder_for_ExtendedServicesResponse_operationStatus(value, elGetter);
}


/* eslint-enable */
