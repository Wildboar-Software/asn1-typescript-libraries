/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PresenceReportingAreaStatus, _decode_PresenceReportingAreaStatus, _encode_PresenceReportingAreaStatus, _enum_for_PresenceReportingAreaStatus } from "../GPRSChargingDataTypes/PresenceReportingAreaStatus.ta.mjs";
// export { PresenceReportingAreaStatus, _enum_for_PresenceReportingAreaStatus, PresenceReportingAreaStatus_insideArea /* IMPORTED_LONG_ENUMERATION_ITEM */, insideArea /* IMPORTED_SHORT_ENUMERATION_ITEM */, PresenceReportingAreaStatus_outsideArea /* IMPORTED_LONG_ENUMERATION_ITEM */, outsideArea /* IMPORTED_SHORT_ENUMERATION_ITEM */, PresenceReportingAreaStatus_inactive /* IMPORTED_LONG_ENUMERATION_ITEM */, inactive /* IMPORTED_SHORT_ENUMERATION_ITEM */, PresenceReportingAreaStatus_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PresenceReportingAreaStatus, _encode_PresenceReportingAreaStatus } from "../GPRSChargingDataTypes/PresenceReportingAreaStatus.ta.mjs";
import { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../GPRSChargingDataTypes/UserCSGInformation.ta.mjs";
// export { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../GPRSChargingDataTypes/UserCSGInformation.ta.mjs";
import { UWANUserLocationInfo, _decode_UWANUserLocationInfo, _encode_UWANUserLocationInfo } from "../GPRSChargingDataTypes/UWANUserLocationInfo.ta.mjs";
// export { UWANUserLocationInfo, _decode_UWANUserLocationInfo, _encode_UWANUserLocationInfo } from "../GPRSChargingDataTypes/UWANUserLocationInfo.ta.mjs";
import { ServiceConditionChange, _decode_ServiceConditionChange, _encode_ServiceConditionChange } from "../GPRSChargingDataTypes/ServiceConditionChange.ta.mjs";
// export { ServiceConditionChange, ServiceConditionChange_qoSChange /* IMPORTED_LONG_NAMED_BIT */, qoSChange /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_sGSNChange /* IMPORTED_LONG_NAMED_BIT */, sGSNChange /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_sGSNPLMNIDChange /* IMPORTED_LONG_NAMED_BIT */, sGSNPLMNIDChange /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_tariffTimeSwitch /* IMPORTED_LONG_NAMED_BIT */, tariffTimeSwitch /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_pDPContextRelease /* IMPORTED_LONG_NAMED_BIT */, pDPContextRelease /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_rATChange /* IMPORTED_LONG_NAMED_BIT */, rATChange /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_serviceIdledOut /* IMPORTED_LONG_NAMED_BIT */, serviceIdledOut /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_reserved /* IMPORTED_LONG_NAMED_BIT */, reserved /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_configurationChange /* IMPORTED_LONG_NAMED_BIT */, configurationChange /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_serviceStop /* IMPORTED_LONG_NAMED_BIT */, serviceStop /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_dCCATimeThresholdReached /* IMPORTED_LONG_NAMED_BIT */, dCCATimeThresholdReached /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_dCCAVolumeThresholdReached /* IMPORTED_LONG_NAMED_BIT */, dCCAVolumeThresholdReached /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_dCCAServiceSpecificUnitThresholdReached /* IMPORTED_LONG_NAMED_BIT */, dCCAServiceSpecificUnitThresholdReached /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_dCCATimeExhausted /* IMPORTED_LONG_NAMED_BIT */, dCCATimeExhausted /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_dCCAVolumeExhausted /* IMPORTED_LONG_NAMED_BIT */, dCCAVolumeExhausted /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_dCCAValidityTimeout /* IMPORTED_LONG_NAMED_BIT */, dCCAValidityTimeout /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_reserved1 /* IMPORTED_LONG_NAMED_BIT */, reserved1 /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_dCCAReauthorisationRequest /* IMPORTED_LONG_NAMED_BIT */, dCCAReauthorisationRequest /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_dCCAContinueOngoingSession /* IMPORTED_LONG_NAMED_BIT */, dCCAContinueOngoingSession /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_dCCARetryAndTerminateOngoingSession /* IMPORTED_LONG_NAMED_BIT */, dCCARetryAndTerminateOngoingSession /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_dCCATerminateOngoingSession /* IMPORTED_LONG_NAMED_BIT */, dCCATerminateOngoingSession /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_cGI_SAIChange /* IMPORTED_LONG_NAMED_BIT */, cGI_SAIChange /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_rAIChange /* IMPORTED_LONG_NAMED_BIT */, rAIChange /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_dCCAServiceSpecificUnitExhausted /* IMPORTED_LONG_NAMED_BIT */, dCCAServiceSpecificUnitExhausted /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_recordClosure /* IMPORTED_LONG_NAMED_BIT */, recordClosure /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_timeLimit /* IMPORTED_LONG_NAMED_BIT */, timeLimit /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_volumeLimit /* IMPORTED_LONG_NAMED_BIT */, volumeLimit /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_serviceSpecificUnitLimit /* IMPORTED_LONG_NAMED_BIT */, serviceSpecificUnitLimit /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_envelopeClosure /* IMPORTED_LONG_NAMED_BIT */, envelopeClosure /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_eCGIChange /* IMPORTED_LONG_NAMED_BIT */, eCGIChange /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_tAIChange /* IMPORTED_LONG_NAMED_BIT */, tAIChange /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_userLocationChange /* IMPORTED_LONG_NAMED_BIT */, userLocationChange /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_userCSGInformationChange /* IMPORTED_LONG_NAMED_BIT */, userCSGInformationChange /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_presenceInPRAChange /* IMPORTED_LONG_NAMED_BIT */, presenceInPRAChange /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_accessChangeOfSDF /* IMPORTED_LONG_NAMED_BIT */, accessChangeOfSDF /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_indirectServiceConditionChange /* IMPORTED_LONG_NAMED_BIT */, indirectServiceConditionChange /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_servingPLMNRateControlChange /* IMPORTED_LONG_NAMED_BIT */, servingPLMNRateControlChange /* IMPORTED_SHORT_NAMED_BIT */, ServiceConditionChange_aPNRateControlChange /* IMPORTED_LONG_NAMED_BIT */, aPNRateControlChange /* IMPORTED_SHORT_NAMED_BIT */, _decode_ServiceConditionChange, _encode_ServiceConditionChange } from "../GPRSChargingDataTypes/ServiceConditionChange.ta.mjs";


/**
 * @summary RelatedChangeOfServiceCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RelatedChangeOfServiceCondition ::= SEQUENCE {
 *    userLocationInformation            [20] IMPLICIT OCTET STRING OPTIONAL,
 *    threeGPP2UserLocationInformation   [24] IMPLICIT OCTET STRING OPTIONAL,
 *    presenceReportingAreaStatus        [28] IMPLICIT PresenceReportingAreaStatus OPTIONAL,
 *    userCSGInformation                 [29] IMPLICIT UserCSGInformation OPTIONAL,
 *    rATType                            [30] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    uWANUserLocationInformation        [32] IMPLICIT UWANUserLocationInfo OPTIONAL,
 *    relatedServiceConditionChange      [33] IMPLICIT ServiceConditionChange OPTIONAL}
 * ```
 * 
 * @class
 */
export
class RelatedChangeOfServiceCondition {
    /**
     * @summary `userLocationInformation`.
     * @public
     * @readonly
     */
    readonly userLocationInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `threeGPP2UserLocationInformation`.
     * @public
     * @readonly
     */
    readonly threeGPP2UserLocationInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `presenceReportingAreaStatus`.
     * @public
     * @readonly
     */
    readonly presenceReportingAreaStatus: OPTIONAL<PresenceReportingAreaStatus>;
    /**
     * @summary `userCSGInformation`.
     * @public
     * @readonly
     */
    readonly userCSGInformation: OPTIONAL<UserCSGInformation>;
    /**
     * @summary `rATType`.
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `uWANUserLocationInformation`.
     * @public
     * @readonly
     */
    readonly uWANUserLocationInformation: OPTIONAL<UWANUserLocationInfo>;
    /**
     * @summary `relatedServiceConditionChange`.
     * @public
     * @readonly
     */
    readonly relatedServiceConditionChange: OPTIONAL<ServiceConditionChange>;

    constructor (
        userLocationInformation: OPTIONAL<OCTET_STRING>,
        threeGPP2UserLocationInformation: OPTIONAL<OCTET_STRING>,
        presenceReportingAreaStatus: OPTIONAL<PresenceReportingAreaStatus>,
        userCSGInformation: OPTIONAL<UserCSGInformation>,
        rATType: OPTIONAL<INTEGER>,
        uWANUserLocationInformation: OPTIONAL<UWANUserLocationInfo>,
        relatedServiceConditionChange: OPTIONAL<ServiceConditionChange>
    ) {
        this.userLocationInformation = userLocationInformation;
        this.threeGPP2UserLocationInformation = threeGPP2UserLocationInformation;
        this.presenceReportingAreaStatus = presenceReportingAreaStatus;
        this.userCSGInformation = userCSGInformation;
        this.rATType = rATType;
        this.uWANUserLocationInformation = uWANUserLocationInformation;
        this.relatedServiceConditionChange = relatedServiceConditionChange;
    }

    /**
     * @summary Restructures an object into a RelatedChangeOfServiceCondition
     * @description
     * 
     * This takes an `object` and converts it to a `RelatedChangeOfServiceCondition`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RelatedChangeOfServiceCondition`.
     * @returns {RelatedChangeOfServiceCondition}
     */
    public static _from_object (_o: { [_K in keyof (RelatedChangeOfServiceCondition)]: (RelatedChangeOfServiceCondition)[_K] }): RelatedChangeOfServiceCondition {
        return new RelatedChangeOfServiceCondition(_o.userLocationInformation, _o.threeGPP2UserLocationInformation, _o.presenceReportingAreaStatus, _o.userCSGInformation, _o.rATType, _o.uWANUserLocationInformation, _o.relatedServiceConditionChange);
    }

        /**
         * @summary The enum used as the type of the component `presenceReportingAreaStatus`
         * @public
         * @static
         */

    public static _enum_for_presenceReportingAreaStatus = _enum_for_PresenceReportingAreaStatus;
}

/**
 * @summary The Leading Root Component Types of RelatedChangeOfServiceCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RelatedChangeOfServiceCondition: $.ComponentSpec[] = [
    new $.ComponentSpec("userLocationInformation", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("threeGPP2UserLocationInformation", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("presenceReportingAreaStatus", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("userCSGInformation", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("uWANUserLocationInformation", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("relatedServiceConditionChange", true, $.hasTag(_TagClass.context, 33))
];

/**
 * @summary The Trailing Root Component Types of RelatedChangeOfServiceCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RelatedChangeOfServiceCondition: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RelatedChangeOfServiceCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RelatedChangeOfServiceCondition: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RelatedChangeOfServiceCondition: $.ASN1Decoder<RelatedChangeOfServiceCondition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RelatedChangeOfServiceCondition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RelatedChangeOfServiceCondition (el: _Element): RelatedChangeOfServiceCondition {
    if (!_cached_decoder_for_RelatedChangeOfServiceCondition) { _cached_decoder_for_RelatedChangeOfServiceCondition = function (el: _Element): RelatedChangeOfServiceCondition {
    let userLocationInformation: OPTIONAL<OCTET_STRING>;
    let threeGPP2UserLocationInformation: OPTIONAL<OCTET_STRING>;
    let presenceReportingAreaStatus: OPTIONAL<PresenceReportingAreaStatus>;
    let userCSGInformation: OPTIONAL<UserCSGInformation>;
    let rATType: OPTIONAL<INTEGER>;
    let uWANUserLocationInformation: OPTIONAL<UWANUserLocationInfo>;
    let relatedServiceConditionChange: OPTIONAL<ServiceConditionChange>;
    const callbacks: $.DecodingMap = {
        "userLocationInformation": (_el: _Element): void => { userLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "threeGPP2UserLocationInformation": (_el: _Element): void => { threeGPP2UserLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "presenceReportingAreaStatus": (_el: _Element): void => { presenceReportingAreaStatus = $._decode_implicit<PresenceReportingAreaStatus>(() => _decode_PresenceReportingAreaStatus)(_el); },
        "userCSGInformation": (_el: _Element): void => { userCSGInformation = $._decode_implicit<UserCSGInformation>(() => _decode_UserCSGInformation)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "uWANUserLocationInformation": (_el: _Element): void => { uWANUserLocationInformation = $._decode_implicit<UWANUserLocationInfo>(() => _decode_UWANUserLocationInfo)(_el); },
        "relatedServiceConditionChange": (_el: _Element): void => { relatedServiceConditionChange = $._decode_implicit<ServiceConditionChange>(() => _decode_ServiceConditionChange)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RelatedChangeOfServiceCondition,
        _extension_additions_list_spec_for_RelatedChangeOfServiceCondition,
        _root_component_type_list_2_spec_for_RelatedChangeOfServiceCondition,
        undefined,
    );
    return new RelatedChangeOfServiceCondition(
        userLocationInformation,
        threeGPP2UserLocationInformation,
        presenceReportingAreaStatus,
        userCSGInformation,
        rATType,
        uWANUserLocationInformation,
        relatedServiceConditionChange
    );
}; }
    return _cached_decoder_for_RelatedChangeOfServiceCondition(el);
}

let _cached_encoder_for_RelatedChangeOfServiceCondition: $.ASN1Encoder<RelatedChangeOfServiceCondition> | null = null;

/**
 * @summary Encodes a(n) RelatedChangeOfServiceCondition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelatedChangeOfServiceCondition, encoded as an ASN.1 Element.
 */
export
function _encode_RelatedChangeOfServiceCondition (value: RelatedChangeOfServiceCondition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RelatedChangeOfServiceCondition) { _cached_encoder_for_RelatedChangeOfServiceCondition = function (value: RelatedChangeOfServiceCondition, elGetter: $.ASN1Encoder<RelatedChangeOfServiceCondition>): _Element {
    const _components: _Element[] = [];
    if (value.userLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.userLocationInformation, $.BER));
    }
    if (value.threeGPP2UserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => $._encodeOctetString, $.BER)(value.threeGPP2UserLocationInformation, $.BER));
    }
    if (value.presenceReportingAreaStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => _encode_PresenceReportingAreaStatus, $.BER)(value.presenceReportingAreaStatus, $.BER));
    }
    if (value.userCSGInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => _encode_UserCSGInformation, $.BER)(value.userCSGInformation, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.uWANUserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 32, () => _encode_UWANUserLocationInfo, $.BER)(value.uWANUserLocationInformation, $.BER));
    }
    if (value.relatedServiceConditionChange !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 33, () => _encode_ServiceConditionChange, $.BER)(value.relatedServiceConditionChange, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RelatedChangeOfServiceCondition(value, elGetter);
}


/* eslint-enable */
