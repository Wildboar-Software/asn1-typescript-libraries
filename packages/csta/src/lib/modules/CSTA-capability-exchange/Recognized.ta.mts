/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Recognized
 * @description
 * Capability bitmap for the Recognized event (ECMA-269 C.20.8, ECMA-285 §9.10).
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
 * Recognized  ::=  BIT STRING
 * {     resource                 ( 0),     -- optional parameters
 *     cause                    ( 1),     -- optional parameters
 *     servicesPermitted             ( 2),     -- optional parameters
 *     privateData                 ( 3) }
 * ```
 */
export
type Recognized = BIT_STRING;

/**
 * @summary Recognized_resource
 * @constant
 * @description
 * Bit set means the SF supports the optional `resource` parameter (ECMA-269
 * C.20.8).
 */
export
const Recognized_resource: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 * @description
 * Alias of `Recognized_resource`.
 */
export
const resource: number = Recognized_resource; /* SHORT_NAMED_BIT */

/**
 * @summary Recognized_cause
 * @constant
 * @description
 * Bit set means the SF supports the optional `cause` parameter (ECMA-269
 * C.20.8).
 */
export
const Recognized_cause: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 * @description
 * Alias of `Recognized_cause`.
 */
export
const cause: number = Recognized_cause; /* SHORT_NAMED_BIT */

/**
 * @summary Recognized_servicesPermitted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.20.8).
 */
export
const Recognized_servicesPermitted: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 * @description
 * Alias of `Recognized_servicesPermitted`.
 */
export
const servicesPermitted: number = Recognized_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Recognized_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.20.8).
 */
export
const Recognized_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `Recognized_privateData`.
 */
export
const privateData: number = Recognized_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Recognized: $.ASN1Decoder<Recognized> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Recognized
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Recognized (el: _Element): Recognized {
    if (!_cached_decoder_for_Recognized) { _cached_decoder_for_Recognized = $._decodeBitString; }
    return _cached_decoder_for_Recognized(el);
}

let _cached_encoder_for_Recognized: $.ASN1Encoder<Recognized> | null = null;

/**
 * @summary Encodes a(n) Recognized into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Recognized, encoded as an ASN.1 Element.
 */
export
function _encode_Recognized (value: Recognized, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Recognized) { _cached_encoder_for_Recognized = $._encodeBitString; }
    return _cached_encoder_for_Recognized(value, elGetter);
}


/* eslint-enable */
