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
enum _enum_for_PrivacyCheckRelatedAction {
    allowedWithoutNotification = 0,
    allowedWithNotification = 1,
    allowedIfNoResponse = 2,
    restrictedIfNoResponse = 3,
    notAllowed = 4,
}

/**
 * @summary PrivacyCheckRelatedAction
 * @description
 *
 * Unrecognized value in ProvideSubscriberLocation-Arg: reject with unexpected
 * data value (3GPP TS 29.002 V19.1.0 clauses 7.6.11.24 and 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivacyCheckRelatedAction  ::=  ENUMERATED {
 *     allowedWithoutNotification (0),
 *     allowedWithNotification (1),
 *     allowedIfNoResponse (2),
 *     restrictedIfNoResponse (3),
 *     notAllowed (4),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type PrivacyCheckRelatedAction = _enum_for_PrivacyCheckRelatedAction | ENUMERATED;

/**
 * @summary PrivacyCheckRelatedAction_allowedWithoutNotification
 * @description
 *
 * `allowedWithoutNotification (0)` (3GPP TS 29.002 V19.1.0 clause 7.6.11.24).
 *
 * @constant
 * @type {number}
 */
export
const PrivacyCheckRelatedAction_allowedWithoutNotification: PrivacyCheckRelatedAction = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allowedWithoutNotification
 * @description
 *
 * `allowedWithoutNotification (0)` (3GPP TS 29.002 V19.1.0 clause 7.6.11.24).
 *
 * @constant
 * @type {number}
 */
export
const allowedWithoutNotification: PrivacyCheckRelatedAction = PrivacyCheckRelatedAction_allowedWithoutNotification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrivacyCheckRelatedAction_allowedWithNotification
 * @description
 *
 * `allowedWithNotification (1)` (3GPP TS 29.002 V19.1.0 clause 7.6.11.24).
 *
 * @constant
 * @type {number}
 */
export
const PrivacyCheckRelatedAction_allowedWithNotification: PrivacyCheckRelatedAction = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allowedWithNotification
 * @description
 *
 * `allowedWithNotification (1)` (3GPP TS 29.002 V19.1.0 clause 7.6.11.24).
 *
 * @constant
 * @type {number}
 */
export
const allowedWithNotification: PrivacyCheckRelatedAction = PrivacyCheckRelatedAction_allowedWithNotification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrivacyCheckRelatedAction_allowedIfNoResponse
 * @description
 *
 * `allowedIfNoResponse (2)` (3GPP TS 29.002 V19.1.0 clause 7.6.11.24).
 *
 * @constant
 * @type {number}
 */
export
const PrivacyCheckRelatedAction_allowedIfNoResponse: PrivacyCheckRelatedAction = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allowedIfNoResponse
 * @description
 *
 * `allowedIfNoResponse (2)` (3GPP TS 29.002 V19.1.0 clause 7.6.11.24).
 *
 * @constant
 * @type {number}
 */
export
const allowedIfNoResponse: PrivacyCheckRelatedAction = PrivacyCheckRelatedAction_allowedIfNoResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrivacyCheckRelatedAction_restrictedIfNoResponse
 * @description
 *
 * `restrictedIfNoResponse (3)` (3GPP TS 29.002 V19.1.0 clause 7.6.11.24).
 *
 * @constant
 * @type {number}
 */
export
const PrivacyCheckRelatedAction_restrictedIfNoResponse: PrivacyCheckRelatedAction = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary restrictedIfNoResponse
 * @description
 *
 * `restrictedIfNoResponse (3)` (3GPP TS 29.002 V19.1.0 clause 7.6.11.24).
 *
 * @constant
 * @type {number}
 */
export
const restrictedIfNoResponse: PrivacyCheckRelatedAction = PrivacyCheckRelatedAction_restrictedIfNoResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrivacyCheckRelatedAction_notAllowed
 * @description
 *
 * `notAllowed (4)` (3GPP TS 29.002 V19.1.0 clause 7.6.11.24).
 *
 * @constant
 * @type {number}
 */
export
const PrivacyCheckRelatedAction_notAllowed: PrivacyCheckRelatedAction = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAllowed
 * @description
 *
 * `notAllowed (4)` (3GPP TS 29.002 V19.1.0 clause 7.6.11.24).
 *
 * @constant
 * @type {number}
 */
export
const notAllowed: PrivacyCheckRelatedAction = PrivacyCheckRelatedAction_notAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) PrivacyCheckRelatedAction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PrivacyCheckRelatedAction = $._decodeEnumerated;

/**
 * @summary Encodes a(n) PrivacyCheckRelatedAction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivacyCheckRelatedAction, encoded as an ASN.1 Element.
 */
export const _encode_PrivacyCheckRelatedAction = $._encodeEnumerated;


/* eslint-enable */
