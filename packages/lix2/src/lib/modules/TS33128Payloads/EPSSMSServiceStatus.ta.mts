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
 * @summary EPSSMSServiceStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSSMSServiceStatus  ::=  ENUMERATED
 * {
 *     sMSServicesNotAvailable(1),
 *     sMSServicesNotAvailableInThisPLMN(2),
 *     networkFailure(3),
 *     congestion(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EPSSMSServiceStatus {
    sMSServicesNotAvailable = 1,
    sMSServicesNotAvailableInThisPLMN = 2,
    networkFailure = 3,
    congestion = 4,
}

/**
 * @summary EPSSMSServiceStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSSMSServiceStatus  ::=  ENUMERATED
 * {
 *     sMSServicesNotAvailable(1),
 *     sMSServicesNotAvailableInThisPLMN(2),
 *     networkFailure(3),
 *     congestion(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EPSSMSServiceStatus = _enum_for_EPSSMSServiceStatus;

/**
 * @summary EPSSMSServiceStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSSMSServiceStatus  ::=  ENUMERATED
 * {
 *     sMSServicesNotAvailable(1),
 *     sMSServicesNotAvailableInThisPLMN(2),
 *     networkFailure(3),
 *     congestion(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EPSSMSServiceStatus = _enum_for_EPSSMSServiceStatus;

/**
 * @summary EPSSMSServiceStatus_sMSServicesNotAvailable
 * @constant
 * @type {number}
 */
export
const EPSSMSServiceStatus_sMSServicesNotAvailable: EPSSMSServiceStatus = EPSSMSServiceStatus.sMSServicesNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMSServicesNotAvailable
 * @constant
 * @type {number}
 */
export
const sMSServicesNotAvailable: EPSSMSServiceStatus = EPSSMSServiceStatus.sMSServicesNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSSMSServiceStatus_sMSServicesNotAvailableInThisPLMN
 * @constant
 * @type {number}
 */
export
const EPSSMSServiceStatus_sMSServicesNotAvailableInThisPLMN: EPSSMSServiceStatus = EPSSMSServiceStatus.sMSServicesNotAvailableInThisPLMN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMSServicesNotAvailableInThisPLMN
 * @constant
 * @type {number}
 */
export
const sMSServicesNotAvailableInThisPLMN: EPSSMSServiceStatus = EPSSMSServiceStatus.sMSServicesNotAvailableInThisPLMN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSSMSServiceStatus_networkFailure
 * @constant
 * @type {number}
 */
export
const EPSSMSServiceStatus_networkFailure: EPSSMSServiceStatus = EPSSMSServiceStatus.networkFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkFailure
 * @constant
 * @type {number}
 */
export
const networkFailure: EPSSMSServiceStatus = EPSSMSServiceStatus.networkFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSSMSServiceStatus_congestion
 * @constant
 * @type {number}
 */
export
const EPSSMSServiceStatus_congestion: EPSSMSServiceStatus = EPSSMSServiceStatus.congestion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary congestion
 * @constant
 * @type {number}
 */
export
const congestion: EPSSMSServiceStatus = EPSSMSServiceStatus.congestion; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_EPSSMSServiceStatus: $.ASN1Decoder<EPSSMSServiceStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSSMSServiceStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSSMSServiceStatus (el: _Element): EPSSMSServiceStatus {
    if (!_cached_decoder_for_EPSSMSServiceStatus) { _cached_decoder_for_EPSSMSServiceStatus = $._decodeEnumerated; }
    return _cached_decoder_for_EPSSMSServiceStatus(el);
}

let _cached_encoder_for_EPSSMSServiceStatus: $.ASN1Encoder<EPSSMSServiceStatus> | null = null;

/**
 * @summary Encodes a(n) EPSSMSServiceStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSSMSServiceStatus, encoded as an ASN.1 Element.
 */
export
function _encode_EPSSMSServiceStatus (value: EPSSMSServiceStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSSMSServiceStatus) { _cached_encoder_for_EPSSMSServiceStatus = $._encodeEnumerated; }
    return _cached_encoder_for_EPSSMSServiceStatus(value, elGetter);
}


/* eslint-enable */
