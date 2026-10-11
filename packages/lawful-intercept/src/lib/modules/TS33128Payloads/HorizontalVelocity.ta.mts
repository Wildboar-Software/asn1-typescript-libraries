/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { HorizontalSpeed, _decode_HorizontalSpeed, _encode_HorizontalSpeed } from "../TS33128Payloads/HorizontalSpeed.ta.mjs";
// export { HorizontalSpeed, _decode_HorizontalSpeed, _encode_HorizontalSpeed } from "../TS33128Payloads/HorizontalSpeed.ta.mjs";
import { Angle, _decode_Angle, _encode_Angle } from "../TS33128Payloads/Angle.ta.mjs";
// export { Angle, _decode_Angle, _encode_Angle } from "../TS33128Payloads/Angle.ta.mjs";


/**
 * @summary HorizontalVelocity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HorizontalVelocity ::= SEQUENCE
 * {
 *     hSpeed                              [1] HorizontalSpeed,
 *     bearing                             [2] Angle
 * }
 * ```
 * 
 * @class
 */
export
class HorizontalVelocity {
    /**
     * @summary `hSpeed`.
     * @public
     * @readonly
     */
    readonly hSpeed: HorizontalSpeed;
    /**
     * @summary `bearing`.
     * @public
     * @readonly
     */
    readonly bearing: Angle;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        hSpeed: HorizontalSpeed,
        bearing: Angle,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.hSpeed = hSpeed;
        this.bearing = bearing;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a HorizontalVelocity
     * @description
     * 
     * This takes an `object` and converts it to a `HorizontalVelocity`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HorizontalVelocity`.
     * @returns {HorizontalVelocity}
     */
    public static _from_object (_o: { [_K in keyof (HorizontalVelocity)]: (HorizontalVelocity)[_K] }): HorizontalVelocity {
        return new HorizontalVelocity(_o.hSpeed, _o.bearing, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of HorizontalVelocity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HorizontalVelocity: $.ComponentSpec[] = [
    new $.ComponentSpec("hSpeed", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("bearing", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of HorizontalVelocity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HorizontalVelocity: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HorizontalVelocity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_HorizontalVelocity: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HorizontalVelocity: $.ASN1Decoder<HorizontalVelocity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HorizontalVelocity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HorizontalVelocity (el: _Element): HorizontalVelocity {
    if (!_cached_decoder_for_HorizontalVelocity) { _cached_decoder_for_HorizontalVelocity = function (el: _Element): HorizontalVelocity {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("HorizontalVelocity contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "hSpeed";
    sequence[1].name = "bearing";
    let hSpeed!: HorizontalSpeed;
    let bearing!: Angle;
    hSpeed = $._decode_implicit<HorizontalSpeed>(() => _decode_HorizontalSpeed)(sequence[0]);
    bearing = $._decode_implicit<Angle>(() => _decode_Angle)(sequence[1]);
    return new HorizontalVelocity(
        hSpeed,
        bearing,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_HorizontalVelocity(el);
}

let _cached_encoder_for_HorizontalVelocity: $.ASN1Encoder<HorizontalVelocity> | null = null;

/**
 * @summary Encodes a(n) HorizontalVelocity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HorizontalVelocity, encoded as an ASN.1 Element.
 */
export
function _encode_HorizontalVelocity (value: HorizontalVelocity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HorizontalVelocity) { _cached_encoder_for_HorizontalVelocity = function (value: HorizontalVelocity, _elGetter: $.ASN1Encoder<HorizontalVelocity>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_HorizontalSpeed, $.BER)(value.hSpeed, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Angle, $.BER)(value.bearing, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_HorizontalVelocity(value, elGetter);
}


/* eslint-enable */
