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
import { NodeContents, _decode_NodeContents, _encode_NodeContents } from "../EmberPlus-Glow/NodeContents.ta.mjs";
// export { NodeContents, _decode_NodeContents, _encode_NodeContents } from "../EmberPlus-Glow/NodeContents.ta.mjs";
import { ElementCollection, _decode_ElementCollection, _encode_ElementCollection } from "../EmberPlus-Glow/ElementCollection.ta.mjs";
// export { ElementCollection, _decode_ElementCollection, _encode_ElementCollection } from "../EmberPlus-Glow/ElementCollection.ta.mjs";


/**
 * @summary QualifiedNode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QualifiedNode ::= [APPLICATION 10] IMPLICIT
 *         SEQUENCE {
 *             path     [0] RELATIVE-OID,
 *             contents [1] NodeContents      OPTIONAL,
 *             children [2] ElementCollection OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class QualifiedNode {
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
        readonly contents: OPTIONAL<NodeContents>,
        /**
         * @summary `children`.
         * @public
         * @readonly
         */
        readonly children: OPTIONAL<ElementCollection>
    ) {}

    /**
     * @summary Restructures an object into a QualifiedNode
     * @description
     * 
     * This takes an `object` and converts it to a `QualifiedNode`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `QualifiedNode`.
     * @returns {QualifiedNode}
     */
    public static _from_object (_o: { [_K in keyof (QualifiedNode)]: (QualifiedNode)[_K] }): QualifiedNode {
        return new QualifiedNode(_o.path, _o.contents, _o.children);
    }


}

/**
 * @summary The Leading Root Component Types of QualifiedNode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_QualifiedNode: $.ComponentSpec[] = [
    new $.ComponentSpec("path", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("contents", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("children", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of QualifiedNode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_QualifiedNode: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of QualifiedNode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_QualifiedNode: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_QualifiedNode: $.ASN1Decoder<QualifiedNode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QualifiedNode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QualifiedNode (el: _Element): QualifiedNode {
    if (!_cached_decoder_for_QualifiedNode) { _cached_decoder_for_QualifiedNode = $._decode_implicit<QualifiedNode>(() => function (el: _Element): QualifiedNode {
    let path!: RELATIVE_OID;
    let contents: OPTIONAL<NodeContents>;
    let children: OPTIONAL<ElementCollection>;
    const callbacks: $.DecodingMap = {
        "path": (_el: _Element): void => { path = $._decode_explicit<RELATIVE_OID>(() => $._decodeRelativeOID)(_el); },
        "contents": (_el: _Element): void => { contents = $._decode_explicit<NodeContents>(() => _decode_NodeContents)(_el); },
        "children": (_el: _Element): void => { children = $._decode_explicit<ElementCollection>(() => _decode_ElementCollection)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_QualifiedNode,
        _extension_additions_list_spec_for_QualifiedNode,
        _root_component_type_list_2_spec_for_QualifiedNode,
        undefined,
    );
    return new QualifiedNode(
        path,
        contents,
        children
    );
}); }
    return _cached_decoder_for_QualifiedNode(el);
}

let _cached_encoder_for_QualifiedNode: $.ASN1Encoder<QualifiedNode> | null = null;

/**
 * @summary Encodes a(n) QualifiedNode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QualifiedNode, encoded as an ASN.1 Element.
 */
export
function _encode_QualifiedNode (value: QualifiedNode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QualifiedNode) { _cached_encoder_for_QualifiedNode = $._encode_implicit(_TagClass.application, 10, () => function (value: QualifiedNode, elGetter: $.ASN1Encoder<QualifiedNode>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER)(value.path, $.BER),
            /* IF_ABSENT  */ ((value.contents === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_NodeContents, $.BER)(value.contents, $.BER)),
            /* IF_ABSENT  */ ((value.children === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_ElementCollection, $.BER)(value.children, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_QualifiedNode(value, elGetter);
}


/* eslint-enable */
