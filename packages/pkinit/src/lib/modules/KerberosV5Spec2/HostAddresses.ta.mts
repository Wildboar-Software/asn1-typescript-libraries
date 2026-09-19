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
import { HostAddress, _decode_HostAddress, _encode_HostAddress } from "../KerberosV5Spec2/HostAddress.ta.mjs";
// export { HostAddress, _decode_HostAddress, _encode_HostAddress } from "../KerberosV5Spec2/HostAddress.ta.mjs";


/**
 * @summary HostAddresses
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HostAddresses   -- NOTE: subtly different from rfc1510,
 * 
 *                -- but has a value mapping and encodes the same
 *          ::=  SEQUENCE OF HostAddress
 * ```
 */
export
type HostAddresses = HostAddress[]; // SequenceOfType

let _cached_decoder_for_HostAddresses: $.ASN1Decoder<HostAddresses> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HostAddresses
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HostAddresses (el: _Element): HostAddresses {
    if (!_cached_decoder_for_HostAddresses) { _cached_decoder_for_HostAddresses = $._decodeSequenceOf<HostAddress>(() => _decode_HostAddress); }
    return _cached_decoder_for_HostAddresses(el);
}

let _cached_encoder_for_HostAddresses: $.ASN1Encoder<HostAddresses> | null = null;

/**
 * @summary Encodes a(n) HostAddresses into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HostAddresses, encoded as an ASN.1 Element.
 */
export
function _encode_HostAddresses (value: HostAddresses, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HostAddresses) { _cached_encoder_for_HostAddresses = $._encodeSequenceOf<HostAddress>(() => _encode_HostAddress, $.BER); }
    return _cached_encoder_for_HostAddresses(value, elGetter);
}


/* eslint-enable */
