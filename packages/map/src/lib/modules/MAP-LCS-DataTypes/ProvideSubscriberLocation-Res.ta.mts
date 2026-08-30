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
import { Ext_GeographicalInformation, _decode_Ext_GeographicalInformation, _encode_Ext_GeographicalInformation } from "../MAP-LCS-DataTypes/Ext-GeographicalInformation.ta.mjs";
// export { Ext_GeographicalInformation, _decode_Ext_GeographicalInformation, _encode_Ext_GeographicalInformation } from "../MAP-LCS-DataTypes/Ext-GeographicalInformation.ta.mjs";
import { AgeOfLocationInformation, _decode_AgeOfLocationInformation, _encode_AgeOfLocationInformation } from "../MAP-CommonDataTypes/AgeOfLocationInformation.ta.mjs";
// export { AgeOfLocationInformation, _decode_AgeOfLocationInformation, _encode_AgeOfLocationInformation } from "../MAP-CommonDataTypes/AgeOfLocationInformation.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { Add_GeographicalInformation, _decode_Add_GeographicalInformation, _encode_Add_GeographicalInformation } from "../MAP-LCS-DataTypes/Add-GeographicalInformation.ta.mjs";
// export { Add_GeographicalInformation, _decode_Add_GeographicalInformation, _encode_Add_GeographicalInformation } from "../MAP-LCS-DataTypes/Add-GeographicalInformation.ta.mjs";
import { PositioningDataInformation, _decode_PositioningDataInformation, _encode_PositioningDataInformation } from "../MAP-LCS-DataTypes/PositioningDataInformation.ta.mjs";
// export { PositioningDataInformation, _decode_PositioningDataInformation, _encode_PositioningDataInformation } from "../MAP-LCS-DataTypes/PositioningDataInformation.ta.mjs";
import { UtranPositioningDataInfo, _decode_UtranPositioningDataInfo, _encode_UtranPositioningDataInfo } from "../MAP-LCS-DataTypes/UtranPositioningDataInfo.ta.mjs";
// export { UtranPositioningDataInfo, _decode_UtranPositioningDataInfo, _encode_UtranPositioningDataInfo } from "../MAP-LCS-DataTypes/UtranPositioningDataInfo.ta.mjs";
import { CellGlobalIdOrServiceAreaIdOrLAI, _decode_CellGlobalIdOrServiceAreaIdOrLAI, _encode_CellGlobalIdOrServiceAreaIdOrLAI } from "../MAP-CommonDataTypes/CellGlobalIdOrServiceAreaIdOrLAI.ta.mjs";
// export { CellGlobalIdOrServiceAreaIdOrLAI, _decode_CellGlobalIdOrServiceAreaIdOrLAI, _encode_CellGlobalIdOrServiceAreaIdOrLAI } from "../MAP-CommonDataTypes/CellGlobalIdOrServiceAreaIdOrLAI.ta.mjs";
import { AccuracyFulfilmentIndicator, _enum_for_AccuracyFulfilmentIndicator, AccuracyFulfilmentIndicator_requestedAccuracyFulfilled /* IMPORTED_LONG_ENUMERATION_ITEM */, requestedAccuracyFulfilled /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccuracyFulfilmentIndicator_requestedAccuracyNotFulfilled /* IMPORTED_LONG_ENUMERATION_ITEM */, requestedAccuracyNotFulfilled /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccuracyFulfilmentIndicator, _encode_AccuracyFulfilmentIndicator } from "../MAP-LCS-DataTypes/AccuracyFulfilmentIndicator.ta.mjs";
// export { AccuracyFulfilmentIndicator, _enum_for_AccuracyFulfilmentIndicator, AccuracyFulfilmentIndicator_requestedAccuracyFulfilled /* IMPORTED_LONG_ENUMERATION_ITEM */, requestedAccuracyFulfilled /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccuracyFulfilmentIndicator_requestedAccuracyNotFulfilled /* IMPORTED_LONG_ENUMERATION_ITEM */, requestedAccuracyNotFulfilled /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccuracyFulfilmentIndicator, _encode_AccuracyFulfilmentIndicator } from "../MAP-LCS-DataTypes/AccuracyFulfilmentIndicator.ta.mjs";
import { VelocityEstimate, _decode_VelocityEstimate, _encode_VelocityEstimate } from "../MAP-LCS-DataTypes/VelocityEstimate.ta.mjs";
// export { VelocityEstimate, _decode_VelocityEstimate, _encode_VelocityEstimate } from "../MAP-LCS-DataTypes/VelocityEstimate.ta.mjs";
import { GeranGANSSpositioningData, _decode_GeranGANSSpositioningData, _encode_GeranGANSSpositioningData } from "../MAP-LCS-DataTypes/GeranGANSSpositioningData.ta.mjs";
// export { GeranGANSSpositioningData, _decode_GeranGANSSpositioningData, _encode_GeranGANSSpositioningData } from "../MAP-LCS-DataTypes/GeranGANSSpositioningData.ta.mjs";
import { UtranGANSSpositioningData, _decode_UtranGANSSpositioningData, _encode_UtranGANSSpositioningData } from "../MAP-LCS-DataTypes/UtranGANSSpositioningData.ta.mjs";
// export { UtranGANSSpositioningData, _decode_UtranGANSSpositioningData, _encode_UtranGANSSpositioningData } from "../MAP-LCS-DataTypes/UtranGANSSpositioningData.ta.mjs";
import { ServingNodeAddress, _decode_ServingNodeAddress, _encode_ServingNodeAddress } from "../MAP-LCS-DataTypes/ServingNodeAddress.ta.mjs";
// export { ServingNodeAddress, _decode_ServingNodeAddress, _encode_ServingNodeAddress } from "../MAP-LCS-DataTypes/ServingNodeAddress.ta.mjs";
import { UtranAdditionalPositioningData, _decode_UtranAdditionalPositioningData, _encode_UtranAdditionalPositioningData } from "../MAP-LCS-DataTypes/UtranAdditionalPositioningData.ta.mjs";
// export { UtranAdditionalPositioningData, _decode_UtranAdditionalPositioningData, _encode_UtranAdditionalPositioningData } from "../MAP-LCS-DataTypes/UtranAdditionalPositioningData.ta.mjs";
import { UtranBaroPressureMeas, _decode_UtranBaroPressureMeas, _encode_UtranBaroPressureMeas } from "../MAP-LCS-DataTypes/UtranBaroPressureMeas.ta.mjs";
// export { UtranBaroPressureMeas, _decode_UtranBaroPressureMeas, _encode_UtranBaroPressureMeas } from "../MAP-LCS-DataTypes/UtranBaroPressureMeas.ta.mjs";
import { UtranCivicAddress, _decode_UtranCivicAddress, _encode_UtranCivicAddress } from "../MAP-LCS-DataTypes/UtranCivicAddress.ta.mjs";
// export { UtranCivicAddress, _decode_UtranCivicAddress, _encode_UtranCivicAddress } from "../MAP-LCS-DataTypes/UtranCivicAddress.ta.mjs";


