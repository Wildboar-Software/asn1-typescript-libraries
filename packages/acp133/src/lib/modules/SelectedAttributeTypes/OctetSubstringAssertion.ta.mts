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
import { OctetSubstringAssertion_Item, _decode_OctetSubstringAssertion_Item, _encode_OctetSubstringAssertion_Item } from "../SelectedAttributeTypes/OctetSubstringAssertion-Item.ta.mjs";
// export { OctetSubstringAssertion_Item, _decode_OctetSubstringAssertion_Item, _encode_OctetSubstringAssertion_Item } from "../SelectedAttributeTypes/OctetSubstringAssertion-Item.ta.mjs";


/**
 * @summary OctetSubstringAssertion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OctetSubstringAssertion  ::=  SEQUENCE OF CHOICE {
 *   initial  [0]  OCTET STRING,
 *   any      [1]  OCTET STRING,
 *   final    [2]  OCTET STRING,
 *   ... }
 * ```
 */
export
type OctetSubstringAssertion = OctetSubstringAssertion_Item[]; // SequenceOfType

let _cached_decoder_for_OctetSubstringAssertion: $.ASN1Decoder<OctetSubstringAssertion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OctetSubstringAssertion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OctetSubstringAssertion (el: _Element): OctetSubstringAssertion {
    if (!_cached_decoder_for_OctetSubstringAssertion) { _cached_decoder_for_OctetSubstringAssertion = $._decodeSequenceOf<OctetSubstringAssertion_Item>(() => _decode_OctetSubstringAssertion_Item); }
    return _cached_decoder_for_OctetSubstringAssertion(el);
}

let _cached_encoder_for_OctetSubstringAssertion: $.ASN1Encoder<OctetSubstringAssertion> | null = null;

/**
 * @summary Encodes a(n) OctetSubstringAssertion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OctetSubstringAssertion, encoded as an ASN.1 Element.
 */
export
function _encode_OctetSubstringAssertion (value: OctetSubstringAssertion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OctetSubstringAssertion) { _cached_encoder_for_OctetSubstringAssertion = $._encodeSequenceOf<OctetSubstringAssertion_Item>(() => _encode_OctetSubstringAssertion_Item, $.BER); }
    return _cached_encoder_for_OctetSubstringAssertion(value, elGetter);
}


/* eslint-enable */
