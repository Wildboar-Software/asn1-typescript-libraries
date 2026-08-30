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
 * @summary PGW_EventList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PGW-EventList  ::=  BIT STRING {
 *     pdn-connectionCreation (0),
 *     pdn-connectionTermination (1),
 *     bearerActivationModificationDeletion (2)} (SIZE (3..8))
 * ```
 */
export
type PGW_EventList = BIT_STRING;

/**
 * @summary PGW_EventList_pdn_connectionCreation
 * @constant
 */
export
const PGW_EventList_pdn_connectionCreation: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary pdn_connectionCreation
 * @constant
 */
export
const pdn_connectionCreation: number = PGW_EventList_pdn_connectionCreation; /* SHORT_NAMED_BIT */

/**
 * @summary PGW_EventList_pdn_connectionTermination
 * @constant
 */
export
const PGW_EventList_pdn_connectionTermination: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary pdn_connectionTermination
 * @constant
 */
export
const pdn_connectionTermination: number = PGW_EventList_pdn_connectionTermination; /* SHORT_NAMED_BIT */

/**
 * @summary PGW_EventList_bearerActivationModificationDeletion
 * @constant
 */
export
const PGW_EventList_bearerActivationModificationDeletion: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary bearerActivationModificationDeletion
 * @constant
 */
export
const bearerActivationModificationDeletion: number = PGW_EventList_bearerActivationModificationDeletion; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) PGW_EventList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PGW_EventList = (el: _Element): PGW_EventList => {
    const value = $._decodeBitString(el);
    if (value.length < 3 || value.length > 8) {
        throw new ASN1SizeError("PGW_EventList violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) PGW_EventList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PGW_EventList, encoded as an ASN.1 Element.
 */
export const _encode_PGW_EventList = $._encodeBitString;


/* eslint-enable */
