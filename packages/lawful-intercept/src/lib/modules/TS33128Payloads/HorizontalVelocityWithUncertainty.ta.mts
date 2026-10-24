/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { HorizontalSpeed, _decode_HorizontalSpeed, _encode_HorizontalSpeed } from "../TS33128Payloads/HorizontalSpeed.ta.mjs";
// export { HorizontalSpeed, _decode_HorizontalSpeed, _encode_HorizontalSpeed } from "../TS33128Payloads/HorizontalSpeed.ta.mjs";
import { Angle, _decode_Angle, _encode_Angle } from "../TS33128Payloads/Angle.ta.mjs";
// export { Angle, _decode_Angle, _encode_Angle } from "../TS33128Payloads/Angle.ta.mjs";
import { SpeedUncertainty, _decode_SpeedUncertainty, _encode_SpeedUncertainty } from "../TS33128Payloads/SpeedUncertainty.ta.mjs";
// export { SpeedUncertainty, _decode_SpeedUncertainty, _encode_SpeedUncertainty } from "../TS33128Payloads/SpeedUncertainty.ta.mjs";


/**
 * @summary HorizontalVelocityWithUncertainty
 * @description
 * 
 * The HorizontalVelocityWithUncertainty type is derived from the data present
 * in the HorizontalVelocityWithUncertainty type defined in TS 29.572 [24]
 * clause 6.1.6.2.20.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.45.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HorizontalVelocityWithUncertainty ::= SEQUENCE
 * {
 *     hSpeed                              [1] HorizontalSpeed,
 *     bearing                             [2] Angle,
 *     uncertainty                         [3] SpeedUncertainty
 * }
 * ```
 * 
 * @class
 */
export
class HorizontalVelocityWithUncertainty {
    /**
     * @summary `hSpeed`.
     * @description
     *
     * Horizontal speed in kilometres per hour. Shall be encoded as described in
     * TS 29.572 [24] table 6.1.6.3.2-1.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.45.
     *
     * @public
     * @readonly
     */
    readonly hSpeed: HorizontalSpeed;
    /**
     * @summary `bearing`.
     * @description
     *
     * Bearing angle in degrees, measured clockwise from North. Shall be encoded
     * as described in TS 29.572 [24] table 6.1.6.3.2-1.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.45.
     *
     * @public
     * @readonly
     */
    readonly bearing: Angle;
    /**
     * @summary `uncertainty`.
     * @description
     *
     * Uncertainty of horizontal speed in kilometres per hour. Shall be encoded
     * as described in TS 29.572 [24] table 6.1.6.3.2-1.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.45.
     *
     * @public
     * @readonly
     */
    readonly uncertainty: SpeedUncertainty;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        hSpeed: HorizontalSpeed,
        bearing: Angle,
        uncertainty: SpeedUncertainty,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.hSpeed = hSpeed;
        this.bearing = bearing;
        this.uncertainty = uncertainty;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a HorizontalVelocityWithUncertainty
     * @description
     * 
     * This takes an `object` and converts it to a `HorizontalVelocityWithUncertainty`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HorizontalVelocityWithUncertainty`.
     * @returns {HorizontalVelocityWithUncertainty}
     */
    public static _from_object (_o: { [_K in keyof (HorizontalVelocityWithUncertainty)]: (HorizontalVelocityWithUncertainty)[_K] }): HorizontalVelocityWithUncertainty {
        return new HorizontalVelocityWithUncertainty(_o.hSpeed, _o.bearing, _o.uncertainty, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of HorizontalVelocityWithUncertainty
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HorizontalVelocityWithUncertainty: $.ComponentSpec[] = [
    new $.ComponentSpec("hSpeed", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("bearing", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("uncertainty", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of HorizontalVelocityWithUncertainty
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HorizontalVelocityWithUncertainty: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HorizontalVelocityWithUncertainty
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_HorizontalVelocityWithUncertainty: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HorizontalVelocityWithUncertainty: $.ASN1Decoder<HorizontalVelocityWithUncertainty> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HorizontalVelocityWithUncertainty
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HorizontalVelocityWithUncertainty (el: _Element): HorizontalVelocityWithUncertainty {
    if (!_cached_decoder_for_HorizontalVelocityWithUncertainty) { _cached_decoder_for_HorizontalVelocityWithUncertainty = function (el: _Element): HorizontalVelocityWithUncertainty {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("HorizontalVelocityWithUncertainty contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "hSpeed";
    sequence[1].name = "bearing";
    sequence[2].name = "uncertainty";
    let hSpeed!: HorizontalSpeed;
    let bearing!: Angle;
    let uncertainty!: SpeedUncertainty;
    hSpeed = $._decode_implicit<HorizontalSpeed>(() => _decode_HorizontalSpeed)(sequence[0]);
    bearing = $._decode_implicit<Angle>(() => _decode_Angle)(sequence[1]);
    uncertainty = $._decode_implicit<SpeedUncertainty>(() => _decode_SpeedUncertainty)(sequence[2]);
    return new HorizontalVelocityWithUncertainty(
        hSpeed,
        bearing,
        uncertainty,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_HorizontalVelocityWithUncertainty(el);
}

let _cached_encoder_for_HorizontalVelocityWithUncertainty: $.ASN1Encoder<HorizontalVelocityWithUncertainty> | null = null;

/**
 * @summary Encodes a(n) HorizontalVelocityWithUncertainty into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HorizontalVelocityWithUncertainty, encoded as an ASN.1 Element.
 */
export
function _encode_HorizontalVelocityWithUncertainty (value: HorizontalVelocityWithUncertainty, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HorizontalVelocityWithUncertainty) { _cached_encoder_for_HorizontalVelocityWithUncertainty = function (value: HorizontalVelocityWithUncertainty, elGetter: $.ASN1Encoder<HorizontalVelocityWithUncertainty>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_HorizontalSpeed, $.BER)(value.hSpeed, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Angle, $.BER)(value.bearing, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SpeedUncertainty, $.BER)(value.uncertainty, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_HorizontalVelocityWithUncertainty(value, elGetter);
}


/* eslint-enable */
