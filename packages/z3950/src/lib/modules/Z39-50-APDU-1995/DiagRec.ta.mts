/* eslint-disable */
import {
    ASN1Element as _Element,
    EXTERNAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DefaultDiagFormat, _decode_DefaultDiagFormat, _encode_DefaultDiagFormat } from "./DefaultDiagFormat.ta.mjs";


/**
 * @summary DiagRec
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DiagRec ::= CHOICE {
 *     defaultFormat      DefaultDiagFormat,
 *     externallyDefined  EXTERNAL
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
