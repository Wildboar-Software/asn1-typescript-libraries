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
 * @summary UDMSubscriberRecordChangeMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMSubscriberRecordChangeMethod  ::=  ENUMERATED
 * {
 *     pEIChange(1),
 *     sUPIChange(2),
 *     gPSIChange(3),
 *     uEDeprovisioning(4),
 *     unknown(5),
 *     serviceIDChange(6),
 *     multipleIDChanges(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_UDMSubscriberRecordChangeMethod {
    pEIChange = 1,
    sUPIChange = 2,
    gPSIChange = 3,
    uEDeprovisioning = 4,
    unknown = 5,
    serviceIDChange = 6,
    multipleIDChanges = 7,
}

/**
 * @summary UDMSubscriberRecordChangeMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMSubscriberRecordChangeMethod  ::=  ENUMERATED
 * {
 *     pEIChange(1),
 *     sUPIChange(2),
 *     gPSIChange(3),
 *     uEDeprovisioning(4),
 *     unknown(5),
 *     serviceIDChange(6),
 *     multipleIDChanges(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type UDMSubscriberRecordChangeMethod = _enum_for_UDMSubscriberRecordChangeMethod;

/**
 * @summary UDMSubscriberRecordChangeMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMSubscriberRecordChangeMethod  ::=  ENUMERATED
 * {
 *     pEIChange(1),
 *     sUPIChange(2),
 *     gPSIChange(3),
 *     uEDeprovisioning(4),
 *     unknown(5),
 *     serviceIDChange(6),
 *     multipleIDChanges(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const UDMSubscriberRecordChangeMethod = _enum_for_UDMSubscriberRecordChangeMethod;

/**
 * @summary UDMSubscriberRecordChangeMethod_pEIChange
 * @constant
 * @type {number}
 */
export
const UDMSubscriberRecordChangeMethod_pEIChange: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.pEIChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pEIChange
 * @constant
 * @type {number}
 */
export
const pEIChange: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.pEIChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMSubscriberRecordChangeMethod_sUPIChange
 * @constant
 * @type {number}
 */
export
const UDMSubscriberRecordChangeMethod_sUPIChange: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.sUPIChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sUPIChange
 * @constant
 * @type {number}
 */
export
const sUPIChange: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.sUPIChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMSubscriberRecordChangeMethod_gPSIChange
 * @constant
 * @type {number}
 */
export
const UDMSubscriberRecordChangeMethod_gPSIChange: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.gPSIChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPSIChange
 * @constant
 * @type {number}
 */
export
const gPSIChange: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.gPSIChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMSubscriberRecordChangeMethod_uEDeprovisioning
 * @constant
 * @type {number}
 */
export
const UDMSubscriberRecordChangeMethod_uEDeprovisioning: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.uEDeprovisioning; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEDeprovisioning
 * @constant
 * @type {number}
 */
export
const uEDeprovisioning: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.uEDeprovisioning; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMSubscriberRecordChangeMethod_unknown
 * @constant
 * @type {number}
 */
export
const UDMSubscriberRecordChangeMethod_unknown: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMSubscriberRecordChangeMethod_serviceIDChange
 * @constant
 * @type {number}
 */
export
const UDMSubscriberRecordChangeMethod_serviceIDChange: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.serviceIDChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceIDChange
 * @constant
 * @type {number}
 */
export
const serviceIDChange: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.serviceIDChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMSubscriberRecordChangeMethod_multipleIDChanges
 * @constant
 * @type {number}
 */
export
const UDMSubscriberRecordChangeMethod_multipleIDChanges: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.multipleIDChanges; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multipleIDChanges
 * @constant
 * @type {number}
 */
export
const multipleIDChanges: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.multipleIDChanges; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_UDMSubscriberRecordChangeMethod: $.ASN1Decoder<UDMSubscriberRecordChangeMethod> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDMSubscriberRecordChangeMethod
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDMSubscriberRecordChangeMethod (el: _Element): UDMSubscriberRecordChangeMethod {
    if (!_cached_decoder_for_UDMSubscriberRecordChangeMethod) { _cached_decoder_for_UDMSubscriberRecordChangeMethod = $._decodeEnumerated; }
    return _cached_decoder_for_UDMSubscriberRecordChangeMethod(el);
}

let _cached_encoder_for_UDMSubscriberRecordChangeMethod: $.ASN1Encoder<UDMSubscriberRecordChangeMethod> | null = null;

/**
 * @summary Encodes a(n) UDMSubscriberRecordChangeMethod into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDMSubscriberRecordChangeMethod, encoded as an ASN.1 Element.
 */
export
function _encode_UDMSubscriberRecordChangeMethod (value: UDMSubscriberRecordChangeMethod, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDMSubscriberRecordChangeMethod) { _cached_encoder_for_UDMSubscriberRecordChangeMethod = $._encodeEnumerated; }
    return _cached_encoder_for_UDMSubscriberRecordChangeMethod(value, elGetter);
}


/* eslint-enable */
