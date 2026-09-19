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
import { ParameterContents, _decode_ParameterContents, _encode_ParameterContents } from "../EmberPlus-Glow/ParameterContents.ta.mjs";
// export { ParameterContents, _decode_ParameterContents, _encode_ParameterContents } from "../EmberPlus-Glow/ParameterContents.ta.mjs";
import { ElementCollection, _decode_ElementCollection, _encode_ElementCollection } from "../EmberPlus-Glow/ElementCollection.ta.mjs";
// export { ElementCollection, _decode_ElementCollection, _encode_ElementCollection } from "../EmberPlus-Glow/ElementCollection.ta.mjs";


/**
 * @summary Parameter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Parameter ::= [APPLICATION 1] IMPLICIT
 *         SEQUENCE {
 *             number   [0] Integer32,
 *             contents [1] ParameterContents OPTIONAL,
 *             children [2] ElementCollection OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class Parameter {
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
        readonly contents: OPTIONAL<ParameterContents>,
        /**
         * @summary `children`.
         * @public
         * @readonly
         */
        readonly children: OPTIONAL<ElementCollection>
    ) {}

    /**
     * @summary Restructures an object into a Parameter
     * @description
     * 
     * This takes an `object` and converts it to a `Parameter`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Parameter`.
     * @returns {Parameter}
     */
    public static _from_object (_o: { [_K in keyof (Parameter)]: (Parameter)[_K] }): Parameter {
        return new Parameter(_o.number_, _o.contents, _o.children);
    }


}

/**
 * @summary The Leading Root Component Types of Parameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Parameter: $.ComponentSpec[] = [
    new $.ComponentSpec("number", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("contents", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("children", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Parameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Parameter: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Parameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Parameter: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Parameter: $.ASN1Decoder<Parameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Parameter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Parameter (el: _Element): Parameter {
    if (!_cached_decoder_for_Parameter) { _cached_decoder_for_Parameter = $._decode_implicit<Parameter>(() => function (el: _Element): Parameter {
    let number_!: Integer32;
    let contents: OPTIONAL<ParameterContents>;
    let children: OPTIONAL<ElementCollection>;
    const callbacks: $.DecodingMap = {
        "number": (_el: _Element): void => { number_ = $._decode_explicit<Integer32>(() => _decode_Integer32)(_el); },
        "contents": (_el: _Element): void => { contents = $._decode_explicit<ParameterContents>(() => _decode_ParameterContents)(_el); },
        "children": (_el: _Element): void => { children = $._decode_explicit<ElementCollection>(() => _decode_ElementCollection)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Parameter,
        _extension_additions_list_spec_for_Parameter,
        _root_component_type_list_2_spec_for_Parameter,
        undefined,
    );
    return new Parameter(
        number_,
        contents,
        children
    );
}); }
    return _cached_decoder_for_Parameter(el);
}

let _cached_encoder_for_Parameter: $.ASN1Encoder<Parameter> | null = null;

/**
 * @summary Encodes a(n) Parameter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Parameter, encoded as an ASN.1 Element.
 */
export
function _encode_Parameter (value: Parameter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Parameter) { _cached_encoder_for_Parameter = $._encode_implicit(_TagClass.application, 1, () => function (value: Parameter, elGetter: $.ASN1Encoder<Parameter>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Integer32, $.BER)(value.number_, $.BER),
            /* IF_ABSENT  */ ((value.contents === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_ParameterContents, $.BER)(value.contents, $.BER)),
            /* IF_ABSENT  */ ((value.children === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_ElementCollection, $.BER)(value.children, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_Parameter(value, elGetter);
}


/* eslint-enable */
