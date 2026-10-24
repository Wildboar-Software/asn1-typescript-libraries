/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type GeographicArea, _decode_GeographicArea, _encode_GeographicArea } from "../TS33128Payloads/GeographicArea.ta.mjs";
// export { GeographicArea, _decode_GeographicArea, _encode_GeographicArea } from "../TS33128Payloads/GeographicArea.ta.mjs";
import { AccuracyFulfilmentIndicator, _decode_AccuracyFulfilmentIndicator, _encode_AccuracyFulfilmentIndicator, _enum_for_AccuracyFulfilmentIndicator } from "../TS33128Payloads/AccuracyFulfilmentIndicator.ta.mjs";
// export { AccuracyFulfilmentIndicator, _enum_for_AccuracyFulfilmentIndicator, AccuracyFulfilmentIndicator_requestedAccuracyFulfilled /* IMPORTED_LONG_ENUMERATION_ITEM */, requestedAccuracyFulfilled /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccuracyFulfilmentIndicator_requestedAccuracyNotFulfilled /* IMPORTED_LONG_ENUMERATION_ITEM */, requestedAccuracyNotFulfilled /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccuracyFulfilmentIndicator, _encode_AccuracyFulfilmentIndicator } from "../TS33128Payloads/AccuracyFulfilmentIndicator.ta.mjs";
import { type AgeOfLocation, _decode_AgeOfLocation, _encode_AgeOfLocation } from "../TS33128Payloads/AgeOfLocation.ta.mjs";
// export { AgeOfLocation, _decode_AgeOfLocation, _encode_AgeOfLocation } from "../TS33128Payloads/AgeOfLocation.ta.mjs";
import { type VelocityEstimate, _decode_VelocityEstimate, _encode_VelocityEstimate } from "../TS33128Payloads/VelocityEstimate.ta.mjs";
// export { VelocityEstimate, _decode_VelocityEstimate, _encode_VelocityEstimate } from "../TS33128Payloads/VelocityEstimate.ta.mjs";
import { CivicAddress, _decode_CivicAddress, _encode_CivicAddress } from "../TS33128Payloads/CivicAddress.ta.mjs";
// export { CivicAddress, _decode_CivicAddress, _encode_CivicAddress } from "../TS33128Payloads/CivicAddress.ta.mjs";
import { PositioningMethodAndUsage, _decode_PositioningMethodAndUsage, _encode_PositioningMethodAndUsage } from "../TS33128Payloads/PositioningMethodAndUsage.ta.mjs";
// export { PositioningMethodAndUsage, _decode_PositioningMethodAndUsage, _encode_PositioningMethodAndUsage } from "../TS33128Payloads/PositioningMethodAndUsage.ta.mjs";
import { GNSSPositioningMethodAndUsage, _decode_GNSSPositioningMethodAndUsage, _encode_GNSSPositioningMethodAndUsage } from "../TS33128Payloads/GNSSPositioningMethodAndUsage.ta.mjs";
// export { GNSSPositioningMethodAndUsage, _decode_GNSSPositioningMethodAndUsage, _encode_GNSSPositioningMethodAndUsage } from "../TS33128Payloads/GNSSPositioningMethodAndUsage.ta.mjs";
import { ECGI, _decode_ECGI, _encode_ECGI } from "../TS33128Payloads/ECGI.ta.mjs";
// export { ECGI, _decode_ECGI, _encode_ECGI } from "../TS33128Payloads/ECGI.ta.mjs";
import { NCGI, _decode_NCGI, _encode_NCGI } from "../TS33128Payloads/NCGI.ta.mjs";
// export { NCGI, _decode_NCGI, _encode_NCGI } from "../TS33128Payloads/NCGI.ta.mjs";
import { type Altitude, _decode_Altitude, _encode_Altitude } from "../TS33128Payloads/Altitude.ta.mjs";
// export { Altitude, _decode_Altitude, _encode_Altitude } from "../TS33128Payloads/Altitude.ta.mjs";
import { type BarometricPressure, _decode_BarometricPressure, _encode_BarometricPressure } from "../TS33128Payloads/BarometricPressure.ta.mjs";
// export { BarometricPressure, _decode_BarometricPressure, _encode_BarometricPressure } from "../TS33128Payloads/BarometricPressure.ta.mjs";


