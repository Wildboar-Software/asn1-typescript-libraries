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
 * @summary ODB_HPLMN_Data
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ODB-HPLMN-Data  ::=  BIT STRING {
 *     plmn-SpecificBarringType1  (0),
 *     plmn-SpecificBarringType2  (1),
 *     plmn-SpecificBarringType3  (2),
 *     plmn-SpecificBarringType4  (3)} (SIZE (4..32))
 * ```
 */
export
type ODB_HPLMN_Data = BIT_STRING;

/**
 * @summary ODB_HPLMN_Data_plmn_SpecificBarringType1
 * @constant
 */
export
const ODB_HPLMN_Data_plmn_SpecificBarringType1: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary plmn_SpecificBarringType1
 * @constant
 */
export
const plmn_SpecificBarringType1: number = ODB_HPLMN_Data_plmn_SpecificBarringType1; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_HPLMN_Data_plmn_SpecificBarringType2
 * @constant
 */
export
const ODB_HPLMN_Data_plmn_SpecificBarringType2: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary plmn_SpecificBarringType2
 * @constant
 */
export
const plmn_SpecificBarringType2: number = ODB_HPLMN_Data_plmn_SpecificBarringType2; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_HPLMN_Data_plmn_SpecificBarringType3
 * @constant
 */
export
const ODB_HPLMN_Data_plmn_SpecificBarringType3: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary plmn_SpecificBarringType3
 * @constant
 */
export
const plmn_SpecificBarringType3: number = ODB_HPLMN_Data_plmn_SpecificBarringType3; /* SHORT_NAMED_BIT */

/**
 * @summary ODB_HPLMN_Data_plmn_SpecificBarringType4
 * @constant
 */
export
const ODB_HPLMN_Data_plmn_SpecificBarringType4: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary plmn_SpecificBarringType4
 * @constant
 */
export
const plmn_SpecificBarringType4: number = ODB_HPLMN_Data_plmn_SpecificBarringType4; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ODB_HPLMN_Data: $.ASN1Decoder<ODB_HPLMN_Data> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ODB_HPLMN_Data
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ODB_HPLMN_Data (el: _Element): ODB_HPLMN_Data {
    if (!_cached_decoder_for_ODB_HPLMN_Data) { _cached_decoder_for_ODB_HPLMN_Data = $._decodeBitString; }
    return _cached_decoder_for_ODB_HPLMN_Data(el);
}

let _cached_encoder_for_ODB_HPLMN_Data: $.ASN1Encoder<ODB_HPLMN_Data> | null = null;

/**
 * @summary Encodes a(n) ODB_HPLMN_Data into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ODB_HPLMN_Data, encoded as an ASN.1 Element.
 */
export
function _encode_ODB_HPLMN_Data (value: ODB_HPLMN_Data, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ODB_HPLMN_Data) { _cached_encoder_for_ODB_HPLMN_Data = $._encodeBitString; }
    return _cached_encoder_for_ODB_HPLMN_Data(value, elGetter);
}


/* eslint-enable */
