/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GeographicalCoordinates, _decode_GeographicalCoordinates, _encode_GeographicalCoordinates } from "../TS33128Payloads/GeographicalCoordinates.ta.mjs";
// export { GeographicalCoordinates, _decode_GeographicalCoordinates, _encode_GeographicalCoordinates } from "../TS33128Payloads/GeographicalCoordinates.ta.mjs";
import { InnerRadius, _decode_InnerRadius, _encode_InnerRadius } from "../TS33128Payloads/InnerRadius.ta.mjs";
// export { InnerRadius, _decode_InnerRadius, _encode_InnerRadius } from "../TS33128Payloads/InnerRadius.ta.mjs";
import { Uncertainty, _decode_Uncertainty, _encode_Uncertainty } from "../TS33128Payloads/Uncertainty.ta.mjs";
// export { Uncertainty, _decode_Uncertainty, _encode_Uncertainty } from "../TS33128Payloads/Uncertainty.ta.mjs";
import { Angle, _decode_Angle, _encode_Angle } from "../TS33128Payloads/Angle.ta.mjs";
// export { Angle, _decode_Angle, _encode_Angle } from "../TS33128Payloads/Angle.ta.mjs";
import { Confidence, _decode_Confidence, _encode_Confidence } from "../TS33128Payloads/Confidence.ta.mjs";
// export { Confidence, _decode_Confidence, _encode_Confidence } from "../TS33128Payloads/Confidence.ta.mjs";
import { UncertaintySBI, _decode_UncertaintySBI, _encode_UncertaintySBI } from "../TS33128Payloads/UncertaintySBI.ta.mjs";
// export { UncertaintySBI, _decode_UncertaintySBI, _encode_UncertaintySBI } from "../TS33128Payloads/UncertaintySBI.ta.mjs";


