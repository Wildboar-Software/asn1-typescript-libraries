/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
import { NameArg_nameSequence, _decode_NameArg_nameSequence, _encode_NameArg_nameSequence } from "../Name-Operations-asn1-97/NameArg-nameSequence.ta.mjs";

/**
 * @summary NameArg
 * @description
 *
 * Argument of `callingName`, `calledName`, `connectedName`, and `busyName`
 * (ECMA-164 §6.1). `name` is the name alone. `nameSequence` is the same name
 * plus an optional manufacturer-specific extension. The procedures select
 * `namePresentationAllowed`, `namePresentationRestricted`, or
 * `nameNotAvailable` and do not say when to use `name` rather than
 * `nameSequence` (§7.4, §8.4).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-164/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameArg  ::=  CHOICE {
 *     name Name,
 *     nameSequence SEQUENCE {
 *         name Name,
 *         extension NameExtension OPTIONAL
 *     }
 * }
 * ```
 */
export
type NameArg =
    { name: Name } /* CHOICE_ALT_ROOT */
    | { nameSequence: NameArg_nameSequence } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_NameArg: $.ASN1Decoder<NameArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NameArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NameArg (el: _Element): NameArg {
    if (!_cached_decoder_for_NameArg) { _cached_decoder_for_NameArg = $._decode_inextensible_choice<NameArg>({
    "CONTEXT 0": [ "name", _decode_Name ],
    "CONTEXT 1": [ "name", _decode_Name ],
    "CONTEXT 2": [ "name", _decode_Name ],
    "CONTEXT 3": [ "name", _decode_Name ],
    "CONTEXT 7": [ "name", _decode_Name ],
    "CONTEXT 4": [ "name", _decode_Name ],
    "UNIVERSAL 16": [ "nameSequence", _decode_NameArg_nameSequence ]
}); }
    return _cached_decoder_for_NameArg(el);
}

let _cached_encoder_for_NameArg: $.ASN1Encoder<NameArg> | null = null;

/**
 * @summary Encodes a(n) NameArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameArg, encoded as an ASN.1 Element.
 */
export
function _encode_NameArg (value: NameArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NameArg) { _cached_encoder_for_NameArg = $._encode_choice<NameArg>({
    "name": _encode_Name,
    "nameSequence": _encode_NameArg_nameSequence,
}, $.BER); }
    return _cached_encoder_for_NameArg(value, elGetter);
}

/* eslint-enable */
