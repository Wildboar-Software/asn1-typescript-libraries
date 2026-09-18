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
 * @summary ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileArgumOfferList-specialProfileArgums-Item-offeredValues-boolean ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean = BIT_STRING;

/**
 * @summary ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean_false_bit
 * @constant
 */
export
const ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean_false_bit: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary false_bit
 * @constant
 */
export
const false_bit: number = ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean_false_bit; /* SHORT_NAMED_BIT */

/**
 * @summary ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean_true_bit
 * @constant
 */
export
const ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean_true_bit: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary true_bit
 * @constant
 */
export
const true_bit: number = ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean_true_bit; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean: $.ASN1Decoder<ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean (el: _Element): ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean {
    if (!_cached_decoder_for_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean) { _cached_decoder_for_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean = $._decodeBitString; }
    return _cached_decoder_for_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean(el);
}

let _cached_encoder_for_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean: $.ASN1Encoder<ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean> | null = null;

/**
 * @summary Encodes a(n) ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean (value: ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean) { _cached_encoder_for_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean = $._encodeBitString; }
    return _cached_encoder_for_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean(value, elGetter);
}


/* eslint-enable */
