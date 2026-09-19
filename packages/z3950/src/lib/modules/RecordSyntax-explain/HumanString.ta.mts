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
import { HumanString_Item, _decode_HumanString_Item, _encode_HumanString_Item } from "../RecordSyntax-explain/HumanString-Item.ta.mjs";
// export { HumanString_Item, _decode_HumanString_Item, _encode_HumanString_Item } from "../RecordSyntax-explain/HumanString-Item.ta.mjs";


/**
 * @summary HumanString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HumanString  ::=  SEQUENCE OF SEQUENCE {
 *              language     [0] IMPLICIT LanguageCode OPTIONAL,
 *              text         [1] IMPLICIT InternationalString}
 * ```
 */
export
type HumanString = HumanString_Item[]; // SequenceOfType

let _cached_decoder_for_HumanString: $.ASN1Decoder<HumanString> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HumanString
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HumanString (el: _Element): HumanString {
    if (!_cached_decoder_for_HumanString) { _cached_decoder_for_HumanString = $._decodeSequenceOf<HumanString_Item>(() => _decode_HumanString_Item); }
    return _cached_decoder_for_HumanString(el);
}

let _cached_encoder_for_HumanString: $.ASN1Encoder<HumanString> | null = null;

/**
 * @summary Encodes a(n) HumanString into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HumanString, encoded as an ASN.1 Element.
 */
export
function _encode_HumanString (value: HumanString, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HumanString) { _cached_encoder_for_HumanString = $._encodeSequenceOf<HumanString_Item>(() => _encode_HumanString_Item, $.BER); }
    return _cached_encoder_for_HumanString(value, elGetter);
}


/* eslint-enable */
