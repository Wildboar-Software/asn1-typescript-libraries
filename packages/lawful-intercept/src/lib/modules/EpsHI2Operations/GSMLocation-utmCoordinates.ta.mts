/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    type PrintableString,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MapDatum, _decode_MapDatum, _encode_MapDatum, _enum_for_MapDatum, wGS84 /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../EpsHI2Operations/MapDatum.ta.mjs";
// export { MapDatum, _enum_for_MapDatum, MapDatum_wGS84 /* IMPORTED_LONG_ENUMERATION_ITEM */, wGS84 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MapDatum_wGS72 /* IMPORTED_LONG_ENUMERATION_ITEM */, wGS72 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MapDatum_eD50 /* IMPORTED_LONG_ENUMERATION_ITEM */, eD50 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MapDatum, _encode_MapDatum } from "../EpsHI2Operations/MapDatum.ta.mjs";


/**
 * @summary GSMLocation_utmCoordinates
 * @description
 * 
 * UTM easting and northing of the target or of a cell site. One alternative of
 * the GSM location inside an EPS or PS location. 3GPP TS 33.108
 * (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GSMLocation-utmCoordinates ::= SEQUENCE {
 *     utm-East         [1] PrintableString (SIZE(10)),
 *     utm-North         [2] PrintableString (SIZE(7)),
 *     -- example    utm-East    32U0439955
 *     --            utm-North    5540736
 *     mapDatum        [3]    MapDatum DEFAULT wGS84,
 *     ...,
 *     azimuth            [4] INTEGER (0..359) OPTIONAL
 *     -- The azimuth is the bearing, relative to true north.
 * }
 * ```
 * 
 * @class
 */
