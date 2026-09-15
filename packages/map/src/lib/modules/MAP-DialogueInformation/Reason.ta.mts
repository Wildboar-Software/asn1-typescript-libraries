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



/**
 * @summary Reason
 * @description
 *
 * Refuse reason in `MAP-RefuseInfo`. Values `noReasonGiven`,
 * `invalidDestinationReference` and `invalidOriginatingReference` correspond to
 * Refuse-reason in MAP-OPEN (3GPP TS 29.002 V19.1.0 clauses 7.3.1 and 17.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Reason  ::=  ENUMERATED {
 *     noReasonGiven    (0),
 *     invalidDestinationReference    (1),
 *     invalidOriginatingReference    (2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Reason {
    noReasonGiven = 0,
    invalidDestinationReference = 1,
    invalidOriginatingReference = 2,
}

/**
 * @summary Reason
 * @description
 *
 * Refuse reason in `MAP-RefuseInfo`. Values `noReasonGiven`,
 * `invalidDestinationReference` and `invalidOriginatingReference` correspond to
 * Refuse-reason in MAP-OPEN (3GPP TS 29.002 V19.1.0 clauses 7.3.1 and 17.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Reason  ::=  ENUMERATED {
 *     noReasonGiven    (0),
 *     invalidDestinationReference    (1),
 *     invalidOriginatingReference    (2)}
 * ```
 * 
 * @enum {number}
 */
export
type Reason = _enum_for_Reason;

/**
 * @summary Reason
 * @description
 *
 * Refuse reason in `MAP-RefuseInfo`. Values `noReasonGiven`,
 * `invalidDestinationReference` and `invalidOriginatingReference` correspond to
 * Refuse-reason in MAP-OPEN (3GPP TS 29.002 V19.1.0 clauses 7.3.1 and 17.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Reason  ::=  ENUMERATED {
 *     noReasonGiven    (0),
 *     invalidDestinationReference    (1),
 *     invalidOriginatingReference    (2)}
 * ```
 * 
 * @enum {number}
 */
export
const Reason = _enum_for_Reason;

/**
 * @summary Reason_noReasonGiven
 * @description
 *
 * `noReasonGiven (0)`: dialogue refused with no further reason (3GPP TS 29.002
 * V19.1.0 clause 7.3.1).
 *
 * @constant
 * @type {number}
 */
export
const Reason_noReasonGiven: Reason = Reason.noReasonGiven; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noReasonGiven
 * @description
 *
 * `noReasonGiven (0)` of `Reason` (3GPP TS 29.002 V19.1.0 clause 7.3.1).
 *
 * @constant
 * @type {number}
 */
export
const noReasonGiven: Reason = Reason.noReasonGiven; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Reason_invalidDestinationReference
 * @description
 *
 * `invalidDestinationReference (1)`: destination reference is invalid (3GPP TS
 * 29.002 V19.1.0 clause 7.3.1).
 *
 * @constant
 * @type {number}
 */
export
const Reason_invalidDestinationReference: Reason = Reason.invalidDestinationReference; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidDestinationReference
 * @description
 *
 * `invalidDestinationReference (1)` of `Reason` (3GPP TS 29.002 V19.1.0 clause
 * 7.3.1).
 *
 * @constant
 * @type {number}
 */
export
const invalidDestinationReference: Reason = Reason.invalidDestinationReference; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Reason_invalidOriginatingReference
 * @description
 *
 * `invalidOriginatingReference (2)`: originating reference is invalid (3GPP TS
 * 29.002 V19.1.0 clause 7.3.1).
 *
 * @constant
 * @type {number}
 */
export
const Reason_invalidOriginatingReference: Reason = Reason.invalidOriginatingReference; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidOriginatingReference
 * @description
 *
 * `invalidOriginatingReference (2)` of `Reason` (3GPP TS 29.002 V19.1.0 clause
 * 7.3.1).
 *
 * @constant
 * @type {number}
 */
export
const invalidOriginatingReference: Reason = Reason.invalidOriginatingReference; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) Reason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Reason = $._decodeEnumerated;

/**
 * @summary Encodes a(n) Reason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Reason, encoded as an ASN.1 Element.
 */
export const _encode_Reason = $._encodeEnumerated;


/* eslint-enable */
