/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MMEUES1APID, _decode_MMEUES1APID, _encode_MMEUES1APID } from "../TS33128Payloads/MMEUES1APID.ta.mjs";
// export { MMEUES1APID, _decode_MMEUES1APID, _encode_MMEUES1APID } from "../TS33128Payloads/MMEUES1APID.ta.mjs";
import { type RANUES1APID, _decode_RANUES1APID, _encode_RANUES1APID } from "../TS33128Payloads/RANUES1APID.ta.mjs";
// export { RANUES1APID, _decode_RANUES1APID, _encode_RANUES1APID } from "../TS33128Payloads/RANUES1APID.ta.mjs";
import { type ERABContextList, _decode_ERABContextList, _encode_ERABContextList } from "../TS33128Payloads/ERABContextList.ta.mjs";
// export { ERABContextList, _decode_ERABContextList, _encode_ERABContextList } from "../TS33128Payloads/ERABContextList.ta.mjs";
import { type EPSHandoverRestrictionList, _decode_EPSHandoverRestrictionList, _encode_EPSHandoverRestrictionList } from "../TS33128Payloads/EPSHandoverRestrictionList.ta.mjs";
// export { EPSHandoverRestrictionList, _decode_EPSHandoverRestrictionList, _encode_EPSHandoverRestrictionList } from "../TS33128Payloads/EPSHandoverRestrictionList.ta.mjs";
import { type EPSUERadioCapability, _decode_EPSUERadioCapability, _encode_EPSUERadioCapability } from "../TS33128Payloads/EPSUERadioCapability.ta.mjs";
// export { EPSUERadioCapability, _decode_EPSUERadioCapability, _encode_EPSUERadioCapability } from "../TS33128Payloads/EPSUERadioCapability.ta.mjs";
import { type RATFrequencySelectionPriority, _decode_RATFrequencySelectionPriority, _encode_RATFrequencySelectionPriority } from "../TS33128Payloads/RATFrequencySelectionPriority.ta.mjs";
// export { RATFrequencySelectionPriority, _decode_RATFrequencySelectionPriority, _encode_RATFrequencySelectionPriority } from "../TS33128Payloads/RATFrequencySelectionPriority.ta.mjs";
import { EPSCSFallbackIndicator, _decode_EPSCSFallbackIndicator, _encode_EPSCSFallbackIndicator, _enum_for_EPSCSFallbackIndicator } from "../TS33128Payloads/EPSCSFallbackIndicator.ta.mjs";
// export { EPSCSFallbackIndicator, _enum_for_EPSCSFallbackIndicator, EPSCSFallbackIndicator_cSFallbackRequired /* IMPORTED_LONG_ENUMERATION_ITEM */, cSFallbackRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSCSFallbackIndicator_cSFallbackHighPriority /* IMPORTED_LONG_ENUMERATION_ITEM */, cSFallbackHighPriority /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EPSCSFallbackIndicator, _encode_EPSCSFallbackIndicator } from "../TS33128Payloads/EPSCSFallbackIndicator.ta.mjs";
import { type EPSProSeAuthorization, _decode_EPSProSeAuthorization, _encode_EPSProSeAuthorization } from "../TS33128Payloads/EPSProSeAuthorization.ta.mjs";
// export { EPSProSeAuthorization, _decode_EPSProSeAuthorization, _encode_EPSProSeAuthorization } from "../TS33128Payloads/EPSProSeAuthorization.ta.mjs";
import { LTEV2XServiceAuthorization, _decode_LTEV2XServiceAuthorization, _encode_LTEV2XServiceAuthorization } from "../TS33128Payloads/LTEV2XServiceAuthorization.ta.mjs";
// export { LTEV2XServiceAuthorization, _decode_LTEV2XServiceAuthorization, _encode_LTEV2XServiceAuthorization } from "../TS33128Payloads/LTEV2XServiceAuthorization.ta.mjs";
import { AerialUESubscriptionIndicator, _decode_AerialUESubscriptionIndicator, _encode_AerialUESubscriptionIndicator, _enum_for_AerialUESubscriptionIndicator } from "../TS33128Payloads/AerialUESubscriptionIndicator.ta.mjs";
// export { AerialUESubscriptionIndicator, _enum_for_AerialUESubscriptionIndicator, AerialUESubscriptionIndicator_authorized /* IMPORTED_LONG_ENUMERATION_ITEM */, AerialUESubscriptionIndicator_notAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_AerialUESubscriptionIndicator, _encode_AerialUESubscriptionIndicator } from "../TS33128Payloads/AerialUESubscriptionIndicator.ta.mjs";
import { type EPSSubscriptionBasedUEDifferentiationIndication, _decode_EPSSubscriptionBasedUEDifferentiationIndication, _encode_EPSSubscriptionBasedUEDifferentiationIndication } from "../TS33128Payloads/EPSSubscriptionBasedUEDifferentiationIndication.ta.mjs";
// export { EPSSubscriptionBasedUEDifferentiationIndication, _decode_EPSSubscriptionBasedUEDifferentiationIndication, _encode_EPSSubscriptionBasedUEDifferentiationIndication } from "../TS33128Payloads/EPSSubscriptionBasedUEDifferentiationIndication.ta.mjs";
import { IABAuthorizedIndicator, _decode_IABAuthorizedIndicator, _encode_IABAuthorizedIndicator, _enum_for_IABAuthorizedIndicator } from "../TS33128Payloads/IABAuthorizedIndicator.ta.mjs";
// export { IABAuthorizedIndicator, _enum_for_IABAuthorizedIndicator, IABAuthorizedIndicator_authorized /* IMPORTED_LONG_ENUMERATION_ITEM */, IABAuthorizedIndicator_notAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_IABAuthorizedIndicator, _encode_IABAuthorizedIndicator } from "../TS33128Payloads/IABAuthorizedIndicator.ta.mjs";
import { NRV2XServicesAuthorization, _decode_NRV2XServicesAuthorization, _encode_NRV2XServicesAuthorization } from "../TS33128Payloads/NRV2XServicesAuthorization.ta.mjs";
// export { NRV2XServicesAuthorization, _decode_NRV2XServicesAuthorization, _encode_NRV2XServicesAuthorization } from "../TS33128Payloads/NRV2XServicesAuthorization.ta.mjs";


