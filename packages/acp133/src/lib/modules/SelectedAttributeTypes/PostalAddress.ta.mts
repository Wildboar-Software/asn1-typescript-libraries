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
 * @summary PostalAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PostalAddress  ::=  SEQUENCE SIZE (1..MAX) OF UnboundedDirectoryString
 * ```
 */
export
type PostalAddress = UnboundedDirectoryString[]; // SequenceOfType

let _cached_decoder_for_PostalAddress: $.ASN1Decoder<PostalAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PostalAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PostalAddress (el: _Element): PostalAddress {
    if (!_cached_decoder_for_PostalAddress) { _cached_decoder_for_PostalAddress = $._decodeSequenceOf<UnboundedDirectoryString>(() => _decode_UnboundedDirectoryString); }
    return _cached_decoder_for_PostalAddress(el);
}

let _cached_encoder_for_PostalAddress: $.ASN1Encoder<PostalAddress> | null = null;

/**
 * @summary Encodes a(n) PostalAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PostalAddress, encoded as an ASN.1 Element.
 */
export
function _encode_PostalAddress (value: PostalAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PostalAddress) { _cached_encoder_for_PostalAddress = $._encodeSequenceOf<UnboundedDirectoryString>(() => _encode_UnboundedDirectoryString, $.BER); }
    return _cached_encoder_for_PostalAddress(value, elGetter);
}


/* eslint-enable */
