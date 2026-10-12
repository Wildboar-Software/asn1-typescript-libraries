/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1OverflowError,
    ASN1SizeError
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
    /**
     * @summary `sliceServiceType`.
     * @public
     * @readonly
     */
    readonly sliceServiceType: INTEGER;
    /**
     * @summary `sliceDifferentiator`.
     * @public
     * @readonly
     */
    readonly sliceDifferentiator: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mappedHPLMNSliceServiceType`.
     * @public
     * @readonly
     */
    readonly mappedHPLMNSliceServiceType: OPTIONAL<INTEGER>;
    /**
     * @summary `mappedHPLMNSliceDifferentiator`.
     * @public
     * @readonly
     */
    readonly mappedHPLMNSliceDifferentiator: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sliceServiceType: INTEGER,
        sliceDifferentiator: OPTIONAL<OCTET_STRING>,
        mappedHPLMNSliceServiceType: OPTIONAL<INTEGER>,
        mappedHPLMNSliceDifferentiator: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sliceServiceType = sliceServiceType;
        this.sliceDifferentiator = sliceDifferentiator;
        this.mappedHPLMNSliceServiceType = mappedHPLMNSliceServiceType;
        this.mappedHPLMNSliceDifferentiator = mappedHPLMNSliceDifferentiator;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
        return new SNSSAI(_o.sliceServiceType, _o.sliceDifferentiator, _o.mappedHPLMNSliceServiceType, _o.mappedHPLMNSliceDifferentiator, _o._unrecognizedExtensionsList);
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
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sliceServiceType": (_el: _Element): void => {
            sliceServiceType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof sliceServiceType === "bigint" ? sliceServiceType : BigInt(sliceServiceType);
            if (_n < 0n || _n > 255n) {
                throw new ASN1OverflowError("SNSSAI.sliceServiceType violates INTEGER range");
            }
        },
        "sliceDifferentiator": (_el: _Element): void => {
            sliceDifferentiator = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (sliceDifferentiator.length < 3 || sliceDifferentiator.length > 3) {
                throw new ASN1SizeError("SNSSAI.sliceDifferentiator violates SIZE constraint");
            }
        },
        "mappedHPLMNSliceServiceType": (_el: _Element): void => {
            mappedHPLMNSliceServiceType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof mappedHPLMNSliceServiceType === "bigint" ? mappedHPLMNSliceServiceType : BigInt(mappedHPLMNSliceServiceType);
            if (_n < 0n || _n > 255n) {
                throw new ASN1OverflowError("SNSSAI.mappedHPLMNSliceServiceType violates INTEGER range");
            }
        },
        "mappedHPLMNSliceDifferentiator": (_el: _Element): void => {
            mappedHPLMNSliceDifferentiator = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (mappedHPLMNSliceDifferentiator.length < 3 || mappedHPLMNSliceDifferentiator.length > 3) {
                throw new ASN1SizeError("SNSSAI.mappedHPLMNSliceDifferentiator violates SIZE constraint");
            }
        }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SNSSAI,
        _extension_additions_list_spec_for_SNSSAI,
        _root_component_type_list_2_spec_for_SNSSAI,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SNSSAI(
        sliceServiceType,
        sliceDifferentiator,
        mappedHPLMNSliceServiceType,
        mappedHPLMNSliceDifferentiator,
        _unrecognizedExtensionsList
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.sliceServiceType, $.BER);
    if (value.sliceDifferentiator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.sliceDifferentiator, $.BER);
    }
    if (value.mappedHPLMNSliceServiceType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.mappedHPLMNSliceServiceType, $.BER);
    }
    if (value.mappedHPLMNSliceDifferentiator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.mappedHPLMNSliceDifferentiator, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SNSSAI(value, elGetter);
}


/* eslint-enable */
