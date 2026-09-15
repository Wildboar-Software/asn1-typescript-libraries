/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary NotRecognized
 * @description
 * Capability bitmap for the Not Recognized event (ECMA-269 C.20.6, ECMA-285
 * §9.10). Presence of this entry in `VoiceUnitEvtsList` means the SF supports
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
 * NotRecognized  ::=  BIT STRING
 * {     resource                 ( 0),     -- optional parameters
 *     result                    ( 1),     -- optional parameters
 *     cause                    ( 2),     -- optional parameters
 *     servicesPermitted             ( 3),     -- optional parameters
 *     privateData                 ( 4) }
 * ```
 */
export
type NotRecognized = BIT_STRING;

/**
 * @summary NotRecognized_resource
 * @constant
 * @description
 * Bit set means the SF supports the optional `resource` parameter (ECMA-269
 * C.20.6).
 */
export
const NotRecognized_resource: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 * @description
 * Alias of `NotRecognized_resource`.
 */
export
const resource: number = NotRecognized_resource; /* SHORT_NAMED_BIT */

/**
 * @summary NotRecognized_result
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.20.6).
 */
export
const NotRecognized_result: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary result
 * @constant
 * @description
 * Alias of `NotRecognized_result`.
 */
export
const result: number = NotRecognized_result; /* SHORT_NAMED_BIT */

/**
 * @summary NotRecognized_cause
 * @constant
 * @description
 * Bit set means the SF supports the optional `cause` parameter (ECMA-269
 * C.20.6).
 */
export
const NotRecognized_cause: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 * @description
 * Alias of `NotRecognized_cause`.
 */
export
const cause: number = NotRecognized_cause; /* SHORT_NAMED_BIT */

/**
 * @summary NotRecognized_servicesPermitted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.20.6).
 */
export
const NotRecognized_servicesPermitted: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 * @description
 * Alias of `NotRecognized_servicesPermitted`.
 */
export
const servicesPermitted: number = NotRecognized_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary NotRecognized_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.20.6).
 */
export
const NotRecognized_privateData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `NotRecognized_privateData`.
 */
export
const privateData: number = NotRecognized_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_NotRecognized: $.ASN1Decoder<NotRecognized> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotRecognized
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotRecognized (el: _Element): NotRecognized {
    if (!_cached_decoder_for_NotRecognized) { _cached_decoder_for_NotRecognized = $._decodeBitString; }
    return _cached_decoder_for_NotRecognized(el);
}

let _cached_encoder_for_NotRecognized: $.ASN1Encoder<NotRecognized> | null = null;

/**
 * @summary Encodes a(n) NotRecognized into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotRecognized, encoded as an ASN.1 Element.
 */
export
function _encode_NotRecognized (value: NotRecognized, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotRecognized) { _cached_encoder_for_NotRecognized = $._encodeBitString; }
    return _cached_encoder_for_NotRecognized(value, elGetter);
}


/* eslint-enable */
