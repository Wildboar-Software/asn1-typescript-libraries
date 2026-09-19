/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
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
import { FourGLocationInfo, _decode_FourGLocationInfo, _encode_FourGLocationInfo } from "../TS33128Payloads/FourGLocationInfo.ta.mjs";
// export { FourGLocationInfo, _decode_FourGLocationInfo, _encode_FourGLocationInfo } from "../TS33128Payloads/FourGLocationInfo.ta.mjs";
import { IMSLocation, _decode_IMSLocation, _encode_IMSLocation } from "../TS33128Payloads/IMSLocation.ta.mjs";
// export { IMSLocation, _decode_IMSLocation, _encode_IMSLocation } from "../TS33128Payloads/IMSLocation.ta.mjs";
import { CoarseLocation, _decode_CoarseLocation, _encode_CoarseLocation } from "../TS33128Payloads/CoarseLocation.ta.mjs";
// export { CoarseLocation, _decode_CoarseLocation, _encode_CoarseLocation } from "../TS33128Payloads/CoarseLocation.ta.mjs";


/**
 * @summary Location
 * @description
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
    constructor (
        /**
         * @summary `locationInfo`.
         * @public
         * @readonly
         */
        readonly locationInfo: OPTIONAL<LocationInfo>,
        /**
         * @summary `positioningInfo`.
         * @public
         * @readonly
         */
        readonly positioningInfo: OPTIONAL<PositioningInfo>,
        /**
         * @summary `locationPresenceReport`.
         * @public
         * @readonly
         */
        readonly locationPresenceReport: OPTIONAL<LocationPresenceReport>,
        /**
         * @summary `fourGPositioningInfo`.
         * @public
         * @readonly
         */
        readonly fourGPositioningInfo: OPTIONAL<FourGPositioningInfo>,
        /**
         * @summary `fourGLocationInfo`.
         * @public
         * @readonly
         */
        readonly fourGLocationInfo: OPTIONAL<FourGLocationInfo>,
        /**
         * @summary `iMSLocation`.
         * @public
         * @readonly
         */
        readonly iMSLocation: OPTIONAL<IMSLocation>,
        /**
         * @summary `coarseLocation`.
         * @public
         * @readonly
         */
        readonly coarseLocation: OPTIONAL<CoarseLocation>
    ) {}

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
        return new Location(_o.locationInfo, _o.positioningInfo, _o.locationPresenceReport, _o.fourGPositioningInfo, _o.fourGLocationInfo, _o.iMSLocation, _o.coarseLocation);
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
        undefined,
    );
    return new Location(
        locationInfo,
        positioningInfo,
        locationPresenceReport,
        fourGPositioningInfo,
        fourGLocationInfo,
        iMSLocation,
        coarseLocation
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.locationInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_LocationInfo, $.BER)(value.locationInfo, $.BER)),
            /* IF_ABSENT  */ ((value.positioningInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_PositioningInfo, $.BER)(value.positioningInfo, $.BER)),
            /* IF_ABSENT  */ ((value.locationPresenceReport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_LocationPresenceReport, $.BER)(value.locationPresenceReport, $.BER)),
            /* IF_ABSENT  */ ((value.fourGPositioningInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_FourGPositioningInfo, $.BER)(value.fourGPositioningInfo, $.BER)),
            /* IF_ABSENT  */ ((value.fourGLocationInfo === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_FourGLocationInfo, $.BER)(value.fourGLocationInfo, $.BER)),
            /* IF_ABSENT  */ ((value.iMSLocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_IMSLocation, $.BER)(value.iMSLocation, $.BER)),
            /* IF_ABSENT  */ ((value.coarseLocation === undefined) ? undefined : $._encode_explicit(_TagClass.context, 7, () => _encode_CoarseLocation, $.BER)(value.coarseLocation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Location(value, elGetter);
}


/* eslint-enable */
