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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { SupportedCamelPhases, SupportedCamelPhases_phase1 /* IMPORTED_LONG_NAMED_BIT */, phase1 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase2 /* IMPORTED_LONG_NAMED_BIT */, phase2 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase3 /* IMPORTED_LONG_NAMED_BIT */, phase3 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase4 /* IMPORTED_LONG_NAMED_BIT */, phase4 /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedCamelPhases, _encode_SupportedCamelPhases } from "../MAP-MS-DataTypes/SupportedCamelPhases.ta.mjs";
// export { SupportedCamelPhases, SupportedCamelPhases_phase1 /* IMPORTED_LONG_NAMED_BIT */, phase1 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase2 /* IMPORTED_LONG_NAMED_BIT */, phase2 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase3 /* IMPORTED_LONG_NAMED_BIT */, phase3 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase4 /* IMPORTED_LONG_NAMED_BIT */, phase4 /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedCamelPhases, _encode_SupportedCamelPhases } from "../MAP-MS-DataTypes/SupportedCamelPhases.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { IST_SupportIndicator, _enum_for_IST_SupportIndicator, IST_SupportIndicator_basicISTSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, basicISTSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, IST_SupportIndicator_istCommandSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, istCommandSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IST_SupportIndicator, _encode_IST_SupportIndicator } from "../MAP-MS-DataTypes/IST-SupportIndicator.ta.mjs";
// export { IST_SupportIndicator, _enum_for_IST_SupportIndicator, IST_SupportIndicator_basicISTSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, basicISTSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, IST_SupportIndicator_istCommandSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, istCommandSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IST_SupportIndicator, _encode_IST_SupportIndicator } from "../MAP-MS-DataTypes/IST-SupportIndicator.ta.mjs";
import { SuperChargerInfo, _decode_SuperChargerInfo, _encode_SuperChargerInfo } from "../MAP-MS-DataTypes/SuperChargerInfo.ta.mjs";
// export { SuperChargerInfo, _decode_SuperChargerInfo, _encode_SuperChargerInfo } from "../MAP-MS-DataTypes/SuperChargerInfo.ta.mjs";
import { SupportedLCS_CapabilitySets, SupportedLCS_CapabilitySets_lcsCapabilitySet1 /* IMPORTED_LONG_NAMED_BIT */, lcsCapabilitySet1 /* IMPORTED_SHORT_NAMED_BIT */, SupportedLCS_CapabilitySets_lcsCapabilitySet2 /* IMPORTED_LONG_NAMED_BIT */, lcsCapabilitySet2 /* IMPORTED_SHORT_NAMED_BIT */, SupportedLCS_CapabilitySets_lcsCapabilitySet3 /* IMPORTED_LONG_NAMED_BIT */, lcsCapabilitySet3 /* IMPORTED_SHORT_NAMED_BIT */, SupportedLCS_CapabilitySets_lcsCapabilitySet4 /* IMPORTED_LONG_NAMED_BIT */, lcsCapabilitySet4 /* IMPORTED_SHORT_NAMED_BIT */, SupportedLCS_CapabilitySets_lcsCapabilitySet5 /* IMPORTED_LONG_NAMED_BIT */, lcsCapabilitySet5 /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedLCS_CapabilitySets, _encode_SupportedLCS_CapabilitySets } from "../MAP-MS-DataTypes/SupportedLCS-CapabilitySets.ta.mjs";
// export { SupportedLCS_CapabilitySets, SupportedLCS_CapabilitySets_lcsCapabilitySet1 /* IMPORTED_LONG_NAMED_BIT */, lcsCapabilitySet1 /* IMPORTED_SHORT_NAMED_BIT */, SupportedLCS_CapabilitySets_lcsCapabilitySet2 /* IMPORTED_LONG_NAMED_BIT */, lcsCapabilitySet2 /* IMPORTED_SHORT_NAMED_BIT */, SupportedLCS_CapabilitySets_lcsCapabilitySet3 /* IMPORTED_LONG_NAMED_BIT */, lcsCapabilitySet3 /* IMPORTED_SHORT_NAMED_BIT */, SupportedLCS_CapabilitySets_lcsCapabilitySet4 /* IMPORTED_LONG_NAMED_BIT */, lcsCapabilitySet4 /* IMPORTED_SHORT_NAMED_BIT */, SupportedLCS_CapabilitySets_lcsCapabilitySet5 /* IMPORTED_LONG_NAMED_BIT */, lcsCapabilitySet5 /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedLCS_CapabilitySets, _encode_SupportedLCS_CapabilitySets } from "../MAP-MS-DataTypes/SupportedLCS-CapabilitySets.ta.mjs";
import { OfferedCamel4CSIs, OfferedCamel4CSIs_o_csi /* IMPORTED_LONG_NAMED_BIT */, o_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_d_csi /* IMPORTED_LONG_NAMED_BIT */, d_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_vt_csi /* IMPORTED_LONG_NAMED_BIT */, vt_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_t_csi /* IMPORTED_LONG_NAMED_BIT */, t_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_mt_sms_csi /* IMPORTED_LONG_NAMED_BIT */, mt_sms_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_mg_csi /* IMPORTED_LONG_NAMED_BIT */, mg_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_psi_enhancements /* IMPORTED_LONG_NAMED_BIT */, psi_enhancements /* IMPORTED_SHORT_NAMED_BIT */, _decode_OfferedCamel4CSIs, _encode_OfferedCamel4CSIs } from "../MAP-MS-DataTypes/OfferedCamel4CSIs.ta.mjs";
// export { OfferedCamel4CSIs, OfferedCamel4CSIs_o_csi /* IMPORTED_LONG_NAMED_BIT */, o_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_d_csi /* IMPORTED_LONG_NAMED_BIT */, d_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_vt_csi /* IMPORTED_LONG_NAMED_BIT */, vt_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_t_csi /* IMPORTED_LONG_NAMED_BIT */, t_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_mt_sms_csi /* IMPORTED_LONG_NAMED_BIT */, mt_sms_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_mg_csi /* IMPORTED_LONG_NAMED_BIT */, mg_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_psi_enhancements /* IMPORTED_LONG_NAMED_BIT */, psi_enhancements /* IMPORTED_SHORT_NAMED_BIT */, _decode_OfferedCamel4CSIs, _encode_OfferedCamel4CSIs } from "../MAP-MS-DataTypes/OfferedCamel4CSIs.ta.mjs";
import { SupportedRAT_Types, SupportedRAT_Types_utran /* IMPORTED_LONG_NAMED_BIT */, utran /* IMPORTED_SHORT_NAMED_BIT */, SupportedRAT_Types_geran /* IMPORTED_LONG_NAMED_BIT */, geran /* IMPORTED_SHORT_NAMED_BIT */, SupportedRAT_Types_gan /* IMPORTED_LONG_NAMED_BIT */, gan /* IMPORTED_SHORT_NAMED_BIT */, SupportedRAT_Types_i_hspa_evolution /* IMPORTED_LONG_NAMED_BIT */, i_hspa_evolution /* IMPORTED_SHORT_NAMED_BIT */, SupportedRAT_Types_e_utran /* IMPORTED_LONG_NAMED_BIT */, e_utran /* IMPORTED_SHORT_NAMED_BIT */, SupportedRAT_Types_nb_iot /* IMPORTED_LONG_NAMED_BIT */, nb_iot /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedRAT_Types, _encode_SupportedRAT_Types } from "../MAP-MS-DataTypes/SupportedRAT-Types.ta.mjs";
// export { SupportedRAT_Types, SupportedRAT_Types_utran /* IMPORTED_LONG_NAMED_BIT */, utran /* IMPORTED_SHORT_NAMED_BIT */, SupportedRAT_Types_geran /* IMPORTED_LONG_NAMED_BIT */, geran /* IMPORTED_SHORT_NAMED_BIT */, SupportedRAT_Types_gan /* IMPORTED_LONG_NAMED_BIT */, gan /* IMPORTED_SHORT_NAMED_BIT */, SupportedRAT_Types_i_hspa_evolution /* IMPORTED_LONG_NAMED_BIT */, i_hspa_evolution /* IMPORTED_SHORT_NAMED_BIT */, SupportedRAT_Types_e_utran /* IMPORTED_LONG_NAMED_BIT */, e_utran /* IMPORTED_SHORT_NAMED_BIT */, SupportedRAT_Types_nb_iot /* IMPORTED_LONG_NAMED_BIT */, nb_iot /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedRAT_Types, _encode_SupportedRAT_Types } from "../MAP-MS-DataTypes/SupportedRAT-Types.ta.mjs";


