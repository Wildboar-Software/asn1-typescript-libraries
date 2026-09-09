/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Reposition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Reposition  ::=  BIT STRING
 * {     periodOfRepositionStartOfMsg         ( 0),     -- optional parameters
 *     periodOfRepositionEndOfMsg         ( 1),     -- optional parameters
 *     periodOfRepositionRelativePointer     ( 2),     -- optional parameters
 *     msgToReposition             ( 3),     -- optional parameters
 *     privateData                 ( 4),     -- optional parameters
 *     privateDataInAck             ( 5) }
 * ```
 */
export
type Reposition = BIT_STRING;

/**
 * @summary Reposition_periodOfRepositionStartOfMsg
 * @constant
 */
export
const Reposition_periodOfRepositionStartOfMsg: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary periodOfRepositionStartOfMsg
 * @constant
 */
export
const periodOfRepositionStartOfMsg: number = Reposition_periodOfRepositionStartOfMsg; /* SHORT_NAMED_BIT */

/**
 * @summary Reposition_periodOfRepositionEndOfMsg
 * @constant
 */
export
const Reposition_periodOfRepositionEndOfMsg: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary periodOfRepositionEndOfMsg
 * @constant
 */
export
const periodOfRepositionEndOfMsg: number = Reposition_periodOfRepositionEndOfMsg; /* SHORT_NAMED_BIT */

/**
 * @summary Reposition_periodOfRepositionRelativePointer
 * @constant
 */
export
const Reposition_periodOfRepositionRelativePointer: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary periodOfRepositionRelativePointer
 * @constant
 */
export
const periodOfRepositionRelativePointer: number = Reposition_periodOfRepositionRelativePointer; /* SHORT_NAMED_BIT */

/**
 * @summary Reposition_msgToReposition
 * @constant
 */
export
const Reposition_msgToReposition: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary msgToReposition
 * @constant
 */
export
const msgToReposition: number = Reposition_msgToReposition; /* SHORT_NAMED_BIT */

/**
 * @summary Reposition_privateData
 * @constant
 */
export
const Reposition_privateData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = Reposition_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Reposition_privateDataInAck
 * @constant
 */
export
const Reposition_privateDataInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = Reposition_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Reposition: $.ASN1Decoder<Reposition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Reposition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Reposition (el: _Element): Reposition {
    if (!_cached_decoder_for_Reposition) { _cached_decoder_for_Reposition = $._decodeBitString; }
    return _cached_decoder_for_Reposition(el);
}

let _cached_encoder_for_Reposition: $.ASN1Encoder<Reposition> | null = null;

/**
 * @summary Encodes a(n) Reposition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Reposition, encoded as an ASN.1 Element.
 */
export
function _encode_Reposition (value: Reposition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Reposition) { _cached_encoder_for_Reposition = $._encodeBitString; }
    return _cached_encoder_for_Reposition(value, elGetter);
}


/* eslint-enable */
