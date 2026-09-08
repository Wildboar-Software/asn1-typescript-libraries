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



/**
 * @summary CollectionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CollectionType  ::=  ENUMERATED
 * {    periodic            (0),
 *     periodicWithUpdates        (1),
 *     updatesOnly            (2) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CollectionType {
    periodic = 0,
    periodicWithUpdates = 1,
    updatesOnly = 2,
}

/**
 * @summary CollectionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CollectionType  ::=  ENUMERATED
 * {    periodic            (0),
 *     periodicWithUpdates        (1),
 *     updatesOnly            (2) }
 * ```
 * 
 * @enum {number}
 */
export
type CollectionType = _enum_for_CollectionType;

/**
 * @summary CollectionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CollectionType  ::=  ENUMERATED
 * {    periodic            (0),
 *     periodicWithUpdates        (1),
 *     updatesOnly            (2) }
 * ```
 * 
 * @enum {number}
 */
export
const CollectionType = _enum_for_CollectionType;

/**
 * @summary CollectionType_periodic
 * @constant
 * @type {number}
 */
export
const CollectionType_periodic: CollectionType = CollectionType.periodic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary periodic
 * @constant
 * @type {number}
 */
export
const periodic: CollectionType = CollectionType.periodic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CollectionType_periodicWithUpdates
 * @constant
 * @type {number}
 */
export
const CollectionType_periodicWithUpdates: CollectionType = CollectionType.periodicWithUpdates; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary periodicWithUpdates
 * @constant
 * @type {number}
 */
export
const periodicWithUpdates: CollectionType = CollectionType.periodicWithUpdates; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CollectionType_updatesOnly
 * @constant
 * @type {number}
 */
export
const CollectionType_updatesOnly: CollectionType = CollectionType.updatesOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary updatesOnly
 * @constant
 * @type {number}
 */
export
const updatesOnly: CollectionType = CollectionType.updatesOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CollectionType: $.ASN1Decoder<CollectionType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CollectionType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CollectionType (el: _Element): CollectionType {
    if (!_cached_decoder_for_CollectionType) { _cached_decoder_for_CollectionType = $._decodeEnumerated; }
    return _cached_decoder_for_CollectionType(el);
}

let _cached_encoder_for_CollectionType: $.ASN1Encoder<CollectionType> | null = null;

/**
 * @summary Encodes a(n) CollectionType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CollectionType, encoded as an ASN.1 Element.
 */
export
function _encode_CollectionType (value: CollectionType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CollectionType) { _cached_encoder_for_CollectionType = $._encodeEnumerated; }
    return _cached_encoder_for_CollectionType(value, elGetter);
}


/* eslint-enable */
