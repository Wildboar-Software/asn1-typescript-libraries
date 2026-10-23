/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AMFUENGAPID, _decode_AMFUENGAPID, _encode_AMFUENGAPID } from "../TS33128Payloads/AMFUENGAPID.ta.mjs";
// export { AMFUENGAPID, _decode_AMFUENGAPID, _encode_AMFUENGAPID } from "../TS33128Payloads/AMFUENGAPID.ta.mjs";
import { RANUENGAPID, _decode_RANUENGAPID, _encode_RANUENGAPID } from "../TS33128Payloads/RANUENGAPID.ta.mjs";
// export { RANUENGAPID, _decode_RANUENGAPID, _encode_RANUENGAPID } from "../TS33128Payloads/RANUENGAPID.ta.mjs";
import { GUAMI, _decode_GUAMI, _encode_GUAMI } from "../TS33128Payloads/GUAMI.ta.mjs";
// export { GUAMI, _decode_GUAMI, _encode_GUAMI } from "../TS33128Payloads/GUAMI.ta.mjs";
import { PDUSessionSetupRequestItem, _decode_PDUSessionSetupRequestItem, _encode_PDUSessionSetupRequestItem } from "../TS33128Payloads/PDUSessionSetupRequestItem.ta.mjs";
// export { PDUSessionSetupRequestItem, _decode_PDUSessionSetupRequestItem, _encode_PDUSessionSetupRequestItem } from "../TS33128Payloads/PDUSessionSetupRequestItem.ta.mjs";
import { AllowedNSSAI, _decode_AllowedNSSAI, _encode_AllowedNSSAI } from "../TS33128Payloads/AllowedNSSAI.ta.mjs";
// export { AllowedNSSAI, _decode_AllowedNSSAI, _encode_AllowedNSSAI } from "../TS33128Payloads/AllowedNSSAI.ta.mjs";
import { MobilityRestrictionList, _decode_MobilityRestrictionList, _encode_MobilityRestrictionList } from "../TS33128Payloads/MobilityRestrictionList.ta.mjs";
// export { MobilityRestrictionList, _decode_MobilityRestrictionList, _encode_MobilityRestrictionList } from "../TS33128Payloads/MobilityRestrictionList.ta.mjs";
import { UERadioCapability, _decode_UERadioCapability, _encode_UERadioCapability } from "../TS33128Payloads/UERadioCapability.ta.mjs";
// export { UERadioCapability, _decode_UERadioCapability, _encode_UERadioCapability } from "../TS33128Payloads/UERadioCapability.ta.mjs";
import { RATFrequencySelectionPriority, _decode_RATFrequencySelectionPriority, _encode_RATFrequencySelectionPriority } from "../TS33128Payloads/RATFrequencySelectionPriority.ta.mjs";
// export { RATFrequencySelectionPriority, _decode_RATFrequencySelectionPriority, _encode_RATFrequencySelectionPriority } from "../TS33128Payloads/RATFrequencySelectionPriority.ta.mjs";
import { UERadioCapabilityForPaging, _decode_UERadioCapabilityForPaging, _encode_UERadioCapabilityForPaging } from "../TS33128Payloads/UERadioCapabilityForPaging.ta.mjs";
// export { UERadioCapabilityForPaging, _decode_UERadioCapabilityForPaging, _encode_UERadioCapabilityForPaging } from "../TS33128Payloads/UERadioCapabilityForPaging.ta.mjs";
import { IABAuthorizedIndicator, _decode_IABAuthorizedIndicator, _encode_IABAuthorizedIndicator, _enum_for_IABAuthorizedIndicator } from "../TS33128Payloads/IABAuthorizedIndicator.ta.mjs";
// export { IABAuthorizedIndicator, _enum_for_IABAuthorizedIndicator, IABAuthorizedIndicator_authorized /* IMPORTED_LONG_ENUMERATION_ITEM */, IABAuthorizedIndicator_notAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_IABAuthorizedIndicator, _encode_IABAuthorizedIndicator } from "../TS33128Payloads/IABAuthorizedIndicator.ta.mjs";
import { NRV2XServicesAuthorization, _decode_NRV2XServicesAuthorization, _encode_NRV2XServicesAuthorization } from "../TS33128Payloads/NRV2XServicesAuthorization.ta.mjs";
// export { NRV2XServicesAuthorization, _decode_NRV2XServicesAuthorization, _encode_NRV2XServicesAuthorization } from "../TS33128Payloads/NRV2XServicesAuthorization.ta.mjs";
import { LTEV2XServiceAuthorization, _decode_LTEV2XServiceAuthorization, _encode_LTEV2XServiceAuthorization } from "../TS33128Payloads/LTEV2XServiceAuthorization.ta.mjs";
// export { LTEV2XServiceAuthorization, _decode_LTEV2XServiceAuthorization, _encode_LTEV2XServiceAuthorization } from "../TS33128Payloads/LTEV2XServiceAuthorization.ta.mjs";
import { TargetNSSAIInfo, _decode_TargetNSSAIInfo, _encode_TargetNSSAIInfo } from "../TS33128Payloads/TargetNSSAIInfo.ta.mjs";
// export { TargetNSSAIInfo, _decode_TargetNSSAIInfo, _encode_TargetNSSAIInfo } from "../TS33128Payloads/TargetNSSAIInfo.ta.mjs";
import { FiveGProSeAuthorizationIndication, _decode_FiveGProSeAuthorizationIndication, _encode_FiveGProSeAuthorizationIndication } from "../TS33128Payloads/FiveGProSeAuthorizationIndication.ta.mjs";
// export { FiveGProSeAuthorizationIndication, _decode_FiveGProSeAuthorizationIndication, _encode_FiveGProSeAuthorizationIndication } from "../TS33128Payloads/FiveGProSeAuthorizationIndication.ta.mjs";
import { UEDifferentiationInfo, _decode_UEDifferentiationInfo, _encode_UEDifferentiationInfo } from "../TS33128Payloads/UEDifferentiationInfo.ta.mjs";
// export { UEDifferentiationInfo, _decode_UEDifferentiationInfo, _encode_UEDifferentiationInfo } from "../TS33128Payloads/UEDifferentiationInfo.ta.mjs";
import { MobileIABAuthorizedIndicator, _decode_MobileIABAuthorizedIndicator, _encode_MobileIABAuthorizedIndicator, _enum_for_MobileIABAuthorizedIndicator } from "../TS33128Payloads/MobileIABAuthorizedIndicator.ta.mjs";
// export { MobileIABAuthorizedIndicator, _enum_for_MobileIABAuthorizedIndicator, MobileIABAuthorizedIndicator_authorized /* IMPORTED_LONG_ENUMERATION_ITEM */, MobileIABAuthorizedIndicator_notAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_MobileIABAuthorizedIndicator, _encode_MobileIABAuthorizedIndicator } from "../TS33128Payloads/MobileIABAuthorizedIndicator.ta.mjs";


