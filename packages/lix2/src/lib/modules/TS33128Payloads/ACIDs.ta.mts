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
import { ACID, _decode_ACID, _encode_ACID } from "../TS33128Payloads/ACID.ta.mjs";
// export { ACID, _decode_ACID, _encode_ACID } from "../TS33128Payloads/ACID.ta.mjs";


/**
 * @summary ACIDs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACIDs  ::=  SET OF ACID
 * ```
 */
export
type ACIDs = ACID[]; // SetOfType

let _cached_decoder_for_ACIDs: $.ASN1Decoder<ACIDs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACIDs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ACIDs (el: _Element): ACIDs {
    if (!_cached_decoder_for_ACIDs) { _cached_decoder_for_ACIDs = $._decodeSetOf<ACID>(() => _decode_ACID); }
    return _cached_decoder_for_ACIDs(el);
}

let _cached_encoder_for_ACIDs: $.ASN1Encoder<ACIDs> | null = null;

/**
 * @summary Encodes a(n) ACIDs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACIDs, encoded as an ASN.1 Element.
 */
export
function _encode_ACIDs (value: ACIDs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ACIDs) { _cached_encoder_for_ACIDs = $._encodeSetOf<ACID>(() => _encode_ACID, $.BER); }
    return _cached_encoder_for_ACIDs(value, elGetter);
}


/* eslint-enable */
