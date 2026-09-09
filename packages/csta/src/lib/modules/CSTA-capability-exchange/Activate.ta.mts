/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Activate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Activate  ::=  BIT STRING
 * {    resource                ( 0),     -- optional parameters
 *     grammarName                ( 1),     -- optional parameters
 *     privateData                ( 2),     -- optional parameters
 *     privateDataInAck            ( 3) }
 * ```
 */
export
type Activate = BIT_STRING;

/**
 * @summary Activate_resource
 * @constant
 */
export
const Activate_resource: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 */
export
const resource: number = Activate_resource; /* SHORT_NAMED_BIT */

/**
 * @summary Activate_grammarName
 * @constant
 */
export
const Activate_grammarName: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary grammarName
 * @constant
 */
export
const grammarName: number = Activate_grammarName; /* SHORT_NAMED_BIT */

/**
 * @summary Activate_privateData
 * @constant
 */
export
const Activate_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = Activate_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Activate_privateDataInAck
 * @constant
 */
export
const Activate_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = Activate_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Activate: $.ASN1Decoder<Activate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Activate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Activate (el: _Element): Activate {
    if (!_cached_decoder_for_Activate) { _cached_decoder_for_Activate = $._decodeBitString; }
    return _cached_decoder_for_Activate(el);
}

let _cached_encoder_for_Activate: $.ASN1Encoder<Activate> | null = null;

/**
 * @summary Encodes a(n) Activate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Activate, encoded as an ASN.1 Element.
 */
export
function _encode_Activate (value: Activate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Activate) { _cached_encoder_for_Activate = $._encodeBitString; }
    return _cached_encoder_for_Activate(value, elGetter);
}


/* eslint-enable */
