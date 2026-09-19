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
import { IssuerAndSerialNumber, _decode_IssuerAndSerialNumber, _encode_IssuerAndSerialNumber } from "../EnhancedSecurity/IssuerAndSerialNumber.ta.mjs";
// export { IssuerAndSerialNumber, _decode_IssuerAndSerialNumber, _encode_IssuerAndSerialNumber } from "../EnhancedSecurity/IssuerAndSerialNumber.ta.mjs";


/**
 * @summary ThisEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ThisEntry  ::=  CHOICE {
 *   onlyOne   NULL,
 *   specific  IssuerAndSerialNumber,
 *   ... }
 * ```
 */
export
type ThisEntry =
    { onlyOne: NULL } /* CHOICE_ALT_ROOT */
    | { specific: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ThisEntry: $.ASN1Decoder<ThisEntry> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ThisEntry
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ThisEntry (el: _Element): ThisEntry {
    if (!_cached_decoder_for_ThisEntry) { _cached_decoder_for_ThisEntry = $._decode_extensible_choice<ThisEntry>({
    "UNIVERSAL 5": [ "onlyOne", $._decodeNull ],
    "UNIVERSAL 16": [ "specific", _decode_IssuerAndSerialNumber ]
}); }
    return _cached_decoder_for_ThisEntry(el);
}

let _cached_encoder_for_ThisEntry: $.ASN1Encoder<ThisEntry> | null = null;

/**
 * @summary Encodes a(n) ThisEntry into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ThisEntry, encoded as an ASN.1 Element.
 */
export
function _encode_ThisEntry (value: ThisEntry, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ThisEntry) { _cached_encoder_for_ThisEntry = $._encode_choice<ThisEntry>({
    "onlyOne": $._encodeNull,
    "specific": _encode_IssuerAndSerialNumber,
}, $.BER); }
    return _cached_encoder_for_ThisEntry(value, elGetter);
}


/* eslint-enable */
