/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DtmfDetected
 * @description
 * Capability bitmap for the DTMF Detected event (ECMA-269 C.20.3, ECMA-285
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
 * DtmfDetected  ::=  BIT STRING
 * {     resource                 ( 0),     -- optional parameters
 *     cause                    ( 1),     -- optional parameters
 *     servicesPermitted             ( 2),     -- optional parameters
 *     privateData                 ( 3) }
 * ```
 */
export
type DtmfDetected = BIT_STRING;

/**
 * @summary DtmfDetected_resource
 * @constant
 * @description
 * Bit set means the SF supports the optional `resource` parameter (ECMA-269
 * Annex C).
 */
export
const DtmfDetected_resource: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 * @description
 * Alias of `DtmfDetected_resource`.
 */
export
const resource: number = DtmfDetected_resource; /* SHORT_NAMED_BIT */

/**
 * @summary DtmfDetected_cause
 * @constant
 * @description
 * Bit set means the SF supports the optional `cause` parameter (ECMA-269 Annex
 * C).
 */
export
const DtmfDetected_cause: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 * @description
 * Alias of `DtmfDetected_cause`.
 */
export
const cause: number = DtmfDetected_cause; /* SHORT_NAMED_BIT */

/**
 * @summary DtmfDetected_servicesPermitted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const DtmfDetected_servicesPermitted: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 * @description
 * Alias of `DtmfDetected_servicesPermitted`.
 */
export
const servicesPermitted: number = DtmfDetected_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary DtmfDetected_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * Annex C).
 */
export
const DtmfDetected_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `DtmfDetected_privateData`.
 */
export
const privateData: number = DtmfDetected_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DtmfDetected: $.ASN1Decoder<DtmfDetected> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DtmfDetected
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DtmfDetected (el: _Element): DtmfDetected {
    if (!_cached_decoder_for_DtmfDetected) { _cached_decoder_for_DtmfDetected = $._decodeBitString; }
    return _cached_decoder_for_DtmfDetected(el);
}

let _cached_encoder_for_DtmfDetected: $.ASN1Encoder<DtmfDetected> | null = null;

/**
 * @summary Encodes a(n) DtmfDetected into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DtmfDetected, encoded as an ASN.1 Element.
 */
export
function _encode_DtmfDetected (value: DtmfDetected, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DtmfDetected) { _cached_encoder_for_DtmfDetected = $._encodeBitString; }
    return _cached_encoder_for_DtmfDetected(value, elGetter);
}


/* eslint-enable */
