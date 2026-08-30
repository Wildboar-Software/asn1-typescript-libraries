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
import { LocationInformation, _decode_LocationInformation, _encode_LocationInformation } from "../MAP-MS-DataTypes/LocationInformation.ta.mjs";
// export { LocationInformation, _decode_LocationInformation, _encode_LocationInformation } from "../MAP-MS-DataTypes/LocationInformation.ta.mjs";
import { SubscriberState, _decode_SubscriberState, _encode_SubscriberState } from "../MAP-MS-DataTypes/SubscriberState.ta.mjs";
// export { SubscriberState, _decode_SubscriberState, _encode_SubscriberState } from "../MAP-MS-DataTypes/SubscriberState.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { LocationInformationGPRS, _decode_LocationInformationGPRS, _encode_LocationInformationGPRS } from "../MAP-MS-DataTypes/LocationInformationGPRS.ta.mjs";
// export { LocationInformationGPRS, _decode_LocationInformationGPRS, _encode_LocationInformationGPRS } from "../MAP-MS-DataTypes/LocationInformationGPRS.ta.mjs";
import { PS_SubscriberState, _decode_PS_SubscriberState, _encode_PS_SubscriberState } from "../MAP-MS-DataTypes/PS-SubscriberState.ta.mjs";
// export { PS_SubscriberState, _decode_PS_SubscriberState, _encode_PS_SubscriberState } from "../MAP-MS-DataTypes/PS-SubscriberState.ta.mjs";
import { IMEI, _decode_IMEI, _encode_IMEI } from "../MAP-CommonDataTypes/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../MAP-CommonDataTypes/IMEI.ta.mjs";
import { MS_Classmark2, _decode_MS_Classmark2, _encode_MS_Classmark2 } from "../MAP-MS-DataTypes/MS-Classmark2.ta.mjs";
// export { MS_Classmark2, _decode_MS_Classmark2, _encode_MS_Classmark2 } from "../MAP-MS-DataTypes/MS-Classmark2.ta.mjs";
import { GPRSMSClass, _decode_GPRSMSClass, _encode_GPRSMSClass } from "../MAP-MS-DataTypes/GPRSMSClass.ta.mjs";
// export { GPRSMSClass, _decode_GPRSMSClass, _encode_GPRSMSClass } from "../MAP-MS-DataTypes/GPRSMSClass.ta.mjs";
import { MNPInfoRes, _decode_MNPInfoRes, _encode_MNPInfoRes } from "../MAP-MS-DataTypes/MNPInfoRes.ta.mjs";
// export { MNPInfoRes, _decode_MNPInfoRes, _encode_MNPInfoRes } from "../MAP-MS-DataTypes/MNPInfoRes.ta.mjs";
import { IMS_VoiceOverPS_SessionsInd, _enum_for_IMS_VoiceOverPS_SessionsInd, IMS_VoiceOverPS_SessionsInd_imsVoiceOverPS_SessionsNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, imsVoiceOverPS_SessionsNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMS_VoiceOverPS_SessionsInd_imsVoiceOverPS_SessionsSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, imsVoiceOverPS_SessionsSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMS_VoiceOverPS_SessionsInd_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IMS_VoiceOverPS_SessionsInd, _encode_IMS_VoiceOverPS_SessionsInd } from "../MAP-MS-DataTypes/IMS-VoiceOverPS-SessionsInd.ta.mjs";
// export { IMS_VoiceOverPS_SessionsInd, _enum_for_IMS_VoiceOverPS_SessionsInd, IMS_VoiceOverPS_SessionsInd_imsVoiceOverPS_SessionsNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, imsVoiceOverPS_SessionsNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMS_VoiceOverPS_SessionsInd_imsVoiceOverPS_SessionsSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, imsVoiceOverPS_SessionsSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMS_VoiceOverPS_SessionsInd_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IMS_VoiceOverPS_SessionsInd, _encode_IMS_VoiceOverPS_SessionsInd } from "../MAP-MS-DataTypes/IMS-VoiceOverPS-SessionsInd.ta.mjs";
import { Time, _decode_Time, _encode_Time } from "../MAP-CommonDataTypes/Time.ta.mjs";
// export { Time, _decode_Time, _encode_Time } from "../MAP-CommonDataTypes/Time.ta.mjs";
import { Used_RAT_Type, _enum_for_Used_RAT_Type, Used_RAT_Type_utran /* IMPORTED_LONG_ENUMERATION_ITEM */, utran /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_geran /* IMPORTED_LONG_ENUMERATION_ITEM */, geran /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_gan /* IMPORTED_LONG_ENUMERATION_ITEM */, gan /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_i_hspa_evolution /* IMPORTED_LONG_ENUMERATION_ITEM */, i_hspa_evolution /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_e_utran /* IMPORTED_LONG_ENUMERATION_ITEM */, e_utran /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_nb_iot /* IMPORTED_LONG_ENUMERATION_ITEM */, nb_iot /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Used_RAT_Type, _encode_Used_RAT_Type } from "../MAP-MS-DataTypes/Used-RAT-Type.ta.mjs";
// export { Used_RAT_Type, _enum_for_Used_RAT_Type, Used_RAT_Type_utran /* IMPORTED_LONG_ENUMERATION_ITEM */, utran /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_geran /* IMPORTED_LONG_ENUMERATION_ITEM */, geran /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_gan /* IMPORTED_LONG_ENUMERATION_ITEM */, gan /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_i_hspa_evolution /* IMPORTED_LONG_ENUMERATION_ITEM */, i_hspa_evolution /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_e_utran /* IMPORTED_LONG_ENUMERATION_ITEM */, e_utran /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_nb_iot /* IMPORTED_LONG_ENUMERATION_ITEM */, nb_iot /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Used_RAT_Type, _encode_Used_RAT_Type } from "../MAP-MS-DataTypes/Used-RAT-Type.ta.mjs";
import { LocationInformationEPS, _decode_LocationInformationEPS, _encode_LocationInformationEPS } from "../MAP-MS-DataTypes/LocationInformationEPS.ta.mjs";
// export { LocationInformationEPS, _decode_LocationInformationEPS, _encode_LocationInformationEPS } from "../MAP-MS-DataTypes/LocationInformationEPS.ta.mjs";
import { TimeZone, _decode_TimeZone, _encode_TimeZone } from "../MAP-MS-DataTypes/TimeZone.ta.mjs";
// export { TimeZone, _decode_TimeZone, _encode_TimeZone } from "../MAP-MS-DataTypes/TimeZone.ta.mjs";
import { DaylightSavingTime, _enum_for_DaylightSavingTime, DaylightSavingTime_noAdjustment /* IMPORTED_LONG_ENUMERATION_ITEM */, noAdjustment /* IMPORTED_SHORT_ENUMERATION_ITEM */, DaylightSavingTime_plusOneHourAdjustment /* IMPORTED_LONG_ENUMERATION_ITEM */, plusOneHourAdjustment /* IMPORTED_SHORT_ENUMERATION_ITEM */, DaylightSavingTime_plusTwoHoursAdjustment /* IMPORTED_LONG_ENUMERATION_ITEM */, plusTwoHoursAdjustment /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DaylightSavingTime, _encode_DaylightSavingTime } from "../MAP-MS-DataTypes/DaylightSavingTime.ta.mjs";
// export { DaylightSavingTime, _enum_for_DaylightSavingTime, DaylightSavingTime_noAdjustment /* IMPORTED_LONG_ENUMERATION_ITEM */, noAdjustment /* IMPORTED_SHORT_ENUMERATION_ITEM */, DaylightSavingTime_plusOneHourAdjustment /* IMPORTED_LONG_ENUMERATION_ITEM */, plusOneHourAdjustment /* IMPORTED_SHORT_ENUMERATION_ITEM */, DaylightSavingTime_plusTwoHoursAdjustment /* IMPORTED_LONG_ENUMERATION_ITEM */, plusTwoHoursAdjustment /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DaylightSavingTime, _encode_DaylightSavingTime } from "../MAP-MS-DataTypes/DaylightSavingTime.ta.mjs";
import { LocationInformation5GS, _decode_LocationInformation5GS, _encode_LocationInformation5GS } from "../MAP-MS-DataTypes/LocationInformation5GS.ta.mjs";
// export { LocationInformation5GS, _decode_LocationInformation5GS, _encode_LocationInformation5GS } from "../MAP-MS-DataTypes/LocationInformation5GS.ta.mjs";


