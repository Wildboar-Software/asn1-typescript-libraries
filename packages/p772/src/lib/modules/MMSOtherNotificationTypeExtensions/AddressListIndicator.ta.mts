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
import { AddressListDesignator, _decode_AddressListDesignator, _encode_AddressListDesignator } from "../MMSHeadingExtensions/AddressListDesignator.ta.mjs";
// export { AddressListDesignator, _decode_AddressListDesignator, _encode_AddressListDesignator } from "../MMSHeadingExtensions/AddressListDesignator.ta.mjs";


/**
 * @summary AddressListIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddressListIndicator  ::=  SEQUENCE OF AddressListDesignator
 * ```
 */
export
type AddressListIndicator = AddressListDesignator[]; // SequenceOfType

let _cached_decoder_for_AddressListIndicator: $.ASN1Decoder<AddressListIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddressListIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AddressListIndicator (el: _Element): AddressListIndicator {
    if (!_cached_decoder_for_AddressListIndicator) { _cached_decoder_for_AddressListIndicator = $._decodeSequenceOf<AddressListDesignator>(() => _decode_AddressListDesignator); }
    return _cached_decoder_for_AddressListIndicator(el);
}

let _cached_encoder_for_AddressListIndicator: $.ASN1Encoder<AddressListIndicator> | null = null;

/**
 * @summary Encodes a(n) AddressListIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddressListIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_AddressListIndicator (value: AddressListIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AddressListIndicator) { _cached_encoder_for_AddressListIndicator = $._encodeSequenceOf<AddressListDesignator>(() => _encode_AddressListDesignator, $.BER); }
    return _cached_encoder_for_AddressListIndicator(value, elGetter);
}


/* eslint-enable */
