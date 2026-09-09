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
 * @summary MiscCallInfo_dpAssignment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MiscCallInfo-dpAssignment ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MiscCallInfo_dpAssignment {
    individualLine = 0,
    groupBased = 1,
    officeBased = 2,
}

/**
 * @summary MiscCallInfo_dpAssignment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MiscCallInfo-dpAssignment ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type MiscCallInfo_dpAssignment = _enum_for_MiscCallInfo_dpAssignment;

/**
 * @summary MiscCallInfo_dpAssignment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MiscCallInfo-dpAssignment ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const MiscCallInfo_dpAssignment = _enum_for_MiscCallInfo_dpAssignment;

/**
 * @summary MiscCallInfo_dpAssignment_individualLine
 * @constant
 * @type {number}
 */
export
const MiscCallInfo_dpAssignment_individualLine: MiscCallInfo_dpAssignment = MiscCallInfo_dpAssignment.individualLine; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary individualLine
 * @constant
 * @type {number}
 */
export
const individualLine: MiscCallInfo_dpAssignment = MiscCallInfo_dpAssignment.individualLine; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MiscCallInfo_dpAssignment_groupBased
 * @constant
 * @type {number}
 */
export
const MiscCallInfo_dpAssignment_groupBased: MiscCallInfo_dpAssignment = MiscCallInfo_dpAssignment.groupBased; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupBased
 * @constant
 * @type {number}
 */
export
const groupBased: MiscCallInfo_dpAssignment = MiscCallInfo_dpAssignment.groupBased; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MiscCallInfo_dpAssignment_officeBased
 * @constant
 * @type {number}
 */
export
const MiscCallInfo_dpAssignment_officeBased: MiscCallInfo_dpAssignment = MiscCallInfo_dpAssignment.officeBased; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary officeBased
 * @constant
 * @type {number}
 */
export
const officeBased: MiscCallInfo_dpAssignment = MiscCallInfo_dpAssignment.officeBased; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MiscCallInfo_dpAssignment: $.ASN1Decoder<MiscCallInfo_dpAssignment> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MiscCallInfo_dpAssignment
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MiscCallInfo_dpAssignment (el: _Element): MiscCallInfo_dpAssignment {
    if (!_cached_decoder_for_MiscCallInfo_dpAssignment) { _cached_decoder_for_MiscCallInfo_dpAssignment = $._decodeEnumerated; }
    return _cached_decoder_for_MiscCallInfo_dpAssignment(el);
}

let _cached_encoder_for_MiscCallInfo_dpAssignment: $.ASN1Encoder<MiscCallInfo_dpAssignment> | null = null;

/**
 * @summary Encodes a(n) MiscCallInfo_dpAssignment into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MiscCallInfo_dpAssignment, encoded as an ASN.1 Element.
 */
export
function _encode_MiscCallInfo_dpAssignment (value: MiscCallInfo_dpAssignment, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MiscCallInfo_dpAssignment) { _cached_encoder_for_MiscCallInfo_dpAssignment = $._encodeEnumerated; }
    return _cached_encoder_for_MiscCallInfo_dpAssignment(value, elGetter);
}


/* eslint-enable */