export
class GSMLocation_utmCoordinates {
    /**
     * @summary `utm_East`.
     * @description
     * 
     * UTM easting. The module comment's example is 32U0439955.
     * 
     * @public
     * @readonly
     */
    readonly utm_East: PrintableString;
    /**
     * @summary `utm_North`.
     * @description
     * 
     * UTM northing. The module comment's example is 5540736.
     * 
     * @public
     * @readonly
     */
    readonly utm_North: PrintableString;
    /**
     * @summary `mapDatum`.
     * @description
     * 
     * Geodetic datum. If omitted, WGS 84 (module comment).
     * 
     * @public
     * @readonly
     */
    readonly mapDatum: OPTIONAL<MapDatum>;
    /**
     * @summary `azimuth`.
     * @description
     * 
     * Bearing of the cell antenna sector relative to true north, in degrees,
     * when known (module comment, table 16.1).
     * 
     * @public
     * @readonly
     */
    readonly azimuth: OPTIONAL<INTEGER>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions that this version of the specification does not
     * define. Annex D requires the LEMF to ignore an unrecognized parameter and
     * continue with the record.
     * 
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        utm_East: PrintableString,
        utm_North: PrintableString,
        mapDatum?: OPTIONAL<MapDatum>,
        azimuth?: OPTIONAL<INTEGER>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.utm_East = utm_East;
        this.utm_North = utm_North;
        this.mapDatum = mapDatum;
        this.azimuth = azimuth;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a GSMLocation_utmCoordinates
     * @description
     * 
     * This takes an `object` and converts it to a `GSMLocation_utmCoordinates`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GSMLocation_utmCoordinates`.
     * @returns {GSMLocation_utmCoordinates}
     */
    public static _from_object (_o: { [_K in keyof (GSMLocation_utmCoordinates)]: (GSMLocation_utmCoordinates)[_K] }): GSMLocation_utmCoordinates {
        return new GSMLocation_utmCoordinates(_o.utm_East, _o.utm_North, _o.mapDatum, _o.azimuth, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `mapDatum`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_mapDatum (): _enum_for_MapDatum { return wGS84; }        /**
         * @summary The enum used as the type of the component `mapDatum`
         * @description
         * 
         * Geodetic datum. If omitted, WGS 84 (module comment).
         * 
         * @public
         * @static
         */

    public static _enum_for_mapDatum: typeof _enum_for_MapDatum = _enum_for_MapDatum;
}

/**
 * @summary The Leading Root Component Types of GSMLocation_utmCoordinates
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GSMLocation_utmCoordinates: $.ComponentSpec[] = [
    new $.ComponentSpec("utm-East", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("utm-North", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mapDatum", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of GSMLocation_utmCoordinates
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GSMLocation_utmCoordinates: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GSMLocation_utmCoordinates
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GSMLocation_utmCoordinates: $.ComponentSpec[] = [
    new $.ComponentSpec("azimuth", true, $.hasTag(_TagClass.context, 4))
];

let _cached_decoder_for_GSMLocation_utmCoordinates: $.ASN1Decoder<GSMLocation_utmCoordinates> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GSMLocation_utmCoordinates
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GSMLocation_utmCoordinates (el: _Element): GSMLocation_utmCoordinates {
    if (!_cached_decoder_for_GSMLocation_utmCoordinates) { _cached_decoder_for_GSMLocation_utmCoordinates = function (el: _Element): GSMLocation_utmCoordinates {
    let utm_East!: PrintableString;
    let utm_North!: PrintableString;
    let mapDatum: OPTIONAL<MapDatum> = GSMLocation_utmCoordinates._default_value_for_mapDatum;
    let azimuth: OPTIONAL<INTEGER>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "utm-East": (_el: _Element): void => {
            utm_East = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el);
            if (utm_East.length < 10 || utm_East.length > 10) {
                throw new ASN1SizeError("GSMLocation_utmCoordinates.utm_East violates SIZE constraint");
            }
        },
        "utm-North": (_el: _Element): void => {
            utm_North = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el);
            if (utm_North.length < 7 || utm_North.length > 7) {
                throw new ASN1SizeError("GSMLocation_utmCoordinates.utm_North violates SIZE constraint");
            }
        },
        "mapDatum": (_el: _Element): void => { mapDatum = $._decode_implicit<MapDatum>(() => _decode_MapDatum)(_el); },
        "azimuth": (_el: _Element): void => {
            azimuth = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof azimuth === "bigint" ? azimuth : BigInt(azimuth);
            if (_n < 0n || _n > 359n) {
                throw new ASN1OverflowError("GSMLocation_utmCoordinates.azimuth violates INTEGER range");
            }
        }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GSMLocation_utmCoordinates,
        _extension_additions_list_spec_for_GSMLocation_utmCoordinates,
        _root_component_type_list_2_spec_for_GSMLocation_utmCoordinates,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GSMLocation_utmCoordinates(
        utm_East,
        utm_North,
        mapDatum,
        azimuth,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_GSMLocation_utmCoordinates(el);
}

let _cached_encoder_for_GSMLocation_utmCoordinates: $.ASN1Encoder<GSMLocation_utmCoordinates> | null = null;

/**
 * @summary Encodes a(n) GSMLocation_utmCoordinates into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GSMLocation_utmCoordinates, encoded as an ASN.1 Element.
 */
export
function _encode_GSMLocation_utmCoordinates (value: GSMLocation_utmCoordinates, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GSMLocation_utmCoordinates) { _cached_encoder_for_GSMLocation_utmCoordinates = function (value: GSMLocation_utmCoordinates, elGetter: $.ASN1Encoder<GSMLocation_utmCoordinates>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodePrintableString, $.BER)(value.utm_East, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodePrintableString, $.BER)(value.utm_North, $.BER);
    if (value.mapDatum !== undefined && !$.deepEq(value.mapDatum, GSMLocation_utmCoordinates._default_value_for_mapDatum)) {
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
    return _cached_encoder_for_GSMLocation_utmCoordinates(value, elGetter);
}


/* eslint-enable */
