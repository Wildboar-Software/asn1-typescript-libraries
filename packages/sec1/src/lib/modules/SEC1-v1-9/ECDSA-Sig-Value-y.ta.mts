/* eslint-disable */
import {
    BOOLEAN,
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
import { FieldElement, _decode_FieldElement, _encode_FieldElement } from "../SEC1-v1-9/FieldElement.ta.mjs";
/**
 * @summary ECDSA_Sig_Value_y
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECDSA-Sig-Value-y ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ECDSA_Sig_Value_y =
    { b: BOOLEAN } /* CHOICE_ALT_ROOT */
    | { f: FieldElement } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ECDSA_Sig_Value_y: $.ASN1Decoder<ECDSA_Sig_Value_y> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ECDSA_Sig_Value_y
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECDSA_Sig_Value_y} The decoded data structure.
 */
export
function _decode_ECDSA_Sig_Value_y (el: _Element): ECDSA_Sig_Value_y {
    if (!_cached_decoder_for_ECDSA_Sig_Value_y) { _cached_decoder_for_ECDSA_Sig_Value_y = $._decode_inextensible_choice<ECDSA_Sig_Value_y>({
    "UNIVERSAL 1": [ "b", $._decodeBoolean ],
    "UNIVERSAL 4": [ "f", _decode_FieldElement ]
}); }
    return _cached_decoder_for_ECDSA_Sig_Value_y(el);
}

let _cached_encoder_for_ECDSA_Sig_Value_y: $.ASN1Encoder<ECDSA_Sig_Value_y> | null = null;

/**
 * @summary Encodes a(n) ECDSA_Sig_Value_y into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECDSA_Sig_Value_y, encoded as an ASN.1 Element.
 */
export
function _encode_ECDSA_Sig_Value_y (value: ECDSA_Sig_Value_y, elGetter: $.ASN1Encoder<ECDSA_Sig_Value_y>): _Element {
    if (!_cached_encoder_for_ECDSA_Sig_Value_y) { _cached_encoder_for_ECDSA_Sig_Value_y = $._encode_choice<ECDSA_Sig_Value_y>({
    "b": $._encodeBoolean,
    "f": _encode_FieldElement,
}, $.DER); }
    return _cached_encoder_for_ECDSA_Sig_Value_y(value, elGetter);
}


/* eslint-enable */
