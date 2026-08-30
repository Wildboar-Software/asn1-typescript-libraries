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
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { Category, _decode_Category, _encode_Category } from "../MAP-MS-DataTypes/Category.ta.mjs";
// export { Category, _decode_Category, _encode_Category } from "../MAP-MS-DataTypes/Category.ta.mjs";
import { SubscriberStatus, _enum_for_SubscriberStatus, SubscriberStatus_serviceGranted /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceGranted /* IMPORTED_SHORT_ENUMERATION_ITEM */, SubscriberStatus_operatorDeterminedBarring /* IMPORTED_LONG_ENUMERATION_ITEM */, operatorDeterminedBarring /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SubscriberStatus, _encode_SubscriberStatus } from "../MAP-MS-DataTypes/SubscriberStatus.ta.mjs";
// export { SubscriberStatus, _enum_for_SubscriberStatus, SubscriberStatus_serviceGranted /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceGranted /* IMPORTED_SHORT_ENUMERATION_ITEM */, SubscriberStatus_operatorDeterminedBarring /* IMPORTED_LONG_ENUMERATION_ITEM */, operatorDeterminedBarring /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SubscriberStatus, _encode_SubscriberStatus } from "../MAP-MS-DataTypes/SubscriberStatus.ta.mjs";
import { BearerServiceList, _decode_BearerServiceList, _encode_BearerServiceList } from "../MAP-MS-DataTypes/BearerServiceList.ta.mjs";
// export { BearerServiceList, _decode_BearerServiceList, _encode_BearerServiceList } from "../MAP-MS-DataTypes/BearerServiceList.ta.mjs";
import { TeleserviceList, _decode_TeleserviceList, _encode_TeleserviceList } from "../MAP-MS-DataTypes/TeleserviceList.ta.mjs";
// export { TeleserviceList, _decode_TeleserviceList, _encode_TeleserviceList } from "../MAP-MS-DataTypes/TeleserviceList.ta.mjs";
import { Ext_SS_InfoList, _decode_Ext_SS_InfoList, _encode_Ext_SS_InfoList } from "../MAP-MS-DataTypes/Ext-SS-InfoList.ta.mjs";
// export { Ext_SS_InfoList, _decode_Ext_SS_InfoList, _encode_Ext_SS_InfoList } from "../MAP-MS-DataTypes/Ext-SS-InfoList.ta.mjs";
import { ODB_Data, _decode_ODB_Data, _encode_ODB_Data } from "../MAP-MS-DataTypes/ODB-Data.ta.mjs";
// export { ODB_Data, _decode_ODB_Data, _encode_ODB_Data } from "../MAP-MS-DataTypes/ODB-Data.ta.mjs";
import { ZoneCodeList, _decode_ZoneCodeList, _encode_ZoneCodeList } from "../MAP-MS-DataTypes/ZoneCodeList.ta.mjs";
// export { ZoneCodeList, _decode_ZoneCodeList, _encode_ZoneCodeList } from "../MAP-MS-DataTypes/ZoneCodeList.ta.mjs";
import { VBSDataList, _decode_VBSDataList, _encode_VBSDataList } from "../MAP-MS-DataTypes/VBSDataList.ta.mjs";
// export { VBSDataList, _decode_VBSDataList, _encode_VBSDataList } from "../MAP-MS-DataTypes/VBSDataList.ta.mjs";
import { VGCSDataList, _decode_VGCSDataList, _encode_VGCSDataList } from "../MAP-MS-DataTypes/VGCSDataList.ta.mjs";
// export { VGCSDataList, _decode_VGCSDataList, _encode_VGCSDataList } from "../MAP-MS-DataTypes/VGCSDataList.ta.mjs";
import { VlrCamelSubscriptionInfo, _decode_VlrCamelSubscriptionInfo, _encode_VlrCamelSubscriptionInfo } from "../MAP-MS-DataTypes/VlrCamelSubscriptionInfo.ta.mjs";
// export { VlrCamelSubscriptionInfo, _decode_VlrCamelSubscriptionInfo, _encode_VlrCamelSubscriptionInfo } from "../MAP-MS-DataTypes/VlrCamelSubscriptionInfo.ta.mjs";


