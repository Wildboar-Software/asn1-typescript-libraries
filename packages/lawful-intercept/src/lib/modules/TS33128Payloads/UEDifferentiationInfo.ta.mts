/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PeriodicCommunicationIndicator, _decode_PeriodicCommunicationIndicator, _encode_PeriodicCommunicationIndicator, _enum_for_PeriodicCommunicationIndicator } from "../TS33128Payloads/PeriodicCommunicationIndicator.ta.mjs";
// export { PeriodicCommunicationIndicator, _enum_for_PeriodicCommunicationIndicator, PeriodicCommunicationIndicator_periodic /* IMPORTED_LONG_ENUMERATION_ITEM */, periodic /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodicCommunicationIndicator_nonPeriodic /* IMPORTED_LONG_ENUMERATION_ITEM */, nonPeriodic /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PeriodicCommunicationIndicator, _encode_PeriodicCommunicationIndicator } from "../TS33128Payloads/PeriodicCommunicationIndicator.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";


/**
 * @summary UEDifferentiationInfo
 * @description
 * 
 * The UEDifferentiationInfo contains the UE expected behavior information. The
 * UEDifferentiationInfo type is derived from UE Differentiation Information IE
 * defined in TS 38.413 [23] clause 9.3.1.144.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.12.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UEDifferentiationInfo ::= SEQUENCE
 * {
 *     periodicCommunicationIndicator [1] PeriodicCommunicationIndicator OPTIONAL,
 *     periodicTime                   [2] INTEGER OPTIONAL,
 *     scheduledCommunicationTime     [3] SBIType OPTIONAL,
 *     stationaryIndication           [4] SBIType OPTIONAL,
 *     trafficProfile                 [5] SBIType OPTIONAL,
 *     batteryIndication              [6] SBIType OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UEDifferentiationInfo {
    /**
     * @summary `periodicCommunicationIndicator`.
     * @description
     *
     * Indicates whether the UE communicates periodically or on demand, if
     * available. See TS 38.413 [23] clause 9.3.1.144.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.12.
     *
     * @public
     * @readonly
     */
    readonly periodicCommunicationIndicator: OPTIONAL<PeriodicCommunicationIndicator>;
    /**
     * @summary `periodicTime`.
     * @description
     *
     * Indicates interval time of periodic communication expressed in seconds,
     * if available. See TS 38.413 [23] clause 9.3.1.144.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.12.
     *
     * @public
     * @readonly
     */
    readonly periodicTime: OPTIONAL<INTEGER>;
    /**
     * @summary `scheduledCommunicationTime`.
     * @description
     *
     * Provides time zone and day of the week when the UE is available for
     * communication, if available, See TS 38.413 [23] clause 9.3.1.144. Encoded
     * according to TS 29.571 [17] clause 5.4.4.41. The SBIReference for this
     * parameter shall be populated with
     * 'TS29571_CommonData.yaml#/components/schemas/ScheduledCommunicationTime'.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.12.
     *
     * @public
     * @readonly
     */
    readonly scheduledCommunicationTime: OPTIONAL<SBIType>;
    /**
     * @summary `stationaryIndication`.
     * @description
     *
     * Indicates whether the UE is stationary or mobile, if available. See TS
     * 38.413 [23] clause 9.3.1.144. Encoded according to TS 29.571 [17] clause
     * 5.4.3.21. The SBIReference for this parameter shall be populated with
     * 'TS29571_CommonData.yaml#/components/schemas/StationaryIndication'.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.12.
     *
     * @public
     * @readonly
     */
    readonly stationaryIndication: OPTIONAL<SBIType>;
    /**
     * @summary `trafficProfile`.
     * @description
     *
     * Identifies the type of data transmission, if available: single packet
     * transmission (UL or DL), dual packet transmission (UL with subsequent DL
     * or DL with subsequent UL), multiple packets transmission. See TS 38.413
     * [23] clause 9.3.1.144. Encoded according to TS 29.571 [17] clause
     * 5.4.3.25. The SBIReference for this parameter shall be populated with
     * 'TS29571_CommonData.yaml#/components/schemas/TrafficProfile'.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.12.
     *
     * @public
     * @readonly
     */
    readonly trafficProfile: OPTIONAL<SBIType>;
    /**
     * @summary `batteryIndication`.
     * @description
     *
     * Identifies power consumption criticality for the UE, if available: if the
     * UE is battery powered but the battery is not rechargeable/not
     * replaceable, battery powered withrechargeable/replaceable battery, or not
     * battery powered. See TS 38.413 [23] clause 9.3.1.144. Encoded according
     * to TS 29.571 [17] clause 5.4.4.43. The SBIReference for this parameter
     * shall be populated with
     * 'TS29571_CommonData.yaml#/components/schemas/BatteryIndication'.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.12.
     *
     * @public
     * @readonly
     */
    readonly batteryIndication: OPTIONAL<SBIType>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        periodicCommunicationIndicator?: OPTIONAL<PeriodicCommunicationIndicator>,
        periodicTime?: OPTIONAL<INTEGER>,
        scheduledCommunicationTime?: OPTIONAL<SBIType>,
        stationaryIndication?: OPTIONAL<SBIType>,
        trafficProfile?: OPTIONAL<SBIType>,
        batteryIndication?: OPTIONAL<SBIType>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.periodicCommunicationIndicator = periodicCommunicationIndicator;
        this.periodicTime = periodicTime;
        this.scheduledCommunicationTime = scheduledCommunicationTime;
        this.stationaryIndication = stationaryIndication;
        this.trafficProfile = trafficProfile;
        this.batteryIndication = batteryIndication;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a UEDifferentiationInfo
     * @description
     * 
     * This takes an `object` and converts it to a `UEDifferentiationInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UEDifferentiationInfo`.
     * @returns {UEDifferentiationInfo}
     */
    public static _from_object (_o: { [_K in keyof (UEDifferentiationInfo)]: (UEDifferentiationInfo)[_K] }): UEDifferentiationInfo {
        return new UEDifferentiationInfo(_o.periodicCommunicationIndicator, _o.periodicTime, _o.scheduledCommunicationTime, _o.stationaryIndication, _o.trafficProfile, _o.batteryIndication, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `periodicCommunicationIndicator`
         * @public
         * @static
         */

    public static _enum_for_periodicCommunicationIndicator = _enum_for_PeriodicCommunicationIndicator;
}

/**
 * @summary The Leading Root Component Types of UEDifferentiationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UEDifferentiationInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("periodicCommunicationIndicator", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("periodicTime", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("scheduledCommunicationTime", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("stationaryIndication", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("trafficProfile", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("batteryIndication", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of UEDifferentiationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UEDifferentiationInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UEDifferentiationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UEDifferentiationInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UEDifferentiationInfo: $.ASN1Decoder<UEDifferentiationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UEDifferentiationInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UEDifferentiationInfo (el: _Element): UEDifferentiationInfo {
    if (!_cached_decoder_for_UEDifferentiationInfo) { _cached_decoder_for_UEDifferentiationInfo = function (el: _Element): UEDifferentiationInfo {
    let periodicCommunicationIndicator: OPTIONAL<PeriodicCommunicationIndicator>;
    let periodicTime: OPTIONAL<INTEGER>;
    let scheduledCommunicationTime: OPTIONAL<SBIType>;
    let stationaryIndication: OPTIONAL<SBIType>;
    let trafficProfile: OPTIONAL<SBIType>;
    let batteryIndication: OPTIONAL<SBIType>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "periodicCommunicationIndicator": (_el: _Element): void => { periodicCommunicationIndicator = $._decode_implicit<PeriodicCommunicationIndicator>(() => _decode_PeriodicCommunicationIndicator)(_el); },
        "periodicTime": (_el: _Element): void => { periodicTime = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "scheduledCommunicationTime": (_el: _Element): void => { scheduledCommunicationTime = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "stationaryIndication": (_el: _Element): void => { stationaryIndication = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "trafficProfile": (_el: _Element): void => { trafficProfile = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "batteryIndication": (_el: _Element): void => { batteryIndication = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UEDifferentiationInfo,
        _extension_additions_list_spec_for_UEDifferentiationInfo,
        _root_component_type_list_2_spec_for_UEDifferentiationInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new UEDifferentiationInfo(
        periodicCommunicationIndicator,
        periodicTime,
        scheduledCommunicationTime,
        stationaryIndication,
        trafficProfile,
        batteryIndication,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_UEDifferentiationInfo(el);
}

let _cached_encoder_for_UEDifferentiationInfo: $.ASN1Encoder<UEDifferentiationInfo> | null = null;

/**
 * @summary Encodes a(n) UEDifferentiationInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UEDifferentiationInfo, encoded as an ASN.1 Element.
 */
export
function _encode_UEDifferentiationInfo (value: UEDifferentiationInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UEDifferentiationInfo) { _cached_encoder_for_UEDifferentiationInfo = function (value: UEDifferentiationInfo, elGetter: $.ASN1Encoder<UEDifferentiationInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.periodicCommunicationIndicator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_PeriodicCommunicationIndicator, $.BER)(value.periodicCommunicationIndicator, $.BER);
    }
    if (value.periodicTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.periodicTime, $.BER);
    }
    if (value.scheduledCommunicationTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_SBIType, $.BER)(value.scheduledCommunicationTime, $.BER);
    }
    if (value.stationaryIndication !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_SBIType, $.BER)(value.stationaryIndication, $.BER);
    }
    if (value.trafficProfile !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_SBIType, $.BER)(value.trafficProfile, $.BER);
    }
    if (value.batteryIndication !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_SBIType, $.BER)(value.batteryIndication, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_UEDifferentiationInfo(value, elGetter);
}


/* eslint-enable */
