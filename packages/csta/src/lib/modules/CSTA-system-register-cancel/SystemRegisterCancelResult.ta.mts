/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SystemRegisterCancelResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SystemRegisterCancelResult  ::=  CHOICE
 * {     extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type SystemRegisterCancelResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SystemRegisterCancelResult: $.ASN1Decoder<SystemRegisterCancelResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SystemRegisterCancelResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SystemRegisterCancelResult (el: _Element): SystemRegisterCancelResult {
    if (!_cached_decoder_for_SystemRegisterCancelResult) { _cached_decoder_for_SystemRegisterCancelResult = $._decode_inextensible_choice<SystemRegisterCancelResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_SystemRegisterCancelResult(el);
}

let _cached_encoder_for_SystemRegisterCancelResult: $.ASN1Encoder<SystemRegisterCancelResult> | null = null;

/**
 * @summary Encodes a(n) SystemRegisterCancelResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SystemRegisterCancelResult, encoded as an ASN.1 Element.
 */
export
function _encode_SystemRegisterCancelResult (value: SystemRegisterCancelResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SystemRegisterCancelResult) { _cached_encoder_for_SystemRegisterCancelResult = $._encode_choice<SystemRegisterCancelResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_SystemRegisterCancelResult(value, elGetter);
}


/* eslint-enable */
