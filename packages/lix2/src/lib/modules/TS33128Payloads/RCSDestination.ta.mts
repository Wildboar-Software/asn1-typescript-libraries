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
import { RCSIdentity, _decode_RCSIdentity, _encode_RCSIdentity } from "../TS33128Payloads/RCSIdentity.ta.mjs";
// export { RCSIdentity, _decode_RCSIdentity, _encode_RCSIdentity } from "../TS33128Payloads/RCSIdentity.ta.mjs";


/**
 * @summary RCSDestination
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSDestination  ::=  SEQUENCE SIZE (1..MAX) OF RCSIdentity
 * ```
 */
export
type RCSDestination = RCSIdentity[]; // SequenceOfType

let _cached_decoder_for_RCSDestination: $.ASN1Decoder<RCSDestination> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSDestination
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSDestination (el: _Element): RCSDestination {
    if (!_cached_decoder_for_RCSDestination) { _cached_decoder_for_RCSDestination = $._decodeSequenceOf<RCSIdentity>(() => _decode_RCSIdentity); }
    return _cached_decoder_for_RCSDestination(el);
}

let _cached_encoder_for_RCSDestination: $.ASN1Encoder<RCSDestination> | null = null;

/**
 * @summary Encodes a(n) RCSDestination into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSDestination, encoded as an ASN.1 Element.
 */
export
function _encode_RCSDestination (value: RCSDestination, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSDestination) { _cached_encoder_for_RCSDestination = $._encodeSequenceOf<RCSIdentity>(() => _encode_RCSIdentity, $.BER); }
    return _cached_encoder_for_RCSDestination(value, elGetter);
}


/* eslint-enable */
