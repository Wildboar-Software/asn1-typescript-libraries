/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";

/**
 * @summary LineConDiag_Item
 * @description
 *
 * Line probe, phase/amplitude jitter, and non-linear distortion. ITU-T Rec.
 * V.59 (11/2000) §6.10.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LineConDiag-Item ::= SEQUENCE {lineProbeValues  V59String OPTIONAL,
 *               phaseJitter      V59String OPTIONAL,
 *               ampJitter        V59String OPTIONAL,
 *               nLD              V59String OPTIONAL,
 *               ...}
 * ```
 * 
 * @class
 */
export
class LineConDiag_Item {
    constructor (
        /**
         * @summary `lineProbeValues`.
         * @description
         *
         * Line-probe results, lowest frequency first. Real magnitudes or
         * complex pairs `X ± JY`, comma-separated. Example:
         * `-0.05+J0.4,0.33-J0.001`. IA5 `simpleText` (§6.2.1). Tag-ID `2D01`.
         * ITU-T Rec. V.59 (11/2000) §6.10.
         * @public
         * @readonly
         */
        readonly lineProbeValues: OPTIONAL<V59String>,
        /**
         * @summary `phaseJitter`.
         * @description
         *
         * Phase-jitter estimate as `D@F` (magnitude @ frequency). Units if
         * calibrated (e.g. `3.2d@60H`). IA5 `simpleText` (§6.2.1). Tag-ID
         * `2D02`. ITU-T Rec. V.59 (11/2000) §6.10.
         * @public
         * @readonly
         */
        readonly phaseJitter: OPTIONAL<V59String>,
        /**
         * @summary `ampJitter`.
         * @description
         *
         * Amplitude-jitter estimate; a single number with units if calibrated
         * (e.g. `0.5dB`). IA5 `simpleText` (§6.2.1). Tag-ID `2D03`. ITU-T Rec.
         * V.59 (11/2000) §6.10.
         * @public
         * @readonly
         */
        readonly ampJitter: OPTIONAL<V59String>,
        /**
         * @summary `nLD`.
         * @description
         *
         * Non-linear distortion estimate; a single number with units if
         * calibrated (e.g. `2.1dB`). IA5 `simpleText` (§6.2.1). Tag-ID `2D04`.
         * ITU-T Rec. V.59 (11/2000) §6.10.
         * @public
         * @readonly
         */
        readonly nLD: OPTIONAL<V59String>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a LineConDiag_Item
     * @description
     * 
     * This takes an `object` and converts it to a `LineConDiag_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LineConDiag_Item`.
     * @returns {LineConDiag_Item}
     */
    public static _from_object (_o: { [_K in keyof (LineConDiag_Item)]: (LineConDiag_Item)[_K] }): LineConDiag_Item {
        return new LineConDiag_Item(_o.lineProbeValues, _o.phaseJitter, _o.ampJitter, _o.nLD, _o._unrecognizedExtensionsList);
    }

}

/**
 * @summary The Leading Root Component Types of LineConDiag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LineConDiag_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("lineProbeValues", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("phaseJitter", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ampJitter", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nLD", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of LineConDiag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LineConDiag_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LineConDiag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LineConDiag_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LineConDiag_Item: $.ASN1Decoder<LineConDiag_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LineConDiag_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LineConDiag_Item (el: _Element): LineConDiag_Item {
    if (!_cached_decoder_for_LineConDiag_Item) { _cached_decoder_for_LineConDiag_Item = function (el: _Element): LineConDiag_Item {
    let lineProbeValues: OPTIONAL<V59String>;
    let phaseJitter: OPTIONAL<V59String>;
    let ampJitter: OPTIONAL<V59String>;
    let nLD: OPTIONAL<V59String>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "lineProbeValues": (_el: _Element): void => { lineProbeValues = _decode_V59String(_el); },
        "phaseJitter": (_el: _Element): void => { phaseJitter = _decode_V59String(_el); },
        "ampJitter": (_el: _Element): void => { ampJitter = _decode_V59String(_el); },
        "nLD": (_el: _Element): void => { nLD = _decode_V59String(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LineConDiag_Item,
        _extension_additions_list_spec_for_LineConDiag_Item,
        _root_component_type_list_2_spec_for_LineConDiag_Item,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LineConDiag_Item(
        lineProbeValues,
        phaseJitter,
        ampJitter,
        nLD,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_LineConDiag_Item(el);
}

let _cached_encoder_for_LineConDiag_Item: $.ASN1Encoder<LineConDiag_Item> | null = null;

/**
 * @summary Encodes a(n) LineConDiag_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LineConDiag_Item, encoded as an ASN.1 Element.
 */
export
function _encode_LineConDiag_Item (value: LineConDiag_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LineConDiag_Item) { _cached_encoder_for_LineConDiag_Item = function (value: LineConDiag_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.lineProbeValues === undefined) ? undefined : _encode_V59String(value.lineProbeValues, $.BER)),
            /* IF_ABSENT  */ ((value.phaseJitter === undefined) ? undefined : _encode_V59String(value.phaseJitter, $.BER)),
            /* IF_ABSENT  */ ((value.ampJitter === undefined) ? undefined : _encode_V59String(value.ampJitter, $.BER)),
            /* IF_ABSENT  */ ((value.nLD === undefined) ? undefined : _encode_V59String(value.nLD, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LineConDiag_Item(value, elGetter);
}

/* eslint-enable */
