/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SetLocationInformation
 * @description
 * Capability bitmap for the Set Location Information service (ECMA-269 C.22.2,
 * ECMA-285 §9.10). Presence of this entry in `LocationServicesServList` means
 * the SF supports that service. Each set bit is an optional parameter,
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
 * SetLocationInformation  ::=  BIT STRING
 * {    locationInfo                ( 0),
 *     replaceMode                ( 1),
 *     privateData                ( 2),
 *     privateDataInAck            ( 3) }
 * ```
 */
export
type SetLocationInformation = BIT_STRING;

/**
 * @summary SetLocationInformation_locationInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.22.2).
 */
export
const SetLocationInformation_locationInfo: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary locationInfo
 * @constant
 * @description
 * Alias of `SetLocationInformation_locationInfo`.
 */
export
const locationInfo: number = SetLocationInformation_locationInfo; /* SHORT_NAMED_BIT */

/**
 * @summary SetLocationInformation_replaceMode
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.22.2).
 */
export
const SetLocationInformation_replaceMode: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary replaceMode
 * @constant
 * @description
 * Alias of `SetLocationInformation_replaceMode`.
 */
export
const replaceMode: number = SetLocationInformation_replaceMode; /* SHORT_NAMED_BIT */

/**
 * @summary SetLocationInformation_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.22.2).
 */
export
const SetLocationInformation_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SetLocationInformation_privateData`.
 */
export
const privateData: number = SetLocationInformation_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetLocationInformation_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.22.2).
 */
export
const SetLocationInformation_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SetLocationInformation_privateDataInAck`.
 */
export
const privateDataInAck: number = SetLocationInformation_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetLocationInformation: $.ASN1Decoder<SetLocationInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetLocationInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetLocationInformation (el: _Element): SetLocationInformation {
    if (!_cached_decoder_for_SetLocationInformation) { _cached_decoder_for_SetLocationInformation = $._decodeBitString; }
    return _cached_decoder_for_SetLocationInformation(el);
}

let _cached_encoder_for_SetLocationInformation: $.ASN1Encoder<SetLocationInformation> | null = null;

/**
 * @summary Encodes a(n) SetLocationInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetLocationInformation, encoded as an ASN.1 Element.
 */
export
function _encode_SetLocationInformation (value: SetLocationInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetLocationInformation) { _cached_encoder_for_SetLocationInformation = $._encodeBitString; }
    return _cached_encoder_for_SetLocationInformation(value, elGetter);
}


/* eslint-enable */
