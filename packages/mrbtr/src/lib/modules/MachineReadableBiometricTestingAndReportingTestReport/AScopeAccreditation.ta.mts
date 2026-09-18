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



export
enum _enum_for_AScopeAccreditation {
    iso_iec19795_1_2006 = 1,
    iso_iec19795_1_2021 = 2,
    iso_iec19795_3 = 3,
    iso_iec30107_4 = 4,
}

/**
 * @summary AScopeAccreditation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AScopeAccreditation  ::=  ENUMERATED {
 *     iso-iec19795-1-2006(1),
 *     iso-iec19795-1-2021(2),
 *     iso-iec19795-3(3),
 *     iso-iec30107-4(4),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AScopeAccreditation = _enum_for_AScopeAccreditation | ENUMERATED;

/**
 * @summary AScopeAccreditation_iso_iec19795_1_2006
 * @constant
 * @type {number}
 */
export
const AScopeAccreditation_iso_iec19795_1_2006: AScopeAccreditation = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iso_iec19795_1_2006
 * @constant
 * @type {number}
 */
export
const iso_iec19795_1_2006: AScopeAccreditation = AScopeAccreditation_iso_iec19795_1_2006; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AScopeAccreditation_iso_iec19795_1_2021
 * @constant
 * @type {number}
 */
export
const AScopeAccreditation_iso_iec19795_1_2021: AScopeAccreditation = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iso_iec19795_1_2021
 * @constant
 * @type {number}
 */
export
const iso_iec19795_1_2021: AScopeAccreditation = AScopeAccreditation_iso_iec19795_1_2021; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AScopeAccreditation_iso_iec19795_3
 * @constant
 * @type {number}
 */
export
const AScopeAccreditation_iso_iec19795_3: AScopeAccreditation = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iso_iec19795_3
 * @constant
 * @type {number}
 */
export
const iso_iec19795_3: AScopeAccreditation = AScopeAccreditation_iso_iec19795_3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AScopeAccreditation_iso_iec30107_4
 * @constant
 * @type {number}
 */
export
const AScopeAccreditation_iso_iec30107_4: AScopeAccreditation = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iso_iec30107_4
 * @constant
 * @type {number}
 */
export
const iso_iec30107_4: AScopeAccreditation = AScopeAccreditation_iso_iec30107_4; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AScopeAccreditation: $.ASN1Decoder<AScopeAccreditation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AScopeAccreditation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AScopeAccreditation (el: _Element): AScopeAccreditation {
    if (!_cached_decoder_for_AScopeAccreditation) { _cached_decoder_for_AScopeAccreditation = $._decodeEnumerated; }
    return _cached_decoder_for_AScopeAccreditation(el);
}

let _cached_encoder_for_AScopeAccreditation: $.ASN1Encoder<AScopeAccreditation> | null = null;

/**
 * @summary Encodes a(n) AScopeAccreditation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AScopeAccreditation, encoded as an ASN.1 Element.
 */
export
function _encode_AScopeAccreditation (value: AScopeAccreditation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AScopeAccreditation) { _cached_encoder_for_AScopeAccreditation = $._encodeEnumerated; }
    return _cached_encoder_for_AScopeAccreditation(value, elGetter);
}


/* eslint-enable */
