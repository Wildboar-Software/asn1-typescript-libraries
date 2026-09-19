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
import { MilitaryString, _decode_MilitaryString, _encode_MilitaryString } from "../MMSHeadingExtensions/MilitaryString.ta.mjs";
// export { MilitaryString, _decode_MilitaryString, _encode_MilitaryString } from "../MMSHeadingExtensions/MilitaryString.ta.mjs";


/**
 * @summary MessageInstructions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageInstructions  ::=  SEQUENCE OF MilitaryString
 * ```
 */
export
type MessageInstructions = MilitaryString[]; // SequenceOfType

let _cached_decoder_for_MessageInstructions: $.ASN1Decoder<MessageInstructions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageInstructions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MessageInstructions (el: _Element): MessageInstructions {
    if (!_cached_decoder_for_MessageInstructions) { _cached_decoder_for_MessageInstructions = $._decodeSequenceOf<MilitaryString>(() => _decode_MilitaryString); }
    return _cached_decoder_for_MessageInstructions(el);
}

let _cached_encoder_for_MessageInstructions: $.ASN1Encoder<MessageInstructions> | null = null;

/**
 * @summary Encodes a(n) MessageInstructions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageInstructions, encoded as an ASN.1 Element.
 */
export
function _encode_MessageInstructions (value: MessageInstructions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MessageInstructions) { _cached_encoder_for_MessageInstructions = $._encodeSequenceOf<MilitaryString>(() => _encode_MilitaryString, $.BER); }
    return _cached_encoder_for_MessageInstructions(value, elGetter);
}


/* eslint-enable */
