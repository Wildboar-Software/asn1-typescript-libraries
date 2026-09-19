/* eslint-disable */
import {
    OPTIONAL,
    VisibleString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RequestResults, _decode_RequestResults, _encode_RequestResults } from "../IEC61850/RequestResults.ta.mjs";
// export { RequestResults, _decode_RequestResults, _encode_RequestResults } from "../IEC61850/RequestResults.ta.mjs";


/**
 * @summary PositiveNegative_responsePositive
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PositiveNegative-responsePositive ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class PositiveNegative_responsePositive {
    constructor (
        /**
         * @summary `datSet`.
         * @public
         * @readonly
         */
        readonly datSet: OPTIONAL<VisibleString>,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: RequestResults[]
    ) {}

    /**
     * @summary Restructures an object into a PositiveNegative_responsePositive
     * @description
     * 
     * This takes an `object` and converts it to a `PositiveNegative_responsePositive`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PositiveNegative_responsePositive`.
     * @returns {PositiveNegative_responsePositive}
     */
    public static _from_object (_o: { [_K in keyof (PositiveNegative_responsePositive)]: (PositiveNegative_responsePositive)[_K] }): PositiveNegative_responsePositive {
        return new PositiveNegative_responsePositive(_o.datSet, _o.result);
    }


}

/**
 * @summary The Leading Root Component Types of PositiveNegative_responsePositive
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PositiveNegative_responsePositive: $.ComponentSpec[] = [
    new $.ComponentSpec("datSet", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("result", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of PositiveNegative_responsePositive
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PositiveNegative_responsePositive: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PositiveNegative_responsePositive
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PositiveNegative_responsePositive: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PositiveNegative_responsePositive: $.ASN1Decoder<PositiveNegative_responsePositive> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PositiveNegative_responsePositive
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PositiveNegative_responsePositive (el: _Element): PositiveNegative_responsePositive {
    if (!_cached_decoder_for_PositiveNegative_responsePositive) { _cached_decoder_for_PositiveNegative_responsePositive = function (el: _Element): PositiveNegative_responsePositive {
    let datSet: OPTIONAL<VisibleString>;
    let result!: RequestResults[];
    const callbacks: $.DecodingMap = {
        "datSet": (_el: _Element): void => { datSet = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "result": (_el: _Element): void => { result = $._decode_implicit<RequestResults[]>(() => $._decodeSequenceOf<RequestResults>(() => _decode_RequestResults))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PositiveNegative_responsePositive,
        _extension_additions_list_spec_for_PositiveNegative_responsePositive,
        _root_component_type_list_2_spec_for_PositiveNegative_responsePositive,
        undefined,
    );
    return new PositiveNegative_responsePositive(
        datSet,
        result
    );
}; }
    return _cached_decoder_for_PositiveNegative_responsePositive(el);
}

let _cached_encoder_for_PositiveNegative_responsePositive: $.ASN1Encoder<PositiveNegative_responsePositive> | null = null;

/**
 * @summary Encodes a(n) PositiveNegative_responsePositive into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PositiveNegative_responsePositive, encoded as an ASN.1 Element.
 */
export
function _encode_PositiveNegative_responsePositive (value: PositiveNegative_responsePositive, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PositiveNegative_responsePositive) { _cached_encoder_for_PositiveNegative_responsePositive = function (value: PositiveNegative_responsePositive, elGetter: $.ASN1Encoder<PositiveNegative_responsePositive>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.datSet === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeVisibleString, $.BER)(value.datSet, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<RequestResults>(() => _encode_RequestResults, $.BER), $.BER)(value.result, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PositiveNegative_responsePositive(value, elGetter);
}


/* eslint-enable */
