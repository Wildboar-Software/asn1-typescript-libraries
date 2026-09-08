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
 * @summary ForwardingType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardingType  ::=  ENUMERATED
 * {     forwardImmediate         ( 0),
 *     forwardBusy             ( 1),
 *     forwardNoAns             ( 2),
 *     forwardDND             ( 9),
 *     forwardBusyInt             ( 3),
 *     forwardBusyExt             ( 4),
 *     forwardNoAnsInt         ( 5),
 *     forwardNoAnsExt             ( 6),
 *     forwardImmInt             ( 7),
 *     forwardImmExt             ( 8),
 *     forwardDNDInt             (10),
 *     forwardDNDExt             (11) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ForwardingType {
    forwardImmediate = 0,
    forwardBusy = 1,
    forwardNoAns = 2,
    forwardDND = 9,
    forwardBusyInt = 3,
    forwardBusyExt = 4,
    forwardNoAnsInt = 5,
    forwardNoAnsExt = 6,
    forwardImmInt = 7,
    forwardImmExt = 8,
    forwardDNDInt = 10,
    forwardDNDExt = 11,
}

/**
 * @summary ForwardingType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardingType  ::=  ENUMERATED
 * {     forwardImmediate         ( 0),
 *     forwardBusy             ( 1),
 *     forwardNoAns             ( 2),
 *     forwardDND             ( 9),
 *     forwardBusyInt             ( 3),
 *     forwardBusyExt             ( 4),
 *     forwardNoAnsInt         ( 5),
 *     forwardNoAnsExt             ( 6),
 *     forwardImmInt             ( 7),
 *     forwardImmExt             ( 8),
 *     forwardDNDInt             (10),
 *     forwardDNDExt             (11) }
 * ```
 * 
 * @enum {number}
 */
export
type ForwardingType = _enum_for_ForwardingType;

/**
 * @summary ForwardingType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardingType  ::=  ENUMERATED
 * {     forwardImmediate         ( 0),
 *     forwardBusy             ( 1),
 *     forwardNoAns             ( 2),
 *     forwardDND             ( 9),
 *     forwardBusyInt             ( 3),
 *     forwardBusyExt             ( 4),
 *     forwardNoAnsInt         ( 5),
 *     forwardNoAnsExt             ( 6),
 *     forwardImmInt             ( 7),
 *     forwardImmExt             ( 8),
 *     forwardDNDInt             (10),
 *     forwardDNDExt             (11) }
 * ```
 * 
 * @enum {number}
 */
export
const ForwardingType = _enum_for_ForwardingType;

/**
 * @summary ForwardingType_forwardImmediate
 * @constant
 * @type {number}
 */
export
const ForwardingType_forwardImmediate: ForwardingType = ForwardingType.forwardImmediate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardImmediate
 * @constant
 * @type {number}
 */
export
const forwardImmediate: ForwardingType = ForwardingType.forwardImmediate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingType_forwardBusy
 * @constant
 * @type {number}
 */
export
const ForwardingType_forwardBusy: ForwardingType = ForwardingType.forwardBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardBusy
 * @constant
 * @type {number}
 */
export
const forwardBusy: ForwardingType = ForwardingType.forwardBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingType_forwardNoAns
 * @constant
 * @type {number}
 */
export
const ForwardingType_forwardNoAns: ForwardingType = ForwardingType.forwardNoAns; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardNoAns
 * @constant
 * @type {number}
 */
export
const forwardNoAns: ForwardingType = ForwardingType.forwardNoAns; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingType_forwardDND
 * @constant
 * @type {number}
 */
export
const ForwardingType_forwardDND: ForwardingType = ForwardingType.forwardDND; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardDND
 * @constant
 * @type {number}
 */
export
const forwardDND: ForwardingType = ForwardingType.forwardDND; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingType_forwardBusyInt
 * @constant
 * @type {number}
 */
export
const ForwardingType_forwardBusyInt: ForwardingType = ForwardingType.forwardBusyInt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardBusyInt
 * @constant
 * @type {number}
 */
export
const forwardBusyInt: ForwardingType = ForwardingType.forwardBusyInt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingType_forwardBusyExt
 * @constant
 * @type {number}
 */
export
const ForwardingType_forwardBusyExt: ForwardingType = ForwardingType.forwardBusyExt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardBusyExt
 * @constant
 * @type {number}
 */
export
const forwardBusyExt: ForwardingType = ForwardingType.forwardBusyExt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingType_forwardNoAnsInt
 * @constant
 * @type {number}
 */
export
const ForwardingType_forwardNoAnsInt: ForwardingType = ForwardingType.forwardNoAnsInt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardNoAnsInt
 * @constant
 * @type {number}
 */
export
const forwardNoAnsInt: ForwardingType = ForwardingType.forwardNoAnsInt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingType_forwardNoAnsExt
 * @constant
 * @type {number}
 */
export
const ForwardingType_forwardNoAnsExt: ForwardingType = ForwardingType.forwardNoAnsExt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardNoAnsExt
 * @constant
 * @type {number}
 */
export
const forwardNoAnsExt: ForwardingType = ForwardingType.forwardNoAnsExt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingType_forwardImmInt
 * @constant
 * @type {number}
 */
export
const ForwardingType_forwardImmInt: ForwardingType = ForwardingType.forwardImmInt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardImmInt
 * @constant
 * @type {number}
 */
export
const forwardImmInt: ForwardingType = ForwardingType.forwardImmInt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingType_forwardImmExt
 * @constant
 * @type {number}
 */
export
const ForwardingType_forwardImmExt: ForwardingType = ForwardingType.forwardImmExt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardImmExt
 * @constant
 * @type {number}
 */
export
const forwardImmExt: ForwardingType = ForwardingType.forwardImmExt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingType_forwardDNDInt
 * @constant
 * @type {number}
 */
export
const ForwardingType_forwardDNDInt: ForwardingType = ForwardingType.forwardDNDInt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardDNDInt
 * @constant
 * @type {number}
 */
export
const forwardDNDInt: ForwardingType = ForwardingType.forwardDNDInt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingType_forwardDNDExt
 * @constant
 * @type {number}
 */
export
const ForwardingType_forwardDNDExt: ForwardingType = ForwardingType.forwardDNDExt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardDNDExt
 * @constant
 * @type {number}
 */
export
const forwardDNDExt: ForwardingType = ForwardingType.forwardDNDExt; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ForwardingType: $.ASN1Decoder<ForwardingType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardingType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ForwardingType (el: _Element): ForwardingType {
    if (!_cached_decoder_for_ForwardingType) { _cached_decoder_for_ForwardingType = $._decodeEnumerated; }
    return _cached_decoder_for_ForwardingType(el);
}

let _cached_encoder_for_ForwardingType: $.ASN1Encoder<ForwardingType> | null = null;

/**
 * @summary Encodes a(n) ForwardingType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardingType, encoded as an ASN.1 Element.
 */
export
function _encode_ForwardingType (value: ForwardingType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ForwardingType) { _cached_encoder_for_ForwardingType = $._encodeEnumerated; }
    return _cached_encoder_for_ForwardingType(value, elGetter);
}


/* eslint-enable */
