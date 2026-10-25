/* eslint-disable */
import {
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ChangeCondition, _decode_ChangeCondition, _encode_ChangeCondition, _enum_for_ChangeCondition } from "../GPRSChargingDataTypes/ChangeCondition.ta.mjs";
import { PresenceReportingAreaStatus, _decode_PresenceReportingAreaStatus, _encode_PresenceReportingAreaStatus, _enum_for_PresenceReportingAreaStatus } from "../GPRSChargingDataTypes/PresenceReportingAreaStatus.ta.mjs";
import { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../GPRSChargingDataTypes/UserCSGInformation.ta.mjs";
import { UWANUserLocationInfo, _decode_UWANUserLocationInfo, _encode_UWANUserLocationInfo } from "../GPRSChargingDataTypes/UWANUserLocationInfo.ta.mjs";


/**
 * @summary RelatedChangeOfCharCondition
 * @description
 * 
 * Change condition on an alternate access of a multi-access PDN connection
 * that indirectly caused this traffic-volume container to close, with
 * optional supplemental information such as user location (table 6.1.3.2).
 * Used when NBIFOM is accepted for the IP-CAN session.
 * 
 * 3GPP TS 32.251 V19.0.0.
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
     * @description
     *
     * This field contains the User Location Information as described in TS
     * 29.060 [215] for GTP case (e.g. CGI, SAI, RAI), TS 29.274 [223] for eGTP
     * case (e.g. CGI, SAI, RAI TAI and ECGI) and TS 29.275 [224] for PMIP case.
     * The field is provided by the SGSN/MME and transferred to the S-GW/P-GW/TDF
     * during the IP-CAN bearer activation/modification and/or TDF session
     * establishment/modification.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.75.
     *
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
     * @description
     *
     * This field contains the "User CSG Information" status of the user
     * accessing a CSG cell: it comprises CSG ID within the PLMN, Access mode and
     * indication on CSG membership for the user when hybrid access applies, as
     * defined in TS 29.060 [215] for GPRS case, and in TS 29.274 [223] for EPC
     * case.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.74.
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
     * This field contains the UE location in an Untrusted Wireless Access
     * Network (UWAN) which includes the UE local IP address and optionally
     * either UDP source port number (if NAT is detected) or TCP source port
     * number. It may also include WLAN location information the ePDG may have
     * received from the 3GPP AAA server about the UE, as TWAN Identifier defined
     * in TS 29.274 [223].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.77.
     *
     * @public
     * @readonly
     */
    readonly uWANUserLocationInformation: OPTIONAL<UWANUserLocationInfo>;

    constructor (
        changeCondition: ChangeCondition,
        changeTime: OCTET_STRING,
        userLocationInformation?: OPTIONAL<OCTET_STRING>,
        presenceReportingAreaStatus?: OPTIONAL<PresenceReportingAreaStatus>,
        userCSGInformation?: OPTIONAL<UserCSGInformation>,
        rATType?: OPTIONAL<INTEGER>,
        uWANUserLocationInformation?: OPTIONAL<UWANUserLocationInfo>
    ) {
        this.changeCondition = changeCondition;
        this.changeTime = changeTime;
        this.userLocationInformation = userLocationInformation;
        this.presenceReportingAreaStatus = presenceReportingAreaStatus;
        this.userCSGInformation = userCSGInformation;
        this.rATType = rATType;
        this.uWANUserLocationInformation = uWANUserLocationInformation;
    
        if ((this.changeTime.length !== 9)) {
            throw new ASN1SizeError("RelatedChangeOfCharCondition.changeTime violates SIZE constraint");
        }
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("RelatedChangeOfCharCondition.rATType violates INTEGER range");
        }
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

    public static _enum_for_changeCondition: typeof _enum_for_ChangeCondition = _enum_for_ChangeCondition;        /**
         * @summary The enum used as the type of the component `presenceReportingAreaStatus`
         * @public
         * @static
         */

    public static _enum_for_presenceReportingAreaStatus: typeof _enum_for_PresenceReportingAreaStatus = _enum_for_PresenceReportingAreaStatus;
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
    if (!_cached_encoder_for_RelatedChangeOfCharCondition) { _cached_encoder_for_RelatedChangeOfCharCondition = function (value: RelatedChangeOfCharCondition, _elGetter: $.ASN1Encoder<RelatedChangeOfCharCondition>): _Element {
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
