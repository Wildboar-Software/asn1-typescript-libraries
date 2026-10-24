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
import { MapDatum, _decode_MapDatum, _encode_MapDatum, _enum_for_MapDatum, wGS84 /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../UmtsHI2Operations/MapDatum.ta.mjs";
// export { MapDatum, _enum_for_MapDatum, MapDatum_wGS84 /* IMPORTED_LONG_ENUMERATION_ITEM */, wGS84 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MapDatum_wGS72 /* IMPORTED_LONG_ENUMERATION_ITEM */, wGS72 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MapDatum_eD50 /* IMPORTED_LONG_ENUMERATION_ITEM */, eD50 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MapDatum, _encode_MapDatum } from "../UmtsHI2Operations/MapDatum.ta.mjs";


/**
 * @summary GSMLocation_geoCoordinates
 * @description
 * 
 * GSM geographic coordinates of the target or of a cell site. Latitude is
 * `XDDMMSS.SS` and longitude is `XDDDMMSS.SS`: hemisphere or east/west,
 * degrees, minutes, and optional fractional seconds.
 * 
 * Annex B.3 examples are `N502312` and `E1122312.18`. The datum defaults to WGS
 * 84. Azimuth, when present, is the bearing from true north. Table 16.1 uses
 * that azimuth as the median of the cell antenna sector, and these coordinates
 * as the cell site position, when the MF enriches an IRI or builds a cell-site
 * report.
 * 
 * 3GPP TS 33.108, annex B.3 and table 16.1.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GSMLocation-geoCoordinates ::= SEQUENCE {
 *     latitude        [1]    PrintableString (SIZE(7..10)),
 *     -- format :     XDDMMSS.SS
 *     longitude        [2]    PrintableString (SIZE(8..11)),
 *     -- format :     XDDDMMSS.SS
 *     mapDatum        [3]    MapDatum DEFAULT wGS84,
 *     ...,
 *     azimuth            [4]    INTEGER (0..359) OPTIONAL
 *     -- The azimuth is the bearing, relative to true north.
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
     * Latitude in the annex B.3 form `XDDMMSS.SS`: N or S, degrees, minutes,
     * and optional fractional seconds. Short-form example: `N502312`.
     * 
     * Table 16.1 uses this as the cell site's latitude when the MF enriches an
     * IRI or sends a cell-site report, if the latitude is known.
     * 
     * 3GPP TS 33.108, annex B.3 and table 16.1.
     * @public
     * @readonly
     */
    readonly latitude: PrintableString;
    /**
     * @summary `longitude`.
     * @description
     * 
     * Longitude in the annex B.3 form `XDDDMMSS.SS`: E or W, degrees, minutes,
     * and optional fractional seconds. Long-form example: `E1122312.18`.
     * 
     * Table 16.1 uses this as the cell site's longitude when that longitude is
     * known.
     * 
     * 3GPP TS 33.108, annex B.3 and table 16.1.
     * @public
     * @readonly
     */
    readonly longitude: PrintableString;
    /**
     * @summary `mapDatum`.
     * @description
     * 
     * Coordinate reference. Annex B.3 defaults it to WGS 84 when the IRI omits
     * it. The module also allows WGS 72 and European Datum 50.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly mapDatum: OPTIONAL<MapDatum>;
    /**
     * @summary `azimuth`.
     * @description
     * 
     * Bearing from true north, in degrees from 0 to 359. Table 16.1 uses it,
     * when known, as the median of the cell antenna sector on a 2G or 3G
     * cell-site enrichment.
     * 
     * 3GPP TS 33.108, annex B.3 and table 16.1.
     * @public
     * @readonly
     */
    readonly azimuth: OPTIONAL<INTEGER>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions that this version of annex B.3 does not define. They
     * are retained so a later addition on HI2 is not dropped.
     * 
     * 3GPP TS 33.108, annex B.3.
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
     * Annex B.3 default when the IRI omits the datum: WGS 84.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_mapDatum () { return wGS84; }        /**
         * @summary The enum used as the type of the component `mapDatum`
         * @description
         * 
         * Coordinate reference of this GSM location. Annex B.3 defaults it to
         * WGS 84 and also allows WGS 72 and European Datum 50.
         * 
         * 3GPP TS 33.108, annex B.3.
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
