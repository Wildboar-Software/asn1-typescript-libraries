/* eslint-disable */
import {
    type OPTIONAL,
    type PrintableString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MapDatum, _decode_MapDatum, _encode_MapDatum, _enum_for_MapDatum, wGS84 /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../HI2Operations/MapDatum.ta.mjs";
// export { MapDatum, _enum_for_MapDatum, MapDatum_wGS84 /* IMPORTED_LONG_ENUMERATION_ITEM */, wGS84 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MapDatum_wGS72 /* IMPORTED_LONG_ENUMERATION_ITEM */, wGS72 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MapDatum_eD50 /* IMPORTED_LONG_ENUMERATION_ITEM */, eD50 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MapDatum, _encode_MapDatum } from "../HI2Operations/MapDatum.ta.mjs";


/**
 * @summary GSMLocation_utmRefCoordinates
 * @description
 *
 * UTM reference string, 13 characters, example `32UPU91294045`. The datum
 * defaults to World Geodetic System 1984. The module states no further
 * character layout. This form has no azimuth.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GSMLocation-utmRefCoordinates ::= SEQUENCE {
 *     utmref-string    PrintableString (SIZE(13)),
 *     mapDatum        MapDatum DEFAULT wGS84,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class GSMLocation_utmRefCoordinates {
    /**
     * @summary `utmref_string`.
     * @description
     *
     * UTM reference, 13 characters. Example: `32UPU91294045`. The module
     * states no further character layout.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly utmref_string: PrintableString;
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
        utmref_string: PrintableString,
        mapDatum?: OPTIONAL<MapDatum>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.utmref_string = utmref_string;
        this.mapDatum = mapDatum;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a GSMLocation_utmRefCoordinates
     * @description
     * 
     * This takes an `object` and converts it to a `GSMLocation_utmRefCoordinates`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GSMLocation_utmRefCoordinates`.
     * @returns {GSMLocation_utmRefCoordinates}
     */
    public static _from_object (_o: { [_K in keyof (GSMLocation_utmRefCoordinates)]: (GSMLocation_utmRefCoordinates)[_K] }): GSMLocation_utmRefCoordinates {
        return new GSMLocation_utmRefCoordinates(_o.utmref_string, _o.mapDatum, _o._unrecognizedExtensionsList);
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
 * @summary The Leading Root Component Types of GSMLocation_utmRefCoordinates
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GSMLocation_utmRefCoordinates: $.ComponentSpec[] = [
    new $.ComponentSpec("utmref-string", false, $.hasTag(_TagClass.universal, 19)),
    new $.ComponentSpec("mapDatum", true, $.hasTag(_TagClass.universal, 10))
];

/**
 * @summary The Trailing Root Component Types of GSMLocation_utmRefCoordinates
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GSMLocation_utmRefCoordinates: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GSMLocation_utmRefCoordinates
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GSMLocation_utmRefCoordinates: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GSMLocation_utmRefCoordinates: $.ASN1Decoder<GSMLocation_utmRefCoordinates> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GSMLocation_utmRefCoordinates
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GSMLocation_utmRefCoordinates (el: _Element): GSMLocation_utmRefCoordinates {
    if (!_cached_decoder_for_GSMLocation_utmRefCoordinates) { _cached_decoder_for_GSMLocation_utmRefCoordinates = function (el: _Element): GSMLocation_utmRefCoordinates {
    let utmref_string!: PrintableString;
    let mapDatum: OPTIONAL<MapDatum> = GSMLocation_utmRefCoordinates._default_value_for_mapDatum;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "utmref-string": (_el: _Element): void => {
            utmref_string = $._decodePrintableString(_el);
            if (utmref_string.length < 13 || utmref_string.length > 13) {
                throw new ASN1SizeError("GSMLocation_utmRefCoordinates.utmref_string violates SIZE constraint");
            }
        },
        "mapDatum": (_el: _Element): void => { mapDatum = _decode_MapDatum(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GSMLocation_utmRefCoordinates,
        _extension_additions_list_spec_for_GSMLocation_utmRefCoordinates,
        _root_component_type_list_2_spec_for_GSMLocation_utmRefCoordinates,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GSMLocation_utmRefCoordinates(
        utmref_string,
        mapDatum,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_GSMLocation_utmRefCoordinates(el);
}

let _cached_encoder_for_GSMLocation_utmRefCoordinates: $.ASN1Encoder<GSMLocation_utmRefCoordinates> | null = null;

/**
 * @summary Encodes a(n) GSMLocation_utmRefCoordinates into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GSMLocation_utmRefCoordinates, encoded as an ASN.1 Element.
 */
export
function _encode_GSMLocation_utmRefCoordinates (value: GSMLocation_utmRefCoordinates, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GSMLocation_utmRefCoordinates) { _cached_encoder_for_GSMLocation_utmRefCoordinates = function (value: GSMLocation_utmRefCoordinates, elGetter: $.ASN1Encoder<GSMLocation_utmRefCoordinates>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encodePrintableString(value.utmref_string, $.BER);
    if (value.mapDatum !== undefined && !$.deepEq(value.mapDatum, GSMLocation_utmRefCoordinates._default_value_for_mapDatum)) {
        _components[_components_i++] = /* IF_DEFAULT */ _encode_MapDatum(value.mapDatum, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_GSMLocation_utmRefCoordinates(value, elGetter);
}


/* eslint-enable */
