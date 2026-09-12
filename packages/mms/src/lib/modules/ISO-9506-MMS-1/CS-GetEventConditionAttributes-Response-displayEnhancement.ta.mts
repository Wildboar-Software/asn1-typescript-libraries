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
 * @summary CS_GetEventConditionAttributes_Response_displayEnhancement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CS-GetEventConditionAttributes-Response-displayEnhancement ::= CHOICE {
 *     string [0] IMPLICIT VisibleString,
 *     index [1] IMPLICIT INTEGER,
 *     noEnhancement [2] IMPLICIT NULL
 * }
 * ```
 */
export
type CS_GetEventConditionAttributes_Response_displayEnhancement =
    { string_: VisibleString } /* CHOICE_ALT_ROOT */
    | { index: INTEGER } /* CHOICE_ALT_ROOT */
    | { noEnhancement: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CS_GetEventConditionAttributes_Response_displayEnhancement: $.ASN1Decoder<CS_GetEventConditionAttributes_Response_displayEnhancement> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CS_GetEventConditionAttributes_Response_displayEnhancement
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CS_GetEventConditionAttributes_Response_displayEnhancement (el: _Element): CS_GetEventConditionAttributes_Response_displayEnhancement {
    if (!_cached_decoder_for_CS_GetEventConditionAttributes_Response_displayEnhancement) { _cached_decoder_for_CS_GetEventConditionAttributes_Response_displayEnhancement = $._decode_inextensible_choice<CS_GetEventConditionAttributes_Response_displayEnhancement>({
    "CONTEXT 0": [ "string_", $._decode_implicit<VisibleString>(() => $._decodeVisibleString) ],
    "CONTEXT 1": [ "index", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 2": [ "noEnhancement", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_CS_GetEventConditionAttributes_Response_displayEnhancement(el);
}

let _cached_encoder_for_CS_GetEventConditionAttributes_Response_displayEnhancement: $.ASN1Encoder<CS_GetEventConditionAttributes_Response_displayEnhancement> | null = null;

/**
 * @summary Encodes a(n) CS_GetEventConditionAttributes_Response_displayEnhancement into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CS_GetEventConditionAttributes_Response_displayEnhancement, encoded as an ASN.1 Element.
 */
export
function _encode_CS_GetEventConditionAttributes_Response_displayEnhancement (value: CS_GetEventConditionAttributes_Response_displayEnhancement, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CS_GetEventConditionAttributes_Response_displayEnhancement) { _cached_encoder_for_CS_GetEventConditionAttributes_Response_displayEnhancement = $._encode_choice<CS_GetEventConditionAttributes_Response_displayEnhancement>({
    "string_": $._encode_implicit(_TagClass.context, 0, () => $._encodeVisibleString, $.BER),
    "index": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "noEnhancement": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_CS_GetEventConditionAttributes_Response_displayEnhancement(value, elGetter);
}


/* eslint-enable */
