/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Hookswitch
 * @description
 * Capability bitmap for the Hookswitch event (ECMA-269 C.13.4, ECMA-285 §9.10).
 * Presence of this entry in `PhysDevEvtsList` means the SF supports that event.
 * Each set bit is an optional parameter, enumerated value, initial connection
 * state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Hookswitch  ::=  BIT STRING
 * {    privateData                 ( 0) }
 * ```
 */
export
type Hookswitch = BIT_STRING;

/**
 * @summary Hookswitch_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.13.4).
 */
export
const Hookswitch_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `Hookswitch_privateData`.
 */
export
const privateData: number = Hookswitch_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Hookswitch: $.ASN1Decoder<Hookswitch> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Hookswitch
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Hookswitch (el: _Element): Hookswitch {
    if (!_cached_decoder_for_Hookswitch) { _cached_decoder_for_Hookswitch = $._decodeBitString; }
    return _cached_decoder_for_Hookswitch(el);
}

let _cached_encoder_for_Hookswitch: $.ASN1Encoder<Hookswitch> | null = null;

/**
 * @summary Encodes a(n) Hookswitch into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Hookswitch, encoded as an ASN.1 Element.
 */
export
function _encode_Hookswitch (value: Hookswitch, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Hookswitch) { _cached_encoder_for_Hookswitch = $._encodeBitString; }
    return _cached_encoder_for_Hookswitch(value, elGetter);
}


/* eslint-enable */
