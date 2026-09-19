/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SNSSAI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SNSSAI ::= SEQUENCE
 * {
 *     sliceServiceType               [1] INTEGER (0..255),
 *     sliceDifferentiator            [2] OCTET STRING (SIZE(3)) OPTIONAL,
 *     mappedHPLMNSliceServiceType    [3] INTEGER (0..255) OPTIONAL,
 *     mappedHPLMNSliceDifferentiator [4] OCTET STRING (SIZE(3)) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SNSSAI {
    constructor (
        /**
         * @summary `sliceServiceType`.
         * @public
         * @readonly
         */
        readonly sliceServiceType: INTEGER,
        /**
         * @summary `sliceDifferentiator`.
         * @public
         * @readonly
         */
        readonly sliceDifferentiator: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `mappedHPLMNSliceServiceType`.
         * @public
         * @readonly
         */
        readonly mappedHPLMNSliceServiceType: OPTIONAL<INTEGER>,
        /**
         * @summary `mappedHPLMNSliceDifferentiator`.
         * @public
         * @readonly
         */
        readonly mappedHPLMNSliceDifferentiator: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a SNSSAI
     * @description
     * 
     * This takes an `object` and converts it to a `SNSSAI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SNSSAI`.
     * @returns {SNSSAI}
     */
    public static _from_object (_o: { [_K in keyof (SNSSAI)]: (SNSSAI)[_K] }): SNSSAI {
        return new SNSSAI(_o.sliceServiceType, _o.sliceDifferentiator, _o.mappedHPLMNSliceServiceType, _o.mappedHPLMNSliceDifferentiator);
    }


}

/**
 * @summary The Leading Root Component Types of SNSSAI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SNSSAI: $.ComponentSpec[] = [
    new $.ComponentSpec("sliceServiceType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sliceDifferentiator", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mappedHPLMNSliceServiceType", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("mappedHPLMNSliceDifferentiator", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of SNSSAI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SNSSAI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SNSSAI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SNSSAI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SNSSAI: $.ASN1Decoder<SNSSAI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SNSSAI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SNSSAI (el: _Element): SNSSAI {
    if (!_cached_decoder_for_SNSSAI) { _cached_decoder_for_SNSSAI = function (el: _Element): SNSSAI {
    let sliceServiceType!: INTEGER;
    let sliceDifferentiator: OPTIONAL<OCTET_STRING>;
    let mappedHPLMNSliceServiceType: OPTIONAL<INTEGER>;
    let mappedHPLMNSliceDifferentiator: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "sliceServiceType": (_el: _Element): void => { sliceServiceType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sliceDifferentiator": (_el: _Element): void => { sliceDifferentiator = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mappedHPLMNSliceServiceType": (_el: _Element): void => { mappedHPLMNSliceServiceType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mappedHPLMNSliceDifferentiator": (_el: _Element): void => { mappedHPLMNSliceDifferentiator = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SNSSAI,
        _extension_additions_list_spec_for_SNSSAI,
        _root_component_type_list_2_spec_for_SNSSAI,
        undefined,
    );
    return new SNSSAI(
        sliceServiceType,
        sliceDifferentiator,
        mappedHPLMNSliceServiceType,
        mappedHPLMNSliceDifferentiator
    );
}; }
    return _cached_decoder_for_SNSSAI(el);
}

let _cached_encoder_for_SNSSAI: $.ASN1Encoder<SNSSAI> | null = null;

/**
 * @summary Encodes a(n) SNSSAI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SNSSAI, encoded as an ASN.1 Element.
 */
export
function _encode_SNSSAI (value: SNSSAI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SNSSAI) { _cached_encoder_for_SNSSAI = function (value: SNSSAI, elGetter: $.ASN1Encoder<SNSSAI>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.sliceServiceType, $.BER),
            /* IF_ABSENT  */ ((value.sliceDifferentiator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.sliceDifferentiator, $.BER)),
            /* IF_ABSENT  */ ((value.mappedHPLMNSliceServiceType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.mappedHPLMNSliceServiceType, $.BER)),
            /* IF_ABSENT  */ ((value.mappedHPLMNSliceDifferentiator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.mappedHPLMNSliceDifferentiator, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SNSSAI(value, elGetter);
}


/* eslint-enable */
