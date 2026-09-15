/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetDoNotDisturb
 * @description
 * Capability bitmap for the Get Do Not Disturb service (ECMA-269 C.14.10,
 * ECMA-285 §9.10). Presence of this entry in `LogicalServList` means the SF
 * supports that service. Each set bit is an optional parameter, enumerated
 * value, initial connection state, or miscellaneous characteristic from Annex
 * C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetDoNotDisturb  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     callOriginParameterInAck         ( 1),     -- optional parameters
 *     callOriginInternInAck             ( 2),     -- optional parameters
 *     callOriginExternInAck             ( 3),     -- optional parameters
 *     callingDeviceListInAck             ( 4),     -- optional parameters
 *     privateDataInAck             ( 5) }
 * ```
 */
export
type GetDoNotDisturb = BIT_STRING;

/**
 * @summary GetDoNotDisturb_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.14.10).
 */
export
const GetDoNotDisturb_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `GetDoNotDisturb_privateData`.
 */
export
const privateData: number = GetDoNotDisturb_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetDoNotDisturb_callOriginParameterInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `callOriginParameter` in the
 * acknowledgement (ECMA-269 C.14.10).
 */
export
const GetDoNotDisturb_callOriginParameterInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary callOriginParameterInAck
 * @constant
 * @description
 * Alias of `GetDoNotDisturb_callOriginParameterInAck`.
 */
export
const callOriginParameterInAck: number = GetDoNotDisturb_callOriginParameterInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetDoNotDisturb_callOriginInternInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `callOriginIntern` in the
 * acknowledgement (ECMA-269 C.14.10).
 */
export
const GetDoNotDisturb_callOriginInternInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary callOriginInternInAck
 * @constant
 * @description
 * Alias of `GetDoNotDisturb_callOriginInternInAck`.
 */
export
const callOriginInternInAck: number = GetDoNotDisturb_callOriginInternInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetDoNotDisturb_callOriginExternInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `callOriginExtern` in the
 * acknowledgement (ECMA-269 C.14.10).
 */
export
const GetDoNotDisturb_callOriginExternInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary callOriginExternInAck
 * @constant
 * @description
 * Alias of `GetDoNotDisturb_callOriginExternInAck`.
 */
export
const callOriginExternInAck: number = GetDoNotDisturb_callOriginExternInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetDoNotDisturb_callingDeviceListInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `callingDeviceList` in the
 * acknowledgement (ECMA-269 C.14.10).
 */
export
const GetDoNotDisturb_callingDeviceListInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary callingDeviceListInAck
 * @constant
 * @description
 * Alias of `GetDoNotDisturb_callingDeviceListInAck`.
 */
export
const callingDeviceListInAck: number = GetDoNotDisturb_callingDeviceListInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetDoNotDisturb_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.14.10).
 */
export
const GetDoNotDisturb_privateDataInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `GetDoNotDisturb_privateDataInAck`.
 */
export
const privateDataInAck: number = GetDoNotDisturb_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetDoNotDisturb: $.ASN1Decoder<GetDoNotDisturb> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetDoNotDisturb
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetDoNotDisturb (el: _Element): GetDoNotDisturb {
    if (!_cached_decoder_for_GetDoNotDisturb) { _cached_decoder_for_GetDoNotDisturb = $._decodeBitString; }
    return _cached_decoder_for_GetDoNotDisturb(el);
}

let _cached_encoder_for_GetDoNotDisturb: $.ASN1Encoder<GetDoNotDisturb> | null = null;

/**
 * @summary Encodes a(n) GetDoNotDisturb into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetDoNotDisturb, encoded as an ASN.1 Element.
 */
export
function _encode_GetDoNotDisturb (value: GetDoNotDisturb, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetDoNotDisturb) { _cached_encoder_for_GetDoNotDisturb = $._encodeBitString; }
    return _cached_encoder_for_GetDoNotDisturb(value, elGetter);
}


/* eslint-enable */
