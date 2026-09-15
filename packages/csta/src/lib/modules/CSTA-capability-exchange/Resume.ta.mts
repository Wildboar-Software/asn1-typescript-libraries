/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Resume
 * @description
 * Capability bitmap for the Resume service (ECMA-269 C.19.11, ECMA-285 §9.10).
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
 * Resume  ::=  BIT STRING
 * {     msgToResume                 ( 0),     -- optional parameters
 *     resource                ( 4),     -- optional parameters
 *     duration                 ( 1),     -- optional parameters
 *     privateData                 ( 2),     -- optional parameters
 *     privateDataInAck             ( 3) }
 * ```
 */
export
type Resume = BIT_STRING;

/**
 * @summary Resume_msgToResume
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.11).
 */
export
const Resume_msgToResume: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary msgToResume
 * @constant
 * @description
 * Alias of `Resume_msgToResume`.
 */
export
const msgToResume: number = Resume_msgToResume; /* SHORT_NAMED_BIT */

/**
 * @summary Resume_resource
 * @constant
 * @description
 * Bit set means the SF supports the optional `resource` parameter (ECMA-269
 * C.19.11).
 */
export
const Resume_resource: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 * @description
 * Alias of `Resume_resource`.
 */
export
const resource: number = Resume_resource; /* SHORT_NAMED_BIT */

/**
 * @summary Resume_duration
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.11).
 */
export
const Resume_duration: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary duration
 * @constant
 * @description
 * Alias of `Resume_duration`.
 */
export
const duration: number = Resume_duration; /* SHORT_NAMED_BIT */

/**
 * @summary Resume_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.19.11).
 */
export
const Resume_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `Resume_privateData`.
 */
export
const privateData: number = Resume_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Resume_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.19.11).
 */
export
const Resume_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `Resume_privateDataInAck`.
 */
export
const privateDataInAck: number = Resume_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Resume: $.ASN1Decoder<Resume> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Resume
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Resume (el: _Element): Resume {
    if (!_cached_decoder_for_Resume) { _cached_decoder_for_Resume = $._decodeBitString; }
    return _cached_decoder_for_Resume(el);
}

let _cached_encoder_for_Resume: $.ASN1Encoder<Resume> | null = null;

/**
 * @summary Encodes a(n) Resume into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Resume, encoded as an ASN.1 Element.
 */
export
function _encode_Resume (value: Resume, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Resume) { _cached_encoder_for_Resume = $._encodeBitString; }
    return _cached_encoder_for_Resume(value, elGetter);
}


/* eslint-enable */
