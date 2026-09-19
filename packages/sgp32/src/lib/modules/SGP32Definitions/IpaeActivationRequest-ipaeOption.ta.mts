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
 * @summary IpaeActivationRequest_ipaeOption
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IpaeActivationRequest-ipaeOption ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type IpaeActivationRequest_ipaeOption = BIT_STRING;

/**
 * @summary IpaeActivationRequest_ipaeOption_activateIpae
 * @constant
 */
export
const IpaeActivationRequest_ipaeOption_activateIpae: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary activateIpae
 * @constant
 */
export
const activateIpae: number = IpaeActivationRequest_ipaeOption_activateIpae; /* SHORT_NAMED_BIT */

let _cached_decoder_for_IpaeActivationRequest_ipaeOption: $.ASN1Decoder<IpaeActivationRequest_ipaeOption> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IpaeActivationRequest_ipaeOption
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IpaeActivationRequest_ipaeOption (el: _Element): IpaeActivationRequest_ipaeOption {
    if (!_cached_decoder_for_IpaeActivationRequest_ipaeOption) { _cached_decoder_for_IpaeActivationRequest_ipaeOption = $._decodeBitString; }
    return _cached_decoder_for_IpaeActivationRequest_ipaeOption(el);
}

let _cached_encoder_for_IpaeActivationRequest_ipaeOption: $.ASN1Encoder<IpaeActivationRequest_ipaeOption> | null = null;

/**
 * @summary Encodes a(n) IpaeActivationRequest_ipaeOption into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IpaeActivationRequest_ipaeOption, encoded as an ASN.1 Element.
 */
export
function _encode_IpaeActivationRequest_ipaeOption (value: IpaeActivationRequest_ipaeOption, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IpaeActivationRequest_ipaeOption) { _cached_encoder_for_IpaeActivationRequest_ipaeOption = $._encodeBitString; }
    return _cached_encoder_for_IpaeActivationRequest_ipaeOption(value, elGetter);
}


/* eslint-enable */
