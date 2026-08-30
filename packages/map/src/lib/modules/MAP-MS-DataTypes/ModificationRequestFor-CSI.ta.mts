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
import { RequestedCAMEL_SubscriptionInfo, _enum_for_RequestedCAMEL_SubscriptionInfo, RequestedCAMEL_SubscriptionInfo_o_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, o_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_t_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, t_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_vt_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, vt_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_tif_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, tif_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_gprs_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, gprs_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_mo_sms_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, mo_sms_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_ss_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, ss_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_m_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, m_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_d_csi /* IMPORTED_LONG_ENUMERATION_ITEM */, d_csi /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RequestedCAMEL_SubscriptionInfo, _encode_RequestedCAMEL_SubscriptionInfo } from "../MAP-MS-DataTypes/RequestedCAMEL-SubscriptionInfo.ta.mjs";
// export { RequestedCAMEL_SubscriptionInfo, _enum_for_RequestedCAMEL_SubscriptionInfo, RequestedCAMEL_SubscriptionInfo_o_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, o_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_t_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, t_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_vt_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, vt_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_tif_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, tif_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_gprs_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, gprs_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_mo_sms_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, mo_sms_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_ss_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, ss_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_m_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, m_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_d_csi /* IMPORTED_LONG_ENUMERATION_ITEM */, d_csi /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RequestedCAMEL_SubscriptionInfo, _encode_RequestedCAMEL_SubscriptionInfo } from "../MAP-MS-DataTypes/RequestedCAMEL-SubscriptionInfo.ta.mjs";
import { ModificationInstruction, _enum_for_ModificationInstruction, ModificationInstruction_deactivate /* IMPORTED_LONG_ENUMERATION_ITEM */, deactivate /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModificationInstruction_activate /* IMPORTED_LONG_ENUMERATION_ITEM */, activate /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ModificationInstruction, _encode_ModificationInstruction } from "../MAP-MS-DataTypes/ModificationInstruction.ta.mjs";
// export { ModificationInstruction, _enum_for_ModificationInstruction, ModificationInstruction_deactivate /* IMPORTED_LONG_ENUMERATION_ITEM */, deactivate /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModificationInstruction_activate /* IMPORTED_LONG_ENUMERATION_ITEM */, activate /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ModificationInstruction, _encode_ModificationInstruction } from "../MAP-MS-DataTypes/ModificationInstruction.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { AdditionalRequestedCAMEL_SubscriptionInfo, _enum_for_AdditionalRequestedCAMEL_SubscriptionInfo, AdditionalRequestedCAMEL_SubscriptionInfo_mt_sms_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, mt_sms_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalRequestedCAMEL_SubscriptionInfo_mg_csi /* IMPORTED_LONG_ENUMERATION_ITEM */, mg_csi /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalRequestedCAMEL_SubscriptionInfo_o_IM_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, o_IM_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalRequestedCAMEL_SubscriptionInfo_d_IM_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, d_IM_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalRequestedCAMEL_SubscriptionInfo_vt_IM_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, vt_IM_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AdditionalRequestedCAMEL_SubscriptionInfo, _encode_AdditionalRequestedCAMEL_SubscriptionInfo } from "../MAP-MS-DataTypes/AdditionalRequestedCAMEL-SubscriptionInfo.ta.mjs";
// export { AdditionalRequestedCAMEL_SubscriptionInfo, _enum_for_AdditionalRequestedCAMEL_SubscriptionInfo, AdditionalRequestedCAMEL_SubscriptionInfo_mt_sms_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, mt_sms_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalRequestedCAMEL_SubscriptionInfo_mg_csi /* IMPORTED_LONG_ENUMERATION_ITEM */, mg_csi /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalRequestedCAMEL_SubscriptionInfo_o_IM_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, o_IM_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalRequestedCAMEL_SubscriptionInfo_d_IM_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, d_IM_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalRequestedCAMEL_SubscriptionInfo_vt_IM_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, vt_IM_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AdditionalRequestedCAMEL_SubscriptionInfo, _encode_AdditionalRequestedCAMEL_SubscriptionInfo } from "../MAP-MS-DataTypes/AdditionalRequestedCAMEL-SubscriptionInfo.ta.mjs";


