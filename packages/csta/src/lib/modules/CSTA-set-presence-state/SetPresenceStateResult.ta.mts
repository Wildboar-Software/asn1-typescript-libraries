/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SetPresenceStateResult
 * @description
 *
 * Positive ack. `noData` if only the ROSE result is needed; `extensions`
 * carries `security`/`privateData`. ECMA-269 §22.1.21.2.1.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetPresenceStateResult  ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type SetPresenceStateResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SetPresenceStateResult: $.ASN1Decoder<SetPresenceStateResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetPresenceStateResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetPresenceStateResult (el: _Element): SetPresenceStateResult {
    if (!_cached_decoder_for_SetPresenceStateResult) { _cached_decoder_for_SetPresenceStateResult = $._decode_inextensible_choice<SetPresenceStateResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_SetPresenceStateResult(el);
}

let _cached_encoder_for_SetPresenceStateResult: $.ASN1Encoder<SetPresenceStateResult> | null = null;

/**
 * @summary Encodes a(n) SetPresenceStateResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetPresenceStateResult, encoded as an ASN.1 Element.
 */
export
function _encode_SetPresenceStateResult (value: SetPresenceStateResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetPresenceStateResult) { _cached_encoder_for_SetPresenceStateResult = $._encode_choice<SetPresenceStateResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_SetPresenceStateResult(value, elGetter);
}


/* eslint-enable */
