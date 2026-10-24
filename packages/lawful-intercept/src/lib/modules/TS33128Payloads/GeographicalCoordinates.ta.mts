/* eslint-disable */
import {
    type OPTIONAL,
    type UTF8String,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OGCURN, _decode_OGCURN, _encode_OGCURN } from "../TS33128Payloads/OGCURN.ta.mjs";
// export { OGCURN, _decode_OGCURN, _encode_OGCURN } from "../TS33128Payloads/OGCURN.ta.mjs";


/**
 * @summary GeographicalCoordinates
 * @description
 * 
 * The GeographicalCoordinates type is derived from the data present in the
 * GeographicalCoordinates type defined in TS 29.572 [24] clause 6.1.6.2.4.
 *
 * NOTE: The order of the latitude and longitude parameters in the locally
 * defined GeographicalCoordinates type are different than the order of the
 * parameters defined by the GeographicalCoordinates type defined in TS 29.572
 * [24] clause 6.1.6.2.4.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.12.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeographicalCoordinates ::= SEQUENCE
 * {
 *     latitude                            [1] UTF8String,
 *     longitude                           [2] UTF8String,
 *     mapDatumInformation                 [3] OGCURN OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class GeographicalCoordinates {
    /**
     * @summary `latitude`.
     * @description
     *
     * Shall contain a string representation of the latitude.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.12.
     *
     * @public
     * @readonly
     */
    readonly latitude: UTF8String;
    /**
     * @summary `longitude`.
     * @description
     *
     * Shall contain a string representation of the longitude.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.12.
     *
     * @public
     * @readonly
     */
    readonly longitude: UTF8String;
    /**
     * @summary `mapDatumInformation`.
     * @description
     *
     * The reference datum used for the GeographicalCoordinates. Shall be
     * present if known by the operator.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.12.
     *
     * @public
     * @readonly
     */
    readonly mapDatumInformation: OPTIONAL<OGCURN>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        latitude: UTF8String,
        longitude: UTF8String,
        mapDatumInformation?: OPTIONAL<OGCURN>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.mapDatumInformation = mapDatumInformation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a GeographicalCoordinates
     * @description
     * 
     * This takes an `object` and converts it to a `GeographicalCoordinates`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GeographicalCoordinates`.
     * @returns {GeographicalCoordinates}
     */
    public static _from_object (_o: { [_K in keyof (GeographicalCoordinates)]: (GeographicalCoordinates)[_K] }): GeographicalCoordinates {
        return new GeographicalCoordinates(_o.latitude, _o.longitude, _o.mapDatumInformation, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of GeographicalCoordinates
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GeographicalCoordinates: $.ComponentSpec[] = [
    new $.ComponentSpec("latitude", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("longitude", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mapDatumInformation", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of GeographicalCoordinates
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GeographicalCoordinates: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GeographicalCoordinates
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GeographicalCoordinates: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GeographicalCoordinates: $.ASN1Decoder<GeographicalCoordinates> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GeographicalCoordinates
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GeographicalCoordinates (el: _Element): GeographicalCoordinates {
    if (!_cached_decoder_for_GeographicalCoordinates) { _cached_decoder_for_GeographicalCoordinates = function (el: _Element): GeographicalCoordinates {
    let latitude!: UTF8String;
    let longitude!: UTF8String;
    let mapDatumInformation: OPTIONAL<OGCURN>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "latitude": (_el: _Element): void => { latitude = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "longitude": (_el: _Element): void => { longitude = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "mapDatumInformation": (_el: _Element): void => { mapDatumInformation = $._decode_implicit<OGCURN>(() => _decode_OGCURN)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GeographicalCoordinates,
        _extension_additions_list_spec_for_GeographicalCoordinates,
        _root_component_type_list_2_spec_for_GeographicalCoordinates,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GeographicalCoordinates(
        latitude,
        longitude,
        mapDatumInformation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_GeographicalCoordinates(el);
}

let _cached_encoder_for_GeographicalCoordinates: $.ASN1Encoder<GeographicalCoordinates> | null = null;

/**
 * @summary Encodes a(n) GeographicalCoordinates into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeographicalCoordinates, encoded as an ASN.1 Element.
 */
export
function _encode_GeographicalCoordinates (value: GeographicalCoordinates, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GeographicalCoordinates) { _cached_encoder_for_GeographicalCoordinates = function (value: GeographicalCoordinates, elGetter: $.ASN1Encoder<GeographicalCoordinates>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.latitude, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.longitude, $.BER);
    if (value.mapDatumInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_OGCURN, $.BER)(value.mapDatumInformation, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_GeographicalCoordinates(value, elGetter);
}


/* eslint-enable */
