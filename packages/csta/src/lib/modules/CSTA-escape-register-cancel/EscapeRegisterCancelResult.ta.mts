/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary EscapeRegisterCancelResult
 * @description
 *
 * Positive acknowledgement is `extensions` or empty `noData` (atomic
 * acknowledgement model). (ECMA-269 §29.1.3.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EscapeRegisterCancelResult   ::=  CHOICE
 * {    extensions            CSTACommonArguments,
 *     noData                NULL }
 * ```
 */
export
type EscapeRegisterCancelResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EscapeRegisterCancelResult: $.ASN1Decoder<EscapeRegisterCancelResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EscapeRegisterCancelResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EscapeRegisterCancelResult (el: _Element): EscapeRegisterCancelResult {
    if (!_cached_decoder_for_EscapeRegisterCancelResult) { _cached_decoder_for_EscapeRegisterCancelResult = $._decode_inextensible_choice<EscapeRegisterCancelResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_EscapeRegisterCancelResult(el);
}

let _cached_encoder_for_EscapeRegisterCancelResult: $.ASN1Encoder<EscapeRegisterCancelResult> | null = null;

/**
 * @summary Encodes a(n) EscapeRegisterCancelResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EscapeRegisterCancelResult, encoded as an ASN.1 Element.
 */
export
function _encode_EscapeRegisterCancelResult (value: EscapeRegisterCancelResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EscapeRegisterCancelResult) { _cached_encoder_for_EscapeRegisterCancelResult = $._encode_choice<EscapeRegisterCancelResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_EscapeRegisterCancelResult(value, elGetter);
}


/* eslint-enable */