/**
 * @summary EllipsoidArc
 * @description
 * 
 * The EllipsoidArc type is derived from the data present in the EllipsoidArc
 * type defined in TS 29.572 [24] clause 6.1.6.2.12.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.19.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EllipsoidArc ::= SEQUENCE
 * {
 *     point                               [1] GeographicalCoordinates,
 *     innerRadius                         [2] InnerRadius,
 *     -- deprecatedUncertaintyRadius was deprecated in r18(18) version3(3)
 *     -- and shall be set to 0. The uncertaintyRadiusSBI parameter shall be used instead.
 *     deprecatedUncertaintyRadius         [3] Uncertainty,
 *     offsetAngle                         [4] Angle,
 *     includedAngle                       [5] Angle,
 *     confidence                          [6] Confidence,
 *     uncertaintyRadiusSBI                [7] UncertaintySBI OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EllipsoidArc {
    /**
     * @summary `point`.
     * @public
     * @readonly
     */
    readonly point: GeographicalCoordinates;
    /**
     * @summary `innerRadius`.
     * @description
     *
     * Indicates the inner radius of the ellipsoid arc in meters.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.19.
     *
     * @public
     * @readonly
     */
    readonly innerRadius: InnerRadius;
    /**
     * @summary `deprecatedUncertaintyRadius`.
     * @description
     *
     * No longer used in present version of this specification and shall be set
     * to 0. The uncertaintyRadiusSBI parameter shall be used instead.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.19.
     *
     * @public
     * @readonly
     */
    readonly deprecatedUncertaintyRadius: Uncertainty;
    /**
     * @summary `offsetAngle`.
     * @description
     *
     * Indicates the angle from North to the first defining radius of the arc in
     * degrees.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.19.
     *
     * @public
     * @readonly
     */
    readonly offsetAngle: Angle;
    /**
     * @summary `includedAngle`.
     * @description
     *
     * Indicates the angle from the first defining radius of the arc to the
     * second in degrees.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.19.
     *
     * @public
     * @readonly
     */
    readonly includedAngle: Angle;
    /**
     * @summary `confidence`.
     * @description
     *
     * Indicates the confidence of the location as a percentage.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.19.
     *
     * @public
     * @readonly
     */
    readonly confidence: Confidence;
    /**
     * @summary `uncertaintyRadiusSBI`.
     * @description
     *
     * Indicates the width of the uncertainty arc in meters. Shall be provided.
     * This parameter is conditional only for backwards compatibility.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.19.
     *
     * @public
     * @readonly
     */
    readonly uncertaintyRadiusSBI: OPTIONAL<UncertaintySBI>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        point: GeographicalCoordinates,
        innerRadius: InnerRadius,
        deprecatedUncertaintyRadius: Uncertainty,
        offsetAngle: Angle,
        includedAngle: Angle,
        confidence: Confidence,
        uncertaintyRadiusSBI: OPTIONAL<UncertaintySBI>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.point = point;
        this.innerRadius = innerRadius;
        this.deprecatedUncertaintyRadius = deprecatedUncertaintyRadius;
        this.offsetAngle = offsetAngle;
        this.includedAngle = includedAngle;
        this.confidence = confidence;
        this.uncertaintyRadiusSBI = uncertaintyRadiusSBI;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EllipsoidArc
     * @description
     * 
     * This takes an `object` and converts it to a `EllipsoidArc`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EllipsoidArc`.
     * @returns {EllipsoidArc}
     */
    public static _from_object (_o: { [_K in keyof (EllipsoidArc)]: (EllipsoidArc)[_K] }): EllipsoidArc {
        return new EllipsoidArc(_o.point, _o.innerRadius, _o.deprecatedUncertaintyRadius, _o.offsetAngle, _o.includedAngle, _o.confidence, _o.uncertaintyRadiusSBI, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EllipsoidArc
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EllipsoidArc: $.ComponentSpec[] = [
    new $.ComponentSpec("point", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("innerRadius", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("deprecatedUncertaintyRadius", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("offsetAngle", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("includedAngle", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("confidence", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("uncertaintyRadiusSBI", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of EllipsoidArc
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EllipsoidArc: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EllipsoidArc
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EllipsoidArc: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EllipsoidArc: $.ASN1Decoder<EllipsoidArc> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EllipsoidArc
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EllipsoidArc (el: _Element): EllipsoidArc {
    if (!_cached_decoder_for_EllipsoidArc) { _cached_decoder_for_EllipsoidArc = function (el: _Element): EllipsoidArc {
    let point!: GeographicalCoordinates;
    let innerRadius!: InnerRadius;
    let deprecatedUncertaintyRadius!: Uncertainty;
    let offsetAngle!: Angle;
    let includedAngle!: Angle;
    let confidence!: Confidence;
    let uncertaintyRadiusSBI: OPTIONAL<UncertaintySBI>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "point": (_el: _Element): void => { point = $._decode_implicit<GeographicalCoordinates>(() => _decode_GeographicalCoordinates)(_el); },
        "innerRadius": (_el: _Element): void => { innerRadius = $._decode_implicit<InnerRadius>(() => _decode_InnerRadius)(_el); },
        "deprecatedUncertaintyRadius": (_el: _Element): void => { deprecatedUncertaintyRadius = $._decode_implicit<Uncertainty>(() => _decode_Uncertainty)(_el); },
        "offsetAngle": (_el: _Element): void => { offsetAngle = $._decode_implicit<Angle>(() => _decode_Angle)(_el); },
        "includedAngle": (_el: _Element): void => { includedAngle = $._decode_implicit<Angle>(() => _decode_Angle)(_el); },
        "confidence": (_el: _Element): void => { confidence = $._decode_implicit<Confidence>(() => _decode_Confidence)(_el); },
        "uncertaintyRadiusSBI": (_el: _Element): void => { uncertaintyRadiusSBI = $._decode_implicit<UncertaintySBI>(() => _decode_UncertaintySBI)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EllipsoidArc,
        _extension_additions_list_spec_for_EllipsoidArc,
        _root_component_type_list_2_spec_for_EllipsoidArc,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EllipsoidArc(
        point,
        innerRadius,
        deprecatedUncertaintyRadius,
        offsetAngle,
        includedAngle,
        confidence,
        uncertaintyRadiusSBI,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EllipsoidArc(el);
}

let _cached_encoder_for_EllipsoidArc: $.ASN1Encoder<EllipsoidArc> | null = null;

/**
 * @summary Encodes a(n) EllipsoidArc into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EllipsoidArc, encoded as an ASN.1 Element.
 */
export
function _encode_EllipsoidArc (value: EllipsoidArc, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EllipsoidArc) { _cached_encoder_for_EllipsoidArc = function (value: EllipsoidArc, elGetter: $.ASN1Encoder<EllipsoidArc>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_GeographicalCoordinates, $.BER)(value.point, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_InnerRadius, $.BER)(value.innerRadius, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Uncertainty, $.BER)(value.deprecatedUncertaintyRadius, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Angle, $.BER)(value.offsetAngle, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_Angle, $.BER)(value.includedAngle, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_Confidence, $.BER)(value.confidence, $.BER);
    if (value.uncertaintyRadiusSBI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_UncertaintySBI, $.BER)(value.uncertaintyRadiusSBI, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EllipsoidArc(value, elGetter);
}


/* eslint-enable */
