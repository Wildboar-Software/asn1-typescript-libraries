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
import { Dn, _decode_Dn, _encode_Dn } from "../AIN-Parameters/Dn.ta.mjs";
// export { Dn, _decode_Dn, _encode_Dn } from "../AIN-Parameters/Dn.ta.mjs";
import { PrivateDn, _enum_for_PrivateDn, PrivateDn_private /* IMPORTED_LONG_ENUMERATION_ITEM */, private_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PrivateDn, _encode_PrivateDn } from "../AIN-Parameters/PrivateDn.ta.mjs";
// export { PrivateDn, _enum_for_PrivateDn, PrivateDn_private /* IMPORTED_LONG_ENUMERATION_ITEM */, private_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PrivateDn, _encode_PrivateDn } from "../AIN-Parameters/PrivateDn.ta.mjs";


/**
 * @summary Entry2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Entry2  ::=  CHOICE{
 *         dn [1] IMPLICIT Dn, --see Section 6.151 for the encoding
 *         privateDn [2] IMPLICIT PrivateDn
 *     }
 * ```
 */
export
type Entry2 =
    { dn: Dn } /* CHOICE_ALT_ROOT */
    | { privateDn: PrivateDn } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Entry2: $.ASN1Decoder<Entry2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Entry2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Entry2 (el: _Element): Entry2 {
    if (!_cached_decoder_for_Entry2) { _cached_decoder_for_Entry2 = $._decode_inextensible_choice<Entry2>({
    "CONTEXT 1": [ "dn", $._decode_implicit<Dn>(() => _decode_Dn) ],
    "CONTEXT 2": [ "privateDn", $._decode_implicit<PrivateDn>(() => _decode_PrivateDn) ]
}); }
    return _cached_decoder_for_Entry2(el);
}

let _cached_encoder_for_Entry2: $.ASN1Encoder<Entry2> | null = null;

/**
 * @summary Encodes a(n) Entry2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Entry2, encoded as an ASN.1 Element.
 */
export
function _encode_Entry2 (value: Entry2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Entry2) { _cached_encoder_for_Entry2 = $._encode_choice<Entry2>({
    "dn": $._encode_implicit(_TagClass.context, 1, () => _encode_Dn, $.BER),
    "privateDn": $._encode_implicit(_TagClass.context, 2, () => _encode_PrivateDn, $.BER),
}, $.BER); }
    return _cached_encoder_for_Entry2(value, elGetter);
}


/* eslint-enable */
