/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary IORegisterCancelResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IORegisterCancelResult  ::=  CHOICE
 * {    extensions            CSTACommonArguments,
 *     noData                NULL }
 * ```
 */
export
type IORegisterCancelResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IORegisterCancelResult: $.ASN1Decoder<IORegisterCancelResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IORegisterCancelResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IORegisterCancelResult (el: _Element): IORegisterCancelResult {
    if (!_cached_decoder_for_IORegisterCancelResult) { _cached_decoder_for_IORegisterCancelResult = $._decode_inextensible_choice<IORegisterCancelResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_IORegisterCancelResult(el);
}

let _cached_encoder_for_IORegisterCancelResult: $.ASN1Encoder<IORegisterCancelResult> | null = null;

/**
 * @summary Encodes a(n) IORegisterCancelResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IORegisterCancelResult, encoded as an ASN.1 Element.
 */
export
function _encode_IORegisterCancelResult (value: IORegisterCancelResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IORegisterCancelResult) { _cached_encoder_for_IORegisterCancelResult = $._encode_choice<IORegisterCancelResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_IORegisterCancelResult(value, elGetter);
}


/* eslint-enable */
