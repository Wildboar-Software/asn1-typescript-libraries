/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetSwitchingFunctionCapsArgument
 * @description
 *
 * Service request (ECMA-269 Table 13-8). `extensions` carries
 * security/privateData; `noData` is an empty request.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetSwitchingFunctionCapsArgument  ::=  CHOICE
 * {     extensions         CSTACommonArguments,
 *     noData             NULL }
 * ```
 */
export
type GetSwitchingFunctionCapsArgument =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GetSwitchingFunctionCapsArgument: $.ASN1Decoder<GetSwitchingFunctionCapsArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetSwitchingFunctionCapsArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetSwitchingFunctionCapsArgument (el: _Element): GetSwitchingFunctionCapsArgument {
    if (!_cached_decoder_for_GetSwitchingFunctionCapsArgument) { _cached_decoder_for_GetSwitchingFunctionCapsArgument = $._decode_inextensible_choice<GetSwitchingFunctionCapsArgument>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_GetSwitchingFunctionCapsArgument(el);
}

let _cached_encoder_for_GetSwitchingFunctionCapsArgument: $.ASN1Encoder<GetSwitchingFunctionCapsArgument> | null = null;

/**
 * @summary Encodes a(n) GetSwitchingFunctionCapsArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetSwitchingFunctionCapsArgument, encoded as an ASN.1 Element.
 */
export
function _encode_GetSwitchingFunctionCapsArgument (value: GetSwitchingFunctionCapsArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetSwitchingFunctionCapsArgument) { _cached_encoder_for_GetSwitchingFunctionCapsArgument = $._encode_choice<GetSwitchingFunctionCapsArgument>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_GetSwitchingFunctionCapsArgument(value, elGetter);
}


/* eslint-enable */
