/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OPTIONAL,
    type PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExtendedLocParameters_motionStateList
 * @description
 * 
 * Motion state of a LALS fix, mapped from the OMA MLP pos element (clause
 * 5.2.2.3). The primary state cites MLP clause 5.3.69 and the confidence cites
 * clause 5.3.24. TS 33.108 does not restate that syntax. A secondary state has
 * no MLP clause in the annex.
 * 
 * 3GPP TS 33.108, annex B.3.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedLocParameters-motionStateList ::= SEQUENCE    {
 *     primaryMotionState     [0] PrintableString, -- clause 5.3.69
 *     secondaryMotionState     [1] SEQUENCE OF PrintableString OPTIONAL,
 *     confidence                 [2] PrintableString -- clause 5.3.24
 * }
 * ```
 * 
 * @class
 */
export
class ExtendedLocParameters_motionStateList {
    /**
     * @summary `primaryMotionState`.
     * @description
     * 
     * Primary motion state of the LALS fix, from OMA MLP clause 5.3.69. TS
     * 33.108 does not restate that syntax.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly primaryMotionState: PrintableString;
    /**
     * @summary `secondaryMotionState`.
     * @description
     * 
     * Further motion states, when the MLP response includes them. Annex B.3
     * gives no MLP clause for this component.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly secondaryMotionState: OPTIONAL<PrintableString[]>;
    /**
     * @summary `confidence`.
     * @description
     * 
     * Confidence of the motion state, from OMA MLP clause 5.3.24. TS 33.108
     * does not restate that syntax.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly confidence: PrintableString;

    constructor (
        primaryMotionState: PrintableString,
        secondaryMotionState: OPTIONAL<PrintableString[]>,
        confidence: PrintableString
    ) {
        this.primaryMotionState = primaryMotionState;
        this.secondaryMotionState = secondaryMotionState;
        this.confidence = confidence;
    }

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
    const _components: _Element[] = new Array(3);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodePrintableString, $.BER)(value.primaryMotionState, $.BER);
    if (value.secondaryMotionState !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<PrintableString>(() => $._encodePrintableString, $.BER), $.BER)(value.secondaryMotionState, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodePrintableString, $.BER)(value.confidence, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ExtendedLocParameters_motionStateList(value, elGetter);
}


/* eslint-enable */
