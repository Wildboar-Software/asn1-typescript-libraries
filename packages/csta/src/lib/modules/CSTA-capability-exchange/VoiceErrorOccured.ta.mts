/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary VoiceErrorOccured
 * @description
 * Capability bitmap for the Voice Error Occurred event (ECMA-269 C.20.18,
 * ECMA-285 §9.10). Presence of this entry in `VoiceUnitEvtsList` means the SF
 * supports that event. Each set bit is an optional parameter, enumerated value,
 * initial connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoiceErrorOccured  ::=  BIT STRING
 * {    resource                ( 0),     -- optional parameters
 *     cause                    ( 1),     -- optional parameters
 *     servicesPermitted            ( 2),     -- optional parameters
 *     privateData                ( 3) }
 * ```
 */
export
type VoiceErrorOccured = BIT_STRING;

/**
 * @summary VoiceErrorOccured_resource
 * @constant
 * @description
 * Bit set means the SF supports the optional `resource` parameter (ECMA-269
 * C.20.18).
 */
export
const VoiceErrorOccured_resource: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 * @description
 * Alias of `VoiceErrorOccured_resource`.
 */
export
const resource: number = VoiceErrorOccured_resource; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceErrorOccured_cause
 * @constant
 * @description
 * Bit set means the SF supports the optional `cause` parameter (ECMA-269
 * C.20.18).
 */
export
const VoiceErrorOccured_cause: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 * @description
 * Alias of `VoiceErrorOccured_cause`.
 */
export
const cause: number = VoiceErrorOccured_cause; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceErrorOccured_servicesPermitted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.20.18).
 */
export
const VoiceErrorOccured_servicesPermitted: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 * @description
 * Alias of `VoiceErrorOccured_servicesPermitted`.
 */
export
const servicesPermitted: number = VoiceErrorOccured_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceErrorOccured_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.20.18).
 */
export
const VoiceErrorOccured_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `VoiceErrorOccured_privateData`.
 */
export
const privateData: number = VoiceErrorOccured_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_VoiceErrorOccured: $.ASN1Decoder<VoiceErrorOccured> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VoiceErrorOccured
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VoiceErrorOccured (el: _Element): VoiceErrorOccured {
    if (!_cached_decoder_for_VoiceErrorOccured) { _cached_decoder_for_VoiceErrorOccured = $._decodeBitString; }
    return _cached_decoder_for_VoiceErrorOccured(el);
}

let _cached_encoder_for_VoiceErrorOccured: $.ASN1Encoder<VoiceErrorOccured> | null = null;

/**
 * @summary Encodes a(n) VoiceErrorOccured into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VoiceErrorOccured, encoded as an ASN.1 Element.
 */
export
function _encode_VoiceErrorOccured (value: VoiceErrorOccured, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VoiceErrorOccured) { _cached_encoder_for_VoiceErrorOccured = $._encodeBitString; }
    return _cached_encoder_for_VoiceErrorOccured(value, elGetter);
}


/* eslint-enable */
