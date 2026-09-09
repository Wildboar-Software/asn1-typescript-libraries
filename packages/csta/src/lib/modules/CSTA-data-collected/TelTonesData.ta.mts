/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    INTEGER,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import {
    ToneDetected,
    _enum_for_ToneDetected,
    _decode_ToneDetected,
    _encode_ToneDetected
} from "../CSTA-data-collected/ToneDetected.ta.mjs";



/**
 * @summary TelTonesData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TelTonesData ::= SEQUENCE
 * {    toneDetected            ToneDetected,
 *     toneFrequency            [0] IMPLICIT INTEGER            OPTIONAL,
 *     toneDuration            [1] IMPLICIT INTEGER            OPTIONAL,
 *     tonePauseDuration        [2] IMPLICIT INTEGER            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class TelTonesData {
    constructor (
        /**
         * @summary `toneDetected`.
         * @public
         * @readonly
         */
        readonly toneDetected: ToneDetected,
        /**
         * @summary `toneFrequency`.
         * @public
         * @readonly
         */
        readonly toneFrequency: OPTIONAL<INTEGER>,
        /**
         * @summary `toneDuration`.
         * @public
         * @readonly
         */
        readonly toneDuration: OPTIONAL<INTEGER>,
        /**
         * @summary `tonePauseDuration`.
         * @public
         * @readonly
         */
        readonly tonePauseDuration: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a TelTonesData
     * @description
     * 
     * This takes an `object` and converts it to a `TelTonesData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TelTonesData`.
     * @returns {TelTonesData}
     */
    public static _from_object (_o: { [_K in keyof (TelTonesData)]: (TelTonesData)[_K] }): TelTonesData {
        return new TelTonesData(_o.toneDetected, _o.toneFrequency, _o.toneDuration, _o.tonePauseDuration);
    }

        /**
         * @summary The enum used as the type of the component `toneDetected`
         * @public
         * @static
         */

    public static _enum_for_toneDetected = _enum_for_ToneDetected;
}

/**
 * @summary The Leading Root Component Types of TelTonesData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TelTonesData: $.ComponentSpec[] = [
    new $.ComponentSpec("toneDetected", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("toneFrequency", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("toneDuration", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("tonePauseDuration", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TelTonesData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TelTonesData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TelTonesData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TelTonesData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TelTonesData: $.ASN1Decoder<TelTonesData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TelTonesData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TelTonesData (el: _Element): TelTonesData {
    if (!_cached_decoder_for_TelTonesData) { _cached_decoder_for_TelTonesData = function (el: _Element): TelTonesData {
    let toneDetected!: ToneDetected;
    let toneFrequency: OPTIONAL<INTEGER>;
    let toneDuration: OPTIONAL<INTEGER>;
    let tonePauseDuration: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "toneDetected": (_el: _Element): void => { toneDetected = _decode_ToneDetected(_el); },
        "toneFrequency": (_el: _Element): void => { toneFrequency = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "toneDuration": (_el: _Element): void => { toneDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "tonePauseDuration": (_el: _Element): void => { tonePauseDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TelTonesData,
        _extension_additions_list_spec_for_TelTonesData,
        _root_component_type_list_2_spec_for_TelTonesData,
        undefined,
    );
    return new TelTonesData(
        toneDetected,
        toneFrequency,
        toneDuration,
        tonePauseDuration
    );
}; }
    return _cached_decoder_for_TelTonesData(el);
}

let _cached_encoder_for_TelTonesData: $.ASN1Encoder<TelTonesData> | null = null;

/**
 * @summary Encodes a(n) TelTonesData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TelTonesData, encoded as an ASN.1 Element.
 */
export
function _encode_TelTonesData (value: TelTonesData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TelTonesData) { _cached_encoder_for_TelTonesData = function (value: TelTonesData, elGetter: $.ASN1Encoder<TelTonesData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ToneDetected(value.toneDetected, $.BER),
            /* IF_ABSENT  */ ((value.toneFrequency === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.toneFrequency, $.BER)),
            /* IF_ABSENT  */ ((value.toneDuration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.toneDuration, $.BER)),
            /* IF_ABSENT  */ ((value.tonePauseDuration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.tonePauseDuration, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TelTonesData(value, elGetter);
}


/* eslint-enable */
