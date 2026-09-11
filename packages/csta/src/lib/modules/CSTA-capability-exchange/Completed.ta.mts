/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Completed
 * @description
 * Capability bitmap for the Completed event (ECMA-269 C.20.2, ECMA-285 §9.10).
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
 * Completed  ::=  BIT STRING
 * {     resource                 ( 0),     -- optional parameters
 *     cause                    ( 1),     -- optional parameters
 *     servicesPermitted             ( 2),     -- optional parameters
 *     privateData                 ( 3) }
 * ```
 */
export
type Completed = BIT_STRING;

/**
 * @summary Completed_resource
 * @constant
 * @description
 * Bit set means the SF supports the optional `resource` parameter (ECMA-269
 * C.20.2).
 */
export
const Completed_resource: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 * @description
 * Alias of `Completed_resource`.
 */
export
const resource: number = Completed_resource; /* SHORT_NAMED_BIT */

/**
 * @summary Completed_cause
 * @constant
 * @description
 * Bit set means the SF supports the optional `cause` parameter (ECMA-269
 * C.20.2).
 */
export
const Completed_cause: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 * @description
 * Alias of `Completed_cause`.
 */
export
const cause: number = Completed_cause; /* SHORT_NAMED_BIT */

/**
 * @summary Completed_servicesPermitted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.20.2).
 */
export
const Completed_servicesPermitted: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 * @description
 * Alias of `Completed_servicesPermitted`.
 */
export
const servicesPermitted: number = Completed_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Completed_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.20.2).
 */
export
const Completed_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `Completed_privateData`.
 */
export
const privateData: number = Completed_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Completed: $.ASN1Decoder<Completed> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Completed
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Completed (el: _Element): Completed {
    if (!_cached_decoder_for_Completed) { _cached_decoder_for_Completed = $._decodeBitString; }
    return _cached_decoder_for_Completed(el);
}

let _cached_encoder_for_Completed: $.ASN1Encoder<Completed> | null = null;

/**
 * @summary Encodes a(n) Completed into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Completed, encoded as an ASN.1 Element.
 */
export
function _encode_Completed (value: Completed, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Completed) { _cached_encoder_for_Completed = $._encodeBitString; }
    return _cached_encoder_for_Completed(value, elGetter);
}


/* eslint-enable */
