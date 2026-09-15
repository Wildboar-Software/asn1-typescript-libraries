/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DisplayUpdated
 * @description
 * Capability bitmap for the Display Updated event (ECMA-269 C.13.3, ECMA-285
 * §9.10). Presence of this entry in `PhysDevEvtsList` means the SF supports
 * that event. Each set bit is an optional parameter, enumerated value, initial
 * connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisplayUpdated  ::=  BIT STRING
 * {     characterSetASCII             ( 0),     -- optional parameters
 *     characterSetUnicode             ( 1),     -- optional parameters
 *     characterSetProprietary         ( 2),     -- optional parameters
 *     privateData                 ( 3) }
 * ```
 */
export
type DisplayUpdated = BIT_STRING;

/**
 * @summary DisplayUpdated_characterSetASCII
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.13.3).
 */
export
const DisplayUpdated_characterSetASCII: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary characterSetASCII
 * @constant
 * @description
 * Alias of `DisplayUpdated_characterSetASCII`.
 */
export
const characterSetASCII: number = DisplayUpdated_characterSetASCII; /* SHORT_NAMED_BIT */

/**
 * @summary DisplayUpdated_characterSetUnicode
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.13.3).
 */
export
const DisplayUpdated_characterSetUnicode: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary characterSetUnicode
 * @constant
 * @description
 * Alias of `DisplayUpdated_characterSetUnicode`.
 */
export
const characterSetUnicode: number = DisplayUpdated_characterSetUnicode; /* SHORT_NAMED_BIT */

/**
 * @summary DisplayUpdated_characterSetProprietary
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.13.3).
 */
export
const DisplayUpdated_characterSetProprietary: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary characterSetProprietary
 * @constant
 * @description
 * Alias of `DisplayUpdated_characterSetProprietary`.
 */
export
const characterSetProprietary: number = DisplayUpdated_characterSetProprietary; /* SHORT_NAMED_BIT */

/**
 * @summary DisplayUpdated_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.13.3).
 */
export
const DisplayUpdated_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `DisplayUpdated_privateData`.
 */
export
const privateData: number = DisplayUpdated_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DisplayUpdated: $.ASN1Decoder<DisplayUpdated> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DisplayUpdated
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DisplayUpdated (el: _Element): DisplayUpdated {
    if (!_cached_decoder_for_DisplayUpdated) { _cached_decoder_for_DisplayUpdated = $._decodeBitString; }
    return _cached_decoder_for_DisplayUpdated(el);
}

let _cached_encoder_for_DisplayUpdated: $.ASN1Encoder<DisplayUpdated> | null = null;

/**
 * @summary Encodes a(n) DisplayUpdated into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisplayUpdated, encoded as an ASN.1 Element.
 */
export
function _encode_DisplayUpdated (value: DisplayUpdated, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DisplayUpdated) { _cached_encoder_for_DisplayUpdated = $._encodeBitString; }
    return _cached_encoder_for_DisplayUpdated(value, elGetter);
}


/* eslint-enable */
