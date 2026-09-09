/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary IoRegister
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IoRegister  ::=  BIT STRING
 * {     ioDevice                 ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     privateDataInAck             ( 2),     -- optional parameters
 *     allIODevices                 ( 3) }
 * ```
 */
export
type IoRegister = BIT_STRING;

/**
 * @summary IoRegister_ioDevice
 * @constant
 */
export
const IoRegister_ioDevice: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary ioDevice
 * @constant
 */
export
const ioDevice: number = IoRegister_ioDevice; /* SHORT_NAMED_BIT */

/**
 * @summary IoRegister_privateData
 * @constant
 */
export
const IoRegister_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = IoRegister_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary IoRegister_privateDataInAck
 * @constant
 */
export
const IoRegister_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = IoRegister_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary IoRegister_allIODevices
 * @constant
 */
export
const IoRegister_allIODevices: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary allIODevices
 * @constant
 */
export
const allIODevices: number = IoRegister_allIODevices; /* SHORT_NAMED_BIT */

let _cached_decoder_for_IoRegister: $.ASN1Decoder<IoRegister> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IoRegister
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IoRegister (el: _Element): IoRegister {
    if (!_cached_decoder_for_IoRegister) { _cached_decoder_for_IoRegister = $._decodeBitString; }
    return _cached_decoder_for_IoRegister(el);
}

let _cached_encoder_for_IoRegister: $.ASN1Encoder<IoRegister> | null = null;

/**
 * @summary Encodes a(n) IoRegister into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IoRegister, encoded as an ASN.1 Element.
 */
export
function _encode_IoRegister (value: IoRegister, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IoRegister) { _cached_encoder_for_IoRegister = $._encodeBitString; }
    return _cached_encoder_for_IoRegister(value, elGetter);
}


/* eslint-enable */
