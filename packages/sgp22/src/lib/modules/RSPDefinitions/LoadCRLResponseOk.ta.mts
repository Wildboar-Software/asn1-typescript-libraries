/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LoadCRLResponseOk
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LoadCRLResponseOk ::= SEQUENCE {
 *     missingParts SEQUENCE OF INTEGER OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class LoadCRLResponseOk {
    constructor (
        /**
         * @summary `missingParts`.
         * @public
         * @readonly
         */
        readonly missingParts: OPTIONAL<INTEGER[]>
    ) {}

    /**
     * @summary Restructures an object into a LoadCRLResponseOk
     * @description
     * 
     * This takes an `object` and converts it to a `LoadCRLResponseOk`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LoadCRLResponseOk`.
     * @returns {LoadCRLResponseOk}
     */
    public static _from_object (_o: { [_K in keyof (LoadCRLResponseOk)]: (LoadCRLResponseOk)[_K] }): LoadCRLResponseOk {
        return new LoadCRLResponseOk(_o.missingParts);
    }


}

/**
 * @summary The Leading Root Component Types of LoadCRLResponseOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LoadCRLResponseOk: $.ComponentSpec[] = [
    new $.ComponentSpec("missingParts", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of LoadCRLResponseOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LoadCRLResponseOk: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LoadCRLResponseOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LoadCRLResponseOk: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LoadCRLResponseOk: $.ASN1Decoder<LoadCRLResponseOk> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LoadCRLResponseOk
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LoadCRLResponseOk (el: _Element): LoadCRLResponseOk {
    if (!_cached_decoder_for_LoadCRLResponseOk) { _cached_decoder_for_LoadCRLResponseOk = function (el: _Element): LoadCRLResponseOk {
    let missingParts: OPTIONAL<INTEGER[]>;
    const callbacks: $.DecodingMap = {
        "missingParts": (_el: _Element): void => { missingParts = $._decodeSequenceOf<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LoadCRLResponseOk,
        _extension_additions_list_spec_for_LoadCRLResponseOk,
        _root_component_type_list_2_spec_for_LoadCRLResponseOk,
        undefined,
    );
    return new LoadCRLResponseOk(
        missingParts
    );
}; }
    return _cached_decoder_for_LoadCRLResponseOk(el);
}

let _cached_encoder_for_LoadCRLResponseOk: $.ASN1Encoder<LoadCRLResponseOk> | null = null;

/**
 * @summary Encodes a(n) LoadCRLResponseOk into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LoadCRLResponseOk, encoded as an ASN.1 Element.
 */
export
function _encode_LoadCRLResponseOk (value: LoadCRLResponseOk, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LoadCRLResponseOk) { _cached_encoder_for_LoadCRLResponseOk = function (value: LoadCRLResponseOk, elGetter: $.ASN1Encoder<LoadCRLResponseOk>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.missingParts === undefined) ? undefined : $._encodeSequenceOf<INTEGER>(() => $._encodeInteger, $.BER)(value.missingParts, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LoadCRLResponseOk(value, elGetter);
}


/* eslint-enable */