/**
 * @summary EPSRANUEContext
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSRANUEContext ::= SEQUENCE
 * {
 *     mMEUES1APID                                  [1] MMEUES1APID,
 *     rANUES1APID                                  [2] RANUES1APID,
 *     eRABSetupRequest                             [3] ERABContextList OPTIONAL,
 *     handoverRestrictionList                      [4] EPSHandoverRestrictionList OPTIONAL,
 *     uERadioCapability                            [5] EPSUERadioCapability OPTIONAL,
 *     rATFrequencySelectionPriority                [6] RATFrequencySelectionPriority OPTIONAL,
 *     cSFallbackIndicator                          [7] EPSCSFallbackIndicator OPTIONAL,
 *     proSeAuthorized                              [8] EPSProSeAuthorization OPTIONAL,
 *     lTEV2XServicesAuthorized                     [9] LTEV2XServiceAuthorization OPTIONAL,
 *     aerialUESubscription                         [10] AerialUESubscriptionIndicator OPTIONAL,
 *     subscriptionBasedUEDifferentiationIndication [11] EPSSubscriptionBasedUEDifferentiationIndication OPTIONAL,
 *     iABAuthorizedIndicator                       [12] IABAuthorizedIndicator OPTIONAL,
 *     nRV2XServicesAuthorization                   [13] NRV2XServicesAuthorization OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EPSRANUEContext {
    /**
     * @summary `mMEUES1APID`.
     * @description
     *
     * Identity that the MME uses to uniquely identify the target UE over the S1
     * Interface. See TS 36.413 [38] clause 9.2.3.3. This is correlated to the
     * IMSI known in the UE context at the MME. Include when sent during the
     * procedure being reported or when known at the NF.
     *
     * 3GPP TS 33.128, clause 6.3.2.2A.18.
     *
     * @public
     * @readonly
     */
    readonly mMEUES1APID: MMEUES1APID;
    /**
     * @summary `rANUES1APID`.
     * @description
     *
     * Identity that the MME receives from the eNB uniquely identifying the
     * target UE with the eNB. See TS 36.413 [38] clause 9.2.3.4. Include when
     * sent during the procedure being reported or when known at the NF.
     *
     * 3GPP TS 33.128, clause 6.3.2.2A.18.
     *
     * @public
     * @readonly
     */
    readonly rANUES1APID: RANUES1APID;
    /**
     * @summary `eRABSetupRequest`.
     * @description
     *
     * Contains a list of any E-RABs requested for setup. See TS 36.413 [38]
     * clause 9.1.4.1. Include when sent during the procedure being reported or
     * when known at the NF.
     *
     * 3GPP TS 33.128, clause 6.3.2.2A.18.
     *
     * @public
     * @readonly
     */
    readonly eRABSetupRequest: OPTIONAL<ERABContextList>;
    /**
     * @summary `handoverRestrictionList`.
     * @description
     *
     * Provides information on the PLMNs and RAT Type combinations the UE is
     * able to use for reselection. See TS 36.413 [38] clause 9.2.1.22. Include
     * when sent during the procedure being reported or when known at the NF.
     *
     * 3GPP TS 33.128, clause 6.3.2.2A.18.
     *
     * @public
     * @readonly
     */
    readonly handoverRestrictionList: OPTIONAL<EPSHandoverRestrictionList>;
    /**
     * @summary `uERadioCapability`.
     * @description
     *
     * Indicates the radio capabilities of the UE. See TS 36.413 [38] clause
     * 9.2.1.27. Include when sent during the procedure being reported or when
     * known at the NF.
     *
     * 3GPP TS 33.128, clause 6.3.2.2A.18.
     *
     * @public
     * @readonly
     */
    readonly uERadioCapability: OPTIONAL<EPSUERadioCapability>;
    /**
     * @summary `rATFrequencySelectionPriority`.
     * @description
     *
     * Indicates the RAT/Frequency priority to define camp priorities in Idle
     * mode and inter-RAT/inter-frequency priorities for handover in Active
     * mode. Encoded per TS 36.413 [38] clause 9.2.1.39.
     *
     * 3GPP TS 33.128, clause 6.3.2.2A.18.
     *
     * @public
     * @readonly
     */
    readonly rATFrequencySelectionPriority: OPTIONAL<RATFrequencySelectionPriority>;
    /**
     * @summary `cSFallbackIndicator`.
     * @description
     *
     * Indicates that a fallback to the CS domain is required and the type of
     * fallback requested. See TS 36.413 [38] clause 9.2.3.21.
     *
     * 3GPP TS 33.128, clause 6.3.2.2A.18.
     *
     * @public
     * @readonly
     */
    readonly cSFallbackIndicator: OPTIONAL<EPSCSFallbackIndicator>;
    /**
     * @summary `proSeAuthorized`.
     * @description
     *
     * Provides information on the authorization status of the UE to use
     * proximity services. Include when sent during the procedure being reported
     * or when known at the NF. Derived from the value of the ProSe Authorized
     * IE defined in TS 36.413 [38] clause 9.2.1.99.
     *
     * 3GPP TS 33.128, clause 6.3.2.2A.18.
     *
     * @public
     * @readonly
     */
    readonly proSeAuthorized: OPTIONAL<EPSProSeAuthorization>;
    /**
     * @summary `lTEV2XServicesAuthorized`.
     * @description
     *
     * Provides information on the authorization status of the UE to use V2X
     * services over LTE. Include when sent during the procedure being reported
     * or when known at the NF. Derived from the value of the V2X Services
     * Authorized IE defined in TS 36.413 [38] clause 9.2.1.120.
     *
     * 3GPP TS 33.128, clause 6.3.2.2A.18.
     *
     * @public
     * @readonly
     */
    readonly lTEV2XServicesAuthorized: OPTIONAL<LTEV2XServiceAuthorization>;
    /**
     * @summary `aerialUESubscription`.
     * @description
     *
     * Provides information on the authorization status of the UE to use aerial
     * UE service. Include when sent during the procedure being reported or when
     * known at the NF. Derived from the value of the aerial UE subscription
     * information IE defined in TS 36.413 [38] clause 9.2.1.136.
     *
     * 3GPP TS 33.128, clause 6.3.2.2A.18.
     *
     * @public
     * @readonly
     */
    readonly aerialUESubscription: OPTIONAL<AerialUESubscriptionIndicator>;
    /**
     * @summary `subscriptionBasedUEDifferentiationIndication`.
     * @description
     *
     * Provides information on the periodic communication subscription for a UE.
     * Include when sent during the procedure being reported or when known at
     * the NF. Derived from the value of the Subscription Based UE
     * Differentiation Information IE defined in TS 36.413 [38] clause
     * 9.2.1.140.
     *
     * 3GPP TS 33.128, clause 6.3.2.2A.18.
     *
     * @public
     * @readonly
     */
    readonly subscriptionBasedUEDifferentiationIndication: OPTIONAL<EPSSubscriptionBasedUEDifferentiationIndication>;
    /**
     * @summary `iABAuthorizedIndicator`.
     * @description
     *
     * Provides information on the authorization of a UE to act as an IAB node.
     * Include when during the procedure being reported or when known at the NF.
     * Derived from the value of the IAB Authorized IE defined in TS 36.413 [38]
     * clause 9.2.1.146.
     *
     * 3GPP TS 33.128, clause 6.3.2.2A.18.
     *
     * @public
     * @readonly
     */
    readonly iABAuthorizedIndicator: OPTIONAL<IABAuthorizedIndicator>;
    /**
     * @summary `nRV2XServicesAuthorization`.
     * @description
     *
     * Provides information on the authorization status of the UE to use V2X
     * services over NR. Include when sent during the procedure being reported
     * or when known at the NF. Derived from the value of the V2X Services
     * Authorized IE defined in TS 36.413 [38] clause 9.2.1.148.
     *
     * 3GPP TS 33.128, clause 6.3.2.2A.18.
     *
     * @public
     * @readonly
     */
    readonly nRV2XServicesAuthorization: OPTIONAL<NRV2XServicesAuthorization>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        mMEUES1APID: MMEUES1APID,
        rANUES1APID: RANUES1APID,
        eRABSetupRequest?: OPTIONAL<ERABContextList>,
        handoverRestrictionList?: OPTIONAL<EPSHandoverRestrictionList>,
        uERadioCapability?: OPTIONAL<EPSUERadioCapability>,
        rATFrequencySelectionPriority?: OPTIONAL<RATFrequencySelectionPriority>,
        cSFallbackIndicator?: OPTIONAL<EPSCSFallbackIndicator>,
        proSeAuthorized?: OPTIONAL<EPSProSeAuthorization>,
        lTEV2XServicesAuthorized?: OPTIONAL<LTEV2XServiceAuthorization>,
        aerialUESubscription?: OPTIONAL<AerialUESubscriptionIndicator>,
        subscriptionBasedUEDifferentiationIndication?: OPTIONAL<EPSSubscriptionBasedUEDifferentiationIndication>,
        iABAuthorizedIndicator?: OPTIONAL<IABAuthorizedIndicator>,
        nRV2XServicesAuthorization?: OPTIONAL<NRV2XServicesAuthorization>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.mMEUES1APID = mMEUES1APID;
        this.rANUES1APID = rANUES1APID;
        this.eRABSetupRequest = eRABSetupRequest;
        this.handoverRestrictionList = handoverRestrictionList;
        this.uERadioCapability = uERadioCapability;
        this.rATFrequencySelectionPriority = rATFrequencySelectionPriority;
        this.cSFallbackIndicator = cSFallbackIndicator;
        this.proSeAuthorized = proSeAuthorized;
        this.lTEV2XServicesAuthorized = lTEV2XServicesAuthorized;
        this.aerialUESubscription = aerialUESubscription;
        this.subscriptionBasedUEDifferentiationIndication = subscriptionBasedUEDifferentiationIndication;
        this.iABAuthorizedIndicator = iABAuthorizedIndicator;
        this.nRV2XServicesAuthorization = nRV2XServicesAuthorization;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EPSRANUEContext
     * @description
     * 
     * This takes an `object` and converts it to a `EPSRANUEContext`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSRANUEContext`.
     * @returns {EPSRANUEContext}
     */
    public static _from_object (_o: { [_K in keyof (EPSRANUEContext)]: (EPSRANUEContext)[_K] }): EPSRANUEContext {
        return new EPSRANUEContext(_o.mMEUES1APID, _o.rANUES1APID, _o.eRABSetupRequest, _o.handoverRestrictionList, _o.uERadioCapability, _o.rATFrequencySelectionPriority, _o.cSFallbackIndicator, _o.proSeAuthorized, _o.lTEV2XServicesAuthorized, _o.aerialUESubscription, _o.subscriptionBasedUEDifferentiationIndication, _o.iABAuthorizedIndicator, _o.nRV2XServicesAuthorization, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `cSFallbackIndicator`
         * @public
         * @static
         */

    public static _enum_for_cSFallbackIndicator = _enum_for_EPSCSFallbackIndicator;        /**
         * @summary The enum used as the type of the component `aerialUESubscription`
         * @public
         * @static
         */

    public static _enum_for_aerialUESubscription = _enum_for_AerialUESubscriptionIndicator;        /**
         * @summary The enum used as the type of the component `iABAuthorizedIndicator`
         * @public
         * @static
         */

    public static _enum_for_iABAuthorizedIndicator = _enum_for_IABAuthorizedIndicator;
}

/**
 * @summary The Leading Root Component Types of EPSRANUEContext
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSRANUEContext: $.ComponentSpec[] = [
    new $.ComponentSpec("mMEUES1APID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rANUES1APID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("eRABSetupRequest", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("handoverRestrictionList", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("uERadioCapability", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("rATFrequencySelectionPriority", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("cSFallbackIndicator", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("proSeAuthorized", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("lTEV2XServicesAuthorized", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("aerialUESubscription", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("subscriptionBasedUEDifferentiationIndication", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("iABAuthorizedIndicator", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("nRV2XServicesAuthorization", true, $.hasTag(_TagClass.context, 13))
];

/**
 * @summary The Trailing Root Component Types of EPSRANUEContext
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSRANUEContext: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSRANUEContext
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSRANUEContext: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPSRANUEContext: $.ASN1Decoder<EPSRANUEContext> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSRANUEContext
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSRANUEContext (el: _Element): EPSRANUEContext {
    if (!_cached_decoder_for_EPSRANUEContext) { _cached_decoder_for_EPSRANUEContext = function (el: _Element): EPSRANUEContext {
    let mMEUES1APID!: MMEUES1APID;
    let rANUES1APID!: RANUES1APID;
    let eRABSetupRequest: OPTIONAL<ERABContextList>;
    let handoverRestrictionList: OPTIONAL<EPSHandoverRestrictionList>;
    let uERadioCapability: OPTIONAL<EPSUERadioCapability>;
    let rATFrequencySelectionPriority: OPTIONAL<RATFrequencySelectionPriority>;
    let cSFallbackIndicator: OPTIONAL<EPSCSFallbackIndicator>;
    let proSeAuthorized: OPTIONAL<EPSProSeAuthorization>;
    let lTEV2XServicesAuthorized: OPTIONAL<LTEV2XServiceAuthorization>;
    let aerialUESubscription: OPTIONAL<AerialUESubscriptionIndicator>;
    let subscriptionBasedUEDifferentiationIndication: OPTIONAL<EPSSubscriptionBasedUEDifferentiationIndication>;
    let iABAuthorizedIndicator: OPTIONAL<IABAuthorizedIndicator>;
    let nRV2XServicesAuthorization: OPTIONAL<NRV2XServicesAuthorization>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "mMEUES1APID": (_el: _Element): void => { mMEUES1APID = $._decode_implicit<MMEUES1APID>(() => _decode_MMEUES1APID)(_el); },
        "rANUES1APID": (_el: _Element): void => { rANUES1APID = $._decode_implicit<RANUES1APID>(() => _decode_RANUES1APID)(_el); },
        "eRABSetupRequest": (_el: _Element): void => { eRABSetupRequest = $._decode_implicit<ERABContextList>(() => _decode_ERABContextList)(_el); },
        "handoverRestrictionList": (_el: _Element): void => { handoverRestrictionList = $._decode_implicit<EPSHandoverRestrictionList>(() => _decode_EPSHandoverRestrictionList)(_el); },
        "uERadioCapability": (_el: _Element): void => { uERadioCapability = $._decode_implicit<EPSUERadioCapability>(() => _decode_EPSUERadioCapability)(_el); },
        "rATFrequencySelectionPriority": (_el: _Element): void => { rATFrequencySelectionPriority = $._decode_implicit<RATFrequencySelectionPriority>(() => _decode_RATFrequencySelectionPriority)(_el); },
        "cSFallbackIndicator": (_el: _Element): void => { cSFallbackIndicator = $._decode_implicit<EPSCSFallbackIndicator>(() => _decode_EPSCSFallbackIndicator)(_el); },
        "proSeAuthorized": (_el: _Element): void => { proSeAuthorized = $._decode_implicit<EPSProSeAuthorization>(() => _decode_EPSProSeAuthorization)(_el); },
        "lTEV2XServicesAuthorized": (_el: _Element): void => { lTEV2XServicesAuthorized = $._decode_implicit<LTEV2XServiceAuthorization>(() => _decode_LTEV2XServiceAuthorization)(_el); },
        "aerialUESubscription": (_el: _Element): void => { aerialUESubscription = $._decode_implicit<AerialUESubscriptionIndicator>(() => _decode_AerialUESubscriptionIndicator)(_el); },
        "subscriptionBasedUEDifferentiationIndication": (_el: _Element): void => { subscriptionBasedUEDifferentiationIndication = $._decode_implicit<EPSSubscriptionBasedUEDifferentiationIndication>(() => _decode_EPSSubscriptionBasedUEDifferentiationIndication)(_el); },
        "iABAuthorizedIndicator": (_el: _Element): void => { iABAuthorizedIndicator = $._decode_implicit<IABAuthorizedIndicator>(() => _decode_IABAuthorizedIndicator)(_el); },
        "nRV2XServicesAuthorization": (_el: _Element): void => { nRV2XServicesAuthorization = $._decode_implicit<NRV2XServicesAuthorization>(() => _decode_NRV2XServicesAuthorization)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPSRANUEContext,
        _extension_additions_list_spec_for_EPSRANUEContext,
        _root_component_type_list_2_spec_for_EPSRANUEContext,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EPSRANUEContext(
        mMEUES1APID,
        rANUES1APID,
        eRABSetupRequest,
        handoverRestrictionList,
        uERadioCapability,
        rATFrequencySelectionPriority,
        cSFallbackIndicator,
        proSeAuthorized,
        lTEV2XServicesAuthorized,
        aerialUESubscription,
        subscriptionBasedUEDifferentiationIndication,
        iABAuthorizedIndicator,
        nRV2XServicesAuthorization,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EPSRANUEContext(el);
}

let _cached_encoder_for_EPSRANUEContext: $.ASN1Encoder<EPSRANUEContext> | null = null;

/**
 * @summary Encodes a(n) EPSRANUEContext into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSRANUEContext, encoded as an ASN.1 Element.
 */
export
function _encode_EPSRANUEContext (value: EPSRANUEContext, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSRANUEContext) { _cached_encoder_for_EPSRANUEContext = function (value: EPSRANUEContext, elGetter: $.ASN1Encoder<EPSRANUEContext>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(13 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMEUES1APID, $.BER)(value.mMEUES1APID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_RANUES1APID, $.BER)(value.rANUES1APID, $.BER);
    if (value.eRABSetupRequest !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_ERABContextList, $.BER)(value.eRABSetupRequest, $.BER);
    }
    if (value.handoverRestrictionList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_EPSHandoverRestrictionList, $.BER)(value.handoverRestrictionList, $.BER);
    }
    if (value.uERadioCapability !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_EPSUERadioCapability, $.BER)(value.uERadioCapability, $.BER);
    }
    if (value.rATFrequencySelectionPriority !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_RATFrequencySelectionPriority, $.BER)(value.rATFrequencySelectionPriority, $.BER);
    }
    if (value.cSFallbackIndicator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_EPSCSFallbackIndicator, $.BER)(value.cSFallbackIndicator, $.BER);
    }
    if (value.proSeAuthorized !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_EPSProSeAuthorization, $.BER)(value.proSeAuthorized, $.BER);
    }
    if (value.lTEV2XServicesAuthorized !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_LTEV2XServiceAuthorization, $.BER)(value.lTEV2XServicesAuthorized, $.BER);
    }
    if (value.aerialUESubscription !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_AerialUESubscriptionIndicator, $.BER)(value.aerialUESubscription, $.BER);
    }
    if (value.subscriptionBasedUEDifferentiationIndication !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_EPSSubscriptionBasedUEDifferentiationIndication, $.BER)(value.subscriptionBasedUEDifferentiationIndication, $.BER);
    }
    if (value.iABAuthorizedIndicator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_IABAuthorizedIndicator, $.BER)(value.iABAuthorizedIndicator, $.BER);
    }
    if (value.nRV2XServicesAuthorization !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_NRV2XServicesAuthorization, $.BER)(value.nRV2XServicesAuthorization, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EPSRANUEContext(value, elGetter);
}


/* eslint-enable */
