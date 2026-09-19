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
import { FQDN, _decode_FQDN, _encode_FQDN } from "../TS33128Payloads/FQDN.ta.mjs";
// export { FQDN, _decode_FQDN, _encode_FQDN } from "../TS33128Payloads/FQDN.ta.mjs";


/**
 * @summary FQDNList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FQDNList  ::=  SEQUENCE (SIZE(1..MAX)) OF FQDN
 * ```
 */
export
type FQDNList = FQDN[]; // SequenceOfType

let _cached_decoder_for_FQDNList: $.ASN1Decoder<FQDNList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FQDNList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FQDNList (el: _Element): FQDNList {
    if (!_cached_decoder_for_FQDNList) { _cached_decoder_for_FQDNList = $._decodeSequenceOf<FQDN>(() => _decode_FQDN); }
    return _cached_decoder_for_FQDNList(el);
}

let _cached_encoder_for_FQDNList: $.ASN1Encoder<FQDNList> | null = null;

/**
 * @summary Encodes a(n) FQDNList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FQDNList, encoded as an ASN.1 Element.
 */
export
function _encode_FQDNList (value: FQDNList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FQDNList) { _cached_encoder_for_FQDNList = $._encodeSequenceOf<FQDN>(() => _encode_FQDN, $.BER); }
    return _cached_encoder_for_FQDNList(value, elGetter);
}


/* eslint-enable */
