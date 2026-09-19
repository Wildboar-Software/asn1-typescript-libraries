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
 * @summary AddressListRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddressListRequest  ::=  INTEGER {action(0), info(1), both(2)}
 * ```
 */
export
type AddressListRequest = INTEGER;

/**
 * @summary AddressListRequest_action
 * @constant
 * @type {number}
 */
export
const AddressListRequest_action: AddressListRequest = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddressListRequest_action
 * @constant
 * @type {number}
 */
export
const action: AddressListRequest = AddressListRequest_action; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddressListRequest_info
 * @constant
 * @type {number}
 */
export
const AddressListRequest_info: AddressListRequest = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddressListRequest_info
 * @constant
 * @type {number}
 */
export
const info: AddressListRequest = AddressListRequest_info; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddressListRequest_both
 * @constant
 * @type {number}
 */
export
const AddressListRequest_both: AddressListRequest = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddressListRequest_both
 * @constant
 * @type {number}
 */
export
const both: AddressListRequest = AddressListRequest_both; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_AddressListRequest: $.ASN1Decoder<AddressListRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddressListRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AddressListRequest (el: _Element): AddressListRequest {
    if (!_cached_decoder_for_AddressListRequest) { _cached_decoder_for_AddressListRequest = $._decodeInteger; }
    return _cached_decoder_for_AddressListRequest(el);
}

let _cached_encoder_for_AddressListRequest: $.ASN1Encoder<AddressListRequest> | null = null;

/**
 * @summary Encodes a(n) AddressListRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddressListRequest, encoded as an ASN.1 Element.
 */
export
function _encode_AddressListRequest (value: AddressListRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AddressListRequest) { _cached_encoder_for_AddressListRequest = $._encodeInteger; }
    return _cached_encoder_for_AddressListRequest(value, elGetter);
}


/* eslint-enable */
