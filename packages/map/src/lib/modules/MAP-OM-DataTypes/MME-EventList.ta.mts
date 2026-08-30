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
 * @summary MME_EventList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MME-EventList  ::=  BIT STRING {
 *     ue-initiatedPDNconectivityRequest (0),
 *     serviceRequestts (1),
 *     initialAttachTrackingAreaUpdateDetach (2),
 *     ue-initiatedPDNdisconnection (3),
 *     bearerActivationModificationDeletion (4),
 *     handover (5)} (SIZE (6..8))
 * ```
 */
export
type MME_EventList = BIT_STRING;

/**
 * @summary MME_EventList_ue_initiatedPDNconectivityRequest
 * @constant
 */
export
const MME_EventList_ue_initiatedPDNconectivityRequest: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary ue_initiatedPDNconectivityRequest
 * @constant
 */
export
const ue_initiatedPDNconectivityRequest: number = MME_EventList_ue_initiatedPDNconectivityRequest; /* SHORT_NAMED_BIT */

/**
 * @summary MME_EventList_serviceRequestts
 * @constant
 */
export
const MME_EventList_serviceRequestts: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary serviceRequestts
 * @constant
 */
export
const serviceRequestts: number = MME_EventList_serviceRequestts; /* SHORT_NAMED_BIT */

/**
 * @summary MME_EventList_initialAttachTrackingAreaUpdateDetach
 * @constant
 */
export
const MME_EventList_initialAttachTrackingAreaUpdateDetach: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary initialAttachTrackingAreaUpdateDetach
 * @constant
 */
export
const initialAttachTrackingAreaUpdateDetach: number = MME_EventList_initialAttachTrackingAreaUpdateDetach; /* SHORT_NAMED_BIT */

/**
 * @summary MME_EventList_ue_initiatedPDNdisconnection
 * @constant
 */
export
const MME_EventList_ue_initiatedPDNdisconnection: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ue_initiatedPDNdisconnection
 * @constant
 */
export
const ue_initiatedPDNdisconnection: number = MME_EventList_ue_initiatedPDNdisconnection; /* SHORT_NAMED_BIT */

/**
 * @summary MME_EventList_bearerActivationModificationDeletion
 * @constant
 */
export
const MME_EventList_bearerActivationModificationDeletion: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary bearerActivationModificationDeletion
 * @constant
 */
export
const bearerActivationModificationDeletion: number = MME_EventList_bearerActivationModificationDeletion; /* SHORT_NAMED_BIT */

/**
 * @summary MME_EventList_handover
 * @constant
 */
export
const MME_EventList_handover: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary handover
 * @constant
 */
export
const handover: number = MME_EventList_handover; /* SHORT_NAMED_BIT */

let _cached_decoder_for_MME_EventList: $.ASN1Decoder<MME_EventList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MME_EventList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MME_EventList (el: _Element): MME_EventList {
    if (!_cached_decoder_for_MME_EventList) { _cached_decoder_for_MME_EventList = $._decodeBitString; }
    return _cached_decoder_for_MME_EventList(el);
}

let _cached_encoder_for_MME_EventList: $.ASN1Encoder<MME_EventList> | null = null;

/**
 * @summary Encodes a(n) MME_EventList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MME_EventList, encoded as an ASN.1 Element.
 */
export
function _encode_MME_EventList (value: MME_EventList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MME_EventList) { _cached_encoder_for_MME_EventList = $._encodeBitString; }
    return _cached_encoder_for_MME_EventList(value, elGetter);
}


/* eslint-enable */
