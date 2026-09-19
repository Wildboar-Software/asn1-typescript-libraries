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
 * @summary EPSAttachResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSAttachResult  ::=  ENUMERATED
 * {
 *     ePSOnly(1),
 *     combinedEPSIMSI(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EPSAttachResult {
    ePSOnly = 1,
    combinedEPSIMSI = 2,
}

/**
 * @summary EPSAttachResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSAttachResult  ::=  ENUMERATED
 * {
 *     ePSOnly(1),
 *     combinedEPSIMSI(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EPSAttachResult = _enum_for_EPSAttachResult;

/**
 * @summary EPSAttachResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSAttachResult  ::=  ENUMERATED
 * {
 *     ePSOnly(1),
 *     combinedEPSIMSI(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EPSAttachResult = _enum_for_EPSAttachResult;

/**
 * @summary EPSAttachResult_ePSOnly
 * @constant
 * @type {number}
 */
export
const EPSAttachResult_ePSOnly: EPSAttachResult = EPSAttachResult.ePSOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePSOnly
 * @constant
 * @type {number}
 */
export
const ePSOnly: EPSAttachResult = EPSAttachResult.ePSOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSAttachResult_combinedEPSIMSI
 * @constant
 * @type {number}
 */
export
const EPSAttachResult_combinedEPSIMSI: EPSAttachResult = EPSAttachResult.combinedEPSIMSI; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary combinedEPSIMSI
 * @constant
 * @type {number}
 */
export
const combinedEPSIMSI: EPSAttachResult = EPSAttachResult.combinedEPSIMSI; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_EPSAttachResult: $.ASN1Decoder<EPSAttachResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSAttachResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSAttachResult (el: _Element): EPSAttachResult {
    if (!_cached_decoder_for_EPSAttachResult) { _cached_decoder_for_EPSAttachResult = $._decodeEnumerated; }
    return _cached_decoder_for_EPSAttachResult(el);
}

let _cached_encoder_for_EPSAttachResult: $.ASN1Encoder<EPSAttachResult> | null = null;

/**
 * @summary Encodes a(n) EPSAttachResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSAttachResult, encoded as an ASN.1 Element.
 */
export
function _encode_EPSAttachResult (value: EPSAttachResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSAttachResult) { _cached_encoder_for_EPSAttachResult = $._encodeEnumerated; }
    return _cached_encoder_for_EPSAttachResult(value, elGetter);
}


/* eslint-enable */
