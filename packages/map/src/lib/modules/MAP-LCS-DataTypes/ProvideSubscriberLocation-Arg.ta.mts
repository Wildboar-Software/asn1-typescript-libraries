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
import { LocationType, _decode_LocationType, _encode_LocationType } from "../MAP-LCS-DataTypes/LocationType.ta.mjs";
// export { LocationType, _decode_LocationType, _encode_LocationType } from "../MAP-LCS-DataTypes/LocationType.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { LCS_ClientID, _decode_LCS_ClientID, _encode_LCS_ClientID } from "../MAP-LCS-DataTypes/LCS-ClientID.ta.mjs";
// export { LCS_ClientID, _decode_LCS_ClientID, _encode_LCS_ClientID } from "../MAP-LCS-DataTypes/LCS-ClientID.ta.mjs";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { LMSI, _decode_LMSI, _encode_LMSI } from "../MAP-CommonDataTypes/LMSI.ta.mjs";
// export { LMSI, _decode_LMSI, _encode_LMSI } from "../MAP-CommonDataTypes/LMSI.ta.mjs";
import { IMEI, _decode_IMEI, _encode_IMEI } from "../MAP-CommonDataTypes/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../MAP-CommonDataTypes/IMEI.ta.mjs";
import { LCS_Priority, _decode_LCS_Priority, _encode_LCS_Priority } from "../MAP-LCS-DataTypes/LCS-Priority.ta.mjs";
// export { LCS_Priority, _decode_LCS_Priority, _encode_LCS_Priority } from "../MAP-LCS-DataTypes/LCS-Priority.ta.mjs";
import { LCS_QoS, _decode_LCS_QoS, _encode_LCS_QoS } from "../MAP-LCS-DataTypes/LCS-QoS.ta.mjs";
// export { LCS_QoS, _decode_LCS_QoS, _encode_LCS_QoS } from "../MAP-LCS-DataTypes/LCS-QoS.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { SupportedGADShapes, SupportedGADShapes_ellipsoidPoint /* IMPORTED_LONG_NAMED_BIT */, ellipsoidPoint /* IMPORTED_SHORT_NAMED_BIT */, SupportedGADShapes_ellipsoidPointWithUncertaintyCircle /* IMPORTED_LONG_NAMED_BIT */, ellipsoidPointWithUncertaintyCircle /* IMPORTED_SHORT_NAMED_BIT */, SupportedGADShapes_ellipsoidPointWithUncertaintyEllipse /* IMPORTED_LONG_NAMED_BIT */, ellipsoidPointWithUncertaintyEllipse /* IMPORTED_SHORT_NAMED_BIT */, SupportedGADShapes_polygon /* IMPORTED_LONG_NAMED_BIT */, polygon /* IMPORTED_SHORT_NAMED_BIT */, SupportedGADShapes_ellipsoidPointWithAltitude /* IMPORTED_LONG_NAMED_BIT */, ellipsoidPointWithAltitude /* IMPORTED_SHORT_NAMED_BIT */, SupportedGADShapes_ellipsoidPointWithAltitudeAndUncertaintyElipsoid /* IMPORTED_LONG_NAMED_BIT */, ellipsoidPointWithAltitudeAndUncertaintyElipsoid /* IMPORTED_SHORT_NAMED_BIT */, SupportedGADShapes_ellipsoidArc /* IMPORTED_LONG_NAMED_BIT */, ellipsoidArc /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedGADShapes, _encode_SupportedGADShapes } from "../MAP-LCS-DataTypes/SupportedGADShapes.ta.mjs";
// export { SupportedGADShapes, SupportedGADShapes_ellipsoidPoint /* IMPORTED_LONG_NAMED_BIT */, ellipsoidPoint /* IMPORTED_SHORT_NAMED_BIT */, SupportedGADShapes_ellipsoidPointWithUncertaintyCircle /* IMPORTED_LONG_NAMED_BIT */, ellipsoidPointWithUncertaintyCircle /* IMPORTED_SHORT_NAMED_BIT */, SupportedGADShapes_ellipsoidPointWithUncertaintyEllipse /* IMPORTED_LONG_NAMED_BIT */, ellipsoidPointWithUncertaintyEllipse /* IMPORTED_SHORT_NAMED_BIT */, SupportedGADShapes_polygon /* IMPORTED_LONG_NAMED_BIT */, polygon /* IMPORTED_SHORT_NAMED_BIT */, SupportedGADShapes_ellipsoidPointWithAltitude /* IMPORTED_LONG_NAMED_BIT */, ellipsoidPointWithAltitude /* IMPORTED_SHORT_NAMED_BIT */, SupportedGADShapes_ellipsoidPointWithAltitudeAndUncertaintyElipsoid /* IMPORTED_LONG_NAMED_BIT */, ellipsoidPointWithAltitudeAndUncertaintyElipsoid /* IMPORTED_SHORT_NAMED_BIT */, SupportedGADShapes_ellipsoidArc /* IMPORTED_LONG_NAMED_BIT */, ellipsoidArc /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedGADShapes, _encode_SupportedGADShapes } from "../MAP-LCS-DataTypes/SupportedGADShapes.ta.mjs";
import { LCS_ReferenceNumber, _decode_LCS_ReferenceNumber, _encode_LCS_ReferenceNumber } from "../MAP-LCS-DataTypes/LCS-ReferenceNumber.ta.mjs";
// export { LCS_ReferenceNumber, _decode_LCS_ReferenceNumber, _encode_LCS_ReferenceNumber } from "../MAP-LCS-DataTypes/LCS-ReferenceNumber.ta.mjs";
import { LCSServiceTypeID, _decode_LCSServiceTypeID, _encode_LCSServiceTypeID } from "../MAP-CommonDataTypes/LCSServiceTypeID.ta.mjs";
// export { LCSServiceTypeID, _decode_LCSServiceTypeID, _encode_LCSServiceTypeID } from "../MAP-CommonDataTypes/LCSServiceTypeID.ta.mjs";
import { LCSCodeword, _decode_LCSCodeword, _encode_LCSCodeword } from "../MAP-LCS-DataTypes/LCSCodeword.ta.mjs";
// export { LCSCodeword, _decode_LCSCodeword, _encode_LCSCodeword } from "../MAP-LCS-DataTypes/LCSCodeword.ta.mjs";
import { LCS_PrivacyCheck, _decode_LCS_PrivacyCheck, _encode_LCS_PrivacyCheck } from "../MAP-LCS-DataTypes/LCS-PrivacyCheck.ta.mjs";
// export { LCS_PrivacyCheck, _decode_LCS_PrivacyCheck, _encode_LCS_PrivacyCheck } from "../MAP-LCS-DataTypes/LCS-PrivacyCheck.ta.mjs";
import { AreaEventInfo, _decode_AreaEventInfo, _encode_AreaEventInfo } from "../MAP-LCS-DataTypes/AreaEventInfo.ta.mjs";
// export { AreaEventInfo, _decode_AreaEventInfo, _encode_AreaEventInfo } from "../MAP-LCS-DataTypes/AreaEventInfo.ta.mjs";
import { GSN_Address, _decode_GSN_Address, _encode_GSN_Address } from "../MAP-CommonDataTypes/GSN-Address.ta.mjs";
// export { GSN_Address, _decode_GSN_Address, _encode_GSN_Address } from "../MAP-CommonDataTypes/GSN-Address.ta.mjs";
import { PeriodicLDRInfo, _decode_PeriodicLDRInfo, _encode_PeriodicLDRInfo } from "../MAP-LCS-DataTypes/PeriodicLDRInfo.ta.mjs";
// export { PeriodicLDRInfo, _decode_PeriodicLDRInfo, _encode_PeriodicLDRInfo } from "../MAP-LCS-DataTypes/PeriodicLDRInfo.ta.mjs";
import { ReportingPLMNList, _decode_ReportingPLMNList, _encode_ReportingPLMNList } from "../MAP-LCS-DataTypes/ReportingPLMNList.ta.mjs";
// export { ReportingPLMNList, _decode_ReportingPLMNList, _encode_ReportingPLMNList } from "../MAP-LCS-DataTypes/ReportingPLMNList.ta.mjs";


