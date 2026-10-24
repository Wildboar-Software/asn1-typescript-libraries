/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GeographicalCoordinates, _decode_GeographicalCoordinates, _encode_GeographicalCoordinates } from "../TS33128Payloads/GeographicalCoordinates.ta.mjs";
// export { GeographicalCoordinates, _decode_GeographicalCoordinates, _encode_GeographicalCoordinates } from "../TS33128Payloads/GeographicalCoordinates.ta.mjs";
import { type Altitude, _decode_Altitude, _encode_Altitude } from "../TS33128Payloads/Altitude.ta.mjs";
// export { Altitude, _decode_Altitude, _encode_Altitude } from "../TS33128Payloads/Altitude.ta.mjs";
import { UncertaintyEllipse, _decode_UncertaintyEllipse, _encode_UncertaintyEllipse } from "../TS33128Payloads/UncertaintyEllipse.ta.mjs";
// export { UncertaintyEllipse, _decode_UncertaintyEllipse, _encode_UncertaintyEllipse } from "../TS33128Payloads/UncertaintyEllipse.ta.mjs";
import { type Uncertainty, _decode_Uncertainty, _encode_Uncertainty } from "../TS33128Payloads/Uncertainty.ta.mjs";
// export { Uncertainty, _decode_Uncertainty, _encode_Uncertainty } from "../TS33128Payloads/Uncertainty.ta.mjs";
import { type Confidence, _decode_Confidence, _encode_Confidence } from "../TS33128Payloads/Confidence.ta.mjs";
// export { Confidence, _decode_Confidence, _encode_Confidence } from "../TS33128Payloads/Confidence.ta.mjs";
import { type UncertaintySBI, _decode_UncertaintySBI, _encode_UncertaintySBI } from "../TS33128Payloads/UncertaintySBI.ta.mjs";
// export { UncertaintySBI, _decode_UncertaintySBI, _encode_UncertaintySBI } from "../TS33128Payloads/UncertaintySBI.ta.mjs";


