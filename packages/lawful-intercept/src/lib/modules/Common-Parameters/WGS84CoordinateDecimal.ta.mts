/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { WGS84LatitudeDecimal, _decode_WGS84LatitudeDecimal, _encode_WGS84LatitudeDecimal } from "../Common-Parameters/WGS84LatitudeDecimal.ta.mjs";
// export { WGS84LatitudeDecimal, _decode_WGS84LatitudeDecimal, _encode_WGS84LatitudeDecimal } from "../Common-Parameters/WGS84LatitudeDecimal.ta.mjs";
import { WGS84LongitudeDecimal, _decode_WGS84LongitudeDecimal, _encode_WGS84LongitudeDecimal } from "../Common-Parameters/WGS84LongitudeDecimal.ta.mjs";
// export { WGS84LongitudeDecimal, _decode_WGS84LongitudeDecimal, _encode_WGS84LongitudeDecimal } from "../Common-Parameters/WGS84LongitudeDecimal.ta.mjs";


/**
 * @summary WGS84CoordinateDecimal
 * @description
 *
 * Geographical latitude and longitude on the WGS84 reference
 * ellipsoid, in decimal notation. Example: latitude `N43.616000`,
 * longitude `E007.053000`.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.33. NIMA Technical
 * Report 8350.2 is cited for the WGS84 definition, not for this
 * syntax.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WGS84CoordinateDecimal ::= SEQUENCE
 * {
 *     latitude  [0] WGS84LatitudeDecimal,
 *     longitude [1] WGS84LongitudeDecimal
 * }
 * ```
 * 
 * @class
 */
export
class WGS84CoordinateDecimal {
    /**
     * @summary `latitude`.
     * @description
     *
     * Decimal latitude. Two digits before the decimal point, left-padded
     * with zero, and six digits after, right-padded with zero.
     * Hemisphere `N` or `S`. Example: `N43.616000`.
     *
     * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.34.
     *
     * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
     *
     * @public
     * @readonly
     */
    readonly latitude: WGS84LatitudeDecimal;
    /**
     * @summary `longitude`.
     * @description
     *
     * Decimal longitude. Three digits before the decimal point,
     * left-padded with zero, and six digits after, right-padded with
     * zero. Hemisphere `E` or `W`. Example: `E007.053000`.
     *
     * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.35.
     *
     * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
     *
     * @public
     * @readonly
     */
    readonly longitude: WGS84LongitudeDecimal;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        latitude: WGS84LatitudeDecimal,
        longitude: WGS84LongitudeDecimal,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.latitude = latitude;
        this.longitude = longitude;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a WGS84CoordinateDecimal
     * @description
     * 
     * This takes an `object` and converts it to a `WGS84CoordinateDecimal`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `WGS84CoordinateDecimal`.
     * @returns {WGS84CoordinateDecimal}
     */
    public static _from_object (_o: { [_K in keyof (WGS84CoordinateDecimal)]: (WGS84CoordinateDecimal)[_K] }): WGS84CoordinateDecimal {
        return new WGS84CoordinateDecimal(_o.latitude, _o.longitude, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of WGS84CoordinateDecimal
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_WGS84CoordinateDecimal: $.ComponentSpec[] = [
    new $.ComponentSpec("latitude", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("longitude", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of WGS84CoordinateDecimal
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_WGS84CoordinateDecimal: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of WGS84CoordinateDecimal
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_WGS84CoordinateDecimal: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_WGS84CoordinateDecimal: $.ASN1Decoder<WGS84CoordinateDecimal> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WGS84CoordinateDecimal
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WGS84CoordinateDecimal (el: _Element): WGS84CoordinateDecimal {
    if (!_cached_decoder_for_WGS84CoordinateDecimal) { _cached_decoder_for_WGS84CoordinateDecimal = function (el: _Element): WGS84CoordinateDecimal {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("WGS84CoordinateDecimal contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "latitude";
    sequence[1].name = "longitude";
    let latitude!: WGS84LatitudeDecimal;
    let longitude!: WGS84LongitudeDecimal;
    latitude = $._decode_implicit<WGS84LatitudeDecimal>(() => _decode_WGS84LatitudeDecimal)(sequence[0]);
    longitude = $._decode_implicit<WGS84LongitudeDecimal>(() => _decode_WGS84LongitudeDecimal)(sequence[1]);
    return new WGS84CoordinateDecimal(
        latitude,
        longitude,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_WGS84CoordinateDecimal(el);
}

let _cached_encoder_for_WGS84CoordinateDecimal: $.ASN1Encoder<WGS84CoordinateDecimal> | null = null;

/**
 * @summary Encodes a(n) WGS84CoordinateDecimal into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WGS84CoordinateDecimal, encoded as an ASN.1 Element.
 */
export
function _encode_WGS84CoordinateDecimal (value: WGS84CoordinateDecimal, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WGS84CoordinateDecimal) { _cached_encoder_for_WGS84CoordinateDecimal = function (value: WGS84CoordinateDecimal, elGetter: $.ASN1Encoder<WGS84CoordinateDecimal>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_WGS84LatitudeDecimal, $.BER)(value.latitude, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_WGS84LongitudeDecimal, $.BER)(value.longitude, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_WGS84CoordinateDecimal(value, elGetter);
}


/* eslint-enable */
