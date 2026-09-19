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
 * @summary TunnelProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TunnelProtocol  ::=  CHOICE
 * {
 *  rfc2868ValueField [0] OCTET STRING, -- coded to indicate the type of tunnel established between
 *  -- the HeNB and the SeGW as specified in TS 33.320. The actual coding is provided in 3 octets
 *  -- with the Value field of the Tunnel Type RADIUS attribute as specified in IETF RFC 2868.
 *  -- This corresponds to the outer layer tunnel between the HeNB and the SeGW as viewed by the
 *  -- SeGW
 *  nativeIPSec [1] NULL, -- if native IPSec is required by TS 33.320 between HeNB and SeGW
 * ...
 * }
 * ```
 */
export
type TunnelProtocol =
    { rfc2868ValueField: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { nativeIPSec: NULL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_TunnelProtocol: $.ASN1Decoder<TunnelProtocol> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TunnelProtocol
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TunnelProtocol (el: _Element): TunnelProtocol {
    if (!_cached_decoder_for_TunnelProtocol) { _cached_decoder_for_TunnelProtocol = $._decode_extensible_choice<TunnelProtocol>({
    "CONTEXT 0": [ "rfc2868ValueField", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 1": [ "nativeIPSec", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_TunnelProtocol(el);
}

let _cached_encoder_for_TunnelProtocol: $.ASN1Encoder<TunnelProtocol> | null = null;

/**
 * @summary Encodes a(n) TunnelProtocol into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TunnelProtocol, encoded as an ASN.1 Element.
 */
export
function _encode_TunnelProtocol (value: TunnelProtocol, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TunnelProtocol) { _cached_encoder_for_TunnelProtocol = $._encode_choice<TunnelProtocol>({
    "rfc2868ValueField": $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER),
    "nativeIPSec": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_TunnelProtocol(value, elGetter);
}


/* eslint-enable */
