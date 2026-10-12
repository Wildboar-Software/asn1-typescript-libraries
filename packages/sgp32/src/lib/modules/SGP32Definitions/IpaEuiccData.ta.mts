/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PendingNotificationList, _decode_PendingNotificationList, _encode_PendingNotificationList } from "../SGP32Definitions/PendingNotificationList.ta.mjs";
import { EuiccPackageResultList, _decode_EuiccPackageResultList, _encode_EuiccPackageResultList } from "../SGP32Definitions/EuiccPackageResultList.ta.mjs";
import { EUICCInfo1, _decode_EUICCInfo1, _encode_EUICCInfo1 } from "@wildboar/sgp22/RSPDefinitions";
import { EUICCInfo2, _decode_EUICCInfo2, _encode_EUICCInfo2 } from "../SGP32Definitions/EUICCInfo2.ta.mjs";
import { type Certificate, _decode_Certificate, _encode_Certificate } from "@wildboar/pki-stub";
import { type TransactionId, _decode_TransactionId, _encode_TransactionId } from "@wildboar/sgp22/RSPDefinitions";
import { IpaCapabilities, _decode_IpaCapabilities, _encode_IpaCapabilities } from "../SGP32Definitions/IpaCapabilities.ta.mjs";
import { DeviceInfo, _decode_DeviceInfo, _encode_DeviceInfo } from "@wildboar/sgp22/RSPDefinitions";


/**
 * @summary IpaEuiccData
 * @description
 * 
 * Requested IPA and eUICC data that this IPA supports. Items that were not
 * requested, and requested items the IPA does not support, are absent. An IPA
 * with `minimizeEsipaBytes` SHOULD place each pending Notification in
 * `notificationsList` in the compact form of section 5.14.7. If
 * `eimTransactionId` was in the request, it SHALL be copied here. SGP.32 v1.2,
 * sections 2.11.1.2 and 2.11.2.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IpaEuiccData ::= SEQUENCE {
 *     notificationsList [0] PendingNotificationList OPTIONAL, -- Tag 'A0'
 *     defaultSmdpAddress [1] UTF8String OPTIONAL, -- Tag '81'
 *     euiccPackageResultList [2] EuiccPackageResultList OPTIONAL, -- Tag 'A2'
 *     euiccInfo1 [32] EUICCInfo1 OPTIONAL, -- Tag 'BF20'
 *     euiccInfo2 [34] EUICCInfo2 OPTIONAL, -- Tag 'BF22'
 *     rootSmdsAddress [3] UTF8String OPTIONAL, -- Tag '83'
 *     associationToken [4] INTEGER OPTIONAL, -- Tag '84'
 *     eumCertificate [5] Certificate OPTIONAL, -- Tag 'A5'
 *     euiccCertificate [6] Certificate OPTIONAL, -- Tag 'A6'
 *     eimTransactionId [7] TransactionId OPTIONAL, -- Tag '87'
 *     ipaCapabilities [8] IpaCapabilities OPTIONAL, -- Tag 'A8'
 *     deviceInfo [9] DeviceInfo OPTIONAL -- Tag 'A9'
 * }
 * ```
 * 
 * @class
 */
