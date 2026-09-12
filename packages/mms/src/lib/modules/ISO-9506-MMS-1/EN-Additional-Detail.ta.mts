/* eslint-disable */
import {
    INTEGER,
    NULL,
    VisibleString,
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
 * @summary EN_Additional_Detail
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EN-Additional-Detail  ::=         [0] CHOICE {
 *    string                           [0] IMPLICIT VisibleString,
 *    index                            [1] IMPLICIT INTEGER,
 *    noEnhancement                    NULL   }
 * ```
 */
export
type EN_Additional_Detail =
    { string_: VisibleString } /* CHOICE_ALT_ROOT */
    | { index: INTEGER } /* CHOICE_ALT_ROOT */
    | { noEnhancement: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EN_Additional_Detail: $.ASN1Decoder<EN_Additional_Detail> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EN_Additional_Detail
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EN_Additional_Detail (el: _Element): EN_Additional_Detail {
    if (!_cached_decoder_for_EN_Additional_Detail) { _cached_decoder_for_EN_Additional_Detail = $._decode_explicit<EN_Additional_Detail>(() => $._decode_inextensible_choice<EN_Additional_Detail>({
    "CONTEXT 0": [ "string_", $._decode_implicit<VisibleString>(() => $._decodeVisibleString) ],
    "CONTEXT 1": [ "index", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "UNIVERSAL 5": [ "noEnhancement", $._decodeNull ]
})); }
    return _cached_decoder_for_EN_Additional_Detail(el);
}

let _cached_encoder_for_EN_Additional_Detail: $.ASN1Encoder<EN_Additional_Detail> | null = null;

/**
 * @summary Encodes a(n) EN_Additional_Detail into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EN_Additional_Detail, encoded as an ASN.1 Element.
 */
export
function _encode_EN_Additional_Detail (value: EN_Additional_Detail, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EN_Additional_Detail) { _cached_encoder_for_EN_Additional_Detail = $._encode_explicit(_TagClass.context, 0, () => $._encode_choice<EN_Additional_Detail>({
    "string_": $._encode_implicit(_TagClass.context, 0, () => $._encodeVisibleString, $.BER),
    "index": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "noEnhancement": $._encodeNull,
}, $.BER), $.BER); }
    return _cached_encoder_for_EN_Additional_Detail(value, elGetter);
}


/* eslint-enable */
