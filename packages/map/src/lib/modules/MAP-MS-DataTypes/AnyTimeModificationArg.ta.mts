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
import { SubscriberIdentity, _decode_SubscriberIdentity, _encode_SubscriberIdentity } from "../MAP-CommonDataTypes/SubscriberIdentity.ta.mjs";
// export { SubscriberIdentity, _decode_SubscriberIdentity, _encode_SubscriberIdentity } from "../MAP-CommonDataTypes/SubscriberIdentity.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { ModificationRequestFor_CF_Info, _decode_ModificationRequestFor_CF_Info, _encode_ModificationRequestFor_CF_Info } from "../MAP-MS-DataTypes/ModificationRequestFor-CF-Info.ta.mjs";
// export { ModificationRequestFor_CF_Info, _decode_ModificationRequestFor_CF_Info, _encode_ModificationRequestFor_CF_Info } from "../MAP-MS-DataTypes/ModificationRequestFor-CF-Info.ta.mjs";
import { ModificationRequestFor_CB_Info, _decode_ModificationRequestFor_CB_Info, _encode_ModificationRequestFor_CB_Info } from "../MAP-MS-DataTypes/ModificationRequestFor-CB-Info.ta.mjs";
// export { ModificationRequestFor_CB_Info, _decode_ModificationRequestFor_CB_Info, _encode_ModificationRequestFor_CB_Info } from "../MAP-MS-DataTypes/ModificationRequestFor-CB-Info.ta.mjs";
import { ModificationRequestFor_CSI, _decode_ModificationRequestFor_CSI, _encode_ModificationRequestFor_CSI } from "../MAP-MS-DataTypes/ModificationRequestFor-CSI.ta.mjs";
// export { ModificationRequestFor_CSI, _decode_ModificationRequestFor_CSI, _encode_ModificationRequestFor_CSI } from "../MAP-MS-DataTypes/ModificationRequestFor-CSI.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { ModificationRequestFor_ODB_data, _decode_ModificationRequestFor_ODB_data, _encode_ModificationRequestFor_ODB_data } from "../MAP-MS-DataTypes/ModificationRequestFor-ODB-data.ta.mjs";
// export { ModificationRequestFor_ODB_data, _decode_ModificationRequestFor_ODB_data, _encode_ModificationRequestFor_ODB_data } from "../MAP-MS-DataTypes/ModificationRequestFor-ODB-data.ta.mjs";
import { ModificationRequestFor_IP_SM_GW_Data, _decode_ModificationRequestFor_IP_SM_GW_Data, _encode_ModificationRequestFor_IP_SM_GW_Data } from "../MAP-MS-DataTypes/ModificationRequestFor-IP-SM-GW-Data.ta.mjs";
// export { ModificationRequestFor_IP_SM_GW_Data, _decode_ModificationRequestFor_IP_SM_GW_Data, _encode_ModificationRequestFor_IP_SM_GW_Data } from "../MAP-MS-DataTypes/ModificationRequestFor-IP-SM-GW-Data.ta.mjs";
import { RequestedServingNode, RequestedServingNode_mmeAndSgsn /* IMPORTED_LONG_NAMED_BIT */, mmeAndSgsn /* IMPORTED_SHORT_NAMED_BIT */, _decode_RequestedServingNode, _encode_RequestedServingNode } from "../MAP-MS-DataTypes/RequestedServingNode.ta.mjs";
// export { RequestedServingNode, RequestedServingNode_mmeAndSgsn /* IMPORTED_LONG_NAMED_BIT */, mmeAndSgsn /* IMPORTED_SHORT_NAMED_BIT */, _decode_RequestedServingNode, _encode_RequestedServingNode } from "../MAP-MS-DataTypes/RequestedServingNode.ta.mjs";
import { ModificationRequestFor_CSG, _decode_ModificationRequestFor_CSG, _encode_ModificationRequestFor_CSG } from "../MAP-MS-DataTypes/ModificationRequestFor-CSG.ta.mjs";
// export { ModificationRequestFor_CSG, _decode_ModificationRequestFor_CSG, _encode_ModificationRequestFor_CSG } from "../MAP-MS-DataTypes/ModificationRequestFor-CSG.ta.mjs";
import { ModificationRequestFor_CW_Info, _decode_ModificationRequestFor_CW_Info, _encode_ModificationRequestFor_CW_Info } from "../MAP-MS-DataTypes/ModificationRequestFor-CW-Info.ta.mjs";
// export { ModificationRequestFor_CW_Info, _decode_ModificationRequestFor_CW_Info, _encode_ModificationRequestFor_CW_Info } from "../MAP-MS-DataTypes/ModificationRequestFor-CW-Info.ta.mjs";
import { ModificationRequestFor_CLIP_Info, _decode_ModificationRequestFor_CLIP_Info, _encode_ModificationRequestFor_CLIP_Info } from "../MAP-MS-DataTypes/ModificationRequestFor-CLIP-Info.ta.mjs";
// export { ModificationRequestFor_CLIP_Info, _decode_ModificationRequestFor_CLIP_Info, _encode_ModificationRequestFor_CLIP_Info } from "../MAP-MS-DataTypes/ModificationRequestFor-CLIP-Info.ta.mjs";
import { ModificationRequestFor_CLIR_Info, _decode_ModificationRequestFor_CLIR_Info, _encode_ModificationRequestFor_CLIR_Info } from "../MAP-MS-DataTypes/ModificationRequestFor-CLIR-Info.ta.mjs";
// export { ModificationRequestFor_CLIR_Info, _decode_ModificationRequestFor_CLIR_Info, _encode_ModificationRequestFor_CLIR_Info } from "../MAP-MS-DataTypes/ModificationRequestFor-CLIR-Info.ta.mjs";
import { ModificationRequestFor_CH_Info, _decode_ModificationRequestFor_CH_Info, _encode_ModificationRequestFor_CH_Info } from "../MAP-MS-DataTypes/ModificationRequestFor-CH-Info.ta.mjs";
// export { ModificationRequestFor_CH_Info, _decode_ModificationRequestFor_CH_Info, _encode_ModificationRequestFor_CH_Info } from "../MAP-MS-DataTypes/ModificationRequestFor-CH-Info.ta.mjs";
import { ModificationRequestFor_ECT_Info, _decode_ModificationRequestFor_ECT_Info, _encode_ModificationRequestFor_ECT_Info } from "../MAP-MS-DataTypes/ModificationRequestFor-ECT-Info.ta.mjs";
// export { ModificationRequestFor_ECT_Info, _decode_ModificationRequestFor_ECT_Info, _encode_ModificationRequestFor_ECT_Info } from "../MAP-MS-DataTypes/ModificationRequestFor-ECT-Info.ta.mjs";


