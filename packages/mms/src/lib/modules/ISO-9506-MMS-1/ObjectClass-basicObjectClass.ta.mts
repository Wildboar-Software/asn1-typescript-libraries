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
 * @summary ObjectClass_basicObjectClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObjectClass-basicObjectClass ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ObjectClass_basicObjectClass = INTEGER;

/**
 * @summary ObjectClass_basicObjectClass_namedVariable
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_namedVariable: ObjectClass_basicObjectClass = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_namedVariable
 * @constant
 * @type {number}
 */
export
const namedVariable: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_namedVariable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_scatteredAccess
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_scatteredAccess: ObjectClass_basicObjectClass = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_scatteredAccess
 * @constant
 * @type {number}
 */
export
const scatteredAccess: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_scatteredAccess; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_namedVariableList
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_namedVariableList: ObjectClass_basicObjectClass = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_namedVariableList
 * @constant
 * @type {number}
 */
export
const namedVariableList: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_namedVariableList; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_namedType
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_namedType: ObjectClass_basicObjectClass = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_namedType
 * @constant
 * @type {number}
 */
export
const namedType: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_namedType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_semaphore
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_semaphore: ObjectClass_basicObjectClass = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_semaphore
 * @constant
 * @type {number}
 */
export
const semaphore: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_semaphore; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_eventCondition
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_eventCondition: ObjectClass_basicObjectClass = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_eventCondition
 * @constant
 * @type {number}
 */
export
const eventCondition: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_eventCondition; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_eventAction
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_eventAction: ObjectClass_basicObjectClass = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_eventAction
 * @constant
 * @type {number}
 */
export
const eventAction: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_eventAction; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_eventEnrollment
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_eventEnrollment: ObjectClass_basicObjectClass = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_eventEnrollment
 * @constant
 * @type {number}
 */
export
const eventEnrollment: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_eventEnrollment; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_journal
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_journal: ObjectClass_basicObjectClass = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_journal
 * @constant
 * @type {number}
 */
export
const journal: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_journal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_domain
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_domain: ObjectClass_basicObjectClass = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_domain
 * @constant
 * @type {number}
 */
export
const domain: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_domain; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_programInvocation
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_programInvocation: ObjectClass_basicObjectClass = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_programInvocation
 * @constant
 * @type {number}
 */
export
const programInvocation: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_programInvocation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_operatorStation
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_operatorStation: ObjectClass_basicObjectClass = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_operatorStation
 * @constant
 * @type {number}
 */
export
const operatorStation: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_operatorStation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_dataExchange
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_dataExchange: ObjectClass_basicObjectClass = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_dataExchange
 * @constant
 * @type {number}
 */
export
const dataExchange: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_dataExchange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_accessControlList
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_accessControlList: ObjectClass_basicObjectClass = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_accessControlList
 * @constant
 * @type {number}
 */
export
const accessControlList: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_accessControlList; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ObjectClass_basicObjectClass: $.ASN1Decoder<ObjectClass_basicObjectClass> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObjectClass_basicObjectClass
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ObjectClass_basicObjectClass (el: _Element): ObjectClass_basicObjectClass {
    if (!_cached_decoder_for_ObjectClass_basicObjectClass) { _cached_decoder_for_ObjectClass_basicObjectClass = $._decodeInteger; }
    return _cached_decoder_for_ObjectClass_basicObjectClass(el);
}

let _cached_encoder_for_ObjectClass_basicObjectClass: $.ASN1Encoder<ObjectClass_basicObjectClass> | null = null;

/**
 * @summary Encodes a(n) ObjectClass_basicObjectClass into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectClass_basicObjectClass, encoded as an ASN.1 Element.
 */
export
function _encode_ObjectClass_basicObjectClass (value: ObjectClass_basicObjectClass, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ObjectClass_basicObjectClass) { _cached_encoder_for_ObjectClass_basicObjectClass = $._encodeInteger; }
    return _cached_encoder_for_ObjectClass_basicObjectClass(value, elGetter);
}


/* eslint-enable */
