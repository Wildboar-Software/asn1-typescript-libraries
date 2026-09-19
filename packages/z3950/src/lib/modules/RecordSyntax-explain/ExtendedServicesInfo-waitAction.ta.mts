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
 * @summary ExtendedServicesInfo_waitAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedServicesInfo-waitAction ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ExtendedServicesInfo_waitAction = INTEGER;

/**
 * @summary ExtendedServicesInfo_waitAction_waitSupported
 * @constant
 * @type {number}
 */
export
const ExtendedServicesInfo_waitAction_waitSupported: ExtendedServicesInfo_waitAction = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesInfo_waitAction_waitSupported
 * @constant
 * @type {number}
 */
export
const waitSupported: ExtendedServicesInfo_waitAction = ExtendedServicesInfo_waitAction_waitSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesInfo_waitAction_waitAlways
 * @constant
 * @type {number}
 */
export
const ExtendedServicesInfo_waitAction_waitAlways: ExtendedServicesInfo_waitAction = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesInfo_waitAction_waitAlways
 * @constant
 * @type {number}
 */
export
const waitAlways: ExtendedServicesInfo_waitAction = ExtendedServicesInfo_waitAction_waitAlways; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesInfo_waitAction_waitNotSupported
 * @constant
 * @type {number}
 */
export
const ExtendedServicesInfo_waitAction_waitNotSupported: ExtendedServicesInfo_waitAction = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesInfo_waitAction_waitNotSupported
 * @constant
 * @type {number}
 */
export
const waitNotSupported: ExtendedServicesInfo_waitAction = ExtendedServicesInfo_waitAction_waitNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesInfo_waitAction_depends
 * @constant
 * @type {number}
 */
export
const ExtendedServicesInfo_waitAction_depends: ExtendedServicesInfo_waitAction = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesInfo_waitAction_depends
 * @constant
 * @type {number}
 */
export
const depends: ExtendedServicesInfo_waitAction = ExtendedServicesInfo_waitAction_depends; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesInfo_waitAction_notSaying
 * @constant
 * @type {number}
 */
export
const ExtendedServicesInfo_waitAction_notSaying: ExtendedServicesInfo_waitAction = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesInfo_waitAction_notSaying
 * @constant
 * @type {number}
 */
export
const notSaying: ExtendedServicesInfo_waitAction = ExtendedServicesInfo_waitAction_notSaying; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ExtendedServicesInfo_waitAction: $.ASN1Decoder<ExtendedServicesInfo_waitAction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedServicesInfo_waitAction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtendedServicesInfo_waitAction (el: _Element): ExtendedServicesInfo_waitAction {
    if (!_cached_decoder_for_ExtendedServicesInfo_waitAction) { _cached_decoder_for_ExtendedServicesInfo_waitAction = $._decodeInteger; }
    return _cached_decoder_for_ExtendedServicesInfo_waitAction(el);
}

let _cached_encoder_for_ExtendedServicesInfo_waitAction: $.ASN1Encoder<ExtendedServicesInfo_waitAction> | null = null;

/**
 * @summary Encodes a(n) ExtendedServicesInfo_waitAction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedServicesInfo_waitAction, encoded as an ASN.1 Element.
 */
export
function _encode_ExtendedServicesInfo_waitAction (value: ExtendedServicesInfo_waitAction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtendedServicesInfo_waitAction) { _cached_encoder_for_ExtendedServicesInfo_waitAction = $._encodeInteger; }
    return _cached_encoder_for_ExtendedServicesInfo_waitAction(value, elGetter);
}


/* eslint-enable */
