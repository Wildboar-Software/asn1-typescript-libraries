/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary RouteRegisterCancelResult
 * @description
 *
 * Positive acknowledgement: `extensions` (security/privateData) or
 * `noData` when those are omitted.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteRegisterCancelResult   ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type RouteRegisterCancelResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RouteRegisterCancelResult: $.ASN1Decoder<RouteRegisterCancelResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteRegisterCancelResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteRegisterCancelResult (el: _Element): RouteRegisterCancelResult {
    if (!_cached_decoder_for_RouteRegisterCancelResult) { _cached_decoder_for_RouteRegisterCancelResult = $._decode_inextensible_choice<RouteRegisterCancelResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_RouteRegisterCancelResult(el);
}

let _cached_encoder_for_RouteRegisterCancelResult: $.ASN1Encoder<RouteRegisterCancelResult> | null = null;

/**
 * @summary Encodes a(n) RouteRegisterCancelResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteRegisterCancelResult, encoded as an ASN.1 Element.
 */
export
function _encode_RouteRegisterCancelResult (value: RouteRegisterCancelResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteRegisterCancelResult) { _cached_encoder_for_RouteRegisterCancelResult = $._encode_choice<RouteRegisterCancelResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_RouteRegisterCancelResult(value, elGetter);
}


/* eslint-enable */
