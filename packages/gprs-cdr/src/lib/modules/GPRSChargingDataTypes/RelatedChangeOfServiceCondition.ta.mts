/* eslint-disable */
import {
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PresenceReportingAreaStatus, _decode_PresenceReportingAreaStatus, _encode_PresenceReportingAreaStatus, _enum_for_PresenceReportingAreaStatus } from "../GPRSChargingDataTypes/PresenceReportingAreaStatus.ta.mjs";
import { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../GPRSChargingDataTypes/UserCSGInformation.ta.mjs";
import { UWANUserLocationInfo, _decode_UWANUserLocationInfo, _encode_UWANUserLocationInfo } from "../GPRSChargingDataTypes/UWANUserLocationInfo.ta.mjs";
import { type ServiceConditionChange, _decode_ServiceConditionChange, _encode_ServiceConditionChange } from "../GPRSChargingDataTypes/ServiceConditionChange.ta.mjs";


/**
 * @summary RelatedChangeOfServiceCondition
 * @description
 *
 * Related Change of Service Condition indicates the reason a related
 * container was closed when the current container is indirectly closed and
 * the supplemental information for the event. This information is applicable
 * when charging per IP-CAN session is active for a multi-access PDN
 * connection.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
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
     * @description
     *
     * User location information contains the user location (e.g. CGI/SAI,
     * ECGI/TAI or RAI) where the UE was located during the service data
     * container recording interval. This is included in the service data
     * container only if previous container's change condition is "user location
     * change" or one of the "CGI/SAI, ECGI or TAI or RAI Change". Note the user
     * location information in PGW-CDR/TDF-CDR main level contains the location
     * where the UE was when PGW-CDR/TDF-CDR was opened, and the "Last user
     * location information" in PGW-CDR main level contains the location where
     * the UE was when PGW-CDR is closed.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
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
     * @description
     *
     * Presence Reporting Area Status contains the status of the UE presence
     * (i.e. indication on whether the UE is inside or outside) in the Presence
     * Reporting Area(s) identified by "Presence Reporting Area identifier(s)"
     * contained in PGW-CDR main level. This is included in the service data
     * container when the initial status is reported after opening of PGW-CDR, or
     * if previous container's change condition is "Presence in Presence
     * Reporting Area Change". This field is not applicable in multiple PRA(s).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * @public
     * @readonly
     */
    readonly presenceReportingAreaStatus: OPTIONAL<PresenceReportingAreaStatus>;
    /**
     * @summary `userCSGInformation`.
     * @description
     *
     * User CSG information contains the status of the user accessing a CSG cell
     * (CSG ID within the PLMN, Access mode and indication on CSG membership)
     * during the service data container recording interval. This is included in
     * the service data container only if previous container's change condition
     * is "user CSG information change". Note the "user CSG information" in
     * PGW-CDR main level contains the "user CSG information" when PGW-CDR was
     * opened.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * @public
     * @readonly
     */
    readonly userCSGInformation: OPTIONAL<UserCSGInformation>;
    /**
     * @summary `rATType`.
     * @description
     *
     * Holds the value of RAT Type, as provided to S-GW and P-GW, specified in TS
     * 29.061 [216] and also provided to the TDF as specified in TS 29.212 [220].
     * The field is provided by the SGSN/MME and transferred to the S-GW/P-GW
     * during the IP-CAN bearer activation/modification and transferred to the
     * TDF during the TDF session establishment/modification.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.47.
     *
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `uWANUserLocationInformation`.
     * @description
     *
     * UWAN User Location Information contains the Untrusted Wireless Access
     * Network (UWAN) user location during the service data container recording
     * interval. This is included in the service data container only if previous
     * container's change condition is "user location change". Note the user
     * location information in PGW-CDR main level contains the location where the
     * UE was when PGW-CDR was opened.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * @public
     * @readonly
     */
    readonly uWANUserLocationInformation: OPTIONAL<UWANUserLocationInfo>;
    /**
     * @summary `relatedServiceConditionChange`.
     * @description
     *
     * Related Change of Service Condition indicates the reason a related
     * container was closed when the current container is indirectly closed and
     * the supplemental information for the event. This information is applicable
     * when charging per IP-CAN session is active for a multi-access PDN
     * connection.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * @public
     * @readonly
     */
    readonly relatedServiceConditionChange: OPTIONAL<ServiceConditionChange>;

    constructor (
        userLocationInformation?: OPTIONAL<OCTET_STRING>,
        threeGPP2UserLocationInformation?: OPTIONAL<OCTET_STRING>,
        presenceReportingAreaStatus?: OPTIONAL<PresenceReportingAreaStatus>,
        userCSGInformation?: OPTIONAL<UserCSGInformation>,
        rATType?: OPTIONAL<INTEGER>,
        uWANUserLocationInformation?: OPTIONAL<UWANUserLocationInfo>,
        relatedServiceConditionChange?: OPTIONAL<ServiceConditionChange>
    ) {
        this.userLocationInformation = userLocationInformation;
        this.threeGPP2UserLocationInformation = threeGPP2UserLocationInformation;
        this.presenceReportingAreaStatus = presenceReportingAreaStatus;
        this.userCSGInformation = userCSGInformation;
        this.rATType = rATType;
        this.uWANUserLocationInformation = uWANUserLocationInformation;
        this.relatedServiceConditionChange = relatedServiceConditionChange;
    
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("RelatedChangeOfServiceCondition.rATType violates INTEGER range");
        }
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
    if (!_cached_encoder_for_RelatedChangeOfServiceCondition) { _cached_encoder_for_RelatedChangeOfServiceCondition = function (value: RelatedChangeOfServiceCondition, _elGetter: $.ASN1Encoder<RelatedChangeOfServiceCondition>): _Element {
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
