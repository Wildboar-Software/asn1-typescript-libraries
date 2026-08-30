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
import { PrivateExtension, _decode_PrivateExtension, _encode_PrivateExtension } from "../MAP-ExtensionDataTypes/PrivateExtension.ta.mjs";
// export { PrivateExtension, _decode_PrivateExtension, _encode_PrivateExtension } from "../MAP-ExtensionDataTypes/PrivateExtension.ta.mjs";


/**
 * @summary PrivateExtensionList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateExtensionList  ::=  SEQUENCE SIZE (1..maxNumOfPrivateExtensions) OF
 *     PrivateExtension
 * ```
 */
export
type PrivateExtensionList = PrivateExtension[]; // SequenceOfType

let _cached_decoder_for_PrivateExtensionList: $.ASN1Decoder<PrivateExtensionList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrivateExtensionList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrivateExtensionList (el: _Element): PrivateExtensionList {
    if (!_cached_decoder_for_PrivateExtensionList) { _cached_decoder_for_PrivateExtensionList = $._decodeSequenceOf<PrivateExtension>(() => _decode_PrivateExtension); }
    return _cached_decoder_for_PrivateExtensionList(el);
}

let _cached_encoder_for_PrivateExtensionList: $.ASN1Encoder<PrivateExtensionList> | null = null;

/**
 * @summary Encodes a(n) PrivateExtensionList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateExtensionList, encoded as an ASN.1 Element.
 */
export
function _encode_PrivateExtensionList (value: PrivateExtensionList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrivateExtensionList) { _cached_encoder_for_PrivateExtensionList = $._encodeSequenceOf<PrivateExtension>(() => _encode_PrivateExtension, $.BER); }
    return _cached_encoder_for_PrivateExtensionList(value, elGetter);
}


/* eslint-enable */
