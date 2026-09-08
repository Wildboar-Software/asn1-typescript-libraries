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
 * @summary GroupDeviceAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GroupDeviceAttributes  ::=  BIT STRING
 * {     acd                     ( 0),
 *     hunt                     ( 1),
 *     pick                     ( 2),
 *     user                    ( 4),
 *     agent                    ( 5),
 *     other                     ( 3) }
 * ```
 */
export
type GroupDeviceAttributes = BIT_STRING;

/**
 * @summary GroupDeviceAttributes_acd
 * @constant
 */
export
const GroupDeviceAttributes_acd: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary acd
 * @constant
 */
export
const acd: number = GroupDeviceAttributes_acd; /* SHORT_NAMED_BIT */

/**
 * @summary GroupDeviceAttributes_hunt
 * @constant
 */
export
const GroupDeviceAttributes_hunt: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary hunt
 * @constant
 */
export
const hunt: number = GroupDeviceAttributes_hunt; /* SHORT_NAMED_BIT */

/**
 * @summary GroupDeviceAttributes_pick
 * @constant
 */
export
const GroupDeviceAttributes_pick: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary pick
 * @constant
 */
export
const pick: number = GroupDeviceAttributes_pick; /* SHORT_NAMED_BIT */

/**
 * @summary GroupDeviceAttributes_user
 * @constant
 */
export
const GroupDeviceAttributes_user: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary user
 * @constant
 */
export
const user: number = GroupDeviceAttributes_user; /* SHORT_NAMED_BIT */

/**
 * @summary GroupDeviceAttributes_agent
 * @constant
 */
export
const GroupDeviceAttributes_agent: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary agent
 * @constant
 */
export
const agent: number = GroupDeviceAttributes_agent; /* SHORT_NAMED_BIT */

/**
 * @summary GroupDeviceAttributes_other
 * @constant
 */
export
const GroupDeviceAttributes_other: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary other
 * @constant
 */
export
const other: number = GroupDeviceAttributes_other; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GroupDeviceAttributes: $.ASN1Decoder<GroupDeviceAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GroupDeviceAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GroupDeviceAttributes (el: _Element): GroupDeviceAttributes {
    if (!_cached_decoder_for_GroupDeviceAttributes) { _cached_decoder_for_GroupDeviceAttributes = $._decodeBitString; }
    return _cached_decoder_for_GroupDeviceAttributes(el);
}

let _cached_encoder_for_GroupDeviceAttributes: $.ASN1Encoder<GroupDeviceAttributes> | null = null;

/**
 * @summary Encodes a(n) GroupDeviceAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GroupDeviceAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_GroupDeviceAttributes (value: GroupDeviceAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GroupDeviceAttributes) { _cached_encoder_for_GroupDeviceAttributes = $._encodeBitString; }
    return _cached_encoder_for_GroupDeviceAttributes(value, elGetter);
}


/* eslint-enable */
