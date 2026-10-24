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
import { VerticalSpeed, _decode_VerticalSpeed, _encode_VerticalSpeed } from "../TS33128Payloads/VerticalSpeed.ta.mjs";
// export { VerticalSpeed, _decode_VerticalSpeed, _encode_VerticalSpeed } from "../TS33128Payloads/VerticalSpeed.ta.mjs";
import { VerticalDirection, _decode_VerticalDirection, _encode_VerticalDirection, _enum_for_VerticalDirection } from "../TS33128Payloads/VerticalDirection.ta.mjs";
// export { VerticalDirection, _enum_for_VerticalDirection, VerticalDirection_upward /* IMPORTED_LONG_ENUMERATION_ITEM */, upward /* IMPORTED_SHORT_ENUMERATION_ITEM */, VerticalDirection_downward /* IMPORTED_LONG_ENUMERATION_ITEM */, downward /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_VerticalDirection, _encode_VerticalDirection } from "../TS33128Payloads/VerticalDirection.ta.mjs";
import { SpeedUncertainty, _decode_SpeedUncertainty, _encode_SpeedUncertainty } from "../TS33128Payloads/SpeedUncertainty.ta.mjs";
// export { SpeedUncertainty, _decode_SpeedUncertainty, _encode_SpeedUncertainty } from "../TS33128Payloads/SpeedUncertainty.ta.mjs";


/**
 * @summary HorizontalWithVerticalVelocityAndUncertainty
 * @description
 * 
 * The HorizontalWithVerticalVelocityAndUncertainty type is derived from the
 * data present in the HorizontalWithVerticalVelocityAndUncertainty type defined
 * in TS 29.572 [24] clause 6.1.6.2.21.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.46.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HorizontalWithVerticalVelocityAndUncertainty ::= SEQUENCE
 * {
 *     hSpeed                              [1] HorizontalSpeed,
 *     bearing                             [2] Angle,
 *     vSpeed                              [3] VerticalSpeed,
 *     vDirection                          [4] VerticalDirection,
 *     hUncertainty                        [5] SpeedUncertainty,
 *     vUncertainty                        [6] SpeedUncertainty
 * }
 * ```
 * 
 * @class
 */
