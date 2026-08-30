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
 * @summary MW_Status
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MW-Status  ::=  BIT STRING {
 *     sc-AddressNotIncluded  (0),
 *     mnrf-Set  (1),
 *     mcef-Set  (2) ,
 *     mnrg-Set    (3),
 *     mnr5g-Set (4),
 *     mnr5gn3g-Set (5)} (SIZE (6..16))
 * ```
 */
export
type MW_Status = BIT_STRING;

/**
 * @summary MW_Status_sc_AddressNotIncluded
 * @constant
 */
export
const MW_Status_sc_AddressNotIncluded: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary sc_AddressNotIncluded
 * @constant
 */
export
const sc_AddressNotIncluded: number = MW_Status_sc_AddressNotIncluded; /* SHORT_NAMED_BIT */

/**
 * @summary MW_Status_mnrf_Set
 * @constant
 */
export
const MW_Status_mnrf_Set: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary mnrf_Set
 * @constant
 */
export
const mnrf_Set: number = MW_Status_mnrf_Set; /* SHORT_NAMED_BIT */

/**
 * @summary MW_Status_mcef_Set
 * @constant
 */
export
const MW_Status_mcef_Set: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary mcef_Set
 * @constant
 */
export
const mcef_Set: number = MW_Status_mcef_Set; /* SHORT_NAMED_BIT */

/**
 * @summary MW_Status_mnrg_Set
 * @constant
 */
export
const MW_Status_mnrg_Set: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary mnrg_Set
 * @constant
 */
export
const mnrg_Set: number = MW_Status_mnrg_Set; /* SHORT_NAMED_BIT */

/**
 * @summary MW_Status_mnr5g_Set
 * @constant
 */
export
const MW_Status_mnr5g_Set: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary mnr5g_Set
 * @constant
 */
export
const mnr5g_Set: number = MW_Status_mnr5g_Set; /* SHORT_NAMED_BIT */

/**
 * @summary MW_Status_mnr5gn3g_Set
 * @constant
 */
export
const MW_Status_mnr5gn3g_Set: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary mnr5gn3g_Set
 * @constant
 */
export
const mnr5gn3g_Set: number = MW_Status_mnr5gn3g_Set; /* SHORT_NAMED_BIT */

let _cached_decoder_for_MW_Status: $.ASN1Decoder<MW_Status> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MW_Status
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MW_Status (el: _Element): MW_Status {
    if (!_cached_decoder_for_MW_Status) { _cached_decoder_for_MW_Status = $._decodeBitString; }
    return _cached_decoder_for_MW_Status(el);
}

let _cached_encoder_for_MW_Status: $.ASN1Encoder<MW_Status> | null = null;

/**
 * @summary Encodes a(n) MW_Status into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MW_Status, encoded as an ASN.1 Element.
 */
export
function _encode_MW_Status (value: MW_Status, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MW_Status) { _cached_encoder_for_MW_Status = $._encodeBitString; }
    return _cached_encoder_for_MW_Status(value, elGetter);
}


/* eslint-enable */
