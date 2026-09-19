/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Integer32, _decode_Integer32, _encode_Integer32 } from "../EmberPlus-Glow/Integer32.ta.mjs";
// export { Integer32, _decode_Integer32, _encode_Integer32 } from "../EmberPlus-Glow/Integer32.ta.mjs";
import { NodeContents, _decode_NodeContents, _encode_NodeContents } from "../EmberPlus-Glow/NodeContents.ta.mjs";
// export { NodeContents, _decode_NodeContents, _encode_NodeContents } from "../EmberPlus-Glow/NodeContents.ta.mjs";
import { ElementCollection, _decode_ElementCollection, _encode_ElementCollection } from "../EmberPlus-Glow/ElementCollection.ta.mjs";
// export { ElementCollection, _decode_ElementCollection, _encode_ElementCollection } from "../EmberPlus-Glow/ElementCollection.ta.mjs";


/**
 * @summary Node
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Node ::= [APPLICATION 3] IMPLICIT
 *         SEQUENCE {
 *             number   [0] Integer32,
 *             contents [1] NodeContents      OPTIONAL,
 *             children [2] ElementCollection OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class Node {
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
        readonly contents: OPTIONAL<NodeContents>,
        /**
         * @summary `children`.
         * @public
         * @readonly
         */
        readonly children: OPTIONAL<ElementCollection>
    ) {}

    /**
     * @summary Restructures an object into a Node
     * @description
     * 
     * This takes an `object` and converts it to a `Node`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Node`.
     * @returns {Node}
     */
    public static _from_object (_o: { [_K in keyof (Node)]: (Node)[_K] }): Node {
        return new Node(_o.number_, _o.contents, _o.children);
    }


}

/**
 * @summary The Leading Root Component Types of Node
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Node: $.ComponentSpec[] = [
    new $.ComponentSpec("number", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("contents", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("children", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Node
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Node: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Node
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Node: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Node: $.ASN1Decoder<Node> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Node
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Node (el: _Element): Node {
    if (!_cached_decoder_for_Node) { _cached_decoder_for_Node = $._decode_implicit<Node>(() => function (el: _Element): Node {
    let number_!: Integer32;
    let contents: OPTIONAL<NodeContents>;
    let children: OPTIONAL<ElementCollection>;
    const callbacks: $.DecodingMap = {
        "number": (_el: _Element): void => { number_ = $._decode_explicit<Integer32>(() => _decode_Integer32)(_el); },
        "contents": (_el: _Element): void => { contents = $._decode_explicit<NodeContents>(() => _decode_NodeContents)(_el); },
        "children": (_el: _Element): void => { children = $._decode_explicit<ElementCollection>(() => _decode_ElementCollection)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Node,
        _extension_additions_list_spec_for_Node,
        _root_component_type_list_2_spec_for_Node,
        undefined,
    );
    return new Node(
        number_,
        contents,
        children
    );
}); }
    return _cached_decoder_for_Node(el);
}

let _cached_encoder_for_Node: $.ASN1Encoder<Node> | null = null;

/**
 * @summary Encodes a(n) Node into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Node, encoded as an ASN.1 Element.
 */
export
function _encode_Node (value: Node, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Node) { _cached_encoder_for_Node = $._encode_implicit(_TagClass.application, 3, () => function (value: Node, elGetter: $.ASN1Encoder<Node>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Integer32, $.BER)(value.number_, $.BER),
            /* IF_ABSENT  */ ((value.contents === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_NodeContents, $.BER)(value.contents, $.BER)),
            /* IF_ABSENT  */ ((value.children === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_ElementCollection, $.BER)(value.children, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_Node(value, elGetter);
}


/* eslint-enable */
