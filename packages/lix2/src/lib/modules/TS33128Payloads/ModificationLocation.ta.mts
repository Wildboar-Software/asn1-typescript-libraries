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
import { MIMEBody, _decode_MIMEBody, _encode_MIMEBody } from "../TS33128Payloads/MIMEBody.ta.mjs";
// export { MIMEBody, _decode_MIMEBody, _encode_MIMEBody } from "../TS33128Payloads/MIMEBody.ta.mjs";
import { IndexRange, _decode_IndexRange, _encode_IndexRange } from "../TS33128Payloads/IndexRange.ta.mjs";
// export { IndexRange, _decode_IndexRange, _encode_IndexRange } from "../TS33128Payloads/IndexRange.ta.mjs";
import { ABNFRuleLocation, _decode_ABNFRuleLocation, _encode_ABNFRuleLocation } from "../TS33128Payloads/ABNFRuleLocation.ta.mjs";
// export { ABNFRuleLocation, _decode_ABNFRuleLocation, _encode_ABNFRuleLocation } from "../TS33128Payloads/ABNFRuleLocation.ta.mjs";


/**
 * @summary ModificationLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModificationLocation  ::=  CHOICE
 * {
 *     jSONPointer        [1] UTF8String,
 *     xPath              [2] UTF8String,
 *     sIPHeader          [3] UTF8String,
 *     sIPBody            [4] NULL,
 *     mIMEHeader         [5] UTF8String,
 *     mIMEBody           [6] MIMEBody,
 *     uTF8Location       [7] IndexRange,
 *     octetLocation      [8] IndexRange,
 *     aBNFRule           [9] ABNFRuleLocation
 * }
 * ```
 */
export
type ModificationLocation =
    { jSONPointer: UTF8String } /* CHOICE_ALT_ROOT */
    | { xPath: UTF8String } /* CHOICE_ALT_ROOT */
    | { sIPHeader: UTF8String } /* CHOICE_ALT_ROOT */
    | { sIPBody: NULL } /* CHOICE_ALT_ROOT */
    | { mIMEHeader: UTF8String } /* CHOICE_ALT_ROOT */
    | { mIMEBody: MIMEBody } /* CHOICE_ALT_ROOT */
    | { uTF8Location: IndexRange } /* CHOICE_ALT_ROOT */
    | { octetLocation: IndexRange } /* CHOICE_ALT_ROOT */
    | { aBNFRule: ABNFRuleLocation } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ModificationLocation: $.ASN1Decoder<ModificationLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModificationLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModificationLocation (el: _Element): ModificationLocation {
    if (!_cached_decoder_for_ModificationLocation) { _cached_decoder_for_ModificationLocation = $._decode_inextensible_choice<ModificationLocation>({
    "CONTEXT 1": [ "jSONPointer", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ],
    "CONTEXT 2": [ "xPath", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ],
    "CONTEXT 3": [ "sIPHeader", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ],
    "CONTEXT 4": [ "sIPBody", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 5": [ "mIMEHeader", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ],
    "CONTEXT 6": [ "mIMEBody", $._decode_explicit<MIMEBody>(() => _decode_MIMEBody) ],
    "CONTEXT 7": [ "uTF8Location", $._decode_implicit<IndexRange>(() => _decode_IndexRange) ],
    "CONTEXT 8": [ "octetLocation", $._decode_implicit<IndexRange>(() => _decode_IndexRange) ],
    "CONTEXT 9": [ "aBNFRule", $._decode_implicit<ABNFRuleLocation>(() => _decode_ABNFRuleLocation) ]
}); }
    return _cached_decoder_for_ModificationLocation(el);
}

let _cached_encoder_for_ModificationLocation: $.ASN1Encoder<ModificationLocation> | null = null;

/**
 * @summary Encodes a(n) ModificationLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModificationLocation, encoded as an ASN.1 Element.
 */
export
function _encode_ModificationLocation (value: ModificationLocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModificationLocation) { _cached_encoder_for_ModificationLocation = $._encode_choice<ModificationLocation>({
    "jSONPointer": $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER),
    "xPath": $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER),
    "sIPHeader": $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER),
    "sIPBody": $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER),
    "mIMEHeader": $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER),
    "mIMEBody": $._encode_explicit(_TagClass.context, 6, () => _encode_MIMEBody, $.BER),
    "uTF8Location": $._encode_implicit(_TagClass.context, 7, () => _encode_IndexRange, $.BER),
    "octetLocation": $._encode_implicit(_TagClass.context, 8, () => _encode_IndexRange, $.BER),
    "aBNFRule": $._encode_implicit(_TagClass.context, 9, () => _encode_ABNFRuleLocation, $.BER),
}, $.BER); }
    return _cached_encoder_for_ModificationLocation(value, elGetter);
}


/* eslint-enable */
