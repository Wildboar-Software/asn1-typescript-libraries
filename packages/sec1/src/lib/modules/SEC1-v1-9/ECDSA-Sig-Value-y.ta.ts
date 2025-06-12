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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { FieldElement, _decode_FieldElement, _encode_FieldElement } from "../SEC1-v1-9/FieldElement.ta.js";
export { FieldElement, _decode_FieldElement, _encode_FieldElement } from "../SEC1-v1-9/FieldElement.ta.js";


/* START_OF_SYMBOL_DEFINITION ECDSA_Sig_Value_y */
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
/* END_OF_SYMBOL_DEFINITION ECDSA_Sig_Value_y */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ECDSA_Sig_Value_y */
let _cached_decoder_for_ECDSA_Sig_Value_y: $.ASN1Decoder<ECDSA_Sig_Value_y> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ECDSA_Sig_Value_y */

/* START_OF_SYMBOL_DEFINITION _decode_ECDSA_Sig_Value_y */
/**
 * @summary Decodes an ASN.1 element into a(n) ECDSA_Sig_Value_y
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECDSA_Sig_Value_y} The decoded data structure.
 */
export
function _decode_ECDSA_Sig_Value_y (el: _Element) {
    if (!_cached_decoder_for_ECDSA_Sig_Value_y) { _cached_decoder_for_ECDSA_Sig_Value_y = $._decode_inextensible_choice<ECDSA_Sig_Value_y>({
    "UNIVERSAL 1": [ "b", $._decodeBoolean ],
    "UNIVERSAL 4": [ "f", _decode_FieldElement ]
}); }
    return _cached_decoder_for_ECDSA_Sig_Value_y(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ECDSA_Sig_Value_y */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ECDSA_Sig_Value_y */
let _cached_encoder_for_ECDSA_Sig_Value_y: $.ASN1Encoder<ECDSA_Sig_Value_y> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ECDSA_Sig_Value_y */

/* START_OF_SYMBOL_DEFINITION _encode_ECDSA_Sig_Value_y */
/**
 * @summary Encodes a(n) ECDSA_Sig_Value_y into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECDSA_Sig_Value_y, encoded as an ASN.1 Element.
 */
export
function _encode_ECDSA_Sig_Value_y (value: ECDSA_Sig_Value_y, elGetter: $.ASN1Encoder<ECDSA_Sig_Value_y>) {
    if (!_cached_encoder_for_ECDSA_Sig_Value_y) { _cached_encoder_for_ECDSA_Sig_Value_y = $._encode_choice<ECDSA_Sig_Value_y>({
    "b": $._encodeBoolean,
    "f": _encode_FieldElement,
}, $.BER); }
    return _cached_encoder_for_ECDSA_Sig_Value_y(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ECDSA_Sig_Value_y */

/* eslint-enable */