/**
 * @summary SubscriberInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriberInfo ::= SEQUENCE {
 *     locationInformation    [0] LocationInformation    OPTIONAL,
 *     subscriberState    [1] SubscriberState    OPTIONAL,
 *     extensionContainer    [2] ExtensionContainer    OPTIONAL,
 *     ... ,
 *     locationInformationGPRS    [3] LocationInformationGPRS    OPTIONAL,
 *     ps-SubscriberState    [4] PS-SubscriberState    OPTIONAL,
 *     imei    [5] IMEI    OPTIONAL,
 *     ms-Classmark2    [6] MS-Classmark2    OPTIONAL,
 *     gprs-MS-Class    [7] GPRSMSClass    OPTIONAL,
 *     mnpInfoRes    [8] MNPInfoRes    OPTIONAL,
 *     imsVoiceOverPS-SessionsIndication    [9] IMS-VoiceOverPS-SessionsInd    OPTIONAL,
 *     lastUE-ActivityTime    [10] Time    OPTIONAL,
 *     lastRAT-Type    [11] Used-RAT-Type    OPTIONAL,
 *     eps-SubscriberState    [12] PS-SubscriberState    OPTIONAL,
 *     locationInformationEPS    [13] LocationInformationEPS    OPTIONAL,
 *     timeZone    [14] TimeZone    OPTIONAL,
 *     daylightSavingTime    [15] DaylightSavingTime    OPTIONAL,
 *     locationInformation5GS    [16] LocationInformation5GS    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SubscriberInfo {
    constructor (
        /**
         * @summary `locationInformation`.
         * @public
         * @readonly
         */
        readonly locationInformation: OPTIONAL<LocationInformation>,
        /**
         * @summary `subscriberState`.
         * @public
         * @readonly
         */
        readonly subscriberState: OPTIONAL<SubscriberState>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `locationInformationGPRS`.
         * @public
         * @readonly
         */
        readonly locationInformationGPRS: OPTIONAL<LocationInformationGPRS>,
        /**
         * @summary `ps_SubscriberState`.
         * @public
         * @readonly
         */
        readonly ps_SubscriberState: OPTIONAL<PS_SubscriberState>,
        /**
         * @summary `imei`.
         * @public
         * @readonly
         */
        readonly imei: OPTIONAL<IMEI>,
        /**
         * @summary `ms_Classmark2`.
         * @public
         * @readonly
         */
        readonly ms_Classmark2: OPTIONAL<MS_Classmark2>,
        /**
         * @summary `gprs_MS_Class`.
         * @public
         * @readonly
         */
        readonly gprs_MS_Class: OPTIONAL<GPRSMSClass>,
        /**
         * @summary `mnpInfoRes`.
         * @public
         * @readonly
         */
        readonly mnpInfoRes: OPTIONAL<MNPInfoRes>,
        /**
         * @summary `imsVoiceOverPS_SessionsIndication`.
         * @public
         * @readonly
         */
        readonly imsVoiceOverPS_SessionsIndication: OPTIONAL<IMS_VoiceOverPS_SessionsInd>,
        /**
         * @summary `lastUE_ActivityTime`.
         * @public
         * @readonly
         */
        readonly lastUE_ActivityTime: OPTIONAL<Time>,
        /**
         * @summary `lastRAT_Type`.
         * @public
         * @readonly
         */
        readonly lastRAT_Type: OPTIONAL<Used_RAT_Type>,
        /**
         * @summary `eps_SubscriberState`.
         * @public
         * @readonly
         */
        readonly eps_SubscriberState: OPTIONAL<PS_SubscriberState>,
        /**
         * @summary `locationInformationEPS`.
         * @public
         * @readonly
         */
        readonly locationInformationEPS: OPTIONAL<LocationInformationEPS>,
        /**
         * @summary `timeZone`.
         * @public
         * @readonly
         */
        readonly timeZone: OPTIONAL<TimeZone>,
        /**
         * @summary `daylightSavingTime`.
         * @public
         * @readonly
         */
        readonly daylightSavingTime: OPTIONAL<DaylightSavingTime>,
        /**
         * @summary `locationInformation5GS`.
         * @public
         * @readonly
         */
        readonly locationInformation5GS: OPTIONAL<LocationInformation5GS>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SubscriberInfo
     * @description
     * 
     * This takes an `object` and converts it to a `SubscriberInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubscriberInfo`.
     * @returns {SubscriberInfo}
     */
    public static _from_object (_o: { [_K in keyof (SubscriberInfo)]: (SubscriberInfo)[_K] }): SubscriberInfo {
        return new SubscriberInfo(_o.locationInformation, _o.subscriberState, _o.extensionContainer, _o.locationInformationGPRS, _o.ps_SubscriberState, _o.imei, _o.ms_Classmark2, _o.gprs_MS_Class, _o.mnpInfoRes, _o.imsVoiceOverPS_SessionsIndication, _o.lastUE_ActivityTime, _o.lastRAT_Type, _o.eps_SubscriberState, _o.locationInformationEPS, _o.timeZone, _o.daylightSavingTime, _o.locationInformation5GS, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `imsVoiceOverPS_SessionsIndication`
         * @public
         * @static
         */

    public static _enum_for_imsVoiceOverPS_SessionsIndication = _enum_for_IMS_VoiceOverPS_SessionsInd;        /**
         * @summary The enum used as the type of the component `lastRAT_Type`
         * @public
         * @static
         */

    public static _enum_for_lastRAT_Type = _enum_for_Used_RAT_Type;        /**
         * @summary The enum used as the type of the component `daylightSavingTime`
         * @public
         * @static
         */

    public static _enum_for_daylightSavingTime = _enum_for_DaylightSavingTime;
}

/**
 * @summary The Leading Root Component Types of SubscriberInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SubscriberInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("locationInformation", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("subscriberState", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SubscriberInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SubscriberInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SubscriberInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SubscriberInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("locationInformationGPRS", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("ps-SubscriberState", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("imei", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("ms-Classmark2", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("gprs-MS-Class", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("mnpInfoRes", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("imsVoiceOverPS-SessionsIndication", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("lastUE-ActivityTime", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("lastRAT-Type", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("eps-SubscriberState", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("locationInformationEPS", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("timeZone", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("daylightSavingTime", true, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("locationInformation5GS", true, $.hasTag(_TagClass.context, 16), undefined, undefined)
];

let _cached_decoder_for_SubscriberInfo: $.ASN1Decoder<SubscriberInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubscriberInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubscriberInfo (el: _Element): SubscriberInfo {
    if (!_cached_decoder_for_SubscriberInfo) { _cached_decoder_for_SubscriberInfo = function (el: _Element): SubscriberInfo {
    let locationInformation: OPTIONAL<LocationInformation>;
    let subscriberState: OPTIONAL<SubscriberState>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let locationInformationGPRS: OPTIONAL<LocationInformationGPRS>;
    let ps_SubscriberState: OPTIONAL<PS_SubscriberState>;
    let imei: OPTIONAL<IMEI>;
    let ms_Classmark2: OPTIONAL<MS_Classmark2>;
    let gprs_MS_Class: OPTIONAL<GPRSMSClass>;
    let mnpInfoRes: OPTIONAL<MNPInfoRes>;
    let imsVoiceOverPS_SessionsIndication: OPTIONAL<IMS_VoiceOverPS_SessionsInd>;
    let lastUE_ActivityTime: OPTIONAL<Time>;
    let lastRAT_Type: OPTIONAL<Used_RAT_Type>;
    let eps_SubscriberState: OPTIONAL<PS_SubscriberState>;
    let locationInformationEPS: OPTIONAL<LocationInformationEPS>;
    let timeZone: OPTIONAL<TimeZone>;
    let daylightSavingTime: OPTIONAL<DaylightSavingTime>;
    let locationInformation5GS: OPTIONAL<LocationInformation5GS>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "locationInformation": (_el: _Element): void => { locationInformation = $._decode_implicit<LocationInformation>(() => _decode_LocationInformation)(_el); },
        "subscriberState": (_el: _Element): void => { subscriberState = $._decode_explicit<SubscriberState>(() => _decode_SubscriberState)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "locationInformationGPRS": (_el: _Element): void => { locationInformationGPRS = $._decode_implicit<LocationInformationGPRS>(() => _decode_LocationInformationGPRS)(_el); },
        "ps-SubscriberState": (_el: _Element): void => { ps_SubscriberState = $._decode_explicit<PS_SubscriberState>(() => _decode_PS_SubscriberState)(_el); },
        "imei": (_el: _Element): void => { imei = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); },
        "ms-Classmark2": (_el: _Element): void => { ms_Classmark2 = $._decode_implicit<MS_Classmark2>(() => _decode_MS_Classmark2)(_el); },
        "gprs-MS-Class": (_el: _Element): void => { gprs_MS_Class = $._decode_implicit<GPRSMSClass>(() => _decode_GPRSMSClass)(_el); },
        "mnpInfoRes": (_el: _Element): void => { mnpInfoRes = $._decode_implicit<MNPInfoRes>(() => _decode_MNPInfoRes)(_el); },
        "imsVoiceOverPS-SessionsIndication": (_el: _Element): void => { imsVoiceOverPS_SessionsIndication = $._decode_implicit<IMS_VoiceOverPS_SessionsInd>(() => _decode_IMS_VoiceOverPS_SessionsInd)(_el); },
        "lastUE-ActivityTime": (_el: _Element): void => { lastUE_ActivityTime = $._decode_implicit<Time>(() => _decode_Time)(_el); },
        "lastRAT-Type": (_el: _Element): void => { lastRAT_Type = $._decode_implicit<Used_RAT_Type>(() => _decode_Used_RAT_Type)(_el); },
        "eps-SubscriberState": (_el: _Element): void => { eps_SubscriberState = $._decode_explicit<PS_SubscriberState>(() => _decode_PS_SubscriberState)(_el); },
        "locationInformationEPS": (_el: _Element): void => { locationInformationEPS = $._decode_implicit<LocationInformationEPS>(() => _decode_LocationInformationEPS)(_el); },
        "timeZone": (_el: _Element): void => { timeZone = $._decode_implicit<TimeZone>(() => _decode_TimeZone)(_el); },
        "daylightSavingTime": (_el: _Element): void => { daylightSavingTime = $._decode_implicit<DaylightSavingTime>(() => _decode_DaylightSavingTime)(_el); },
        "locationInformation5GS": (_el: _Element): void => { locationInformation5GS = $._decode_implicit<LocationInformation5GS>(() => _decode_LocationInformation5GS)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SubscriberInfo,
        _extension_additions_list_spec_for_SubscriberInfo,
        _root_component_type_list_2_spec_for_SubscriberInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SubscriberInfo(
        locationInformation,
        subscriberState,
        extensionContainer,
        locationInformationGPRS,
        ps_SubscriberState,
        imei,
        ms_Classmark2,
        gprs_MS_Class,
        mnpInfoRes,
        imsVoiceOverPS_SessionsIndication,
        lastUE_ActivityTime,
        lastRAT_Type,
        eps_SubscriberState,
        locationInformationEPS,
        timeZone,
        daylightSavingTime,
        locationInformation5GS,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SubscriberInfo(el);
}

let _cached_encoder_for_SubscriberInfo: $.ASN1Encoder<SubscriberInfo> | null = null;

/**
 * @summary Encodes a(n) SubscriberInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscriberInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SubscriberInfo (value: SubscriberInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubscriberInfo) { _cached_encoder_for_SubscriberInfo = function (value: SubscriberInfo, elGetter: $.ASN1Encoder<SubscriberInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.locationInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_LocationInformation, $.BER)(value.locationInformation, $.BER)),
            /* IF_ABSENT  */ ((value.subscriberState === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_SubscriberState, $.BER)(value.subscriberState, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.locationInformationGPRS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_LocationInformationGPRS, $.BER)(value.locationInformationGPRS, $.BER)),
            /* IF_ABSENT  */ ((value.ps_SubscriberState === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_PS_SubscriberState, $.BER)(value.ps_SubscriberState, $.BER)),
            /* IF_ABSENT  */ ((value.imei === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_IMEI, $.BER)(value.imei, $.BER)),
            /* IF_ABSENT  */ ((value.ms_Classmark2 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_MS_Classmark2, $.BER)(value.ms_Classmark2, $.BER)),
            /* IF_ABSENT  */ ((value.gprs_MS_Class === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_GPRSMSClass, $.BER)(value.gprs_MS_Class, $.BER)),
            /* IF_ABSENT  */ ((value.mnpInfoRes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_MNPInfoRes, $.BER)(value.mnpInfoRes, $.BER)),
            /* IF_ABSENT  */ ((value.imsVoiceOverPS_SessionsIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_IMS_VoiceOverPS_SessionsInd, $.BER)(value.imsVoiceOverPS_SessionsIndication, $.BER)),
            /* IF_ABSENT  */ ((value.lastUE_ActivityTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_Time, $.BER)(value.lastUE_ActivityTime, $.BER)),
            /* IF_ABSENT  */ ((value.lastRAT_Type === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_Used_RAT_Type, $.BER)(value.lastRAT_Type, $.BER)),
            /* IF_ABSENT  */ ((value.eps_SubscriberState === undefined) ? undefined : $._encode_explicit(_TagClass.context, 12, () => _encode_PS_SubscriberState, $.BER)(value.eps_SubscriberState, $.BER)),
            /* IF_ABSENT  */ ((value.locationInformationEPS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_LocationInformationEPS, $.BER)(value.locationInformationEPS, $.BER)),
            /* IF_ABSENT  */ ((value.timeZone === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_TimeZone, $.BER)(value.timeZone, $.BER)),
            /* IF_ABSENT  */ ((value.daylightSavingTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_DaylightSavingTime, $.BER)(value.daylightSavingTime, $.BER)),
            /* IF_ABSENT  */ ((value.locationInformation5GS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_LocationInformation5GS, $.BER)(value.locationInformation5GS, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SubscriberInfo(value, elGetter);
}


/* eslint-enable */
