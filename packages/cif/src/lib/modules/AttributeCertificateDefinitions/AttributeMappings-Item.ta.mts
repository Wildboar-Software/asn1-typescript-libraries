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
import { AttributeMappings_Item_typeMappings, _decode_AttributeMappings_Item_typeMappings, _encode_AttributeMappings_Item_typeMappings } from "../AttributeCertificateDefinitions/AttributeMappings-Item-typeMappings.ta.mjs";
// export { AttributeMappings_Item_typeMappings, _decode_AttributeMappings_Item_typeMappings, _encode_AttributeMappings_Item_typeMappings } from "../AttributeCertificateDefinitions/AttributeMappings-Item-typeMappings.ta.mjs";
import { AttributeMappings_Item_typeValueMappings, _decode_AttributeMappings_Item_typeValueMappings, _encode_AttributeMappings_Item_typeValueMappings } from "../AttributeCertificateDefinitions/AttributeMappings-Item-typeValueMappings.ta.mjs";
// export { AttributeMappings_Item_typeValueMappings, _decode_AttributeMappings_Item_typeValueMappings, _encode_AttributeMappings_Item_typeValueMappings } from "../AttributeCertificateDefinitions/AttributeMappings-Item-typeValueMappings.ta.mjs";


/**
 * @summary AttributeMappings_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeMappings-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type AttributeMappings_Item =
    { typeMappings: AttributeMappings_Item_typeMappings } /* CHOICE_ALT_ROOT */
    | { typeValueMappings: AttributeMappings_Item_typeValueMappings } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AttributeMappings_Item: $.ASN1Decoder<AttributeMappings_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeMappings_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeMappings_Item (el: _Element): AttributeMappings_Item {
    if (!_cached_decoder_for_AttributeMappings_Item) { _cached_decoder_for_AttributeMappings_Item = $._decode_inextensible_choice<AttributeMappings_Item>({
    "CONTEXT 0": [ "typeMappings", $._decode_implicit<AttributeMappings_Item_typeMappings>(() => _decode_AttributeMappings_Item_typeMappings) ],
    "CONTEXT 1": [ "typeValueMappings", $._decode_implicit<AttributeMappings_Item_typeValueMappings>(() => _decode_AttributeMappings_Item_typeValueMappings) ]
}); }
    return _cached_decoder_for_AttributeMappings_Item(el);
}

let _cached_encoder_for_AttributeMappings_Item: $.ASN1Encoder<AttributeMappings_Item> | null = null;

/**
 * @summary Encodes a(n) AttributeMappings_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeMappings_Item, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeMappings_Item (value: AttributeMappings_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeMappings_Item) { _cached_encoder_for_AttributeMappings_Item = $._encode_choice<AttributeMappings_Item>({
    "typeMappings": $._encode_implicit(_TagClass.context, 0, () => _encode_AttributeMappings_Item_typeMappings, $.BER),
    "typeValueMappings": $._encode_implicit(_TagClass.context, 1, () => _encode_AttributeMappings_Item_typeValueMappings, $.BER),
}, $.BER); }
    return _cached_encoder_for_AttributeMappings_Item(value, elGetter);
}


/* eslint-enable */