/**
 * @summary ProvideSubscriberLocation_Res
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProvideSubscriberLocation-Res ::= SEQUENCE {
 *     locationEstimate    Ext-GeographicalInformation,
 *     ageOfLocationEstimate    [0] AgeOfLocationInformation    OPTIONAL,
 *     extensionContainer    [1] ExtensionContainer    OPTIONAL,
 *     ... ,
 *     add-LocationEstimate    [2] Add-GeographicalInformation    OPTIONAL,
 *     deferredmt-lrResponseIndicator    [3] NULL    OPTIONAL,
 *     geranPositioningData    [4] PositioningDataInformation    OPTIONAL,
 *     utranPositioningData    [5] UtranPositioningDataInfo    OPTIONAL,
 *     cellIdOrSai    [6] CellGlobalIdOrServiceAreaIdOrLAI    OPTIONAL,
 *     sai-Present    [7] NULL    OPTIONAL,
 *     accuracyFulfilmentIndicator    [8] AccuracyFulfilmentIndicator    OPTIONAL,
 *     velocityEstimate    [9] VelocityEstimate    OPTIONAL,
 *     mo-lrShortCircuitIndicator    [10] NULL    OPTIONAL,
 *     geranGANSSpositioningData    [11] GeranGANSSpositioningData    OPTIONAL,
 *     utranGANSSpositioningData    [12] UtranGANSSpositioningData    OPTIONAL,    targetServingNodeForHandover    [13] ServingNodeAddress    OPTIONAL,
 *     utranAdditionalPositioningData    [14] UtranAdditionalPositioningData    OPTIONAL,
 *     utranBaroPressureMeas    [15] UtranBaroPressureMeas    OPTIONAL,
 *     utranCivicAddress    [16] UtranCivicAddress    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ProvideSubscriberLocation_Res {
    constructor (
        /**
         * @summary `locationEstimate`.
         * @public
         * @readonly
         */
        readonly locationEstimate: Ext_GeographicalInformation,
        /**
         * @summary `ageOfLocationEstimate`.
         * @public
         * @readonly
         */
        readonly ageOfLocationEstimate: OPTIONAL<AgeOfLocationInformation>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `add_LocationEstimate`.
         * @public
         * @readonly
         */
        readonly add_LocationEstimate: OPTIONAL<Add_GeographicalInformation>,
        /**
         * @summary `deferredmt_lrResponseIndicator`.
         * @public
         * @readonly
         */
        readonly deferredmt_lrResponseIndicator: OPTIONAL<NULL>,
        /**
         * @summary `geranPositioningData`.
         * @public
         * @readonly
         */
        readonly geranPositioningData: OPTIONAL<PositioningDataInformation>,
        /**
         * @summary `utranPositioningData`.
         * @public
         * @readonly
         */
        readonly utranPositioningData: OPTIONAL<UtranPositioningDataInfo>,
        /**
         * @summary `cellIdOrSai`.
         * @public
         * @readonly
         */
        readonly cellIdOrSai: OPTIONAL<CellGlobalIdOrServiceAreaIdOrLAI>,
        /**
         * @summary `sai_Present`.
         * @public
         * @readonly
         */
        readonly sai_Present: OPTIONAL<NULL>,
        /**
         * @summary `accuracyFulfilmentIndicator`.
         * @public
         * @readonly
         */
        readonly accuracyFulfilmentIndicator: OPTIONAL<AccuracyFulfilmentIndicator>,
        /**
         * @summary `velocityEstimate`.
         * @public
         * @readonly
         */
        readonly velocityEstimate: OPTIONAL<VelocityEstimate>,
        /**
         * @summary `mo_lrShortCircuitIndicator`.
         * @public
         * @readonly
         */
        readonly mo_lrShortCircuitIndicator: OPTIONAL<NULL>,
        /**
         * @summary `geranGANSSpositioningData`.
         * @public
         * @readonly
         */
        readonly geranGANSSpositioningData: OPTIONAL<GeranGANSSpositioningData>,
        /**
         * @summary `utranGANSSpositioningData`.
         * @public
         * @readonly
         */
        readonly utranGANSSpositioningData: OPTIONAL<UtranGANSSpositioningData>,
        /**
         * @summary `targetServingNodeForHandover`.
         * @public
         * @readonly
         */
        readonly targetServingNodeForHandover: OPTIONAL<ServingNodeAddress>,
        /**
         * @summary `utranAdditionalPositioningData`.
         * @public
         * @readonly
         */
        readonly utranAdditionalPositioningData: OPTIONAL<UtranAdditionalPositioningData>,
        /**
         * @summary `utranBaroPressureMeas`.
         * @public
         * @readonly
         */
        readonly utranBaroPressureMeas: OPTIONAL<UtranBaroPressureMeas>,
        /**
         * @summary `utranCivicAddress`.
         * @public
         * @readonly
         */
        readonly utranCivicAddress: OPTIONAL<UtranCivicAddress>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ProvideSubscriberLocation_Res
     * @description
     * 
     * This takes an `object` and converts it to a `ProvideSubscriberLocation_Res`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProvideSubscriberLocation_Res`.
     * @returns {ProvideSubscriberLocation_Res}
     */
    public static _from_object (_o: { [_K in keyof (ProvideSubscriberLocation_Res)]: (ProvideSubscriberLocation_Res)[_K] }): ProvideSubscriberLocation_Res {
        return new ProvideSubscriberLocation_Res(_o.locationEstimate, _o.ageOfLocationEstimate, _o.extensionContainer, _o.add_LocationEstimate, _o.deferredmt_lrResponseIndicator, _o.geranPositioningData, _o.utranPositioningData, _o.cellIdOrSai, _o.sai_Present, _o.accuracyFulfilmentIndicator, _o.velocityEstimate, _o.mo_lrShortCircuitIndicator, _o.geranGANSSpositioningData, _o.utranGANSSpositioningData, _o.targetServingNodeForHandover, _o.utranAdditionalPositioningData, _o.utranBaroPressureMeas, _o.utranCivicAddress, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `accuracyFulfilmentIndicator`
         * @public
         * @static
         */

    public static _enum_for_accuracyFulfilmentIndicator = _enum_for_AccuracyFulfilmentIndicator;
}

/**
 * @summary The Leading Root Component Types of ProvideSubscriberLocation_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProvideSubscriberLocation_Res: $.ComponentSpec[] = [
    new $.ComponentSpec("locationEstimate", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("ageOfLocationEstimate", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ProvideSubscriberLocation_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProvideSubscriberLocation_Res: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProvideSubscriberLocation_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProvideSubscriberLocation_Res: $.ComponentSpec[] = [
    new $.ComponentSpec("add-LocationEstimate", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("deferredmt-lrResponseIndicator", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("geranPositioningData", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("utranPositioningData", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("cellIdOrSai", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("sai-Present", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("accuracyFulfilmentIndicator", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("velocityEstimate", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("mo-lrShortCircuitIndicator", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("geranGANSSpositioningData", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("utranGANSSpositioningData", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("targetServingNodeForHandover", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("utranAdditionalPositioningData", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("utranBaroPressureMeas", true, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("utranCivicAddress", true, $.hasTag(_TagClass.context, 16), undefined, undefined)
];

let _cached_decoder_for_ProvideSubscriberLocation_Res: $.ASN1Decoder<ProvideSubscriberLocation_Res> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProvideSubscriberLocation_Res
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProvideSubscriberLocation_Res (el: _Element): ProvideSubscriberLocation_Res {
    if (!_cached_decoder_for_ProvideSubscriberLocation_Res) { _cached_decoder_for_ProvideSubscriberLocation_Res = function (el: _Element): ProvideSubscriberLocation_Res {
    let locationEstimate!: Ext_GeographicalInformation;
    let ageOfLocationEstimate: OPTIONAL<AgeOfLocationInformation>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let add_LocationEstimate: OPTIONAL<Add_GeographicalInformation>;
    let deferredmt_lrResponseIndicator: OPTIONAL<NULL>;
    let geranPositioningData: OPTIONAL<PositioningDataInformation>;
    let utranPositioningData: OPTIONAL<UtranPositioningDataInfo>;
    let cellIdOrSai: OPTIONAL<CellGlobalIdOrServiceAreaIdOrLAI>;
    let sai_Present: OPTIONAL<NULL>;
    let accuracyFulfilmentIndicator: OPTIONAL<AccuracyFulfilmentIndicator>;
    let velocityEstimate: OPTIONAL<VelocityEstimate>;
    let mo_lrShortCircuitIndicator: OPTIONAL<NULL>;
    let geranGANSSpositioningData: OPTIONAL<GeranGANSSpositioningData>;
    let utranGANSSpositioningData: OPTIONAL<UtranGANSSpositioningData>;
    let targetServingNodeForHandover: OPTIONAL<ServingNodeAddress>;
    let utranAdditionalPositioningData: OPTIONAL<UtranAdditionalPositioningData>;
    let utranBaroPressureMeas: OPTIONAL<UtranBaroPressureMeas>;
    let utranCivicAddress: OPTIONAL<UtranCivicAddress>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "locationEstimate": (_el: _Element): void => { locationEstimate = _decode_Ext_GeographicalInformation(_el); },
        "ageOfLocationEstimate": (_el: _Element): void => { ageOfLocationEstimate = $._decode_implicit<AgeOfLocationInformation>(() => _decode_AgeOfLocationInformation)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "add-LocationEstimate": (_el: _Element): void => { add_LocationEstimate = $._decode_implicit<Add_GeographicalInformation>(() => _decode_Add_GeographicalInformation)(_el); },
        "deferredmt-lrResponseIndicator": (_el: _Element): void => { deferredmt_lrResponseIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "geranPositioningData": (_el: _Element): void => { geranPositioningData = $._decode_implicit<PositioningDataInformation>(() => _decode_PositioningDataInformation)(_el); },
        "utranPositioningData": (_el: _Element): void => { utranPositioningData = $._decode_implicit<UtranPositioningDataInfo>(() => _decode_UtranPositioningDataInfo)(_el); },
        "cellIdOrSai": (_el: _Element): void => { cellIdOrSai = $._decode_explicit<CellGlobalIdOrServiceAreaIdOrLAI>(() => _decode_CellGlobalIdOrServiceAreaIdOrLAI)(_el); },
        "sai-Present": (_el: _Element): void => { sai_Present = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "accuracyFulfilmentIndicator": (_el: _Element): void => { accuracyFulfilmentIndicator = $._decode_implicit<AccuracyFulfilmentIndicator>(() => _decode_AccuracyFulfilmentIndicator)(_el); },
        "velocityEstimate": (_el: _Element): void => { velocityEstimate = $._decode_implicit<VelocityEstimate>(() => _decode_VelocityEstimate)(_el); },
        "mo-lrShortCircuitIndicator": (_el: _Element): void => { mo_lrShortCircuitIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "geranGANSSpositioningData": (_el: _Element): void => { geranGANSSpositioningData = $._decode_implicit<GeranGANSSpositioningData>(() => _decode_GeranGANSSpositioningData)(_el); },
        "utranGANSSpositioningData": (_el: _Element): void => { utranGANSSpositioningData = $._decode_implicit<UtranGANSSpositioningData>(() => _decode_UtranGANSSpositioningData)(_el); },
        "targetServingNodeForHandover": (_el: _Element): void => { targetServingNodeForHandover = $._decode_explicit<ServingNodeAddress>(() => _decode_ServingNodeAddress)(_el); },
        "utranAdditionalPositioningData": (_el: _Element): void => { utranAdditionalPositioningData = $._decode_implicit<UtranAdditionalPositioningData>(() => _decode_UtranAdditionalPositioningData)(_el); },
        "utranBaroPressureMeas": (_el: _Element): void => { utranBaroPressureMeas = $._decode_implicit<UtranBaroPressureMeas>(() => _decode_UtranBaroPressureMeas)(_el); },
        "utranCivicAddress": (_el: _Element): void => { utranCivicAddress = $._decode_implicit<UtranCivicAddress>(() => _decode_UtranCivicAddress)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProvideSubscriberLocation_Res,
        _extension_additions_list_spec_for_ProvideSubscriberLocation_Res,
        _root_component_type_list_2_spec_for_ProvideSubscriberLocation_Res,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ProvideSubscriberLocation_Res(
        locationEstimate,
        ageOfLocationEstimate,
        extensionContainer,
        add_LocationEstimate,
        deferredmt_lrResponseIndicator,
        geranPositioningData,
        utranPositioningData,
        cellIdOrSai,
        sai_Present,
        accuracyFulfilmentIndicator,
        velocityEstimate,
        mo_lrShortCircuitIndicator,
        geranGANSSpositioningData,
        utranGANSSpositioningData,
        targetServingNodeForHandover,
        utranAdditionalPositioningData,
        utranBaroPressureMeas,
        utranCivicAddress,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ProvideSubscriberLocation_Res(el);
}

let _cached_encoder_for_ProvideSubscriberLocation_Res: $.ASN1Encoder<ProvideSubscriberLocation_Res> | null = null;

/**
 * @summary Encodes a(n) ProvideSubscriberLocation_Res into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProvideSubscriberLocation_Res, encoded as an ASN.1 Element.
 */
export
function _encode_ProvideSubscriberLocation_Res (value: ProvideSubscriberLocation_Res, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProvideSubscriberLocation_Res) { _cached_encoder_for_ProvideSubscriberLocation_Res = function (value: ProvideSubscriberLocation_Res, elGetter: $.ASN1Encoder<ProvideSubscriberLocation_Res>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Ext_GeographicalInformation(value.locationEstimate, $.BER),
            /* IF_ABSENT  */ ((value.ageOfLocationEstimate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AgeOfLocationInformation, $.BER)(value.ageOfLocationEstimate, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.add_LocationEstimate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Add_GeographicalInformation, $.BER)(value.add_LocationEstimate, $.BER)),
            /* IF_ABSENT  */ ((value.deferredmt_lrResponseIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.deferredmt_lrResponseIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.geranPositioningData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_PositioningDataInformation, $.BER)(value.geranPositioningData, $.BER)),
            /* IF_ABSENT  */ ((value.utranPositioningData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_UtranPositioningDataInfo, $.BER)(value.utranPositioningData, $.BER)),
            /* IF_ABSENT  */ ((value.cellIdOrSai === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_CellGlobalIdOrServiceAreaIdOrLAI, $.BER)(value.cellIdOrSai, $.BER)),
            /* IF_ABSENT  */ ((value.sai_Present === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER)(value.sai_Present, $.BER)),
            /* IF_ABSENT  */ ((value.accuracyFulfilmentIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_AccuracyFulfilmentIndicator, $.BER)(value.accuracyFulfilmentIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.velocityEstimate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_VelocityEstimate, $.BER)(value.velocityEstimate, $.BER)),
            /* IF_ABSENT  */ ((value.mo_lrShortCircuitIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeNull, $.BER)(value.mo_lrShortCircuitIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.geranGANSSpositioningData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_GeranGANSSpositioningData, $.BER)(value.geranGANSSpositioningData, $.BER)),
            /* IF_ABSENT  */ ((value.utranGANSSpositioningData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_UtranGANSSpositioningData, $.BER)(value.utranGANSSpositioningData, $.BER)),
            /* IF_ABSENT  */ ((value.targetServingNodeForHandover === undefined) ? undefined : $._encode_explicit(_TagClass.context, 13, () => _encode_ServingNodeAddress, $.BER)(value.targetServingNodeForHandover, $.BER)),
            /* IF_ABSENT  */ ((value.utranAdditionalPositioningData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_UtranAdditionalPositioningData, $.BER)(value.utranAdditionalPositioningData, $.BER)),
            /* IF_ABSENT  */ ((value.utranBaroPressureMeas === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_UtranBaroPressureMeas, $.BER)(value.utranBaroPressureMeas, $.BER)),
            /* IF_ABSENT  */ ((value.utranCivicAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_UtranCivicAddress, $.BER)(value.utranCivicAddress, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ProvideSubscriberLocation_Res(value, elGetter);
}


/* eslint-enable */