export
class IpaEuiccData {
    constructor (
        /**
         * @summary `notificationsList`.
         * @description
         * Tag `'A0'`. Returned when that tag was requested. With no
         * `searchCriteriaNotification`, include every Notification stored in the
         * eUICC. With `seqNumber`, include the Notification with that sequence number
         * when one is stored. With `profileManagementOperation`, include every
         * Notification of a type whose bit is 1. An IPA with `minimizeEsipaBytes`
         * SHOULD use the compact form from section 5.14.7 for each Notification.
         * SGP.32 v1.2, sections 2.11.1.2 and 2.11.2.2.
         * @public
         * @readonly
         */
        readonly notificationsList: OPTIONAL<PendingNotificationList>,
        /**
         * @summary `defaultSmdpAddress`.
         * @description
         * Tag `'81'`. Default SM-DP+ address, as defined in SGP.22. SGP.22 v3.1
         * section 1.5 defines a Default SM-DP+ as an SM-DP+ contacted by a
         * pre-provisioned address on the eUICC. Include this when `'81'` was requested
         * and the IPA supports the item. SGP.32 v1.2, section 2.11.1.2.
         * @public
         * @readonly
         */
        readonly defaultSmdpAddress: OPTIONAL<UTF8String>,
        /**
         * @summary `euiccPackageResultList`.
         * @description
         * Tag `'A2'`. Returned when that tag was requested. With no
         * `searchCriteriaEuiccPackageResult`, include every eUICC Package Result
         * stored in the eUICC. With `seqNumber`, include the result with that sequence
         * number when one is stored. SGP.32 v1.2, section 2.11.1.2.
         * @public
         * @readonly
         */
        readonly euiccPackageResultList: OPTIONAL<EuiccPackageResultList>,
        /**
         * @summary `euiccInfo1`.
         * @description
         * Tag `'BF20'`, from ES10b.GetEUICCInfo. An IPA with `minimizeEsipaBytes`
         * SHALL support returning it. Include it when `'BF20'` was requested and the
         * IPA supports the item. SGP.32 v1.2, sections 2.11.1.2 and 5.9.2.
         * @public
         * @readonly
         */
        readonly euiccInfo1: OPTIONAL<EUICCInfo1>,
        /**
         * @summary `euiccInfo2`.
         * @description
         * Tag `'BF22'`. SGP.32 section 5.9.2 replaces the SGP.22 EUICCInfo2 and
         * extends it for IoT. Within that object, `iotSpecificInfo` SHALL be present
         * and `ipaMode` is mandatory for SGP.32. An IPA with `minimizeEsipaBytes`
         * SHALL support returning `euiccInfo2`. Include it when `'BF22'` was requested
         * and the IPA supports the item. SGP.32 v1.2, sections 2.11.1.2 and 5.9.2.
         * @public
         * @readonly
         */
        readonly euiccInfo2: OPTIONAL<EUICCInfo2>,
        /**
         * @summary `rootSmdsAddress`.
         * @description
         * Tag `'83'`. Root SM-DS address, as defined in SGP.22. SGP.22 v3.1 section
         * 1.5 defines a Root SM-DS as a central access point for finding Events from
         * one or more SM-DP+ entities. Include this when `'83'` was requested and the
         * IPA supports the item. SGP.32 v1.2, section 2.11.1.2.
         * @public
         * @readonly
         */
        readonly rootSmdsAddress: OPTIONAL<UTF8String>,
        /**
         * @summary `associationToken`.
         * @description
         * Tag `'84'`. The eUICC's association token for this eIM, when one is
         * configured. The token is one global counter per eUICC: it starts at zero,
         * the first issued value is 1, and it advances on each request. No mechanism,
         * including eUICC Memory Reset, resets it. If this tag was requested and no
         * token is configured for the eIM, this object SHALL be absent. The IPA SHALL
         * support providing a configured token. SGP.32 v1.2, sections 2.11.1 and
         * 2.11.2.2.
         * @public
         * @readonly
         */
        readonly associationToken: OPTIONAL<INTEGER>,
        /**
         * @summary `eumCertificate`.
         * @description
         * Tag `'A5'`. EUM certificate, as defined in SGP.22, chosen with
         * `euiccCiPKIdentifierToBeUsed` or, when that is absent, the first
         * `euiccCiPKIdListForSigning` entry. An IPA with `minimizeEsipaBytes` SHALL
         * support returning it. Include it when `'A5'` was requested and the IPA
         * supports the item. SGP.32 v1.2, sections 2.11.1.2 and 5.9.10.
         * @public
         * @readonly
         */
        readonly eumCertificate: OPTIONAL<Certificate>,
        /**
         * @summary `euiccCertificate`.
         * @description
         * Tag `'A6'`. eUICC certificate, as defined in SGP.22, chosen with the same CI
         * Public Key Identifier rules as `eumCertificate`. An IPA with
         * `minimizeEsipaBytes` SHALL support returning it. Include it when `'A6'` was
         * requested and the IPA supports the item. SGP.32 v1.2, sections 2.11.1.2 and
         * 5.9.10.
         * @public
         * @readonly
         */
        readonly euiccCertificate: OPTIONAL<Certificate>,
        /**
         * @summary `eimTransactionId`.
         * @description
         * Tag `'87'`. Present when the request included `eimTransactionId`. The IPA
         * SHALL return the same value. SGP.32 v1.2, section 2.11.2.2.
         * @public
         * @readonly
         */
        readonly eimTransactionId: OPTIONAL<TransactionId>,
        /**
         * @summary `ipaCapabilities`.
         * @description
         * Tag `'A8'`. IPA Capabilities from section 4.1. The IPA SHALL support
         * providing them. Include them when `'A8'` was requested. SGP.32 v1.2,
         * sections 2.11.1.2 and 4.1.
         * @public
         * @readonly
         */
        readonly ipaCapabilities: OPTIONAL<IpaCapabilities>,
        /**
         * @summary `deviceInfo`.
         * @description
         * Tag `'A9'`. Device Information as defined in SGP.22 section 4.2. SGP.22 v3.1
         * section 4.2 says the SM-DP+ uses it for a Device eligibility check. It
         * includes the TAC, every device capability the Device supports, an optional
         * IMEI, optional preferred languages, Device Test Mode, and conditional LPA
         * RSP capabilities. An IPA with `eimCtxParams1Generation` SHALL support
         * returning it. Include it when `'A9'` was requested and the IPA supports the
         * item. SGP.32 v1.2, sections 2.11.1.2 and 4.1.
         * @public
         * @readonly
         */
        readonly deviceInfo: OPTIONAL<DeviceInfo>
    ) {}

