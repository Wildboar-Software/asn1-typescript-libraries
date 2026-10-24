/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AMFUENGAPID, _decode_AMFUENGAPID, _encode_AMFUENGAPID } from "../TS33128Payloads/AMFUENGAPID.ta.mjs";
// export { AMFUENGAPID, _decode_AMFUENGAPID, _encode_AMFUENGAPID } from "../TS33128Payloads/AMFUENGAPID.ta.mjs";
import { RANUENGAPID, _decode_RANUENGAPID, _encode_RANUENGAPID } from "../TS33128Payloads/RANUENGAPID.ta.mjs";
// export { RANUENGAPID, _decode_RANUENGAPID, _encode_RANUENGAPID } from "../TS33128Payloads/RANUENGAPID.ta.mjs";
import { GUAMI, _decode_GUAMI, _encode_GUAMI } from "../TS33128Payloads/GUAMI.ta.mjs";
// export { GUAMI, _decode_GUAMI, _encode_GUAMI } from "../TS33128Payloads/GUAMI.ta.mjs";
import { AllowedNSSAI, _decode_AllowedNSSAI, _encode_AllowedNSSAI } from "../TS33128Payloads/AllowedNSSAI.ta.mjs";
// export { AllowedNSSAI, _decode_AllowedNSSAI, _encode_AllowedNSSAI } from "../TS33128Payloads/AllowedNSSAI.ta.mjs";
import { MobilityRestrictionList, _decode_MobilityRestrictionList, _encode_MobilityRestrictionList } from "../TS33128Payloads/MobilityRestrictionList.ta.mjs";
// export { MobilityRestrictionList, _decode_MobilityRestrictionList, _encode_MobilityRestrictionList } from "../TS33128Payloads/MobilityRestrictionList.ta.mjs";
import { RATFrequencySelectionPriority, _decode_RATFrequencySelectionPriority, _encode_RATFrequencySelectionPriority } from "../TS33128Payloads/RATFrequencySelectionPriority.ta.mjs";
// export { RATFrequencySelectionPriority, _decode_RATFrequencySelectionPriority, _encode_RATFrequencySelectionPriority } from "../TS33128Payloads/RATFrequencySelectionPriority.ta.mjs";
import { UEDifferentiationInfo, _decode_UEDifferentiationInfo, _encode_UEDifferentiationInfo } from "../TS33128Payloads/UEDifferentiationInfo.ta.mjs";
// export { UEDifferentiationInfo, _decode_UEDifferentiationInfo, _encode_UEDifferentiationInfo } from "../TS33128Payloads/UEDifferentiationInfo.ta.mjs";
import { UERadioCapability, _decode_UERadioCapability, _encode_UERadioCapability } from "../TS33128Payloads/UERadioCapability.ta.mjs";
// export { UERadioCapability, _decode_UERadioCapability, _encode_UERadioCapability } from "../TS33128Payloads/UERadioCapability.ta.mjs";
import { TargetNSSAIInfo, _decode_TargetNSSAIInfo, _encode_TargetNSSAIInfo } from "../TS33128Payloads/TargetNSSAIInfo.ta.mjs";
// export { TargetNSSAIInfo, _decode_TargetNSSAIInfo, _encode_TargetNSSAIInfo } from "../TS33128Payloads/TargetNSSAIInfo.ta.mjs";
import { MobileIABAuthorizedIndicator, _decode_MobileIABAuthorizedIndicator, _encode_MobileIABAuthorizedIndicator, _enum_for_MobileIABAuthorizedIndicator } from "../TS33128Payloads/MobileIABAuthorizedIndicator.ta.mjs";
// export { MobileIABAuthorizedIndicator, _enum_for_MobileIABAuthorizedIndicator, MobileIABAuthorizedIndicator_authorized /* IMPORTED_LONG_ENUMERATION_ITEM */, authorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, MobileIABAuthorizedIndicator_notAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, notAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MobileIABAuthorizedIndicator, _encode_MobileIABAuthorizedIndicator } from "../TS33128Payloads/MobileIABAuthorizedIndicator.ta.mjs";


