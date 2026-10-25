/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LocationInfo, _decode_LocationInfo, _encode_LocationInfo } from "../TS33128Payloads/LocationInfo.ta.mjs";
// export { LocationInfo, _decode_LocationInfo, _encode_LocationInfo } from "../TS33128Payloads/LocationInfo.ta.mjs";
import { PositioningInfo, _decode_PositioningInfo, _encode_PositioningInfo } from "../TS33128Payloads/PositioningInfo.ta.mjs";
// export { PositioningInfo, _decode_PositioningInfo, _encode_PositioningInfo } from "../TS33128Payloads/PositioningInfo.ta.mjs";
import { LocationPresenceReport, _decode_LocationPresenceReport, _encode_LocationPresenceReport } from "../TS33128Payloads/LocationPresenceReport.ta.mjs";
// export { LocationPresenceReport, _decode_LocationPresenceReport, _encode_LocationPresenceReport } from "../TS33128Payloads/LocationPresenceReport.ta.mjs";
import { FourGPositioningInfo, _decode_FourGPositioningInfo, _encode_FourGPositioningInfo } from "../TS33128Payloads/FourGPositioningInfo.ta.mjs";
// export { FourGPositioningInfo, _decode_FourGPositioningInfo, _encode_FourGPositioningInfo } from "../TS33128Payloads/FourGPositioningInfo.ta.mjs";
import { type FourGLocationInfo, _decode_FourGLocationInfo, _encode_FourGLocationInfo } from "../TS33128Payloads/FourGLocationInfo.ta.mjs";
// export { FourGLocationInfo, _decode_FourGLocationInfo, _encode_FourGLocationInfo } from "../TS33128Payloads/FourGLocationInfo.ta.mjs";
import { IMSLocation, _decode_IMSLocation, _encode_IMSLocation } from "../TS33128Payloads/IMSLocation.ta.mjs";
// export { IMSLocation, _decode_IMSLocation, _encode_IMSLocation } from "../TS33128Payloads/IMSLocation.ta.mjs";
import { type CoarseLocation, _decode_CoarseLocation, _encode_CoarseLocation } from "../TS33128Payloads/CoarseLocation.ta.mjs";
// export { CoarseLocation, _decode_CoarseLocation, _encode_CoarseLocation } from "../TS33128Payloads/CoarseLocation.ta.mjs";


