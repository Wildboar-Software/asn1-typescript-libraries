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
import { KeyDerivationMethod, _decode_KeyDerivationMethod, _encode_KeyDerivationMethod } from "../ANSI-X9-42/KeyDerivationMethod.ta.mjs";
// export { KeyDerivationMethod, _decode_KeyDerivationMethod, _encode_KeyDerivationMethod } from "../ANSI-X9-42/KeyDerivationMethod.ta.mjs";
import { SchemeIdentifier, _decode_SchemeIdentifier, _encode_SchemeIdentifier } from "../ANSI-X9-42/SchemeIdentifier.ta.mjs";
// export { SchemeIdentifier, _decode_SchemeIdentifier, _encode_SchemeIdentifier } from "../ANSI-X9-42/SchemeIdentifier.ta.mjs";
import { SchemeOID, _decode_SchemeOID, _encode_SchemeOID } from "../ANSI-X9-42/SchemeOID.ta.mjs";
// export { SchemeOID, _decode_SchemeOID, _encode_SchemeOID } from "../ANSI-X9-42/SchemeOID.ta.mjs";
import { SchemeNumber, _enum_for_SchemeNumber, SchemeNumber_dhStatic_sha1 /* IMPORTED_LONG_ENUMERATION_ITEM */, dhStatic_sha1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, SchemeNumber_dhEphem_sha1 /* IMPORTED_LONG_ENUMERATION_ITEM */, dhEphem_sha1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, SchemeNumber_dhOneFlow_sha1 /* IMPORTED_LONG_ENUMERATION_ITEM */, dhOneFlow_sha1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, SchemeNumber_dhHybrid1_sha1 /* IMPORTED_LONG_ENUMERATION_ITEM */, dhHybrid1_sha1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, SchemeNumber_dhHybrid2_sha1 /* IMPORTED_LONG_ENUMERATION_ITEM */, dhHybrid2_sha1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, SchemeNumber_dhHybridOneFlow_sha1 /* IMPORTED_LONG_ENUMERATION_ITEM */, dhHybridOneFlow_sha1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, SchemeNumber_mqv2_sha1 /* IMPORTED_LONG_ENUMERATION_ITEM */, mqv2_sha1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, SchemeNumber_mqv1_sha1 /* IMPORTED_LONG_ENUMERATION_ITEM */, mqv1_sha1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SchemeNumber, _encode_SchemeNumber } from "../ANSI-X9-42/SchemeNumber.ta.mjs";
// export { SchemeNumber, _enum_for_SchemeNumber, SchemeNumber_dhStatic_sha1 /* IMPORTED_LONG_ENUMERATION_ITEM */, dhStatic_sha1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, SchemeNumber_dhEphem_sha1 /* IMPORTED_LONG_ENUMERATION_ITEM */, dhEphem_sha1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, SchemeNumber_dhOneFlow_sha1 /* IMPORTED_LONG_ENUMERATION_ITEM */, dhOneFlow_sha1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, SchemeNumber_dhHybrid1_sha1 /* IMPORTED_LONG_ENUMERATION_ITEM */, dhHybrid1_sha1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, SchemeNumber_dhHybrid2_sha1 /* IMPORTED_LONG_ENUMERATION_ITEM */, dhHybrid2_sha1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, SchemeNumber_dhHybridOneFlow_sha1 /* IMPORTED_LONG_ENUMERATION_ITEM */, dhHybridOneFlow_sha1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, SchemeNumber_mqv2_sha1 /* IMPORTED_LONG_ENUMERATION_ITEM */, mqv2_sha1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, SchemeNumber_mqv1_sha1 /* IMPORTED_LONG_ENUMERATION_ITEM */, mqv1_sha1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SchemeNumber, _encode_SchemeNumber } from "../ANSI-X9-42/SchemeNumber.ta.mjs";


/**
 * @summary SchemeSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SchemeSyntax { KeyDerivationMethod: kdm }  ::=  CHOICE {
 * schemeId     SchemeIdentifier,
 * oid            SchemeOID,
 * number    SchemeNumber
 * } (CONSTRAINED BY { KeyDerivationMethod: kdm } )
 * ```
 */
export
type SchemeSyntax =
    { schemeId: SchemeIdentifier } /* CHOICE_ALT_ROOT */
    | { oid: SchemeOID } /* CHOICE_ALT_ROOT */
    | { number_: SchemeNumber } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SchemeSyntax: $.ASN1Decoder<SchemeSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SchemeSyntax
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SchemeSyntax (el: _Element): SchemeSyntax {
    if (!_cached_decoder_for_SchemeSyntax) { _cached_decoder_for_SchemeSyntax = $._decode_inextensible_choice<SchemeSyntax>({
    "UNIVERSAL 16": [ "schemeId", _decode_SchemeIdentifier ],
    "UNIVERSAL 6": [ "oid", _decode_SchemeOID ],
    "UNIVERSAL 10": [ "number_", _decode_SchemeNumber ]
}); }
    return _cached_decoder_for_SchemeSyntax(el);
}

let _cached_encoder_for_SchemeSyntax: $.ASN1Encoder<SchemeSyntax> | null = null;

/**
 * @summary Encodes a(n) SchemeSyntax into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SchemeSyntax, encoded as an ASN.1 Element.
 */
export
function _encode_SchemeSyntax (value: SchemeSyntax, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SchemeSyntax) { _cached_encoder_for_SchemeSyntax = $._encode_choice<SchemeSyntax>({
    "schemeId": _encode_SchemeIdentifier,
    "oid": _encode_SchemeOID,
    "number_": _encode_SchemeNumber,
}, $.BER); }
    return _cached_encoder_for_SchemeSyntax(value, elGetter);
}


/* eslint-enable */
