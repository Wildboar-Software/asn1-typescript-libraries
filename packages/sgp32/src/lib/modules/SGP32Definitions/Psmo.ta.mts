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
import { Psmo_enable, _decode_Psmo_enable, _encode_Psmo_enable } from "../SGP32Definitions/Psmo-enable.ta.mjs";
// export { Psmo_enable, _decode_Psmo_enable, _encode_Psmo_enable } from "../SGP32Definitions/Psmo-enable.ta.mjs";
import { Psmo_disable, _decode_Psmo_disable, _encode_Psmo_disable } from "../SGP32Definitions/Psmo-disable.ta.mjs";
// export { Psmo_disable, _decode_Psmo_disable, _encode_Psmo_disable } from "../SGP32Definitions/Psmo-disable.ta.mjs";
import { Psmo_delete, _decode_Psmo_delete, _encode_Psmo_delete } from "../SGP32Definitions/Psmo-delete.ta.mjs";
// export { Psmo_delete, _decode_Psmo_delete, _encode_Psmo_delete } from "../SGP32Definitions/Psmo-delete.ta.mjs";
import { ProfileInfoListRequest, _decode_ProfileInfoListRequest, _encode_ProfileInfoListRequest } from "../RSPDefinitions/ProfileInfoListRequest.ta.mjs";
// export { ProfileInfoListRequest, _decode_ProfileInfoListRequest, _encode_ProfileInfoListRequest } from "../RSPDefinitions/ProfileInfoListRequest.ta.mjs";
import { Psmo_getRAT, _decode_Psmo_getRAT, _encode_Psmo_getRAT } from "../SGP32Definitions/Psmo-getRAT.ta.mjs";
// export { Psmo_getRAT, _decode_Psmo_getRAT, _encode_Psmo_getRAT } from "../SGP32Definitions/Psmo-getRAT.ta.mjs";
import { Psmo_configureImmediateEnable, _decode_Psmo_configureImmediateEnable, _encode_Psmo_configureImmediateEnable } from "../SGP32Definitions/Psmo-configureImmediateEnable.ta.mjs";
// export { Psmo_configureImmediateEnable, _decode_Psmo_configureImmediateEnable, _encode_Psmo_configureImmediateEnable } from "../SGP32Definitions/Psmo-configureImmediateEnable.ta.mjs";
import { Psmo_setFallbackAttribute, _decode_Psmo_setFallbackAttribute, _encode_Psmo_setFallbackAttribute } from "../SGP32Definitions/Psmo-setFallbackAttribute.ta.mjs";
// export { Psmo_setFallbackAttribute, _decode_Psmo_setFallbackAttribute, _encode_Psmo_setFallbackAttribute } from "../SGP32Definitions/Psmo-setFallbackAttribute.ta.mjs";
import { Psmo_unsetFallbackAttribute, _decode_Psmo_unsetFallbackAttribute, _encode_Psmo_unsetFallbackAttribute } from "../SGP32Definitions/Psmo-unsetFallbackAttribute.ta.mjs";
// export { Psmo_unsetFallbackAttribute, _decode_Psmo_unsetFallbackAttribute, _encode_Psmo_unsetFallbackAttribute } from "../SGP32Definitions/Psmo-unsetFallbackAttribute.ta.mjs";
import { SetDefaultDpAddressRequest, _decode_SetDefaultDpAddressRequest, _encode_SetDefaultDpAddressRequest } from "../SGP32Definitions/SetDefaultDpAddressRequest.ta.mjs";
// export { SetDefaultDpAddressRequest, _decode_SetDefaultDpAddressRequest, _encode_SetDefaultDpAddressRequest } from "../SGP32Definitions/SetDefaultDpAddressRequest.ta.mjs";


/**
 * @summary Psmo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Psmo  ::=  CHOICE {
 *     enable [3] SEQUENCE {
 *         iccid [APPLICATION 26] Iccid,
 *         rollbackFlag NULL OPTIONAL
 *     },
 *     disable [4] SEQUENCE {iccid [APPLICATION 26] Iccid},
 *     delete [5] SEQUENCE {iccid [APPLICATION 26] Iccid},
 *     listProfileInfo [45] ProfileInfoListRequest, -- Tag 'BF2D'
 *     getRAT [6] SEQUENCE {},
 *     configureImmediateEnable [7] SEQUENCE {
 *         immediateEnableFlag [0] NULL OPTIONAL,
 *         defaultSmdpOid [1] OBJECT IDENTIFIER OPTIONAL,
 *         defaultSmdpAddress [2] UTF8String OPTIONAL
 *     },
 *     setFallbackAttribute [8] SEQUENCE {iccid [APPLICATION 26] Iccid},
 *     unsetFallbackAttribute [9] SEQUENCE {},
 *     setDefaultDpAddress [101] SetDefaultDpAddressRequest -- Tag 'BF65'
 * }
 * ```
 */
