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
 * @summary Usage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Usage  ::=  ENUMERATED
 * {
 *     unsuccess(1),
 *     successResultsNotUsed(2),
 *     successResultsUsedToVerifyLocation(3),
 *     successResultsUsedToGenerateLocation(4),
 *     successMethodNotDetermined(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Usage {
    unsuccess = 1,
    successResultsNotUsed = 2,
    successResultsUsedToVerifyLocation = 3,
    successResultsUsedToGenerateLocation = 4,
    successMethodNotDetermined = 5,
}

/**
 * @summary Usage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Usage  ::=  ENUMERATED
 * {
 *     unsuccess(1),
 *     successResultsNotUsed(2),
 *     successResultsUsedToVerifyLocation(3),
 *     successResultsUsedToGenerateLocation(4),
 *     successMethodNotDetermined(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Usage = _enum_for_Usage;

/**
 * @summary Usage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Usage  ::=  ENUMERATED
 * {
 *     unsuccess(1),
 *     successResultsNotUsed(2),
 *     successResultsUsedToVerifyLocation(3),
 *     successResultsUsedToGenerateLocation(4),
 *     successMethodNotDetermined(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Usage = _enum_for_Usage;

/**
 * @summary Usage_unsuccess
 * @constant
 * @type {number}
 */
export
const Usage_unsuccess: Usage = Usage.unsuccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsuccess
 * @constant
 * @type {number}
 */
export
const unsuccess: Usage = Usage.unsuccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Usage_successResultsNotUsed
 * @constant
 * @type {number}
 */
export
const Usage_successResultsNotUsed: Usage = Usage.successResultsNotUsed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary successResultsNotUsed
 * @constant
 * @type {number}
 */
export
const successResultsNotUsed: Usage = Usage.successResultsNotUsed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Usage_successResultsUsedToVerifyLocation
 * @constant
 * @type {number}
 */
export
const Usage_successResultsUsedToVerifyLocation: Usage = Usage.successResultsUsedToVerifyLocation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary successResultsUsedToVerifyLocation
 * @constant
 * @type {number}
 */
export
const successResultsUsedToVerifyLocation: Usage = Usage.successResultsUsedToVerifyLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Usage_successResultsUsedToGenerateLocation
 * @constant
 * @type {number}
 */
export
const Usage_successResultsUsedToGenerateLocation: Usage = Usage.successResultsUsedToGenerateLocation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary successResultsUsedToGenerateLocation
 * @constant
 * @type {number}
 */
export
const successResultsUsedToGenerateLocation: Usage = Usage.successResultsUsedToGenerateLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Usage_successMethodNotDetermined
 * @constant
 * @type {number}
 */
export
const Usage_successMethodNotDetermined: Usage = Usage.successMethodNotDetermined; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary successMethodNotDetermined
 * @constant
 * @type {number}
 */
export
const successMethodNotDetermined: Usage = Usage.successMethodNotDetermined; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Usage: $.ASN1Decoder<Usage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Usage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Usage (el: _Element): Usage {
    if (!_cached_decoder_for_Usage) { _cached_decoder_for_Usage = $._decodeEnumerated; }
    return _cached_decoder_for_Usage(el);
}

let _cached_encoder_for_Usage: $.ASN1Encoder<Usage> | null = null;

/**
 * @summary Encodes a(n) Usage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Usage, encoded as an ASN.1 Element.
 */
export
function _encode_Usage (value: Usage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Usage) { _cached_encoder_for_Usage = $._encodeEnumerated; }
    return _cached_encoder_for_Usage(value, elGetter);
}


/* eslint-enable */
