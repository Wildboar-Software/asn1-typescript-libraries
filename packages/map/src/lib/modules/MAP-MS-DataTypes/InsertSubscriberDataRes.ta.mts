/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { BearerServiceList, _decode_BearerServiceList, _encode_BearerServiceList } from "../MAP-MS-DataTypes/BearerServiceList.ta.mjs";
import { Ext_SupportedFeatures, _decode_Ext_SupportedFeatures, _encode_Ext_SupportedFeatures } from "../MAP-MS-DataTypes/Ext-SupportedFeatures.ta.mjs";
import { ODB_GeneralData, _decode_ODB_GeneralData, _encode_ODB_GeneralData } from "../MAP-MS-DataTypes/ODB-GeneralData.ta.mjs";
import { OfferedCamel4CSIs, _decode_OfferedCamel4CSIs, _encode_OfferedCamel4CSIs } from "../MAP-MS-DataTypes/OfferedCamel4CSIs.ta.mjs";
import { RegionalSubscriptionResponse, _decode_RegionalSubscriptionResponse, _encode_RegionalSubscriptionResponse, _enum_for_RegionalSubscriptionResponse } from "../MAP-MS-DataTypes/RegionalSubscriptionResponse.ta.mjs";
import { SupportedCamelPhases, _decode_SupportedCamelPhases, _encode_SupportedCamelPhases } from "../MAP-MS-DataTypes/SupportedCamelPhases.ta.mjs";
import { SupportedFeatures, _decode_SupportedFeatures, _encode_SupportedFeatures } from "../MAP-MS-DataTypes/SupportedFeatures.ta.mjs";
import { TeleserviceList, _decode_TeleserviceList, _encode_TeleserviceList } from "../MAP-MS-DataTypes/TeleserviceList.ta.mjs";
import { SS_List, _decode_SS_List, _encode_SS_List } from "../MAP-SS-DataTypes/SS-List.ta.mjs";


