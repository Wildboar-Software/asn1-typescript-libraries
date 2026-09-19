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
import { ParameterContents, _decode_ParameterContents, _encode_ParameterContents } from "../EmberPlus-Glow/ParameterContents.ta.mjs";
// export { ParameterContents, _decode_ParameterContents, _encode_ParameterContents } from "../EmberPlus-Glow/ParameterContents.ta.mjs";
import { ElementCollection, _decode_ElementCollection, _encode_ElementCollection } from "../EmberPlus-Glow/ElementCollection.ta.mjs";
// export { ElementCollection, _decode_ElementCollection, _encode_ElementCollection } from "../EmberPlus-Glow/ElementCollection.ta.mjs";


/**
 * @summary QualifiedParameter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QualifiedParameter ::= [APPLICATION 9] IMPLICIT
 *         SEQUENCE {
 *             path     [0] RELATIVE-OID,
 *             contents [1] ParameterContents OPTIONAL,
 *             children [2] ElementCollection OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class QualifiedParameter {
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
        readonly contents: OPTIONAL<ParameterContents>,
        /**
         * @summary `children`.
         * @public
         * @readonly
         */
        readonly children: OPTIONAL<ElementCollection>
    ) {}

    /**
     * @summary Restructures an object into a QualifiedParameter
     * @description
     * 
     * This takes an `object` and converts it to a `QualifiedParameter`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `QualifiedParameter`.
     * @returns {QualifiedParameter}
     */
    public static _from_object (_o: { [_K in keyof (QualifiedParameter)]: (QualifiedParameter)[_K] }): QualifiedParameter {
        return new QualifiedParameter(_o.path, _o.contents, _o.children);
    }


}

/**
 * @summary The Leading Root Component Types of QualifiedParameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_QualifiedParameter: $.ComponentSpec[] = [
    new $.ComponentSpec("path", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("contents", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("children", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of QualifiedParameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_QualifiedParameter: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of QualifiedParameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_QualifiedParameter: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_QualifiedParameter: $.ASN1Decoder<QualifiedParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QualifiedParameter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QualifiedParameter (el: _Element): QualifiedParameter {
    if (!_cached_decoder_for_QualifiedParameter) { _cached_decoder_for_QualifiedParameter = $._decode_implicit<QualifiedParameter>(() => function (el: _Element): QualifiedParameter {
    let path!: RELATIVE_OID;
    let contents: OPTIONAL<ParameterContents>;
    let children: OPTIONAL<ElementCollection>;
    const callbacks: $.DecodingMap = {
        "path": (_el: _Element): void => { path = $._decode_explicit<RELATIVE_OID>(() => $._decodeRelativeOID)(_el); },
        "contents": (_el: _Element): void => { contents = $._decode_explicit<ParameterContents>(() => _decode_ParameterContents)(_el); },
        "children": (_el: _Element): void => { children = $._decode_explicit<ElementCollection>(() => _decode_ElementCollection)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_QualifiedParameter,
        _extension_additions_list_spec_for_QualifiedParameter,
        _root_component_type_list_2_spec_for_QualifiedParameter,
        undefined,
    );
    return new QualifiedParameter(
        path,
        contents,
        children
    );
}); }
    return _cached_decoder_for_QualifiedParameter(el);
}

let _cached_encoder_for_QualifiedParameter: $.ASN1Encoder<QualifiedParameter> | null = null;

/**
 * @summary Encodes a(n) QualifiedParameter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QualifiedParameter, encoded as an ASN.1 Element.
 */
export
function _encode_QualifiedParameter (value: QualifiedParameter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QualifiedParameter) { _cached_encoder_for_QualifiedParameter = $._encode_implicit(_TagClass.application, 9, () => function (value: QualifiedParameter, elGetter: $.ASN1Encoder<QualifiedParameter>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER)(value.path, $.BER),
            /* IF_ABSENT  */ ((value.contents === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_ParameterContents, $.BER)(value.contents, $.BER)),
            /* IF_ABSENT  */ ((value.children === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_ElementCollection, $.BER)(value.children, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_QualifiedParameter(value, elGetter);
}


/* eslint-enable */
