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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary UnitControlUpload_Response_nextElement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnitControlUpload-Response-nextElement ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type UnitControlUpload_Response_nextElement =
    { domain: Identifier } /* CHOICE_ALT_ROOT */
    | { ulsmID: INTEGER } /* CHOICE_ALT_ROOT */
    | { programInvocation: Identifier } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_UnitControlUpload_Response_nextElement: $.ASN1Decoder<UnitControlUpload_Response_nextElement> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UnitControlUpload_Response_nextElement
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UnitControlUpload_Response_nextElement (el: _Element): UnitControlUpload_Response_nextElement {
    if (!_cached_decoder_for_UnitControlUpload_Response_nextElement) { _cached_decoder_for_UnitControlUpload_Response_nextElement = $._decode_inextensible_choice<UnitControlUpload_Response_nextElement>({
    "CONTEXT 1": [ "domain", $._decode_explicit<Identifier>(() => _decode_Identifier) ],
    "CONTEXT 2": [ "ulsmID", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 3": [ "programInvocation", $._decode_explicit<Identifier>(() => _decode_Identifier) ]
}); }
    return _cached_decoder_for_UnitControlUpload_Response_nextElement(el);
}

let _cached_encoder_for_UnitControlUpload_Response_nextElement: $.ASN1Encoder<UnitControlUpload_Response_nextElement> | null = null;

/**
 * @summary Encodes a(n) UnitControlUpload_Response_nextElement into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnitControlUpload_Response_nextElement, encoded as an ASN.1 Element.
 */
export
function _encode_UnitControlUpload_Response_nextElement (value: UnitControlUpload_Response_nextElement, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UnitControlUpload_Response_nextElement) { _cached_encoder_for_UnitControlUpload_Response_nextElement = $._encode_choice<UnitControlUpload_Response_nextElement>({
    "domain": $._encode_explicit(_TagClass.context, 1, () => _encode_Identifier, $.BER),
    "ulsmID": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
    "programInvocation": $._encode_explicit(_TagClass.context, 3, () => _encode_Identifier, $.BER),
}, $.BER); }
    return _cached_encoder_for_UnitControlUpload_Response_nextElement(value, elGetter);
}


/* eslint-enable */
