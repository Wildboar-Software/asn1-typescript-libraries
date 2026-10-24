/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GeographicalCoordinates, _decode_GeographicalCoordinates, _encode_GeographicalCoordinates } from "../TS33128Payloads/GeographicalCoordinates.ta.mjs";
// export { GeographicalCoordinates, _decode_GeographicalCoordinates, _encode_GeographicalCoordinates } from "../TS33128Payloads/GeographicalCoordinates.ta.mjs";
import { Altitude, _decode_Altitude, _encode_Altitude } from "../TS33128Payloads/Altitude.ta.mjs";
// export { Altitude, _decode_Altitude, _encode_Altitude } from "../TS33128Payloads/Altitude.ta.mjs";


/**
 * @summary PointAltitude
 * @description
 * 
 * The PointAltitude type is derived from the data present in the PointAltitude
 * type defined in TS 29.572 [24] clause 6.1.6.2.10.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.17.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PointAltitude ::= SEQUENCE
 * {
 *     point                               [1] GeographicalCoordinates,
 *     altitude                            [2] Altitude
 * }
 * ```
 * 
 * @class
 */
export
class PointAltitude {
    /**
     * @summary `point`.
     * @public
     * @readonly
     */
    readonly point: GeographicalCoordinates;
    /**
     * @summary `altitude`.
     * @description
     *
     * Indicates the altitude of the UE in meters.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.17.
     *
     * @public
     * @readonly
     */
    readonly altitude: Altitude;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        point: GeographicalCoordinates,
        altitude: Altitude,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.point = point;
        this.altitude = altitude;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PointAltitude
     * @description
     * 
     * This takes an `object` and converts it to a `PointAltitude`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PointAltitude`.
     * @returns {PointAltitude}
     */
    public static _from_object (_o: { [_K in keyof (PointAltitude)]: (PointAltitude)[_K] }): PointAltitude {
        return new PointAltitude(_o.point, _o.altitude, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PointAltitude
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PointAltitude: $.ComponentSpec[] = [
    new $.ComponentSpec("point", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("altitude", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PointAltitude
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PointAltitude: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PointAltitude
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PointAltitude: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PointAltitude: $.ASN1Decoder<PointAltitude> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PointAltitude
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PointAltitude (el: _Element): PointAltitude {
    if (!_cached_decoder_for_PointAltitude) { _cached_decoder_for_PointAltitude = function (el: _Element): PointAltitude {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PointAltitude contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "point";
    sequence[1].name = "altitude";
    let point!: GeographicalCoordinates;
    let altitude!: Altitude;
    point = $._decode_implicit<GeographicalCoordinates>(() => _decode_GeographicalCoordinates)(sequence[0]);
    altitude = $._decode_implicit<Altitude>(() => _decode_Altitude)(sequence[1]);
    return new PointAltitude(
        point,
        altitude,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_PointAltitude(el);
}

let _cached_encoder_for_PointAltitude: $.ASN1Encoder<PointAltitude> | null = null;

/**
 * @summary Encodes a(n) PointAltitude into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PointAltitude, encoded as an ASN.1 Element.
 */
export
function _encode_PointAltitude (value: PointAltitude, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PointAltitude) { _cached_encoder_for_PointAltitude = function (value: PointAltitude, elGetter: $.ASN1Encoder<PointAltitude>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_GeographicalCoordinates, $.BER)(value.point, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Altitude, $.BER)(value.altitude, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PointAltitude(value, elGetter);
}


/* eslint-enable */