/**
 * @summary VLR_Capability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VLR-Capability ::= SEQUENCE{
 *     supportedCamelPhases     [0] SupportedCamelPhases    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ... ,
 *     solsaSupportIndicator    [2] NULL    OPTIONAL,
 *     istSupportIndicator    [1] IST-SupportIndicator    OPTIONAL,
 *     superChargerSupportedInServingNetworkEntity    [3] SuperChargerInfo    OPTIONAL,
 *     longFTN-Supported    [4]    NULL    OPTIONAL,
 *     supportedLCS-CapabilitySets    [5]    SupportedLCS-CapabilitySets    OPTIONAL,
 *     offeredCamel4CSIs    [6] OfferedCamel4CSIs    OPTIONAL,
 *     supportedRAT-TypesIndicator    [7]    SupportedRAT-Types    OPTIONAL,
 *     longGroupID-Supported    [8]    NULL    OPTIONAL,
 *     mtRoamingForwardingSupported    [9]    NULL    OPTIONAL,
 *     msisdn-lessOperation-Supported    [10]    NULL    OPTIONAL,
 *     reset-ids-Supported    [11]    NULL    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class VLR_Capability {
    constructor (
        /**
         * @summary `supportedCamelPhases`.
         * @public
         * @readonly
         */
        readonly supportedCamelPhases: OPTIONAL<SupportedCamelPhases>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `solsaSupportIndicator`.
         * @public
         * @readonly
         */
        readonly solsaSupportIndicator: OPTIONAL<NULL>,
        /**
         * @summary `istSupportIndicator`.
         * @public
         * @readonly
         */
        readonly istSupportIndicator: OPTIONAL<IST_SupportIndicator>,
        /**
         * @summary `superChargerSupportedInServingNetworkEntity`.
         * @public
         * @readonly
         */
        readonly superChargerSupportedInServingNetworkEntity: OPTIONAL<SuperChargerInfo>,
        /**
         * @summary `longFTN_Supported`.
         * @public
         * @readonly
         */
        readonly longFTN_Supported: OPTIONAL<NULL>,
        /**
         * @summary `supportedLCS_CapabilitySets`.
         * @public
         * @readonly
         */
        readonly supportedLCS_CapabilitySets: OPTIONAL<SupportedLCS_CapabilitySets>,
        /**
         * @summary `offeredCamel4CSIs`.
         * @public
         * @readonly
         */
        readonly offeredCamel4CSIs: OPTIONAL<OfferedCamel4CSIs>,
        /**
         * @summary `supportedRAT_TypesIndicator`.
         * @public
         * @readonly
         */
        readonly supportedRAT_TypesIndicator: OPTIONAL<SupportedRAT_Types>,
        /**
         * @summary `longGroupID_Supported`.
         * @public
         * @readonly
         */
        readonly longGroupID_Supported: OPTIONAL<NULL>,
        /**
         * @summary `mtRoamingForwardingSupported`.
         * @public
         * @readonly
         */
        readonly mtRoamingForwardingSupported: OPTIONAL<NULL>,
        /**
         * @summary `msisdn_lessOperation_Supported`.
         * @public
         * @readonly
         */
        readonly msisdn_lessOperation_Supported: OPTIONAL<NULL>,
        /**
         * @summary `reset_ids_Supported`.
         * @public
         * @readonly
         */
        readonly reset_ids_Supported: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a VLR_Capability
     * @description
     * 
     * This takes an `object` and converts it to a `VLR_Capability`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VLR_Capability`.
     * @returns {VLR_Capability}
     */
    public static _from_object (_o: { [_K in keyof (VLR_Capability)]: (VLR_Capability)[_K] }): VLR_Capability {
        return new VLR_Capability(_o.supportedCamelPhases, _o.extensionContainer, _o.solsaSupportIndicator, _o.istSupportIndicator, _o.superChargerSupportedInServingNetworkEntity, _o.longFTN_Supported, _o.supportedLCS_CapabilitySets, _o.offeredCamel4CSIs, _o.supportedRAT_TypesIndicator, _o.longGroupID_Supported, _o.mtRoamingForwardingSupported, _o.msisdn_lessOperation_Supported, _o.reset_ids_Supported, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `istSupportIndicator`
         * @public
         * @static
         */

    public static _enum_for_istSupportIndicator = _enum_for_IST_SupportIndicator;
}

/**
 * @summary The Leading Root Component Types of VLR_Capability
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_VLR_Capability: $.ComponentSpec[] = [
    new $.ComponentSpec("supportedCamelPhases", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of VLR_Capability
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_VLR_Capability: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of VLR_Capability
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_VLR_Capability: $.ComponentSpec[] = [
    new $.ComponentSpec("solsaSupportIndicator", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("istSupportIndicator", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("superChargerSupportedInServingNetworkEntity", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("longFTN-Supported", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("supportedLCS-CapabilitySets", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("offeredCamel4CSIs", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("supportedRAT-TypesIndicator", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("longGroupID-Supported", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("mtRoamingForwardingSupported", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("msisdn-lessOperation-Supported", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("reset-ids-Supported", true, $.hasTag(_TagClass.context, 11), undefined, undefined)
];

let _cached_decoder_for_VLR_Capability: $.ASN1Decoder<VLR_Capability> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VLR_Capability
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VLR_Capability (el: _Element): VLR_Capability {
    if (!_cached_decoder_for_VLR_Capability) { _cached_decoder_for_VLR_Capability = function (el: _Element): VLR_Capability {
    let supportedCamelPhases: OPTIONAL<SupportedCamelPhases>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let solsaSupportIndicator: OPTIONAL<NULL>;
    let istSupportIndicator: OPTIONAL<IST_SupportIndicator>;
    let superChargerSupportedInServingNetworkEntity: OPTIONAL<SuperChargerInfo>;
    let longFTN_Supported: OPTIONAL<NULL>;
    let supportedLCS_CapabilitySets: OPTIONAL<SupportedLCS_CapabilitySets>;
    let offeredCamel4CSIs: OPTIONAL<OfferedCamel4CSIs>;
    let supportedRAT_TypesIndicator: OPTIONAL<SupportedRAT_Types>;
    let longGroupID_Supported: OPTIONAL<NULL>;
    let mtRoamingForwardingSupported: OPTIONAL<NULL>;
    let msisdn_lessOperation_Supported: OPTIONAL<NULL>;
    let reset_ids_Supported: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "supportedCamelPhases": (_el: _Element): void => { supportedCamelPhases = $._decode_implicit<SupportedCamelPhases>(() => _decode_SupportedCamelPhases)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "solsaSupportIndicator": (_el: _Element): void => { solsaSupportIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "istSupportIndicator": (_el: _Element): void => { istSupportIndicator = $._decode_implicit<IST_SupportIndicator>(() => _decode_IST_SupportIndicator)(_el); },
        "superChargerSupportedInServingNetworkEntity": (_el: _Element): void => { superChargerSupportedInServingNetworkEntity = $._decode_explicit<SuperChargerInfo>(() => _decode_SuperChargerInfo)(_el); },
        "longFTN-Supported": (_el: _Element): void => { longFTN_Supported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "supportedLCS-CapabilitySets": (_el: _Element): void => { supportedLCS_CapabilitySets = $._decode_implicit<SupportedLCS_CapabilitySets>(() => _decode_SupportedLCS_CapabilitySets)(_el); },
        "offeredCamel4CSIs": (_el: _Element): void => { offeredCamel4CSIs = $._decode_implicit<OfferedCamel4CSIs>(() => _decode_OfferedCamel4CSIs)(_el); },
        "supportedRAT-TypesIndicator": (_el: _Element): void => { supportedRAT_TypesIndicator = $._decode_implicit<SupportedRAT_Types>(() => _decode_SupportedRAT_Types)(_el); },
        "longGroupID-Supported": (_el: _Element): void => { longGroupID_Supported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "mtRoamingForwardingSupported": (_el: _Element): void => { mtRoamingForwardingSupported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "msisdn-lessOperation-Supported": (_el: _Element): void => { msisdn_lessOperation_Supported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "reset-ids-Supported": (_el: _Element): void => { reset_ids_Supported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_VLR_Capability,
        _extension_additions_list_spec_for_VLR_Capability,
        _root_component_type_list_2_spec_for_VLR_Capability,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new VLR_Capability(
        supportedCamelPhases,
        extensionContainer,
        solsaSupportIndicator,
        istSupportIndicator,
        superChargerSupportedInServingNetworkEntity,
        longFTN_Supported,
        supportedLCS_CapabilitySets,
        offeredCamel4CSIs,
        supportedRAT_TypesIndicator,
        longGroupID_Supported,
        mtRoamingForwardingSupported,
        msisdn_lessOperation_Supported,
        reset_ids_Supported,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_VLR_Capability(el);
}

let _cached_encoder_for_VLR_Capability: $.ASN1Encoder<VLR_Capability> | null = null;

/**
 * @summary Encodes a(n) VLR_Capability into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VLR_Capability, encoded as an ASN.1 Element.
 */
export
function _encode_VLR_Capability (value: VLR_Capability, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VLR_Capability) { _cached_encoder_for_VLR_Capability = function (value: VLR_Capability, elGetter: $.ASN1Encoder<VLR_Capability>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.supportedCamelPhases === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_SupportedCamelPhases, $.BER)(value.supportedCamelPhases, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.solsaSupportIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.solsaSupportIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.istSupportIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_IST_SupportIndicator, $.BER)(value.istSupportIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.superChargerSupportedInServingNetworkEntity === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_SuperChargerInfo, $.BER)(value.superChargerSupportedInServingNetworkEntity, $.BER)),
            /* IF_ABSENT  */ ((value.longFTN_Supported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER)(value.longFTN_Supported, $.BER)),
            /* IF_ABSENT  */ ((value.supportedLCS_CapabilitySets === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_SupportedLCS_CapabilitySets, $.BER)(value.supportedLCS_CapabilitySets, $.BER)),
            /* IF_ABSENT  */ ((value.offeredCamel4CSIs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_OfferedCamel4CSIs, $.BER)(value.offeredCamel4CSIs, $.BER)),
            /* IF_ABSENT  */ ((value.supportedRAT_TypesIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_SupportedRAT_Types, $.BER)(value.supportedRAT_TypesIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.longGroupID_Supported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER)(value.longGroupID_Supported, $.BER)),
            /* IF_ABSENT  */ ((value.mtRoamingForwardingSupported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeNull, $.BER)(value.mtRoamingForwardingSupported, $.BER)),
            /* IF_ABSENT  */ ((value.msisdn_lessOperation_Supported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeNull, $.BER)(value.msisdn_lessOperation_Supported, $.BER)),
            /* IF_ABSENT  */ ((value.reset_ids_Supported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeNull, $.BER)(value.reset_ids_Supported, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_VLR_Capability(value, elGetter);
}


/* eslint-enable */
