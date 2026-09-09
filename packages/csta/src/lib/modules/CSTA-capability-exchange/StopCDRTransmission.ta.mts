/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary StopCDRTransmission
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StopCDRTransmission  ::=  BIT STRING
 * {     cdrTermReasonEndOfData             ( 0),     -- optional parameters
 *     cdrTermReasonError             ( 1),     -- optional parameters
 *     cdrTermReasonThresholdReached         ( 2),     -- optional parameters
 *     cdrTermReasonOther             ( 3),     -- optional parameter
 *     privateData                 ( 4),     -- optional parameter
 *     privateDataInAck             ( 5),     -- optional parameter
 *     swFunctionSupportsSending         ( 6),     -- miscellaneous characteristics
 *     swFunctionSupportsReceiving         ( 7) }
 * ```
 */
export
type StopCDRTransmission = BIT_STRING;

/**
 * @summary StopCDRTransmission_cdrTermReasonEndOfData
 * @constant
 */
export
const StopCDRTransmission_cdrTermReasonEndOfData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary cdrTermReasonEndOfData
 * @constant
 */
export
const cdrTermReasonEndOfData: number = StopCDRTransmission_cdrTermReasonEndOfData; /* SHORT_NAMED_BIT */

/**
 * @summary StopCDRTransmission_cdrTermReasonError
 * @constant
 */
export
const StopCDRTransmission_cdrTermReasonError: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary cdrTermReasonError
 * @constant
 */
export
const cdrTermReasonError: number = StopCDRTransmission_cdrTermReasonError; /* SHORT_NAMED_BIT */

/**
 * @summary StopCDRTransmission_cdrTermReasonThresholdReached
 * @constant
 */
export
const StopCDRTransmission_cdrTermReasonThresholdReached: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary cdrTermReasonThresholdReached
 * @constant
 */
export
const cdrTermReasonThresholdReached: number = StopCDRTransmission_cdrTermReasonThresholdReached; /* SHORT_NAMED_BIT */

/**
 * @summary StopCDRTransmission_cdrTermReasonOther
 * @constant
 */
export
const StopCDRTransmission_cdrTermReasonOther: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary cdrTermReasonOther
 * @constant
 */
export
const cdrTermReasonOther: number = StopCDRTransmission_cdrTermReasonOther; /* SHORT_NAMED_BIT */

/**
 * @summary StopCDRTransmission_privateData
 * @constant
 */
export
const StopCDRTransmission_privateData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = StopCDRTransmission_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary StopCDRTransmission_privateDataInAck
 * @constant
 */
export
const StopCDRTransmission_privateDataInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = StopCDRTransmission_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary StopCDRTransmission_swFunctionSupportsSending
 * @constant
 */
export
const StopCDRTransmission_swFunctionSupportsSending: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary swFunctionSupportsSending
 * @constant
 */
export
const swFunctionSupportsSending: number = StopCDRTransmission_swFunctionSupportsSending; /* SHORT_NAMED_BIT */

/**
 * @summary StopCDRTransmission_swFunctionSupportsReceiving
 * @constant
 */
export
const StopCDRTransmission_swFunctionSupportsReceiving: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary swFunctionSupportsReceiving
 * @constant
 */
export
const swFunctionSupportsReceiving: number = StopCDRTransmission_swFunctionSupportsReceiving; /* SHORT_NAMED_BIT */

let _cached_decoder_for_StopCDRTransmission: $.ASN1Decoder<StopCDRTransmission> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StopCDRTransmission
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StopCDRTransmission (el: _Element): StopCDRTransmission {
    if (!_cached_decoder_for_StopCDRTransmission) { _cached_decoder_for_StopCDRTransmission = $._decodeBitString; }
    return _cached_decoder_for_StopCDRTransmission(el);
}

let _cached_encoder_for_StopCDRTransmission: $.ASN1Encoder<StopCDRTransmission> | null = null;

/**
 * @summary Encodes a(n) StopCDRTransmission into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StopCDRTransmission, encoded as an ASN.1 Element.
 */
export
function _encode_StopCDRTransmission (value: StopCDRTransmission, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StopCDRTransmission) { _cached_encoder_for_StopCDRTransmission = $._encodeBitString; }
    return _cached_encoder_for_StopCDRTransmission(value, elGetter);
}


/* eslint-enable */
