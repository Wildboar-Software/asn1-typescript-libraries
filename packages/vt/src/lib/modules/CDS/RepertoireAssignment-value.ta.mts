/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RepertoireAssignment_value
 * @description
 *
 * Repertoire designation. `iso2022`: SEQUENCE OF OCTET STRING —
 * up to four ISO/IEC 2022 escape sequences with `<ESC>` omitted
 * (used when `type` is absent or `{vt-b-rep-iso2022}`). `isonnnn`:
 * ANY resolved by `type`. Default repertoire is IRV of ISO/IEC 646
 * (`2/8 4/0`). ISO/IEC 9040:1997 §18.2.4; ISO/IEC 9041-1:1997
 * §12.3.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RepertoireAssignment-value ::= CHOICE {
 *     iso2022 [1] IMPLICIT SEQUENCE OF OCTET STRING,
 *     isonnnn [2] ANY
 * }
 * ```
 */
export
type RepertoireAssignment_value =
    { iso2022: OCTET_STRING[] } /* CHOICE_ALT_ROOT */
    | { isonnnn: _Element } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RepertoireAssignment_value: $.ASN1Decoder<RepertoireAssignment_value> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RepertoireAssignment_value
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RepertoireAssignment_value (el: _Element): RepertoireAssignment_value {
    if (!_cached_decoder_for_RepertoireAssignment_value) { _cached_decoder_for_RepertoireAssignment_value = $._decode_inextensible_choice<RepertoireAssignment_value>({
    "CONTEXT 1": [ "iso2022", $._decode_implicit<OCTET_STRING[]>(() => $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString)) ],
    "CONTEXT 2": [ "isonnnn", $._decode_explicit<_Element>(() => $._decodeAny) ]
}); }
    return _cached_decoder_for_RepertoireAssignment_value(el);
}

let _cached_encoder_for_RepertoireAssignment_value: $.ASN1Encoder<RepertoireAssignment_value> | null = null;

/**
 * @summary Encodes a(n) RepertoireAssignment_value into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RepertoireAssignment_value, encoded as an ASN.1 Element.
 */
export
function _encode_RepertoireAssignment_value (value: RepertoireAssignment_value, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RepertoireAssignment_value) { _cached_encoder_for_RepertoireAssignment_value = $._encode_choice<RepertoireAssignment_value>({
    "iso2022": $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.BER), $.BER),
    "isonnnn": $._encode_explicit(_TagClass.context, 2, () => $._encodeAny, $.BER),
}, $.BER); }
    return _cached_encoder_for_RepertoireAssignment_value(value, elGetter);
}


/* eslint-enable */