/**
 * @summary RANDownlinkNASTransport
 * @description
 * 
 * The purpose of the RANDownlinkNASTransport type is to provide information the
 * AMF sends to the NG-RAN when a NAS message needs to be delivered
 * transparently via the NG-RAN node to the UE. Encoded per TS 38.413 [23]
 * clause 9.2.5.2.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.16.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RANDownlinkNASTransport ::= SEQUENCE
 * {
 *     aMFUENGAPID                   [1] AMFUENGAPID,
 *     rANUENGAPID                   [2] RANUENGAPID,
 *     oldAMF                        [3] GUAMI OPTIONAL,
 *     allowedNSSAI                  [4] AllowedNSSAI OPTIONAL,
 *     mobilityRestrictionList       [5] MobilityRestrictionList OPTIONAL,
 *     rATFrequencySelectionPriority [6] RATFrequencySelectionPriority OPTIONAL,
 *     uEDifferentiationInfo         [7] UEDifferentiationInfo OPTIONAL,
 *     uERadioCapability             [8] UERadioCapability OPTIONAL,
 *     uERadioCapabilityID           [9] OCTET STRING OPTIONAL,
 *     targetNSSAIInfo               [10] TargetNSSAIInfo OPTIONAL,
 *     mobileIABAuthorizedIndicator  [11] MobileIABAuthorizedIndicator OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class RANDownlinkNASTransport {
    /**
     * @summary `aMFUENGAPID`.
     * @description
     *
     * Identity that the AMF uses to uniquely identify the target UE over the NG
     * Interface, See TS 38.413 [23] clause 9.3.3.1.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.16.
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
     * 3GPP TS 33.128, clause 6.2.2.2A.16.
     *
     * @public
     * @readonly
     */
    readonly rANUENGAPID: RANUENGAPID;
    /**
     * @summary `oldAMF`.
     * @description
     *
     * Previous serving AMF’s GUAMI, shall include when sent in the DOWNLINK NAS
     * TRANSPORT. Identifies the previous AMF the UE-associated logical
     * NG-connection was redirected from. Format is defined in TS 29.571 [17]
     * clause 5.3.4.1.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.16.
     *
     * @public
     * @readonly
     */
    readonly oldAMF: OPTIONAL<GUAMI>;
    /**
     * @summary `allowedNSSAI`.
     * @description
     *
     * Indicates the S-NSSAIs permitted by the network.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.16.
     *
     * @public
     * @readonly
     */
    readonly allowedNSSAI: OPTIONAL<AllowedNSSAI>;
    /**
     * @summary `mobilityRestrictionList`.
     * @description
     *
     * Provides roaming or access restrictions related to mobility from AMF to
     * the RAN Node. Shall include when sent in the DOWNLINK NAS TRANSPORT
     * REQUEST or when known at the NF. See TS 38.413 [23] clause 9.3.1.85.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.16.
     *
     * @public
     * @readonly
     */
    readonly mobilityRestrictionList: OPTIONAL<MobilityRestrictionList>;
    /**
     * @summary `rATFrequencySelectionPriority`.
     * @description
     *
     * Used to define local configuration for RRM strategies. Shall include when
     * sent in the DOWNLINK NAS TRANSPORT or when known at the NF. See TS 38.413
     * [23] 9.3.1.61.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.16.
     *
     * @public
     * @readonly
     */
    readonly rATFrequencySelectionPriority: OPTIONAL<RATFrequencySelectionPriority>;
    /**
     * @summary `uEDifferentiationInfo`.
     * @description
     *
     * Provides information about the behavior of a UE with predictable activity
     * and/or mobility behavior. Shall include when sent in the DOWNLINK NAS
     * TRANSPORT or when known at the NF. See TS 38.413 [23] clause 9.3.1.144.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.16.
     *
     * @public
     * @readonly
     */
    readonly uEDifferentiationInfo: OPTIONAL<UEDifferentiationInfo>;
    /**
     * @summary `uERadioCapability`.
     * @description
     *
     * Contains the UE Radio Capability information. Shall include when sent in
     * the DOWNLINK NAS TRANSPORT or when known at the NF. Defined in TS 38.413
     * [23] clauses 9.3.1.74, and 9.3.1.74a.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.16.
     *
     * @public
     * @readonly
     */
    readonly uERadioCapability: OPTIONAL<UERadioCapability>;
    /**
     * @summary `uERadioCapabilityID`.
     * @description
     *
     * Identifier used to represent a set of UE radio capabilities. Shall
     * include when sent in the DOWNLINK NAS TRANSPORT or when known at the NF.
     * Defined in TS 23.003 [19] clause 29.2.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.16.
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
     * Shall include when sent in the DOWNLINK NAS TRANSPORT or when known at
     * the NF. Defined in TS 38.413 [23] clause 9.3.1.229.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.16.
     *
     * @public
     * @readonly
     */
    readonly targetNSSAIInfo: OPTIONAL<TargetNSSAIInfo>;
    /**
     * @summary `mobileIABAuthorizedIndicator`.
     * @description
     *
     * Provides information about the authorization status of the UE to operate
     * as a mobile IAB node. Shall include when sent in the DOWNLINK NAS
     * TRANSPORT or when known at the NF. See TS 38.413 [23] clause 9.3.1.259.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.16.
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
        oldAMF?: OPTIONAL<GUAMI>,
        allowedNSSAI?: OPTIONAL<AllowedNSSAI>,
        mobilityRestrictionList?: OPTIONAL<MobilityRestrictionList>,
        rATFrequencySelectionPriority?: OPTIONAL<RATFrequencySelectionPriority>,
        uEDifferentiationInfo?: OPTIONAL<UEDifferentiationInfo>,
        uERadioCapability?: OPTIONAL<UERadioCapability>,
        uERadioCapabilityID?: OPTIONAL<OCTET_STRING>,
        targetNSSAIInfo?: OPTIONAL<TargetNSSAIInfo>,
        mobileIABAuthorizedIndicator?: OPTIONAL<MobileIABAuthorizedIndicator>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.aMFUENGAPID = aMFUENGAPID;
        this.rANUENGAPID = rANUENGAPID;
        this.oldAMF = oldAMF;
        this.allowedNSSAI = allowedNSSAI;
        this.mobilityRestrictionList = mobilityRestrictionList;
        this.rATFrequencySelectionPriority = rATFrequencySelectionPriority;
        this.uEDifferentiationInfo = uEDifferentiationInfo;
        this.uERadioCapability = uERadioCapability;
        this.uERadioCapabilityID = uERadioCapabilityID;
        this.targetNSSAIInfo = targetNSSAIInfo;
        this.mobileIABAuthorizedIndicator = mobileIABAuthorizedIndicator;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a RANDownlinkNASTransport
     * @description
     * 
     * This takes an `object` and converts it to a `RANDownlinkNASTransport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RANDownlinkNASTransport`.
     * @returns {RANDownlinkNASTransport}
     */
    public static _from_object (_o: { [_K in keyof (RANDownlinkNASTransport)]: (RANDownlinkNASTransport)[_K] }): RANDownlinkNASTransport {
        return new RANDownlinkNASTransport(_o.aMFUENGAPID, _o.rANUENGAPID, _o.oldAMF, _o.allowedNSSAI, _o.mobilityRestrictionList, _o.rATFrequencySelectionPriority, _o.uEDifferentiationInfo, _o.uERadioCapability, _o.uERadioCapabilityID, _o.targetNSSAIInfo, _o.mobileIABAuthorizedIndicator, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `mobileIABAuthorizedIndicator`
         * @public
         * @static
         */

    public static _enum_for_mobileIABAuthorizedIndicator = _enum_for_MobileIABAuthorizedIndicator;
}

/**
 * @summary The Leading Root Component Types of RANDownlinkNASTransport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RANDownlinkNASTransport: $.ComponentSpec[] = [
    new $.ComponentSpec("aMFUENGAPID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rANUENGAPID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("oldAMF", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("allowedNSSAI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mobilityRestrictionList", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("rATFrequencySelectionPriority", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("uEDifferentiationInfo", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("uERadioCapability", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("uERadioCapabilityID", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("targetNSSAIInfo", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("mobileIABAuthorizedIndicator", true, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of RANDownlinkNASTransport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RANDownlinkNASTransport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RANDownlinkNASTransport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RANDownlinkNASTransport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RANDownlinkNASTransport: $.ASN1Decoder<RANDownlinkNASTransport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RANDownlinkNASTransport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RANDownlinkNASTransport (el: _Element): RANDownlinkNASTransport {
    if (!_cached_decoder_for_RANDownlinkNASTransport) { _cached_decoder_for_RANDownlinkNASTransport = function (el: _Element): RANDownlinkNASTransport {
    let aMFUENGAPID!: AMFUENGAPID;
    let rANUENGAPID!: RANUENGAPID;
    let oldAMF: OPTIONAL<GUAMI>;
    let allowedNSSAI: OPTIONAL<AllowedNSSAI>;
    let mobilityRestrictionList: OPTIONAL<MobilityRestrictionList>;
    let rATFrequencySelectionPriority: OPTIONAL<RATFrequencySelectionPriority>;
    let uEDifferentiationInfo: OPTIONAL<UEDifferentiationInfo>;
    let uERadioCapability: OPTIONAL<UERadioCapability>;
    let uERadioCapabilityID: OPTIONAL<OCTET_STRING>;
    let targetNSSAIInfo: OPTIONAL<TargetNSSAIInfo>;
    let mobileIABAuthorizedIndicator: OPTIONAL<MobileIABAuthorizedIndicator>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "aMFUENGAPID": (_el: _Element): void => { aMFUENGAPID = $._decode_implicit<AMFUENGAPID>(() => _decode_AMFUENGAPID)(_el); },
        "rANUENGAPID": (_el: _Element): void => { rANUENGAPID = $._decode_implicit<RANUENGAPID>(() => _decode_RANUENGAPID)(_el); },
        "oldAMF": (_el: _Element): void => { oldAMF = $._decode_implicit<GUAMI>(() => _decode_GUAMI)(_el); },
        "allowedNSSAI": (_el: _Element): void => { allowedNSSAI = $._decode_implicit<AllowedNSSAI>(() => _decode_AllowedNSSAI)(_el); },
        "mobilityRestrictionList": (_el: _Element): void => { mobilityRestrictionList = $._decode_implicit<MobilityRestrictionList>(() => _decode_MobilityRestrictionList)(_el); },
        "rATFrequencySelectionPriority": (_el: _Element): void => { rATFrequencySelectionPriority = $._decode_implicit<RATFrequencySelectionPriority>(() => _decode_RATFrequencySelectionPriority)(_el); },
        "uEDifferentiationInfo": (_el: _Element): void => { uEDifferentiationInfo = $._decode_implicit<UEDifferentiationInfo>(() => _decode_UEDifferentiationInfo)(_el); },
        "uERadioCapability": (_el: _Element): void => { uERadioCapability = $._decode_implicit<UERadioCapability>(() => _decode_UERadioCapability)(_el); },
        "uERadioCapabilityID": (_el: _Element): void => { uERadioCapabilityID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "targetNSSAIInfo": (_el: _Element): void => { targetNSSAIInfo = $._decode_implicit<TargetNSSAIInfo>(() => _decode_TargetNSSAIInfo)(_el); },
        "mobileIABAuthorizedIndicator": (_el: _Element): void => { mobileIABAuthorizedIndicator = $._decode_implicit<MobileIABAuthorizedIndicator>(() => _decode_MobileIABAuthorizedIndicator)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RANDownlinkNASTransport,
        _extension_additions_list_spec_for_RANDownlinkNASTransport,
        _root_component_type_list_2_spec_for_RANDownlinkNASTransport,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RANDownlinkNASTransport(
        aMFUENGAPID,
        rANUENGAPID,
        oldAMF,
        allowedNSSAI,
        mobilityRestrictionList,
        rATFrequencySelectionPriority,
        uEDifferentiationInfo,
        uERadioCapability,
        uERadioCapabilityID,
        targetNSSAIInfo,
        mobileIABAuthorizedIndicator,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RANDownlinkNASTransport(el);
}

let _cached_encoder_for_RANDownlinkNASTransport: $.ASN1Encoder<RANDownlinkNASTransport> | null = null;

/**
 * @summary Encodes a(n) RANDownlinkNASTransport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RANDownlinkNASTransport, encoded as an ASN.1 Element.
 */
export
function _encode_RANDownlinkNASTransport (value: RANDownlinkNASTransport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RANDownlinkNASTransport) { _cached_encoder_for_RANDownlinkNASTransport = function (value: RANDownlinkNASTransport, elGetter: $.ASN1Encoder<RANDownlinkNASTransport>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(11 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AMFUENGAPID, $.BER)(value.aMFUENGAPID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_RANUENGAPID, $.BER)(value.rANUENGAPID, $.BER);
    if (value.oldAMF !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_GUAMI, $.BER)(value.oldAMF, $.BER);
    }
    if (value.allowedNSSAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_AllowedNSSAI, $.BER)(value.allowedNSSAI, $.BER);
    }
    if (value.mobilityRestrictionList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_MobilityRestrictionList, $.BER)(value.mobilityRestrictionList, $.BER);
    }
    if (value.rATFrequencySelectionPriority !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_RATFrequencySelectionPriority, $.BER)(value.rATFrequencySelectionPriority, $.BER);
    }
    if (value.uEDifferentiationInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_UEDifferentiationInfo, $.BER)(value.uEDifferentiationInfo, $.BER);
    }
    if (value.uERadioCapability !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_UERadioCapability, $.BER)(value.uERadioCapability, $.BER);
    }
    if (value.uERadioCapabilityID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.uERadioCapabilityID, $.BER);
    }
    if (value.targetNSSAIInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_TargetNSSAIInfo, $.BER)(value.targetNSSAIInfo, $.BER);
    }
    if (value.mobileIABAuthorizedIndicator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_MobileIABAuthorizedIndicator, $.BER)(value.mobileIABAuthorizedIndicator, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RANDownlinkNASTransport(value, elGetter);
}


/* eslint-enable */
