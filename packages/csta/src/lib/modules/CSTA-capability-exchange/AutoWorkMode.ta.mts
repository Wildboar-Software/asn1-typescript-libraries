/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AutoWorkMode
 * @description
 * Capability bitmap for the Auto Work Mode event (ECMA-269 C.15.8, ECMA-285
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
 * AutoWorkMode  ::=  BIT STRING
 * {     privateData                 ( 0) }
 * ```
 */
export
type AutoWorkMode = BIT_STRING;

/**
 * @summary AutoWorkMode_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.15.8).
 */
export
const AutoWorkMode_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `AutoWorkMode_privateData`.
 */
export
const privateData: number = AutoWorkMode_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AutoWorkMode: $.ASN1Decoder<AutoWorkMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AutoWorkMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AutoWorkMode (el: _Element): AutoWorkMode {
    if (!_cached_decoder_for_AutoWorkMode) { _cached_decoder_for_AutoWorkMode = $._decodeBitString; }
    return _cached_decoder_for_AutoWorkMode(el);
}

let _cached_encoder_for_AutoWorkMode: $.ASN1Encoder<AutoWorkMode> | null = null;

/**
 * @summary Encodes a(n) AutoWorkMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoWorkMode, encoded as an ASN.1 Element.
 */
export
function _encode_AutoWorkMode (value: AutoWorkMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AutoWorkMode) { _cached_encoder_for_AutoWorkMode = $._encodeBitString; }
    return _cached_encoder_for_AutoWorkMode(value, elGetter);
}


/* eslint-enable */
