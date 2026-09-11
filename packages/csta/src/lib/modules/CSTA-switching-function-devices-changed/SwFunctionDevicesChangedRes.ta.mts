/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SwFunctionDevicesChangedRes
 * @description
 *
 * Positive ack (Table 14-17). Typically only extensions.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SwFunctionDevicesChangedRes  ::=  CHOICE
 * {     extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type SwFunctionDevicesChangedRes =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SwFunctionDevicesChangedRes: $.ASN1Decoder<SwFunctionDevicesChangedRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SwFunctionDevicesChangedRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SwFunctionDevicesChangedRes (el: _Element): SwFunctionDevicesChangedRes {
    if (!_cached_decoder_for_SwFunctionDevicesChangedRes) { _cached_decoder_for_SwFunctionDevicesChangedRes = $._decode_inextensible_choice<SwFunctionDevicesChangedRes>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_SwFunctionDevicesChangedRes(el);
}

let _cached_encoder_for_SwFunctionDevicesChangedRes: $.ASN1Encoder<SwFunctionDevicesChangedRes> | null = null;

/**
 * @summary Encodes a(n) SwFunctionDevicesChangedRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SwFunctionDevicesChangedRes, encoded as an ASN.1 Element.
 */
export
function _encode_SwFunctionDevicesChangedRes (value: SwFunctionDevicesChangedRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SwFunctionDevicesChangedRes) { _cached_encoder_for_SwFunctionDevicesChangedRes = $._encode_choice<SwFunctionDevicesChangedRes>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_SwFunctionDevicesChangedRes(value, elGetter);
}


/* eslint-enable */
