/* eslint-disable */
import {
    OPTIONAL,
    NULL,
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
import { type AccessPointName, _decode_AccessPointName, _encode_AccessPointName } from "../CAP-datatypes/AccessPointName.ta.mjs";
import { EndUserAddress, _decode_EndUserAddress, _encode_EndUserAddress } from "../CAP-datatypes/EndUserAddress.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../CAP-datatypes/Extensions.ta.mjs";
import { GPRSEventType, _decode_GPRSEventType, _encode_GPRSEventType } from "../CAP-datatypes/GPRSEventType.ta.mjs";
import { LocationInformationGPRS, _decode_LocationInformationGPRS, _encode_LocationInformationGPRS } from "../CAP-datatypes/LocationInformationGPRS.ta.mjs";
import { PDPInitiationType, _decode_PDPInitiationType, _encode_PDPInitiationType } from "../CAP-datatypes/PDPInitiationType.ta.mjs";
import { QualityOfService, _decode_QualityOfService, _encode_QualityOfService } from "../CAP-datatypes/QualityOfService.ta.mjs";
import { type SGSNCapabilities, _decode_SGSNCapabilities, _encode_SGSNCapabilities } from "../CAP-datatypes/SGSNCapabilities.ta.mjs";
import { type TimeAndTimezone, _decode_TimeAndTimezone, _encode_TimeAndTimezone } from "../CAP-datatypes/TimeAndTimezone.ta.mjs";
import { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../Core-INAP-CS1-DataTypes/ServiceKey.ta.mjs";
// export { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../Core-INAP-CS1-DataTypes/ServiceKey.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { GPRSMSClass, _decode_GPRSMSClass, _encode_GPRSMSClass } from "../MAP-MS-DataTypes/GPRSMSClass.ta.mjs";
// export { GPRSMSClass, _decode_GPRSMSClass, _encode_GPRSMSClass } from "../MAP-MS-DataTypes/GPRSMSClass.ta.mjs";
import { RAIdentity, _decode_RAIdentity, _encode_RAIdentity } from "../MAP-CommonDataTypes/RAIdentity.ta.mjs";
// export { RAIdentity, _decode_RAIdentity, _encode_RAIdentity } from "../MAP-CommonDataTypes/RAIdentity.ta.mjs";
import { GPRSChargingID, _decode_GPRSChargingID, _encode_GPRSChargingID } from "../MAP-MS-DataTypes/GPRSChargingID.ta.mjs";
// export { GPRSChargingID, _decode_GPRSChargingID, _encode_GPRSChargingID } from "../MAP-MS-DataTypes/GPRSChargingID.ta.mjs";
import { GSN_Address, _decode_GSN_Address, _encode_GSN_Address } from "../MAP-CommonDataTypes/GSN-Address.ta.mjs";
// export { GSN_Address, _decode_GSN_Address, _encode_GSN_Address } from "../MAP-CommonDataTypes/GSN-Address.ta.mjs";
import { IMEI, _decode_IMEI, _encode_IMEI } from "../MAP-CommonDataTypes/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../MAP-CommonDataTypes/IMEI.ta.mjs";


/**
 * @summary InitialDPGPRSArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitialDPGPRSArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     serviceKey                [0] ServiceKey,
 *     gPRSEventType            [1] GPRSEventType,
 *     mSISDN                [2] ISDN-AddressString,
 *     iMSI                [3] IMSI,
 *     timeAndTimeZone            [4] TimeAndTimezone {bound},
 *     gPRSMSClass                [5] GPRSMSClass                OPTIONAL,
 *     endUserAddress            [6] EndUserAddress {bound}            OPTIONAL,
 *     qualityOfService            [7] QualityOfService            OPTIONAL,
 *     accessPointName            [8] AccessPointName{bound}            OPTIONAL,
 *     routeingAreaIdentity        [9] RAIdentity                OPTIONAL,
 *     chargingID                [10] GPRSChargingID                OPTIONAL,
 *     sGSNCapabilities            [11] SGSNCapabilities            OPTIONAL,
 *     locationInformationGPRS        [12] LocationInformationGPRS        OPTIONAL,
 *     pDPInitiationType            [13] PDPInitiationType            OPTIONAL,
 *     extensions                [14] Extensions {bound}            OPTIONAL,
 *     ...,
 *     gGSNAddress                [15] GSN-Address                OPTIONAL,
 *     secondaryPDP-context        [16] NULL                    OPTIONAL,
 *     iMEI                [17] IMEI                    OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class InitialDPGPRSArg {
    constructor (
        /**
         * @summary `serviceKey`.
         * @public
         * @readonly
         */
        readonly serviceKey: ServiceKey,
        /**
         * @summary `gPRSEventType`.
         * @public
         * @readonly
         */
        readonly gPRSEventType: GPRSEventType,
        /**
         * @summary `mSISDN`.
         * @public
         * @readonly
         */
        readonly mSISDN: ISDN_AddressString,
        /**
         * @summary `iMSI`.
         * @public
         * @readonly
         */
        readonly iMSI: IMSI,
        /**
         * @summary `timeAndTimeZone`.
         * @public
         * @readonly
         */
        readonly timeAndTimeZone: TimeAndTimezone,
        /**
         * @summary `gPRSMSClass`.
         * @public
         * @readonly
         */
        readonly gPRSMSClass: OPTIONAL<GPRSMSClass>,
        /**
         * @summary `endUserAddress`.
         * @public
         * @readonly
         */
        readonly endUserAddress: OPTIONAL<EndUserAddress>,
        /**
         * @summary `qualityOfService`.
         * @public
         * @readonly
         */
        readonly qualityOfService: OPTIONAL<QualityOfService>,
        /**
         * @summary `accessPointName`.
         * @public
         * @readonly
         */
        readonly accessPointName: OPTIONAL<AccessPointName>,
        /**
         * @summary `routeingAreaIdentity`.
         * @public
         * @readonly
         */
        readonly routeingAreaIdentity: OPTIONAL<RAIdentity>,
        /**
         * @summary `chargingID`.
         * @public
         * @readonly
         */
        readonly chargingID: OPTIONAL<GPRSChargingID>,
        /**
         * @summary `sGSNCapabilities`.
         * @public
         * @readonly
         */
        readonly sGSNCapabilities: OPTIONAL<SGSNCapabilities>,
        /**
         * @summary `locationInformationGPRS`.
         * @public
         * @readonly
         */
        readonly locationInformationGPRS: OPTIONAL<LocationInformationGPRS>,
        /**
         * @summary `pDPInitiationType`.
         * @public
         * @readonly
         */
        readonly pDPInitiationType: OPTIONAL<PDPInitiationType>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary `gGSNAddress`.
         * @public
         * @readonly
         */
        readonly gGSNAddress: OPTIONAL<GSN_Address>,
        /**
         * @summary `secondaryPDP_context`.
         * @public
         * @readonly
         */
        readonly secondaryPDP_context: OPTIONAL<NULL>,
        /**
         * @summary `iMEI`.
         * @public
         * @readonly
         */
        readonly iMEI: OPTIONAL<IMEI>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a InitialDPGPRSArg
     * @description
     * 
     * This takes an `object` and converts it to a `InitialDPGPRSArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitialDPGPRSArg`.
     * @returns {InitialDPGPRSArg}
     */
    public static _from_object (_o: { [_K in keyof (InitialDPGPRSArg)]: (InitialDPGPRSArg)[_K] }): InitialDPGPRSArg {
        return new InitialDPGPRSArg(_o.serviceKey, _o.gPRSEventType, _o.mSISDN, _o.iMSI, _o.timeAndTimeZone, _o.gPRSMSClass, _o.endUserAddress, _o.qualityOfService, _o.accessPointName, _o.routeingAreaIdentity, _o.chargingID, _o.sGSNCapabilities, _o.locationInformationGPRS, _o.pDPInitiationType, _o.extensions, _o.gGSNAddress, _o.secondaryPDP_context, _o.iMEI, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of InitialDPGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InitialDPGPRSArg: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceKey", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("gPRSEventType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mSISDN", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iMSI", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("timeAndTimeZone", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("gPRSMSClass", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("endUserAddress", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("qualityOfService", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("accessPointName", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("routeingAreaIdentity", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("chargingID", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("sGSNCapabilities", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("locationInformationGPRS", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("pDPInitiationType", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 14))
];

/**
 * @summary The Trailing Root Component Types of InitialDPGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InitialDPGPRSArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InitialDPGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InitialDPGPRSArg: $.ComponentSpec[] = [
    new $.ComponentSpec("gGSNAddress", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("secondaryPDP-context", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("iMEI", true, $.hasTag(_TagClass.context, 17))
];

let _cached_decoder_for_InitialDPGPRSArg: $.ASN1Decoder<InitialDPGPRSArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitialDPGPRSArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitialDPGPRSArg (el: _Element): InitialDPGPRSArg {
    if (!_cached_decoder_for_InitialDPGPRSArg) { _cached_decoder_for_InitialDPGPRSArg = function (el: _Element): InitialDPGPRSArg {
    let serviceKey!: ServiceKey;
    let gPRSEventType!: GPRSEventType;
    let mSISDN!: ISDN_AddressString;
    let iMSI!: IMSI;
    let timeAndTimeZone!: TimeAndTimezone;
    let gPRSMSClass: OPTIONAL<GPRSMSClass>;
    let endUserAddress: OPTIONAL<EndUserAddress>;
    let qualityOfService: OPTIONAL<QualityOfService>;
    let accessPointName: OPTIONAL<AccessPointName>;
    let routeingAreaIdentity: OPTIONAL<RAIdentity>;
    let chargingID: OPTIONAL<GPRSChargingID>;
    let sGSNCapabilities: OPTIONAL<SGSNCapabilities>;
    let locationInformationGPRS: OPTIONAL<LocationInformationGPRS>;
    let pDPInitiationType: OPTIONAL<PDPInitiationType>;
    let extensions: OPTIONAL<Extensions>;
    let gGSNAddress: OPTIONAL<GSN_Address>;
    let secondaryPDP_context: OPTIONAL<NULL>;
    let iMEI: OPTIONAL<IMEI>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "serviceKey": (_el: _Element): void => { serviceKey = $._decode_implicit<ServiceKey>(() => _decode_ServiceKey)(_el); },
        "gPRSEventType": (_el: _Element): void => { gPRSEventType = $._decode_implicit<GPRSEventType>(() => _decode_GPRSEventType)(_el); },
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "timeAndTimeZone": (_el: _Element): void => { timeAndTimeZone = $._decode_implicit<TimeAndTimezone>(() => _decode_TimeAndTimezone)(_el); },
        "gPRSMSClass": (_el: _Element): void => { gPRSMSClass = $._decode_implicit<GPRSMSClass>(() => _decode_GPRSMSClass)(_el); },
        "endUserAddress": (_el: _Element): void => { endUserAddress = $._decode_implicit<EndUserAddress>(() => _decode_EndUserAddress)(_el); },
        "qualityOfService": (_el: _Element): void => { qualityOfService = $._decode_implicit<QualityOfService>(() => _decode_QualityOfService)(_el); },
        "accessPointName": (_el: _Element): void => { accessPointName = $._decode_implicit<AccessPointName>(() => _decode_AccessPointName)(_el); },
        "routeingAreaIdentity": (_el: _Element): void => { routeingAreaIdentity = $._decode_implicit<RAIdentity>(() => _decode_RAIdentity)(_el); },
        "chargingID": (_el: _Element): void => { chargingID = $._decode_implicit<GPRSChargingID>(() => _decode_GPRSChargingID)(_el); },
        "sGSNCapabilities": (_el: _Element): void => { sGSNCapabilities = $._decode_implicit<SGSNCapabilities>(() => _decode_SGSNCapabilities)(_el); },
        "locationInformationGPRS": (_el: _Element): void => { locationInformationGPRS = $._decode_implicit<LocationInformationGPRS>(() => _decode_LocationInformationGPRS)(_el); },
        "pDPInitiationType": (_el: _Element): void => { pDPInitiationType = $._decode_implicit<PDPInitiationType>(() => _decode_PDPInitiationType)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "gGSNAddress": (_el: _Element): void => { gGSNAddress = $._decode_implicit<GSN_Address>(() => _decode_GSN_Address)(_el); },
        "secondaryPDP-context": (_el: _Element): void => { secondaryPDP_context = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "iMEI": (_el: _Element): void => { iMEI = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InitialDPGPRSArg,
        _extension_additions_list_spec_for_InitialDPGPRSArg,
        _root_component_type_list_2_spec_for_InitialDPGPRSArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new InitialDPGPRSArg(
        serviceKey,
        gPRSEventType,
        mSISDN,
        iMSI,
        timeAndTimeZone,
        gPRSMSClass,
        endUserAddress,
        qualityOfService,
        accessPointName,
        routeingAreaIdentity,
        chargingID,
        sGSNCapabilities,
        locationInformationGPRS,
        pDPInitiationType,
        extensions,
        gGSNAddress,
        secondaryPDP_context,
        iMEI,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_InitialDPGPRSArg(el);
}

let _cached_encoder_for_InitialDPGPRSArg: $.ASN1Encoder<InitialDPGPRSArg> | null = null;

/**
 * @summary Encodes a(n) InitialDPGPRSArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitialDPGPRSArg, encoded as an ASN.1 Element.
 */
export
function _encode_InitialDPGPRSArg (value: InitialDPGPRSArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitialDPGPRSArg) { _cached_encoder_for_InitialDPGPRSArg = function (value: InitialDPGPRSArg): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ServiceKey, $.BER)(value.serviceKey, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_GPRSEventType, $.BER)(value.gPRSEventType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_ISDN_AddressString, $.BER)(value.mSISDN, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_IMSI, $.BER)(value.iMSI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_TimeAndTimezone, $.BER)(value.timeAndTimeZone, $.BER),
            /* IF_ABSENT  */ ((value.gPRSMSClass === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_GPRSMSClass, $.BER)(value.gPRSMSClass, $.BER)),
            /* IF_ABSENT  */ ((value.endUserAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_EndUserAddress, $.BER)(value.endUserAddress, $.BER)),
            /* IF_ABSENT  */ ((value.qualityOfService === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_QualityOfService, $.BER)(value.qualityOfService, $.BER)),
            /* IF_ABSENT  */ ((value.accessPointName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_AccessPointName, $.BER)(value.accessPointName, $.BER)),
            /* IF_ABSENT  */ ((value.routeingAreaIdentity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_RAIdentity, $.BER)(value.routeingAreaIdentity, $.BER)),
            /* IF_ABSENT  */ ((value.chargingID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_GPRSChargingID, $.BER)(value.chargingID, $.BER)),
            /* IF_ABSENT  */ ((value.sGSNCapabilities === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_SGSNCapabilities, $.BER)(value.sGSNCapabilities, $.BER)),
            /* IF_ABSENT  */ ((value.locationInformationGPRS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_LocationInformationGPRS, $.BER)(value.locationInformationGPRS, $.BER)),
            /* IF_ABSENT  */ ((value.pDPInitiationType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_PDPInitiationType, $.BER)(value.pDPInitiationType, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_Extensions, $.BER)(value.extensions, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.gGSNAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_GSN_Address, $.BER)(value.gGSNAddress, $.BER)),
            /* IF_ABSENT  */ ((value.secondaryPDP_context === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => $._encodeNull, $.BER)(value.secondaryPDP_context, $.BER)),
            /* IF_ABSENT  */ ((value.iMEI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_IMEI, $.BER)(value.iMEI, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_InitialDPGPRSArg(value, elGetter);
}


/* eslint-enable */
