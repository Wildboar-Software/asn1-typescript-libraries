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
 * @summary ErrorControl_Item_v42featureNegotiation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorControl-Item-v42featureNegotiation ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ErrorControl_Item_v42featureNegotiation = BIT_STRING;

/**
 * @summary ErrorControl_Item_v42featureNegotiation_singleSREJ
 * @constant
 */
export
const ErrorControl_Item_v42featureNegotiation_singleSREJ: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary singleSREJ
 * @constant
 */
export
const singleSREJ: number = ErrorControl_Item_v42featureNegotiation_singleSREJ; /* SHORT_NAMED_BIT */

/**
 * @summary ErrorControl_Item_v42featureNegotiation_multipleSREJ
 * @constant
 */
export
const ErrorControl_Item_v42featureNegotiation_multipleSREJ: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary multipleSREJ
 * @constant
 */
export
const multipleSREJ: number = ErrorControl_Item_v42featureNegotiation_multipleSREJ; /* SHORT_NAMED_BIT */

/**
 * @summary ErrorControl_Item_v42featureNegotiation_hDLCBalMode
 * @constant
 */
export
const ErrorControl_Item_v42featureNegotiation_hDLCBalMode: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary hDLCBalMode
 * @constant
 */
export
const hDLCBalMode: number = ErrorControl_Item_v42featureNegotiation_hDLCBalMode; /* SHORT_NAMED_BIT */

/**
 * @summary ErrorControl_Item_v42featureNegotiation_testFrameSup
 * @constant
 */
export
const ErrorControl_Item_v42featureNegotiation_testFrameSup: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary testFrameSup
 * @constant
 */
export
const testFrameSup: number = ErrorControl_Item_v42featureNegotiation_testFrameSup; /* SHORT_NAMED_BIT */

/**
 * @summary ErrorControl_Item_v42featureNegotiation_fcs16
 * @constant
 */
export
const ErrorControl_Item_v42featureNegotiation_fcs16: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary fcs16
 * @constant
 */
export
const fcs16: number = ErrorControl_Item_v42featureNegotiation_fcs16; /* SHORT_NAMED_BIT */

/**
 * @summary ErrorControl_Item_v42featureNegotiation_fcs32
 * @constant
 */
export
const ErrorControl_Item_v42featureNegotiation_fcs32: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary fcs32
 * @constant
 */
export
const fcs32: number = ErrorControl_Item_v42featureNegotiation_fcs32; /* SHORT_NAMED_BIT */

/**
 * @summary ErrorControl_Item_v42featureNegotiation_v42phaseDetused
 * @constant
 */
export
const ErrorControl_Item_v42featureNegotiation_v42phaseDetused: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary v42phaseDetused
 * @constant
 */
export
const v42phaseDetused: number = ErrorControl_Item_v42featureNegotiation_v42phaseDetused; /* SHORT_NAMED_BIT */

/**
 * @summary ErrorControl_Item_v42featureNegotiation_odpAdpbypassed
 * @constant
 */
export
const ErrorControl_Item_v42featureNegotiation_odpAdpbypassed: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary odpAdpbypassed
 * @constant
 */
export
const odpAdpbypassed: number = ErrorControl_Item_v42featureNegotiation_odpAdpbypassed; /* SHORT_NAMED_BIT */

/**
 * @summary ErrorControl_Item_v42featureNegotiation_v42fallbackDisc
 * @constant
 */
export
const ErrorControl_Item_v42featureNegotiation_v42fallbackDisc: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary v42fallbackDisc
 * @constant
 */
export
const v42fallbackDisc: number = ErrorControl_Item_v42featureNegotiation_v42fallbackDisc; /* SHORT_NAMED_BIT */

/**
 * @summary ErrorControl_Item_v42featureNegotiation_v42fallbackBuf
 * @constant
 */
export
const ErrorControl_Item_v42featureNegotiation_v42fallbackBuf: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary v42fallbackBuf
 * @constant
 */
export
const v42fallbackBuf: number = ErrorControl_Item_v42featureNegotiation_v42fallbackBuf; /* SHORT_NAMED_BIT */

/**
 * @summary ErrorControl_Item_v42featureNegotiation_v42fallbackUnBuf
 * @constant
 */
export
const ErrorControl_Item_v42featureNegotiation_v42fallbackUnBuf: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary v42fallbackUnBuf
 * @constant
 */
export
const v42fallbackUnBuf: number = ErrorControl_Item_v42featureNegotiation_v42fallbackUnBuf; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ErrorControl_Item_v42featureNegotiation: $.ASN1Decoder<ErrorControl_Item_v42featureNegotiation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ErrorControl_Item_v42featureNegotiation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ErrorControl_Item_v42featureNegotiation (el: _Element): ErrorControl_Item_v42featureNegotiation {
    if (!_cached_decoder_for_ErrorControl_Item_v42featureNegotiation) { _cached_decoder_for_ErrorControl_Item_v42featureNegotiation = $._decodeBitString; }
    return _cached_decoder_for_ErrorControl_Item_v42featureNegotiation(el);
}

let _cached_encoder_for_ErrorControl_Item_v42featureNegotiation: $.ASN1Encoder<ErrorControl_Item_v42featureNegotiation> | null = null;

/**
 * @summary Encodes a(n) ErrorControl_Item_v42featureNegotiation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorControl_Item_v42featureNegotiation, encoded as an ASN.1 Element.
 */
export
function _encode_ErrorControl_Item_v42featureNegotiation (value: ErrorControl_Item_v42featureNegotiation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ErrorControl_Item_v42featureNegotiation) { _cached_encoder_for_ErrorControl_Item_v42featureNegotiation = $._encodeBitString; }
    return _cached_encoder_for_ErrorControl_Item_v42featureNegotiation(value, elGetter);
}


/* eslint-enable */
