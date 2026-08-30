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
enum _enum_for_NumberPortabilityStatus {
    notKnownToBePorted = 0,
    ownNumberPortedOut = 1,
    foreignNumberPortedToForeignNetwork = 2,
    ownNumberNotPortedOut = 4,
    foreignNumberPortedIn = 5,
}

/**
 * @summary NumberPortabilityStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberPortabilityStatus  ::=  ENUMERATED {
 *     notKnownToBePorted    (0),
 *     ownNumberPortedOut    (1),
 *     foreignNumberPortedToForeignNetwork    (2),
 *     ...,
 *     ownNumberNotPortedOut    (4),
 *     foreignNumberPortedIn    (5)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type NumberPortabilityStatus = _enum_for_NumberPortabilityStatus | ENUMERATED;

/**
 * @summary NumberPortabilityStatus_notKnownToBePorted
 * @constant
 * @type {number}
 */
export
const NumberPortabilityStatus_notKnownToBePorted: NumberPortabilityStatus = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notKnownToBePorted
 * @constant
 * @type {number}
 */
export
const notKnownToBePorted: NumberPortabilityStatus = NumberPortabilityStatus_notKnownToBePorted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NumberPortabilityStatus_ownNumberPortedOut
 * @constant
 * @type {number}
 */
export
const NumberPortabilityStatus_ownNumberPortedOut: NumberPortabilityStatus = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ownNumberPortedOut
 * @constant
 * @type {number}
 */
export
const ownNumberPortedOut: NumberPortabilityStatus = NumberPortabilityStatus_ownNumberPortedOut; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NumberPortabilityStatus_foreignNumberPortedToForeignNetwork
 * @constant
 * @type {number}
 */
export
const NumberPortabilityStatus_foreignNumberPortedToForeignNetwork: NumberPortabilityStatus = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary foreignNumberPortedToForeignNetwork
 * @constant
 * @type {number}
 */
export
const foreignNumberPortedToForeignNetwork: NumberPortabilityStatus = NumberPortabilityStatus_foreignNumberPortedToForeignNetwork; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NumberPortabilityStatus_ownNumberNotPortedOut
 * @constant
 * @type {number}
 */
export
const NumberPortabilityStatus_ownNumberNotPortedOut: NumberPortabilityStatus = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ownNumberNotPortedOut
 * @constant
 * @type {number}
 */
export
const ownNumberNotPortedOut: NumberPortabilityStatus = NumberPortabilityStatus_ownNumberNotPortedOut; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NumberPortabilityStatus_foreignNumberPortedIn
 * @constant
 * @type {number}
 */
export
const NumberPortabilityStatus_foreignNumberPortedIn: NumberPortabilityStatus = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary foreignNumberPortedIn
 * @constant
 * @type {number}
 */
export
const foreignNumberPortedIn: NumberPortabilityStatus = NumberPortabilityStatus_foreignNumberPortedIn; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_NumberPortabilityStatus: $.ASN1Decoder<NumberPortabilityStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NumberPortabilityStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NumberPortabilityStatus (el: _Element): NumberPortabilityStatus {
    if (!_cached_decoder_for_NumberPortabilityStatus) { _cached_decoder_for_NumberPortabilityStatus = $._decodeEnumerated; }
    return _cached_decoder_for_NumberPortabilityStatus(el);
}

let _cached_encoder_for_NumberPortabilityStatus: $.ASN1Encoder<NumberPortabilityStatus> | null = null;

/**
 * @summary Encodes a(n) NumberPortabilityStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberPortabilityStatus, encoded as an ASN.1 Element.
 */
export
function _encode_NumberPortabilityStatus (value: NumberPortabilityStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NumberPortabilityStatus) { _cached_encoder_for_NumberPortabilityStatus = $._encodeEnumerated; }
    return _cached_encoder_for_NumberPortabilityStatus(value, elGetter);
}


/* eslint-enable */
