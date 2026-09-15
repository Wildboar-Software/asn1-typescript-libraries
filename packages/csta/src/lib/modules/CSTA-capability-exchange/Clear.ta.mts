/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Clear
 * @description
 * Capability bitmap for the Clear service (ECMA-269 C.19.2, ECMA-285 §9.10).
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
 * Clear  ::=  BIT STRING
 * {    resource                ( 0),     -- optional parameters
 *     privateData                ( 1),     -- optional parameters
 *     privateDataInAck            ( 2) }
 * ```
 */
export
type Clear = BIT_STRING;

/**
 * @summary Clear_resource
 * @constant
 * @description
 * Bit set means the SF supports the optional `resource` parameter (ECMA-269
 * C.19.2).
 */
export
const Clear_resource: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 * @description
 * Alias of `Clear_resource`.
 */
export
const resource: number = Clear_resource; /* SHORT_NAMED_BIT */

/**
 * @summary Clear_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.19.2).
 */
export
const Clear_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `Clear_privateData`.
 */
export
const privateData: number = Clear_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Clear_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.19.2).
 */
export
const Clear_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `Clear_privateDataInAck`.
 */
export
const privateDataInAck: number = Clear_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Clear: $.ASN1Decoder<Clear> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Clear
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Clear (el: _Element): Clear {
    if (!_cached_decoder_for_Clear) { _cached_decoder_for_Clear = $._decodeBitString; }
    return _cached_decoder_for_Clear(el);
}

let _cached_encoder_for_Clear: $.ASN1Encoder<Clear> | null = null;

/**
 * @summary Encodes a(n) Clear into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Clear, encoded as an ASN.1 Element.
 */
export
function _encode_Clear (value: Clear, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Clear) { _cached_encoder_for_Clear = $._encodeBitString; }
    return _cached_encoder_for_Clear(value, elGetter);
}


/* eslint-enable */
