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
 * @summary EPSDetachType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSDetachType  ::=  ENUMERATED
 * {
 *     ePSDetach(1),
 *     iMSIDetach(2),
 *     combinedEPSIMSIDetach(3),
 *     reAttachRequired(4),
 *     reAttachNotRequired(5),
 *     reserved(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EPSDetachType {
    ePSDetach = 1,
    iMSIDetach = 2,
    combinedEPSIMSIDetach = 3,
    reAttachRequired = 4,
    reAttachNotRequired = 5,
    reserved = 6,
}

/**
 * @summary EPSDetachType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSDetachType  ::=  ENUMERATED
 * {
 *     ePSDetach(1),
 *     iMSIDetach(2),
 *     combinedEPSIMSIDetach(3),
 *     reAttachRequired(4),
 *     reAttachNotRequired(5),
 *     reserved(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EPSDetachType = _enum_for_EPSDetachType;

/**
 * @summary EPSDetachType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSDetachType  ::=  ENUMERATED
 * {
 *     ePSDetach(1),
 *     iMSIDetach(2),
 *     combinedEPSIMSIDetach(3),
 *     reAttachRequired(4),
 *     reAttachNotRequired(5),
 *     reserved(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EPSDetachType = _enum_for_EPSDetachType;

/**
 * @summary EPSDetachType_ePSDetach
 * @constant
 * @type {number}
 */
export
const EPSDetachType_ePSDetach: EPSDetachType = EPSDetachType.ePSDetach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePSDetach
 * @constant
 * @type {number}
 */
export
const ePSDetach: EPSDetachType = EPSDetachType.ePSDetach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSDetachType_iMSIDetach
 * @constant
 * @type {number}
 */
export
const EPSDetachType_iMSIDetach: EPSDetachType = EPSDetachType.iMSIDetach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMSIDetach
 * @constant
 * @type {number}
 */
export
const iMSIDetach: EPSDetachType = EPSDetachType.iMSIDetach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSDetachType_combinedEPSIMSIDetach
 * @constant
 * @type {number}
 */
export
const EPSDetachType_combinedEPSIMSIDetach: EPSDetachType = EPSDetachType.combinedEPSIMSIDetach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary combinedEPSIMSIDetach
 * @constant
 * @type {number}
 */
export
const combinedEPSIMSIDetach: EPSDetachType = EPSDetachType.combinedEPSIMSIDetach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSDetachType_reAttachRequired
 * @constant
 * @type {number}
 */
export
const EPSDetachType_reAttachRequired: EPSDetachType = EPSDetachType.reAttachRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reAttachRequired
 * @constant
 * @type {number}
 */
export
const reAttachRequired: EPSDetachType = EPSDetachType.reAttachRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSDetachType_reAttachNotRequired
 * @constant
 * @type {number}
 */
export
const EPSDetachType_reAttachNotRequired: EPSDetachType = EPSDetachType.reAttachNotRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reAttachNotRequired
 * @constant
 * @type {number}
 */
export
const reAttachNotRequired: EPSDetachType = EPSDetachType.reAttachNotRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSDetachType_reserved
 * @constant
 * @type {number}
 */
export
const EPSDetachType_reserved: EPSDetachType = EPSDetachType.reserved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved
 * @constant
 * @type {number}
 */
export
const reserved: EPSDetachType = EPSDetachType.reserved; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_EPSDetachType: $.ASN1Decoder<EPSDetachType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSDetachType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSDetachType (el: _Element): EPSDetachType {
    if (!_cached_decoder_for_EPSDetachType) { _cached_decoder_for_EPSDetachType = $._decodeEnumerated; }
    return _cached_decoder_for_EPSDetachType(el);
}

let _cached_encoder_for_EPSDetachType: $.ASN1Encoder<EPSDetachType> | null = null;

/**
 * @summary Encodes a(n) EPSDetachType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSDetachType, encoded as an ASN.1 Element.
 */
export
function _encode_EPSDetachType (value: EPSDetachType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSDetachType) { _cached_encoder_for_EPSDetachType = $._encodeEnumerated; }
    return _cached_encoder_for_EPSDetachType(value, elGetter);
}


/* eslint-enable */
