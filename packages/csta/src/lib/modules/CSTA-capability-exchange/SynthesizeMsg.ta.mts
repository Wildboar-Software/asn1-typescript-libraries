/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SynthesizeMsg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SynthesizeMsg  ::=  BIT STRING
 * {     genderMale                 ( 0),     -- optional parameters
 *     genderFemale                 ( 1),     -- optional parameters
 *     privateData                 ( 2),     -- optional parameters
 *     privateDataInAck             ( 3) }
 * ```
 */
export
type SynthesizeMsg = BIT_STRING;

/**
 * @summary SynthesizeMsg_genderMale
 * @constant
 */
export
const SynthesizeMsg_genderMale: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary genderMale
 * @constant
 */
export
const genderMale: number = SynthesizeMsg_genderMale; /* SHORT_NAMED_BIT */

/**
 * @summary SynthesizeMsg_genderFemale
 * @constant
 */
export
const SynthesizeMsg_genderFemale: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary genderFemale
 * @constant
 */
export
const genderFemale: number = SynthesizeMsg_genderFemale; /* SHORT_NAMED_BIT */

/**
 * @summary SynthesizeMsg_privateData
 * @constant
 */
export
const SynthesizeMsg_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SynthesizeMsg_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SynthesizeMsg_privateDataInAck
 * @constant
 */
export
const SynthesizeMsg_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SynthesizeMsg_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SynthesizeMsg: $.ASN1Decoder<SynthesizeMsg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SynthesizeMsg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SynthesizeMsg (el: _Element): SynthesizeMsg {
    if (!_cached_decoder_for_SynthesizeMsg) { _cached_decoder_for_SynthesizeMsg = $._decodeBitString; }
    return _cached_decoder_for_SynthesizeMsg(el);
}

let _cached_encoder_for_SynthesizeMsg: $.ASN1Encoder<SynthesizeMsg> | null = null;

/**
 * @summary Encodes a(n) SynthesizeMsg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SynthesizeMsg, encoded as an ASN.1 Element.
 */
export
function _encode_SynthesizeMsg (value: SynthesizeMsg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SynthesizeMsg) { _cached_encoder_for_SynthesizeMsg = $._encodeBitString; }
    return _cached_encoder_for_SynthesizeMsg(value, elGetter);
}


/* eslint-enable */
