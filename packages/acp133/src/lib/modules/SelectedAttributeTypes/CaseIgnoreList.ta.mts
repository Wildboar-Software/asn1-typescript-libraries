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
import { UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
// export { UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";


/**
 * @summary CaseIgnoreList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CaseIgnoreList  ::=  SEQUENCE OF UnboundedDirectoryString
 * ```
 */
export
type CaseIgnoreList = UnboundedDirectoryString[]; // SequenceOfType

let _cached_decoder_for_CaseIgnoreList: $.ASN1Decoder<CaseIgnoreList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CaseIgnoreList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CaseIgnoreList (el: _Element): CaseIgnoreList {
    if (!_cached_decoder_for_CaseIgnoreList) { _cached_decoder_for_CaseIgnoreList = $._decodeSequenceOf<UnboundedDirectoryString>(() => _decode_UnboundedDirectoryString); }
    return _cached_decoder_for_CaseIgnoreList(el);
}

let _cached_encoder_for_CaseIgnoreList: $.ASN1Encoder<CaseIgnoreList> | null = null;

/**
 * @summary Encodes a(n) CaseIgnoreList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CaseIgnoreList, encoded as an ASN.1 Element.
 */
export
function _encode_CaseIgnoreList (value: CaseIgnoreList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CaseIgnoreList) { _cached_encoder_for_CaseIgnoreList = $._encodeSequenceOf<UnboundedDirectoryString>(() => _encode_UnboundedDirectoryString, $.BER); }
    return _cached_encoder_for_CaseIgnoreList(value, elGetter);
}


/* eslint-enable */
