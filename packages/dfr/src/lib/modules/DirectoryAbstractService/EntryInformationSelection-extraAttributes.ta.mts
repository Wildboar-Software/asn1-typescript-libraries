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
import { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
// export { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";


/**
 * @summary EntryInformationSelection_extraAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntryInformationSelection-extraAttributes ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EntryInformationSelection_extraAttributes =
    { allOperationalAttributes: NULL } /* CHOICE_ALT_ROOT */
    | { select: AttributeType[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EntryInformationSelection_extraAttributes: $.ASN1Decoder<EntryInformationSelection_extraAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntryInformationSelection_extraAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EntryInformationSelection_extraAttributes (el: _Element): EntryInformationSelection_extraAttributes {
    if (!_cached_decoder_for_EntryInformationSelection_extraAttributes) { _cached_decoder_for_EntryInformationSelection_extraAttributes = $._decode_inextensible_choice<EntryInformationSelection_extraAttributes>({
    "CONTEXT 3": [ "allOperationalAttributes", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 4": [ "select", $._decode_implicit<AttributeType[]>(() => $._decodeSetOf<AttributeType>(() => _decode_AttributeType)) ]
}); }
    return _cached_decoder_for_EntryInformationSelection_extraAttributes(el);
}

let _cached_encoder_for_EntryInformationSelection_extraAttributes: $.ASN1Encoder<EntryInformationSelection_extraAttributes> | null = null;

/**
 * @summary Encodes a(n) EntryInformationSelection_extraAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryInformationSelection_extraAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_EntryInformationSelection_extraAttributes (value: EntryInformationSelection_extraAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EntryInformationSelection_extraAttributes) { _cached_encoder_for_EntryInformationSelection_extraAttributes = $._encode_choice<EntryInformationSelection_extraAttributes>({
    "allOperationalAttributes": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
    "select": $._encode_implicit(_TagClass.context, 4, () => $._encodeSetOf<AttributeType>(() => _encode_AttributeType, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_EntryInformationSelection_extraAttributes(value, elGetter);
}


/* eslint-enable */