export
type Psmo =
    { enable: Psmo_enable } /* CHOICE_ALT_ROOT */
    | { disable: Psmo_disable } /* CHOICE_ALT_ROOT */
    | { delete_: Psmo_delete } /* CHOICE_ALT_ROOT */
    | { listProfileInfo: ProfileInfoListRequest } /* CHOICE_ALT_ROOT */
    | { getRAT: Psmo_getRAT } /* CHOICE_ALT_ROOT */
    | { configureImmediateEnable: Psmo_configureImmediateEnable } /* CHOICE_ALT_ROOT */
    | { setFallbackAttribute: Psmo_setFallbackAttribute } /* CHOICE_ALT_ROOT */
    | { unsetFallbackAttribute: Psmo_unsetFallbackAttribute } /* CHOICE_ALT_ROOT */
    | { setDefaultDpAddress: SetDefaultDpAddressRequest } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Psmo: $.ASN1Decoder<Psmo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Psmo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Psmo (el: _Element): Psmo {
    if (!_cached_decoder_for_Psmo) { _cached_decoder_for_Psmo = $._decode_inextensible_choice<Psmo>({
    "CONTEXT 3": [ "enable", $._decode_implicit<Psmo_enable>(() => _decode_Psmo_enable) ],
    "CONTEXT 4": [ "disable", $._decode_implicit<Psmo_disable>(() => _decode_Psmo_disable) ],
    "CONTEXT 5": [ "delete_", $._decode_implicit<Psmo_delete>(() => _decode_Psmo_delete) ],
    "CONTEXT 45": [ "listProfileInfo", $._decode_implicit<ProfileInfoListRequest>(() => _decode_ProfileInfoListRequest) ],
    "CONTEXT 6": [ "getRAT", $._decode_implicit<Psmo_getRAT>(() => _decode_Psmo_getRAT) ],
    "CONTEXT 7": [ "configureImmediateEnable", $._decode_implicit<Psmo_configureImmediateEnable>(() => _decode_Psmo_configureImmediateEnable) ],
    "CONTEXT 8": [ "setFallbackAttribute", $._decode_implicit<Psmo_setFallbackAttribute>(() => _decode_Psmo_setFallbackAttribute) ],
    "CONTEXT 9": [ "unsetFallbackAttribute", $._decode_implicit<Psmo_unsetFallbackAttribute>(() => _decode_Psmo_unsetFallbackAttribute) ],
    "CONTEXT 101": [ "setDefaultDpAddress", $._decode_implicit<SetDefaultDpAddressRequest>(() => _decode_SetDefaultDpAddressRequest) ]
}); }
    return _cached_decoder_for_Psmo(el);
}

let _cached_encoder_for_Psmo: $.ASN1Encoder<Psmo> | null = null;

/**
 * @summary Encodes a(n) Psmo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Psmo, encoded as an ASN.1 Element.
 */
export
function _encode_Psmo (value: Psmo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Psmo) { _cached_encoder_for_Psmo = $._encode_choice<Psmo>({
    "enable": $._encode_implicit(_TagClass.context, 3, () => _encode_Psmo_enable, $.BER),
    "disable": $._encode_implicit(_TagClass.context, 4, () => _encode_Psmo_disable, $.BER),
    "delete_": $._encode_implicit(_TagClass.context, 5, () => _encode_Psmo_delete, $.BER),
    "listProfileInfo": $._encode_implicit(_TagClass.context, 45, () => _encode_ProfileInfoListRequest, $.BER),
    "getRAT": $._encode_implicit(_TagClass.context, 6, () => _encode_Psmo_getRAT, $.BER),
    "configureImmediateEnable": $._encode_implicit(_TagClass.context, 7, () => _encode_Psmo_configureImmediateEnable, $.BER),
    "setFallbackAttribute": $._encode_implicit(_TagClass.context, 8, () => _encode_Psmo_setFallbackAttribute, $.BER),
    "unsetFallbackAttribute": $._encode_implicit(_TagClass.context, 9, () => _encode_Psmo_unsetFallbackAttribute, $.BER),
    "setDefaultDpAddress": $._encode_implicit(_TagClass.context, 101, () => _encode_SetDefaultDpAddressRequest, $.BER),
}, $.BER); }
    return _cached_encoder_for_Psmo(value, elGetter);
}


/* eslint-enable */
