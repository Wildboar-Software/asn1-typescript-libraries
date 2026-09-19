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
 * @summary Ct
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ct  ::=  ENUMERATED{
 *         voicebandInformation(0),
 *         circuitModeData(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Ct {
    voicebandInformation = 0,
    circuitModeData = 1,
}

/**
 * @summary Ct
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ct  ::=  ENUMERATED{
 *         voicebandInformation(0),
 *         circuitModeData(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type Ct = _enum_for_Ct;

/**
 * @summary Ct
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ct  ::=  ENUMERATED{
 *         voicebandInformation(0),
 *         circuitModeData(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const Ct = _enum_for_Ct;

/**
 * @summary Ct_voicebandInformation
 * @constant
 * @type {number}
 */
export
const Ct_voicebandInformation: Ct = Ct.voicebandInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary voicebandInformation
 * @constant
 * @type {number}
 */
export
const voicebandInformation: Ct = Ct.voicebandInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Ct_circuitModeData
 * @constant
 * @type {number}
 */
export
const Ct_circuitModeData: Ct = Ct.circuitModeData; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary circuitModeData
 * @constant
 * @type {number}
 */
export
const circuitModeData: Ct = Ct.circuitModeData; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Ct: $.ASN1Decoder<Ct> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Ct
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Ct (el: _Element): Ct {
    if (!_cached_decoder_for_Ct) { _cached_decoder_for_Ct = $._decodeEnumerated; }
    return _cached_decoder_for_Ct(el);
}

let _cached_encoder_for_Ct: $.ASN1Encoder<Ct> | null = null;

/**
 * @summary Encodes a(n) Ct into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ct, encoded as an ASN.1 Element.
 */
export
function _encode_Ct (value: Ct, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Ct) { _cached_encoder_for_Ct = $._encodeEnumerated; }
    return _cached_encoder_for_Ct(value, elGetter);
}


/* eslint-enable */
