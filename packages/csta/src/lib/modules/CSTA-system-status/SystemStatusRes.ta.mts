/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SystemStatusRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SystemStatusRes  ::=  CHOICE
 * {     extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type SystemStatusRes =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SystemStatusRes: $.ASN1Decoder<SystemStatusRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SystemStatusRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SystemStatusRes (el: _Element): SystemStatusRes {
    if (!_cached_decoder_for_SystemStatusRes) { _cached_decoder_for_SystemStatusRes = $._decode_inextensible_choice<SystemStatusRes>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_SystemStatusRes(el);
}

let _cached_encoder_for_SystemStatusRes: $.ASN1Encoder<SystemStatusRes> | null = null;

/**
 * @summary Encodes a(n) SystemStatusRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SystemStatusRes, encoded as an ASN.1 Element.
 */
export
function _encode_SystemStatusRes (value: SystemStatusRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SystemStatusRes) { _cached_encoder_for_SystemStatusRes = $._encode_choice<SystemStatusRes>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_SystemStatusRes(value, elGetter);
}


/* eslint-enable */