/**
 * @summary InitialRANUEContextSetup
 * @description
 * 
 * The purpose of the InitialRANUEContextSetup type is to provide information
 * the AMF sends to the NG-RAN to request the setup of the UE context. Encoded
 * per TS 38.413 [23] clause 9.2.2.1.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitialRANUEContextSetup ::= SEQUENCE
 * {
 *     aMFUENGAPID                          [1] AMFUENGAPID,
 *     rANUENGAPID                          [2] RANUENGAPID,
 *     oldAMF                               [3] GUAMI OPTIONAL,
 *     pDUSessionSetupRequest               [4] SEQUENCE (SIZE(1..MAX)) OF PDUSessionSetupRequestItem,
 *     allowedNSSAI                         [5] AllowedNSSAI,
 *     mobilityRestrictionList              [6] MobilityRestrictionList OPTIONAL,
 *     uERadioCapability                    [7] UERadioCapability OPTIONAL,
 *     rATFrequencySelectionPriority        [8] RATFrequencySelectionPriority OPTIONAL,
 *     uERadioCapabilityForPaging           [9] UERadioCapabilityForPaging OPTIONAL,
 *     iABAuthorizedIndicator               [10] IABAuthorizedIndicator OPTIONAL,
 *     nRV2XServicesAuthorization           [11] NRV2XServicesAuthorization OPTIONAL,
 *     lTEV2XServiceAuthorization           [12] LTEV2XServiceAuthorization OPTIONAL,
 *     rGLevelWirelineAccessCharacteristics [13] OCTET STRING OPTIONAL,
 *     uERadioCapabilityID                  [14] OCTET STRING OPTIONAL,
 *     targetNSSAIInfo                      [15] TargetNSSAIInfo OPTIONAL,
 *     fiveGProSeAuthorizationIndication    [16] FiveGProSeAuthorizationIndication OPTIONAL,
 *     uEDifferentiationInfo                [17] UEDifferentiationInfo OPTIONAL,
 *     mobileIABAuthorizedIndicator         [18] MobileIABAuthorizedIndicator OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class InitialRANUEContextSetup {
    /**
     * @summary `aMFUENGAPID`.
     * @description
     *
     * Identity that the AMF uses to uniquely identify the target UE over the NG
     * Interface, See TS 38.413 [23] clause 9.3.3.1.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.1.
     *
     * @public
     * @readonly
     */
    readonly aMFUENGAPID: AMFUENGAPID;
    /**
     * @summary `rANUENGAPID`.
     * @description
     *
     * Identity that the AMF receives from the NG-RAN node uniquely identifying
     * the target UE within the NG-RAN Node. See TS 38.413 [23] clause 9.3.3.2.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.1.
     *
     * @public
     * @readonly
     */
    readonly rANUENGAPID: RANUENGAPID;
    /**
     * @summary `oldAMF`.
     * @description
     *
     * Previous serving AMF’s GUAMI, include when sent in the INITIAL CONTEXT
     * SETUP REQUEST or when known at the NF. Format is defined in TS 29.571
     * [17] clause 5.3.4.1.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.1.
     *
     * @public
     * @readonly
     */
    readonly oldAMF: OPTIONAL<GUAMI>;
    /**
     * @summary `pDUSessionSetupRequest`.
     * @description
     *
     * Identifies the PDU Sessions for a UE. Derived from the information in the
     * PDU Session Resource Setup Request Item IE defined in TS 38.413 [23]
     * clause 9.2.2.1.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.1.
     *
     * @public
     * @readonly
     */
    readonly pDUSessionSetupRequest: PDUSessionSetupRequestItem[];
    /**
     * @summary `allowedNSSAI`.
     * @description
     *
     * Indicates the S-NSSAIs permitted by the network.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.1.
     *
     * @public
     * @readonly
     */
    readonly allowedNSSAI: AllowedNSSAI;
    /**
     * @summary `mobilityRestrictionList`.
     * @description
     *
     * Provides roaming or access restrictions related to mobility from AMF to
     * the RAN Node. Include when sent in the INITIAL CONTEXT SETUP REQUEST or
     * when known at the NF. See TS 38.413 [23] clause 9.3.1.85.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.1.
     *
     * @public
     * @readonly
     */
    readonly mobilityRestrictionList: OPTIONAL<MobilityRestrictionList>;
    /**
     * @summary `uERadioCapability`.
     * @description
     *
     * Contains the UE Radio Capability information. Include when sent in the
     * INITIAL CONTEXT SETUP REQUEST or when known at the NF. Defined in TS
     * 38.413 [23] clauses 9.3.1.74, and 9.3.1.74a.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.1.
     *
     * @public
     * @readonly
     */
    readonly uERadioCapability: OPTIONAL<UERadioCapability>;
    /**
     * @summary `rATFrequencySelectionPriority`.
     * @description
     *
     * Used to define local configuration for RRM strategies. Include when sent
     * in the INITIAL CONTEXT SETUP REQUEST or when known at the NF. See TS
     * 38.413 [23] 9.3.1.61.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.1.
     *
     * @public
     * @readonly
     */
    readonly rATFrequencySelectionPriority: OPTIONAL<RATFrequencySelectionPriority>;
    /**
     * @summary `uERadioCapabilityForPaging`.
     * @description
     *
     * Contains paging specific UE Radio Capability information. Include when
     * sent in the INITIAL CONTEXT SETUP REQUEST or when known at the NF.
     * Defined in TS 38.413 [23] clause 9.3.1.68.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.1.
     *
     * @public
     * @readonly
     */
    readonly uERadioCapabilityForPaging: OPTIONAL<UERadioCapabilityForPaging>;
    /**
     * @summary `iABAuthorizedIndicator`.
     * @description
     *
     * Provides information about the authorization status of the UE to operate
     * as an IAB node. Include when sent in the INITIAL CONTEXT SETUP REQUEST or
     * when known at the NF. See TS 38.413 [23] clause 9.3.1.129.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.1.
     *
     * @public
     * @readonly
     */
    readonly iABAuthorizedIndicator: OPTIONAL<IABAuthorizedIndicator>;
    /**
     * @summary `nRV2XServicesAuthorization`.
     * @description
     *
     * Provides information on the authorization status of the UE to use the NR
     * sidelink for V2X services. Include when sent in the INITIAL CONTEXT SETUP
     * REQUEST or when known at the NF. See TS 38.413 [23] clause 9.3.1.146.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.1.
     *
     * @public
     * @readonly
     */
    readonly nRV2XServicesAuthorization: OPTIONAL<NRV2XServicesAuthorization>;
    /**
     * @summary `lTEV2XServiceAuthorization`.
     * @description
     *
     * Provides information on the authorization status of the UE to use the LTE
     * sidelink for V2X services. Include when sent in the INITIAL CONTEXT SETUP
     * REQUEST or when known at the NF. See TS 38.413 [23] clause 9.3.1.147.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.1.
     *
     * @public
     * @readonly
     */
    readonly lTEV2XServiceAuthorization: OPTIONAL<LTEV2XServiceAuthorization>;
    /**
     * @summary `rGLevelWirelineAccessCharacteristics`.
     * @description
     *
     * Indicates the wireline access technology specific QoS information
     * corresponding to a specific wireline access subscription. Include when
     * sent in the INITIAL CONTEXT SETUP REQUEST or when known at the NF.
     * Specified in TS 23.316 [122] clause 4.5.1.2.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.1.
     *
     * @public
     * @readonly
     */
    readonly rGLevelWirelineAccessCharacteristics: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `uERadioCapabilityID`.
     * @description
     *
     * Identifier used to represent a set of UE radio capabilities. Include when
     * sent in the INITIAL CONTEXT SETUP REQUEST or when known at the NF.
     * Defined in TS 23.003 [19] clause 29.2.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.1.
     *
     * @public
     * @readonly
     */
    readonly uERadioCapabilityID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `targetNSSAIInfo`.
     * @description
     *
     * Contains the Target NSSAI and Index to RAT/Frequency Selection Priority.
     * Include when sent in the INITIAL CONTEXT SETUP REQUEST or when known at
     * the NF. Defined in TS 38.413 [23] clause 9.3.1.229.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.1.
     *
     * @public
     * @readonly
     */
    readonly targetNSSAIInfo: OPTIONAL<TargetNSSAIInfo>;
    /**
     * @summary `fiveGProSeAuthorizationIndication`.
     * @description
     *
     * Provides information on the authorization status of the UE to use ProSe
     * services. Include when sent in the INITIAL CONTEXT SETUP REQUEST or when
     * known at the NF. Defined in TS 38.413 [23] clause 9.3.1.233.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.1.
     *
     * @public
     * @readonly
     */
    readonly fiveGProSeAuthorizationIndication: OPTIONAL<FiveGProSeAuthorizationIndication>;
    /**
     * @summary `uEDifferentiationInfo`.
     * @description
     *
     * Provides information about the behavior of a UE with predictable activity
     * and/or mobility behavior. Include when sent in the INITIAL CONTEXT SETUP
     * REQUEST or when known at the NF. See TS 38.413 [23] clause 9.3.1.144.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.1.
     *
     * @public
     * @readonly
     */
    readonly uEDifferentiationInfo: OPTIONAL<UEDifferentiationInfo>;
    /**
     * @summary `mobileIABAuthorizedIndicator`.
     * @description
     *
     * Provides information about the authorization status of the UE to operate
     * as a mobile IAB node. Include when sent in the INITIAL CONTEXT SETUP
     * REQUEST or when known at the NF. See TS 38.413 [23] clause 9.3.1.259.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.1.
     *
     * @public
     * @readonly
     */
    readonly mobileIABAuthorizedIndicator: OPTIONAL<MobileIABAuthorizedIndicator>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        aMFUENGAPID: AMFUENGAPID,
        rANUENGAPID: RANUENGAPID,
        oldAMF: OPTIONAL<GUAMI>,
        pDUSessionSetupRequest: PDUSessionSetupRequestItem[],
        allowedNSSAI: AllowedNSSAI,
        mobilityRestrictionList?: OPTIONAL<MobilityRestrictionList>,
        uERadioCapability?: OPTIONAL<UERadioCapability>,
        rATFrequencySelectionPriority?: OPTIONAL<RATFrequencySelectionPriority>,
        uERadioCapabilityForPaging?: OPTIONAL<UERadioCapabilityForPaging>,
        iABAuthorizedIndicator?: OPTIONAL<IABAuthorizedIndicator>,
        nRV2XServicesAuthorization?: OPTIONAL<NRV2XServicesAuthorization>,
        lTEV2XServiceAuthorization?: OPTIONAL<LTEV2XServiceAuthorization>,
        rGLevelWirelineAccessCharacteristics?: OPTIONAL<OCTET_STRING>,
        uERadioCapabilityID?: OPTIONAL<OCTET_STRING>,
        targetNSSAIInfo?: OPTIONAL<TargetNSSAIInfo>,
        fiveGProSeAuthorizationIndication?: OPTIONAL<FiveGProSeAuthorizationIndication>,
        uEDifferentiationInfo?: OPTIONAL<UEDifferentiationInfo>,
        mobileIABAuthorizedIndicator?: OPTIONAL<MobileIABAuthorizedIndicator>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.aMFUENGAPID = aMFUENGAPID;
        this.rANUENGAPID = rANUENGAPID;
        this.oldAMF = oldAMF;
        this.pDUSessionSetupRequest = pDUSessionSetupRequest;
        this.allowedNSSAI = allowedNSSAI;
        this.mobilityRestrictionList = mobilityRestrictionList;
        this.uERadioCapability = uERadioCapability;
        this.rATFrequencySelectionPriority = rATFrequencySelectionPriority;
        this.uERadioCapabilityForPaging = uERadioCapabilityForPaging;
        this.iABAuthorizedIndicator = iABAuthorizedIndicator;
        this.nRV2XServicesAuthorization = nRV2XServicesAuthorization;
        this.lTEV2XServiceAuthorization = lTEV2XServiceAuthorization;
        this.rGLevelWirelineAccessCharacteristics = rGLevelWirelineAccessCharacteristics;
        this.uERadioCapabilityID = uERadioCapabilityID;
        this.targetNSSAIInfo = targetNSSAIInfo;
        this.fiveGProSeAuthorizationIndication = fiveGProSeAuthorizationIndication;
        this.uEDifferentiationInfo = uEDifferentiationInfo;
        this.mobileIABAuthorizedIndicator = mobileIABAuthorizedIndicator;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a InitialRANUEContextSetup
     * @description
     * 
     * This takes an `object` and converts it to a `InitialRANUEContextSetup`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitialRANUEContextSetup`.
     * @returns {InitialRANUEContextSetup}
     */
    public static _from_object (_o: { [_K in keyof (InitialRANUEContextSetup)]: (InitialRANUEContextSetup)[_K] }): InitialRANUEContextSetup {
        return new InitialRANUEContextSetup(_o.aMFUENGAPID, _o.rANUENGAPID, _o.oldAMF, _o.pDUSessionSetupRequest, _o.allowedNSSAI, _o.mobilityRestrictionList, _o.uERadioCapability, _o.rATFrequencySelectionPriority, _o.uERadioCapabilityForPaging, _o.iABAuthorizedIndicator, _o.nRV2XServicesAuthorization, _o.lTEV2XServiceAuthorization, _o.rGLevelWirelineAccessCharacteristics, _o.uERadioCapabilityID, _o.targetNSSAIInfo, _o.fiveGProSeAuthorizationIndication, _o.uEDifferentiationInfo, _o.mobileIABAuthorizedIndicator, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `iABAuthorizedIndicator`
         * @public
         * @static
         */

    public static _enum_for_iABAuthorizedIndicator = _enum_for_IABAuthorizedIndicator;        /**
         * @summary The enum used as the type of the component `mobileIABAuthorizedIndicator`
         * @public
         * @static
         */

    public static _enum_for_mobileIABAuthorizedIndicator = _enum_for_MobileIABAuthorizedIndicator;
}

/**
 * @summary The Leading Root Component Types of InitialRANUEContextSetup
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InitialRANUEContextSetup: $.ComponentSpec[] = [
    new $.ComponentSpec("aMFUENGAPID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rANUENGAPID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("oldAMF", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pDUSessionSetupRequest", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("allowedNSSAI", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("mobilityRestrictionList", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("uERadioCapability", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("rATFrequencySelectionPriority", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("uERadioCapabilityForPaging", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("iABAuthorizedIndicator", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("nRV2XServicesAuthorization", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("lTEV2XServiceAuthorization", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("rGLevelWirelineAccessCharacteristics", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("uERadioCapabilityID", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("targetNSSAIInfo", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("fiveGProSeAuthorizationIndication", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("uEDifferentiationInfo", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("mobileIABAuthorizedIndicator", true, $.hasTag(_TagClass.context, 18))
];

/**
 * @summary The Trailing Root Component Types of InitialRANUEContextSetup
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InitialRANUEContextSetup: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InitialRANUEContextSetup
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InitialRANUEContextSetup: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InitialRANUEContextSetup: $.ASN1Decoder<InitialRANUEContextSetup> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitialRANUEContextSetup
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitialRANUEContextSetup (el: _Element): InitialRANUEContextSetup {
    if (!_cached_decoder_for_InitialRANUEContextSetup) { _cached_decoder_for_InitialRANUEContextSetup = function (el: _Element): InitialRANUEContextSetup {
    let aMFUENGAPID!: AMFUENGAPID;
    let rANUENGAPID!: RANUENGAPID;
    let oldAMF: OPTIONAL<GUAMI>;
    let pDUSessionSetupRequest!: PDUSessionSetupRequestItem[];
    let allowedNSSAI!: AllowedNSSAI;
    let mobilityRestrictionList: OPTIONAL<MobilityRestrictionList>;
    let uERadioCapability: OPTIONAL<UERadioCapability>;
    let rATFrequencySelectionPriority: OPTIONAL<RATFrequencySelectionPriority>;
    let uERadioCapabilityForPaging: OPTIONAL<UERadioCapabilityForPaging>;
    let iABAuthorizedIndicator: OPTIONAL<IABAuthorizedIndicator>;
    let nRV2XServicesAuthorization: OPTIONAL<NRV2XServicesAuthorization>;
    let lTEV2XServiceAuthorization: OPTIONAL<LTEV2XServiceAuthorization>;
    let rGLevelWirelineAccessCharacteristics: OPTIONAL<OCTET_STRING>;
    let uERadioCapabilityID: OPTIONAL<OCTET_STRING>;
    let targetNSSAIInfo: OPTIONAL<TargetNSSAIInfo>;
    let fiveGProSeAuthorizationIndication: OPTIONAL<FiveGProSeAuthorizationIndication>;
    let uEDifferentiationInfo: OPTIONAL<UEDifferentiationInfo>;
    let mobileIABAuthorizedIndicator: OPTIONAL<MobileIABAuthorizedIndicator>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "aMFUENGAPID": (_el: _Element): void => { aMFUENGAPID = $._decode_implicit<AMFUENGAPID>(() => _decode_AMFUENGAPID)(_el); },
        "rANUENGAPID": (_el: _Element): void => { rANUENGAPID = $._decode_implicit<RANUENGAPID>(() => _decode_RANUENGAPID)(_el); },
        "oldAMF": (_el: _Element): void => { oldAMF = $._decode_implicit<GUAMI>(() => _decode_GUAMI)(_el); },
        "pDUSessionSetupRequest": (_el: _Element): void => {
            pDUSessionSetupRequest = $._decode_implicit<PDUSessionSetupRequestItem[]>(() => $._decodeSequenceOf<PDUSessionSetupRequestItem>(() => _decode_PDUSessionSetupRequestItem))(_el);
            if (pDUSessionSetupRequest.length < 1) {
                throw new ASN1SizeError("InitialRANUEContextSetup.pDUSessionSetupRequest violates SIZE constraint");
            }
        },
        "allowedNSSAI": (_el: _Element): void => { allowedNSSAI = $._decode_implicit<AllowedNSSAI>(() => _decode_AllowedNSSAI)(_el); },
        "mobilityRestrictionList": (_el: _Element): void => { mobilityRestrictionList = $._decode_implicit<MobilityRestrictionList>(() => _decode_MobilityRestrictionList)(_el); },
        "uERadioCapability": (_el: _Element): void => { uERadioCapability = $._decode_implicit<UERadioCapability>(() => _decode_UERadioCapability)(_el); },
        "rATFrequencySelectionPriority": (_el: _Element): void => { rATFrequencySelectionPriority = $._decode_implicit<RATFrequencySelectionPriority>(() => _decode_RATFrequencySelectionPriority)(_el); },
        "uERadioCapabilityForPaging": (_el: _Element): void => { uERadioCapabilityForPaging = $._decode_implicit<UERadioCapabilityForPaging>(() => _decode_UERadioCapabilityForPaging)(_el); },
        "iABAuthorizedIndicator": (_el: _Element): void => { iABAuthorizedIndicator = $._decode_implicit<IABAuthorizedIndicator>(() => _decode_IABAuthorizedIndicator)(_el); },
        "nRV2XServicesAuthorization": (_el: _Element): void => { nRV2XServicesAuthorization = $._decode_implicit<NRV2XServicesAuthorization>(() => _decode_NRV2XServicesAuthorization)(_el); },
        "lTEV2XServiceAuthorization": (_el: _Element): void => { lTEV2XServiceAuthorization = $._decode_implicit<LTEV2XServiceAuthorization>(() => _decode_LTEV2XServiceAuthorization)(_el); },
        "rGLevelWirelineAccessCharacteristics": (_el: _Element): void => { rGLevelWirelineAccessCharacteristics = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "uERadioCapabilityID": (_el: _Element): void => { uERadioCapabilityID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "targetNSSAIInfo": (_el: _Element): void => { targetNSSAIInfo = $._decode_implicit<TargetNSSAIInfo>(() => _decode_TargetNSSAIInfo)(_el); },
        "fiveGProSeAuthorizationIndication": (_el: _Element): void => { fiveGProSeAuthorizationIndication = $._decode_implicit<FiveGProSeAuthorizationIndication>(() => _decode_FiveGProSeAuthorizationIndication)(_el); },
        "uEDifferentiationInfo": (_el: _Element): void => { uEDifferentiationInfo = $._decode_implicit<UEDifferentiationInfo>(() => _decode_UEDifferentiationInfo)(_el); },
        "mobileIABAuthorizedIndicator": (_el: _Element): void => { mobileIABAuthorizedIndicator = $._decode_implicit<MobileIABAuthorizedIndicator>(() => _decode_MobileIABAuthorizedIndicator)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InitialRANUEContextSetup,
        _extension_additions_list_spec_for_InitialRANUEContextSetup,
        _root_component_type_list_2_spec_for_InitialRANUEContextSetup,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new InitialRANUEContextSetup(
        aMFUENGAPID,
        rANUENGAPID,
        oldAMF,
        pDUSessionSetupRequest,
        allowedNSSAI,
        mobilityRestrictionList,
        uERadioCapability,
        rATFrequencySelectionPriority,
        uERadioCapabilityForPaging,
        iABAuthorizedIndicator,
        nRV2XServicesAuthorization,
        lTEV2XServiceAuthorization,
        rGLevelWirelineAccessCharacteristics,
        uERadioCapabilityID,
        targetNSSAIInfo,
        fiveGProSeAuthorizationIndication,
        uEDifferentiationInfo,
        mobileIABAuthorizedIndicator,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_InitialRANUEContextSetup(el);
}

let _cached_encoder_for_InitialRANUEContextSetup: $.ASN1Encoder<InitialRANUEContextSetup> | null = null;

/**
 * @summary Encodes a(n) InitialRANUEContextSetup into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitialRANUEContextSetup, encoded as an ASN.1 Element.
 */
export
function _encode_InitialRANUEContextSetup (value: InitialRANUEContextSetup, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitialRANUEContextSetup) { _cached_encoder_for_InitialRANUEContextSetup = function (value: InitialRANUEContextSetup, elGetter: $.ASN1Encoder<InitialRANUEContextSetup>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(18 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AMFUENGAPID, $.BER)(value.aMFUENGAPID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_RANUENGAPID, $.BER)(value.rANUENGAPID, $.BER);
    if (value.oldAMF !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_GUAMI, $.BER)(value.oldAMF, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<PDUSessionSetupRequestItem>(() => _encode_PDUSessionSetupRequestItem, $.BER), $.BER)(value.pDUSessionSetupRequest, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_AllowedNSSAI, $.BER)(value.allowedNSSAI, $.BER);
    if (value.mobilityRestrictionList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_MobilityRestrictionList, $.BER)(value.mobilityRestrictionList, $.BER);
    }
    if (value.uERadioCapability !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_UERadioCapability, $.BER)(value.uERadioCapability, $.BER);
    }
    if (value.rATFrequencySelectionPriority !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_RATFrequencySelectionPriority, $.BER)(value.rATFrequencySelectionPriority, $.BER);
    }
    if (value.uERadioCapabilityForPaging !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_UERadioCapabilityForPaging, $.BER)(value.uERadioCapabilityForPaging, $.BER);
    }
    if (value.iABAuthorizedIndicator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_IABAuthorizedIndicator, $.BER)(value.iABAuthorizedIndicator, $.BER);
    }
    if (value.nRV2XServicesAuthorization !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_NRV2XServicesAuthorization, $.BER)(value.nRV2XServicesAuthorization, $.BER);
    }
    if (value.lTEV2XServiceAuthorization !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_LTEV2XServiceAuthorization, $.BER)(value.lTEV2XServiceAuthorization, $.BER);
    }
    if (value.rGLevelWirelineAccessCharacteristics !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.rGLevelWirelineAccessCharacteristics, $.BER);
    }
    if (value.uERadioCapabilityID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeOctetString, $.BER)(value.uERadioCapabilityID, $.BER);
    }
    if (value.targetNSSAIInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_TargetNSSAIInfo, $.BER)(value.targetNSSAIInfo, $.BER);
    }
    if (value.fiveGProSeAuthorizationIndication !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_FiveGProSeAuthorizationIndication, $.BER)(value.fiveGProSeAuthorizationIndication, $.BER);
    }
    if (value.uEDifferentiationInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_UEDifferentiationInfo, $.BER)(value.uEDifferentiationInfo, $.BER);
    }
    if (value.mobileIABAuthorizedIndicator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_MobileIABAuthorizedIndicator, $.BER)(value.mobileIABAuthorizedIndicator, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_InitialRANUEContextSetup(value, elGetter);
}


/* eslint-enable */
