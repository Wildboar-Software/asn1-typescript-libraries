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
 * @summary OfferedCamel4CSIs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OfferedCamel4CSIs  ::=  BIT STRING {    
 *     o-csi    (0),
 *     d-csi    (1),
 *     vt-csi    (2),
 *     t-csi    (3),
 *     mt-sms-csi    (4),
 *     mg-csi    (5),
 *     psi-enhancements    (6) 
 * } (SIZE (7..16))
 * ```
 */
export
type OfferedCamel4CSIs = BIT_STRING;

/**
 * @summary OfferedCamel4CSIs_o_csi
 * @constant
 */
export
const OfferedCamel4CSIs_o_csi: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary o_csi
 * @constant
 */
export
const o_csi: number = OfferedCamel4CSIs_o_csi; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4CSIs_d_csi
 * @constant
 */
export
const OfferedCamel4CSIs_d_csi: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary d_csi
 * @constant
 */
export
const d_csi: number = OfferedCamel4CSIs_d_csi; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4CSIs_vt_csi
 * @constant
 */
export
const OfferedCamel4CSIs_vt_csi: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary vt_csi
 * @constant
 */
export
const vt_csi: number = OfferedCamel4CSIs_vt_csi; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4CSIs_t_csi
 * @constant
 */
export
const OfferedCamel4CSIs_t_csi: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary t_csi
 * @constant
 */
export
const t_csi: number = OfferedCamel4CSIs_t_csi; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4CSIs_mt_sms_csi
 * @constant
 */
export
const OfferedCamel4CSIs_mt_sms_csi: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary mt_sms_csi
 * @constant
 */
export
const mt_sms_csi: number = OfferedCamel4CSIs_mt_sms_csi; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4CSIs_mg_csi
 * @constant
 */
export
const OfferedCamel4CSIs_mg_csi: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary mg_csi
 * @constant
 */
export
const mg_csi: number = OfferedCamel4CSIs_mg_csi; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4CSIs_psi_enhancements
 * @constant
 */
export
const OfferedCamel4CSIs_psi_enhancements: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary psi_enhancements
 * @constant
 */
export
const psi_enhancements: number = OfferedCamel4CSIs_psi_enhancements; /* SHORT_NAMED_BIT */

let _cached_decoder_for_OfferedCamel4CSIs: $.ASN1Decoder<OfferedCamel4CSIs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OfferedCamel4CSIs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OfferedCamel4CSIs (el: _Element): OfferedCamel4CSIs {
    if (!_cached_decoder_for_OfferedCamel4CSIs) { _cached_decoder_for_OfferedCamel4CSIs = $._decodeBitString; }
    return _cached_decoder_for_OfferedCamel4CSIs(el);
}

let _cached_encoder_for_OfferedCamel4CSIs: $.ASN1Encoder<OfferedCamel4CSIs> | null = null;

/**
 * @summary Encodes a(n) OfferedCamel4CSIs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OfferedCamel4CSIs, encoded as an ASN.1 Element.
 */
export
function _encode_OfferedCamel4CSIs (value: OfferedCamel4CSIs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OfferedCamel4CSIs) { _cached_encoder_for_OfferedCamel4CSIs = $._encodeBitString; }
    return _cached_encoder_for_OfferedCamel4CSIs(value, elGetter);
}


/* eslint-enable */
