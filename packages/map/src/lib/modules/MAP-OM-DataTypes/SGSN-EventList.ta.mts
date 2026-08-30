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
 * @summary SGSN_EventList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SGSN-EventList  ::=  BIT STRING {
 *     pdpContext (0),
 *     mo-mt-sms (1),
 *     rau-gprsAttach-gprsDetach (2),
 *     mbmsContext (3)} (SIZE (4..16))
 * ```
 */
export
type SGSN_EventList = BIT_STRING;

/**
 * @summary SGSN_EventList_pdpContext
 * @constant
 */
export
const SGSN_EventList_pdpContext: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary pdpContext
 * @constant
 */
export
const pdpContext: number = SGSN_EventList_pdpContext; /* SHORT_NAMED_BIT */

/**
 * @summary SGSN_EventList_mo_mt_sms
 * @constant
 */
export
const SGSN_EventList_mo_mt_sms: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary mo_mt_sms
 * @constant
 */
export
const mo_mt_sms: number = SGSN_EventList_mo_mt_sms; /* SHORT_NAMED_BIT */

/**
 * @summary SGSN_EventList_rau_gprsAttach_gprsDetach
 * @constant
 */
export
const SGSN_EventList_rau_gprsAttach_gprsDetach: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary rau_gprsAttach_gprsDetach
 * @constant
 */
export
const rau_gprsAttach_gprsDetach: number = SGSN_EventList_rau_gprsAttach_gprsDetach; /* SHORT_NAMED_BIT */

/**
 * @summary SGSN_EventList_mbmsContext
 * @constant
 */
export
const SGSN_EventList_mbmsContext: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary mbmsContext
 * @constant
 */
export
const mbmsContext: number = SGSN_EventList_mbmsContext; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) SGSN_EventList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SGSN_EventList = (el: _Element): SGSN_EventList => {
    const value = $._decodeBitString(el);
    if (value.length < 4 || value.length > 16) {
        throw new ASN1SizeError("SGSN_EventList violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) SGSN_EventList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SGSN_EventList, encoded as an ASN.1 Element.
 */
export const _encode_SGSN_EventList = $._encodeBitString;


/* eslint-enable */
