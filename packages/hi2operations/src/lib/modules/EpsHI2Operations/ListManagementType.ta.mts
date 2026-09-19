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
enum _enum_for_ListManagementType {
    contactListManagementAttempt = 1,
    groupListManagementAttempt = 2,
    contactListManagementResult = 3,
    groupListManagementResult = 4,
    requestSuccessful = 5,
}

/**
 * @summary ListManagementType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ListManagementType  ::=  ENUMERATED
 * {
 *  contactListManagementAttempt (1),
 *  groupListManagementAttempt (2),
 *  contactListManagementResult (3),
 *  groupListManagementResult (4),
 *  requestSuccessful (5),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ListManagementType = _enum_for_ListManagementType | ENUMERATED;

/**
 * @summary ListManagementType_contactListManagementAttempt
 * @constant
 * @type {number}
 */
export
const ListManagementType_contactListManagementAttempt: ListManagementType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contactListManagementAttempt
 * @constant
 * @type {number}
 */
export
const contactListManagementAttempt: ListManagementType = ListManagementType_contactListManagementAttempt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ListManagementType_groupListManagementAttempt
 * @constant
 * @type {number}
 */
export
const ListManagementType_groupListManagementAttempt: ListManagementType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupListManagementAttempt
 * @constant
 * @type {number}
 */
export
const groupListManagementAttempt: ListManagementType = ListManagementType_groupListManagementAttempt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ListManagementType_contactListManagementResult
 * @constant
 * @type {number}
 */
export
const ListManagementType_contactListManagementResult: ListManagementType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contactListManagementResult
 * @constant
 * @type {number}
 */
export
const contactListManagementResult: ListManagementType = ListManagementType_contactListManagementResult; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ListManagementType_groupListManagementResult
 * @constant
 * @type {number}
 */
export
const ListManagementType_groupListManagementResult: ListManagementType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupListManagementResult
 * @constant
 * @type {number}
 */
export
const groupListManagementResult: ListManagementType = ListManagementType_groupListManagementResult; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ListManagementType_requestSuccessful
 * @constant
 * @type {number}
 */
export
const ListManagementType_requestSuccessful: ListManagementType = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestSuccessful
 * @constant
 * @type {number}
 */
export
const requestSuccessful: ListManagementType = ListManagementType_requestSuccessful; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ListManagementType: $.ASN1Decoder<ListManagementType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ListManagementType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ListManagementType (el: _Element): ListManagementType {
    if (!_cached_decoder_for_ListManagementType) { _cached_decoder_for_ListManagementType = $._decodeEnumerated; }
    return _cached_decoder_for_ListManagementType(el);
}

let _cached_encoder_for_ListManagementType: $.ASN1Encoder<ListManagementType> | null = null;

/**
 * @summary Encodes a(n) ListManagementType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListManagementType, encoded as an ASN.1 Element.
 */
export
function _encode_ListManagementType (value: ListManagementType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ListManagementType) { _cached_encoder_for_ListManagementType = $._encodeEnumerated; }
    return _cached_encoder_for_ListManagementType(value, elGetter);
}


/* eslint-enable */
