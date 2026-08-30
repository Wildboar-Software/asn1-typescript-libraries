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
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { ForwardingData, _decode_ForwardingData, _encode_ForwardingData } from "../MAP-CH-DataTypes/ForwardingData.ta.mjs";
// export { ForwardingData, _decode_ForwardingData, _encode_ForwardingData } from "../MAP-CH-DataTypes/ForwardingData.ta.mjs";


/**
 * @summary RoutingInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoutingInfo  ::=  CHOICE {
 *     roamingNumber    ISDN-AddressString,
 *     forwardingData    ForwardingData}
 * ```
 */
export
type RoutingInfo =
    { roamingNumber: ISDN_AddressString } /* CHOICE_ALT_ROOT */
    | { forwardingData: ForwardingData } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RoutingInfo: $.ASN1Decoder<RoutingInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoutingInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RoutingInfo (el: _Element): RoutingInfo {
    if (!_cached_decoder_for_RoutingInfo) { _cached_decoder_for_RoutingInfo = $._decode_inextensible_choice<RoutingInfo>({
    "UNIVERSAL 4": [ "roamingNumber", _decode_ISDN_AddressString ],
    "UNIVERSAL 16": [ "forwardingData", _decode_ForwardingData ]
}); }
    return _cached_decoder_for_RoutingInfo(el);
}

let _cached_encoder_for_RoutingInfo: $.ASN1Encoder<RoutingInfo> | null = null;

/**
 * @summary Encodes a(n) RoutingInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoutingInfo, encoded as an ASN.1 Element.
 */
export
function _encode_RoutingInfo (value: RoutingInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RoutingInfo) { _cached_encoder_for_RoutingInfo = $._encode_choice<RoutingInfo>({
    "roamingNumber": _encode_ISDN_AddressString,
    "forwardingData": _encode_ForwardingData,
}, $.BER); }
    return _cached_encoder_for_RoutingInfo(value, elGetter);
}


/* eslint-enable */