/**
 * @summary LocationData
 * @description
 * 
 * The LocationData type is derived from the data present in the LocationData
 * type defined in TS 29.572 [24] clause 6.1.6.2.3.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.37.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationData ::= SEQUENCE
 * {
 *     locationEstimate            [1] GeographicArea,
 *     accuracyFulfilmentIndicator [2] AccuracyFulfilmentIndicator OPTIONAL,
 *     ageOfLocationEstimate       [3] AgeOfLocation OPTIONAL,
 *     velocityEstimate            [4] VelocityEstimate OPTIONAL,
 *     civicAddress                [5] CivicAddress OPTIONAL,
 *     positioningDataList         [6] SET OF PositioningMethodAndUsage OPTIONAL,
 *     gNSSPositioningDataList     [7] SET OF GNSSPositioningMethodAndUsage OPTIONAL,
 *     eCGI                        [8] ECGI OPTIONAL,
 *     nCGI                        [9] NCGI OPTIONAL,
 *     altitude                    [10] Altitude OPTIONAL,
 *     barometricPressure          [11] BarometricPressure OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class LocationData {
    /**
     * @summary `locationEstimate`.
     * @description
     *
     * This field shall contain an estimate of the location of the UE in
     * universal coordinates and the accuracy of the estimate. TS 29.572 [24]
     * clause 6.1.6.2.5.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.37.
     *
     * @public
     * @readonly
     */
    readonly locationEstimate: GeographicArea;
    /**
     * @summary `accuracyFulfilmentIndicator`.
     * @description
     *
     * This enumerated field shall be present to represent whether the requested
     * accuracy was fulfilled or not. Shall be encoded as described in TS 29.572
     * [24] clause 6.1.6.3.12.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.37.
     *
     * @public
     * @readonly
     */
    readonly accuracyFulfilmentIndicator: OPTIONAL<AccuracyFulfilmentIndicator>;
    /**
     * @summary `ageOfLocationEstimate`.
     * @description
     *
     * This field shall be present if information is available at the NF. Shall
     * be encoded as described in TS 29.572 [24] table 6.1.6.3.2-1.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.37.
     *
     * @public
     * @readonly
     */
    readonly ageOfLocationEstimate: OPTIONAL<AgeOfLocation>;
    /**
     * @summary `velocityEstimate`.
     * @description
     *
     * This field shall be present if information is available at the NF. Shall
     * be encoded as described in TS 29.572 [24] clause 6.1.6.2.17.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.37.
     *
     * @public
     * @readonly
     */
    readonly velocityEstimate: OPTIONAL<VelocityEstimate>;
    /**
     * @summary `civicAddress`.
     * @description
     *
     * This field shall be present if information is available at the NF. Shall
     * be encoded as described in TS 29.572 [24] clause 6.1.6.2.14.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.37.
     *
     * @public
     * @readonly
     */
    readonly civicAddress: OPTIONAL<CivicAddress>;
    /**
     * @summary `positioningDataList`.
     * @description
     *
     * This field shall be present if information is available at the NF. Shall
     * be encoded as described in TS 29.572 [24] clause 6.1.6.2.15.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.37.
     *
     * @public
     * @readonly
     */
    readonly positioningDataList: OPTIONAL<PositioningMethodAndUsage[]>;
    /**
     * @summary `gNSSPositioningDataList`.
     * @description
     *
     * This field shall be present if information is available at the NF. Shall
     * be encoded as described in TS 29.572 [24] clause 6.1.6.2.16.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.37.
     *
     * @public
     * @readonly
     */
    readonly gNSSPositioningDataList: OPTIONAL<GNSSPositioningMethodAndUsage[]>;
    /**
     * @summary `eCGI`.
     * @description
     *
     * This field shall be present if information is available at the NF. Shall
     * be encoded as described in TS 29.571 [17] clause 5.4.4.5.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.37.
     *
     * @public
     * @readonly
     */
    readonly eCGI: OPTIONAL<ECGI>;
    /**
     * @summary `nCGI`.
     * @description
     *
     * This field shall be present if information is available at the NF. Shall
     * be encoded as described in TS 29.571 [17] clause 5.4.4.6.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.37.
     *
     * @public
     * @readonly
     */
    readonly nCGI: OPTIONAL<NCGI>;
    /**
     * @summary `altitude`.
     * @description
     *
     * This field shall be present if information is available at the NF. Shall
     * be encoded as described in TS 29.572 [24] table 6.1.6.3.2-1.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.37.
     *
     * @public
     * @readonly
     */
    readonly altitude: OPTIONAL<Altitude>;
    /**
     * @summary `barometricPressure`.
     * @description
     *
     * This field shall be present if information is available at the NF. Shall
     * be encoded as described in TS 29.572 [24] table 6.1.6.3.2-1.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.37.
     *
     * @public
     * @readonly
     */
    readonly barometricPressure: OPTIONAL<BarometricPressure>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        locationEstimate: GeographicArea,
        accuracyFulfilmentIndicator?: OPTIONAL<AccuracyFulfilmentIndicator>,
        ageOfLocationEstimate?: OPTIONAL<AgeOfLocation>,
        velocityEstimate?: OPTIONAL<VelocityEstimate>,
        civicAddress?: OPTIONAL<CivicAddress>,
        positioningDataList?: OPTIONAL<PositioningMethodAndUsage[]>,
        gNSSPositioningDataList?: OPTIONAL<GNSSPositioningMethodAndUsage[]>,
        eCGI?: OPTIONAL<ECGI>,
        nCGI?: OPTIONAL<NCGI>,
        altitude?: OPTIONAL<Altitude>,
        barometricPressure?: OPTIONAL<BarometricPressure>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.locationEstimate = locationEstimate;
        this.accuracyFulfilmentIndicator = accuracyFulfilmentIndicator;
        this.ageOfLocationEstimate = ageOfLocationEstimate;
        this.velocityEstimate = velocityEstimate;
        this.civicAddress = civicAddress;
        this.positioningDataList = positioningDataList;
        this.gNSSPositioningDataList = gNSSPositioningDataList;
        this.eCGI = eCGI;
        this.nCGI = nCGI;
        this.altitude = altitude;
        this.barometricPressure = barometricPressure;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a LocationData
     * @description
     * 
     * This takes an `object` and converts it to a `LocationData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocationData`.
     * @returns {LocationData}
     */
    public static _from_object (_o: { [_K in keyof (LocationData)]: (LocationData)[_K] }): LocationData {
        return new LocationData(_o.locationEstimate, _o.accuracyFulfilmentIndicator, _o.ageOfLocationEstimate, _o.velocityEstimate, _o.civicAddress, _o.positioningDataList, _o.gNSSPositioningDataList, _o.eCGI, _o.nCGI, _o.altitude, _o.barometricPressure, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `accuracyFulfilmentIndicator`
         * @public
         * @static
         */

    public static _enum_for_accuracyFulfilmentIndicator = _enum_for_AccuracyFulfilmentIndicator;
}

/**
 * @summary The Leading Root Component Types of LocationData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocationData: $.ComponentSpec[] = [
    new $.ComponentSpec("locationEstimate", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("accuracyFulfilmentIndicator", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("ageOfLocationEstimate", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("velocityEstimate", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("civicAddress", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("positioningDataList", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("gNSSPositioningDataList", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("eCGI", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("nCGI", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("altitude", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("barometricPressure", true, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of LocationData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocationData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocationData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocationData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LocationData: $.ASN1Decoder<LocationData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationData (el: _Element): LocationData {
    if (!_cached_decoder_for_LocationData) { _cached_decoder_for_LocationData = function (el: _Element): LocationData {
    let locationEstimate!: GeographicArea;
    let accuracyFulfilmentIndicator: OPTIONAL<AccuracyFulfilmentIndicator>;
    let ageOfLocationEstimate: OPTIONAL<AgeOfLocation>;
    let velocityEstimate: OPTIONAL<VelocityEstimate>;
    let civicAddress: OPTIONAL<CivicAddress>;
    let positioningDataList: OPTIONAL<PositioningMethodAndUsage[]>;
    let gNSSPositioningDataList: OPTIONAL<GNSSPositioningMethodAndUsage[]>;
    let eCGI: OPTIONAL<ECGI>;
    let nCGI: OPTIONAL<NCGI>;
    let altitude: OPTIONAL<Altitude>;
    let barometricPressure: OPTIONAL<BarometricPressure>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "locationEstimate": (_el: _Element): void => { locationEstimate = $._decode_explicit<GeographicArea>(() => _decode_GeographicArea)(_el); },
        "accuracyFulfilmentIndicator": (_el: _Element): void => { accuracyFulfilmentIndicator = $._decode_implicit<AccuracyFulfilmentIndicator>(() => _decode_AccuracyFulfilmentIndicator)(_el); },
        "ageOfLocationEstimate": (_el: _Element): void => { ageOfLocationEstimate = $._decode_implicit<AgeOfLocation>(() => _decode_AgeOfLocation)(_el); },
        "velocityEstimate": (_el: _Element): void => { velocityEstimate = $._decode_explicit<VelocityEstimate>(() => _decode_VelocityEstimate)(_el); },
        "civicAddress": (_el: _Element): void => { civicAddress = $._decode_implicit<CivicAddress>(() => _decode_CivicAddress)(_el); },
        "positioningDataList": (_el: _Element): void => { positioningDataList = $._decode_implicit<PositioningMethodAndUsage[]>(() => $._decodeSetOf<PositioningMethodAndUsage>(() => _decode_PositioningMethodAndUsage))(_el); },
        "gNSSPositioningDataList": (_el: _Element): void => { gNSSPositioningDataList = $._decode_implicit<GNSSPositioningMethodAndUsage[]>(() => $._decodeSetOf<GNSSPositioningMethodAndUsage>(() => _decode_GNSSPositioningMethodAndUsage))(_el); },
        "eCGI": (_el: _Element): void => { eCGI = $._decode_implicit<ECGI>(() => _decode_ECGI)(_el); },
        "nCGI": (_el: _Element): void => { nCGI = $._decode_implicit<NCGI>(() => _decode_NCGI)(_el); },
        "altitude": (_el: _Element): void => { altitude = $._decode_implicit<Altitude>(() => _decode_Altitude)(_el); },
        "barometricPressure": (_el: _Element): void => { barometricPressure = $._decode_implicit<BarometricPressure>(() => _decode_BarometricPressure)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LocationData,
        _extension_additions_list_spec_for_LocationData,
        _root_component_type_list_2_spec_for_LocationData,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LocationData(
        locationEstimate,
        accuracyFulfilmentIndicator,
        ageOfLocationEstimate,
        velocityEstimate,
        civicAddress,
        positioningDataList,
        gNSSPositioningDataList,
        eCGI,
        nCGI,
        altitude,
        barometricPressure,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_LocationData(el);
}

let _cached_encoder_for_LocationData: $.ASN1Encoder<LocationData> | null = null;

/**
 * @summary Encodes a(n) LocationData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationData, encoded as an ASN.1 Element.
 */
export
function _encode_LocationData (value: LocationData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationData) { _cached_encoder_for_LocationData = function (value: LocationData, elGetter: $.ASN1Encoder<LocationData>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(11 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_GeographicArea, $.BER)(value.locationEstimate, $.BER);
    if (value.accuracyFulfilmentIndicator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_AccuracyFulfilmentIndicator, $.BER)(value.accuracyFulfilmentIndicator, $.BER);
    }
    if (value.ageOfLocationEstimate !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_AgeOfLocation, $.BER)(value.ageOfLocationEstimate, $.BER);
    }
    if (value.velocityEstimate !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_VelocityEstimate, $.BER)(value.velocityEstimate, $.BER);
    }
    if (value.civicAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_CivicAddress, $.BER)(value.civicAddress, $.BER);
    }
    if (value.positioningDataList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSetOf<PositioningMethodAndUsage>(() => _encode_PositioningMethodAndUsage, $.BER), $.BER)(value.positioningDataList, $.BER);
    }
    if (value.gNSSPositioningDataList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeSetOf<GNSSPositioningMethodAndUsage>(() => _encode_GNSSPositioningMethodAndUsage, $.BER), $.BER)(value.gNSSPositioningDataList, $.BER);
    }
    if (value.eCGI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_ECGI, $.BER)(value.eCGI, $.BER);
    }
    if (value.nCGI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_NCGI, $.BER)(value.nCGI, $.BER);
    }
    if (value.altitude !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_Altitude, $.BER)(value.altitude, $.BER);
    }
    if (value.barometricPressure !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_BarometricPressure, $.BER)(value.barometricPressure, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_LocationData(value, elGetter);
}


/* eslint-enable */