/**
 * @summary PointAltitudeUncertainty
 * @description
 * 
 * The PointAltitudeUncertainty type is derived from the data present in the
 * PointAltitudeUncertainty type defined in TS 29.572 [24] clause 6.1.6.2.11.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.18.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PointAltitudeUncertainty ::= SEQUENCE
 * {
 *     point                               [1] GeographicalCoordinates,
 *     altitude                            [2] Altitude,
 *     uncertaintyEllipse                  [3] UncertaintyEllipse,
 *     -- deprecatedUncertaintyAltitude was deprecated in r18(18) version3(3)
 *     -- and shall be set to 0. The uncertaintyAltitudeSBI parameter shall be used instead.
 *     deprecatedUncertaintyAltitude       [4] Uncertainty,
 *     confidence                          [5] Confidence,
 *     uncertaintyAltitudeSBI              [6] UncertaintySBI OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PointAltitudeUncertainty {
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
     * 3GPP TS 33.128, clause 7.3.3.2.18.
     *
     * @public
     * @readonly
     */
    readonly altitude: Altitude;
    /**
     * @summary `uncertaintyEllipse`.
     * @description
     *
     * Describes an uncertainty ellipse.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.18.
     *
     * @public
     * @readonly
     */
    readonly uncertaintyEllipse: UncertaintyEllipse;
    /**
     * @summary `deprecatedUncertaintyAltitude`.
     * @description
     *
     * No longer used in present version of this specification and shall be set
     * to 0. The uncertaintyAltitudeSBI parameter shall be used instead.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.18.
     *
     * @public
     * @readonly
     */
    readonly deprecatedUncertaintyAltitude: Uncertainty;
    /**
     * @summary `confidence`.
     * @description
     *
     * Indicates the confidence of the location as a percentage.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.18.
     *
     * @public
     * @readonly
     */
    readonly confidence: Confidence;
    /**
     * @summary `uncertaintyAltitudeSBI`.
     * @description
     *
     * Indicates the uncertainty of the altitude in meters. Shall be provided.
     * This parameter is conditional only for backwards compatibility.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.18.
     *
     * @public
     * @readonly
     */
    readonly uncertaintyAltitudeSBI: OPTIONAL<UncertaintySBI>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        point: GeographicalCoordinates,
        altitude: Altitude,
        uncertaintyEllipse: UncertaintyEllipse,
        deprecatedUncertaintyAltitude: Uncertainty,
        confidence: Confidence,
        uncertaintyAltitudeSBI?: OPTIONAL<UncertaintySBI>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.point = point;
        this.altitude = altitude;
        this.uncertaintyEllipse = uncertaintyEllipse;
        this.deprecatedUncertaintyAltitude = deprecatedUncertaintyAltitude;
        this.confidence = confidence;
        this.uncertaintyAltitudeSBI = uncertaintyAltitudeSBI;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PointAltitudeUncertainty
     * @description
     * 
     * This takes an `object` and converts it to a `PointAltitudeUncertainty`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PointAltitudeUncertainty`.
     * @returns {PointAltitudeUncertainty}
     */
    public static _from_object (_o: { [_K in keyof (PointAltitudeUncertainty)]: (PointAltitudeUncertainty)[_K] }): PointAltitudeUncertainty {
        return new PointAltitudeUncertainty(_o.point, _o.altitude, _o.uncertaintyEllipse, _o.deprecatedUncertaintyAltitude, _o.confidence, _o.uncertaintyAltitudeSBI, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PointAltitudeUncertainty
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PointAltitudeUncertainty: $.ComponentSpec[] = [
    new $.ComponentSpec("point", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("altitude", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("uncertaintyEllipse", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("deprecatedUncertaintyAltitude", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("confidence", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("uncertaintyAltitudeSBI", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of PointAltitudeUncertainty
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PointAltitudeUncertainty: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PointAltitudeUncertainty
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PointAltitudeUncertainty: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PointAltitudeUncertainty: $.ASN1Decoder<PointAltitudeUncertainty> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PointAltitudeUncertainty
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PointAltitudeUncertainty (el: _Element): PointAltitudeUncertainty {
    if (!_cached_decoder_for_PointAltitudeUncertainty) { _cached_decoder_for_PointAltitudeUncertainty = function (el: _Element): PointAltitudeUncertainty {
    let point!: GeographicalCoordinates;
    let altitude!: Altitude;
    let uncertaintyEllipse!: UncertaintyEllipse;
    let deprecatedUncertaintyAltitude!: Uncertainty;
    let confidence!: Confidence;
    let uncertaintyAltitudeSBI: OPTIONAL<UncertaintySBI>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "point": (_el: _Element): void => { point = $._decode_implicit<GeographicalCoordinates>(() => _decode_GeographicalCoordinates)(_el); },
        "altitude": (_el: _Element): void => { altitude = $._decode_implicit<Altitude>(() => _decode_Altitude)(_el); },
        "uncertaintyEllipse": (_el: _Element): void => { uncertaintyEllipse = $._decode_implicit<UncertaintyEllipse>(() => _decode_UncertaintyEllipse)(_el); },
        "deprecatedUncertaintyAltitude": (_el: _Element): void => { deprecatedUncertaintyAltitude = $._decode_implicit<Uncertainty>(() => _decode_Uncertainty)(_el); },
        "confidence": (_el: _Element): void => { confidence = $._decode_implicit<Confidence>(() => _decode_Confidence)(_el); },
        "uncertaintyAltitudeSBI": (_el: _Element): void => { uncertaintyAltitudeSBI = $._decode_implicit<UncertaintySBI>(() => _decode_UncertaintySBI)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PointAltitudeUncertainty,
        _extension_additions_list_spec_for_PointAltitudeUncertainty,
        _root_component_type_list_2_spec_for_PointAltitudeUncertainty,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PointAltitudeUncertainty(
        point,
        altitude,
        uncertaintyEllipse,
        deprecatedUncertaintyAltitude,
        confidence,
        uncertaintyAltitudeSBI,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PointAltitudeUncertainty(el);
}

let _cached_encoder_for_PointAltitudeUncertainty: $.ASN1Encoder<PointAltitudeUncertainty> | null = null;

/**
 * @summary Encodes a(n) PointAltitudeUncertainty into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PointAltitudeUncertainty, encoded as an ASN.1 Element.
 */
export
function _encode_PointAltitudeUncertainty (value: PointAltitudeUncertainty, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PointAltitudeUncertainty) { _cached_encoder_for_PointAltitudeUncertainty = function (value: PointAltitudeUncertainty, elGetter: $.ASN1Encoder<PointAltitudeUncertainty>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_GeographicalCoordinates, $.BER)(value.point, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Altitude, $.BER)(value.altitude, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_UncertaintyEllipse, $.BER)(value.uncertaintyEllipse, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Uncertainty, $.BER)(value.deprecatedUncertaintyAltitude, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_Confidence, $.BER)(value.confidence, $.BER);
    if (value.uncertaintyAltitudeSBI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_UncertaintySBI, $.BER)(value.uncertaintyAltitudeSBI, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PointAltitudeUncertainty(value, elGetter);
}


/* eslint-enable */
