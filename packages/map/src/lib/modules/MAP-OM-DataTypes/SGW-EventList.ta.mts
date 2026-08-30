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
 * @summary SGW_EventList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SGW-EventList  ::=  BIT STRING {
 *     pdn-connectionCreation (0),
 *     pdn-connectionTermination (1),
 *     bearerActivationModificationDeletion (2)} (SIZE (3..8))
 * ```
 */
export
type SGW_EventList = BIT_STRING;

/**
 * @summary SGW_EventList_pdn_connectionCreation
 * @constant
 */
export
const SGW_EventList_pdn_connectionCreation: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary pdn_connectionCreation
 * @constant
 */
export
const pdn_connectionCreation: number = SGW_EventList_pdn_connectionCreation; /* SHORT_NAMED_BIT */

/**
 * @summary SGW_EventList_pdn_connectionTermination
 * @constant
 */
export
const SGW_EventList_pdn_connectionTermination: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary pdn_connectionTermination
 * @constant
 */
export
const pdn_connectionTermination: number = SGW_EventList_pdn_connectionTermination; /* SHORT_NAMED_BIT */

/**
 * @summary SGW_EventList_bearerActivationModificationDeletion
 * @constant
 */
export
const SGW_EventList_bearerActivationModificationDeletion: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary bearerActivationModificationDeletion
 * @constant
 */
export
const bearerActivationModificationDeletion: number = SGW_EventList_bearerActivationModificationDeletion; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SGW_EventList: $.ASN1Decoder<SGW_EventList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SGW_EventList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SGW_EventList (el: _Element): SGW_EventList {
    if (!_cached_decoder_for_SGW_EventList) { _cached_decoder_for_SGW_EventList = $._decodeBitString; }
    return _cached_decoder_for_SGW_EventList(el);
}

let _cached_encoder_for_SGW_EventList: $.ASN1Encoder<SGW_EventList> | null = null;

/**
 * @summary Encodes a(n) SGW_EventList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SGW_EventList, encoded as an ASN.1 Element.
 */
export
function _encode_SGW_EventList (value: SGW_EventList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SGW_EventList) { _cached_encoder_for_SGW_EventList = $._encodeBitString; }
    return _cached_encoder_for_SGW_EventList(value, elGetter);
}


/* eslint-enable */
