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
 * @summary AccessRestrictions_Item_accessType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessRestrictions-Item-accessType ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type AccessRestrictions_Item_accessType = INTEGER;

/**
 * @summary AccessRestrictions_Item_accessType_any_
 * @constant
 * @type {number}
 */
export
const AccessRestrictions_Item_accessType_any_: AccessRestrictions_Item_accessType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_any_
 * @constant
 * @type {number}
 */
export
const any_: AccessRestrictions_Item_accessType = AccessRestrictions_Item_accessType_any_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_search
 * @constant
 * @type {number}
 */
export
const AccessRestrictions_Item_accessType_search: AccessRestrictions_Item_accessType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_search
 * @constant
 * @type {number}
 */
export
const search: AccessRestrictions_Item_accessType = AccessRestrictions_Item_accessType_search; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_present
 * @constant
 * @type {number}
 */
export
const AccessRestrictions_Item_accessType_present: AccessRestrictions_Item_accessType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_present
 * @constant
 * @type {number}
 */
export
const present: AccessRestrictions_Item_accessType = AccessRestrictions_Item_accessType_present; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_specific_elements
 * @constant
 * @type {number}
 */
export
const AccessRestrictions_Item_accessType_specific_elements: AccessRestrictions_Item_accessType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_specific_elements
 * @constant
 * @type {number}
 */
export
const specific_elements: AccessRestrictions_Item_accessType = AccessRestrictions_Item_accessType_specific_elements; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_extended_services
 * @constant
 * @type {number}
 */
export
const AccessRestrictions_Item_accessType_extended_services: AccessRestrictions_Item_accessType = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_extended_services
 * @constant
 * @type {number}
 */
export
const extended_services: AccessRestrictions_Item_accessType = AccessRestrictions_Item_accessType_extended_services; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_by_database
 * @constant
 * @type {number}
 */
export
const AccessRestrictions_Item_accessType_by_database: AccessRestrictions_Item_accessType = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRestrictions_Item_accessType_by_database
 * @constant
 * @type {number}
 */
export
const by_database: AccessRestrictions_Item_accessType = AccessRestrictions_Item_accessType_by_database; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_AccessRestrictions_Item_accessType: $.ASN1Decoder<AccessRestrictions_Item_accessType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessRestrictions_Item_accessType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessRestrictions_Item_accessType (el: _Element): AccessRestrictions_Item_accessType {
    if (!_cached_decoder_for_AccessRestrictions_Item_accessType) { _cached_decoder_for_AccessRestrictions_Item_accessType = $._decodeInteger; }
    return _cached_decoder_for_AccessRestrictions_Item_accessType(el);
}

let _cached_encoder_for_AccessRestrictions_Item_accessType: $.ASN1Encoder<AccessRestrictions_Item_accessType> | null = null;

/**
 * @summary Encodes a(n) AccessRestrictions_Item_accessType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessRestrictions_Item_accessType, encoded as an ASN.1 Element.
 */
export
function _encode_AccessRestrictions_Item_accessType (value: AccessRestrictions_Item_accessType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessRestrictions_Item_accessType) { _cached_encoder_for_AccessRestrictions_Item_accessType = $._encodeInteger; }
    return _cached_encoder_for_AccessRestrictions_Item_accessType(value, elGetter);
}


/* eslint-enable */
