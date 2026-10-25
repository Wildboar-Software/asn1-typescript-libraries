/* eslint-disable */
import {
    type NULL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary MIDExtensions
 * @description
 *
 * Manufacturer-specific data on an SS-MID argument or
 * result (ECMA-347 §7.3.1). `none` is an explicit empty
 * choice; `extension` is one value; `multipleExtension` is
 * several. `MIDExtSet` defines no extensions. Where the
 * containing component is OPTIONAL, §7.3.1 does not say how
 * `none` differs from omitting it.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MIDExtensions  ::=  CHOICE {
 *     none NULL,
 *     extension [1] IMPLICIT Extension {{MIDExtSet}},
 *     multipleExtension [2] IMPLICIT SEQUENCE OF Extension {{MIDExtSet}}
 * }
 * ```
 */
export
type MIDExtensions =
    { none: NULL } /* CHOICE_ALT_ROOT */
    | { extension: Extension } /* CHOICE_ALT_ROOT */
    | { multipleExtension: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MIDExtensions: $.ASN1Decoder<MIDExtensions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MIDExtensions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MIDExtensions (el: _Element): MIDExtensions {
    if (!_cached_decoder_for_MIDExtensions) { _cached_decoder_for_MIDExtensions = $._decode_inextensible_choice<MIDExtensions>({
    "UNIVERSAL 5": [ "none", $._decodeNull ],
    "CONTEXT 1": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 2": [ "multipleExtension", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_MIDExtensions(el);
}

let _cached_encoder_for_MIDExtensions: $.ASN1Encoder<MIDExtensions> | null = null;

/**
 * @summary Encodes a(n) MIDExtensions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MIDExtensions, encoded as an ASN.1 Element.
 */
export
function _encode_MIDExtensions (value: MIDExtensions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MIDExtensions) { _cached_encoder_for_MIDExtensions = $._encode_choice<MIDExtensions>({
    "none": $._encodeNull,
    "extension": $._encode_implicit(_TagClass.context, 1, () => _encode_Extension, $.BER),
    "multipleExtension": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_MIDExtensions(value, elGetter);
}

/* eslint-enable */
