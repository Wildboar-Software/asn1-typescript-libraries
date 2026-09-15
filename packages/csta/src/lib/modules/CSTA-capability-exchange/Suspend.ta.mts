/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Suspend
 * @description
 * Capability bitmap for the Suspend service (ECMA-269 C.19.16, ECMA-285 §9.10).
 * Presence of this entry in `VoiceUnitServList` means the SF supports that
 * service. Each set bit is an optional parameter, enumerated value, initial
 * connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Suspend  ::=  BIT STRING
 * {     message                 ( 0),     -- optional parameters
 *     resource                ( 3),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     privateDataInAck             ( 2) }
 * ```
 */
export
type Suspend = BIT_STRING;

/**
 * @summary Suspend_message
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.16).
 */
export
const Suspend_message: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary message
 * @constant
 * @description
 * Alias of `Suspend_message`.
 */
export
const message: number = Suspend_message; /* SHORT_NAMED_BIT */

/**
 * @summary Suspend_resource
 * @constant
 * @description
 * Bit set means the SF supports the optional `resource` parameter (ECMA-269
 * C.19.16).
 */
export
const Suspend_resource: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 * @description
 * Alias of `Suspend_resource`.
 */
export
const resource: number = Suspend_resource; /* SHORT_NAMED_BIT */

/**
 * @summary Suspend_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.19.16).
 */
export
const Suspend_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `Suspend_privateData`.
 */
export
const privateData: number = Suspend_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Suspend_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.19.16).
 */
export
const Suspend_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `Suspend_privateDataInAck`.
 */
export
const privateDataInAck: number = Suspend_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Suspend: $.ASN1Decoder<Suspend> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Suspend
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Suspend (el: _Element): Suspend {
    if (!_cached_decoder_for_Suspend) { _cached_decoder_for_Suspend = $._decodeBitString; }
    return _cached_decoder_for_Suspend(el);
}

let _cached_encoder_for_Suspend: $.ASN1Encoder<Suspend> | null = null;

/**
 * @summary Encodes a(n) Suspend into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Suspend, encoded as an ASN.1 Element.
 */
export
function _encode_Suspend (value: Suspend, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Suspend) { _cached_encoder_for_Suspend = $._encodeBitString; }
    return _cached_encoder_for_Suspend(value, elGetter);
}


/* eslint-enable */
