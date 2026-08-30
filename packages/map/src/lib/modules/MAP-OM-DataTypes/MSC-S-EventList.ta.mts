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
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MSC_S_EventList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MSC-S-EventList  ::=  BIT STRING {
 *     mo-mtCall (0),
 *     mo-mt-sms (1),
 *     lu-imsiAttach-imsiDetach (2),
 *     handovers (3),
 *     ss (4)} (SIZE (5..16))
 * ```
 */
export
type MSC_S_EventList = BIT_STRING;

/**
 * @summary MSC_S_EventList_mo_mtCall
 * @constant
 */
export
const MSC_S_EventList_mo_mtCall: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary mo_mtCall
 * @constant
 */
export
const mo_mtCall: number = MSC_S_EventList_mo_mtCall; /* SHORT_NAMED_BIT */

/**
 * @summary MSC_S_EventList_mo_mt_sms
 * @constant
 */
export
const MSC_S_EventList_mo_mt_sms: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary mo_mt_sms
 * @constant
 */
export
const mo_mt_sms: number = MSC_S_EventList_mo_mt_sms; /* SHORT_NAMED_BIT */

/**
 * @summary MSC_S_EventList_lu_imsiAttach_imsiDetach
 * @constant
 */
export
const MSC_S_EventList_lu_imsiAttach_imsiDetach: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary lu_imsiAttach_imsiDetach
 * @constant
 */
export
const lu_imsiAttach_imsiDetach: number = MSC_S_EventList_lu_imsiAttach_imsiDetach; /* SHORT_NAMED_BIT */

/**
 * @summary MSC_S_EventList_handovers
 * @constant
 */
export
const MSC_S_EventList_handovers: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary handovers
 * @constant
 */
export
const handovers: number = MSC_S_EventList_handovers; /* SHORT_NAMED_BIT */

/**
 * @summary MSC_S_EventList_ss
 * @constant
 */
export
const MSC_S_EventList_ss: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary ss
 * @constant
 */
export
const ss: number = MSC_S_EventList_ss; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) MSC_S_EventList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MSC_S_EventList = (el: _Element): MSC_S_EventList => {
    const value = $._decodeBitString(el);
    if (value.length < 5 || value.length > 16) {
        throw new ASN1SizeError("MSC_S_EventList violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) MSC_S_EventList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSC_S_EventList, encoded as an ASN.1 Element.
 */
export const _encode_MSC_S_EventList = $._encodeBitString;


/* eslint-enable */
