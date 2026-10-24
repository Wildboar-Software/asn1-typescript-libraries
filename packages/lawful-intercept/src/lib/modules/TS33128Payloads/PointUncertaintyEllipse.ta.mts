/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GeographicalCoordinates, _decode_GeographicalCoordinates, _encode_GeographicalCoordinates } from "../TS33128Payloads/GeographicalCoordinates.ta.mjs";
// export { GeographicalCoordinates, _decode_GeographicalCoordinates, _encode_GeographicalCoordinates } from "../TS33128Payloads/GeographicalCoordinates.ta.mjs";
import { UncertaintyEllipse, _decode_UncertaintyEllipse, _encode_UncertaintyEllipse } from "../TS33128Payloads/UncertaintyEllipse.ta.mjs";
// export { UncertaintyEllipse, _decode_UncertaintyEllipse, _encode_UncertaintyEllipse } from "../TS33128Payloads/UncertaintyEllipse.ta.mjs";
import { Confidence, _decode_Confidence, _encode_Confidence } from "../TS33128Payloads/Confidence.ta.mjs";
// export { Confidence, _decode_Confidence, _encode_Confidence } from "../TS33128Payloads/Confidence.ta.mjs";


/**
 * @summary PointUncertaintyEllipse
 * @description
 * 
 * The PointUncertaintyEllipse type is derived from the data present in the
 * PointUncertaintyEllipse type defined in TS 29.572 [24] clause 6.1.6.2.8.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.14.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PointUncertaintyEllipse ::= SEQUENCE
 * {
 *     geographicalCoordinates             [1] GeographicalCoordinates,
 *     uncertainty                         [2] UncertaintyEllipse,
 *     confidence                          [3] Confidence
 * }
 * ```
 * 
 * @class
 */
export
class PointUncertaintyEllipse {
    /**
     * @summary `geographicalCoordinates`.
     * @description
     *
     * Indicates a geographic point for the centre of the ellipse represented by
     * its longitude and latitude.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.14.
     *
     * @public
     * @readonly
     */
    readonly geographicalCoordinates: GeographicalCoordinates;
    /**
     * @summary `uncertainty`.
     * @description
     *
     * Describes an uncertainty ellipse.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.14.
     *
     * @public
     * @readonly
     */
    readonly uncertainty: UncertaintyEllipse;
    /**
     * @summary `confidence`.
     * @description
     *
     * Indicates the confidence of the location as a percentage.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.14.
     *
     * @public
     * @readonly
     */
    readonly confidence: Confidence;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        geographicalCoordinates: GeographicalCoordinates,
        uncertainty: UncertaintyEllipse,
        confidence: Confidence,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.geographicalCoordinates = geographicalCoordinates;
        this.uncertainty = uncertainty;
        this.confidence = confidence;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PointUncertaintyEllipse
     * @description
     * 
     * This takes an `object` and converts it to a `PointUncertaintyEllipse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PointUncertaintyEllipse`.
     * @returns {PointUncertaintyEllipse}
     */
    public static _from_object (_o: { [_K in keyof (PointUncertaintyEllipse)]: (PointUncertaintyEllipse)[_K] }): PointUncertaintyEllipse {
        return new PointUncertaintyEllipse(_o.geographicalCoordinates, _o.uncertainty, _o.confidence, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PointUncertaintyEllipse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PointUncertaintyEllipse: $.ComponentSpec[] = [
    new $.ComponentSpec("geographicalCoordinates", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("uncertainty", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("confidence", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of PointUncertaintyEllipse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PointUncertaintyEllipse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PointUncertaintyEllipse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PointUncertaintyEllipse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PointUncertaintyEllipse: $.ASN1Decoder<PointUncertaintyEllipse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PointUncertaintyEllipse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PointUncertaintyEllipse (el: _Element): PointUncertaintyEllipse {
    if (!_cached_decoder_for_PointUncertaintyEllipse) { _cached_decoder_for_PointUncertaintyEllipse = function (el: _Element): PointUncertaintyEllipse {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("PointUncertaintyEllipse contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "geographicalCoordinates";
    sequence[1].name = "uncertainty";
    sequence[2].name = "confidence";
    let geographicalCoordinates!: GeographicalCoordinates;
    let uncertainty!: UncertaintyEllipse;
    let confidence!: Confidence;
    geographicalCoordinates = $._decode_implicit<GeographicalCoordinates>(() => _decode_GeographicalCoordinates)(sequence[0]);
    uncertainty = $._decode_implicit<UncertaintyEllipse>(() => _decode_UncertaintyEllipse)(sequence[1]);
    confidence = $._decode_implicit<Confidence>(() => _decode_Confidence)(sequence[2]);
    return new PointUncertaintyEllipse(
        geographicalCoordinates,
        uncertainty,
        confidence,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_PointUncertaintyEllipse(el);
}

let _cached_encoder_for_PointUncertaintyEllipse: $.ASN1Encoder<PointUncertaintyEllipse> | null = null;

/**
 * @summary Encodes a(n) PointUncertaintyEllipse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PointUncertaintyEllipse, encoded as an ASN.1 Element.
 */
export
function _encode_PointUncertaintyEllipse (value: PointUncertaintyEllipse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PointUncertaintyEllipse) { _cached_encoder_for_PointUncertaintyEllipse = function (value: PointUncertaintyEllipse, elGetter: $.ASN1Encoder<PointUncertaintyEllipse>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_GeographicalCoordinates, $.BER)(value.geographicalCoordinates, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_UncertaintyEllipse, $.BER)(value.uncertainty, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Confidence, $.BER)(value.confidence, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PointUncertaintyEllipse(value, elGetter);
}


/* eslint-enable */
