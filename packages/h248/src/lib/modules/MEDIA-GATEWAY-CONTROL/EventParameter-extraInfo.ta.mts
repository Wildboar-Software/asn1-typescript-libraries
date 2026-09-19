/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { Relation, _enum_for_Relation, Relation_greaterThan /* IMPORTED_LONG_ENUMERATION_ITEM */, greaterThan /* IMPORTED_SHORT_ENUMERATION_ITEM */, Relation_smallerThan /* IMPORTED_LONG_ENUMERATION_ITEM */, smallerThan /* IMPORTED_SHORT_ENUMERATION_ITEM */, Relation_unequalTo /* IMPORTED_LONG_ENUMERATION_ITEM */, unequalTo /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Relation, _encode_Relation } from "../MEDIA-GATEWAY-CONTROL/Relation.ta.mjs";
// export { Relation, _enum_for_Relation, Relation_greaterThan /* IMPORTED_LONG_ENUMERATION_ITEM */, greaterThan /* IMPORTED_SHORT_ENUMERATION_ITEM */, Relation_smallerThan /* IMPORTED_LONG_ENUMERATION_ITEM */, smallerThan /* IMPORTED_SHORT_ENUMERATION_ITEM */, Relation_unequalTo /* IMPORTED_LONG_ENUMERATION_ITEM */, unequalTo /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Relation, _encode_Relation } from "../MEDIA-GATEWAY-CONTROL/Relation.ta.mjs";


/**
 * @summary EventParameter_extraInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventParameter-extraInfo ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EventParameter_extraInfo =
    { relation: Relation } /* CHOICE_ALT_ROOT */
    | { range: BOOLEAN } /* CHOICE_ALT_ROOT */
    | { sublist: BOOLEAN } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EventParameter_extraInfo: $.ASN1Decoder<EventParameter_extraInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventParameter_extraInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventParameter_extraInfo (el: _Element): EventParameter_extraInfo {
    if (!_cached_decoder_for_EventParameter_extraInfo) { _cached_decoder_for_EventParameter_extraInfo = $._decode_inextensible_choice<EventParameter_extraInfo>({
    "CONTEXT 0": [ "relation", $._decode_implicit<Relation>(() => _decode_Relation) ],
    "CONTEXT 1": [ "range", $._decode_implicit<BOOLEAN>(() => $._decodeBoolean) ],
    "CONTEXT 2": [ "sublist", $._decode_implicit<BOOLEAN>(() => $._decodeBoolean) ]
}); }
    return _cached_decoder_for_EventParameter_extraInfo(el);
}

let _cached_encoder_for_EventParameter_extraInfo: $.ASN1Encoder<EventParameter_extraInfo> | null = null;

/**
 * @summary Encodes a(n) EventParameter_extraInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventParameter_extraInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EventParameter_extraInfo (value: EventParameter_extraInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventParameter_extraInfo) { _cached_encoder_for_EventParameter_extraInfo = $._encode_choice<EventParameter_extraInfo>({
    "relation": $._encode_implicit(_TagClass.context, 0, () => _encode_Relation, $.BER),
    "range": $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER),
    "sublist": $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER),
}, $.BER); }
    return _cached_encoder_for_EventParameter_extraInfo(value, elGetter);
}


/* eslint-enable */
