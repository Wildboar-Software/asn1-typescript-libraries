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
 * @summary AuditoryApparatusList_Item_hookswitch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuditoryApparatusList-Item-hookswitch ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type AuditoryApparatusList_Item_hookswitch = BIT_STRING;

/**
 * @summary AuditoryApparatusList_Item_hookswitch_hookswitchSettable
 * @constant
 */
export
const AuditoryApparatusList_Item_hookswitch_hookswitchSettable: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary hookswitchSettable
 * @constant
 */
export
const hookswitchSettable: number = AuditoryApparatusList_Item_hookswitch_hookswitchSettable; /* SHORT_NAMED_BIT */

/**
 * @summary AuditoryApparatusList_Item_hookswitch_hookswitchOnHook
 * @constant
 */
export
const AuditoryApparatusList_Item_hookswitch_hookswitchOnHook: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary hookswitchOnHook
 * @constant
 */
export
const hookswitchOnHook: number = AuditoryApparatusList_Item_hookswitch_hookswitchOnHook; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AuditoryApparatusList_Item_hookswitch: $.ASN1Decoder<AuditoryApparatusList_Item_hookswitch> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuditoryApparatusList_Item_hookswitch
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuditoryApparatusList_Item_hookswitch (el: _Element): AuditoryApparatusList_Item_hookswitch {
    if (!_cached_decoder_for_AuditoryApparatusList_Item_hookswitch) { _cached_decoder_for_AuditoryApparatusList_Item_hookswitch = $._decodeBitString; }
    return _cached_decoder_for_AuditoryApparatusList_Item_hookswitch(el);
}

let _cached_encoder_for_AuditoryApparatusList_Item_hookswitch: $.ASN1Encoder<AuditoryApparatusList_Item_hookswitch> | null = null;

/**
 * @summary Encodes a(n) AuditoryApparatusList_Item_hookswitch into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuditoryApparatusList_Item_hookswitch, encoded as an ASN.1 Element.
 */
export
function _encode_AuditoryApparatusList_Item_hookswitch (value: AuditoryApparatusList_Item_hookswitch, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuditoryApparatusList_Item_hookswitch) { _cached_encoder_for_AuditoryApparatusList_Item_hookswitch = $._encodeBitString; }
    return _cached_encoder_for_AuditoryApparatusList_Item_hookswitch(value, elGetter);
}


/* eslint-enable */