/**
 * @summary AnyTimeModificationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AnyTimeModificationArg ::= SEQUENCE {
 *     subscriberIdentity    [0]    SubscriberIdentity,
 *     gsmSCF-Address    [1]    ISDN-AddressString,
 *     modificationRequestFor-CF-Info    [2]    ModificationRequestFor-CF-Info OPTIONAL,
 *     modificationRequestFor-CB-Info    [3]    ModificationRequestFor-CB-Info OPTIONAL,
 *     modificationRequestFor-CSI    [4]    ModificationRequestFor-CSI    OPTIONAL,
 *     extensionContainer    [5]    ExtensionContainer    OPTIONAL,
 *     longFTN-Supported    [6]    NULL    OPTIONAL,
 *     ...,
 *     modificationRequestFor-ODB-data    [7]    ModificationRequestFor-ODB-data OPTIONAL,
 *     modificationRequestFor-IP-SM-GW-Data    [8]    ModificationRequestFor-IP-SM-GW-Data OPTIONAL,
 *     activationRequestForUE-reachability    [9]    RequestedServingNode    OPTIONAL,
 *     modificationRequestFor-CSG    [10]    ModificationRequestFor-CSG    OPTIONAL,
 *     modificationRequestFor-CW-Data    [11] ModificationRequestFor-CW-Info    OPTIONAL,
 *     modificationRequestFor-CLIP-Data    [12] ModificationRequestFor-CLIP-Info    OPTIONAL,
 *     modificationRequestFor-CLIR-Data    [13] ModificationRequestFor-CLIR-Info    OPTIONAL,
 *     modificationRequestFor-HOLD-Data    [14] ModificationRequestFor-CH-Info    OPTIONAL,
 *     modificationRequestFor-ECT-Data    [15] ModificationRequestFor-ECT-Info    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class AnyTimeModificationArg {
    constructor (
        /**
         * @summary `subscriberIdentity`.
         * @public
         * @readonly
         */
        readonly subscriberIdentity: SubscriberIdentity,
        /**
         * @summary `gsmSCF_Address`.
         * @public
         * @readonly
         */
        readonly gsmSCF_Address: ISDN_AddressString,
        /**
         * @summary `modificationRequestFor_CF_Info`.
         * @public
         * @readonly
         */
        readonly modificationRequestFor_CF_Info: OPTIONAL<ModificationRequestFor_CF_Info>,
        /**
         * @summary `modificationRequestFor_CB_Info`.
         * @public
         * @readonly
         */
        readonly modificationRequestFor_CB_Info: OPTIONAL<ModificationRequestFor_CB_Info>,
        /**
         * @summary `modificationRequestFor_CSI`.
         * @public
         * @readonly
         */
        readonly modificationRequestFor_CSI: OPTIONAL<ModificationRequestFor_CSI>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `longFTN_Supported`.
         * @public
         * @readonly
         */
        readonly longFTN_Supported: OPTIONAL<NULL>,
        /**
         * @summary `modificationRequestFor_ODB_data`.
         * @public
         * @readonly
         */
        readonly modificationRequestFor_ODB_data: OPTIONAL<ModificationRequestFor_ODB_data>,
        /**
         * @summary `modificationRequestFor_IP_SM_GW_Data`.
         * @public
         * @readonly
         */
        readonly modificationRequestFor_IP_SM_GW_Data: OPTIONAL<ModificationRequestFor_IP_SM_GW_Data>,
        /**
         * @summary `activationRequestForUE_reachability`.
         * @public
         * @readonly
         */
        readonly activationRequestForUE_reachability: OPTIONAL<RequestedServingNode>,
        /**
         * @summary `modificationRequestFor_CSG`.
         * @public
         * @readonly
         */
        readonly modificationRequestFor_CSG: OPTIONAL<ModificationRequestFor_CSG>,
        /**
         * @summary `modificationRequestFor_CW_Data`.
         * @public
         * @readonly
         */
        readonly modificationRequestFor_CW_Data: OPTIONAL<ModificationRequestFor_CW_Info>,
        /**
         * @summary `modificationRequestFor_CLIP_Data`.
         * @public
         * @readonly
         */
        readonly modificationRequestFor_CLIP_Data: OPTIONAL<ModificationRequestFor_CLIP_Info>,
        /**
         * @summary `modificationRequestFor_CLIR_Data`.
         * @public
         * @readonly
         */
        readonly modificationRequestFor_CLIR_Data: OPTIONAL<ModificationRequestFor_CLIR_Info>,
        /**
         * @summary `modificationRequestFor_HOLD_Data`.
         * @public
         * @readonly
         */
        readonly modificationRequestFor_HOLD_Data: OPTIONAL<ModificationRequestFor_CH_Info>,
        /**
         * @summary `modificationRequestFor_ECT_Data`.
         * @public
         * @readonly
         */
        readonly modificationRequestFor_ECT_Data: OPTIONAL<ModificationRequestFor_ECT_Info>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AnyTimeModificationArg
     * @description
     * 
     * This takes an `object` and converts it to a `AnyTimeModificationArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AnyTimeModificationArg`.
     * @returns {AnyTimeModificationArg}
     */
    public static _from_object (_o: { [_K in keyof (AnyTimeModificationArg)]: (AnyTimeModificationArg)[_K] }): AnyTimeModificationArg {
        return new AnyTimeModificationArg(_o.subscriberIdentity, _o.gsmSCF_Address, _o.modificationRequestFor_CF_Info, _o.modificationRequestFor_CB_Info, _o.modificationRequestFor_CSI, _o.extensionContainer, _o.longFTN_Supported, _o.modificationRequestFor_ODB_data, _o.modificationRequestFor_IP_SM_GW_Data, _o.activationRequestForUE_reachability, _o.modificationRequestFor_CSG, _o.modificationRequestFor_CW_Data, _o.modificationRequestFor_CLIP_Data, _o.modificationRequestFor_CLIR_Data, _o.modificationRequestFor_HOLD_Data, _o.modificationRequestFor_ECT_Data, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AnyTimeModificationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AnyTimeModificationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("subscriberIdentity", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("gsmSCF-Address", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("modificationRequestFor-CF-Info", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("modificationRequestFor-CB-Info", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("modificationRequestFor-CSI", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("longFTN-Supported", true, $.hasTag(_TagClass.context, 6), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of AnyTimeModificationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AnyTimeModificationArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AnyTimeModificationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AnyTimeModificationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("modificationRequestFor-ODB-data", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("modificationRequestFor-IP-SM-GW-Data", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("activationRequestForUE-reachability", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("modificationRequestFor-CSG", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("modificationRequestFor-CW-Data", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("modificationRequestFor-CLIP-Data", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("modificationRequestFor-CLIR-Data", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("modificationRequestFor-HOLD-Data", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("modificationRequestFor-ECT-Data", true, $.hasTag(_TagClass.context, 15), undefined, undefined)
];

let _cached_decoder_for_AnyTimeModificationArg: $.ASN1Decoder<AnyTimeModificationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AnyTimeModificationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AnyTimeModificationArg (el: _Element): AnyTimeModificationArg {
    if (!_cached_decoder_for_AnyTimeModificationArg) { _cached_decoder_for_AnyTimeModificationArg = function (el: _Element): AnyTimeModificationArg {
    let subscriberIdentity!: SubscriberIdentity;
    let gsmSCF_Address!: ISDN_AddressString;
    let modificationRequestFor_CF_Info: OPTIONAL<ModificationRequestFor_CF_Info>;
    let modificationRequestFor_CB_Info: OPTIONAL<ModificationRequestFor_CB_Info>;
    let modificationRequestFor_CSI: OPTIONAL<ModificationRequestFor_CSI>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let longFTN_Supported: OPTIONAL<NULL>;
    let modificationRequestFor_ODB_data: OPTIONAL<ModificationRequestFor_ODB_data>;
    let modificationRequestFor_IP_SM_GW_Data: OPTIONAL<ModificationRequestFor_IP_SM_GW_Data>;
    let activationRequestForUE_reachability: OPTIONAL<RequestedServingNode>;
    let modificationRequestFor_CSG: OPTIONAL<ModificationRequestFor_CSG>;
    let modificationRequestFor_CW_Data: OPTIONAL<ModificationRequestFor_CW_Info>;
    let modificationRequestFor_CLIP_Data: OPTIONAL<ModificationRequestFor_CLIP_Info>;
    let modificationRequestFor_CLIR_Data: OPTIONAL<ModificationRequestFor_CLIR_Info>;
    let modificationRequestFor_HOLD_Data: OPTIONAL<ModificationRequestFor_CH_Info>;
    let modificationRequestFor_ECT_Data: OPTIONAL<ModificationRequestFor_ECT_Info>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "subscriberIdentity": (_el: _Element): void => { subscriberIdentity = $._decode_explicit<SubscriberIdentity>(() => _decode_SubscriberIdentity)(_el); },
        "gsmSCF-Address": (_el: _Element): void => { gsmSCF_Address = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "modificationRequestFor-CF-Info": (_el: _Element): void => { modificationRequestFor_CF_Info = $._decode_implicit<ModificationRequestFor_CF_Info>(() => _decode_ModificationRequestFor_CF_Info)(_el); },
        "modificationRequestFor-CB-Info": (_el: _Element): void => { modificationRequestFor_CB_Info = $._decode_implicit<ModificationRequestFor_CB_Info>(() => _decode_ModificationRequestFor_CB_Info)(_el); },
        "modificationRequestFor-CSI": (_el: _Element): void => { modificationRequestFor_CSI = $._decode_implicit<ModificationRequestFor_CSI>(() => _decode_ModificationRequestFor_CSI)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "longFTN-Supported": (_el: _Element): void => { longFTN_Supported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "modificationRequestFor-ODB-data": (_el: _Element): void => { modificationRequestFor_ODB_data = $._decode_implicit<ModificationRequestFor_ODB_data>(() => _decode_ModificationRequestFor_ODB_data)(_el); },
        "modificationRequestFor-IP-SM-GW-Data": (_el: _Element): void => { modificationRequestFor_IP_SM_GW_Data = $._decode_implicit<ModificationRequestFor_IP_SM_GW_Data>(() => _decode_ModificationRequestFor_IP_SM_GW_Data)(_el); },
        "activationRequestForUE-reachability": (_el: _Element): void => { activationRequestForUE_reachability = $._decode_implicit<RequestedServingNode>(() => _decode_RequestedServingNode)(_el); },
        "modificationRequestFor-CSG": (_el: _Element): void => { modificationRequestFor_CSG = $._decode_implicit<ModificationRequestFor_CSG>(() => _decode_ModificationRequestFor_CSG)(_el); },
        "modificationRequestFor-CW-Data": (_el: _Element): void => { modificationRequestFor_CW_Data = $._decode_implicit<ModificationRequestFor_CW_Info>(() => _decode_ModificationRequestFor_CW_Info)(_el); },
        "modificationRequestFor-CLIP-Data": (_el: _Element): void => { modificationRequestFor_CLIP_Data = $._decode_implicit<ModificationRequestFor_CLIP_Info>(() => _decode_ModificationRequestFor_CLIP_Info)(_el); },
        "modificationRequestFor-CLIR-Data": (_el: _Element): void => { modificationRequestFor_CLIR_Data = $._decode_implicit<ModificationRequestFor_CLIR_Info>(() => _decode_ModificationRequestFor_CLIR_Info)(_el); },
        "modificationRequestFor-HOLD-Data": (_el: _Element): void => { modificationRequestFor_HOLD_Data = $._decode_implicit<ModificationRequestFor_CH_Info>(() => _decode_ModificationRequestFor_CH_Info)(_el); },
        "modificationRequestFor-ECT-Data": (_el: _Element): void => { modificationRequestFor_ECT_Data = $._decode_implicit<ModificationRequestFor_ECT_Info>(() => _decode_ModificationRequestFor_ECT_Info)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AnyTimeModificationArg,
        _extension_additions_list_spec_for_AnyTimeModificationArg,
        _root_component_type_list_2_spec_for_AnyTimeModificationArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AnyTimeModificationArg(
        subscriberIdentity,
        gsmSCF_Address,
        modificationRequestFor_CF_Info,
        modificationRequestFor_CB_Info,
        modificationRequestFor_CSI,
        extensionContainer,
        longFTN_Supported,
        modificationRequestFor_ODB_data,
        modificationRequestFor_IP_SM_GW_Data,
        activationRequestForUE_reachability,
        modificationRequestFor_CSG,
        modificationRequestFor_CW_Data,
        modificationRequestFor_CLIP_Data,
        modificationRequestFor_CLIR_Data,
        modificationRequestFor_HOLD_Data,
        modificationRequestFor_ECT_Data,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AnyTimeModificationArg(el);
}

let _cached_encoder_for_AnyTimeModificationArg: $.ASN1Encoder<AnyTimeModificationArg> | null = null;

/**
 * @summary Encodes a(n) AnyTimeModificationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AnyTimeModificationArg, encoded as an ASN.1 Element.
 */
export
function _encode_AnyTimeModificationArg (value: AnyTimeModificationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AnyTimeModificationArg) { _cached_encoder_for_AnyTimeModificationArg = function (value: AnyTimeModificationArg, elGetter: $.ASN1Encoder<AnyTimeModificationArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_SubscriberIdentity, $.BER)(value.subscriberIdentity, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ISDN_AddressString, $.BER)(value.gsmSCF_Address, $.BER),
            /* IF_ABSENT  */ ((value.modificationRequestFor_CF_Info === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ModificationRequestFor_CF_Info, $.BER)(value.modificationRequestFor_CF_Info, $.BER)),
            /* IF_ABSENT  */ ((value.modificationRequestFor_CB_Info === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ModificationRequestFor_CB_Info, $.BER)(value.modificationRequestFor_CB_Info, $.BER)),
            /* IF_ABSENT  */ ((value.modificationRequestFor_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ModificationRequestFor_CSI, $.BER)(value.modificationRequestFor_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER)),
            /* IF_ABSENT  */ ((value.longFTN_Supported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER)(value.longFTN_Supported, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.modificationRequestFor_ODB_data === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_ModificationRequestFor_ODB_data, $.BER)(value.modificationRequestFor_ODB_data, $.BER)),
            /* IF_ABSENT  */ ((value.modificationRequestFor_IP_SM_GW_Data === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_ModificationRequestFor_IP_SM_GW_Data, $.BER)(value.modificationRequestFor_IP_SM_GW_Data, $.BER)),
            /* IF_ABSENT  */ ((value.activationRequestForUE_reachability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_RequestedServingNode, $.BER)(value.activationRequestForUE_reachability, $.BER)),
            /* IF_ABSENT  */ ((value.modificationRequestFor_CSG === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_ModificationRequestFor_CSG, $.BER)(value.modificationRequestFor_CSG, $.BER)),
            /* IF_ABSENT  */ ((value.modificationRequestFor_CW_Data === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_ModificationRequestFor_CW_Info, $.BER)(value.modificationRequestFor_CW_Data, $.BER)),
            /* IF_ABSENT  */ ((value.modificationRequestFor_CLIP_Data === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_ModificationRequestFor_CLIP_Info, $.BER)(value.modificationRequestFor_CLIP_Data, $.BER)),
            /* IF_ABSENT  */ ((value.modificationRequestFor_CLIR_Data === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_ModificationRequestFor_CLIR_Info, $.BER)(value.modificationRequestFor_CLIR_Data, $.BER)),
            /* IF_ABSENT  */ ((value.modificationRequestFor_HOLD_Data === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_ModificationRequestFor_CH_Info, $.BER)(value.modificationRequestFor_HOLD_Data, $.BER)),
            /* IF_ABSENT  */ ((value.modificationRequestFor_ECT_Data === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_ModificationRequestFor_ECT_Info, $.BER)(value.modificationRequestFor_ECT_Data, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AnyTimeModificationArg(value, elGetter);
}


/* eslint-enable */
