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



/**
 * @summary MM_Code
 * @description
 *
 * Mobility Management event reported in MAP_NOTE_MM_EVENT. CAMEL phase 4 CS
 * codes: location-update in same VLR `00000000`B, to other VLR `00000001`B,
 * IMSI-Attach `00000010`B, MS-initiated IMSI-Detach `00000011`B,
 * network-initiated IMSI-Detach `00000100`B. PS codes: RA update in same SGSN
 * `10000000`B, to other SGSN from new SGSN `10000001`B, to other SGSN
 * disconnect-by-detach `10000010`B, GPRS-Attach `10000011`B, MS-initiated
 * GPRS-Detach `10000100`B, network-initiated GPRS-Detach `10000101`B, transfer
 * to not-reachable-for-paging `10000110`B. MSC/SGSN shall ignore other codes
 * for their domain. (3GPP TS 29.002 V19.1.0 clauses 8.1.8.3 and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MM-Code  ::=  OCTET STRING (SIZE (1))
 * ```
 */
export
type MM_Code = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) MM_Code
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MM_Code = (el: _Element): MM_Code => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("MM_Code violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) MM_Code into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MM_Code, encoded as an ASN.1 Element.
 */
export const _encode_MM_Code = $._encodeOctetString;


/* eslint-enable */
