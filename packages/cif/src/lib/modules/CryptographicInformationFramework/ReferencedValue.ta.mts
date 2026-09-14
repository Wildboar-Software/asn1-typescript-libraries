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
import { Path, _decode_Path, _encode_Path } from "../CryptographicInformationFramework/Path.ta.mjs";
// export { Path, _decode_Path, _encode_Path } from "../CryptographicInformationFramework/Path.ta.mjs";
import { URL, _decode_URL, _encode_URL } from "../CryptographicInformationFramework/URL.ta.mjs";
// export { URL, _decode_URL, _encode_URL } from "../CryptographicInformationFramework/URL.ta.mjs";


/**
 * @summary ReferencedValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReferencedValue  ::=  CHOICE {
 *     path       Path,
 *     url        URL
 * }
 * ```
 */
export
type ReferencedValue =
    { path: Path } /* CHOICE_ALT_ROOT */
    | { url: URL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ReferencedValue: $.ASN1Decoder<ReferencedValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReferencedValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReferencedValue (el: _Element): ReferencedValue {
    if (!_cached_decoder_for_ReferencedValue) { _cached_decoder_for_ReferencedValue = $._decode_inextensible_choice<ReferencedValue>({
    "UNIVERSAL 16": [ "path", _decode_Path ],
    "UNIVERSAL 19": [ "url", _decode_URL ],
    "UNIVERSAL 22": [ "url", _decode_URL ],
    "CONTEXT 3": [ "url", _decode_URL ]
}); }
    return _cached_decoder_for_ReferencedValue(el);
}

let _cached_encoder_for_ReferencedValue: $.ASN1Encoder<ReferencedValue> | null = null;

/**
 * @summary Encodes a(n) ReferencedValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReferencedValue, encoded as an ASN.1 Element.
 */
export
function _encode_ReferencedValue (value: ReferencedValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReferencedValue) { _cached_encoder_for_ReferencedValue = $._encode_choice<ReferencedValue>({
    "path": _encode_Path,
    "url": _encode_URL,
}, $.BER); }
    return _cached_encoder_for_ReferencedValue(value, elGetter);
}


/* eslint-enable */
