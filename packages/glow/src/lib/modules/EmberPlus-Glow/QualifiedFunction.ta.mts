/* eslint-disable */
import {
    OPTIONAL,
    RELATIVE_OID,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FunctionContents, _decode_FunctionContents, _encode_FunctionContents } from "../EmberPlus-Glow/FunctionContents.ta.mjs";
// export { FunctionContents, _decode_FunctionContents, _encode_FunctionContents } from "../EmberPlus-Glow/FunctionContents.ta.mjs";
import { ElementCollection, _decode_ElementCollection, _encode_ElementCollection } from "../EmberPlus-Glow/ElementCollection.ta.mjs";
// export { ElementCollection, _decode_ElementCollection, _encode_ElementCollection } from "../EmberPlus-Glow/ElementCollection.ta.mjs";


/**
 * @summary QualifiedFunction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QualifiedFunction ::= [APPLICATION 20] IMPLICIT
 *         SEQUENCE {
 *             path        [0] RELATIVE-OID,
 *             contents    [1] FunctionContents    OPTIONAL,
 *             children    [2] ElementCollection   OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class QualifiedFunction {
    constructor (
        /**
         * @summary `path`.
         * @public
         * @readonly
         */
        readonly path: RELATIVE_OID,
        /**
         * @summary `contents`.
         * @public
         * @readonly
         */
        readonly contents: OPTIONAL<FunctionContents>,
        /**
         * @summary `children`.
         * @public
         * @readonly
         */
        readonly children: OPTIONAL<ElementCollection>
    ) {}

    /**
     * @summary Restructures an object into a QualifiedFunction
     * @description
     * 
     * This takes an `object` and converts it to a `QualifiedFunction`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `QualifiedFunction`.
     * @returns {QualifiedFunction}
     */
    public static _from_object (_o: { [_K in keyof (QualifiedFunction)]: (QualifiedFunction)[_K] }): QualifiedFunction {
        return new QualifiedFunction(_o.path, _o.contents, _o.children);
    }


}

/**
 * @summary The Leading Root Component Types of QualifiedFunction
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_QualifiedFunction: $.ComponentSpec[] = [
    new $.ComponentSpec("path", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("contents", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("children", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of QualifiedFunction
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_QualifiedFunction: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of QualifiedFunction
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_QualifiedFunction: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_QualifiedFunction: $.ASN1Decoder<QualifiedFunction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QualifiedFunction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QualifiedFunction (el: _Element): QualifiedFunction {
    if (!_cached_decoder_for_QualifiedFunction) { _cached_decoder_for_QualifiedFunction = $._decode_implicit<QualifiedFunction>(() => function (el: _Element): QualifiedFunction {
    let path!: RELATIVE_OID;
    let contents: OPTIONAL<FunctionContents>;
    let children: OPTIONAL<ElementCollection>;
    const callbacks: $.DecodingMap = {
        "path": (_el: _Element): void => { path = $._decode_explicit<RELATIVE_OID>(() => $._decodeRelativeOID)(_el); },
        "contents": (_el: _Element): void => { contents = $._decode_explicit<FunctionContents>(() => _decode_FunctionContents)(_el); },
        "children": (_el: _Element): void => { children = $._decode_explicit<ElementCollection>(() => _decode_ElementCollection)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_QualifiedFunction,
        _extension_additions_list_spec_for_QualifiedFunction,
        _root_component_type_list_2_spec_for_QualifiedFunction,
        undefined,
    );
    return new QualifiedFunction(
        path,
        contents,
        children
    );
}); }
    return _cached_decoder_for_QualifiedFunction(el);
}

let _cached_encoder_for_QualifiedFunction: $.ASN1Encoder<QualifiedFunction> | null = null;

/**
 * @summary Encodes a(n) QualifiedFunction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QualifiedFunction, encoded as an ASN.1 Element.
 */
export
function _encode_QualifiedFunction (value: QualifiedFunction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QualifiedFunction) { _cached_encoder_for_QualifiedFunction = $._encode_implicit(_TagClass.application, 20, () => function (value: QualifiedFunction, elGetter: $.ASN1Encoder<QualifiedFunction>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER)(value.path, $.BER),
            /* IF_ABSENT  */ ((value.contents === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_FunctionContents, $.BER)(value.contents, $.BER)),
            /* IF_ABSENT  */ ((value.children === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_ElementCollection, $.BER)(value.children, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_QualifiedFunction(value, elGetter);
}


/* eslint-enable */
