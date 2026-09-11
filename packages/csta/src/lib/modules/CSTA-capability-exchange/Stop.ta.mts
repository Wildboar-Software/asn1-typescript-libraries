/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Stop
 * @description
 * Capability bitmap for the Stop event (ECMA-269 C.20.14, ECMA-285 §9.10).
 * Presence of this entry in `VoiceUnitEvtsList` means the SF supports that
 * event. Each set bit is an optional parameter, enumerated value, initial
 * connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Stop  ::=  BIT STRING
 * {     msgToBeStopped                ( 2),     -- optional parameters
 *     resource                ( 3),     -- optional parameters
 *     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type Stop = BIT_STRING;

/**
 * @summary Stop_msgToBeStopped
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.20.14).
 */
export
const Stop_msgToBeStopped: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary msgToBeStopped
 * @constant
 * @description
 * Alias of `Stop_msgToBeStopped`.
 */
export
const msgToBeStopped: number = Stop_msgToBeStopped; /* SHORT_NAMED_BIT */

/**
 * @summary Stop_resource
 * @constant
 * @description
 * Bit set means the SF supports the optional `resource` parameter (ECMA-269
 * C.20.14).
 */
export
const Stop_resource: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 * @description
 * Alias of `Stop_resource`.
 */
export
const resource: number = Stop_resource; /* SHORT_NAMED_BIT */

/**
 * @summary Stop_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.20.14).
 */
export
const Stop_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `Stop_privateData`.
 */
export
const privateData: number = Stop_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Stop_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.20.14).
 */
export
const Stop_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `Stop_privateDataInAck`.
 */
export
const privateDataInAck: number = Stop_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Stop: $.ASN1Decoder<Stop> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Stop
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Stop (el: _Element): Stop {
    if (!_cached_decoder_for_Stop) { _cached_decoder_for_Stop = $._decodeBitString; }
    return _cached_decoder_for_Stop(el);
}

let _cached_encoder_for_Stop: $.ASN1Encoder<Stop> | null = null;

/**
 * @summary Encodes a(n) Stop into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Stop, encoded as an ASN.1 Element.
 */
export
function _encode_Stop (value: Stop, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Stop) { _cached_encoder_for_Stop = $._encodeBitString; }
    return _cached_encoder_for_Stop(value, elGetter);
}


/* eslint-enable */
