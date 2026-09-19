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
import { TemplateElement, _decode_TemplateElement, _encode_TemplateElement } from "../EmberPlus-Glow/TemplateElement.ta.mjs";
// export { TemplateElement, _decode_TemplateElement, _encode_TemplateElement } from "../EmberPlus-Glow/TemplateElement.ta.mjs";
import { EmberString, _decode_EmberString, _encode_EmberString } from "../EmberPlus-Glow/EmberString.ta.mjs";
// export { EmberString, _decode_EmberString, _encode_EmberString } from "../EmberPlus-Glow/EmberString.ta.mjs";


/**
 * @summary QualifiedTemplate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QualifiedTemplate ::= [APPLICATION 25] IMPLICIT SET {
 *         path          [0] RELATIVE-OID,
 *         element     [1] TemplateElement               OPTIONAL,
 *         description    [2] EmberString                   OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class QualifiedTemplate {
    constructor (
        /**
         * @summary `path`.
         * @public
         * @readonly
         */
        readonly path: RELATIVE_OID,
        /**
         * @summary `element`.
         * @public
         * @readonly
         */
        readonly element: OPTIONAL<TemplateElement>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<EmberString>
    ) {}

    /**
     * @summary Restructures an object into a QualifiedTemplate
     * @description
     * 
     * This takes an `object` and converts it to a `QualifiedTemplate`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `QualifiedTemplate`.
     * @returns {QualifiedTemplate}
     */
    public static _from_object (_o: { [_K in keyof (QualifiedTemplate)]: (QualifiedTemplate)[_K] }): QualifiedTemplate {
        return new QualifiedTemplate(_o.path, _o.element, _o.description);
    }


}

/**
 * @summary The Leading Root Component Types of QualifiedTemplate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_QualifiedTemplate: $.ComponentSpec[] = [
    new $.ComponentSpec("path", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("element", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of QualifiedTemplate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_QualifiedTemplate: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of QualifiedTemplate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_QualifiedTemplate: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_QualifiedTemplate: $.ASN1Decoder<QualifiedTemplate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QualifiedTemplate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QualifiedTemplate (el: _Element): QualifiedTemplate {
    if (!_cached_decoder_for_QualifiedTemplate) { _cached_decoder_for_QualifiedTemplate = $._decode_implicit<QualifiedTemplate>(() => function (el: _Element): QualifiedTemplate {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let path!: RELATIVE_OID;
    let element: OPTIONAL<TemplateElement>;
    let description: OPTIONAL<EmberString>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "path": (_el: _Element): void => { path = $._decode_explicit<RELATIVE_OID>(() => $._decodeRelativeOID)(_el); },
        "element": (_el: _Element): void => { element = $._decode_explicit<TemplateElement>(() => _decode_TemplateElement)(_el); },
        "description": (_el: _Element): void => { description = $._decode_explicit<EmberString>(() => _decode_EmberString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_QualifiedTemplate,
        _extension_additions_list_spec_for_QualifiedTemplate,
        _root_component_type_list_2_spec_for_QualifiedTemplate,
        undefined,
    );
    return new QualifiedTemplate( /* SET_CONSTRUCTOR_CALL */
        path,
        element,
        description
    );
}); }
    return _cached_decoder_for_QualifiedTemplate(el);
}

let _cached_encoder_for_QualifiedTemplate: $.ASN1Encoder<QualifiedTemplate> | null = null;

/**
 * @summary Encodes a(n) QualifiedTemplate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QualifiedTemplate, encoded as an ASN.1 Element.
 */
export
function _encode_QualifiedTemplate (value: QualifiedTemplate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QualifiedTemplate) { _cached_encoder_for_QualifiedTemplate = $._encode_implicit(_TagClass.application, 25, () => function (value: QualifiedTemplate, elGetter: $.ASN1Encoder<QualifiedTemplate>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER)(value.path, $.BER),
            /* IF_ABSENT  */ ((value.element === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_TemplateElement, $.BER)(value.element, $.BER)),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_EmberString, $.BER)(value.description, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_QualifiedTemplate(value, elGetter);
}


/* eslint-enable */
