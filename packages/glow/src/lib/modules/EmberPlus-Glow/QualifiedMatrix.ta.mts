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
 * @summary QualifiedMatrix
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QualifiedMatrix ::= [APPLICATION 17] IMPLICIT
 *         SEQUENCE {
 *             path           [0] RELATIVE-OID,
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
class QualifiedMatrix {
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
     * @summary Restructures an object into a QualifiedMatrix
     * @description
     * 
     * This takes an `object` and converts it to a `QualifiedMatrix`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `QualifiedMatrix`.
     * @returns {QualifiedMatrix}
     */
    public static _from_object (_o: { [_K in keyof (QualifiedMatrix)]: (QualifiedMatrix)[_K] }): QualifiedMatrix {
        return new QualifiedMatrix(_o.path, _o.contents, _o.children, _o.targetList, _o.sourceList, _o.connections);
    }


}

/**
 * @summary The Leading Root Component Types of QualifiedMatrix
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_QualifiedMatrix: $.ComponentSpec[] = [
    new $.ComponentSpec("path", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("contents", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("children", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("targetList", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sourceList", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("connections", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of QualifiedMatrix
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_QualifiedMatrix: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of QualifiedMatrix
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_QualifiedMatrix: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_QualifiedMatrix: $.ASN1Decoder<QualifiedMatrix> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QualifiedMatrix
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QualifiedMatrix (el: _Element): QualifiedMatrix {
    if (!_cached_decoder_for_QualifiedMatrix) { _cached_decoder_for_QualifiedMatrix = $._decode_implicit<QualifiedMatrix>(() => function (el: _Element): QualifiedMatrix {
    let path!: RELATIVE_OID;
    let contents: OPTIONAL<MatrixContents>;
    let children: OPTIONAL<ElementCollection>;
    let targetList: OPTIONAL<TargetCollection>;
    let sourceList: OPTIONAL<SourceCollection>;
    let connections: OPTIONAL<ConnectionCollection>;
    const callbacks: $.DecodingMap = {
        "path": (_el: _Element): void => { path = $._decode_explicit<RELATIVE_OID>(() => $._decodeRelativeOID)(_el); },
        "contents": (_el: _Element): void => { contents = $._decode_explicit<MatrixContents>(() => _decode_MatrixContents)(_el); },
        "children": (_el: _Element): void => { children = $._decode_explicit<ElementCollection>(() => _decode_ElementCollection)(_el); },
        "targetList": (_el: _Element): void => { targetList = $._decode_explicit<TargetCollection>(() => _decode_TargetCollection)(_el); },
        "sourceList": (_el: _Element): void => { sourceList = $._decode_explicit<SourceCollection>(() => _decode_SourceCollection)(_el); },
        "connections": (_el: _Element): void => { connections = $._decode_explicit<ConnectionCollection>(() => _decode_ConnectionCollection)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_QualifiedMatrix,
        _extension_additions_list_spec_for_QualifiedMatrix,
        _root_component_type_list_2_spec_for_QualifiedMatrix,
        undefined,
    );
    return new QualifiedMatrix(
        path,
        contents,
        children,
        targetList,
        sourceList,
        connections
    );
}); }
    return _cached_decoder_for_QualifiedMatrix(el);
}

let _cached_encoder_for_QualifiedMatrix: $.ASN1Encoder<QualifiedMatrix> | null = null;

/**
 * @summary Encodes a(n) QualifiedMatrix into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QualifiedMatrix, encoded as an ASN.1 Element.
 */
export
function _encode_QualifiedMatrix (value: QualifiedMatrix, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QualifiedMatrix) { _cached_encoder_for_QualifiedMatrix = $._encode_implicit(_TagClass.application, 17, () => function (value: QualifiedMatrix, elGetter: $.ASN1Encoder<QualifiedMatrix>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER)(value.path, $.BER),
            /* IF_ABSENT  */ ((value.contents === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_MatrixContents, $.BER)(value.contents, $.BER)),
            /* IF_ABSENT  */ ((value.children === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_ElementCollection, $.BER)(value.children, $.BER)),
            /* IF_ABSENT  */ ((value.targetList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_TargetCollection, $.BER)(value.targetList, $.BER)),
            /* IF_ABSENT  */ ((value.sourceList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_SourceCollection, $.BER)(value.sourceList, $.BER)),
            /* IF_ABSENT  */ ((value.connections === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_ConnectionCollection, $.BER)(value.connections, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_QualifiedMatrix(value, elGetter);
}


/* eslint-enable */