/**
 * @summary SubscriberData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriberData ::= SEQUENCE {
 *     msisdn    [1] ISDN-AddressString    OPTIONAL,
 *     category    [2] Category    OPTIONAL,
 *     subscriberStatus    [3] SubscriberStatus    OPTIONAL,
 *     bearerServiceList    [4] BearerServiceList    OPTIONAL,
 *     -- The exception handling for reception of unsupported / not allocated
 *     -- bearerServiceCodes is defined in clause 8.8.1
 *     teleserviceList    [6] TeleserviceList    OPTIONAL,
 *     -- The exception handling for reception of unsupported / not allocated
 *     -- teleserviceCodes is defined in clause 8.8.1
 *     provisionedSS    [7] Ext-SS-InfoList    OPTIONAL,
 *     odb-Data    [8] ODB-Data    OPTIONAL,
 *     roamingRestrictionDueToUnsupportedFeature  [9] NULL    OPTIONAL,
 *     regionalSubscriptionData    [10] ZoneCodeList    OPTIONAL,
 *     vbsSubscriptionData    [11] VBSDataList    OPTIONAL,
 *     vgcsSubscriptionData    [12] VGCSDataList    OPTIONAL,
 *     vlrCamelSubscriptionInfo    [13] VlrCamelSubscriptionInfo    OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class SubscriberData {
    constructor (
        /**
         * @summary `msisdn`.
         * @public
         * @readonly
         */
        readonly msisdn: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `category`.
         * @public
         * @readonly
         */
        readonly category: OPTIONAL<Category>,
        /**
         * @summary `subscriberStatus`.
         * @public
         * @readonly
         */
        readonly subscriberStatus: OPTIONAL<SubscriberStatus>,
        /**
         * @summary `bearerServiceList`.
         * @public
         * @readonly
         */
        readonly bearerServiceList: OPTIONAL<BearerServiceList>,
        /**
         * @summary `teleserviceList`.
         * @public
         * @readonly
         */
        readonly teleserviceList: OPTIONAL<TeleserviceList>,
        /**
         * @summary `provisionedSS`.
         * @public
         * @readonly
         */
        readonly provisionedSS: OPTIONAL<Ext_SS_InfoList>,
        /**
         * @summary `odb_Data`.
         * @public
         * @readonly
         */
        readonly odb_Data: OPTIONAL<ODB_Data>,
        /**
         * @summary `roamingRestrictionDueToUnsupportedFeature`.
         * @public
         * @readonly
         */
        readonly roamingRestrictionDueToUnsupportedFeature: OPTIONAL<NULL>,
        /**
         * @summary `regionalSubscriptionData`.
         * @public
         * @readonly
         */
        readonly regionalSubscriptionData: OPTIONAL<ZoneCodeList>,
        /**
         * @summary `vbsSubscriptionData`.
         * @public
         * @readonly
         */
        readonly vbsSubscriptionData: OPTIONAL<VBSDataList>,
        /**
         * @summary `vgcsSubscriptionData`.
         * @public
         * @readonly
         */
        readonly vgcsSubscriptionData: OPTIONAL<VGCSDataList>,
        /**
         * @summary `vlrCamelSubscriptionInfo`.
         * @public
         * @readonly
         */
        readonly vlrCamelSubscriptionInfo: OPTIONAL<VlrCamelSubscriptionInfo>
    ) {}

    /**
     * @summary Restructures an object into a SubscriberData
     * @description
     * 
     * This takes an `object` and converts it to a `SubscriberData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubscriberData`.
     * @returns {SubscriberData}
     */
    public static _from_object (_o: { [_K in keyof (SubscriberData)]: (SubscriberData)[_K] }): SubscriberData {
        return new SubscriberData(_o.msisdn, _o.category, _o.subscriberStatus, _o.bearerServiceList, _o.teleserviceList, _o.provisionedSS, _o.odb_Data, _o.roamingRestrictionDueToUnsupportedFeature, _o.regionalSubscriptionData, _o.vbsSubscriptionData, _o.vgcsSubscriptionData, _o.vlrCamelSubscriptionInfo);
    }

        /**
         * @summary The enum used as the type of the component `subscriberStatus`
         * @public
         * @static
         */

    public static _enum_for_subscriberStatus = _enum_for_SubscriberStatus;
}

