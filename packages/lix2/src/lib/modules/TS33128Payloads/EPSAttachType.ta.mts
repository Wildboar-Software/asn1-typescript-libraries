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
 * @summary EPSAttachType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSAttachType  ::=  ENUMERATED
 * {
 *     ePSAttach(1),
 *     combinedEPSIMSIAttach(2),
 *     ePSRLOSAttach(3),
 *     ePSEmergencyAttach(4),
 *     reserved(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EPSAttachType {
    ePSAttach = 1,
    combinedEPSIMSIAttach = 2,
    ePSRLOSAttach = 3,
    ePSEmergencyAttach = 4,
    reserved = 5,
}

/**
 * @summary EPSAttachType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSAttachType  ::=  ENUMERATED
 * {
 *     ePSAttach(1),
 *     combinedEPSIMSIAttach(2),
 *     ePSRLOSAttach(3),
 *     ePSEmergencyAttach(4),
 *     reserved(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EPSAttachType = _enum_for_EPSAttachType;

/**
 * @summary EPSAttachType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSAttachType  ::=  ENUMERATED
 * {
 *     ePSAttach(1),
 *     combinedEPSIMSIAttach(2),
 *     ePSRLOSAttach(3),
 *     ePSEmergencyAttach(4),
 *     reserved(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EPSAttachType = _enum_for_EPSAttachType;

/**
 * @summary EPSAttachType_ePSAttach
 * @constant
 * @type {number}
 */
export
const EPSAttachType_ePSAttach: EPSAttachType = EPSAttachType.ePSAttach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePSAttach
 * @constant
 * @type {number}
 */
export
const ePSAttach: EPSAttachType = EPSAttachType.ePSAttach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSAttachType_combinedEPSIMSIAttach
 * @constant
 * @type {number}
 */
export
const EPSAttachType_combinedEPSIMSIAttach: EPSAttachType = EPSAttachType.combinedEPSIMSIAttach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary combinedEPSIMSIAttach
 * @constant
 * @type {number}
 */
export
const combinedEPSIMSIAttach: EPSAttachType = EPSAttachType.combinedEPSIMSIAttach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSAttachType_ePSRLOSAttach
 * @constant
 * @type {number}
 */
export
const EPSAttachType_ePSRLOSAttach: EPSAttachType = EPSAttachType.ePSRLOSAttach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePSRLOSAttach
 * @constant
 * @type {number}
 */
export
const ePSRLOSAttach: EPSAttachType = EPSAttachType.ePSRLOSAttach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSAttachType_ePSEmergencyAttach
 * @constant
 * @type {number}
 */
export
const EPSAttachType_ePSEmergencyAttach: EPSAttachType = EPSAttachType.ePSEmergencyAttach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePSEmergencyAttach
 * @constant
 * @type {number}
 */
export
const ePSEmergencyAttach: EPSAttachType = EPSAttachType.ePSEmergencyAttach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSAttachType_reserved
 * @constant
 * @type {number}
 */
export
const EPSAttachType_reserved: EPSAttachType = EPSAttachType.reserved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved
 * @constant
 * @type {number}
 */
export
const reserved: EPSAttachType = EPSAttachType.reserved; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_EPSAttachType: $.ASN1Decoder<EPSAttachType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSAttachType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSAttachType (el: _Element): EPSAttachType {
    if (!_cached_decoder_for_EPSAttachType) { _cached_decoder_for_EPSAttachType = $._decodeEnumerated; }
    return _cached_decoder_for_EPSAttachType(el);
}

let _cached_encoder_for_EPSAttachType: $.ASN1Encoder<EPSAttachType> | null = null;

/**
 * @summary Encodes a(n) EPSAttachType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSAttachType, encoded as an ASN.1 Element.
 */
export
function _encode_EPSAttachType (value: EPSAttachType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSAttachType) { _cached_encoder_for_EPSAttachType = $._encodeEnumerated; }
    return _cached_encoder_for_EPSAttachType(value, elGetter);
}


/* eslint-enable */
