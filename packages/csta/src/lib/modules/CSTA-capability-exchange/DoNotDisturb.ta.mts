/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DoNotDisturb
 * @description
 * Capability bitmap for the Do Not Disturb event (ECMA-269 C.15.12, ECMA-285
 * §9.10). Presence of this entry in `LogicalEvtsList` means the SF supports
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
 * DoNotDisturb  ::=  BIT STRING
 * {     callOriginationParameter         ( 0),     -- optional parameters
 *     callOriginationInternal         ( 1),     -- optional parameters
 *     callOriginationExternal         ( 2),     -- optional parameters
 *     callingDeviceList             ( 3),     -- optional parameters
 *     privateData                 ( 4) }
 * ```
 */
export
type DoNotDisturb = BIT_STRING;

/**
 * @summary DoNotDisturb_callOriginationParameter
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.15.12).
 */
export
const DoNotDisturb_callOriginationParameter: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary callOriginationParameter
 * @constant
 * @description
 * Alias of `DoNotDisturb_callOriginationParameter`.
 */
export
const callOriginationParameter: number = DoNotDisturb_callOriginationParameter; /* SHORT_NAMED_BIT */

/**
 * @summary DoNotDisturb_callOriginationInternal
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.15.12).
 */
export
const DoNotDisturb_callOriginationInternal: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary callOriginationInternal
 * @constant
 * @description
 * Alias of `DoNotDisturb_callOriginationInternal`.
 */
export
const callOriginationInternal: number = DoNotDisturb_callOriginationInternal; /* SHORT_NAMED_BIT */

/**
 * @summary DoNotDisturb_callOriginationExternal
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.15.12).
 */
export
const DoNotDisturb_callOriginationExternal: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary callOriginationExternal
 * @constant
 * @description
 * Alias of `DoNotDisturb_callOriginationExternal`.
 */
export
const callOriginationExternal: number = DoNotDisturb_callOriginationExternal; /* SHORT_NAMED_BIT */

/**
 * @summary DoNotDisturb_callingDeviceList
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.15.12).
 */
export
const DoNotDisturb_callingDeviceList: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary callingDeviceList
 * @constant
 * @description
 * Alias of `DoNotDisturb_callingDeviceList`.
 */
export
const callingDeviceList: number = DoNotDisturb_callingDeviceList; /* SHORT_NAMED_BIT */

/**
 * @summary DoNotDisturb_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.15.12).
 */
export
const DoNotDisturb_privateData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `DoNotDisturb_privateData`.
 */
export
const privateData: number = DoNotDisturb_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DoNotDisturb: $.ASN1Decoder<DoNotDisturb> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DoNotDisturb
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DoNotDisturb (el: _Element): DoNotDisturb {
    if (!_cached_decoder_for_DoNotDisturb) { _cached_decoder_for_DoNotDisturb = $._decodeBitString; }
    return _cached_decoder_for_DoNotDisturb(el);
}

let _cached_encoder_for_DoNotDisturb: $.ASN1Encoder<DoNotDisturb> | null = null;

/**
 * @summary Encodes a(n) DoNotDisturb into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DoNotDisturb, encoded as an ASN.1 Element.
 */
export
function _encode_DoNotDisturb (value: DoNotDisturb, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DoNotDisturb) { _cached_encoder_for_DoNotDisturb = $._encodeBitString; }
    return _cached_encoder_for_DoNotDisturb(value, elGetter);
}


/* eslint-enable */
