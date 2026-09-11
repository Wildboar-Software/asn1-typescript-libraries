/* eslint-disable */
import {
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
 * @summary ModeSelected
 * @description
 *
 * High-level selected-mode object (Tag-ID `02xx`). ITU-T Rec. V.59 (11/2000)
 * §6.3, §6.7.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModeSelected ::= SEQUENCE {modulationHistory  V59String
 * }
 * ```
 * 
 * @class
 */
export
class ModeSelected {
    constructor (
        /**
         * @summary `modulationHistory`.
         * @description
         *
         * Modulations used for the past call as V-series numbers in a delimited
         * list; a short string may name a proprietary mode. Example:
         * `V.90;V.34`. IA5 `simpleText` (§6.2.1). History lists oldest event
         * first, most recent last (§6.2.6). Tag-ID `0201`. ITU-T Rec. V.59
         * (11/2000) §6.7.
         * @public
         * @readonly
         */
        readonly modulationHistory: V59String
    ) {}

    /**
     * @summary Restructures an object into a ModeSelected
     * @description
     * 
     * This takes an `object` and converts it to a `ModeSelected`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModeSelected`.
     * @returns {ModeSelected}
     */
    public static _from_object (_o: { [_K in keyof (ModeSelected)]: (ModeSelected)[_K] }): ModeSelected {
        return new ModeSelected(_o.modulationHistory);
    }

}

/**
 * @summary The Leading Root Component Types of ModeSelected
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ModeSelected: $.ComponentSpec[] = [
    new $.ComponentSpec("modulationHistory", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of ModeSelected
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ModeSelected: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ModeSelected
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ModeSelected: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ModeSelected: $.ASN1Decoder<ModeSelected> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModeSelected
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModeSelected (el: _Element): ModeSelected {
    if (!_cached_decoder_for_ModeSelected) { _cached_decoder_for_ModeSelected = function (el: _Element): ModeSelected {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("ModeSelected contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "modulationHistory";
    let modulationHistory!: V59String;
    modulationHistory = _decode_V59String(sequence[0]);
    return new ModeSelected(
        modulationHistory,

    );
}; }
    return _cached_decoder_for_ModeSelected(el);
}

let _cached_encoder_for_ModeSelected: $.ASN1Encoder<ModeSelected> | null = null;

/**
 * @summary Encodes a(n) ModeSelected into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModeSelected, encoded as an ASN.1 Element.
 */
export
function _encode_ModeSelected (value: ModeSelected, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModeSelected) { _cached_encoder_for_ModeSelected = function (value: ModeSelected): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_V59String(value.modulationHistory, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ModeSelected(value, elGetter);
}

/* eslint-enable */
