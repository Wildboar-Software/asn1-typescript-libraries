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
import { RoutingInfo, _decode_RoutingInfo, _encode_RoutingInfo } from "../MAP-CH-DataTypes/RoutingInfo.ta.mjs";
import { CamelRoutingInfo, _decode_CamelRoutingInfo, _encode_CamelRoutingInfo } from "../MAP-CH-DataTypes/CamelRoutingInfo.ta.mjs";


/**
 * @summary ExtendedRoutingInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedRoutingInfo  ::=  CHOICE {
 *     routingInfo    RoutingInfo,
 *     camelRoutingInfo    [8] CamelRoutingInfo}
 * ```
 */
export
type ExtendedRoutingInfo =
    { routingInfo: RoutingInfo } /* CHOICE_ALT_ROOT */
    | { camelRoutingInfo: CamelRoutingInfo } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ExtendedRoutingInfo: $.ASN1Decoder<ExtendedRoutingInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedRoutingInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtendedRoutingInfo (el: _Element): ExtendedRoutingInfo {
    if (!_cached_decoder_for_ExtendedRoutingInfo) { _cached_decoder_for_ExtendedRoutingInfo = $._decode_inextensible_choice<ExtendedRoutingInfo>({
    "UNIVERSAL 4": [ "routingInfo", _decode_RoutingInfo ],
    "UNIVERSAL 16": [ "routingInfo", _decode_RoutingInfo ],
    "CONTEXT 8": [ "camelRoutingInfo", $._decode_implicit<CamelRoutingInfo>(() => _decode_CamelRoutingInfo) ]
}); }
    return _cached_decoder_for_ExtendedRoutingInfo(el);
}

let _cached_encoder_for_ExtendedRoutingInfo: $.ASN1Encoder<ExtendedRoutingInfo> | null = null;

/**
 * @summary Encodes a(n) ExtendedRoutingInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedRoutingInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ExtendedRoutingInfo (value: ExtendedRoutingInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtendedRoutingInfo) { _cached_encoder_for_ExtendedRoutingInfo = $._encode_choice<ExtendedRoutingInfo>({
    "routingInfo": _encode_RoutingInfo,
    "camelRoutingInfo": $._encode_implicit(_TagClass.context, 8, () => _encode_CamelRoutingInfo, $.BER),
}, $.BER); }
    return _cached_encoder_for_ExtendedRoutingInfo(value, elGetter);
}


/* eslint-enable */