    /**
     * @summary Restructures an object into a IpaEuiccData
     * @description
     * 
     * This takes an `object` and converts it to a `IpaEuiccData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IpaEuiccData`.
     * @returns {IpaEuiccData}
     */
    public static _from_object (_o: { [_K in keyof (IpaEuiccData)]: (IpaEuiccData)[_K] }): IpaEuiccData {
        return new IpaEuiccData(_o.notificationsList, _o.defaultSmdpAddress, _o.euiccPackageResultList, _o.euiccInfo1, _o.euiccInfo2, _o.rootSmdsAddress, _o.associationToken, _o.eumCertificate, _o.euiccCertificate, _o.eimTransactionId, _o.ipaCapabilities, _o.deviceInfo);
    }


}

/**
 * @summary The Leading Root Component Types of IpaEuiccData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IpaEuiccData: $.ComponentSpec[] = [
    new $.ComponentSpec("notificationsList", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("defaultSmdpAddress", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("euiccPackageResultList", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("euiccInfo1", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("euiccInfo2", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("rootSmdsAddress", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("associationToken", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("eumCertificate", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("euiccCertificate", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("eimTransactionId", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("ipaCapabilities", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("deviceInfo", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of IpaEuiccData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IpaEuiccData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IpaEuiccData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IpaEuiccData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IpaEuiccData: $.ASN1Decoder<IpaEuiccData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IpaEuiccData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IpaEuiccData (el: _Element): IpaEuiccData {
    if (!_cached_decoder_for_IpaEuiccData) { _cached_decoder_for_IpaEuiccData = function (el: _Element): IpaEuiccData {
    let notificationsList: OPTIONAL<PendingNotificationList>;
    let defaultSmdpAddress: OPTIONAL<UTF8String>;
    let euiccPackageResultList: OPTIONAL<EuiccPackageResultList>;
    let euiccInfo1: OPTIONAL<EUICCInfo1>;
    let euiccInfo2: OPTIONAL<EUICCInfo2>;
    let rootSmdsAddress: OPTIONAL<UTF8String>;
    let associationToken: OPTIONAL<INTEGER>;
    let eumCertificate: OPTIONAL<Certificate>;
    let euiccCertificate: OPTIONAL<Certificate>;
    let eimTransactionId: OPTIONAL<TransactionId>;
    let ipaCapabilities: OPTIONAL<IpaCapabilities>;
    let deviceInfo: OPTIONAL<DeviceInfo>;
    const callbacks: $.DecodingMap = {
        "notificationsList": (_el: _Element): void => { notificationsList = $._decode_implicit<PendingNotificationList>(() => _decode_PendingNotificationList)(_el); },
        "defaultSmdpAddress": (_el: _Element): void => { defaultSmdpAddress = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "euiccPackageResultList": (_el: _Element): void => { euiccPackageResultList = $._decode_implicit<EuiccPackageResultList>(() => _decode_EuiccPackageResultList)(_el); },
        "euiccInfo1": (_el: _Element): void => { euiccInfo1 = $._decode_implicit<EUICCInfo1>(() => _decode_EUICCInfo1)(_el); },
        "euiccInfo2": (_el: _Element): void => { euiccInfo2 = $._decode_implicit<EUICCInfo2>(() => _decode_EUICCInfo2)(_el); },
        "rootSmdsAddress": (_el: _Element): void => { rootSmdsAddress = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "associationToken": (_el: _Element): void => { associationToken = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "eumCertificate": (_el: _Element): void => { eumCertificate = $._decode_implicit<Certificate>(() => _decode_Certificate)(_el); },
        "euiccCertificate": (_el: _Element): void => { euiccCertificate = $._decode_implicit<Certificate>(() => _decode_Certificate)(_el); },
        "eimTransactionId": (_el: _Element): void => { eimTransactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(_el); },
        "ipaCapabilities": (_el: _Element): void => { ipaCapabilities = $._decode_implicit<IpaCapabilities>(() => _decode_IpaCapabilities)(_el); },
        "deviceInfo": (_el: _Element): void => { deviceInfo = $._decode_implicit<DeviceInfo>(() => _decode_DeviceInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IpaEuiccData,
        _extension_additions_list_spec_for_IpaEuiccData,
        _root_component_type_list_2_spec_for_IpaEuiccData,
        undefined,
    );
    return new IpaEuiccData(
        notificationsList,
        defaultSmdpAddress,
        euiccPackageResultList,
        euiccInfo1,
        euiccInfo2,
        rootSmdsAddress,
        associationToken,
        eumCertificate,
        euiccCertificate,
        eimTransactionId,
        ipaCapabilities,
        deviceInfo
    );
}; }
    return _cached_decoder_for_IpaEuiccData(el);
}

let _cached_encoder_for_IpaEuiccData: $.ASN1Encoder<IpaEuiccData> | null = null;

/**
 * @summary Encodes a(n) IpaEuiccData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IpaEuiccData, encoded as an ASN.1 Element.
 */
