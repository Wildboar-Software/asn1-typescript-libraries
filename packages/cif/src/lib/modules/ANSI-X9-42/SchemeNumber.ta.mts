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
enum _enum_for_SchemeNumber {
    dhStatic_sha1 = 0,
    dhEphem_sha1 = 1,
    dhOneFlow_sha1 = 2,
    dhHybrid1_sha1 = 3,
    dhHybrid2_sha1 = 4,
    dhHybridOneFlow_sha1 = 5,
    mqv2_sha1 = 6,
    mqv1_sha1 = 7,
}

/**
 * @summary SchemeNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SchemeNumber  ::=  ENUMERATED {
 * dhStatic-sha1    (0),        -- { dhStatic, {id-sha1,NULL} }
 * dhEphem-sha1     (1),        -- { dhEphem, {id-sha1,NULL} }
 * dhOneFlow-sha1    (2),        -- { dhOneFlow, {id-sha1,NULL} }
 * dhHybrid1-sha1    (3),        -- { dhHybrid1, {id-sha1,NULL} }
 * dhHybrid2-sha1    (4),        -- { dhHybrid2, {id-sha1,NULL} }
 * dhHybridOneFlow-sha1 (5),     -- { dhHybridOneFlow, {id-sha1,NULL} }
 * mqv2-sha1        (6),        -- { mqv2,    {id-sha1,NULL} }
 * mqv1-sha1        (7),        -- { mqv1,    {id-sha1,NULL} }
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SchemeNumber = _enum_for_SchemeNumber | ENUMERATED;

/**
 * @summary SchemeNumber_dhStatic_sha1
 * @constant
 * @type {number}
 */
export
const SchemeNumber_dhStatic_sha1: SchemeNumber = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dhStatic_sha1
 * @constant
 * @type {number}
 */
export
const dhStatic_sha1: SchemeNumber = SchemeNumber_dhStatic_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SchemeNumber_dhEphem_sha1
 * @constant
 * @type {number}
 */
export
const SchemeNumber_dhEphem_sha1: SchemeNumber = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dhEphem_sha1
 * @constant
 * @type {number}
 */
export
const dhEphem_sha1: SchemeNumber = SchemeNumber_dhEphem_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SchemeNumber_dhOneFlow_sha1
 * @constant
 * @type {number}
 */
export
const SchemeNumber_dhOneFlow_sha1: SchemeNumber = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dhOneFlow_sha1
 * @constant
 * @type {number}
 */
export
const dhOneFlow_sha1: SchemeNumber = SchemeNumber_dhOneFlow_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SchemeNumber_dhHybrid1_sha1
 * @constant
 * @type {number}
 */
export
const SchemeNumber_dhHybrid1_sha1: SchemeNumber = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dhHybrid1_sha1
 * @constant
 * @type {number}
 */
export
const dhHybrid1_sha1: SchemeNumber = SchemeNumber_dhHybrid1_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SchemeNumber_dhHybrid2_sha1
 * @constant
 * @type {number}
 */
export
const SchemeNumber_dhHybrid2_sha1: SchemeNumber = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dhHybrid2_sha1
 * @constant
 * @type {number}
 */
export
const dhHybrid2_sha1: SchemeNumber = SchemeNumber_dhHybrid2_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SchemeNumber_dhHybridOneFlow_sha1
 * @constant
 * @type {number}
 */
export
const SchemeNumber_dhHybridOneFlow_sha1: SchemeNumber = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dhHybridOneFlow_sha1
 * @constant
 * @type {number}
 */
export
const dhHybridOneFlow_sha1: SchemeNumber = SchemeNumber_dhHybridOneFlow_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SchemeNumber_mqv2_sha1
 * @constant
 * @type {number}
 */
export
const SchemeNumber_mqv2_sha1: SchemeNumber = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mqv2_sha1
 * @constant
 * @type {number}
 */
export
const mqv2_sha1: SchemeNumber = SchemeNumber_mqv2_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SchemeNumber_mqv1_sha1
 * @constant
 * @type {number}
 */
export
const SchemeNumber_mqv1_sha1: SchemeNumber = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mqv1_sha1
 * @constant
 * @type {number}
 */
export
const mqv1_sha1: SchemeNumber = SchemeNumber_mqv1_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SchemeNumber: $.ASN1Decoder<SchemeNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SchemeNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SchemeNumber (el: _Element): SchemeNumber {
    if (!_cached_decoder_for_SchemeNumber) { _cached_decoder_for_SchemeNumber = $._decodeEnumerated; }
    return _cached_decoder_for_SchemeNumber(el);
}

let _cached_encoder_for_SchemeNumber: $.ASN1Encoder<SchemeNumber> | null = null;

/**
 * @summary Encodes a(n) SchemeNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SchemeNumber, encoded as an ASN.1 Element.
 */
export
function _encode_SchemeNumber (value: SchemeNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SchemeNumber) { _cached_encoder_for_SchemeNumber = $._encodeEnumerated; }
    return _cached_encoder_for_SchemeNumber(value, elGetter);
}


/* eslint-enable */
