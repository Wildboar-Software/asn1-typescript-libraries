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
import { LCS_Event, _enum_for_LCS_Event, LCS_Event_emergencyCallOrigination /* IMPORTED_LONG_ENUMERATION_ITEM */, emergencyCallOrigination /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCS_Event_emergencyCallRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, emergencyCallRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCS_Event_mo_lr /* IMPORTED_LONG_ENUMERATION_ITEM */, mo_lr /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCS_Event_deferredmt_lrResponse /* IMPORTED_LONG_ENUMERATION_ITEM */, deferredmt_lrResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCS_Event_deferredmo_lrTTTPInitiation /* IMPORTED_LONG_ENUMERATION_ITEM */, deferredmo_lrTTTPInitiation /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCS_Event_emergencyCallHandover /* IMPORTED_LONG_ENUMERATION_ITEM */, emergencyCallHandover /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LCS_Event, _encode_LCS_Event } from "../MAP-LCS-DataTypes/LCS-Event.ta.mjs";
import { LCS_ClientID, _decode_LCS_ClientID, _encode_LCS_ClientID } from "../MAP-LCS-DataTypes/LCS-ClientID.ta.mjs";
import { LCSLocationInfo, _decode_LCSLocationInfo, _encode_LCSLocationInfo } from "../MAP-LCS-DataTypes/LCSLocationInfo.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { IMEI, _decode_IMEI, _encode_IMEI } from "../MAP-CommonDataTypes/IMEI.ta.mjs";
import { Ext_GeographicalInformation, _decode_Ext_GeographicalInformation, _encode_Ext_GeographicalInformation } from "../MAP-LCS-DataTypes/Ext-GeographicalInformation.ta.mjs";
import { AgeOfLocationInformation, _decode_AgeOfLocationInformation, _encode_AgeOfLocationInformation } from "../MAP-CommonDataTypes/AgeOfLocationInformation.ta.mjs";
import { SLR_ArgExtensionContainer, _decode_SLR_ArgExtensionContainer, _encode_SLR_ArgExtensionContainer } from "../MAP-ExtensionDataTypes/SLR-ArgExtensionContainer.ta.mjs";
import { Add_GeographicalInformation, _decode_Add_GeographicalInformation, _encode_Add_GeographicalInformation } from "../MAP-LCS-DataTypes/Add-GeographicalInformation.ta.mjs";
import { Deferredmt_lrData, _decode_Deferredmt_lrData, _encode_Deferredmt_lrData } from "../MAP-LCS-DataTypes/Deferredmt-lrData.ta.mjs";
import { LCS_ReferenceNumber, _decode_LCS_ReferenceNumber, _encode_LCS_ReferenceNumber } from "../MAP-LCS-DataTypes/LCS-ReferenceNumber.ta.mjs";
import { PositioningDataInformation, _decode_PositioningDataInformation, _encode_PositioningDataInformation } from "../MAP-LCS-DataTypes/PositioningDataInformation.ta.mjs";
import { UtranPositioningDataInfo, _decode_UtranPositioningDataInfo, _encode_UtranPositioningDataInfo } from "../MAP-LCS-DataTypes/UtranPositioningDataInfo.ta.mjs";
import { CellGlobalIdOrServiceAreaIdOrLAI, _decode_CellGlobalIdOrServiceAreaIdOrLAI, _encode_CellGlobalIdOrServiceAreaIdOrLAI } from "../MAP-CommonDataTypes/CellGlobalIdOrServiceAreaIdOrLAI.ta.mjs";
import { GSN_Address, _decode_GSN_Address, _encode_GSN_Address } from "../MAP-CommonDataTypes/GSN-Address.ta.mjs";
import { LCSServiceTypeID, _decode_LCSServiceTypeID, _encode_LCSServiceTypeID } from "../MAP-CommonDataTypes/LCSServiceTypeID.ta.mjs";
import { AccuracyFulfilmentIndicator, _enum_for_AccuracyFulfilmentIndicator, AccuracyFulfilmentIndicator_requestedAccuracyFulfilled /* IMPORTED_LONG_ENUMERATION_ITEM */, requestedAccuracyFulfilled /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccuracyFulfilmentIndicator_requestedAccuracyNotFulfilled /* IMPORTED_LONG_ENUMERATION_ITEM */, requestedAccuracyNotFulfilled /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccuracyFulfilmentIndicator, _encode_AccuracyFulfilmentIndicator } from "../MAP-LCS-DataTypes/AccuracyFulfilmentIndicator.ta.mjs";
import { VelocityEstimate, _decode_VelocityEstimate, _encode_VelocityEstimate } from "../MAP-LCS-DataTypes/VelocityEstimate.ta.mjs";
import { SequenceNumber, _decode_SequenceNumber, _encode_SequenceNumber } from "../MAP-LCS-DataTypes/SequenceNumber.ta.mjs";
import { PeriodicLDRInfo, _decode_PeriodicLDRInfo, _encode_PeriodicLDRInfo } from "../MAP-LCS-DataTypes/PeriodicLDRInfo.ta.mjs";
import { GeranGANSSpositioningData, _decode_GeranGANSSpositioningData, _encode_GeranGANSSpositioningData } from "../MAP-LCS-DataTypes/GeranGANSSpositioningData.ta.mjs";
import { UtranGANSSpositioningData, _decode_UtranGANSSpositioningData, _encode_UtranGANSSpositioningData } from "../MAP-LCS-DataTypes/UtranGANSSpositioningData.ta.mjs";
import { ServingNodeAddress, _decode_ServingNodeAddress, _encode_ServingNodeAddress } from "../MAP-LCS-DataTypes/ServingNodeAddress.ta.mjs";
import { UtranAdditionalPositioningData, _decode_UtranAdditionalPositioningData, _encode_UtranAdditionalPositioningData } from "../MAP-LCS-DataTypes/UtranAdditionalPositioningData.ta.mjs";
import { UtranBaroPressureMeas, _decode_UtranBaroPressureMeas, _encode_UtranBaroPressureMeas } from "../MAP-LCS-DataTypes/UtranBaroPressureMeas.ta.mjs";
import { UtranCivicAddress, _decode_UtranCivicAddress, _encode_UtranCivicAddress } from "../MAP-LCS-DataTypes/UtranCivicAddress.ta.mjs";


