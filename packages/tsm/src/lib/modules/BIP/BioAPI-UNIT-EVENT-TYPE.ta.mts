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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



export
enum _enum_for_BioAPI_UNIT_EVENT_TYPE {
    insert = 0,
    remove = 1,
    fault = 2,
    sourcePresent = 3,
    sourceRemoved = 4,
}

/**
 * @summary BioAPI_UNIT_EVENT_TYPE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BioAPI-UNIT-EVENT-TYPE  ::=  ENUMERATED {
 *   insert, remove, fault, sourcePresent, sourceRemoved, ...
 *   }
 * ```
 * 
 * @enum {number}
 */
export
type BioAPI_UNIT_EVENT_TYPE = _enum_for_BioAPI_UNIT_EVENT_TYPE | ENUMERATED;

/**
 * @summary BioAPI_UNIT_EVENT_TYPE_insert
 * @constant
 * @type {number}
 */
export
const BioAPI_UNIT_EVENT_TYPE_insert: BioAPI_UNIT_EVENT_TYPE = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary insert
 * @constant
 * @type {number}
 */
export
const insert: BioAPI_UNIT_EVENT_TYPE = BioAPI_UNIT_EVENT_TYPE_insert; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BioAPI_UNIT_EVENT_TYPE_remove
 * @constant
 * @type {number}
 */
export
const BioAPI_UNIT_EVENT_TYPE_remove: BioAPI_UNIT_EVENT_TYPE = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary remove
 * @constant
 * @type {number}
 */
export
const remove: BioAPI_UNIT_EVENT_TYPE = BioAPI_UNIT_EVENT_TYPE_remove; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BioAPI_UNIT_EVENT_TYPE_fault
 * @constant
 * @type {number}
 */
export
const BioAPI_UNIT_EVENT_TYPE_fault: BioAPI_UNIT_EVENT_TYPE = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fault
 * @constant
 * @type {number}
 */
export
const fault: BioAPI_UNIT_EVENT_TYPE = BioAPI_UNIT_EVENT_TYPE_fault; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BioAPI_UNIT_EVENT_TYPE_sourcePresent
 * @constant
 * @type {number}
 */
export
const BioAPI_UNIT_EVENT_TYPE_sourcePresent: BioAPI_UNIT_EVENT_TYPE = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sourcePresent
 * @constant
 * @type {number}
 */
export
const sourcePresent: BioAPI_UNIT_EVENT_TYPE = BioAPI_UNIT_EVENT_TYPE_sourcePresent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BioAPI_UNIT_EVENT_TYPE_sourceRemoved
 * @constant
 * @type {number}
 */
export
const BioAPI_UNIT_EVENT_TYPE_sourceRemoved: BioAPI_UNIT_EVENT_TYPE = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sourceRemoved
 * @constant
 * @type {number}
 */
export
const sourceRemoved: BioAPI_UNIT_EVENT_TYPE = BioAPI_UNIT_EVENT_TYPE_sourceRemoved; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_BioAPI_UNIT_EVENT_TYPE: $.ASN1Decoder<BioAPI_UNIT_EVENT_TYPE> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_UNIT_EVENT_TYPE
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BioAPI_UNIT_EVENT_TYPE (el: _Element): BioAPI_UNIT_EVENT_TYPE {
    if (!_cached_decoder_for_BioAPI_UNIT_EVENT_TYPE) { _cached_decoder_for_BioAPI_UNIT_EVENT_TYPE = $._decodeEnumerated; }
    return _cached_decoder_for_BioAPI_UNIT_EVENT_TYPE(el);
}

let _cached_encoder_for_BioAPI_UNIT_EVENT_TYPE: $.ASN1Encoder<BioAPI_UNIT_EVENT_TYPE> | null = null;

/**
 * @summary Encodes a(n) BioAPI_UNIT_EVENT_TYPE into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_UNIT_EVENT_TYPE, encoded as an ASN.1 Element.
 */
export
function _encode_BioAPI_UNIT_EVENT_TYPE (value: BioAPI_UNIT_EVENT_TYPE, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BioAPI_UNIT_EVENT_TYPE) { _cached_encoder_for_BioAPI_UNIT_EVENT_TYPE = $._encodeEnumerated; }
    return _cached_encoder_for_BioAPI_UNIT_EVENT_TYPE(value, elGetter);
}


/* eslint-enable */
