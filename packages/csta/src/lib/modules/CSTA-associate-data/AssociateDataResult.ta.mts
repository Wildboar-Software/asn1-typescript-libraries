/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary AssociateDataResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssociateDataResult  ::=  CHOICE
 * {    extensions            CSTACommonArguments,
 *     noData                NULL }
 * ```
 */
export
type AssociateDataResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AssociateDataResult: $.ASN1Decoder<AssociateDataResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AssociateDataResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AssociateDataResult (el: _Element): AssociateDataResult {
    if (!_cached_decoder_for_AssociateDataResult) { _cached_decoder_for_AssociateDataResult = $._decode_inextensible_choice<AssociateDataResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_AssociateDataResult(el);
}

let _cached_encoder_for_AssociateDataResult: $.ASN1Encoder<AssociateDataResult> | null = null;

/**
 * @summary Encodes a(n) AssociateDataResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssociateDataResult, encoded as an ASN.1 Element.
 */
export
function _encode_AssociateDataResult (value: AssociateDataResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AssociateDataResult) { _cached_encoder_for_AssociateDataResult = $._encode_choice<AssociateDataResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_AssociateDataResult(value, elGetter);
}


/* eslint-enable */
