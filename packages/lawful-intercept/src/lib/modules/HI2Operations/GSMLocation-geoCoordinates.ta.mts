/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    type PrintableString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MapDatum, _decode_MapDatum, _encode_MapDatum, _enum_for_MapDatum, wGS84 /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../HI2Operations/MapDatum.ta.mjs";
// export { MapDatum, _enum_for_MapDatum, MapDatum_wGS84 /* IMPORTED_LONG_ENUMERATION_ITEM */, wGS84 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MapDatum_wGS72 /* IMPORTED_LONG_ENUMERATION_ITEM */, wGS72 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MapDatum_eD50 /* IMPORTED_LONG_ENUMERATION_ITEM */, eD50 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MapDatum, _encode_MapDatum } from "../HI2Operations/MapDatum.ta.mjs";


/**
 * @summary GSMLocation_geoCoordinates
 * @description
 *
 * Geographic coordinates. Latitude is `XDDMMSS.SS` (7 to 10 characters).
 * Longitude is `XDDDMMSS.SS` (8 to 11 characters). `X` is N, S, E, or W. `DD`
 * or `DDD` is degrees. `MM` is minutes. `SS.SS` is seconds, and `.SS` is
 * optional. Examples: latitude `N502312`, longitude `E1122312.18`. The datum
 * defaults to World Geodetic System 1984. Azimuth is the bearing relative to
 * true north, from 0 to 359.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GSMLocation-geoCoordinates ::= SEQUENCE {
 *     latitude    [1] PrintableString (SIZE(7..10)),
 *     -- format: XDDMMSS.SS
 *     longitude    [2] PrintableString (SIZE(8..11)),
 *     -- format: XDDDMMSS.SS
 *     mapDatum    [3] MapDatum DEFAULT wGS84,
 *     ...,
 *     azimuth        [4] INTEGER (0..359) OPTIONAL
 *     -- The azimuth is the bearing, relative to true north
 * }
 * ```
 * 
 * @class
 */
