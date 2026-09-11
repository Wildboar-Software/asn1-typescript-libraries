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
 * @summary DeferredLocationEventType
 * @description
 *
 * beingInsideArea is always oneTimeEvent regardless of occurrenceInfo. Other
 * values in ProvideSubscriberLocation-Arg: reject with unexpected data value
 * (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeferredLocationEventType  ::=  BIT STRING {
 *     msAvailable    (0) ,
 *     enteringIntoArea    (1),
 *     leavingFromArea    (2),
 *     beingInsideArea    (3) ,
 *     periodicLDR    (4)  } (SIZE (1..16))
 * ```
 */
export
type DeferredLocationEventType = BIT_STRING;

/**
 * @summary DeferredLocationEventType_msAvailable
 * @description
 *
 * `msAvailable (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 */
export
const DeferredLocationEventType_msAvailable: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary msAvailable
 * @description
 *
 * `msAvailable (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 */
export
const msAvailable: number = DeferredLocationEventType_msAvailable; /* SHORT_NAMED_BIT */

/**
 * @summary DeferredLocationEventType_enteringIntoArea
 * @description
 *
 * `enteringIntoArea (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 */
export
const DeferredLocationEventType_enteringIntoArea: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary enteringIntoArea
 * @description
 *
 * `enteringIntoArea (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 */
export
const enteringIntoArea: number = DeferredLocationEventType_enteringIntoArea; /* SHORT_NAMED_BIT */

/**
 * @summary DeferredLocationEventType_leavingFromArea
 * @description
 *
 * `leavingFromArea (2)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 */
export
const DeferredLocationEventType_leavingFromArea: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary leavingFromArea
 * @description
 *
 * `leavingFromArea (2)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 */
export
const leavingFromArea: number = DeferredLocationEventType_leavingFromArea; /* SHORT_NAMED_BIT */

/**
 * @summary DeferredLocationEventType_beingInsideArea
 * @description
 *
 * `beingInsideArea (3)` always one-time (3GPP TS 29.002 V19.1.0 clause
 * 17.7.13).
 *
 * @constant
 */
export
const DeferredLocationEventType_beingInsideArea: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary beingInsideArea
 * @description
 *
 * `beingInsideArea (3)` always one-time (3GPP TS 29.002 V19.1.0 clause
 * 17.7.13).
 *
 * @constant
 */
export
const beingInsideArea: number = DeferredLocationEventType_beingInsideArea; /* SHORT_NAMED_BIT */

/**
 * @summary DeferredLocationEventType_periodicLDR
 * @description
 *
 * `periodicLDR (4)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 */
export
const DeferredLocationEventType_periodicLDR: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary periodicLDR
 * @description
 *
 * `periodicLDR (4)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 */
export
const periodicLDR: number = DeferredLocationEventType_periodicLDR; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) DeferredLocationEventType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_DeferredLocationEventType = (el: _Element): DeferredLocationEventType => {
    const value = $._decodeBitString(el);
    if (value.length < 1 || value.length > 16) {
        throw new ASN1SizeError("DeferredLocationEventType violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) DeferredLocationEventType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeferredLocationEventType, encoded as an ASN.1 Element.
 */
export const _encode_DeferredLocationEventType = $._encodeBitString;


/* eslint-enable */
