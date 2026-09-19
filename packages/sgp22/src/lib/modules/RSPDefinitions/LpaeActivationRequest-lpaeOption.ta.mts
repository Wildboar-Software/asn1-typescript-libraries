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
 * @summary LpaeActivationRequest_lpaeOption
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LpaeActivationRequest-lpaeOption ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type LpaeActivationRequest_lpaeOption = BIT_STRING;

/**
 * @summary LpaeActivationRequest_lpaeOption_activateCatBasedLpae
 * @constant
 */
export
const LpaeActivationRequest_lpaeOption_activateCatBasedLpae: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary activateCatBasedLpae
 * @constant
 */
export
const activateCatBasedLpae: number = LpaeActivationRequest_lpaeOption_activateCatBasedLpae; /* SHORT_NAMED_BIT */

/**
 * @summary LpaeActivationRequest_lpaeOption_activateScwsBasedLpae
 * @constant
 */
export
const LpaeActivationRequest_lpaeOption_activateScwsBasedLpae: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary activateScwsBasedLpae
 * @constant
 */
export
const activateScwsBasedLpae: number = LpaeActivationRequest_lpaeOption_activateScwsBasedLpae; /* SHORT_NAMED_BIT */

let _cached_decoder_for_LpaeActivationRequest_lpaeOption: $.ASN1Decoder<LpaeActivationRequest_lpaeOption> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LpaeActivationRequest_lpaeOption
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LpaeActivationRequest_lpaeOption (el: _Element): LpaeActivationRequest_lpaeOption {
    if (!_cached_decoder_for_LpaeActivationRequest_lpaeOption) { _cached_decoder_for_LpaeActivationRequest_lpaeOption = $._decodeBitString; }
    return _cached_decoder_for_LpaeActivationRequest_lpaeOption(el);
}

let _cached_encoder_for_LpaeActivationRequest_lpaeOption: $.ASN1Encoder<LpaeActivationRequest_lpaeOption> | null = null;

/**
 * @summary Encodes a(n) LpaeActivationRequest_lpaeOption into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LpaeActivationRequest_lpaeOption, encoded as an ASN.1 Element.
 */
export
function _encode_LpaeActivationRequest_lpaeOption (value: LpaeActivationRequest_lpaeOption, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LpaeActivationRequest_lpaeOption) { _cached_encoder_for_LpaeActivationRequest_lpaeOption = $._encodeBitString; }
    return _cached_encoder_for_LpaeActivationRequest_lpaeOption(value, elGetter);
}


/* eslint-enable */
