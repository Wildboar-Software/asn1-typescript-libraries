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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/DirectoryString.ta";


/* START_OF_SYMBOL_DEFINITION PostalAddress */
/**
 * @summary PostalAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PostalAddress  ::=  SEQUENCE SIZE(1..6) OF DirectoryString{maxSize}
 * ```
 */
export
type PostalAddress = DirectoryString[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION PostalAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PostalAddress */
let _cached_decoder_for_PostalAddress: $.ASN1Decoder<PostalAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PostalAddress */

/* START_OF_SYMBOL_DEFINITION _decode_PostalAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) PostalAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PostalAddress} The decoded data structure.
 */
export
function _decode_PostalAddress (el: _Element) {
    if (!_cached_decoder_for_PostalAddress) { _cached_decoder_for_PostalAddress = $._decodeSequenceOf<DirectoryString>(() => _decode_DirectoryString); }
    return _cached_decoder_for_PostalAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PostalAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PostalAddress */
let _cached_encoder_for_PostalAddress: $.ASN1Encoder<PostalAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PostalAddress */

/* START_OF_SYMBOL_DEFINITION _encode_PostalAddress */
/**
 * @summary Encodes a(n) PostalAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PostalAddress, encoded as an ASN.1 Element.
 */
export
function _encode_PostalAddress (value: PostalAddress, elGetter: $.ASN1Encoder<PostalAddress>) {
    if (!_cached_encoder_for_PostalAddress) { _cached_encoder_for_PostalAddress = $._encodeSequenceOf<DirectoryString>(() => _encode_DirectoryString, $.BER); }
    return _cached_encoder_for_PostalAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PostalAddress */

/* eslint-enable */