/**
 * @summary ModificationRequestFor_CSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModificationRequestFor-CSI ::= SEQUENCE {
 *     requestedCamel-SubscriptionInfo    [0]    RequestedCAMEL-SubscriptionInfo,
 *     modifyNotificationToCSE    [1]    ModificationInstruction    OPTIONAL,
 *     modifyCSI-State    [2]    ModificationInstruction    OPTIONAL,
 *     extensionContainer    [3]    ExtensionContainer    OPTIONAL,
 *     ...,
 *     additionalRequestedCAMEL-SubscriptionInfo
 *     [4] AdditionalRequestedCAMEL-SubscriptionInfo
 *         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ModificationRequestFor_CSI {
    constructor (
        /**
         * @summary `requestedCamel_SubscriptionInfo`.
         * @public
         * @readonly
         */
        readonly requestedCamel_SubscriptionInfo: RequestedCAMEL_SubscriptionInfo,
        /**
         * @summary `modifyNotificationToCSE`.
         * @public
         * @readonly
         */
        readonly modifyNotificationToCSE: OPTIONAL<ModificationInstruction>,
        /**
         * @summary `modifyCSI_State`.
         * @public
         * @readonly
         */
        readonly modifyCSI_State: OPTIONAL<ModificationInstruction>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `additionalRequestedCAMEL_SubscriptionInfo`.
         * @public
         * @readonly
         */
        readonly additionalRequestedCAMEL_SubscriptionInfo: OPTIONAL<AdditionalRequestedCAMEL_SubscriptionInfo>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ModificationRequestFor_CSI
     * @description
     * 
     * This takes an `object` and converts it to a `ModificationRequestFor_CSI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModificationRequestFor_CSI`.
     * @returns {ModificationRequestFor_CSI}
     */
    public static _from_object (_o: { [_K in keyof (ModificationRequestFor_CSI)]: (ModificationRequestFor_CSI)[_K] }): ModificationRequestFor_CSI {
        return new ModificationRequestFor_CSI(_o.requestedCamel_SubscriptionInfo, _o.modifyNotificationToCSE, _o.modifyCSI_State, _o.extensionContainer, _o.additionalRequestedCAMEL_SubscriptionInfo, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `requestedCamel_SubscriptionInfo`
         * @public
         * @static
         */

    public static _enum_for_requestedCamel_SubscriptionInfo = _enum_for_RequestedCAMEL_SubscriptionInfo;        /**
         * @summary The enum used as the type of the component `modifyNotificationToCSE`
         * @public
         * @static
         */

    public static _enum_for_modifyNotificationToCSE = _enum_for_ModificationInstruction;        /**
         * @summary The enum used as the type of the component `modifyCSI_State`
         * @public
         * @static
         */

    public static _enum_for_modifyCSI_State = _enum_for_ModificationInstruction;        /**
         * @summary The enum used as the type of the component `additionalRequestedCAMEL_SubscriptionInfo`
         * @public
         * @static
         */

    public static _enum_for_additionalRequestedCAMEL_SubscriptionInfo = _enum_for_AdditionalRequestedCAMEL_SubscriptionInfo;
}

/**
 * @summary The Leading Root Component Types of ModificationRequestFor_CSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ModificationRequestFor_CSI: $.ComponentSpec[] = [
    new $.ComponentSpec("requestedCamel-SubscriptionInfo", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("modifyNotificationToCSE", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("modifyCSI-State", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ModificationRequestFor_CSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ModificationRequestFor_CSI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ModificationRequestFor_CSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ModificationRequestFor_CSI: $.ComponentSpec[] = [
    new $.ComponentSpec("additionalRequestedCAMEL-SubscriptionInfo", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

let _cached_decoder_for_ModificationRequestFor_CSI: $.ASN1Decoder<ModificationRequestFor_CSI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModificationRequestFor_CSI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModificationRequestFor_CSI (el: _Element): ModificationRequestFor_CSI {
    if (!_cached_decoder_for_ModificationRequestFor_CSI) { _cached_decoder_for_ModificationRequestFor_CSI = function (el: _Element): ModificationRequestFor_CSI {
    let requestedCamel_SubscriptionInfo!: RequestedCAMEL_SubscriptionInfo;
    let modifyNotificationToCSE: OPTIONAL<ModificationInstruction>;
    let modifyCSI_State: OPTIONAL<ModificationInstruction>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let additionalRequestedCAMEL_SubscriptionInfo: OPTIONAL<AdditionalRequestedCAMEL_SubscriptionInfo>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "requestedCamel-SubscriptionInfo": (_el: _Element): void => { requestedCamel_SubscriptionInfo = $._decode_implicit<RequestedCAMEL_SubscriptionInfo>(() => _decode_RequestedCAMEL_SubscriptionInfo)(_el); },
        "modifyNotificationToCSE": (_el: _Element): void => { modifyNotificationToCSE = $._decode_implicit<ModificationInstruction>(() => _decode_ModificationInstruction)(_el); },
        "modifyCSI-State": (_el: _Element): void => { modifyCSI_State = $._decode_implicit<ModificationInstruction>(() => _decode_ModificationInstruction)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "additionalRequestedCAMEL-SubscriptionInfo": (_el: _Element): void => { additionalRequestedCAMEL_SubscriptionInfo = $._decode_implicit<AdditionalRequestedCAMEL_SubscriptionInfo>(() => _decode_AdditionalRequestedCAMEL_SubscriptionInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ModificationRequestFor_CSI,
        _extension_additions_list_spec_for_ModificationRequestFor_CSI,
        _root_component_type_list_2_spec_for_ModificationRequestFor_CSI,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ModificationRequestFor_CSI(
        requestedCamel_SubscriptionInfo,
        modifyNotificationToCSE,
        modifyCSI_State,
        extensionContainer,
        additionalRequestedCAMEL_SubscriptionInfo,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ModificationRequestFor_CSI(el);
}

let _cached_encoder_for_ModificationRequestFor_CSI: $.ASN1Encoder<ModificationRequestFor_CSI> | null = null;

/**
 * @summary Encodes a(n) ModificationRequestFor_CSI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModificationRequestFor_CSI, encoded as an ASN.1 Element.
 */
export
function _encode_ModificationRequestFor_CSI (value: ModificationRequestFor_CSI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModificationRequestFor_CSI) { _cached_encoder_for_ModificationRequestFor_CSI = function (value: ModificationRequestFor_CSI, elGetter: $.ASN1Encoder<ModificationRequestFor_CSI>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RequestedCAMEL_SubscriptionInfo, $.BER)(value.requestedCamel_SubscriptionInfo, $.BER),
            /* IF_ABSENT  */ ((value.modifyNotificationToCSE === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ModificationInstruction, $.BER)(value.modifyNotificationToCSE, $.BER)),
            /* IF_ABSENT  */ ((value.modifyCSI_State === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ModificationInstruction, $.BER)(value.modifyCSI_State, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.additionalRequestedCAMEL_SubscriptionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_AdditionalRequestedCAMEL_SubscriptionInfo, $.BER)(value.additionalRequestedCAMEL_SubscriptionInfo, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ModificationRequestFor_CSI(value, elGetter);
}


/* eslint-enable */
