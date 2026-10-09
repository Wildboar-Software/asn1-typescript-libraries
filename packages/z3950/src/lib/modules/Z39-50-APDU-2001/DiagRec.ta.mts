/* eslint-disable */
import {
    EXTERNAL,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DefaultDiagFormat, _decode_DefaultDiagFormat, _encode_DefaultDiagFormat } from "../Z39-50-APDU-2001/DefaultDiagFormat.ta.mjs";


/**
 * @summary DiagRec
 * @description
 *
 * One diagnostic record, used as a surrogate (in place of a retrieval
 * record) or as a non-surrogate (the operation cannot be processed).
 * `defaultFormat` must be chosen when version 2 is in effect.
 * `externallyDefined` is the external diagnostic form and is a
 * version-3 feature. When search status or present status is failure,
 * at least one non-surrogate is required; version 2 supplies exactly
 * one. §3.2.2.1.7, §4.4.2.1 items 17 and 18.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagRec  ::=  CHOICE {
 *     defaultFormat               DefaultDiagFormat,
 *     -- Must choose defaultFormat if version 2 is in effect
 *     externallyDefined           EXTERNAL
 * }
 * ```
 */
export
type DiagRec =
    { defaultFormat: DefaultDiagFormat } /* CHOICE_ALT_ROOT */
    | { externallyDefined: EXTERNAL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DiagRec: $.ASN1Decoder<DiagRec> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagRec
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagRec (el: _Element): DiagRec {
    if (!_cached_decoder_for_DiagRec) { _cached_decoder_for_DiagRec = $._decode_inextensible_choice<DiagRec>({
    "UNIVERSAL 16": [ "defaultFormat", _decode_DefaultDiagFormat ],
    "UNIVERSAL 8": [ "externallyDefined", $._decodeExternal ]
}); }
    return _cached_decoder_for_DiagRec(el);
}

let _cached_encoder_for_DiagRec: $.ASN1Encoder<DiagRec> | null = null;

/**
 * @summary Encodes a(n) DiagRec into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagRec, encoded as an ASN.1 Element.
 */
export
function _encode_DiagRec (value: DiagRec, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagRec) { _cached_encoder_for_DiagRec = $._encode_choice<DiagRec>({
    "defaultFormat": _encode_DefaultDiagFormat,
    "externallyDefined": $._encodeExternal,
}, $.BER); }
    return _cached_encoder_for_DiagRec(value, elGetter);
}


/* eslint-enable */