export
class HorizontalWithVerticalVelocityAndUncertainty {
    /**
     * @summary `hSpeed`.
     * @description
     *
     * Horizontal speed in kilometres per hour. Shall be encoded as described in
     * TS 29.572 [24] table 6.1.6.3.2-1.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.46.
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
     * 3GPP TS 33.128, clause 7.3.3.2.46.
     *
     * @public
     * @readonly
     */
    readonly bearing: Angle;
    /**
     * @summary `vSpeed`.
     * @description
     *
     * Vertical Seed in kilometres per hour. Shall be encoded as described in TS
     * 29.572 [24] table 6.1.6.3.2-1.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.46.
     *
     * @public
     * @readonly
     */
    readonly vSpeed: VerticalSpeed;
    /**
     * @summary `vDirection`.
     * @description
     *
     * Vertical Direction: upward or downward. Shall be encoded as described in
     * TS 29.572 [24] clause 6.1.6.3.13.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.46.
     *
     * @public
     * @readonly
     */
    readonly vDirection: VerticalDirection;
    /**
     * @summary `hUncertainty`.
     * @description
     *
     * Uncertainty of horizontal speed in kilometres per hour Shall be encoded
     * as described in TS 29.572 [24] table 6.1.6.3.2-1.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.46.
     *
     * @public
     * @readonly
     */
    readonly hUncertainty: SpeedUncertainty;
    /**
     * @summary `vUncertainty`.
     * @description
     *
     * Uncertainty of vertical speed in kilometres per hour. Shall be encoded as
     * described in TS 29.572 [24] table 6.1.6.3.2-1.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.46.
     *
     * @public
     * @readonly
     */
    readonly vUncertainty: SpeedUncertainty;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        hSpeed: HorizontalSpeed,
        bearing: Angle,
        vSpeed: VerticalSpeed,
        vDirection: VerticalDirection,
        hUncertainty: SpeedUncertainty,
        vUncertainty: SpeedUncertainty,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.hSpeed = hSpeed;
        this.bearing = bearing;
        this.vSpeed = vSpeed;
        this.vDirection = vDirection;
        this.hUncertainty = hUncertainty;
        this.vUncertainty = vUncertainty;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a HorizontalWithVerticalVelocityAndUncertainty
     * @description
     * 
     * This takes an `object` and converts it to a `HorizontalWithVerticalVelocityAndUncertainty`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HorizontalWithVerticalVelocityAndUncertainty`.
     * @returns {HorizontalWithVerticalVelocityAndUncertainty}
     */
    public static _from_object (_o: { [_K in keyof (HorizontalWithVerticalVelocityAndUncertainty)]: (HorizontalWithVerticalVelocityAndUncertainty)[_K] }): HorizontalWithVerticalVelocityAndUncertainty {
        return new HorizontalWithVerticalVelocityAndUncertainty(_o.hSpeed, _o.bearing, _o.vSpeed, _o.vDirection, _o.hUncertainty, _o.vUncertainty, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `vDirection`
         * @public
         * @static
         */

    public static _enum_for_vDirection = _enum_for_VerticalDirection;
}

/**
 * @summary The Leading Root Component Types of HorizontalWithVerticalVelocityAndUncertainty
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HorizontalWithVerticalVelocityAndUncertainty: $.ComponentSpec[] = [
    new $.ComponentSpec("hSpeed", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("bearing", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("vSpeed", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("vDirection", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("hUncertainty", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("vUncertainty", false, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of HorizontalWithVerticalVelocityAndUncertainty
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HorizontalWithVerticalVelocityAndUncertainty: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HorizontalWithVerticalVelocityAndUncertainty
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_HorizontalWithVerticalVelocityAndUncertainty: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HorizontalWithVerticalVelocityAndUncertainty: $.ASN1Decoder<HorizontalWithVerticalVelocityAndUncertainty> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HorizontalWithVerticalVelocityAndUncertainty
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HorizontalWithVerticalVelocityAndUncertainty (el: _Element): HorizontalWithVerticalVelocityAndUncertainty {
    if (!_cached_decoder_for_HorizontalWithVerticalVelocityAndUncertainty) { _cached_decoder_for_HorizontalWithVerticalVelocityAndUncertainty = function (el: _Element): HorizontalWithVerticalVelocityAndUncertainty {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 6) {
        throw new _ConstructionError("HorizontalWithVerticalVelocityAndUncertainty contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "hSpeed";
    sequence[1].name = "bearing";
    sequence[2].name = "vSpeed";
    sequence[3].name = "vDirection";
    sequence[4].name = "hUncertainty";
    sequence[5].name = "vUncertainty";
    let hSpeed!: HorizontalSpeed;
    let bearing!: Angle;
    let vSpeed!: VerticalSpeed;
    let vDirection!: VerticalDirection;
    let hUncertainty!: SpeedUncertainty;
    let vUncertainty!: SpeedUncertainty;
    hSpeed = $._decode_implicit<HorizontalSpeed>(() => _decode_HorizontalSpeed)(sequence[0]);
    bearing = $._decode_implicit<Angle>(() => _decode_Angle)(sequence[1]);
    vSpeed = $._decode_implicit<VerticalSpeed>(() => _decode_VerticalSpeed)(sequence[2]);
    vDirection = $._decode_implicit<VerticalDirection>(() => _decode_VerticalDirection)(sequence[3]);
    hUncertainty = $._decode_implicit<SpeedUncertainty>(() => _decode_SpeedUncertainty)(sequence[4]);
    vUncertainty = $._decode_implicit<SpeedUncertainty>(() => _decode_SpeedUncertainty)(sequence[5]);
    return new HorizontalWithVerticalVelocityAndUncertainty(
        hSpeed,
        bearing,
        vSpeed,
        vDirection,
        hUncertainty,
        vUncertainty,
        sequence.slice(6),
    );
}; }
    return _cached_decoder_for_HorizontalWithVerticalVelocityAndUncertainty(el);
}

let _cached_encoder_for_HorizontalWithVerticalVelocityAndUncertainty: $.ASN1Encoder<HorizontalWithVerticalVelocityAndUncertainty> | null = null;

/**
 * @summary Encodes a(n) HorizontalWithVerticalVelocityAndUncertainty into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HorizontalWithVerticalVelocityAndUncertainty, encoded as an ASN.1 Element.
 */
export
function _encode_HorizontalWithVerticalVelocityAndUncertainty (value: HorizontalWithVerticalVelocityAndUncertainty, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HorizontalWithVerticalVelocityAndUncertainty) { _cached_encoder_for_HorizontalWithVerticalVelocityAndUncertainty = function (value: HorizontalWithVerticalVelocityAndUncertainty, elGetter: $.ASN1Encoder<HorizontalWithVerticalVelocityAndUncertainty>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_HorizontalSpeed, $.BER)(value.hSpeed, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Angle, $.BER)(value.bearing, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_VerticalSpeed, $.BER)(value.vSpeed, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_VerticalDirection, $.BER)(value.vDirection, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_SpeedUncertainty, $.BER)(value.hUncertainty, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_SpeedUncertainty, $.BER)(value.vUncertainty, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_HorizontalWithVerticalVelocityAndUncertainty(value, elGetter);
}


/* eslint-enable */
