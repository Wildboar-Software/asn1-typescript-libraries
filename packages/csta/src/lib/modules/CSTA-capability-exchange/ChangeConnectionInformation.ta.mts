/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ChangeConnectionInformation
 * @description
 * Capability bitmap for the Change Connection Information service (ECMA-269
 * C.7.3, ECMA-285 §9.10). Presence of this entry in `CallAssociatedServList`
 * means the SF supports that service. Each set bit is an optional parameter,
 * enumerated value, initial connection state, or miscellaneous characteristic
 * from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeConnectionInformation  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type ChangeConnectionInformation = BIT_STRING;

/**
 * @summary ChangeConnectionInformation_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.7.3).
 */
export
const ChangeConnectionInformation_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `ChangeConnectionInformation_privateData`.
 */
export
const privateData: number = ChangeConnectionInformation_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary ChangeConnectionInformation_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.7.3).
 */
export
const ChangeConnectionInformation_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `ChangeConnectionInformation_privateDataInAck`.
 */
export
const privateDataInAck: number = ChangeConnectionInformation_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ChangeConnectionInformation: $.ASN1Decoder<ChangeConnectionInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeConnectionInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeConnectionInformation (el: _Element): ChangeConnectionInformation {
    if (!_cached_decoder_for_ChangeConnectionInformation) { _cached_decoder_for_ChangeConnectionInformation = $._decodeBitString; }
    return _cached_decoder_for_ChangeConnectionInformation(el);
}

let _cached_encoder_for_ChangeConnectionInformation: $.ASN1Encoder<ChangeConnectionInformation> | null = null;

/**
 * @summary Encodes a(n) ChangeConnectionInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeConnectionInformation, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeConnectionInformation (value: ChangeConnectionInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeConnectionInformation) { _cached_encoder_for_ChangeConnectionInformation = $._encodeBitString; }
    return _cached_encoder_for_ChangeConnectionInformation(value, elGetter);
}


/* eslint-enable */
