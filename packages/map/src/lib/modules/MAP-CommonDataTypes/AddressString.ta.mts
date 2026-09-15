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



import { maxAddressLength } from "./maxAddressLength.va.mjs";

/**
 * @summary AddressString
 * @description
 *
 * Number used for addressing. Octet 1 is nature of address (NAI) and numbering
 * plan (NPI); the remaining octets are address digits encoded as `TBCD-STRING`.
 * Size 1..`maxAddressLength` (20).
 *
 * First octet:
 * - bit 8: 1 (no extension)
 * - bits 765: NAI — 000 unknown; 001 international; 010 national significant;
 *   011 network specific; 100 subscriber; 101 reserved; 110 abbreviated; 111
 *   reserved for extension
 * - bits 4321: NPI — 0000 unknown; 0001 ISDN/telephony (ITU-T E.164); 0010
 *   spare; 0011 data (ITU-T X.121); 0100 telex (ITU-T F.69); 0101 spare; 0110
 *   land mobile (ITU-T E.212); 0111 spare; 1000 national; 1001 private; 1111
 *   reserved for extension. All other NPI values are reserved.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddressString  ::=  OCTET STRING (SIZE (1..maxAddressLength))
 * ```
 */
export
type AddressString = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) AddressString
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AddressString = (el: _Element): AddressString => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > maxAddressLength) {
        throw new ASN1SizeError("AddressString violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) AddressString into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddressString, encoded as an ASN.1 Element.
 */
export const _encode_AddressString = $._encodeOctetString;


/* eslint-enable */
