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
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AddressString, _decode_AddressString, _encode_AddressString } from "../MAP-CommonDataTypes/AddressString.ta.mjs";


import { maxFTN_AddressLength } from "./maxFTN-AddressLength.va.mjs";

/**
 * @summary FTN_AddressString
 * @description
 *
 * Forwarded-to number. `AddressString` of size 1..`maxFTN-AddressLength` (15).
 * If NAI is international, the first digits are the country code (CC) and
 * network destination code (NDC) as for E.164.
 *
 * A subaddress may be appended (see `ISDN-SubaddressString`). For subscribers
 * with originating CAMEL Phase 2 or higher, this address need not be in E.164
 * international format.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 17.7.8, 7.6.2.22 and 7.6.2.22A).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FTN-AddressString  ::=  
 *     AddressString (SIZE (1..maxFTN-AddressLength))
 * ```
 */
export
type FTN_AddressString = AddressString; // DefinedType

let _cached_decoder_for_FTN_AddressString: $.ASN1Decoder<FTN_AddressString> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FTN_AddressString
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FTN_AddressString (el: _Element): FTN_AddressString {
    if (!_cached_decoder_for_FTN_AddressString) { _cached_decoder_for_FTN_AddressString = _decode_AddressString; }
    return _cached_decoder_for_FTN_AddressString(el);
}

let _cached_encoder_for_FTN_AddressString: $.ASN1Encoder<FTN_AddressString> | null = null;

/**
 * @summary Encodes a(n) FTN_AddressString into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FTN_AddressString, encoded as an ASN.1 Element.
 */
export
function _encode_FTN_AddressString (value: FTN_AddressString, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FTN_AddressString) { _cached_encoder_for_FTN_AddressString = _encode_AddressString; }
    return _cached_encoder_for_FTN_AddressString(value, elGetter);
}


/* eslint-enable */
