/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ValueDescription, _decode_ValueDescription, _encode_ValueDescription } from "../RecordSyntax-explain/ValueDescription.ta.mjs";
// export { ValueDescription, _decode_ValueDescription, _encode_ValueDescription } from "../RecordSyntax-explain/ValueDescription.ta.mjs";


/**
 * @summary ValueRange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ValueRange ::= SEQUENCE {
 *                           -- At last one the following must be supplied, both
 *                           -- may be supplied.
 *              lower           [0] ValueDescription OPTIONAL,
 *              upper           [1] ValueDescription OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ValueRange {
    constructor (
        /**
         * @summary `lower`.
         * @public
         * @readonly
         */
        readonly lower: OPTIONAL<ValueDescription>,
        /**
         * @summary `upper`.
         * @public
         * @readonly
         */
        readonly upper: OPTIONAL<ValueDescription>
    ) {}

    /**
     * @summary Restructures an object into a ValueRange
     * @description
     * 
     * This takes an `object` and converts it to a `ValueRange`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ValueRange`.
     * @returns {ValueRange}
     */
    public static _from_object (_o: { [_K in keyof (ValueRange)]: (ValueRange)[_K] }): ValueRange {
        return new ValueRange(_o.lower, _o.upper);
    }


}

/**
 * @summary The Leading Root Component Types of ValueRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ValueRange: $.ComponentSpec[] = [
    new $.ComponentSpec("lower", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("upper", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ValueRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ValueRange: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ValueRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ValueRange: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ValueRange: $.ASN1Decoder<ValueRange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ValueRange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ValueRange (el: _Element): ValueRange {
    if (!_cached_decoder_for_ValueRange) { _cached_decoder_for_ValueRange = function (el: _Element): ValueRange {
    let lower: OPTIONAL<ValueDescription>;
    let upper: OPTIONAL<ValueDescription>;
    const callbacks: $.DecodingMap = {
        "lower": (_el: _Element): void => { lower = $._decode_explicit<ValueDescription>(() => _decode_ValueDescription)(_el); },
        "upper": (_el: _Element): void => { upper = $._decode_explicit<ValueDescription>(() => _decode_ValueDescription)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ValueRange,
        _extension_additions_list_spec_for_ValueRange,
        _root_component_type_list_2_spec_for_ValueRange,
        undefined,
    );
    return new ValueRange(
        lower,
        upper
    );
}; }
    return _cached_decoder_for_ValueRange(el);
}

let _cached_encoder_for_ValueRange: $.ASN1Encoder<ValueRange> | null = null;

/**
 * @summary Encodes a(n) ValueRange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ValueRange, encoded as an ASN.1 Element.
 */
export
function _encode_ValueRange (value: ValueRange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ValueRange) { _cached_encoder_for_ValueRange = function (value: ValueRange, elGetter: $.ASN1Encoder<ValueRange>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.lower === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_ValueDescription, $.BER)(value.lower, $.BER)),
            /* IF_ABSENT  */ ((value.upper === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_ValueDescription, $.BER)(value.upper, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ValueRange(value, elGetter);
}


/* eslint-enable */
