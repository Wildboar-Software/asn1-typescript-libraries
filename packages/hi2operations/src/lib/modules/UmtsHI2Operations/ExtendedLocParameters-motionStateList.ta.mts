/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExtendedLocParameters_motionStateList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedLocParameters-motionStateList ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class ExtendedLocParameters_motionStateList {
    constructor (
        /**
         * @summary `primaryMotionState`.
         * @public
         * @readonly
         */
        readonly primaryMotionState: PrintableString,
        /**
         * @summary `secondaryMotionState`.
         * @public
         * @readonly
         */
        readonly secondaryMotionState: OPTIONAL<PrintableString[]>,
        /**
         * @summary `confidence`.
         * @public
         * @readonly
         */
        readonly confidence: PrintableString
    ) {}

    /**
     * @summary Restructures an object into a ExtendedLocParameters_motionStateList
     * @description
     * 
     * This takes an `object` and converts it to a `ExtendedLocParameters_motionStateList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtendedLocParameters_motionStateList`.
     * @returns {ExtendedLocParameters_motionStateList}
     */
    public static _from_object (_o: { [_K in keyof (ExtendedLocParameters_motionStateList)]: (ExtendedLocParameters_motionStateList)[_K] }): ExtendedLocParameters_motionStateList {
        return new ExtendedLocParameters_motionStateList(_o.primaryMotionState, _o.secondaryMotionState, _o.confidence);
    }


}

/**
 * @summary The Leading Root Component Types of ExtendedLocParameters_motionStateList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExtendedLocParameters_motionStateList: $.ComponentSpec[] = [
    new $.ComponentSpec("primaryMotionState", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("secondaryMotionState", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("confidence", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ExtendedLocParameters_motionStateList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExtendedLocParameters_motionStateList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExtendedLocParameters_motionStateList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExtendedLocParameters_motionStateList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExtendedLocParameters_motionStateList: $.ASN1Decoder<ExtendedLocParameters_motionStateList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedLocParameters_motionStateList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtendedLocParameters_motionStateList (el: _Element): ExtendedLocParameters_motionStateList {
    if (!_cached_decoder_for_ExtendedLocParameters_motionStateList) { _cached_decoder_for_ExtendedLocParameters_motionStateList = function (el: _Element): ExtendedLocParameters_motionStateList {
    let primaryMotionState!: PrintableString;
    let secondaryMotionState: OPTIONAL<PrintableString[]>;
    let confidence!: PrintableString;
    const callbacks: $.DecodingMap = {
        "primaryMotionState": (_el: _Element): void => { primaryMotionState = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el); },
        "secondaryMotionState": (_el: _Element): void => { secondaryMotionState = $._decode_implicit<PrintableString[]>(() => $._decodeSequenceOf<PrintableString>(() => $._decodePrintableString))(_el); },
        "confidence": (_el: _Element): void => { confidence = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExtendedLocParameters_motionStateList,
        _extension_additions_list_spec_for_ExtendedLocParameters_motionStateList,
        _root_component_type_list_2_spec_for_ExtendedLocParameters_motionStateList,
        undefined,
    );
    return new ExtendedLocParameters_motionStateList(
        primaryMotionState,
        secondaryMotionState,
        confidence
    );
}; }
    return _cached_decoder_for_ExtendedLocParameters_motionStateList(el);
}

let _cached_encoder_for_ExtendedLocParameters_motionStateList: $.ASN1Encoder<ExtendedLocParameters_motionStateList> | null = null;

/**
 * @summary Encodes a(n) ExtendedLocParameters_motionStateList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedLocParameters_motionStateList, encoded as an ASN.1 Element.
 */
export
function _encode_ExtendedLocParameters_motionStateList (value: ExtendedLocParameters_motionStateList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtendedLocParameters_motionStateList) { _cached_encoder_for_ExtendedLocParameters_motionStateList = function (value: ExtendedLocParameters_motionStateList, elGetter: $.ASN1Encoder<ExtendedLocParameters_motionStateList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodePrintableString, $.BER)(value.primaryMotionState, $.BER),
            /* IF_ABSENT  */ ((value.secondaryMotionState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<PrintableString>(() => $._encodePrintableString, $.BER), $.BER)(value.secondaryMotionState, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodePrintableString, $.BER)(value.confidence, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ExtendedLocParameters_motionStateList(value, elGetter);
}


/* eslint-enable */
