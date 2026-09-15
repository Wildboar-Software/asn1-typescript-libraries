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



export
enum _enum_for_KeyStatus {
    old = 0,
    new_ = 1,
}

/**
 * @summary KeyStatus
 * @description
 *
 * Key Status element of 3GPP TS 25.413. Received values 2-31 shall be treated
 * as `old`; values greater than 31 as `new`. If present in
 * MAP_SEND_IDENTIFICATION, the new VLR shall treat the keyset as already used
 * (`old`). (3GPP TS 29.002 V19.1.0 clauses 7.6.6.11, 8.1.4.3, and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyStatus  ::=  ENUMERATED {
 *     old  (0),
 *     new  (1),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type KeyStatus = _enum_for_KeyStatus | ENUMERATED;

/**
 * @summary KeyStatus_old
 * @description
 *
 * Keyset already used. Received values 2-31 shall be treated as this. (3GPP TS
 * 29.002 V19.1.0 clause 17.7.1)
 *
 * @constant
 * @type {number}
 */
export
const KeyStatus_old: KeyStatus = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary old
 * @description
 *
 * Keyset already used. Received values 2-31 shall be treated as this. (3GPP TS
 * 29.002 V19.1.0 clause 17.7.1)
 *
 * @constant
 * @type {number}
 */
export
const old: KeyStatus = KeyStatus_old; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary KeyStatus_new_
 * @description
 *
 * New keyset not yet used. Received values greater than 31 shall be treated as
 * this. (3GPP TS 29.002 V19.1.0 clause 17.7.1)
 *
 * @constant
 * @type {number}
 */
export
const KeyStatus_new_: KeyStatus = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary new_
 * @description
 *
 * New keyset not yet used. Received values greater than 31 shall be treated as
 * this. (3GPP TS 29.002 V19.1.0 clause 17.7.1)
 *
 * @constant
 * @type {number}
 */
export
const new_: KeyStatus = KeyStatus_new_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) KeyStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_KeyStatus = $._decodeEnumerated;

/**
 * @summary Encodes a(n) KeyStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyStatus, encoded as an ASN.1 Element.
 */
export const _encode_KeyStatus = $._encodeEnumerated;


/* eslint-enable */
