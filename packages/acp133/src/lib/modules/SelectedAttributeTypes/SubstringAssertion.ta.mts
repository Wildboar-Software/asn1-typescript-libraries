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
import { SubstringAssertion_Item, _decode_SubstringAssertion_Item, _encode_SubstringAssertion_Item } from "../SelectedAttributeTypes/SubstringAssertion-Item.ta.mjs";
// export { SubstringAssertion_Item, _decode_SubstringAssertion_Item, _encode_SubstringAssertion_Item } from "../SelectedAttributeTypes/SubstringAssertion-Item.ta.mjs";


/**
 * @summary SubstringAssertion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubstringAssertion  ::=  SEQUENCE OF CHOICE {
 *   initial  [0]  UnboundedDirectoryString,
 *   any      [1]  UnboundedDirectoryString,
 *   final    [2]  UnboundedDirectoryString,
 *     -- at most one initial and one final component
 *   control       Attribute{{SupportedAttributes}},
 *     -- Used to specify interpretation of the following items
 *   ... }
 * ```
 */
export
type SubstringAssertion = SubstringAssertion_Item[]; // SequenceOfType

let _cached_decoder_for_SubstringAssertion: $.ASN1Decoder<SubstringAssertion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubstringAssertion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubstringAssertion (el: _Element): SubstringAssertion {
    if (!_cached_decoder_for_SubstringAssertion) { _cached_decoder_for_SubstringAssertion = $._decodeSequenceOf<SubstringAssertion_Item>(() => _decode_SubstringAssertion_Item); }
    return _cached_decoder_for_SubstringAssertion(el);
}

let _cached_encoder_for_SubstringAssertion: $.ASN1Encoder<SubstringAssertion> | null = null;

/**
 * @summary Encodes a(n) SubstringAssertion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubstringAssertion, encoded as an ASN.1 Element.
 */
export
function _encode_SubstringAssertion (value: SubstringAssertion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubstringAssertion) { _cached_encoder_for_SubstringAssertion = $._encodeSequenceOf<SubstringAssertion_Item>(() => _encode_SubstringAssertion_Item, $.BER); }
    return _cached_encoder_for_SubstringAssertion(value, elGetter);
}


/* eslint-enable */
