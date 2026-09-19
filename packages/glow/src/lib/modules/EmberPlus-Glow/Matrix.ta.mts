/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Integer32, _decode_Integer32, _encode_Integer32 } from "../EmberPlus-Glow/Integer32.ta.mjs";
// export { Integer32, _decode_Integer32, _encode_Integer32 } from "../EmberPlus-Glow/Integer32.ta.mjs";
import { MatrixContents, _decode_MatrixContents, _encode_MatrixContents } from "../EmberPlus-Glow/MatrixContents.ta.mjs";
// export { MatrixContents, _decode_MatrixContents, _encode_MatrixContents } from "../EmberPlus-Glow/MatrixContents.ta.mjs";
import { ElementCollection, _decode_ElementCollection, _encode_ElementCollection } from "../EmberPlus-Glow/ElementCollection.ta.mjs";
// export { ElementCollection, _decode_ElementCollection, _encode_ElementCollection } from "../EmberPlus-Glow/ElementCollection.ta.mjs";
import { TargetCollection, _decode_TargetCollection, _encode_TargetCollection } from "../EmberPlus-Glow/TargetCollection.ta.mjs";
// export { TargetCollection, _decode_TargetCollection, _encode_TargetCollection } from "../EmberPlus-Glow/TargetCollection.ta.mjs";
import { SourceCollection, _decode_SourceCollection, _encode_SourceCollection } from "../EmberPlus-Glow/SourceCollection.ta.mjs";
// export { SourceCollection, _decode_SourceCollection, _encode_SourceCollection } from "../EmberPlus-Glow/SourceCollection.ta.mjs";
import { ConnectionCollection, _decode_ConnectionCollection, _encode_ConnectionCollection } from "../EmberPlus-Glow/ConnectionCollection.ta.mjs";
// export { ConnectionCollection, _decode_ConnectionCollection, _encode_ConnectionCollection } from "../EmberPlus-Glow/ConnectionCollection.ta.mjs";


/**
 * @summary Matrix
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Matrix ::= [APPLICATION 13] IMPLICIT
 *         SEQUENCE {
 *             number         [0] Integer32,
 *             contents       [1] MatrixContents       OPTIONAL,
 *             children       [2] ElementCollection    OPTIONAL,
 *             targetList     [3] TargetCollection     OPTIONAL,
 *             sourceList     [4] SourceCollection     OPTIONAL,
 *             connections    [5] ConnectionCollection OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class Matrix {
    constructor (
        /**
         * @summary `number_`.
         * @public
         * @readonly
         */
        readonly number_: Integer32,
        /**
         * @summary `contents`.
         * @public
         * @readonly
         */
        readonly contents: OPTIONAL<MatrixContents>,
        /**
         * @summary `children`.
         * @public
         * @readonly
         */
        readonly children: OPTIONAL<ElementCollection>,
        /**
         * @summary `targetList`.
         * @public
         * @readonly
         */
        readonly targetList: OPTIONAL<TargetCollection>,
        /**
         * @summary `sourceList`.
         * @public
         * @readonly
         */
        readonly sourceList: OPTIONAL<SourceCollection>,
        /**
         * @summary `connections`.
         * @public
         * @readonly
         */
        readonly connections: OPTIONAL<ConnectionCollection>
    ) {}

    /**
     * @summary Restructures an object into a Matrix
     * @description
     * 
     * This takes an `object` and converts it to a `Matrix`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Matrix`.
     * @returns {Matrix}
     */
    public static _from_object (_o: { [_K in keyof (Matrix)]: (Matrix)[_K] }): Matrix {
        return new Matrix(_o.number_, _o.contents, _o.children, _o.targetList, _o.sourceList, _o.connections);
    }


}

/**
 * @summary The Leading Root Component Types of Matrix
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Matrix: $.ComponentSpec[] = [
    new $.ComponentSpec("number", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("contents", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("children", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("targetList", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sourceList", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("connections", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of Matrix
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Matrix: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Matrix
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Matrix: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Matrix: $.ASN1Decoder<Matrix> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Matrix
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Matrix (el: _Element): Matrix {
    if (!_cached_decoder_for_Matrix) { _cached_decoder_for_Matrix = $._decode_implicit<Matrix>(() => function (el: _Element): Matrix {
    let number_!: Integer32;
    let contents: OPTIONAL<MatrixContents>;
    let children: OPTIONAL<ElementCollection>;
    let targetList: OPTIONAL<TargetCollection>;
    let sourceList: OPTIONAL<SourceCollection>;
    let connections: OPTIONAL<ConnectionCollection>;
    const callbacks: $.DecodingMap = {
        "number": (_el: _Element): void => { number_ = $._decode_explicit<Integer32>(() => _decode_Integer32)(_el); },
        "contents": (_el: _Element): void => { contents = $._decode_explicit<MatrixContents>(() => _decode_MatrixContents)(_el); },
        "children": (_el: _Element): void => { children = $._decode_explicit<ElementCollection>(() => _decode_ElementCollection)(_el); },
        "targetList": (_el: _Element): void => { targetList = $._decode_explicit<TargetCollection>(() => _decode_TargetCollection)(_el); },
        "sourceList": (_el: _Element): void => { sourceList = $._decode_explicit<SourceCollection>(() => _decode_SourceCollection)(_el); },
        "connections": (_el: _Element): void => { connections = $._decode_explicit<ConnectionCollection>(() => _decode_ConnectionCollection)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Matrix,
        _extension_additions_list_spec_for_Matrix,
        _root_component_type_list_2_spec_for_Matrix,
        undefined,
    );
    return new Matrix(
        number_,
        contents,
        children,
        targetList,
        sourceList,
        connections
    );
}); }
    return _cached_decoder_for_Matrix(el);
}

let _cached_encoder_for_Matrix: $.ASN1Encoder<Matrix> | null = null;

/**
 * @summary Encodes a(n) Matrix into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Matrix, encoded as an ASN.1 Element.
 */
export
function _encode_Matrix (value: Matrix, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Matrix) { _cached_encoder_for_Matrix = $._encode_implicit(_TagClass.application, 13, () => function (value: Matrix, elGetter: $.ASN1Encoder<Matrix>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Integer32, $.BER)(value.number_, $.BER),
            /* IF_ABSENT  */ ((value.contents === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_MatrixContents, $.BER)(value.contents, $.BER)),
            /* IF_ABSENT  */ ((value.children === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_ElementCollection, $.BER)(value.children, $.BER)),
            /* IF_ABSENT  */ ((value.targetList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_TargetCollection, $.BER)(value.targetList, $.BER)),
            /* IF_ABSENT  */ ((value.sourceList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_SourceCollection, $.BER)(value.sourceList, $.BER)),
            /* IF_ABSENT  */ ((value.connections === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_ConnectionCollection, $.BER)(value.connections, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_Matrix(value, elGetter);
}


/* eslint-enable */
