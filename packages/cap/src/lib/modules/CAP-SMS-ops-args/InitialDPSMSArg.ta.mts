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
import { type CalledPartyBCDNumber, _decode_CalledPartyBCDNumber, _encode_CalledPartyBCDNumber } from "../CAP-datatypes/CalledPartyBCDNumber.ta.mjs";
import { EventTypeSMS, _decode_EventTypeSMS, _encode_EventTypeSMS } from "../CAP-datatypes/EventTypeSMS.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../CAP-datatypes/Extensions.ta.mjs";
import { LocationInformationGPRS, _decode_LocationInformationGPRS, _encode_LocationInformationGPRS } from "../CAP-datatypes/LocationInformationGPRS.ta.mjs";
import { type SMS_AddressString, _decode_SMS_AddressString, _encode_SMS_AddressString } from "../CAP-datatypes/SMS-AddressString.ta.mjs";
import { type TPDataCodingScheme, _decode_TPDataCodingScheme, _encode_TPDataCodingScheme } from "../CAP-datatypes/TPDataCodingScheme.ta.mjs";
import { type TPProtocolIdentifier, _decode_TPProtocolIdentifier, _encode_TPProtocolIdentifier } from "../CAP-datatypes/TPProtocolIdentifier.ta.mjs";
import { type TPShortMessageSpecificInfo, _decode_TPShortMessageSpecificInfo, _encode_TPShortMessageSpecificInfo } from "../CAP-datatypes/TPShortMessageSpecificInfo.ta.mjs";
import { type TPValidityPeriod, _decode_TPValidityPeriod, _encode_TPValidityPeriod } from "../CAP-datatypes/TPValidityPeriod.ta.mjs";
import { type TimeAndTimezone, _decode_TimeAndTimezone, _encode_TimeAndTimezone } from "../CAP-datatypes/TimeAndTimezone.ta.mjs";
import { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../Core-INAP-CS1-DataTypes/ServiceKey.ta.mjs";
// export { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../Core-INAP-CS1-DataTypes/ServiceKey.ta.mjs";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { LocationInformation, _decode_LocationInformation, _encode_LocationInformation } from "../MAP-MS-DataTypes/LocationInformation.ta.mjs";
// export { LocationInformation, _decode_LocationInformation, _encode_LocationInformation } from "../MAP-MS-DataTypes/LocationInformation.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { CallReferenceNumber, _decode_CallReferenceNumber, _encode_CallReferenceNumber } from "../MAP-CH-DataTypes/CallReferenceNumber.ta.mjs";
// export { CallReferenceNumber, _decode_CallReferenceNumber, _encode_CallReferenceNumber } from "../MAP-CH-DataTypes/CallReferenceNumber.ta.mjs";
import { MS_Classmark2, _decode_MS_Classmark2, _encode_MS_Classmark2 } from "../MAP-MS-DataTypes/MS-Classmark2.ta.mjs";
// export { MS_Classmark2, _decode_MS_Classmark2, _encode_MS_Classmark2 } from "../MAP-MS-DataTypes/MS-Classmark2.ta.mjs";
import { GPRSMSClass, _decode_GPRSMSClass, _encode_GPRSMSClass } from "../MAP-MS-DataTypes/GPRSMSClass.ta.mjs";
// export { GPRSMSClass, _decode_GPRSMSClass, _encode_GPRSMSClass } from "../MAP-MS-DataTypes/GPRSMSClass.ta.mjs";
import { IMEI, _decode_IMEI, _encode_IMEI } from "../MAP-CommonDataTypes/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../MAP-CommonDataTypes/IMEI.ta.mjs";


/**
 * @summary InitialDPSMSArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitialDPSMSArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     serviceKey                [0] ServiceKey,
 *     destinationSubscriberNumber        [1] CalledPartyBCDNumber {bound}        OPTIONAL,
 *     callingPartyNumber            [2] SMS-AddressString            OPTIONAL,
 *     eventTypeSMS            [3] EventTypeSMS                OPTIONAL,
 *     iMSI                [4] IMSI                    OPTIONAL,
 *     locationInformationMSC        [5] LocationInformation            OPTIONAL,
 *     locationInformationGPRS        [6] LocationInformationGPRS            OPTIONAL,
 *     sMSCAddress                [7] ISDN-AddressString            OPTIONAL,
 *     timeAndTimezone            [8] TimeAndTimezone {bound}            OPTIONAL,
 *     tPShortMessageSpecificInfo        [9] TPShortMessageSpecificInfo        OPTIONAL,
 *     tPProtocolIdentifier        [10] TPProtocolIdentifier            OPTIONAL,
 *     tPDataCodingScheme            [11] TPDataCodingScheme            OPTIONAL,
 *     tPValidityPeriod            [12] TPValidityPeriod            OPTIONAL,
 *     extensions                [13] Extensions {bound}            OPTIONAL,
 *     ...,
 *     smsReferenceNumber            [14] CallReferenceNumber            OPTIONAL,
 *     mscAddress                [15] ISDN-AddressString            OPTIONAL,
 *     sgsn-Number                [16] ISDN-AddressString            OPTIONAL,
 *     ms-Classmark2            [17] MS-Classmark2                OPTIONAL,
 *     gPRSMSClass            [18] GPRSMSClass                OPTIONAL,
 *     iMEI                [19] IMEI                    OPTIONAL,
 *     calledPartyNumber            [20] ISDN-AddressString            OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class InitialDPSMSArg {
    constructor (
        /**
         * @summary `serviceKey`.
         * @public
         * @readonly
         */
        readonly serviceKey: ServiceKey,
        /**
         * @summary `destinationSubscriberNumber`.
         * @public
         * @readonly
         */
        readonly destinationSubscriberNumber: OPTIONAL<CalledPartyBCDNumber>,
        /**
         * @summary `callingPartyNumber`.
         * @public
         * @readonly
         */
        readonly callingPartyNumber: OPTIONAL<SMS_AddressString>,
        /**
         * @summary `eventTypeSMS`.
         * @public
         * @readonly
         */
        readonly eventTypeSMS: OPTIONAL<EventTypeSMS>,
        /**
         * @summary `iMSI`.
         * @public
         * @readonly
         */
        readonly iMSI: OPTIONAL<IMSI>,
        /**
         * @summary `locationInformationMSC`.
         * @public
         * @readonly
         */
        readonly locationInformationMSC: OPTIONAL<LocationInformation>,
        /**
         * @summary `locationInformationGPRS`.
         * @public
         * @readonly
         */
        readonly locationInformationGPRS: OPTIONAL<LocationInformationGPRS>,
        /**
         * @summary `sMSCAddress`.
         * @public
         * @readonly
         */
        readonly sMSCAddress: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `timeAndTimezone`.
         * @public
         * @readonly
         */
        readonly timeAndTimezone: OPTIONAL<TimeAndTimezone>,
        /**
         * @summary `tPShortMessageSpecificInfo`.
         * @public
         * @readonly
         */
        readonly tPShortMessageSpecificInfo: OPTIONAL<TPShortMessageSpecificInfo>,
        /**
         * @summary `tPProtocolIdentifier`.
         * @public
         * @readonly
         */
        readonly tPProtocolIdentifier: OPTIONAL<TPProtocolIdentifier>,
        /**
         * @summary `tPDataCodingScheme`.
         * @public
         * @readonly
         */
        readonly tPDataCodingScheme: OPTIONAL<TPDataCodingScheme>,
        /**
         * @summary `tPValidityPeriod`.
         * @public
         * @readonly
         */
        readonly tPValidityPeriod: OPTIONAL<TPValidityPeriod>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary `smsReferenceNumber`.
         * @public
         * @readonly
         */
        readonly smsReferenceNumber: OPTIONAL<CallReferenceNumber>,
        /**
         * @summary `mscAddress`.
         * @public
         * @readonly
         */
        readonly mscAddress: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `sgsn_Number`.
         * @public
         * @readonly
         */
        readonly sgsn_Number: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `ms_Classmark2`.
         * @public
         * @readonly
         */
        readonly ms_Classmark2: OPTIONAL<MS_Classmark2>,
        /**
         * @summary `gPRSMSClass`.
         * @public
         * @readonly
         */
        readonly gPRSMSClass: OPTIONAL<GPRSMSClass>,
        /**
         * @summary `iMEI`.
         * @public
         * @readonly
         */
        readonly iMEI: OPTIONAL<IMEI>,
        /**
         * @summary `calledPartyNumber`.
         * @public
         * @readonly
         */
        readonly calledPartyNumber: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a InitialDPSMSArg
     * @description
     * 
     * This takes an `object` and converts it to a `InitialDPSMSArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitialDPSMSArg`.
     * @returns {InitialDPSMSArg}
     */
    public static _from_object (_o: { [_K in keyof (InitialDPSMSArg)]: (InitialDPSMSArg)[_K] }): InitialDPSMSArg {
        return new InitialDPSMSArg(_o.serviceKey, _o.destinationSubscriberNumber, _o.callingPartyNumber, _o.eventTypeSMS, _o.iMSI, _o.locationInformationMSC, _o.locationInformationGPRS, _o.sMSCAddress, _o.timeAndTimezone, _o.tPShortMessageSpecificInfo, _o.tPProtocolIdentifier, _o.tPDataCodingScheme, _o.tPValidityPeriod, _o.extensions, _o.smsReferenceNumber, _o.mscAddress, _o.sgsn_Number, _o.ms_Classmark2, _o.gPRSMSClass, _o.iMEI, _o.calledPartyNumber, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of InitialDPSMSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InitialDPSMSArg: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceKey", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("destinationSubscriberNumber", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("eventTypeSMS", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("iMSI", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("locationInformationMSC", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("locationInformationGPRS", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("sMSCAddress", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("timeAndTimezone", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("tPShortMessageSpecificInfo", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("tPProtocolIdentifier", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("tPDataCodingScheme", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("tPValidityPeriod", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 13), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of InitialDPSMSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InitialDPSMSArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InitialDPSMSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InitialDPSMSArg: $.ComponentSpec[] = [
    new $.ComponentSpec("smsReferenceNumber", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("mscAddress", true, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("sgsn-Number", true, $.hasTag(_TagClass.context, 16), undefined, undefined),
    new $.ComponentSpec("ms-Classmark2", true, $.hasTag(_TagClass.context, 17), undefined, undefined),
    new $.ComponentSpec("gPRSMSClass", true, $.hasTag(_TagClass.context, 18), undefined, undefined),
    new $.ComponentSpec("iMEI", true, $.hasTag(_TagClass.context, 19), undefined, undefined),
    new $.ComponentSpec("calledPartyNumber", true, $.hasTag(_TagClass.context, 20), undefined, undefined)
];

let _cached_decoder_for_InitialDPSMSArg: $.ASN1Decoder<InitialDPSMSArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitialDPSMSArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitialDPSMSArg (el: _Element): InitialDPSMSArg {
    if (!_cached_decoder_for_InitialDPSMSArg) { _cached_decoder_for_InitialDPSMSArg = function (el: _Element): InitialDPSMSArg {
    let serviceKey!: ServiceKey;
    let destinationSubscriberNumber: OPTIONAL<CalledPartyBCDNumber>;
    let callingPartyNumber: OPTIONAL<SMS_AddressString>;
    let eventTypeSMS: OPTIONAL<EventTypeSMS>;
    let iMSI: OPTIONAL<IMSI>;
    let locationInformationMSC: OPTIONAL<LocationInformation>;
    let locationInformationGPRS: OPTIONAL<LocationInformationGPRS>;
    let sMSCAddress: OPTIONAL<ISDN_AddressString>;
    let timeAndTimezone: OPTIONAL<TimeAndTimezone>;
    let tPShortMessageSpecificInfo: OPTIONAL<TPShortMessageSpecificInfo>;
    let tPProtocolIdentifier: OPTIONAL<TPProtocolIdentifier>;
    let tPDataCodingScheme: OPTIONAL<TPDataCodingScheme>;
    let tPValidityPeriod: OPTIONAL<TPValidityPeriod>;
    let extensions: OPTIONAL<Extensions>;
    let smsReferenceNumber: OPTIONAL<CallReferenceNumber>;
    let mscAddress: OPTIONAL<ISDN_AddressString>;
    let sgsn_Number: OPTIONAL<ISDN_AddressString>;
    let ms_Classmark2: OPTIONAL<MS_Classmark2>;
    let gPRSMSClass: OPTIONAL<GPRSMSClass>;
    let iMEI: OPTIONAL<IMEI>;
    let calledPartyNumber: OPTIONAL<ISDN_AddressString>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "serviceKey": (_el: _Element): void => { serviceKey = $._decode_implicit<ServiceKey>(() => _decode_ServiceKey)(_el); },
        "destinationSubscriberNumber": (_el: _Element): void => { destinationSubscriberNumber = $._decode_implicit<CalledPartyBCDNumber>(() => _decode_CalledPartyBCDNumber)(_el); },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_implicit<SMS_AddressString>(() => _decode_SMS_AddressString)(_el); },
        "eventTypeSMS": (_el: _Element): void => { eventTypeSMS = $._decode_implicit<EventTypeSMS>(() => _decode_EventTypeSMS)(_el); },
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "locationInformationMSC": (_el: _Element): void => { locationInformationMSC = $._decode_implicit<LocationInformation>(() => _decode_LocationInformation)(_el); },
        "locationInformationGPRS": (_el: _Element): void => { locationInformationGPRS = $._decode_implicit<LocationInformationGPRS>(() => _decode_LocationInformationGPRS)(_el); },
        "sMSCAddress": (_el: _Element): void => { sMSCAddress = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "timeAndTimezone": (_el: _Element): void => { timeAndTimezone = $._decode_implicit<TimeAndTimezone>(() => _decode_TimeAndTimezone)(_el); },
        "tPShortMessageSpecificInfo": (_el: _Element): void => { tPShortMessageSpecificInfo = $._decode_implicit<TPShortMessageSpecificInfo>(() => _decode_TPShortMessageSpecificInfo)(_el); },
        "tPProtocolIdentifier": (_el: _Element): void => { tPProtocolIdentifier = $._decode_implicit<TPProtocolIdentifier>(() => _decode_TPProtocolIdentifier)(_el); },
        "tPDataCodingScheme": (_el: _Element): void => { tPDataCodingScheme = $._decode_implicit<TPDataCodingScheme>(() => _decode_TPDataCodingScheme)(_el); },
        "tPValidityPeriod": (_el: _Element): void => { tPValidityPeriod = $._decode_implicit<TPValidityPeriod>(() => _decode_TPValidityPeriod)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "smsReferenceNumber": (_el: _Element): void => { smsReferenceNumber = $._decode_implicit<CallReferenceNumber>(() => _decode_CallReferenceNumber)(_el); },
        "mscAddress": (_el: _Element): void => { mscAddress = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "sgsn-Number": (_el: _Element): void => { sgsn_Number = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "ms-Classmark2": (_el: _Element): void => { ms_Classmark2 = $._decode_implicit<MS_Classmark2>(() => _decode_MS_Classmark2)(_el); },
        "gPRSMSClass": (_el: _Element): void => { gPRSMSClass = $._decode_implicit<GPRSMSClass>(() => _decode_GPRSMSClass)(_el); },
        "iMEI": (_el: _Element): void => { iMEI = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); },
        "calledPartyNumber": (_el: _Element): void => { calledPartyNumber = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InitialDPSMSArg,
        _extension_additions_list_spec_for_InitialDPSMSArg,
        _root_component_type_list_2_spec_for_InitialDPSMSArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new InitialDPSMSArg(
        serviceKey,
        destinationSubscriberNumber,
        callingPartyNumber,
        eventTypeSMS,
        iMSI,
        locationInformationMSC,
        locationInformationGPRS,
        sMSCAddress,
        timeAndTimezone,
        tPShortMessageSpecificInfo,
        tPProtocolIdentifier,
        tPDataCodingScheme,
        tPValidityPeriod,
        extensions,
        smsReferenceNumber,
        mscAddress,
        sgsn_Number,
        ms_Classmark2,
        gPRSMSClass,
        iMEI,
        calledPartyNumber,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_InitialDPSMSArg(el);
}

let _cached_encoder_for_InitialDPSMSArg: $.ASN1Encoder<InitialDPSMSArg> | null = null;

/**
 * @summary Encodes a(n) InitialDPSMSArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitialDPSMSArg, encoded as an ASN.1 Element.
 */
export
function _encode_InitialDPSMSArg (value: InitialDPSMSArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitialDPSMSArg) { _cached_encoder_for_InitialDPSMSArg = function (value: InitialDPSMSArg, elGetter: $.ASN1Encoder<InitialDPSMSArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ServiceKey, $.BER)(value.serviceKey, $.BER),
            /* IF_ABSENT  */ ((value.destinationSubscriberNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CalledPartyBCDNumber, $.BER)(value.destinationSubscriberNumber, $.BER)),
            /* IF_ABSENT  */ ((value.callingPartyNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SMS_AddressString, $.BER)(value.callingPartyNumber, $.BER)),
            /* IF_ABSENT  */ ((value.eventTypeSMS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_EventTypeSMS, $.BER)(value.eventTypeSMS, $.BER)),
            /* IF_ABSENT  */ ((value.iMSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_IMSI, $.BER)(value.iMSI, $.BER)),
            /* IF_ABSENT  */ ((value.locationInformationMSC === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_LocationInformation, $.BER)(value.locationInformationMSC, $.BER)),
            /* IF_ABSENT  */ ((value.locationInformationGPRS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_LocationInformationGPRS, $.BER)(value.locationInformationGPRS, $.BER)),
            /* IF_ABSENT  */ ((value.sMSCAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_ISDN_AddressString, $.BER)(value.sMSCAddress, $.BER)),
            /* IF_ABSENT  */ ((value.timeAndTimezone === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_TimeAndTimezone, $.BER)(value.timeAndTimezone, $.BER)),
            /* IF_ABSENT  */ ((value.tPShortMessageSpecificInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_TPShortMessageSpecificInfo, $.BER)(value.tPShortMessageSpecificInfo, $.BER)),
            /* IF_ABSENT  */ ((value.tPProtocolIdentifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_TPProtocolIdentifier, $.BER)(value.tPProtocolIdentifier, $.BER)),
            /* IF_ABSENT  */ ((value.tPDataCodingScheme === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_TPDataCodingScheme, $.BER)(value.tPDataCodingScheme, $.BER)),
            /* IF_ABSENT  */ ((value.tPValidityPeriod === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_TPValidityPeriod, $.BER)(value.tPValidityPeriod, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_Extensions, $.BER)(value.extensions, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.smsReferenceNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_CallReferenceNumber, $.BER)(value.smsReferenceNumber, $.BER)),
            /* IF_ABSENT  */ ((value.mscAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_ISDN_AddressString, $.BER)(value.mscAddress, $.BER)),
            /* IF_ABSENT  */ ((value.sgsn_Number === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_ISDN_AddressString, $.BER)(value.sgsn_Number, $.BER)),
            /* IF_ABSENT  */ ((value.ms_Classmark2 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_MS_Classmark2, $.BER)(value.ms_Classmark2, $.BER)),
            /* IF_ABSENT  */ ((value.gPRSMSClass === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_GPRSMSClass, $.BER)(value.gPRSMSClass, $.BER)),
            /* IF_ABSENT  */ ((value.iMEI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_IMEI, $.BER)(value.iMEI, $.BER)),
            /* IF_ABSENT  */ ((value.calledPartyNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_ISDN_AddressString, $.BER)(value.calledPartyNumber, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_InitialDPSMSArg(value, elGetter);
}


/* eslint-enable */