/**
 * @summary SubscriberLocationReport_Arg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriberLocationReport-Arg ::= SEQUENCE {
 *     lcs-Event    LCS-Event,
 *     lcs-ClientID    LCS-ClientID, 
 *     lcsLocationInfo    LCSLocationInfo,
 *     msisdn    [0] ISDN-AddressString    OPTIONAL,
 *     imsi    [1] IMSI    OPTIONAL,
 *     imei    [2] IMEI    OPTIONAL,
 *     na-ESRD    [3] ISDN-AddressString    OPTIONAL,
 *     na-ESRK    [4] ISDN-AddressString    OPTIONAL,
 *     locationEstimate    [5] Ext-GeographicalInformation    OPTIONAL,
 *     ageOfLocationEstimate    [6] AgeOfLocationInformation    OPTIONAL,
 *     slr-ArgExtensionContainer    [7] SLR-ArgExtensionContainer    OPTIONAL,
 *     ... ,
 *     add-LocationEstimate    [8] Add-GeographicalInformation    OPTIONAL,
 *     deferredmt-lrData    [9] Deferredmt-lrData    OPTIONAL, 
 *     lcs-ReferenceNumber    [10] LCS-ReferenceNumber    OPTIONAL,
 *     geranPositioningData    [11] PositioningDataInformation    OPTIONAL,
 *     utranPositioningData    [12] UtranPositioningDataInfo    OPTIONAL,
 *     cellIdOrSai    [13]    CellGlobalIdOrServiceAreaIdOrLAI    OPTIONAL,
 *     h-gmlc-Address    [14]    GSN-Address    OPTIONAL,
 *     lcsServiceTypeID    [15]    LCSServiceTypeID    OPTIONAL,
 *     sai-Present    [17] NULL    OPTIONAL,
 *     pseudonymIndicator    [18] NULL    OPTIONAL,
 *     accuracyFulfilmentIndicator    [19] AccuracyFulfilmentIndicator    OPTIONAL,
 *     velocityEstimate    [20] VelocityEstimate    OPTIONAL,
 *     sequenceNumber    [21] SequenceNumber    OPTIONAL,
 *     periodicLDRInfo    [22] PeriodicLDRInfo    OPTIONAL,
 *     mo-lrShortCircuitIndicator    [23] NULL    OPTIONAL,
 *     geranGANSSpositioningData    [24] GeranGANSSpositioningData    OPTIONAL,
 *     utranGANSSpositioningData    [25] UtranGANSSpositioningData    OPTIONAL,
 *     targetServingNodeForHandover    [26] ServingNodeAddress    OPTIONAL,
 *     utranAdditionalPositioningData    [27] UtranAdditionalPositioningData    OPTIONAL,
 *     utranBaroPressureMeas    [28] UtranBaroPressureMeas    OPTIONAL,
 *     utranCivicAddress    [29] UtranCivicAddress    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SubscriberLocationReport_Arg {
    constructor (
        /**
         * @summary `lcs_Event`.
         * @public
         * @readonly
         */
        readonly lcs_Event: LCS_Event,
        /**
         * @summary `lcs_ClientID`.
         * @public
         * @readonly
         */
        readonly lcs_ClientID: LCS_ClientID,
        /**
         * @summary `lcsLocationInfo`.
         * @public
         * @readonly
         */
        readonly lcsLocationInfo: LCSLocationInfo,
        /**
         * @summary `msisdn`.
         * @public
         * @readonly
         */
        readonly msisdn: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: OPTIONAL<IMSI>,
        /**
         * @summary `imei`.
         * @public
         * @readonly
         */
        readonly imei: OPTIONAL<IMEI>,
        /**
         * @summary `na_ESRD`.
         * @public
         * @readonly
         */
        readonly na_ESRD: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `na_ESRK`.
         * @public
         * @readonly
         */
        readonly na_ESRK: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `locationEstimate`.
         * @public
         * @readonly
         */
        readonly locationEstimate: OPTIONAL<Ext_GeographicalInformation>,
        /**
         * @summary `ageOfLocationEstimate`.
         * @public
         * @readonly
         */
        readonly ageOfLocationEstimate: OPTIONAL<AgeOfLocationInformation>,
        /**
         * @summary `slr_ArgExtensionContainer`.
         * @public
         * @readonly
         */
        readonly slr_ArgExtensionContainer: OPTIONAL<SLR_ArgExtensionContainer>,
        /**
         * @summary `add_LocationEstimate`.
         * @public
         * @readonly
         */
        readonly add_LocationEstimate: OPTIONAL<Add_GeographicalInformation>,
        /**
         * @summary `deferredmt_lrData`.
         * @public
         * @readonly
         */
        readonly deferredmt_lrData: OPTIONAL<Deferredmt_lrData>,
        /**
         * @summary `lcs_ReferenceNumber`.
         * @public
         * @readonly
         */
        readonly lcs_ReferenceNumber: OPTIONAL<LCS_ReferenceNumber>,
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
         * @summary `h_gmlc_Address`.
         * @public
         * @readonly
         */
        readonly h_gmlc_Address: OPTIONAL<GSN_Address>,
        /**
         * @summary `lcsServiceTypeID`.
         * @public
         * @readonly
         */
        readonly lcsServiceTypeID: OPTIONAL<LCSServiceTypeID>,
        /**
         * @summary `sai_Present`.
         * @public
         * @readonly
         */
        readonly sai_Present: OPTIONAL<NULL>,
        /**
         * @summary `pseudonymIndicator`.
         * @public
         * @readonly
         */
        readonly pseudonymIndicator: OPTIONAL<NULL>,
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
         * @summary `sequenceNumber`.
         * @public
         * @readonly
         */
        readonly sequenceNumber: OPTIONAL<SequenceNumber>,
        /**
         * @summary `periodicLDRInfo`.
         * @public
         * @readonly
         */
        readonly periodicLDRInfo: OPTIONAL<PeriodicLDRInfo>,
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
     * @summary Restructures an object into a SubscriberLocationReport_Arg
     * @description
     * 
     * This takes an `object` and converts it to a `SubscriberLocationReport_Arg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubscriberLocationReport_Arg`.
     * @returns {SubscriberLocationReport_Arg}
     */
    public static _from_object (_o: { [_K in keyof (SubscriberLocationReport_Arg)]: (SubscriberLocationReport_Arg)[_K] }): SubscriberLocationReport_Arg {
        return new SubscriberLocationReport_Arg(_o.lcs_Event, _o.lcs_ClientID, _o.lcsLocationInfo, _o.msisdn, _o.imsi, _o.imei, _o.na_ESRD, _o.na_ESRK, _o.locationEstimate, _o.ageOfLocationEstimate, _o.slr_ArgExtensionContainer, _o.add_LocationEstimate, _o.deferredmt_lrData, _o.lcs_ReferenceNumber, _o.geranPositioningData, _o.utranPositioningData, _o.cellIdOrSai, _o.h_gmlc_Address, _o.lcsServiceTypeID, _o.sai_Present, _o.pseudonymIndicator, _o.accuracyFulfilmentIndicator, _o.velocityEstimate, _o.sequenceNumber, _o.periodicLDRInfo, _o.mo_lrShortCircuitIndicator, _o.geranGANSSpositioningData, _o.utranGANSSpositioningData, _o.targetServingNodeForHandover, _o.utranAdditionalPositioningData, _o.utranBaroPressureMeas, _o.utranCivicAddress, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `lcs_Event`
         * @public
         * @static
         */

    public static _enum_for_lcs_Event = _enum_for_LCS_Event;        /**
         * @summary The enum used as the type of the component `accuracyFulfilmentIndicator`
         * @public
         * @static
         */

    public static _enum_for_accuracyFulfilmentIndicator = _enum_for_AccuracyFulfilmentIndicator;
}

/**
 * @summary The Leading Root Component Types of SubscriberLocationReport_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SubscriberLocationReport_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("lcs-Event", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("lcs-ClientID", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("lcsLocationInfo", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("msisdn", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("imsi", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("imei", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("na-ESRD", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("na-ESRK", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("locationEstimate", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("ageOfLocationEstimate", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("slr-ArgExtensionContainer", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of SubscriberLocationReport_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SubscriberLocationReport_Arg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SubscriberLocationReport_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SubscriberLocationReport_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("add-LocationEstimate", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("deferredmt-lrData", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("lcs-ReferenceNumber", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("geranPositioningData", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("utranPositioningData", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("cellIdOrSai", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("h-gmlc-Address", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("lcsServiceTypeID", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("sai-Present", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("pseudonymIndicator", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("accuracyFulfilmentIndicator", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("velocityEstimate", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("sequenceNumber", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("periodicLDRInfo", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("mo-lrShortCircuitIndicator", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("geranGANSSpositioningData", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("utranGANSSpositioningData", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("targetServingNodeForHandover", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("utranAdditionalPositioningData", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("utranBaroPressureMeas", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("utranCivicAddress", true, $.hasTag(_TagClass.context, 29))
];

let _cached_decoder_for_SubscriberLocationReport_Arg: $.ASN1Decoder<SubscriberLocationReport_Arg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubscriberLocationReport_Arg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubscriberLocationReport_Arg (el: _Element): SubscriberLocationReport_Arg {
    if (!_cached_decoder_for_SubscriberLocationReport_Arg) { _cached_decoder_for_SubscriberLocationReport_Arg = function (el: _Element): SubscriberLocationReport_Arg {
    let lcs_Event!: LCS_Event;
    let lcs_ClientID!: LCS_ClientID;
    let lcsLocationInfo!: LCSLocationInfo;
    let msisdn: OPTIONAL<ISDN_AddressString> = undefined;
    let imsi: OPTIONAL<IMSI> = undefined;
    let imei: OPTIONAL<IMEI> = undefined;
    let na_ESRD: OPTIONAL<ISDN_AddressString> = undefined;
    let na_ESRK: OPTIONAL<ISDN_AddressString> = undefined;
    let locationEstimate: OPTIONAL<Ext_GeographicalInformation> = undefined;
    let ageOfLocationEstimate: OPTIONAL<AgeOfLocationInformation> = undefined;
    let slr_ArgExtensionContainer: OPTIONAL<SLR_ArgExtensionContainer> = undefined;
    let add_LocationEstimate: OPTIONAL<Add_GeographicalInformation> = undefined;
    let deferredmt_lrData: OPTIONAL<Deferredmt_lrData> = undefined;
    let lcs_ReferenceNumber: OPTIONAL<LCS_ReferenceNumber> = undefined;
    let geranPositioningData: OPTIONAL<PositioningDataInformation> = undefined;
    let utranPositioningData: OPTIONAL<UtranPositioningDataInfo> = undefined;
    let cellIdOrSai: OPTIONAL<CellGlobalIdOrServiceAreaIdOrLAI> = undefined;
    let h_gmlc_Address: OPTIONAL<GSN_Address> = undefined;
    let lcsServiceTypeID: OPTIONAL<LCSServiceTypeID> = undefined;
    let sai_Present: OPTIONAL<NULL> = undefined;
    let pseudonymIndicator: OPTIONAL<NULL> = undefined;
    let accuracyFulfilmentIndicator: OPTIONAL<AccuracyFulfilmentIndicator> = undefined;
    let velocityEstimate: OPTIONAL<VelocityEstimate> = undefined;
    let sequenceNumber: OPTIONAL<SequenceNumber> = undefined;
    let periodicLDRInfo: OPTIONAL<PeriodicLDRInfo> = undefined;
    let mo_lrShortCircuitIndicator: OPTIONAL<NULL> = undefined;
    let geranGANSSpositioningData: OPTIONAL<GeranGANSSpositioningData> = undefined;
    let utranGANSSpositioningData: OPTIONAL<UtranGANSSpositioningData> = undefined;
    let targetServingNodeForHandover: OPTIONAL<ServingNodeAddress> = undefined;
    let utranAdditionalPositioningData: OPTIONAL<UtranAdditionalPositioningData> = undefined;
    let utranBaroPressureMeas: OPTIONAL<UtranBaroPressureMeas> = undefined;
    let utranCivicAddress: OPTIONAL<UtranCivicAddress> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "lcs-Event": (_el: _Element): void => { lcs_Event = _decode_LCS_Event(_el); },
        "lcs-ClientID": (_el: _Element): void => { lcs_ClientID = _decode_LCS_ClientID(_el); },
        "lcsLocationInfo": (_el: _Element): void => { lcsLocationInfo = _decode_LCSLocationInfo(_el); },
        "msisdn": (_el: _Element): void => { msisdn = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "imei": (_el: _Element): void => { imei = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); },
        "na-ESRD": (_el: _Element): void => { na_ESRD = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "na-ESRK": (_el: _Element): void => { na_ESRK = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "locationEstimate": (_el: _Element): void => { locationEstimate = $._decode_implicit<Ext_GeographicalInformation>(() => _decode_Ext_GeographicalInformation)(_el); },
        "ageOfLocationEstimate": (_el: _Element): void => { ageOfLocationEstimate = $._decode_implicit<AgeOfLocationInformation>(() => _decode_AgeOfLocationInformation)(_el); },
        "slr-ArgExtensionContainer": (_el: _Element): void => { slr_ArgExtensionContainer = $._decode_implicit<SLR_ArgExtensionContainer>(() => _decode_SLR_ArgExtensionContainer)(_el); },
        "add-LocationEstimate": (_el: _Element): void => { add_LocationEstimate = $._decode_implicit<Add_GeographicalInformation>(() => _decode_Add_GeographicalInformation)(_el); },
        "deferredmt-lrData": (_el: _Element): void => { deferredmt_lrData = $._decode_implicit<Deferredmt_lrData>(() => _decode_Deferredmt_lrData)(_el); },
        "lcs-ReferenceNumber": (_el: _Element): void => { lcs_ReferenceNumber = $._decode_implicit<LCS_ReferenceNumber>(() => _decode_LCS_ReferenceNumber)(_el); },
        "geranPositioningData": (_el: _Element): void => { geranPositioningData = $._decode_implicit<PositioningDataInformation>(() => _decode_PositioningDataInformation)(_el); },
        "utranPositioningData": (_el: _Element): void => { utranPositioningData = $._decode_implicit<UtranPositioningDataInfo>(() => _decode_UtranPositioningDataInfo)(_el); },
        "cellIdOrSai": (_el: _Element): void => { cellIdOrSai = $._decode_explicit<CellGlobalIdOrServiceAreaIdOrLAI>(() => _decode_CellGlobalIdOrServiceAreaIdOrLAI)(_el); },
        "h-gmlc-Address": (_el: _Element): void => { h_gmlc_Address = $._decode_implicit<GSN_Address>(() => _decode_GSN_Address)(_el); },
        "lcsServiceTypeID": (_el: _Element): void => { lcsServiceTypeID = $._decode_implicit<LCSServiceTypeID>(() => _decode_LCSServiceTypeID)(_el); },
        "sai-Present": (_el: _Element): void => { sai_Present = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "pseudonymIndicator": (_el: _Element): void => { pseudonymIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "accuracyFulfilmentIndicator": (_el: _Element): void => { accuracyFulfilmentIndicator = $._decode_implicit<AccuracyFulfilmentIndicator>(() => _decode_AccuracyFulfilmentIndicator)(_el); },
        "velocityEstimate": (_el: _Element): void => { velocityEstimate = $._decode_implicit<VelocityEstimate>(() => _decode_VelocityEstimate)(_el); },
        "sequenceNumber": (_el: _Element): void => { sequenceNumber = $._decode_implicit<SequenceNumber>(() => _decode_SequenceNumber)(_el); },
        "periodicLDRInfo": (_el: _Element): void => { periodicLDRInfo = $._decode_implicit<PeriodicLDRInfo>(() => _decode_PeriodicLDRInfo)(_el); },
        "mo-lrShortCircuitIndicator": (_el: _Element): void => { mo_lrShortCircuitIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "geranGANSSpositioningData": (_el: _Element): void => { geranGANSSpositioningData = $._decode_implicit<GeranGANSSpositioningData>(() => _decode_GeranGANSSpositioningData)(_el); },
        "utranGANSSpositioningData": (_el: _Element): void => { utranGANSSpositioningData = $._decode_implicit<UtranGANSSpositioningData>(() => _decode_UtranGANSSpositioningData)(_el); },
        "targetServingNodeForHandover": (_el: _Element): void => { targetServingNodeForHandover = $._decode_explicit<ServingNodeAddress>(() => _decode_ServingNodeAddress)(_el); },
        "utranAdditionalPositioningData": (_el: _Element): void => { utranAdditionalPositioningData = $._decode_implicit<UtranAdditionalPositioningData>(() => _decode_UtranAdditionalPositioningData)(_el); },
        "utranBaroPressureMeas": (_el: _Element): void => { utranBaroPressureMeas = $._decode_implicit<UtranBaroPressureMeas>(() => _decode_UtranBaroPressureMeas)(_el); },
        "utranCivicAddress": (_el: _Element): void => { utranCivicAddress = $._decode_implicit<UtranCivicAddress>(() => _decode_UtranCivicAddress)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SubscriberLocationReport_Arg,
        _extension_additions_list_spec_for_SubscriberLocationReport_Arg,
        _root_component_type_list_2_spec_for_SubscriberLocationReport_Arg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SubscriberLocationReport_Arg(
        lcs_Event,
        lcs_ClientID,
        lcsLocationInfo,
        msisdn,
        imsi,
        imei,
        na_ESRD,
        na_ESRK,
        locationEstimate,
        ageOfLocationEstimate,
        slr_ArgExtensionContainer,
        add_LocationEstimate,
        deferredmt_lrData,
        lcs_ReferenceNumber,
        geranPositioningData,
        utranPositioningData,
        cellIdOrSai,
        h_gmlc_Address,
        lcsServiceTypeID,
        sai_Present,
        pseudonymIndicator,
        accuracyFulfilmentIndicator,
        velocityEstimate,
        sequenceNumber,
        periodicLDRInfo,
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
    return _cached_decoder_for_SubscriberLocationReport_Arg(el);
}

let _cached_encoder_for_SubscriberLocationReport_Arg: $.ASN1Encoder<SubscriberLocationReport_Arg> | null = null;

/**
 * @summary Encodes a(n) SubscriberLocationReport_Arg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscriberLocationReport_Arg, encoded as an ASN.1 Element.
 */
export
function _encode_SubscriberLocationReport_Arg (value: SubscriberLocationReport_Arg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubscriberLocationReport_Arg) { _cached_encoder_for_SubscriberLocationReport_Arg = function (value: SubscriberLocationReport_Arg, elGetter: $.ASN1Encoder<SubscriberLocationReport_Arg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LCS_Event(value.lcs_Event, $.BER),
            /* REQUIRED   */ _encode_LCS_ClientID(value.lcs_ClientID, $.BER),
            /* REQUIRED   */ _encode_LCSLocationInfo(value.lcsLocationInfo, $.BER),
            /* IF_ABSENT  */ ((value.msisdn === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ISDN_AddressString, $.BER)(value.msisdn, $.BER)),
            /* IF_ABSENT  */ ((value.imsi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.imsi, $.BER)),
            /* IF_ABSENT  */ ((value.imei === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_IMEI, $.BER)(value.imei, $.BER)),
            /* IF_ABSENT  */ ((value.na_ESRD === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ISDN_AddressString, $.BER)(value.na_ESRD, $.BER)),
            /* IF_ABSENT  */ ((value.na_ESRK === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ISDN_AddressString, $.BER)(value.na_ESRK, $.BER)),
            /* IF_ABSENT  */ ((value.locationEstimate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_Ext_GeographicalInformation, $.BER)(value.locationEstimate, $.BER)),
            /* IF_ABSENT  */ ((value.ageOfLocationEstimate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_AgeOfLocationInformation, $.BER)(value.ageOfLocationEstimate, $.BER)),
            /* IF_ABSENT  */ ((value.slr_ArgExtensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_SLR_ArgExtensionContainer, $.BER)(value.slr_ArgExtensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.add_LocationEstimate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_Add_GeographicalInformation, $.BER)(value.add_LocationEstimate, $.BER)),
            /* IF_ABSENT  */ ((value.deferredmt_lrData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_Deferredmt_lrData, $.BER)(value.deferredmt_lrData, $.BER)),
            /* IF_ABSENT  */ ((value.lcs_ReferenceNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_LCS_ReferenceNumber, $.BER)(value.lcs_ReferenceNumber, $.BER)),
            /* IF_ABSENT  */ ((value.geranPositioningData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_PositioningDataInformation, $.BER)(value.geranPositioningData, $.BER)),
            /* IF_ABSENT  */ ((value.utranPositioningData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_UtranPositioningDataInfo, $.BER)(value.utranPositioningData, $.BER)),
            /* IF_ABSENT  */ ((value.cellIdOrSai === undefined) ? undefined : $._encode_explicit(_TagClass.context, 13, () => _encode_CellGlobalIdOrServiceAreaIdOrLAI, $.BER)(value.cellIdOrSai, $.BER)),
            /* IF_ABSENT  */ ((value.h_gmlc_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_GSN_Address, $.BER)(value.h_gmlc_Address, $.BER)),
            /* IF_ABSENT  */ ((value.lcsServiceTypeID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_LCSServiceTypeID, $.BER)(value.lcsServiceTypeID, $.BER)),
            /* IF_ABSENT  */ ((value.sai_Present === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => $._encodeNull, $.BER)(value.sai_Present, $.BER)),
            /* IF_ABSENT  */ ((value.pseudonymIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => $._encodeNull, $.BER)(value.pseudonymIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.accuracyFulfilmentIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_AccuracyFulfilmentIndicator, $.BER)(value.accuracyFulfilmentIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.velocityEstimate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_VelocityEstimate, $.BER)(value.velocityEstimate, $.BER)),
            /* IF_ABSENT  */ ((value.sequenceNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => _encode_SequenceNumber, $.BER)(value.sequenceNumber, $.BER)),
            /* IF_ABSENT  */ ((value.periodicLDRInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => _encode_PeriodicLDRInfo, $.BER)(value.periodicLDRInfo, $.BER)),
            /* IF_ABSENT  */ ((value.mo_lrShortCircuitIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => $._encodeNull, $.BER)(value.mo_lrShortCircuitIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.geranGANSSpositioningData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 24, () => _encode_GeranGANSSpositioningData, $.BER)(value.geranGANSSpositioningData, $.BER)),
            /* IF_ABSENT  */ ((value.utranGANSSpositioningData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 25, () => _encode_UtranGANSSpositioningData, $.BER)(value.utranGANSSpositioningData, $.BER)),
            /* IF_ABSENT  */ ((value.targetServingNodeForHandover === undefined) ? undefined : $._encode_explicit(_TagClass.context, 26, () => _encode_ServingNodeAddress, $.BER)(value.targetServingNodeForHandover, $.BER)),
            /* IF_ABSENT  */ ((value.utranAdditionalPositioningData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 27, () => _encode_UtranAdditionalPositioningData, $.BER)(value.utranAdditionalPositioningData, $.BER)),
            /* IF_ABSENT  */ ((value.utranBaroPressureMeas === undefined) ? undefined : $._encode_implicit(_TagClass.context, 28, () => _encode_UtranBaroPressureMeas, $.BER)(value.utranBaroPressureMeas, $.BER)),
            /* IF_ABSENT  */ ((value.utranCivicAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 29, () => _encode_UtranCivicAddress, $.BER)(value.utranCivicAddress, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SubscriberLocationReport_Arg(value, elGetter);
}


/* eslint-enable */
