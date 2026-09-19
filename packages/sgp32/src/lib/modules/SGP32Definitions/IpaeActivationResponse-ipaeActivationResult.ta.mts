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
 * @summary IpaeActivationResponse_ipaeActivationResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IpaeActivationResponse-ipaeActivationResult ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type IpaeActivationResponse_ipaeActivationResult = INTEGER;

/**
 * @summary IpaeActivationResponse_ipaeActivationResult_ok
 * @constant
 * @type {number}
 */
export
const IpaeActivationResponse_ipaeActivationResult_ok: IpaeActivationResponse_ipaeActivationResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IpaeActivationResponse_ipaeActivationResult_ok
 * @constant
 * @type {number}
 */
export
const ok: IpaeActivationResponse_ipaeActivationResult = IpaeActivationResponse_ipaeActivationResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IpaeActivationResponse_ipaeActivationResult_notSupported
 * @constant
 * @type {number}
 */
export
const IpaeActivationResponse_ipaeActivationResult_notSupported: IpaeActivationResponse_ipaeActivationResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IpaeActivationResponse_ipaeActivationResult_notSupported
 * @constant
 * @type {number}
 */
export
const notSupported: IpaeActivationResponse_ipaeActivationResult = IpaeActivationResponse_ipaeActivationResult_notSupported; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_IpaeActivationResponse_ipaeActivationResult: $.ASN1Decoder<IpaeActivationResponse_ipaeActivationResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IpaeActivationResponse_ipaeActivationResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IpaeActivationResponse_ipaeActivationResult (el: _Element): IpaeActivationResponse_ipaeActivationResult {
    if (!_cached_decoder_for_IpaeActivationResponse_ipaeActivationResult) { _cached_decoder_for_IpaeActivationResponse_ipaeActivationResult = $._decodeInteger; }
    return _cached_decoder_for_IpaeActivationResponse_ipaeActivationResult(el);
}

let _cached_encoder_for_IpaeActivationResponse_ipaeActivationResult: $.ASN1Encoder<IpaeActivationResponse_ipaeActivationResult> | null = null;

/**
 * @summary Encodes a(n) IpaeActivationResponse_ipaeActivationResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IpaeActivationResponse_ipaeActivationResult, encoded as an ASN.1 Element.
 */
export
function _encode_IpaeActivationResponse_ipaeActivationResult (value: IpaeActivationResponse_ipaeActivationResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IpaeActivationResponse_ipaeActivationResult) { _cached_encoder_for_IpaeActivationResponse_ipaeActivationResult = $._encodeInteger; }
    return _cached_encoder_for_IpaeActivationResponse_ipaeActivationResult(value, elGetter);
}


/* eslint-enable */