export
class GSMLocation_geoCoordinates {
    /**
     * @summary `latitude`.
     * @description
     *
     * Latitude, printable, size 7 to 10, format `XDDMMSS.SS`. `X` is N or S.
     * Degrees, minutes, and seconds are numeric; the fractional seconds are
     * optional. Short-form example: `N502312`.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly latitude: PrintableString;
    /**
     * @summary `longitude`.
     * @description
     *
     * Longitude, printable, size 8 to 11, format `XDDDMMSS.SS`. `X` is E or W.
     * Degrees, minutes, and seconds are numeric; the fractional seconds are
     * optional. Long-form example: `E1122312.18`.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly longitude: PrintableString;
    /**
     * @summary `mapDatum`.
     * @description
     *
     * Datum for these coordinates. Omitted means World Geodetic System 1984.
     * `wGS84` is World Geodetic System 1984, `eD50` is European Datum 50, and
     * `wGS72` is named without expansion.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly mapDatum: OPTIONAL<MapDatum>;
    /**
     * @summary `azimuth`.
     * @description
     *
     * Bearing relative to true north, from 0 to 359.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly azimuth: OPTIONAL<INTEGER>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * Extension additions carried with this value. This module version assigns
     * them no name and no meaning.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        latitude: PrintableString,
        longitude: PrintableString,
        mapDatum?: OPTIONAL<MapDatum>,
        azimuth?: OPTIONAL<INTEGER>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.mapDatum = mapDatum;
        this.azimuth = azimuth;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a GSMLocation_geoCoordinates
     * @description
     * 
     * This takes an `object` and converts it to a `GSMLocation_geoCoordinates`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GSMLocation_geoCoordinates`.
     * @returns {GSMLocation_geoCoordinates}
     */
    public static _from_object (_o: { [_K in keyof (GSMLocation_geoCoordinates)]: (GSMLocation_geoCoordinates)[_K] }): GSMLocation_geoCoordinates {
        return new GSMLocation_geoCoordinates(_o.latitude, _o.longitude, _o.mapDatum, _o.azimuth, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `mapDatum`.
     * @description
     *
     * World Geodetic System 1984, used when the datum is omitted.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_mapDatum () { return wGS84; }        /**
         * @summary The enum used as the type of the component `mapDatum`
         * @description
         *
         * Datum for these coordinates. Omitted means World Geodetic System
         * 1984. `wGS84` is World Geodetic System 1984, `eD50` is European
         * Datum 50, and `wGS72` is named without expansion.
         *
         * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
         *
         * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
         *
         * @public
         * @static
         */

    public static _enum_for_mapDatum = _enum_for_MapDatum;
}

/**
 * @summary The Leading Root Component Types of GSMLocation_geoCoordinates
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GSMLocation_geoCoordinates: $.ComponentSpec[] = [
    new $.ComponentSpec("latitude", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("longitude", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mapDatum", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of GSMLocation_geoCoordinates
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GSMLocation_geoCoordinates: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GSMLocation_geoCoordinates
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GSMLocation_geoCoordinates: $.ComponentSpec[] = [
    new $.ComponentSpec("azimuth", true, $.hasTag(_TagClass.context, 4))
];

let _cached_decoder_for_GSMLocation_geoCoordinates: $.ASN1Decoder<GSMLocation_geoCoordinates> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GSMLocation_geoCoordinates
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GSMLocation_geoCoordinates (el: _Element): GSMLocation_geoCoordinates {
    if (!_cached_decoder_for_GSMLocation_geoCoordinates) { _cached_decoder_for_GSMLocation_geoCoordinates = function (el: _Element): GSMLocation_geoCoordinates {
    let latitude!: PrintableString;
    let longitude!: PrintableString;
    let mapDatum: OPTIONAL<MapDatum> = GSMLocation_geoCoordinates._default_value_for_mapDatum;
    let azimuth: OPTIONAL<INTEGER>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "latitude": (_el: _Element): void => {
            latitude = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el);
            if (latitude.length < 7 || latitude.length > 10) {
                throw new ASN1SizeError("GSMLocation_geoCoordinates.latitude violates SIZE constraint");
            }
        },
        "longitude": (_el: _Element): void => {
            longitude = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el);
            if (longitude.length < 8 || longitude.length > 11) {
                throw new ASN1SizeError("GSMLocation_geoCoordinates.longitude violates SIZE constraint");
            }
        },
        "mapDatum": (_el: _Element): void => { mapDatum = $._decode_implicit<MapDatum>(() => _decode_MapDatum)(_el); },
        "azimuth": (_el: _Element): void => {
            azimuth = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof azimuth === "bigint" ? azimuth : BigInt(azimuth);
            if (_n < 0n || _n > 359n) {
                throw new ASN1OverflowError("GSMLocation_geoCoordinates.azimuth violates INTEGER range");
            }
        }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GSMLocation_geoCoordinates,
        _extension_additions_list_spec_for_GSMLocation_geoCoordinates,
        _root_component_type_list_2_spec_for_GSMLocation_geoCoordinates,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GSMLocation_geoCoordinates(
        latitude,
        longitude,
        mapDatum,
        azimuth,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_GSMLocation_geoCoordinates(el);
}

let _cached_encoder_for_GSMLocation_geoCoordinates: $.ASN1Encoder<GSMLocation_geoCoordinates> | null = null;

/**
 * @summary Encodes a(n) GSMLocation_geoCoordinates into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GSMLocation_geoCoordinates, encoded as an ASN.1 Element.
 */
export
function _encode_GSMLocation_geoCoordinates (value: GSMLocation_geoCoordinates, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GSMLocation_geoCoordinates) { _cached_encoder_for_GSMLocation_geoCoordinates = function (value: GSMLocation_geoCoordinates, elGetter: $.ASN1Encoder<GSMLocation_geoCoordinates>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodePrintableString, $.BER)(value.latitude, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodePrintableString, $.BER)(value.longitude, $.BER);
    if (value.mapDatum !== undefined && !$.deepEq(value.mapDatum, GSMLocation_geoCoordinates._default_value_for_mapDatum)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 3, () => _encode_MapDatum, $.BER)(value.mapDatum, $.BER);
    }
    if (value.azimuth !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.azimuth, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_GSMLocation_geoCoordinates(value, elGetter);
}


/* eslint-enable */
