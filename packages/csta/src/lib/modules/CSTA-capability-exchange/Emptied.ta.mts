/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Emptied
 * @description
 * Capability bitmap for the Emptied event (ECMA-269 C.20.4, ECMA-285 §9.10).
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
 * Emptied  ::=  BIT STRING
 * {     resource                 ( 0),     -- optional parameters
 *     cause                    ( 1),     -- optional parameters
 *     servicesPermitted             ( 2),     -- optional parameters
 *     privateData                 ( 3) }
 * ```
 */
export
type Emptied = BIT_STRING;

/**
 * @summary Emptied_resource
 * @constant
 * @description
 * Bit set means the SF supports the optional `resource` parameter (ECMA-269
 * C.20.4).
 */
export
const Emptied_resource: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 * @description
 * Alias of `Emptied_resource`.
 */
export
const resource: number = Emptied_resource; /* SHORT_NAMED_BIT */

/**
 * @summary Emptied_cause
 * @constant
 * @description
 * Bit set means the SF supports the optional `cause` parameter (ECMA-269
 * C.20.4).
 */
export
const Emptied_cause: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 * @description
 * Alias of `Emptied_cause`.
 */
export
const cause: number = Emptied_cause; /* SHORT_NAMED_BIT */

/**
 * @summary Emptied_servicesPermitted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.20.4).
 */
export
const Emptied_servicesPermitted: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 * @description
 * Alias of `Emptied_servicesPermitted`.
 */
export
const servicesPermitted: number = Emptied_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Emptied_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.20.4).
 */
export
const Emptied_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `Emptied_privateData`.
 */
export
const privateData: number = Emptied_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Emptied: $.ASN1Decoder<Emptied> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Emptied
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Emptied (el: _Element): Emptied {
    if (!_cached_decoder_for_Emptied) { _cached_decoder_for_Emptied = $._decodeBitString; }
    return _cached_decoder_for_Emptied(el);
}

let _cached_encoder_for_Emptied: $.ASN1Encoder<Emptied> | null = null;

/**
 * @summary Encodes a(n) Emptied into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Emptied, encoded as an ASN.1 Element.
 */
export
function _encode_Emptied (value: Emptied, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Emptied) { _cached_encoder_for_Emptied = $._encodeBitString; }
    return _cached_encoder_for_Emptied(value, elGetter);
}


/* eslint-enable */
