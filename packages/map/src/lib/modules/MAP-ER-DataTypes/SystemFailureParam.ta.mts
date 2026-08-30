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
import { NetworkResource, _enum_for_NetworkResource, NetworkResource_plmn /* IMPORTED_LONG_ENUMERATION_ITEM */, plmn /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_hlr /* IMPORTED_LONG_ENUMERATION_ITEM */, hlr /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_vlr /* IMPORTED_LONG_ENUMERATION_ITEM */, vlr /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_pvlr /* IMPORTED_LONG_ENUMERATION_ITEM */, pvlr /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_controllingMSC /* IMPORTED_LONG_ENUMERATION_ITEM */, controllingMSC /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_vmsc /* IMPORTED_LONG_ENUMERATION_ITEM */, vmsc /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_eir /* IMPORTED_LONG_ENUMERATION_ITEM */, eir /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_rss /* IMPORTED_LONG_ENUMERATION_ITEM */, rss /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NetworkResource, _encode_NetworkResource } from "../MAP-CommonDataTypes/NetworkResource.ta.mjs";
// export { NetworkResource, _enum_for_NetworkResource, NetworkResource_plmn /* IMPORTED_LONG_ENUMERATION_ITEM */, plmn /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_hlr /* IMPORTED_LONG_ENUMERATION_ITEM */, hlr /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_vlr /* IMPORTED_LONG_ENUMERATION_ITEM */, vlr /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_pvlr /* IMPORTED_LONG_ENUMERATION_ITEM */, pvlr /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_controllingMSC /* IMPORTED_LONG_ENUMERATION_ITEM */, controllingMSC /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_vmsc /* IMPORTED_LONG_ENUMERATION_ITEM */, vmsc /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_eir /* IMPORTED_LONG_ENUMERATION_ITEM */, eir /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_rss /* IMPORTED_LONG_ENUMERATION_ITEM */, rss /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NetworkResource, _encode_NetworkResource } from "../MAP-CommonDataTypes/NetworkResource.ta.mjs";
import { ExtensibleSystemFailureParam, _decode_ExtensibleSystemFailureParam, _encode_ExtensibleSystemFailureParam } from "../MAP-ER-DataTypes/ExtensibleSystemFailureParam.ta.mjs";
// export { ExtensibleSystemFailureParam, _decode_ExtensibleSystemFailureParam, _encode_ExtensibleSystemFailureParam } from "../MAP-ER-DataTypes/ExtensibleSystemFailureParam.ta.mjs";


/**
 * @summary SystemFailureParam
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SystemFailureParam  ::=  CHOICE {
 *     networkResource    NetworkResource,
 *     -- networkResource must not be used in version 3
 *     extensibleSystemFailureParam    ExtensibleSystemFailureParam
 *     -- extensibleSystemFailureParam must not be used in version <3
 *     }
 * ```
 */
export
type SystemFailureParam =
    { networkResource: NetworkResource } /* CHOICE_ALT_ROOT */
    | { extensibleSystemFailureParam: ExtensibleSystemFailureParam } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SystemFailureParam: $.ASN1Decoder<SystemFailureParam> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SystemFailureParam
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SystemFailureParam (el: _Element): SystemFailureParam {
    if (!_cached_decoder_for_SystemFailureParam) { _cached_decoder_for_SystemFailureParam = $._decode_inextensible_choice<SystemFailureParam>({
    "UNIVERSAL 10": [ "networkResource", _decode_NetworkResource ],
    "UNIVERSAL 16": [ "extensibleSystemFailureParam", _decode_ExtensibleSystemFailureParam ]
}); }
    return _cached_decoder_for_SystemFailureParam(el);
}

let _cached_encoder_for_SystemFailureParam: $.ASN1Encoder<SystemFailureParam> | null = null;

/**
 * @summary Encodes a(n) SystemFailureParam into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SystemFailureParam, encoded as an ASN.1 Element.
 */
export
function _encode_SystemFailureParam (value: SystemFailureParam, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SystemFailureParam) { _cached_encoder_for_SystemFailureParam = $._encode_choice<SystemFailureParam>({
    "networkResource": _encode_NetworkResource,
    "extensibleSystemFailureParam": _encode_ExtensibleSystemFailureParam,
}, $.BER); }
    return _cached_encoder_for_SystemFailureParam(value, elGetter);
}


/* eslint-enable */