/**
 * @summary Location
 * @description
 * 
 * The Location structure (see Annex A) is used to convey access network
 * location information and geolocation information. While the data types
 * defined in the clauses below are generally modelled on data types from the
 * Service Based Interfaces (SBIs) defined for specific NFs, the data types
 * defined below shall be used by any POI in order to send all location
 * information available at the NF where the POI is located.
 *
 * When location information is reported, unless otherwise specified, all
 * location information present at the NF for the target shall be reported. If a
 * single parameter within the Location type is unable to carry all the types of
 * location information available at the NF, multiple parameters within the
 * Location type shall be used.
 *
 * When location information is sent in the format of coarse location (see TS
 * 36.413 [38] clause 9.2.1.167), the .Location.coarseLocation field shall be
 * used.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Location ::= SEQUENCE
 * {
 *     locationInfo                [1] LocationInfo OPTIONAL,
 *     positioningInfo             [2] PositioningInfo OPTIONAL,
 *     locationPresenceReport      [3] LocationPresenceReport OPTIONAL,
 *     fourGPositioningInfo        [4] FourGPositioningInfo OPTIONAL,
 *     fourGLocationInfo           [5] FourGLocationInfo OPTIONAL,
 *     iMSLocation                 [6] IMSLocation OPTIONAL,
 *     coarseLocation              [7] CoarseLocation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Location {
    /**
     * @summary `locationInfo`.
     * @description
     *
     * Location information type derived from the data present in the
     * ProvideLocInfo structure defined in TS 29.518 [22] clause 6.4.6.2.6. This
     * parameter shall be used any time information from the ProvideLocInfo
     * structure needs to be reported. This parameter shall also be used
     * whenever information from the UserLocation type needs to be reported.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly locationInfo: OPTIONAL<LocationInfo>;
    /**
     * @summary `positioningInfo`.
     * @description
     *
     * Location information type derived from the data present in the
     * ProvidePosInfo structure defined in TS 29.518 [22] clause 6.4.6.2.3. This
     * parameter shall be used any time information from LCS operations needs to
     * be reported from the 5GC. This structure may also be used any time
     * information from the ProvidePosInfo structure needs to be reported.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly positioningInfo: OPTIONAL<PositioningInfo>;
    /**
     * @summary `locationPresenceReport`.
     * @description
     *
     * Location information type derived from the data present in the
     * AMFEventReport structure defined in TS 29.518 [22] clause 6.2.6.2.5. This
     * parameter shall be used any time location information from
     * Namf_EventExposure Service operations needs to be reported.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly locationPresenceReport: OPTIONAL<LocationPresenceReport>;
    /**
     * @summary `fourGPositioningInfo`.
     * @description
     *
     * Location information type derived from the data present in the
     * Location-Report-Answer structure defined in TS 29.172 [53] clause 7.3.2
     * and the Provide Subscriber Location Answer defined in TS 29.172 [53]
     * table 6.2.2-2. This parameter shall be used any time information from LCS
     * operations needs to be reported from the EPC. This structure may also be
     * used any time information from the Provide-Location-Answer structure
     * needs to be reported.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly fourGPositioningInfo: OPTIONAL<FourGPositioningInfo>;
    /**
     * @summary `fourGLocationInfo`.
     * @description
     *
     * Location information type derived from the data present in the
     * EPS-Location-Info structure defined in TS 29.272 [106] clause 7.3.111 and
     * the User Location Information structure defined in TS 29.274 [87] clause
     * 8.21. This parameter shall be used any time information from the
     * EPSLocationInformation structure needs to be reported. This parameter
     * shall also be used whenever information from the EPSUserLocation type
     * needs to be reported.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly fourGLocationInfo: OPTIONAL<FourGLocationInfo>;
    /**
     * @summary `iMSLocation`.
     * @description
     *
     * Location information type derived from the data present in IMS SIP
     * P-Access-Network-Info, Cellular-Network-Info and Geolocation headers.
     * This parameter shall be used any time location information needs to be
     * reported from IMS. This parameter shall only be used to report the
     * target’s location.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly iMSLocation: OPTIONAL<IMSLocation>;
    /**
     * @summary `coarseLocation`.
     * @description
     *
     * Shall be used when the location information is coarse location (see TS
     * 36.413 [38] clause 9.2.1.167).
     *
     * 3GPP TS 33.128, clause 7.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly coarseLocation: OPTIONAL<CoarseLocation>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        locationInfo?: OPTIONAL<LocationInfo>,
        positioningInfo?: OPTIONAL<PositioningInfo>,
        locationPresenceReport?: OPTIONAL<LocationPresenceReport>,
        fourGPositioningInfo?: OPTIONAL<FourGPositioningInfo>,
        fourGLocationInfo?: OPTIONAL<FourGLocationInfo>,
        iMSLocation?: OPTIONAL<IMSLocation>,
        coarseLocation?: OPTIONAL<CoarseLocation>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.locationInfo = locationInfo;
        this.positioningInfo = positioningInfo;
        this.locationPresenceReport = locationPresenceReport;
        this.fourGPositioningInfo = fourGPositioningInfo;
        this.fourGLocationInfo = fourGLocationInfo;
        this.iMSLocation = iMSLocation;
        this.coarseLocation = coarseLocation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a Location
     * @description
     * 
     * This takes an `object` and converts it to a `Location`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Location`.
     * @returns {Location}
     */
    public static _from_object (_o: { [_K in keyof (Location)]: (Location)[_K] }): Location {
        return new Location(_o.locationInfo, _o.positioningInfo, _o.locationPresenceReport, _o.fourGPositioningInfo, _o.fourGLocationInfo, _o.iMSLocation, _o.coarseLocation, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Location
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Location: $.ComponentSpec[] = [
    new $.ComponentSpec("locationInfo", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("positioningInfo", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("locationPresenceReport", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("fourGPositioningInfo", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("fourGLocationInfo", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("iMSLocation", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("coarseLocation", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of Location
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Location: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Location
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Location: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Location: $.ASN1Decoder<Location> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Location
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Location (el: _Element): Location {
    if (!_cached_decoder_for_Location) { _cached_decoder_for_Location = function (el: _Element): Location {
    let locationInfo: OPTIONAL<LocationInfo>;
    let positioningInfo: OPTIONAL<PositioningInfo>;
    let locationPresenceReport: OPTIONAL<LocationPresenceReport>;
    let fourGPositioningInfo: OPTIONAL<FourGPositioningInfo>;
    let fourGLocationInfo: OPTIONAL<FourGLocationInfo>;
    let iMSLocation: OPTIONAL<IMSLocation>;
    let coarseLocation: OPTIONAL<CoarseLocation>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "locationInfo": (_el: _Element): void => { locationInfo = $._decode_implicit<LocationInfo>(() => _decode_LocationInfo)(_el); },
        "positioningInfo": (_el: _Element): void => { positioningInfo = $._decode_implicit<PositioningInfo>(() => _decode_PositioningInfo)(_el); },
        "locationPresenceReport": (_el: _Element): void => { locationPresenceReport = $._decode_implicit<LocationPresenceReport>(() => _decode_LocationPresenceReport)(_el); },
        "fourGPositioningInfo": (_el: _Element): void => { fourGPositioningInfo = $._decode_implicit<FourGPositioningInfo>(() => _decode_FourGPositioningInfo)(_el); },
        "fourGLocationInfo": (_el: _Element): void => { fourGLocationInfo = $._decode_explicit<FourGLocationInfo>(() => _decode_FourGLocationInfo)(_el); },
        "iMSLocation": (_el: _Element): void => { iMSLocation = $._decode_implicit<IMSLocation>(() => _decode_IMSLocation)(_el); },
        "coarseLocation": (_el: _Element): void => { coarseLocation = $._decode_explicit<CoarseLocation>(() => _decode_CoarseLocation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Location,
        _extension_additions_list_spec_for_Location,
        _root_component_type_list_2_spec_for_Location,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Location(
        locationInfo,
        positioningInfo,
        locationPresenceReport,
        fourGPositioningInfo,
        fourGLocationInfo,
        iMSLocation,
        coarseLocation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Location(el);
}

let _cached_encoder_for_Location: $.ASN1Encoder<Location> | null = null;

/**
 * @summary Encodes a(n) Location into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Location, encoded as an ASN.1 Element.
 */
export
function _encode_Location (value: Location, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Location) { _cached_encoder_for_Location = function (value: Location, elGetter: $.ASN1Encoder<Location>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.locationInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_LocationInfo, $.BER)(value.locationInfo, $.BER);
    }
    if (value.positioningInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_PositioningInfo, $.BER)(value.positioningInfo, $.BER);
    }
    if (value.locationPresenceReport !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_LocationPresenceReport, $.BER)(value.locationPresenceReport, $.BER);
    }
    if (value.fourGPositioningInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_FourGPositioningInfo, $.BER)(value.fourGPositioningInfo, $.BER);
    }
    if (value.fourGLocationInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_FourGLocationInfo, $.BER)(value.fourGLocationInfo, $.BER);
    }
    if (value.iMSLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_IMSLocation, $.BER)(value.iMSLocation, $.BER);
    }
    if (value.coarseLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => _encode_CoarseLocation, $.BER)(value.coarseLocation, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Location(value, elGetter);
}


/* eslint-enable */
