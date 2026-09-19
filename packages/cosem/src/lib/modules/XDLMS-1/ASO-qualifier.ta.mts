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
import { ASO_qualifier_form1, _decode_ASO_qualifier_form1, _encode_ASO_qualifier_form1 } from "../XDLMS-1/ASO-qualifier-form1.ta.mjs";
// export { ASO_qualifier_form1, _decode_ASO_qualifier_form1, _encode_ASO_qualifier_form1 } from "../XDLMS-1/ASO-qualifier-form1.ta.mjs";
import { ASO_qualifier_form2, _decode_ASO_qualifier_form2, _encode_ASO_qualifier_form2 } from "../XDLMS-1/ASO-qualifier-form2.ta.mjs";
// export { ASO_qualifier_form2, _decode_ASO_qualifier_form2, _encode_ASO_qualifier_form2 } from "../XDLMS-1/ASO-qualifier-form2.ta.mjs";
import { ASO_qualifier_form3, _decode_ASO_qualifier_form3, _encode_ASO_qualifier_form3 } from "../XDLMS-1/ASO-qualifier-form3.ta.mjs";
// export { ASO_qualifier_form3, _decode_ASO_qualifier_form3, _encode_ASO_qualifier_form3 } from "../XDLMS-1/ASO-qualifier-form3.ta.mjs";
import { ASO_qualifier_form_octets, _decode_ASO_qualifier_form_octets, _encode_ASO_qualifier_form_octets } from "../XDLMS-1/ASO-qualifier-form-octets.ta.mjs";
// export { ASO_qualifier_form_octets, _decode_ASO_qualifier_form_octets, _encode_ASO_qualifier_form_octets } from "../XDLMS-1/ASO-qualifier-form-octets.ta.mjs";


/**
 * @summary ASO_qualifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ASO-qualifier  ::=  CHOICE {
 *   aso-qualifier-form1  ASO-qualifier-form1,
 *   aso-qualifier-form2  ASO-qualifier-form2,
 *   ...,
 *   aso-qualifier-form3  ASO-qualifier-form3,
 * -- an alternative used by some systems from the days when ASO-qualifier 
 * -- was an ANY
 *   aso-qualifier-form-any-octets  ASO-qualifier-form-octets 
 * }
 * ```
 */
export
type ASO_qualifier =
    { aso_qualifier_form1: ASO_qualifier_form1 } /* CHOICE_ALT_ROOT */
    | { aso_qualifier_form2: ASO_qualifier_form2 } /* CHOICE_ALT_ROOT */
    | { aso_qualifier_form3: ASO_qualifier_form3 } /* CHOICE_ALT_EXT */
    | { aso_qualifier_form_any_octets: ASO_qualifier_form_octets } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ASO_qualifier: $.ASN1Decoder<ASO_qualifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ASO_qualifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ASO_qualifier (el: _Element): ASO_qualifier {
    if (!_cached_decoder_for_ASO_qualifier) { _cached_decoder_for_ASO_qualifier = $._decode_extensible_choice<ASO_qualifier>({
    "UNIVERSAL 17": [ "aso_qualifier_form1", _decode_ASO_qualifier_form1 ],
    "UNIVERSAL 2": [ "aso_qualifier_form2", _decode_ASO_qualifier_form2 ],
    "UNIVERSAL 19": [ "aso_qualifier_form3", _decode_ASO_qualifier_form3 ],
    "UNIVERSAL 4": [ "aso_qualifier_form_any_octets", _decode_ASO_qualifier_form_octets ]
}); }
    return _cached_decoder_for_ASO_qualifier(el);
}

let _cached_encoder_for_ASO_qualifier: $.ASN1Encoder<ASO_qualifier> | null = null;

/**
 * @summary Encodes a(n) ASO_qualifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ASO_qualifier, encoded as an ASN.1 Element.
 */
export
function _encode_ASO_qualifier (value: ASO_qualifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ASO_qualifier) { _cached_encoder_for_ASO_qualifier = $._encode_choice<ASO_qualifier>({
    "aso_qualifier_form1": _encode_ASO_qualifier_form1,
    "aso_qualifier_form2": _encode_ASO_qualifier_form2,
    "aso_qualifier_form3": _encode_ASO_qualifier_form3,
    "aso_qualifier_form_any_octets": _encode_ASO_qualifier_form_octets,
}, $.BER); }
    return _cached_encoder_for_ASO_qualifier(value, elGetter);
}


/* eslint-enable */