export
function _encode_IpaEuiccData (value: IpaEuiccData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IpaEuiccData) { _cached_encoder_for_IpaEuiccData = function (value: IpaEuiccData): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.notificationsList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_PendingNotificationList, $.BER)(value.notificationsList, $.BER)),
            /* IF_ABSENT  */ ((value.defaultSmdpAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.defaultSmdpAddress, $.BER)),
            /* IF_ABSENT  */ ((value.euiccPackageResultList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_EuiccPackageResultList, $.BER)(value.euiccPackageResultList, $.BER)),
            /* IF_ABSENT  */ ((value.euiccInfo1 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 32, () => _encode_EUICCInfo1, $.BER)(value.euiccInfo1, $.BER)),
            /* IF_ABSENT  */ ((value.euiccInfo2 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 34, () => _encode_EUICCInfo2, $.BER)(value.euiccInfo2, $.BER)),
            /* IF_ABSENT  */ ((value.rootSmdsAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.rootSmdsAddress, $.BER)),
            /* IF_ABSENT  */ ((value.associationToken === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.associationToken, $.BER)),
            /* IF_ABSENT  */ ((value.eumCertificate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_Certificate, $.BER)(value.eumCertificate, $.BER)),
            /* IF_ABSENT  */ ((value.euiccCertificate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_Certificate, $.BER)(value.euiccCertificate, $.BER)),
            /* IF_ABSENT  */ ((value.eimTransactionId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_TransactionId, $.BER)(value.eimTransactionId, $.BER)),
            /* IF_ABSENT  */ ((value.ipaCapabilities === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_IpaCapabilities, $.BER)(value.ipaCapabilities, $.BER)),
            /* IF_ABSENT  */ ((value.deviceInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_DeviceInfo, $.BER)(value.deviceInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IpaEuiccData(value, elGetter);
}


/* eslint-enable */
