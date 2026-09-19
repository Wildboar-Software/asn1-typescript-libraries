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
import { PendingNotificationList, _decode_PendingNotificationList, _encode_PendingNotificationList } from "../SGP32Definitions/PendingNotificationList.ta.mjs";
// export { PendingNotificationList, _decode_PendingNotificationList, _encode_PendingNotificationList } from "../SGP32Definitions/PendingNotificationList.ta.mjs";
import { EuiccPackageResultList, _decode_EuiccPackageResultList, _encode_EuiccPackageResultList } from "../SGP32Definitions/EuiccPackageResultList.ta.mjs";
// export { EuiccPackageResultList, _decode_EuiccPackageResultList, _encode_EuiccPackageResultList } from "../SGP32Definitions/EuiccPackageResultList.ta.mjs";
import { EUICCInfo1, _decode_EUICCInfo1, _encode_EUICCInfo1 } from "../RSPDefinitions/EUICCInfo1.ta.mjs";
// export { EUICCInfo1, _decode_EUICCInfo1, _encode_EUICCInfo1 } from "../RSPDefinitions/EUICCInfo1.ta.mjs";
import { EUICCInfo2, _decode_EUICCInfo2, _encode_EUICCInfo2 } from "../SGP32Definitions/EUICCInfo2.ta.mjs";
// export { EUICCInfo2, _decode_EUICCInfo2, _encode_EUICCInfo2 } from "../SGP32Definitions/EUICCInfo2.ta.mjs";
import { Certificate, _decode_Certificate, _encode_Certificate } from "../PKIX1Explicit88/Certificate.ta.mjs";
// export { Certificate, _decode_Certificate, _encode_Certificate } from "../PKIX1Explicit88/Certificate.ta.mjs";
import { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";
// export { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";
import { IpaCapabilities, _decode_IpaCapabilities, _encode_IpaCapabilities } from "../SGP32Definitions/IpaCapabilities.ta.mjs";
// export { IpaCapabilities, _decode_IpaCapabilities, _encode_IpaCapabilities } from "../SGP32Definitions/IpaCapabilities.ta.mjs";
import { DeviceInfo, _decode_DeviceInfo, _encode_DeviceInfo } from "../RSPDefinitions/DeviceInfo.ta.mjs";
// export { DeviceInfo, _decode_DeviceInfo, _encode_DeviceInfo } from "../RSPDefinitions/DeviceInfo.ta.mjs";


/**
 * @summary IpaEuiccData
 * @description
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
         * @public
         * @readonly
         */
        readonly notificationsList: OPTIONAL<PendingNotificationList>,
        /**
         * @summary `defaultSmdpAddress`.
         * @public
         * @readonly
         */
        readonly defaultSmdpAddress: OPTIONAL<UTF8String>,
        /**
         * @summary `euiccPackageResultList`.
         * @public
         * @readonly
         */
        readonly euiccPackageResultList: OPTIONAL<EuiccPackageResultList>,
        /**
         * @summary `euiccInfo1`.
         * @public
         * @readonly
         */
        readonly euiccInfo1: OPTIONAL<EUICCInfo1>,
        /**
         * @summary `euiccInfo2`.
         * @public
         * @readonly
         */
        readonly euiccInfo2: OPTIONAL<EUICCInfo2>,
        /**
         * @summary `rootSmdsAddress`.
         * @public
         * @readonly
         */
        readonly rootSmdsAddress: OPTIONAL<UTF8String>,
        /**
         * @summary `associationToken`.
         * @public
         * @readonly
         */
        readonly associationToken: OPTIONAL<INTEGER>,
        /**
         * @summary `eumCertificate`.
         * @public
         * @readonly
         */
        readonly eumCertificate: OPTIONAL<Certificate>,
        /**
         * @summary `euiccCertificate`.
         * @public
         * @readonly
         */
        readonly euiccCertificate: OPTIONAL<Certificate>,
        /**
         * @summary `eimTransactionId`.
         * @public
         * @readonly
         */
        readonly eimTransactionId: OPTIONAL<TransactionId>,
        /**
         * @summary `ipaCapabilities`.
         * @public
         * @readonly
         */
        readonly ipaCapabilities: OPTIONAL<IpaCapabilities>,
        /**
         * @summary `deviceInfo`.
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
    if (!_cached_encoder_for_IpaEuiccData) { _cached_encoder_for_IpaEuiccData = function (value: IpaEuiccData, elGetter: $.ASN1Encoder<IpaEuiccData>): _Element {
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
