/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Reposition
 * @description
 * Capability bitmap for the Reposition service (ECMA-269 C.19.10, ECMA-285
 * §9.10). Presence of this entry in `VoiceUnitServList` means the SF supports
 * that service. Each set bit is an optional parameter, enumerated value,
 * initial connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
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
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.10).
 */
export
const Reposition_periodOfRepositionStartOfMsg: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary periodOfRepositionStartOfMsg
 * @constant
 * @description
 * Alias of `Reposition_periodOfRepositionStartOfMsg`.
 */
export
const periodOfRepositionStartOfMsg: number = Reposition_periodOfRepositionStartOfMsg; /* SHORT_NAMED_BIT */

/**
 * @summary Reposition_periodOfRepositionEndOfMsg
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.10).
 */
export
const Reposition_periodOfRepositionEndOfMsg: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary periodOfRepositionEndOfMsg
 * @constant
 * @description
 * Alias of `Reposition_periodOfRepositionEndOfMsg`.
 */
export
const periodOfRepositionEndOfMsg: number = Reposition_periodOfRepositionEndOfMsg; /* SHORT_NAMED_BIT */

/**
 * @summary Reposition_periodOfRepositionRelativePointer
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.10).
 */
export
const Reposition_periodOfRepositionRelativePointer: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary periodOfRepositionRelativePointer
 * @constant
 * @description
 * Alias of `Reposition_periodOfRepositionRelativePointer`.
 */
export
const periodOfRepositionRelativePointer: number = Reposition_periodOfRepositionRelativePointer; /* SHORT_NAMED_BIT */

/**
 * @summary Reposition_msgToReposition
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.10).
 */
export
const Reposition_msgToReposition: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary msgToReposition
 * @constant
 * @description
 * Alias of `Reposition_msgToReposition`.
 */
export
const msgToReposition: number = Reposition_msgToReposition; /* SHORT_NAMED_BIT */

/**
 * @summary Reposition_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.19.10).
 */
export
const Reposition_privateData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `Reposition_privateData`.
 */
export
const privateData: number = Reposition_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Reposition_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.19.10).
 */
export
const Reposition_privateDataInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `Reposition_privateDataInAck`.
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
