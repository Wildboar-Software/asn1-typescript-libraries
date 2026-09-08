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
 * @summary ProgressIndicator_progressDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProgressIndicator-progressDescription ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ProgressIndicator_progressDescription {
    iSDNProgressDesc = 0,
    qSIGProgressDesc = 1,
    other = 2,
}

/**
 * @summary ProgressIndicator_progressDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProgressIndicator-progressDescription ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type ProgressIndicator_progressDescription = _enum_for_ProgressIndicator_progressDescription;

/**
 * @summary ProgressIndicator_progressDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProgressIndicator-progressDescription ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const ProgressIndicator_progressDescription = _enum_for_ProgressIndicator_progressDescription;

/**
 * @summary ProgressIndicator_progressDescription_iSDNProgressDesc
 * @constant
 * @type {number}
 */
export
const ProgressIndicator_progressDescription_iSDNProgressDesc: ProgressIndicator_progressDescription = ProgressIndicator_progressDescription.iSDNProgressDesc; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iSDNProgressDesc
 * @constant
 * @type {number}
 */
export
const iSDNProgressDesc: ProgressIndicator_progressDescription = ProgressIndicator_progressDescription.iSDNProgressDesc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProgressIndicator_progressDescription_qSIGProgressDesc
 * @constant
 * @type {number}
 */
export
const ProgressIndicator_progressDescription_qSIGProgressDesc: ProgressIndicator_progressDescription = ProgressIndicator_progressDescription.qSIGProgressDesc; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary qSIGProgressDesc
 * @constant
 * @type {number}
 */
export
const qSIGProgressDesc: ProgressIndicator_progressDescription = ProgressIndicator_progressDescription.qSIGProgressDesc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProgressIndicator_progressDescription_other
 * @constant
 * @type {number}
 */
export
const ProgressIndicator_progressDescription_other: ProgressIndicator_progressDescription = ProgressIndicator_progressDescription.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: ProgressIndicator_progressDescription = ProgressIndicator_progressDescription.other; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ProgressIndicator_progressDescription: $.ASN1Decoder<ProgressIndicator_progressDescription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProgressIndicator_progressDescription
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProgressIndicator_progressDescription (el: _Element): ProgressIndicator_progressDescription {
    if (!_cached_decoder_for_ProgressIndicator_progressDescription) { _cached_decoder_for_ProgressIndicator_progressDescription = $._decodeEnumerated; }
    return _cached_decoder_for_ProgressIndicator_progressDescription(el);
}

let _cached_encoder_for_ProgressIndicator_progressDescription: $.ASN1Encoder<ProgressIndicator_progressDescription> | null = null;

/**
 * @summary Encodes a(n) ProgressIndicator_progressDescription into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProgressIndicator_progressDescription, encoded as an ASN.1 Element.
 */
export
function _encode_ProgressIndicator_progressDescription (value: ProgressIndicator_progressDescription, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProgressIndicator_progressDescription) { _cached_encoder_for_ProgressIndicator_progressDescription = $._encodeEnumerated; }
    return _cached_encoder_for_ProgressIndicator_progressDescription(value, elGetter);
}


/* eslint-enable */