/**
 * @summary The Leading Root Component Types of SubscriberData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SubscriberData: $.ComponentSpec[] = [
    new $.ComponentSpec("msisdn", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("category", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("subscriberStatus", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("bearerServiceList", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("teleserviceList", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("provisionedSS", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("odb-Data", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("roamingRestrictionDueToUnsupportedFeature", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("regionalSubscriptionData", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("vbsSubscriptionData", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("vgcsSubscriptionData", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("vlrCamelSubscriptionInfo", true, $.hasTag(_TagClass.context, 13), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SubscriberData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SubscriberData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SubscriberData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SubscriberData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SubscriberData: $.ASN1Decoder<SubscriberData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubscriberData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubscriberData (el: _Element): SubscriberData {
    if (!_cached_decoder_for_SubscriberData) { _cached_decoder_for_SubscriberData = function (el: _Element): SubscriberData {
    let msisdn: OPTIONAL<ISDN_AddressString>;
    let category: OPTIONAL<Category>;
    let subscriberStatus: OPTIONAL<SubscriberStatus>;
    let bearerServiceList: OPTIONAL<BearerServiceList>;
    let teleserviceList: OPTIONAL<TeleserviceList>;
    let provisionedSS: OPTIONAL<Ext_SS_InfoList>;
    let odb_Data: OPTIONAL<ODB_Data>;
    let roamingRestrictionDueToUnsupportedFeature: OPTIONAL<NULL>;
    let regionalSubscriptionData: OPTIONAL<ZoneCodeList>;
    let vbsSubscriptionData: OPTIONAL<VBSDataList>;
    let vgcsSubscriptionData: OPTIONAL<VGCSDataList>;
    let vlrCamelSubscriptionInfo: OPTIONAL<VlrCamelSubscriptionInfo>;
    const callbacks: $.DecodingMap = {
        "msisdn": (_el: _Element): void => { msisdn = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "category": (_el: _Element): void => { category = $._decode_implicit<Category>(() => _decode_Category)(_el); },
        "subscriberStatus": (_el: _Element): void => { subscriberStatus = $._decode_implicit<SubscriberStatus>(() => _decode_SubscriberStatus)(_el); },
        "bearerServiceList": (_el: _Element): void => { bearerServiceList = $._decode_implicit<BearerServiceList>(() => _decode_BearerServiceList)(_el); },
        "teleserviceList": (_el: _Element): void => { teleserviceList = $._decode_implicit<TeleserviceList>(() => _decode_TeleserviceList)(_el); },
        "provisionedSS": (_el: _Element): void => { provisionedSS = $._decode_implicit<Ext_SS_InfoList>(() => _decode_Ext_SS_InfoList)(_el); },
        "odb-Data": (_el: _Element): void => { odb_Data = $._decode_implicit<ODB_Data>(() => _decode_ODB_Data)(_el); },
        "roamingRestrictionDueToUnsupportedFeature": (_el: _Element): void => { roamingRestrictionDueToUnsupportedFeature = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "regionalSubscriptionData": (_el: _Element): void => { regionalSubscriptionData = $._decode_implicit<ZoneCodeList>(() => _decode_ZoneCodeList)(_el); },
        "vbsSubscriptionData": (_el: _Element): void => { vbsSubscriptionData = $._decode_implicit<VBSDataList>(() => _decode_VBSDataList)(_el); },
        "vgcsSubscriptionData": (_el: _Element): void => { vgcsSubscriptionData = $._decode_implicit<VGCSDataList>(() => _decode_VGCSDataList)(_el); },
        "vlrCamelSubscriptionInfo": (_el: _Element): void => { vlrCamelSubscriptionInfo = $._decode_implicit<VlrCamelSubscriptionInfo>(() => _decode_VlrCamelSubscriptionInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SubscriberData,
        _extension_additions_list_spec_for_SubscriberData,
        _root_component_type_list_2_spec_for_SubscriberData,
        undefined,
    );
    return new SubscriberData(
        msisdn,
        category,
        subscriberStatus,
        bearerServiceList,
        teleserviceList,
        provisionedSS,
        odb_Data,
        roamingRestrictionDueToUnsupportedFeature,
        regionalSubscriptionData,
        vbsSubscriptionData,
        vgcsSubscriptionData,
        vlrCamelSubscriptionInfo
    );
}; }
    return _cached_decoder_for_SubscriberData(el);
}

let _cached_encoder_for_SubscriberData: $.ASN1Encoder<SubscriberData> | null = null;

/**
 * @summary Encodes a(n) SubscriberData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscriberData, encoded as an ASN.1 Element.
 */
export
function _encode_SubscriberData (value: SubscriberData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubscriberData) { _cached_encoder_for_SubscriberData = function (value: SubscriberData, elGetter: $.ASN1Encoder<SubscriberData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.msisdn === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ISDN_AddressString, $.BER)(value.msisdn, $.BER)),
            /* IF_ABSENT  */ ((value.category === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Category, $.BER)(value.category, $.BER)),
            /* IF_ABSENT  */ ((value.subscriberStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_SubscriberStatus, $.BER)(value.subscriberStatus, $.BER)),
            /* IF_ABSENT  */ ((value.bearerServiceList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_BearerServiceList, $.BER)(value.bearerServiceList, $.BER)),
            /* IF_ABSENT  */ ((value.teleserviceList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_TeleserviceList, $.BER)(value.teleserviceList, $.BER)),
            /* IF_ABSENT  */ ((value.provisionedSS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_Ext_SS_InfoList, $.BER)(value.provisionedSS, $.BER)),
            /* IF_ABSENT  */ ((value.odb_Data === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_ODB_Data, $.BER)(value.odb_Data, $.BER)),
            /* IF_ABSENT  */ ((value.roamingRestrictionDueToUnsupportedFeature === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeNull, $.BER)(value.roamingRestrictionDueToUnsupportedFeature, $.BER)),
            /* IF_ABSENT  */ ((value.regionalSubscriptionData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_ZoneCodeList, $.BER)(value.regionalSubscriptionData, $.BER)),
            /* IF_ABSENT  */ ((value.vbsSubscriptionData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_VBSDataList, $.BER)(value.vbsSubscriptionData, $.BER)),
            /* IF_ABSENT  */ ((value.vgcsSubscriptionData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_VGCSDataList, $.BER)(value.vgcsSubscriptionData, $.BER)),
            /* IF_ABSENT  */ ((value.vlrCamelSubscriptionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_VlrCamelSubscriptionInfo, $.BER)(value.vlrCamelSubscriptionInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SubscriberData(value, elGetter);
}


/* eslint-enable */
