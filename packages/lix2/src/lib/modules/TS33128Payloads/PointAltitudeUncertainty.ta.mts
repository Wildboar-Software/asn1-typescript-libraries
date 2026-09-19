/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GeographicalCoordinates, _decode_GeographicalCoordinates, _encode_GeographicalCoordinates } from "../TS33128Payloads/GeographicalCoordinates.ta.mjs";
// export { GeographicalCoordinates, _decode_GeographicalCoordinates, _encode_GeographicalCoordinates } from "../TS33128Payloads/GeographicalCoordinates.ta.mjs";
import { Altitude, _decode_Altitude, _encode_Altitude } from "../TS33128Payloads/Altitude.ta.mjs";
// export { Altitude, _decode_Altitude, _encode_Altitude } from "../TS33128Payloads/Altitude.ta.mjs";
import { UncertaintyEllipse, _decode_UncertaintyEllipse, _encode_UncertaintyEllipse } from "../TS33128Payloads/UncertaintyEllipse.ta.mjs";
// export { UncertaintyEllipse, _decode_UncertaintyEllipse, _encode_UncertaintyEllipse } from "../TS33128Payloads/UncertaintyEllipse.ta.mjs";
import { Uncertainty, _decode_Uncertainty, _encode_Uncertainty } from "../TS33128Payloads/Uncertainty.ta.mjs";
// export { Uncertainty, _decode_Uncertainty, _encode_Uncertainty } from "../TS33128Payloads/Uncertainty.ta.mjs";
import { Confidence, _decode_Confidence, _encode_Confidence } from "../TS33128Payloads/Confidence.ta.mjs";
// export { Confidence, _decode_Confidence, _encode_Confidence } from "../TS33128Payloads/Confidence.ta.mjs";
import { UncertaintySBI, _decode_UncertaintySBI, _encode_UncertaintySBI } from "../TS33128Payloads/UncertaintySBI.ta.mjs";
// export { UncertaintySBI, _decode_UncertaintySBI, _encode_UncertaintySBI } from "../TS33128Payloads/UncertaintySBI.ta.mjs";


/**
 * @summary PointAltitudeUncertainty
 * @description
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
    constructor (
        /**
         * @summary `point`.
         * @public
         * @readonly
         */
        readonly point: GeographicalCoordinates,
        /**
         * @summary `altitude`.
         * @public
         * @readonly
         */
        readonly altitude: Altitude,
        /**
         * @summary `uncertaintyEllipse`.
         * @public
         * @readonly
         */
        readonly uncertaintyEllipse: UncertaintyEllipse,
        /**
         * @summary `deprecatedUncertaintyAltitude`.
         * @public
         * @readonly
         */
        readonly deprecatedUncertaintyAltitude: Uncertainty,
        /**
         * @summary `confidence`.
         * @public
         * @readonly
         */
        readonly confidence: Confidence,
        /**
         * @summary `uncertaintyAltitudeSBI`.
         * @public
         * @readonly
         */
        readonly uncertaintyAltitudeSBI: OPTIONAL<UncertaintySBI>
    ) {}

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
        return new PointAltitudeUncertainty(_o.point, _o.altitude, _o.uncertaintyEllipse, _o.deprecatedUncertaintyAltitude, _o.confidence, _o.uncertaintyAltitudeSBI);
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
        undefined,
    );
    return new PointAltitudeUncertainty(
        point,
        altitude,
        uncertaintyEllipse,
        deprecatedUncertaintyAltitude,
        confidence,
        uncertaintyAltitudeSBI
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_GeographicalCoordinates, $.BER)(value.point, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Altitude, $.BER)(value.altitude, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_UncertaintyEllipse, $.BER)(value.uncertaintyEllipse, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Uncertainty, $.BER)(value.deprecatedUncertaintyAltitude, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_Confidence, $.BER)(value.confidence, $.BER),
            /* IF_ABSENT  */ ((value.uncertaintyAltitudeSBI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_UncertaintySBI, $.BER)(value.uncertaintyAltitudeSBI, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PointAltitudeUncertainty(value, elGetter);
}


/* eslint-enable */
