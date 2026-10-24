/* eslint-disable */
import {
    NULL,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallReferenceNumber, _decode_CallReferenceNumber, _encode_CallReferenceNumber } from "../MAP-CH-DataTypes/CallReferenceNumber.ta.mjs";
import { SuppressionOfAnnouncement, _decode_SuppressionOfAnnouncement, _encode_SuppressionOfAnnouncement } from "../MAP-CH-DataTypes/SuppressionOfAnnouncement.ta.mjs";
import { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../MAP-CommonDataTypes/AlertingPattern.ta.mjs";
import { EMLPP_Priority, _decode_EMLPP_Priority, _encode_EMLPP_Priority } from "../MAP-CommonDataTypes/EMLPP-Priority.ta.mjs";
import { Ext_ExternalSignalInfo, _decode_Ext_ExternalSignalInfo, _encode_Ext_ExternalSignalInfo } from "../MAP-CommonDataTypes/Ext-ExternalSignalInfo.ta.mjs";
import { ExternalSignalInfo, _decode_ExternalSignalInfo, _encode_ExternalSignalInfo } from "../MAP-CommonDataTypes/ExternalSignalInfo.ta.mjs";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { LMSI, _decode_LMSI, _encode_LMSI } from "../MAP-CommonDataTypes/LMSI.ta.mjs";
import { PLMN_Id, _decode_PLMN_Id, _encode_PLMN_Id } from "../MAP-CommonDataTypes/PLMN-Id.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { OfferedCamel4CSIs, _decode_OfferedCamel4CSIs, _encode_OfferedCamel4CSIs } from "../MAP-MS-DataTypes/OfferedCamel4CSIs.ta.mjs";
import { PagingArea, _decode_PagingArea, _encode_PagingArea } from "../MAP-MS-DataTypes/PagingArea.ta.mjs";
import { SupportedCamelPhases, _decode_SupportedCamelPhases, _encode_SupportedCamelPhases } from "../MAP-MS-DataTypes/SupportedCamelPhases.ta.mjs";


/**
 * @summary ProvideRoamingNumberArg
 * @description
 *
 * Argument of MAP_PROVIDE_ROAMING_NUMBER: HLR to VLR, or old VLR to new VLR for
 * MT Roaming Forwarding (3GPP TS 29.002 V19.1.0 clauses 10.2 and 17.7.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProvideRoamingNumberArg ::= SEQUENCE {
 *     imsi    [0] IMSI,
 *     msc-Number    [1] ISDN-AddressString,
 *     msisdn    [2] ISDN-AddressString    type OPTIONAL,
 *     lmsi    [4] LMSI    type OPTIONAL,
 *     gsm-BearerCapability    [5] ExternalSignalInfo    type OPTIONAL,
 *     networkSignalInfo    [6] ExternalSignalInfo    type OPTIONAL,
 *     suppressionOfAnnouncement    [7] SuppressionOfAnnouncement    type OPTIONAL,
 *     gmsc-Address    [8] ISDN-AddressString    type OPTIONAL,
 *     callReferenceNumber    [9] CallReferenceNumber    type OPTIONAL,
 *     or-Interrogation    [10] NULL    type OPTIONAL,
 *     extensionContainer    [11] ExtensionContainer    type OPTIONAL,
 *     ... ,
 *     alertingPattern    [12] AlertingPattern    type OPTIONAL,
 *     ccbs-Call    [13] NULL    type OPTIONAL,
 *     supportedCamelPhasesInInterrogatingNode    [15] SupportedCamelPhases    type OPTIONAL,
 *     additionalSignalInfo    [14] Ext-ExternalSignalInfo    type OPTIONAL,
 *     orNotSupportedInGMSC    [16] NULL    type OPTIONAL,
 *     pre-pagingSupported    [17] NULL    type OPTIONAL,
 *     longFTN-Supported    [18]    NULL    type OPTIONAL,
 *     suppress-VT-CSI    [19]    NULL    type OPTIONAL,
 *     offeredCamel4CSIsInInterrogatingNode    [20] OfferedCamel4CSIs    type OPTIONAL,
 *     mtRoamingRetrySupported    [21] NULL    type OPTIONAL,
 *     pagingArea    [22] PagingArea    type OPTIONAL,
 *     callPriority    [23]    EMLPP-Priority    type OPTIONAL,
 *     mtrf-Indicator    [24] NULL    type OPTIONAL,
 *     oldMSC-Number    [25] ISDN-AddressString    type OPTIONAL,
 *     lastUsedLtePLMN-Id    [26] PLMN-Id    OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class ProvideRoamingNumberArg {
    /**
     * @summary `imsi`.
     * @description
     *
     * Called subscriber IMSI.
     *
     * @public
     * @readonly
     */
    public readonly imsi: IMSI;
    /**
     * @summary `msc_Number`.
     * @description
     *
     * MSC number.
     *
     * @public
     * @readonly
     */
    public readonly msc_Number: ISDN_AddressString;
    /**
     * @summary `msisdn`.
     * @description
     *
     * MSISDN if provided.
     *
     * @public
     * @readonly
     */
    public readonly msisdn?: OPTIONAL<ISDN_AddressString>;
    /**
     * @summary `lmsi`.
     * @description
     *
     * LMSI if available.
     *
     * @public
     * @readonly
     */
    public readonly lmsi?: OPTIONAL<LMSI>;
    /**
     * @summary `gsm_BearerCapability`.
     * @description
     *
     * GSM bearer capability.
     *
     * @public
     * @readonly
     */
    public readonly gsm_BearerCapability?: OPTIONAL<ExternalSignalInfo>;
    /**
     * @summary `networkSignalInfo`.
     * @description
     *
     * Network signalling info.
     *
     * @public
     * @readonly
     */
    public readonly networkSignalInfo?: OPTIONAL<ExternalSignalInfo>;
    /**
     * @summary `suppressionOfAnnouncement`.
     * @description
     *
     * Use and presence as in 3GPP TS 23.078.
     *
     * @public
     * @readonly
     */
    public readonly suppressionOfAnnouncement?: OPTIONAL<SuppressionOfAnnouncement>;
    /**
     * @summary `gmsc_Address`.
     * @description
     *
     * GMSC address.
     *
     * @public
     * @readonly
     */
    public readonly gmsc_Address?: OPTIONAL<ISDN_AddressString>;
    /**
     * @summary `callReferenceNumber`.
     * @description
     *
     * Use and presence as in 3GPP TS 23.078, Use and presence as in 3GPP TS
     * 23.079 and Use and presence as in 3GPP TS 23.018.
     *
     * @public
     * @readonly
     */
    public readonly callReferenceNumber?: OPTIONAL<CallReferenceNumber>;
    /**
     * @summary `or_Interrogation`.
     * @description
     *
     * Use and presence as in 3GPP TS 23.079.
     *
     * @public
     * @readonly
     */
    public readonly or_Interrogation?: OPTIONAL<NULL>;
    /**
     * @summary `extensionContainer`.
     * @description
     *
     * Private or PCS extensions (3GPP TS 29.002 V19.1.0 clause 17.7.11).
     *
     * @public
     * @readonly
     */
    public readonly extensionContainer?: OPTIONAL<ExtensionContainer>;
    /**
     * @summary `alertingPattern`.
     * @description
     *
     * Use and presence as in 3GPP TS 23.018 and 3GPP TS 23.078.
     *
     * @public
     * @readonly
     */
    public readonly alertingPattern?: OPTIONAL<AlertingPattern>;
    /**
     * @summary `ccbs_Call`.
     * @description
     *
     * See 3GPP TS 23.093.
     *
     * @public
     * @readonly
     */
    public readonly ccbs_Call?: OPTIONAL<NULL>;
    /**
     * @summary `supportedCamelPhasesInInterrogatingNode`.
     * @description
     *
     * CAMEL phases in the interrogating node.
     *
     * @public
     * @readonly
     */
    public readonly supportedCamelPhasesInInterrogatingNode?: OPTIONAL<SupportedCamelPhases>;
    /**
     * @summary `additionalSignalInfo`.
     * @description
     *
     * See 3GPP TS 23.081 and 23.088.
     *
     * @public
     * @readonly
     */
    public readonly additionalSignalInfo?: OPTIONAL<Ext_ExternalSignalInfo>;
    /**
     * @summary `orNotSupportedInGMSC`.
     * @description
     *
     * OR not supported in GMSC.
     *
     * @public
     * @readonly
     */
    public readonly orNotSupportedInGMSC?: OPTIONAL<NULL>;
    /**
     * @summary `pre_pagingSupported`.
     * @description
     *
     * Use and presence as in 3GPP TS 23.018.
     *
     * @public
     * @readonly
     */
    public readonly pre_pagingSupported?: OPTIONAL<NULL>;
    /**
     * @summary `longFTN_Supported`.
     * @description
     *
     * Long FTN supported.
     *
     * @public
     * @readonly
     */
    public readonly longFTN_Supported?: OPTIONAL<NULL>;
    /**
     * @summary `suppress_VT_CSI`.
     * @description
     *
     * Use and presence as in 3GPP TS 23.078.
     *
     * @public
     * @readonly
     */
    public readonly suppress_VT_CSI?: OPTIONAL<NULL>;
    /**
     * @summary `offeredCamel4CSIsInInterrogatingNode`.
     * @description
     *
     * CAMEL4 CSIs in the interrogating node.
     *
     * @public
     * @readonly
     */
    public readonly offeredCamel4CSIsInInterrogatingNode?: OPTIONAL<OfferedCamel4CSIs>;
    /**
     * @summary `mtRoamingRetrySupported`.
     * @description
     *
     * Use and presence as in 3GPP TS 23.018 and 3GPP TS 23.012.
     *
     * @public
     * @readonly
     */
    public readonly mtRoamingRetrySupported?: OPTIONAL<NULL>;
    /**
     * @summary `pagingArea`.
     * @description
     *
     * Paging area.
     *
     * @public
     * @readonly
     */
    public readonly pagingArea?: OPTIONAL<PagingArea>;
    /**
     * @summary `callPriority`.
     * @description
     *
     * eMLPP call priority.
     *
     * @public
     * @readonly
     */
    public readonly callPriority?: OPTIONAL<EMLPP_Priority>;
    /**
     * @summary `mtrf_Indicator`.
     * @description
     *
     * MT Roaming Forwarding indicator.
     *
     * @public
     * @readonly
     */
    public readonly mtrf_Indicator?: OPTIONAL<NULL>;
    /**
     * @summary `oldMSC_Number`.
     * @description
     *
     * Old MSC number for MT Roaming Forwarding.
     *
     * @public
     * @readonly
     */
    public readonly oldMSC_Number?: OPTIONAL<ISDN_AddressString>;
    /**
     * @summary `lastUsedLtePLMN_Id`.
     * @description
     *
     * Last used LTE PLMN.
     *
     * @public
     * @readonly
     */
    public readonly lastUsedLtePLMN_Id?: OPTIONAL<PLMN_Id>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    public readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        imsi: IMSI,
        msc_Number: ISDN_AddressString,
        msisdn?: OPTIONAL<ISDN_AddressString>,
        lmsi?: OPTIONAL<LMSI>,
        gsm_BearerCapability?: OPTIONAL<ExternalSignalInfo>,
        networkSignalInfo?: OPTIONAL<ExternalSignalInfo>,
        suppressionOfAnnouncement?: OPTIONAL<SuppressionOfAnnouncement>,
        gmsc_Address?: OPTIONAL<ISDN_AddressString>,
        callReferenceNumber?: OPTIONAL<CallReferenceNumber>,
        or_Interrogation?: OPTIONAL<NULL>,
        extensionContainer?: OPTIONAL<ExtensionContainer>,
        alertingPattern?: OPTIONAL<AlertingPattern>,
        ccbs_Call?: OPTIONAL<NULL>,
        supportedCamelPhasesInInterrogatingNode?: OPTIONAL<SupportedCamelPhases>,
        additionalSignalInfo?: OPTIONAL<Ext_ExternalSignalInfo>,
        orNotSupportedInGMSC?: OPTIONAL<NULL>,
        pre_pagingSupported?: OPTIONAL<NULL>,
        longFTN_Supported?: OPTIONAL<NULL>,
        suppress_VT_CSI?: OPTIONAL<NULL>,
        offeredCamel4CSIsInInterrogatingNode?: OPTIONAL<OfferedCamel4CSIs>,
        mtRoamingRetrySupported?: OPTIONAL<NULL>,
        pagingArea?: OPTIONAL<PagingArea>,
        callPriority?: OPTIONAL<EMLPP_Priority>,
        mtrf_Indicator?: OPTIONAL<NULL>,
        oldMSC_Number?: OPTIONAL<ISDN_AddressString>,
        lastUsedLtePLMN_Id?: OPTIONAL<PLMN_Id>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.imsi = imsi;
        this.msc_Number = msc_Number;
        this.msisdn = msisdn;
        this.lmsi = lmsi;
        this.gsm_BearerCapability = gsm_BearerCapability;
        this.networkSignalInfo = networkSignalInfo;
        this.suppressionOfAnnouncement = suppressionOfAnnouncement;
        this.gmsc_Address = gmsc_Address;
        this.callReferenceNumber = callReferenceNumber;
        this.or_Interrogation = or_Interrogation;
        this.extensionContainer = extensionContainer;
        this.alertingPattern = alertingPattern;
        this.ccbs_Call = ccbs_Call;
        this.supportedCamelPhasesInInterrogatingNode = supportedCamelPhasesInInterrogatingNode;
        this.additionalSignalInfo = additionalSignalInfo;
        this.orNotSupportedInGMSC = orNotSupportedInGMSC;
        this.pre_pagingSupported = pre_pagingSupported;
        this.longFTN_Supported = longFTN_Supported;
        this.suppress_VT_CSI = suppress_VT_CSI;
        this.offeredCamel4CSIsInInterrogatingNode = offeredCamel4CSIsInInterrogatingNode;
        this.mtRoamingRetrySupported = mtRoamingRetrySupported;
        this.pagingArea = pagingArea;
        this.callPriority = callPriority;
        this.mtrf_Indicator = mtrf_Indicator;
        this.oldMSC_Number = oldMSC_Number;
        this.lastUsedLtePLMN_Id = lastUsedLtePLMN_Id;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ProvideRoamingNumberArg
     * @description
     * 
     * This takes an `object` and converts it to a `ProvideRoamingNumberArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProvideRoamingNumberArg`.
     * @returns {ProvideRoamingNumberArg}
     */
    public static _from_object (_o: { [_K in keyof (ProvideRoamingNumberArg)]: (ProvideRoamingNumberArg)[_K] }): ProvideRoamingNumberArg {
        return new ProvideRoamingNumberArg(_o.imsi, _o.msc_Number, _o.msisdn, _o.lmsi, _o.gsm_BearerCapability, _o.networkSignalInfo, _o.suppressionOfAnnouncement, _o.gmsc_Address, _o.callReferenceNumber, _o.or_Interrogation, _o.extensionContainer, _o.alertingPattern, _o.ccbs_Call, _o.supportedCamelPhasesInInterrogatingNode, _o.additionalSignalInfo, _o.orNotSupportedInGMSC, _o.pre_pagingSupported, _o.longFTN_Supported, _o.suppress_VT_CSI, _o.offeredCamel4CSIsInInterrogatingNode, _o.mtRoamingRetrySupported, _o.pagingArea, _o.callPriority, _o.mtrf_Indicator, _o.oldMSC_Number, _o.lastUsedLtePLMN_Id, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ProvideRoamingNumberArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProvideRoamingNumberArg: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("msc-Number", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("msisdn", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("lmsi", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("gsm-BearerCapability", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("networkSignalInfo", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("suppressionOfAnnouncement", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("gmsc-Address", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("callReferenceNumber", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("or-Interrogation", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of ProvideRoamingNumberArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProvideRoamingNumberArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProvideRoamingNumberArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProvideRoamingNumberArg: $.ComponentSpec[] = [
    new $.ComponentSpec("alertingPattern", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("ccbs-Call", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("supportedCamelPhasesInInterrogatingNode", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("additionalSignalInfo", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("orNotSupportedInGMSC", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("pre-pagingSupported", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("longFTN-Supported", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("suppress-VT-CSI", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("offeredCamel4CSIsInInterrogatingNode", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("mtRoamingRetrySupported", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("pagingArea", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("callPriority", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("mtrf-Indicator", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("oldMSC-Number", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("lastUsedLtePLMN-Id", true, $.hasTag(_TagClass.context, 26))
];

let _cached_decoder_for_ProvideRoamingNumberArg: $.ASN1Decoder<ProvideRoamingNumberArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProvideRoamingNumberArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProvideRoamingNumberArg (el: _Element): ProvideRoamingNumberArg {
    if (!_cached_decoder_for_ProvideRoamingNumberArg) { _cached_decoder_for_ProvideRoamingNumberArg = function (el: _Element): ProvideRoamingNumberArg {
    let imsi!: IMSI;
    let msc_Number!: ISDN_AddressString;
    let msisdn: OPTIONAL<ISDN_AddressString> = undefined;
    let lmsi: OPTIONAL<LMSI> = undefined;
    let gsm_BearerCapability: OPTIONAL<ExternalSignalInfo> = undefined;
    let networkSignalInfo: OPTIONAL<ExternalSignalInfo> = undefined;
    let suppressionOfAnnouncement: OPTIONAL<SuppressionOfAnnouncement> = undefined;
    let gmsc_Address: OPTIONAL<ISDN_AddressString> = undefined;
    let callReferenceNumber: OPTIONAL<CallReferenceNumber> = undefined;
    let or_Interrogation: OPTIONAL<NULL> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let alertingPattern: OPTIONAL<AlertingPattern> = undefined;
    let ccbs_Call: OPTIONAL<NULL> = undefined;
    let supportedCamelPhasesInInterrogatingNode: OPTIONAL<SupportedCamelPhases> = undefined;
    let additionalSignalInfo: OPTIONAL<Ext_ExternalSignalInfo> = undefined;
    let orNotSupportedInGMSC: OPTIONAL<NULL> = undefined;
    let pre_pagingSupported: OPTIONAL<NULL> = undefined;
    let longFTN_Supported: OPTIONAL<NULL> = undefined;
    let suppress_VT_CSI: OPTIONAL<NULL> = undefined;
    let offeredCamel4CSIsInInterrogatingNode: OPTIONAL<OfferedCamel4CSIs> = undefined;
    let mtRoamingRetrySupported: OPTIONAL<NULL> = undefined;
    let pagingArea: OPTIONAL<PagingArea> = undefined;
    let callPriority: OPTIONAL<EMLPP_Priority> = undefined;
    let mtrf_Indicator: OPTIONAL<NULL> = undefined;
    let oldMSC_Number: OPTIONAL<ISDN_AddressString> = undefined;
    let lastUsedLtePLMN_Id: OPTIONAL<PLMN_Id> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "msc-Number": (_el: _Element): void => { msc_Number = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "msisdn": (_el: _Element): void => { msisdn = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "lmsi": (_el: _Element): void => { lmsi = $._decode_implicit<LMSI>(() => _decode_LMSI)(_el); },
        "gsm-BearerCapability": (_el: _Element): void => { gsm_BearerCapability = $._decode_implicit<ExternalSignalInfo>(() => _decode_ExternalSignalInfo)(_el); },
        "networkSignalInfo": (_el: _Element): void => { networkSignalInfo = $._decode_implicit<ExternalSignalInfo>(() => _decode_ExternalSignalInfo)(_el); },
        "suppressionOfAnnouncement": (_el: _Element): void => { suppressionOfAnnouncement = $._decode_implicit<SuppressionOfAnnouncement>(() => _decode_SuppressionOfAnnouncement)(_el); },
        "gmsc-Address": (_el: _Element): void => { gmsc_Address = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "callReferenceNumber": (_el: _Element): void => { callReferenceNumber = $._decode_implicit<CallReferenceNumber>(() => _decode_CallReferenceNumber)(_el); },
        "or-Interrogation": (_el: _Element): void => { or_Interrogation = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "alertingPattern": (_el: _Element): void => { alertingPattern = $._decode_implicit<AlertingPattern>(() => _decode_AlertingPattern)(_el); },
        "ccbs-Call": (_el: _Element): void => { ccbs_Call = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "supportedCamelPhasesInInterrogatingNode": (_el: _Element): void => { supportedCamelPhasesInInterrogatingNode = $._decode_implicit<SupportedCamelPhases>(() => _decode_SupportedCamelPhases)(_el); },
        "additionalSignalInfo": (_el: _Element): void => { additionalSignalInfo = $._decode_implicit<Ext_ExternalSignalInfo>(() => _decode_Ext_ExternalSignalInfo)(_el); },
        "orNotSupportedInGMSC": (_el: _Element): void => { orNotSupportedInGMSC = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "pre-pagingSupported": (_el: _Element): void => { pre_pagingSupported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "longFTN-Supported": (_el: _Element): void => { longFTN_Supported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "suppress-VT-CSI": (_el: _Element): void => { suppress_VT_CSI = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "offeredCamel4CSIsInInterrogatingNode": (_el: _Element): void => { offeredCamel4CSIsInInterrogatingNode = $._decode_implicit<OfferedCamel4CSIs>(() => _decode_OfferedCamel4CSIs)(_el); },
        "mtRoamingRetrySupported": (_el: _Element): void => { mtRoamingRetrySupported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "pagingArea": (_el: _Element): void => { pagingArea = $._decode_implicit<PagingArea>(() => _decode_PagingArea)(_el); },
        "callPriority": (_el: _Element): void => { callPriority = $._decode_implicit<EMLPP_Priority>(() => _decode_EMLPP_Priority)(_el); },
        "mtrf-Indicator": (_el: _Element): void => { mtrf_Indicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "oldMSC-Number": (_el: _Element): void => { oldMSC_Number = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "lastUsedLtePLMN-Id": (_el: _Element): void => { lastUsedLtePLMN_Id = $._decode_implicit<PLMN_Id>(() => _decode_PLMN_Id)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProvideRoamingNumberArg,
        _extension_additions_list_spec_for_ProvideRoamingNumberArg,
        _root_component_type_list_2_spec_for_ProvideRoamingNumberArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ProvideRoamingNumberArg(
        imsi,
        msc_Number,
        msisdn,
        lmsi,
        gsm_BearerCapability,
        networkSignalInfo,
        suppressionOfAnnouncement,
        gmsc_Address,
        callReferenceNumber,
        or_Interrogation,
        extensionContainer,
        alertingPattern,
        ccbs_Call,
        supportedCamelPhasesInInterrogatingNode,
        additionalSignalInfo,
        orNotSupportedInGMSC,
        pre_pagingSupported,
        longFTN_Supported,
        suppress_VT_CSI,
        offeredCamel4CSIsInInterrogatingNode,
        mtRoamingRetrySupported,
        pagingArea,
        callPriority,
        mtrf_Indicator,
        oldMSC_Number,
        lastUsedLtePLMN_Id,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ProvideRoamingNumberArg(el);
}

let _cached_encoder_for_ProvideRoamingNumberArg: $.ASN1Encoder<ProvideRoamingNumberArg> | null = null;

/**
 * @summary Encodes a(n) ProvideRoamingNumberArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProvideRoamingNumberArg, encoded as an ASN.1 Element.
 */
export
function _encode_ProvideRoamingNumberArg (value: ProvideRoamingNumberArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProvideRoamingNumberArg) { _cached_encoder_for_ProvideRoamingNumberArg = function (value: ProvideRoamingNumberArg, elGetter: $.ASN1Encoder<ProvideRoamingNumberArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_IMSI, $.BER)(value.imsi, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ISDN_AddressString, $.BER)(value.msc_Number, $.BER),
            /* IF_ABSENT  */ ((value.msisdn === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ISDN_AddressString, $.BER)(value.msisdn, $.BER)),
            /* IF_ABSENT  */ ((value.lmsi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_LMSI, $.BER)(value.lmsi, $.BER)),
            /* IF_ABSENT  */ ((value.gsm_BearerCapability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ExternalSignalInfo, $.BER)(value.gsm_BearerCapability, $.BER)),
            /* IF_ABSENT  */ ((value.networkSignalInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ExternalSignalInfo, $.BER)(value.networkSignalInfo, $.BER)),
            /* IF_ABSENT  */ ((value.suppressionOfAnnouncement === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_SuppressionOfAnnouncement, $.BER)(value.suppressionOfAnnouncement, $.BER)),
            /* IF_ABSENT  */ ((value.gmsc_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_ISDN_AddressString, $.BER)(value.gmsc_Address, $.BER)),
            /* IF_ABSENT  */ ((value.callReferenceNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_CallReferenceNumber, $.BER)(value.callReferenceNumber, $.BER)),
            /* IF_ABSENT  */ ((value.or_Interrogation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeNull, $.BER)(value.or_Interrogation, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.alertingPattern === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_AlertingPattern, $.BER)(value.alertingPattern, $.BER)),
            /* IF_ABSENT  */ ((value.ccbs_Call === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeNull, $.BER)(value.ccbs_Call, $.BER)),
            /* IF_ABSENT  */ ((value.supportedCamelPhasesInInterrogatingNode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_SupportedCamelPhases, $.BER)(value.supportedCamelPhasesInInterrogatingNode, $.BER)),
            /* IF_ABSENT  */ ((value.additionalSignalInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_Ext_ExternalSignalInfo, $.BER)(value.additionalSignalInfo, $.BER)),
            /* IF_ABSENT  */ ((value.orNotSupportedInGMSC === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => $._encodeNull, $.BER)(value.orNotSupportedInGMSC, $.BER)),
            /* IF_ABSENT  */ ((value.pre_pagingSupported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => $._encodeNull, $.BER)(value.pre_pagingSupported, $.BER)),
            /* IF_ABSENT  */ ((value.longFTN_Supported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => $._encodeNull, $.BER)(value.longFTN_Supported, $.BER)),
            /* IF_ABSENT  */ ((value.suppress_VT_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => $._encodeNull, $.BER)(value.suppress_VT_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.offeredCamel4CSIsInInterrogatingNode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_OfferedCamel4CSIs, $.BER)(value.offeredCamel4CSIsInInterrogatingNode, $.BER)),
            /* IF_ABSENT  */ ((value.mtRoamingRetrySupported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => $._encodeNull, $.BER)(value.mtRoamingRetrySupported, $.BER)),
            /* IF_ABSENT  */ ((value.pagingArea === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => _encode_PagingArea, $.BER)(value.pagingArea, $.BER)),
            /* IF_ABSENT  */ ((value.callPriority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => _encode_EMLPP_Priority, $.BER)(value.callPriority, $.BER)),
            /* IF_ABSENT  */ ((value.mtrf_Indicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 24, () => $._encodeNull, $.BER)(value.mtrf_Indicator, $.BER)),
            /* IF_ABSENT  */ ((value.oldMSC_Number === undefined) ? undefined : $._encode_implicit(_TagClass.context, 25, () => _encode_ISDN_AddressString, $.BER)(value.oldMSC_Number, $.BER)),
            /* IF_ABSENT  */ ((value.lastUsedLtePLMN_Id === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => _encode_PLMN_Id, $.BER)(value.lastUsedLtePLMN_Id, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ProvideRoamingNumberArg(value, elGetter);
}


/* eslint-enable */
