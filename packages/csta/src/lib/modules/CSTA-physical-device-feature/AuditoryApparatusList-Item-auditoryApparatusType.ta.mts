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
 * @summary AuditoryApparatusList_Item_auditoryApparatusType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuditoryApparatusList-Item-auditoryApparatusType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AuditoryApparatusList_Item_auditoryApparatusType {
    speakerphone = 0,
    handset = 1,
    headset = 2,
    speakerOnlyPhone = 3,
    other = 4,
}

/**
 * @summary AuditoryApparatusList_Item_auditoryApparatusType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuditoryApparatusList-Item-auditoryApparatusType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type AuditoryApparatusList_Item_auditoryApparatusType = _enum_for_AuditoryApparatusList_Item_auditoryApparatusType;

/**
 * @summary AuditoryApparatusList_Item_auditoryApparatusType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuditoryApparatusList-Item-auditoryApparatusType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const AuditoryApparatusList_Item_auditoryApparatusType = _enum_for_AuditoryApparatusList_Item_auditoryApparatusType;

/**
 * @summary AuditoryApparatusList_Item_auditoryApparatusType_speakerphone
 * @constant
 * @type {number}
 */
export
const AuditoryApparatusList_Item_auditoryApparatusType_speakerphone: AuditoryApparatusList_Item_auditoryApparatusType = AuditoryApparatusList_Item_auditoryApparatusType.speakerphone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speakerphone
 * @constant
 * @type {number}
 */
export
const speakerphone: AuditoryApparatusList_Item_auditoryApparatusType = AuditoryApparatusList_Item_auditoryApparatusType.speakerphone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuditoryApparatusList_Item_auditoryApparatusType_handset
 * @constant
 * @type {number}
 */
export
const AuditoryApparatusList_Item_auditoryApparatusType_handset: AuditoryApparatusList_Item_auditoryApparatusType = AuditoryApparatusList_Item_auditoryApparatusType.handset; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary handset
 * @constant
 * @type {number}
 */
export
const handset: AuditoryApparatusList_Item_auditoryApparatusType = AuditoryApparatusList_Item_auditoryApparatusType.handset; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuditoryApparatusList_Item_auditoryApparatusType_headset
 * @constant
 * @type {number}
 */
export
const AuditoryApparatusList_Item_auditoryApparatusType_headset: AuditoryApparatusList_Item_auditoryApparatusType = AuditoryApparatusList_Item_auditoryApparatusType.headset; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary headset
 * @constant
 * @type {number}
 */
export
const headset: AuditoryApparatusList_Item_auditoryApparatusType = AuditoryApparatusList_Item_auditoryApparatusType.headset; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuditoryApparatusList_Item_auditoryApparatusType_speakerOnlyPhone
 * @constant
 * @type {number}
 */
export
const AuditoryApparatusList_Item_auditoryApparatusType_speakerOnlyPhone: AuditoryApparatusList_Item_auditoryApparatusType = AuditoryApparatusList_Item_auditoryApparatusType.speakerOnlyPhone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speakerOnlyPhone
 * @constant
 * @type {number}
 */
export
const speakerOnlyPhone: AuditoryApparatusList_Item_auditoryApparatusType = AuditoryApparatusList_Item_auditoryApparatusType.speakerOnlyPhone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuditoryApparatusList_Item_auditoryApparatusType_other
 * @constant
 * @type {number}
 */
export
const AuditoryApparatusList_Item_auditoryApparatusType_other: AuditoryApparatusList_Item_auditoryApparatusType = AuditoryApparatusList_Item_auditoryApparatusType.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: AuditoryApparatusList_Item_auditoryApparatusType = AuditoryApparatusList_Item_auditoryApparatusType.other; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AuditoryApparatusList_Item_auditoryApparatusType: $.ASN1Decoder<AuditoryApparatusList_Item_auditoryApparatusType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuditoryApparatusList_Item_auditoryApparatusType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuditoryApparatusList_Item_auditoryApparatusType (el: _Element): AuditoryApparatusList_Item_auditoryApparatusType {
    if (!_cached_decoder_for_AuditoryApparatusList_Item_auditoryApparatusType) { _cached_decoder_for_AuditoryApparatusList_Item_auditoryApparatusType = $._decodeEnumerated; }
    return _cached_decoder_for_AuditoryApparatusList_Item_auditoryApparatusType(el);
}

let _cached_encoder_for_AuditoryApparatusList_Item_auditoryApparatusType: $.ASN1Encoder<AuditoryApparatusList_Item_auditoryApparatusType> | null = null;

/**
 * @summary Encodes a(n) AuditoryApparatusList_Item_auditoryApparatusType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuditoryApparatusList_Item_auditoryApparatusType, encoded as an ASN.1 Element.
 */
export
function _encode_AuditoryApparatusList_Item_auditoryApparatusType (value: AuditoryApparatusList_Item_auditoryApparatusType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuditoryApparatusList_Item_auditoryApparatusType) { _cached_encoder_for_AuditoryApparatusList_Item_auditoryApparatusType = $._encodeEnumerated; }
    return _cached_encoder_for_AuditoryApparatusList_Item_auditoryApparatusType(value, elGetter);
}


/* eslint-enable */
