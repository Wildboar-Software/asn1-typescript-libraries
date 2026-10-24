/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NumberOfDigits, _decode_NumberOfDigits, _encode_NumberOfDigits } from "../IN-CS3-SSF-SCF-datatypes/NumberOfDigits.ta.mjs";
// export { NumberOfDigits, _decode_NumberOfDigits, _encode_NumberOfDigits } from "../IN-CS3-SSF-SCF-datatypes/NumberOfDigits.ta.mjs";


/**
 * @summary DpSpecificCriteria_numberOfDigitsTwo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DpSpecificCriteria-numberOfDigitsTwo ::=
 * SEQUENCE {
 *   requestedNumberOfDigits [0] NumberOfDigits,
 *   minNumberOfDigits [1] NumberOfDigits OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DpSpecificCriteria_numberOfDigitsTwo {
    /**
     * @summary `requestedNumberOfDigits`.
     * @public
     * @readonly
     */
    readonly requestedNumberOfDigits: NumberOfDigits;
    /**
     * @summary `minNumberOfDigits`.
     * @public
     * @readonly
     */
    readonly minNumberOfDigits: OPTIONAL<NumberOfDigits>;

    constructor (
        requestedNumberOfDigits: NumberOfDigits,
        minNumberOfDigits?: OPTIONAL<NumberOfDigits>
    ) {
        this.requestedNumberOfDigits = requestedNumberOfDigits;
        this.minNumberOfDigits = minNumberOfDigits;
    }

    /**
     * @summary Restructures an object into a DpSpecificCriteria_numberOfDigitsTwo
     * @description
     * 
     * This takes an `object` and converts it to a `DpSpecificCriteria_numberOfDigitsTwo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DpSpecificCriteria_numberOfDigitsTwo`.
     * @returns {DpSpecificCriteria_numberOfDigitsTwo}
     */
    public static _from_object (_o: { [_K in keyof (DpSpecificCriteria_numberOfDigitsTwo)]: (DpSpecificCriteria_numberOfDigitsTwo)[_K] }): DpSpecificCriteria_numberOfDigitsTwo {
        return new DpSpecificCriteria_numberOfDigitsTwo(_o.requestedNumberOfDigits, _o.minNumberOfDigits);
    }


}

/**
 * @summary The Leading Root Component Types of DpSpecificCriteria_numberOfDigitsTwo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DpSpecificCriteria_numberOfDigitsTwo: $.ComponentSpec[] = [
    new $.ComponentSpec("requestedNumberOfDigits", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("minNumberOfDigits", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of DpSpecificCriteria_numberOfDigitsTwo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DpSpecificCriteria_numberOfDigitsTwo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DpSpecificCriteria_numberOfDigitsTwo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DpSpecificCriteria_numberOfDigitsTwo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DpSpecificCriteria_numberOfDigitsTwo: $.ASN1Decoder<DpSpecificCriteria_numberOfDigitsTwo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DpSpecificCriteria_numberOfDigitsTwo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DpSpecificCriteria_numberOfDigitsTwo (el: _Element): DpSpecificCriteria_numberOfDigitsTwo {
    if (!_cached_decoder_for_DpSpecificCriteria_numberOfDigitsTwo) { _cached_decoder_for_DpSpecificCriteria_numberOfDigitsTwo = function (el: _Element): DpSpecificCriteria_numberOfDigitsTwo {
    let requestedNumberOfDigits!: NumberOfDigits;
    let minNumberOfDigits: OPTIONAL<NumberOfDigits>;
    const callbacks: $.DecodingMap = {
        "requestedNumberOfDigits": (_el: _Element): void => { requestedNumberOfDigits = $._decode_implicit<NumberOfDigits>(() => _decode_NumberOfDigits)(_el); },
        "minNumberOfDigits": (_el: _Element): void => { minNumberOfDigits = $._decode_implicit<NumberOfDigits>(() => _decode_NumberOfDigits)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DpSpecificCriteria_numberOfDigitsTwo,
        _extension_additions_list_spec_for_DpSpecificCriteria_numberOfDigitsTwo,
        _root_component_type_list_2_spec_for_DpSpecificCriteria_numberOfDigitsTwo,
        undefined,
    );
    return new DpSpecificCriteria_numberOfDigitsTwo(
        requestedNumberOfDigits,
        minNumberOfDigits
    );
}; }
    return _cached_decoder_for_DpSpecificCriteria_numberOfDigitsTwo(el);
}

let _cached_encoder_for_DpSpecificCriteria_numberOfDigitsTwo: $.ASN1Encoder<DpSpecificCriteria_numberOfDigitsTwo> | null = null;

/**
 * @summary Encodes a(n) DpSpecificCriteria_numberOfDigitsTwo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DpSpecificCriteria_numberOfDigitsTwo, encoded as an ASN.1 Element.
 */
export
function _encode_DpSpecificCriteria_numberOfDigitsTwo (value: DpSpecificCriteria_numberOfDigitsTwo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DpSpecificCriteria_numberOfDigitsTwo) { _cached_encoder_for_DpSpecificCriteria_numberOfDigitsTwo = function (value: DpSpecificCriteria_numberOfDigitsTwo, elGetter: $.ASN1Encoder<DpSpecificCriteria_numberOfDigitsTwo>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_NumberOfDigits, $.BER)(value.requestedNumberOfDigits, $.BER));
    if (value.minNumberOfDigits !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_NumberOfDigits, $.BER)(value.minNumberOfDigits, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DpSpecificCriteria_numberOfDigitsTwo(value, elGetter);
}


/* eslint-enable */
