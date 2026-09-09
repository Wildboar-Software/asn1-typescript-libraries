/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ResumeDataPath
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResumeDataPath  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1),     -- optional parameters
 *     sendsDataPathResumed             ( 2) }
 * ```
 */
export
type ResumeDataPath = BIT_STRING;

/**
 * @summary ResumeDataPath_privateData
 * @constant
 */
export
const ResumeDataPath_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = ResumeDataPath_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary ResumeDataPath_privateDataInAck
 * @constant
 */
export
const ResumeDataPath_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = ResumeDataPath_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary ResumeDataPath_sendsDataPathResumed
 * @constant
 */
export
const ResumeDataPath_sendsDataPathResumed: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary sendsDataPathResumed
 * @constant
 */
export
const sendsDataPathResumed: number = ResumeDataPath_sendsDataPathResumed; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ResumeDataPath: $.ASN1Decoder<ResumeDataPath> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResumeDataPath
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResumeDataPath (el: _Element): ResumeDataPath {
    if (!_cached_decoder_for_ResumeDataPath) { _cached_decoder_for_ResumeDataPath = $._decodeBitString; }
    return _cached_decoder_for_ResumeDataPath(el);
}

let _cached_encoder_for_ResumeDataPath: $.ASN1Encoder<ResumeDataPath> | null = null;

/**
 * @summary Encodes a(n) ResumeDataPath into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResumeDataPath, encoded as an ASN.1 Element.
 */
export
function _encode_ResumeDataPath (value: ResumeDataPath, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResumeDataPath) { _cached_encoder_for_ResumeDataPath = $._encodeBitString; }
    return _cached_encoder_for_ResumeDataPath(value, elGetter);
}


/* eslint-enable */
