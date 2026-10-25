/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type WGS84LatitudeAngular, _decode_WGS84LatitudeAngular, _encode_WGS84LatitudeAngular } from "../Common-Parameters/WGS84LatitudeAngular.ta.mjs";
// export { WGS84LatitudeAngular, _decode_WGS84LatitudeAngular, _encode_WGS84LatitudeAngular } from "../Common-Parameters/WGS84LatitudeAngular.ta.mjs";
import { type WGS84LongitudeAngular, _decode_WGS84LongitudeAngular, _encode_WGS84LongitudeAngular } from "../Common-Parameters/WGS84LongitudeAngular.ta.mjs";
// export { WGS84LongitudeAngular, _decode_WGS84LongitudeAngular, _encode_WGS84LongitudeAngular } from "../Common-Parameters/WGS84LongitudeAngular.ta.mjs";


/**
 * @summary WGS84CoordinateAngular
 * @description
 *
 * Geographical latitude and longitude on the WGS84 reference
 * ellipsoid, in angular notation. Example: latitude `N433700.62`,
 * longitude `E0070310.42`.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.36. NIMA Technical
 * Report 8350.2 is cited for the WGS84 definition, not for this
 * syntax.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WGS84CoordinateAngular ::= SEQUENCE
 * {
 *     latitude  [0] WGS84LatitudeAngular,
 *     longitude [1] WGS84LongitudeAngular
 * }
 * ```
 * 
 * @class
 */
export
class WGS84CoordinateAngular {
    /**
     * @summary `latitude`.
     * @description
     *
     * Angular latitude, form `XDDMMSS.ss`: hemisphere `N` or `S`, two
     * digits of degrees, two digits of arc-minutes, two digits of whole
     * arc-seconds, a decimal point, and two digits of fractional
     * arc-seconds. Each part is padded with zeroes. Example:
     * `N433700.62`.
     *
     * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.37.
     *
     * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
     *
     * @public
     * @readonly
     */
    readonly latitude: WGS84LatitudeAngular;
    /**
     * @summary `longitude`.
     * @description
     *
     * Angular longitude, form `XDDDMMSS.ss`: hemisphere `E` or `W`,
     * three digits of degrees, two digits of arc-minutes, two digits of
     * whole arc-seconds, a decimal point, and two digits of fractional
     * arc-seconds. Each part is padded with zeroes. Example:
     * `E0070310.42`.
     *
     * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.38.
     *
     * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
     *
     * @public
     * @readonly
     */
    readonly longitude: WGS84LongitudeAngular;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        latitude: WGS84LatitudeAngular,
        longitude: WGS84LongitudeAngular,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.latitude = latitude;
        this.longitude = longitude;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a WGS84CoordinateAngular
     * @description
     * 
     * This takes an `object` and converts it to a `WGS84CoordinateAngular`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `WGS84CoordinateAngular`.
     * @returns {WGS84CoordinateAngular}
     */
    public static _from_object (_o: { [_K in keyof (WGS84CoordinateAngular)]: (WGS84CoordinateAngular)[_K] }): WGS84CoordinateAngular {
        return new WGS84CoordinateAngular(_o.latitude, _o.longitude, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of WGS84CoordinateAngular
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_WGS84CoordinateAngular: $.ComponentSpec[] = [
    new $.ComponentSpec("latitude", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("longitude", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of WGS84CoordinateAngular
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_WGS84CoordinateAngular: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of WGS84CoordinateAngular
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_WGS84CoordinateAngular: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_WGS84CoordinateAngular: $.ASN1Decoder<WGS84CoordinateAngular> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WGS84CoordinateAngular
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WGS84CoordinateAngular (el: _Element): WGS84CoordinateAngular {
    if (!_cached_decoder_for_WGS84CoordinateAngular) { _cached_decoder_for_WGS84CoordinateAngular = function (el: _Element): WGS84CoordinateAngular {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("WGS84CoordinateAngular contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "latitude";
    sequence[1].name = "longitude";
    let latitude!: WGS84LatitudeAngular;
    let longitude!: WGS84LongitudeAngular;
    latitude = $._decode_implicit<WGS84LatitudeAngular>(() => _decode_WGS84LatitudeAngular)(sequence[0]);
    longitude = $._decode_implicit<WGS84LongitudeAngular>(() => _decode_WGS84LongitudeAngular)(sequence[1]);
    return new WGS84CoordinateAngular(
        latitude,
        longitude,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_WGS84CoordinateAngular(el);
}

let _cached_encoder_for_WGS84CoordinateAngular: $.ASN1Encoder<WGS84CoordinateAngular> | null = null;

/**
 * @summary Encodes a(n) WGS84CoordinateAngular into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WGS84CoordinateAngular, encoded as an ASN.1 Element.
 */
export
function _encode_WGS84CoordinateAngular (value: WGS84CoordinateAngular, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WGS84CoordinateAngular) { _cached_encoder_for_WGS84CoordinateAngular = function (value: WGS84CoordinateAngular, elGetter: $.ASN1Encoder<WGS84CoordinateAngular>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_WGS84LatitudeAngular, $.BER)(value.latitude, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_WGS84LongitudeAngular, $.BER)(value.longitude, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_WGS84CoordinateAngular(value, elGetter);
}


/* eslint-enable */
