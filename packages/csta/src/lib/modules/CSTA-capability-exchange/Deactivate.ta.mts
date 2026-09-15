/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Deactivate
 * @description
 * Capability bitmap for the Deactivate service (ECMA-269 C.19.4, ECMA-285
 * §9.10). Presence of this entry in `VoiceUnitServList` means the SF supports
 * that service. Each set bit is an optional parameter, enumerated value,
 * initial connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Deactivate  ::=  BIT STRING
 * {    resource                ( 0),     -- optional parameters
 *     grammarName                ( 1),     -- optional parameters
 *     privateData                ( 2),     -- optional parameters
 *     privateDataInAck            ( 3) }
 * ```
 */
export
type Deactivate = BIT_STRING;

/**
 * @summary Deactivate_resource
 * @constant
 * @description
 * Bit set means the SF supports the optional `resource` parameter (ECMA-269
 * C.19.4).
 */
export
const Deactivate_resource: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 * @description
 * Alias of `Deactivate_resource`.
 */
export
const resource: number = Deactivate_resource; /* SHORT_NAMED_BIT */

/**
 * @summary Deactivate_grammarName
 * @constant
 * @description
 * Bit set means the SF supports the optional `grammarName` parameter (ECMA-269
 * C.19.4).
 */
export
const Deactivate_grammarName: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary grammarName
 * @constant
 * @description
 * Alias of `Deactivate_grammarName`.
 */
export
const grammarName: number = Deactivate_grammarName; /* SHORT_NAMED_BIT */

/**
 * @summary Deactivate_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.19.4).
 */
export
const Deactivate_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `Deactivate_privateData`.
 */
export
const privateData: number = Deactivate_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Deactivate_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.19.4).
 */
export
const Deactivate_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `Deactivate_privateDataInAck`.
 */
export
const privateDataInAck: number = Deactivate_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Deactivate: $.ASN1Decoder<Deactivate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Deactivate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Deactivate (el: _Element): Deactivate {
    if (!_cached_decoder_for_Deactivate) { _cached_decoder_for_Deactivate = $._decodeBitString; }
    return _cached_decoder_for_Deactivate(el);
}

let _cached_encoder_for_Deactivate: $.ASN1Encoder<Deactivate> | null = null;

/**
 * @summary Encodes a(n) Deactivate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Deactivate, encoded as an ASN.1 Element.
 */
export
function _encode_Deactivate (value: Deactivate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Deactivate) { _cached_encoder_for_Deactivate = $._encodeBitString; }
    return _cached_encoder_for_Deactivate(value, elGetter);
}


/* eslint-enable */