/**
 * @summary InsertSubscriberDataRes
 * @description
 *
 * Result of MAP_INSERT_SUBSCRIBER_DATA. The VLR/SGSN/IWF returns unsupported
 * teleservice, bearer-service, SS-Code, and ODB categories,
 * regional-subscription outcome, and offered CAMEL phases/CSIs. (3GPP TS 29.002
 * V19.1.0 clauses 8.8.1 and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InsertSubscriberDataRes ::= SEQUENCE {
 *     teleserviceList    [1] TeleserviceList    OPTIONAL,
 *     bearerServiceList    [2] BearerServiceList    OPTIONAL,
 *     ss-List    [3] SS-List    OPTIONAL,
 *     odb-GeneralData    [4] ODB-GeneralData    OPTIONAL,
 *     regionalSubscriptionResponse    [5] RegionalSubscriptionResponse    OPTIONAL,
 *     supportedCamelPhases    [6] SupportedCamelPhases    OPTIONAL,
 *     extensionContainer    [7] ExtensionContainer    OPTIONAL,
 *     ... ,
 *     offeredCamel4CSIs    [8] OfferedCamel4CSIs    OPTIONAL,
 *     supportedFeatures    [9] SupportedFeatures    OPTIONAL,
 *     ext-SupportedFeatures    [10] Ext-SupportedFeatures    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class InsertSubscriberDataRes {
    constructor (
        /**
         * @summary `teleserviceList`.
         * @description
         *
         * Extensible teleservices from the request that the VLR/SGSN/IWF does
         * not support/allocate. (3GPP TS 29.002 V19.1.0 clause 8.8.1.3)
         *
         * @public
         * @readonly
         */
        readonly teleserviceList: OPTIONAL<TeleserviceList>,
        /**
         * @summary `bearerServiceList`.
         * @description
         *
         * Extensible bearer services from the request that the VLR does not
         * support/allocate. (3GPP TS 29.002 V19.1.0 clause 8.8.1.3)
         *
         * @public
         * @readonly
         */
        readonly bearerServiceList: OPTIONAL<BearerServiceList>,
        /**
         * @summary `ss_List`.
         * @description
         *
         * SS-Codes provided to the subscriber but not supported/allocated by
         * the VLR/SGSN/IWF. (3GPP TS 29.002 V19.1.0 clause 8.8.1.3)
         *
         * @public
         * @readonly
         */
        readonly ss_List: OPTIONAL<SS_List>,
        /**
         * @summary `odb_GeneralData`.
         * @description
         *
         * ODB general categories not supported/allocated by the VLR/SGSN/IWF.
         * (3GPP TS 29.002 V19.1.0 clause 8.8.1.3)
         *
         * @public
         * @readonly
         */
        readonly odb_GeneralData: OPTIONAL<ODB_GeneralData>,
        /**
         * @summary `regionalSubscriptionResponse`.
         * @description
         *
         * MSC/SGSN/MME area entirely restricted, too many zone codes, zone code
         * conflict, or regional subscription not supported. (3GPP TS 29.002
         * V19.1.0 clauses 8.8.1.3 and 7.6.3.12)
         *
         * @public
         * @readonly
         */
        readonly regionalSubscriptionResponse: OPTIONAL<RegionalSubscriptionResponse>,
        /**
         * @summary `supportedCamelPhases`.
         * @description
         *
         * CAMEL phases supported in the VLR or SGSN (3GPP TS 23.078). A node
         * supporting none may omit this. An IWF shall omit it. (3GPP TS 29.002
         * V19.1.0 clause 8.8.1.3)
         *
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
         * @summary `offeredCamel4CSIs`.
         * @description
         *
         * CAMEL phase 4 CSIs offered in the VMSC/VLR or SGSN. An IWF shall omit
         * this. (3GPP TS 29.002 V19.1.0 clauses 8.8.1.3 and 7.6.3.36D)
         *
         * @public
         * @readonly
         */
        readonly offeredCamel4CSIs: OPTIONAL<OfferedCamel4CSIs>,
        /**
         * @summary `supportedFeatures`.
         * @description
         *
         * IWF forwards feature-support indications received from MME or SGSN
         * via S6a/S6d. (3GPP TS 29.002 V19.1.0 clause 8.8.1.3)
         *
         * @public
         * @readonly
         */
        readonly supportedFeatures: OPTIONAL<SupportedFeatures>,
        /**
         * @summary `ext_SupportedFeatures`.
         * @description
         *
         * Extended feature-support indications forwarded by an IWF from
         * S6a/S6d. (3GPP TS 29.002 V19.1.0 clause 8.8.1.3)
         *
         * @public
         * @readonly
         */
        readonly ext_SupportedFeatures: OPTIONAL<Ext_SupportedFeatures>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a InsertSubscriberDataRes
     * @description
     * 
     * This takes an `object` and converts it to a `InsertSubscriberDataRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InsertSubscriberDataRes`.
     * @returns {InsertSubscriberDataRes}
     */
    public static _from_object (_o: { [_K in keyof (InsertSubscriberDataRes)]: (InsertSubscriberDataRes)[_K] }): InsertSubscriberDataRes {
        return new InsertSubscriberDataRes(_o.teleserviceList, _o.bearerServiceList, _o.ss_List, _o.odb_GeneralData, _o.regionalSubscriptionResponse, _o.supportedCamelPhases, _o.extensionContainer, _o.offeredCamel4CSIs, _o.supportedFeatures, _o.ext_SupportedFeatures, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `regionalSubscriptionResponse`
         * @public
         * @static
         */

    public static _enum_for_regionalSubscriptionResponse = _enum_for_RegionalSubscriptionResponse;
}

/**
 * @summary The Leading Root Component Types of InsertSubscriberDataRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InsertSubscriberDataRes: $.ComponentSpec[] = [
    new $.ComponentSpec("teleserviceList", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("bearerServiceList", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("ss-List", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("odb-GeneralData", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("regionalSubscriptionResponse", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("supportedCamelPhases", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of InsertSubscriberDataRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InsertSubscriberDataRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InsertSubscriberDataRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InsertSubscriberDataRes: $.ComponentSpec[] = [
    new $.ComponentSpec("offeredCamel4CSIs", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("supportedFeatures", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("ext-SupportedFeatures", true, $.hasTag(_TagClass.context, 10))
];

let _cached_decoder_for_InsertSubscriberDataRes: $.ASN1Decoder<InsertSubscriberDataRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InsertSubscriberDataRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InsertSubscriberDataRes (el: _Element): InsertSubscriberDataRes {
    if (!_cached_decoder_for_InsertSubscriberDataRes) { _cached_decoder_for_InsertSubscriberDataRes = function (el: _Element): InsertSubscriberDataRes {
    let teleserviceList: OPTIONAL<TeleserviceList> = undefined;
    let bearerServiceList: OPTIONAL<BearerServiceList> = undefined;
    let ss_List: OPTIONAL<SS_List> = undefined;
    let odb_GeneralData: OPTIONAL<ODB_GeneralData> = undefined;
    let regionalSubscriptionResponse: OPTIONAL<RegionalSubscriptionResponse> = undefined;
    let supportedCamelPhases: OPTIONAL<SupportedCamelPhases> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let offeredCamel4CSIs: OPTIONAL<OfferedCamel4CSIs> = undefined;
    let supportedFeatures: OPTIONAL<SupportedFeatures> = undefined;
    let ext_SupportedFeatures: OPTIONAL<Ext_SupportedFeatures> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "teleserviceList": (_el: _Element): void => { teleserviceList = $._decode_implicit<TeleserviceList>(() => _decode_TeleserviceList)(_el); },
        "bearerServiceList": (_el: _Element): void => { bearerServiceList = $._decode_implicit<BearerServiceList>(() => _decode_BearerServiceList)(_el); },
        "ss-List": (_el: _Element): void => { ss_List = $._decode_implicit<SS_List>(() => _decode_SS_List)(_el); },
        "odb-GeneralData": (_el: _Element): void => { odb_GeneralData = $._decode_implicit<ODB_GeneralData>(() => _decode_ODB_GeneralData)(_el); },
        "regionalSubscriptionResponse": (_el: _Element): void => { regionalSubscriptionResponse = $._decode_implicit<RegionalSubscriptionResponse>(() => _decode_RegionalSubscriptionResponse)(_el); },
        "supportedCamelPhases": (_el: _Element): void => { supportedCamelPhases = $._decode_implicit<SupportedCamelPhases>(() => _decode_SupportedCamelPhases)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "offeredCamel4CSIs": (_el: _Element): void => { offeredCamel4CSIs = $._decode_implicit<OfferedCamel4CSIs>(() => _decode_OfferedCamel4CSIs)(_el); },
        "supportedFeatures": (_el: _Element): void => { supportedFeatures = $._decode_implicit<SupportedFeatures>(() => _decode_SupportedFeatures)(_el); },
        "ext-SupportedFeatures": (_el: _Element): void => { ext_SupportedFeatures = $._decode_implicit<Ext_SupportedFeatures>(() => _decode_Ext_SupportedFeatures)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InsertSubscriberDataRes,
        _extension_additions_list_spec_for_InsertSubscriberDataRes,
        _root_component_type_list_2_spec_for_InsertSubscriberDataRes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new InsertSubscriberDataRes(
        teleserviceList,
        bearerServiceList,
        ss_List,
        odb_GeneralData,
        regionalSubscriptionResponse,
        supportedCamelPhases,
        extensionContainer,
        offeredCamel4CSIs,
        supportedFeatures,
        ext_SupportedFeatures,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_InsertSubscriberDataRes(el);
}

let _cached_encoder_for_InsertSubscriberDataRes: $.ASN1Encoder<InsertSubscriberDataRes> | null = null;

/**
 * @summary Encodes a(n) InsertSubscriberDataRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InsertSubscriberDataRes, encoded as an ASN.1 Element.
 */
export
function _encode_InsertSubscriberDataRes (value: InsertSubscriberDataRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InsertSubscriberDataRes) { _cached_encoder_for_InsertSubscriberDataRes = function (value: InsertSubscriberDataRes, elGetter: $.ASN1Encoder<InsertSubscriberDataRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.teleserviceList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_TeleserviceList, $.BER)(value.teleserviceList, $.BER)),
            /* IF_ABSENT  */ ((value.bearerServiceList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_BearerServiceList, $.BER)(value.bearerServiceList, $.BER)),
            /* IF_ABSENT  */ ((value.ss_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_SS_List, $.BER)(value.ss_List, $.BER)),
            /* IF_ABSENT  */ ((value.odb_GeneralData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ODB_GeneralData, $.BER)(value.odb_GeneralData, $.BER)),
            /* IF_ABSENT  */ ((value.regionalSubscriptionResponse === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_RegionalSubscriptionResponse, $.BER)(value.regionalSubscriptionResponse, $.BER)),
            /* IF_ABSENT  */ ((value.supportedCamelPhases === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_SupportedCamelPhases, $.BER)(value.supportedCamelPhases, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.offeredCamel4CSIs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_OfferedCamel4CSIs, $.BER)(value.offeredCamel4CSIs, $.BER)),
            /* IF_ABSENT  */ ((value.supportedFeatures === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_SupportedFeatures, $.BER)(value.supportedFeatures, $.BER)),
            /* IF_ABSENT  */ ((value.ext_SupportedFeatures === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_Ext_SupportedFeatures, $.BER)(value.ext_SupportedFeatures, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_InsertSubscriberDataRes(value, elGetter);
}


/* eslint-enable */
