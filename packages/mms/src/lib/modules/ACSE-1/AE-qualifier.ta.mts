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
import { AE_qualifier_form1, _decode_AE_qualifier_form1, _encode_AE_qualifier_form1 } from "../ACSE-1/AE-qualifier-form1.ta.mjs";
// export { AE_qualifier_form1, _decode_AE_qualifier_form1, _encode_AE_qualifier_form1 } from "../ACSE-1/AE-qualifier-form1.ta.mjs";
import { AE_qualifier_form2, _decode_AE_qualifier_form2, _encode_AE_qualifier_form2 } from "../ACSE-1/AE-qualifier-form2.ta.mjs";
// export { AE_qualifier_form2, _decode_AE_qualifier_form2, _encode_AE_qualifier_form2 } from "../ACSE-1/AE-qualifier-form2.ta.mjs";


/**
 * @summary AE_qualifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AE-qualifier  ::=  CHOICE {
 *   ae-qualifier-form1  AE-qualifier-form1,
 *   ae-qualifier-form2  AE-qualifier-form2,
 *   ...
 * }
 * ```
 */
export
type AE_qualifier =
    { ae_qualifier_form1: AE_qualifier_form1 } /* CHOICE_ALT_ROOT */
    | { ae_qualifier_form2: AE_qualifier_form2 } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_AE_qualifier: $.ASN1Decoder<AE_qualifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AE_qualifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AE_qualifier (el: _Element): AE_qualifier {
    if (!_cached_decoder_for_AE_qualifier) { _cached_decoder_for_AE_qualifier = $._decode_extensible_choice<AE_qualifier>({
    "// FIXME: COULD_NOT_COMPILE_TAG_KEY": [ "ae-qualifier-form1", _decode_AE_qualifier_form1 ],
    "UNIVERSAL 2": [ "ae_qualifier_form2", _decode_AE_qualifier_form2 ]
}); }
    return _cached_decoder_for_AE_qualifier(el);
}

let _cached_encoder_for_AE_qualifier: $.ASN1Encoder<AE_qualifier> | null = null;

/**
 * @summary Encodes a(n) AE_qualifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AE_qualifier, encoded as an ASN.1 Element.
 */
export
function _encode_AE_qualifier (value: AE_qualifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AE_qualifier) { _cached_encoder_for_AE_qualifier = $._encode_choice<AE_qualifier>({
    "ae_qualifier_form1": _encode_AE_qualifier_form1,
    "ae_qualifier_form2": _encode_AE_qualifier_form2,
}, $.BER); }
    return _cached_encoder_for_AE_qualifier(value, elGetter);
}


/* eslint-enable */
