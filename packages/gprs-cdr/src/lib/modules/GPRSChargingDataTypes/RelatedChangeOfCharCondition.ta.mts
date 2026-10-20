/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ChangeCondition, _decode_ChangeCondition, _encode_ChangeCondition, _enum_for_ChangeCondition } from "../GPRSChargingDataTypes/ChangeCondition.ta.mjs";
// export { ChangeCondition, _enum_for_ChangeCondition, ChangeCondition_qoSChange /* IMPORTED_LONG_ENUMERATION_ITEM */, qoSChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_tariffTime /* IMPORTED_LONG_ENUMERATION_ITEM */, tariffTime /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_recordClosure /* IMPORTED_LONG_ENUMERATION_ITEM */, recordClosure /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_cGI_SAICHange /* IMPORTED_LONG_ENUMERATION_ITEM */, cGI_SAICHange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_rAIChange /* IMPORTED_LONG_ENUMERATION_ITEM */, rAIChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_dT_Establishment /* IMPORTED_LONG_ENUMERATION_ITEM */, dT_Establishment /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_dT_Removal /* IMPORTED_LONG_ENUMERATION_ITEM */, dT_Removal /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_eCGIChange /* IMPORTED_LONG_ENUMERATION_ITEM */, eCGIChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_tAIChange /* IMPORTED_LONG_ENUMERATION_ITEM */, tAIChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_userLocationChange /* IMPORTED_LONG_ENUMERATION_ITEM */, userLocationChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_userCSGInformationChange /* IMPORTED_LONG_ENUMERATION_ITEM */, userCSGInformationChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_presenceInPRAChange /* IMPORTED_LONG_ENUMERATION_ITEM */, presenceInPRAChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_removalOfAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, removalOfAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_unusabilityOfAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, unusabilityOfAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_indirectChangeCondition /* IMPORTED_LONG_ENUMERATION_ITEM */, indirectChangeCondition /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_userPlaneToUEChange /* IMPORTED_LONG_ENUMERATION_ITEM */, userPlaneToUEChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_servingPLMNRateControlChange /* IMPORTED_LONG_ENUMERATION_ITEM */, servingPLMNRateControlChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_threeGPPPSDataOffStatusChange /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPPSDataOffStatusChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_aPNRateControlChange /* IMPORTED_LONG_ENUMERATION_ITEM */, aPNRateControlChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ChangeCondition, _encode_ChangeCondition } from "../GPRSChargingDataTypes/ChangeCondition.ta.mjs";
import { PresenceReportingAreaStatus, _decode_PresenceReportingAreaStatus, _encode_PresenceReportingAreaStatus, _enum_for_PresenceReportingAreaStatus } from "../GPRSChargingDataTypes/PresenceReportingAreaStatus.ta.mjs";
// export { PresenceReportingAreaStatus, _enum_for_PresenceReportingAreaStatus, PresenceReportingAreaStatus_insideArea /* IMPORTED_LONG_ENUMERATION_ITEM */, insideArea /* IMPORTED_SHORT_ENUMERATION_ITEM */, PresenceReportingAreaStatus_outsideArea /* IMPORTED_LONG_ENUMERATION_ITEM */, outsideArea /* IMPORTED_SHORT_ENUMERATION_ITEM */, PresenceReportingAreaStatus_inactive /* IMPORTED_LONG_ENUMERATION_ITEM */, inactive /* IMPORTED_SHORT_ENUMERATION_ITEM */, PresenceReportingAreaStatus_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PresenceReportingAreaStatus, _encode_PresenceReportingAreaStatus } from "../GPRSChargingDataTypes/PresenceReportingAreaStatus.ta.mjs";
import { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../GPRSChargingDataTypes/UserCSGInformation.ta.mjs";
// export { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../GPRSChargingDataTypes/UserCSGInformation.ta.mjs";
import { UWANUserLocationInfo, _decode_UWANUserLocationInfo, _encode_UWANUserLocationInfo } from "../GPRSChargingDataTypes/UWANUserLocationInfo.ta.mjs";
// export { UWANUserLocationInfo, _decode_UWANUserLocationInfo, _encode_UWANUserLocationInfo } from "../GPRSChargingDataTypes/UWANUserLocationInfo.ta.mjs";


/**
 * @summary RelatedChangeOfCharCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RelatedChangeOfCharCondition ::= SEQUENCE {
 *    changeCondition               [5] IMPLICIT ChangeCondition,
 *    changeTime                    [6] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    userLocationInformation       [8] IMPLICIT OCTET STRING OPTIONAL,
 *    presenceReportingAreaStatus   [11] IMPLICIT PresenceReportingAreaStatus OPTIONAL,
 *    userCSGInformation            [12] IMPLICIT UserCSGInformation OPTIONAL,
 *    rATType                       [15] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    uWANUserLocationInformation   [17] IMPLICIT UWANUserLocationInfo OPTIONAL}
 * ```
 * 
 * @class
 */
export
class RelatedChangeOfCharCondition {
    /**
     * @summary `changeCondition`.
     * @public
     * @readonly
     */
    readonly changeCondition: ChangeCondition;
    /**
     * @summary `changeTime`.
     * @public
     * @readonly
     */
    readonly changeTime: OCTET_STRING;
    /**
     * @summary `userLocationInformation`.
     * @public
     * @readonly
     */
    readonly userLocationInformation: OPTIONAL<OCTET_STRING>;
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

    constructor (
        changeCondition: ChangeCondition,
        changeTime: OCTET_STRING,
        userLocationInformation: OPTIONAL<OCTET_STRING>,
        presenceReportingAreaStatus: OPTIONAL<PresenceReportingAreaStatus>,
        userCSGInformation: OPTIONAL<UserCSGInformation>,
        rATType: OPTIONAL<INTEGER>,
        uWANUserLocationInformation: OPTIONAL<UWANUserLocationInfo>
    ) {
        this.changeCondition = changeCondition;
        this.changeTime = changeTime;
        this.userLocationInformation = userLocationInformation;
        this.presenceReportingAreaStatus = presenceReportingAreaStatus;
        this.userCSGInformation = userCSGInformation;
        this.rATType = rATType;
        this.uWANUserLocationInformation = uWANUserLocationInformation;
    }

    /**
     * @summary Restructures an object into a RelatedChangeOfCharCondition
     * @description
     * 
     * This takes an `object` and converts it to a `RelatedChangeOfCharCondition`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RelatedChangeOfCharCondition`.
     * @returns {RelatedChangeOfCharCondition}
     */
    public static _from_object (_o: { [_K in keyof (RelatedChangeOfCharCondition)]: (RelatedChangeOfCharCondition)[_K] }): RelatedChangeOfCharCondition {
        return new RelatedChangeOfCharCondition(_o.changeCondition, _o.changeTime, _o.userLocationInformation, _o.presenceReportingAreaStatus, _o.userCSGInformation, _o.rATType, _o.uWANUserLocationInformation);
    }

        /**
         * @summary The enum used as the type of the component `changeCondition`
         * @public
         * @static
         */

    public static _enum_for_changeCondition = _enum_for_ChangeCondition;        /**
         * @summary The enum used as the type of the component `presenceReportingAreaStatus`
         * @public
         * @static
         */

    public static _enum_for_presenceReportingAreaStatus = _enum_for_PresenceReportingAreaStatus;
}

/**
 * @summary The Leading Root Component Types of RelatedChangeOfCharCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RelatedChangeOfCharCondition: $.ComponentSpec[] = [
    new $.ComponentSpec("changeCondition", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("changeTime", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("userLocationInformation", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("presenceReportingAreaStatus", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("userCSGInformation", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("uWANUserLocationInformation", true, $.hasTag(_TagClass.context, 17))
];

/**
 * @summary The Trailing Root Component Types of RelatedChangeOfCharCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RelatedChangeOfCharCondition: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RelatedChangeOfCharCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RelatedChangeOfCharCondition: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RelatedChangeOfCharCondition: $.ASN1Decoder<RelatedChangeOfCharCondition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RelatedChangeOfCharCondition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RelatedChangeOfCharCondition (el: _Element): RelatedChangeOfCharCondition {
    if (!_cached_decoder_for_RelatedChangeOfCharCondition) { _cached_decoder_for_RelatedChangeOfCharCondition = function (el: _Element): RelatedChangeOfCharCondition {
    let changeCondition!: ChangeCondition;
    let changeTime!: OCTET_STRING;
    let userLocationInformation: OPTIONAL<OCTET_STRING>;
    let presenceReportingAreaStatus: OPTIONAL<PresenceReportingAreaStatus>;
    let userCSGInformation: OPTIONAL<UserCSGInformation>;
    let rATType: OPTIONAL<INTEGER>;
    let uWANUserLocationInformation: OPTIONAL<UWANUserLocationInfo>;
    const callbacks: $.DecodingMap = {
        "changeCondition": (_el: _Element): void => { changeCondition = $._decode_implicit<ChangeCondition>(() => _decode_ChangeCondition)(_el); },
        "changeTime": (_el: _Element): void => { changeTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "userLocationInformation": (_el: _Element): void => { userLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "presenceReportingAreaStatus": (_el: _Element): void => { presenceReportingAreaStatus = $._decode_implicit<PresenceReportingAreaStatus>(() => _decode_PresenceReportingAreaStatus)(_el); },
        "userCSGInformation": (_el: _Element): void => { userCSGInformation = $._decode_implicit<UserCSGInformation>(() => _decode_UserCSGInformation)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "uWANUserLocationInformation": (_el: _Element): void => { uWANUserLocationInformation = $._decode_implicit<UWANUserLocationInfo>(() => _decode_UWANUserLocationInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RelatedChangeOfCharCondition,
        _extension_additions_list_spec_for_RelatedChangeOfCharCondition,
        _root_component_type_list_2_spec_for_RelatedChangeOfCharCondition,
        undefined,
    );
    return new RelatedChangeOfCharCondition(
        changeCondition,
        changeTime,
        userLocationInformation,
        presenceReportingAreaStatus,
        userCSGInformation,
        rATType,
        uWANUserLocationInformation
    );
}; }
    return _cached_decoder_for_RelatedChangeOfCharCondition(el);
}

let _cached_encoder_for_RelatedChangeOfCharCondition: $.ASN1Encoder<RelatedChangeOfCharCondition> | null = null;

/**
 * @summary Encodes a(n) RelatedChangeOfCharCondition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelatedChangeOfCharCondition, encoded as an ASN.1 Element.
 */
export
function _encode_RelatedChangeOfCharCondition (value: RelatedChangeOfCharCondition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RelatedChangeOfCharCondition) { _cached_encoder_for_RelatedChangeOfCharCondition = function (value: RelatedChangeOfCharCondition, elGetter: $.ASN1Encoder<RelatedChangeOfCharCondition>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_ChangeCondition, $.BER)(value.changeCondition, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.changeTime, $.BER));
    if (value.userLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.userLocationInformation, $.BER));
    }
    if (value.presenceReportingAreaStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_PresenceReportingAreaStatus, $.BER)(value.presenceReportingAreaStatus, $.BER));
    }
    if (value.userCSGInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_UserCSGInformation, $.BER)(value.userCSGInformation, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.uWANUserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_UWANUserLocationInfo, $.BER)(value.uWANUserLocationInformation, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RelatedChangeOfCharCondition(value, elGetter);
}


/* eslint-enable */