/**
 * @summary ProvideSubscriberLocation_Arg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProvideSubscriberLocation-Arg ::= SEQUENCE {
 *     locationType    LocationType,
 *     mlc-Number    ISDN-AddressString,
 *     lcs-ClientID    [0] LCS-ClientID    OPTIONAL,
 *     privacyOverride    [1] NULL    OPTIONAL,
 *     imsi    [2] IMSI    OPTIONAL,
 *     msisdn    [3] ISDN-AddressString    OPTIONAL,
 *     lmsi    [4] LMSI    OPTIONAL,
 *     imei    [5] IMEI    OPTIONAL,
 *     lcs-Priority    [6] LCS-Priority    OPTIONAL,
 *     lcs-QoS    [7] LCS-QoS    OPTIONAL,
 *     extensionContainer    [8] ExtensionContainer    OPTIONAL,
 *     ... ,
 *     supportedGADShapes    [9]    SupportedGADShapes    OPTIONAL,
 *     lcs-ReferenceNumber    [10]    LCS-ReferenceNumber    OPTIONAL,
 *     lcsServiceTypeID    [11]    LCSServiceTypeID    OPTIONAL,
 *     lcsCodeword    [12]    LCSCodeword    OPTIONAL,
 *     lcs-PrivacyCheck    [13]    LCS-PrivacyCheck    OPTIONAL,
 *     areaEventInfo    [14]    AreaEventInfo    OPTIONAL,
 *     h-gmlc-Address    [15]    GSN-Address    OPTIONAL,
 *     mo-lrShortCircuitIndicator    [16] NULL    OPTIONAL,
 *     periodicLDRInfo    [17] PeriodicLDRInfo    OPTIONAL,
 *     reportingPLMNList    [18] ReportingPLMNList    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ProvideSubscriberLocation_Arg {
    constructor (
        /**
         * @summary `locationType`.
         * @public
         * @readonly
         */
        readonly locationType: LocationType,
        /**
         * @summary `mlc_Number`.
         * @public
         * @readonly
         */
        readonly mlc_Number: ISDN_AddressString,
        /**
         * @summary `lcs_ClientID`.
         * @public
         * @readonly
         */
        readonly lcs_ClientID: OPTIONAL<LCS_ClientID>,
        /**
         * @summary `privacyOverride`.
         * @public
         * @readonly
         */
        readonly privacyOverride: OPTIONAL<NULL>,
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: OPTIONAL<IMSI>,
        /**
         * @summary `msisdn`.
         * @public
         * @readonly
         */
        readonly msisdn: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `lmsi`.
         * @public
         * @readonly
         */
        readonly lmsi: OPTIONAL<LMSI>,
        /**
         * @summary `imei`.
         * @public
         * @readonly
         */
        readonly imei: OPTIONAL<IMEI>,
        /**
         * @summary `lcs_Priority`.
         * @public
         * @readonly
         */
        readonly lcs_Priority: OPTIONAL<LCS_Priority>,
        /**
         * @summary `lcs_QoS`.
         * @public
         * @readonly
         */
        readonly lcs_QoS: OPTIONAL<LCS_QoS>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `supportedGADShapes`.
         * @public
         * @readonly
         */
        readonly supportedGADShapes: OPTIONAL<SupportedGADShapes>,
        /**
         * @summary `lcs_ReferenceNumber`.
         * @public
         * @readonly
         */
        readonly lcs_ReferenceNumber: OPTIONAL<LCS_ReferenceNumber>,
        /**
         * @summary `lcsServiceTypeID`.
         * @public
         * @readonly
         */
        readonly lcsServiceTypeID: OPTIONAL<LCSServiceTypeID>,
        /**
         * @summary `lcsCodeword`.
         * @public
         * @readonly
         */
        readonly lcsCodeword: OPTIONAL<LCSCodeword>,
        /**
         * @summary `lcs_PrivacyCheck`.
         * @public
         * @readonly
         */
        readonly lcs_PrivacyCheck: OPTIONAL<LCS_PrivacyCheck>,
        /**
         * @summary `areaEventInfo`.
         * @public
         * @readonly
         */
        readonly areaEventInfo: OPTIONAL<AreaEventInfo>,
        /**
         * @summary `h_gmlc_Address`.
         * @public
         * @readonly
         */
        readonly h_gmlc_Address: OPTIONAL<GSN_Address>,
        /**
         * @summary `mo_lrShortCircuitIndicator`.
         * @public
         * @readonly
         */
        readonly mo_lrShortCircuitIndicator: OPTIONAL<NULL>,
        /**
         * @summary `periodicLDRInfo`.
         * @public
         * @readonly
         */
        readonly periodicLDRInfo: OPTIONAL<PeriodicLDRInfo>,
        /**
         * @summary `reportingPLMNList`.
         * @public
         * @readonly
         */
        readonly reportingPLMNList: OPTIONAL<ReportingPLMNList>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ProvideSubscriberLocation_Arg
     * @description
     * 
     * This takes an `object` and converts it to a `ProvideSubscriberLocation_Arg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProvideSubscriberLocation_Arg`.
     * @returns {ProvideSubscriberLocation_Arg}
     */
    public static _from_object (_o: { [_K in keyof (ProvideSubscriberLocation_Arg)]: (ProvideSubscriberLocation_Arg)[_K] }): ProvideSubscriberLocation_Arg {
        return new ProvideSubscriberLocation_Arg(_o.locationType, _o.mlc_Number, _o.lcs_ClientID, _o.privacyOverride, _o.imsi, _o.msisdn, _o.lmsi, _o.imei, _o.lcs_Priority, _o.lcs_QoS, _o.extensionContainer, _o.supportedGADShapes, _o.lcs_ReferenceNumber, _o.lcsServiceTypeID, _o.lcsCodeword, _o.lcs_PrivacyCheck, _o.areaEventInfo, _o.h_gmlc_Address, _o.mo_lrShortCircuitIndicator, _o.periodicLDRInfo, _o.reportingPLMNList, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ProvideSubscriberLocation_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProvideSubscriberLocation_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("locationType", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("mlc-Number", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("lcs-ClientID", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("privacyOverride", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("imsi", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("msisdn", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("lmsi", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("imei", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("lcs-Priority", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("lcs-QoS", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 8), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ProvideSubscriberLocation_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProvideSubscriberLocation_Arg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProvideSubscriberLocation_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProvideSubscriberLocation_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("supportedGADShapes", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("lcs-ReferenceNumber", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("lcsServiceTypeID", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("lcsCodeword", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("lcs-PrivacyCheck", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("areaEventInfo", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("h-gmlc-Address", true, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("mo-lrShortCircuitIndicator", true, $.hasTag(_TagClass.context, 16), undefined, undefined),
    new $.ComponentSpec("periodicLDRInfo", true, $.hasTag(_TagClass.context, 17), undefined, undefined),
    new $.ComponentSpec("reportingPLMNList", true, $.hasTag(_TagClass.context, 18), undefined, undefined)
];

let _cached_decoder_for_ProvideSubscriberLocation_Arg: $.ASN1Decoder<ProvideSubscriberLocation_Arg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProvideSubscriberLocation_Arg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProvideSubscriberLocation_Arg (el: _Element): ProvideSubscriberLocation_Arg {
    if (!_cached_decoder_for_ProvideSubscriberLocation_Arg) { _cached_decoder_for_ProvideSubscriberLocation_Arg = function (el: _Element): ProvideSubscriberLocation_Arg {
    let locationType!: LocationType;
    let mlc_Number!: ISDN_AddressString;
    let lcs_ClientID: OPTIONAL<LCS_ClientID>;
    let privacyOverride: OPTIONAL<NULL>;
    let imsi: OPTIONAL<IMSI>;
    let msisdn: OPTIONAL<ISDN_AddressString>;
    let lmsi: OPTIONAL<LMSI>;
    let imei: OPTIONAL<IMEI>;
    let lcs_Priority: OPTIONAL<LCS_Priority>;
    let lcs_QoS: OPTIONAL<LCS_QoS>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let supportedGADShapes: OPTIONAL<SupportedGADShapes>;
    let lcs_ReferenceNumber: OPTIONAL<LCS_ReferenceNumber>;
    let lcsServiceTypeID: OPTIONAL<LCSServiceTypeID>;
    let lcsCodeword: OPTIONAL<LCSCodeword>;
    let lcs_PrivacyCheck: OPTIONAL<LCS_PrivacyCheck>;
    let areaEventInfo: OPTIONAL<AreaEventInfo>;
    let h_gmlc_Address: OPTIONAL<GSN_Address>;
    let mo_lrShortCircuitIndicator: OPTIONAL<NULL>;
    let periodicLDRInfo: OPTIONAL<PeriodicLDRInfo>;
    let reportingPLMNList: OPTIONAL<ReportingPLMNList>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "locationType": (_el: _Element): void => { locationType = _decode_LocationType(_el); },
        "mlc-Number": (_el: _Element): void => { mlc_Number = _decode_ISDN_AddressString(_el); },
        "lcs-ClientID": (_el: _Element): void => { lcs_ClientID = $._decode_implicit<LCS_ClientID>(() => _decode_LCS_ClientID)(_el); },
        "privacyOverride": (_el: _Element): void => { privacyOverride = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "msisdn": (_el: _Element): void => { msisdn = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "lmsi": (_el: _Element): void => { lmsi = $._decode_implicit<LMSI>(() => _decode_LMSI)(_el); },
        "imei": (_el: _Element): void => { imei = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); },
        "lcs-Priority": (_el: _Element): void => { lcs_Priority = $._decode_implicit<LCS_Priority>(() => _decode_LCS_Priority)(_el); },
        "lcs-QoS": (_el: _Element): void => { lcs_QoS = $._decode_implicit<LCS_QoS>(() => _decode_LCS_QoS)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "supportedGADShapes": (_el: _Element): void => { supportedGADShapes = $._decode_implicit<SupportedGADShapes>(() => _decode_SupportedGADShapes)(_el); },
        "lcs-ReferenceNumber": (_el: _Element): void => { lcs_ReferenceNumber = $._decode_implicit<LCS_ReferenceNumber>(() => _decode_LCS_ReferenceNumber)(_el); },
        "lcsServiceTypeID": (_el: _Element): void => { lcsServiceTypeID = $._decode_implicit<LCSServiceTypeID>(() => _decode_LCSServiceTypeID)(_el); },
        "lcsCodeword": (_el: _Element): void => { lcsCodeword = $._decode_implicit<LCSCodeword>(() => _decode_LCSCodeword)(_el); },
        "lcs-PrivacyCheck": (_el: _Element): void => { lcs_PrivacyCheck = $._decode_implicit<LCS_PrivacyCheck>(() => _decode_LCS_PrivacyCheck)(_el); },
        "areaEventInfo": (_el: _Element): void => { areaEventInfo = $._decode_implicit<AreaEventInfo>(() => _decode_AreaEventInfo)(_el); },
        "h-gmlc-Address": (_el: _Element): void => { h_gmlc_Address = $._decode_implicit<GSN_Address>(() => _decode_GSN_Address)(_el); },
        "mo-lrShortCircuitIndicator": (_el: _Element): void => { mo_lrShortCircuitIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "periodicLDRInfo": (_el: _Element): void => { periodicLDRInfo = $._decode_implicit<PeriodicLDRInfo>(() => _decode_PeriodicLDRInfo)(_el); },
        "reportingPLMNList": (_el: _Element): void => { reportingPLMNList = $._decode_implicit<ReportingPLMNList>(() => _decode_ReportingPLMNList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProvideSubscriberLocation_Arg,
        _extension_additions_list_spec_for_ProvideSubscriberLocation_Arg,
        _root_component_type_list_2_spec_for_ProvideSubscriberLocation_Arg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ProvideSubscriberLocation_Arg(
        locationType,
        mlc_Number,
        lcs_ClientID,
        privacyOverride,
        imsi,
        msisdn,
        lmsi,
        imei,
        lcs_Priority,
        lcs_QoS,
        extensionContainer,
        supportedGADShapes,
        lcs_ReferenceNumber,
        lcsServiceTypeID,
        lcsCodeword,
        lcs_PrivacyCheck,
        areaEventInfo,
        h_gmlc_Address,
        mo_lrShortCircuitIndicator,
        periodicLDRInfo,
        reportingPLMNList,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ProvideSubscriberLocation_Arg(el);
}

let _cached_encoder_for_ProvideSubscriberLocation_Arg: $.ASN1Encoder<ProvideSubscriberLocation_Arg> | null = null;

/**
 * @summary Encodes a(n) ProvideSubscriberLocation_Arg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProvideSubscriberLocation_Arg, encoded as an ASN.1 Element.
 */
export
function _encode_ProvideSubscriberLocation_Arg (value: ProvideSubscriberLocation_Arg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProvideSubscriberLocation_Arg) { _cached_encoder_for_ProvideSubscriberLocation_Arg = function (value: ProvideSubscriberLocation_Arg, elGetter: $.ASN1Encoder<ProvideSubscriberLocation_Arg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LocationType(value.locationType, $.BER),
            /* REQUIRED   */ _encode_ISDN_AddressString(value.mlc_Number, $.BER),
            /* IF_ABSENT  */ ((value.lcs_ClientID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_LCS_ClientID, $.BER)(value.lcs_ClientID, $.BER)),
            /* IF_ABSENT  */ ((value.privacyOverride === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.privacyOverride, $.BER)),
            /* IF_ABSENT  */ ((value.imsi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_IMSI, $.BER)(value.imsi, $.BER)),
            /* IF_ABSENT  */ ((value.msisdn === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ISDN_AddressString, $.BER)(value.msisdn, $.BER)),
            /* IF_ABSENT  */ ((value.lmsi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_LMSI, $.BER)(value.lmsi, $.BER)),
            /* IF_ABSENT  */ ((value.imei === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_IMEI, $.BER)(value.imei, $.BER)),
            /* IF_ABSENT  */ ((value.lcs_Priority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_LCS_Priority, $.BER)(value.lcs_Priority, $.BER)),
            /* IF_ABSENT  */ ((value.lcs_QoS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_LCS_QoS, $.BER)(value.lcs_QoS, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.supportedGADShapes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_SupportedGADShapes, $.BER)(value.supportedGADShapes, $.BER)),
            /* IF_ABSENT  */ ((value.lcs_ReferenceNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_LCS_ReferenceNumber, $.BER)(value.lcs_ReferenceNumber, $.BER)),
            /* IF_ABSENT  */ ((value.lcsServiceTypeID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_LCSServiceTypeID, $.BER)(value.lcsServiceTypeID, $.BER)),
            /* IF_ABSENT  */ ((value.lcsCodeword === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_LCSCodeword, $.BER)(value.lcsCodeword, $.BER)),
            /* IF_ABSENT  */ ((value.lcs_PrivacyCheck === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_LCS_PrivacyCheck, $.BER)(value.lcs_PrivacyCheck, $.BER)),
            /* IF_ABSENT  */ ((value.areaEventInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_AreaEventInfo, $.BER)(value.areaEventInfo, $.BER)),
            /* IF_ABSENT  */ ((value.h_gmlc_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_GSN_Address, $.BER)(value.h_gmlc_Address, $.BER)),
            /* IF_ABSENT  */ ((value.mo_lrShortCircuitIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => $._encodeNull, $.BER)(value.mo_lrShortCircuitIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.periodicLDRInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_PeriodicLDRInfo, $.BER)(value.periodicLDRInfo, $.BER)),
            /* IF_ABSENT  */ ((value.reportingPLMNList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_ReportingPLMNList, $.BER)(value.reportingPLMNList, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ProvideSubscriberLocation_Arg(value, elGetter);
}


/* eslint-enable */
