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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { CONTEXT } from "../InformationFramework/CONTEXT.oca.mjs";
// export { CONTEXT } from "../InformationFramework/CONTEXT.oca.mjs";
import { SupportedContexts } from "../InformationFramework/SupportedContexts.osa.mjs";
// export { SupportedContexts } from "../InformationFramework/SupportedContexts.osa.mjs";


/**
 * @summary Context
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Context ::= SEQUENCE {
 *   contextType    CONTEXT.&id({SupportedContexts}),
 *   contextValues
 *     SET SIZE (1..MAX) OF CONTEXT.&Type({SupportedContexts}{@contextType}),
 *   fallback       BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 * 
 * @class
 */
export
class Context {
    constructor (
        /**
         * @summary `contextType`.
         * @public
         * @readonly
         */
        readonly contextType: OBJECT_IDENTIFIER,
        /**
         * @summary `contextValues`.
         * @public
         * @readonly
         */
        readonly contextValues: _Element[],
        /**
         * @summary `fallback`.
         * @public
         * @readonly
         */
        readonly fallback: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Context
     * @description
     * 
     * This takes an `object` and converts it to a `Context`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Context`.
     * @returns {Context}
     */
    public static _from_object (_o: { [_K in keyof (Context)]: (Context)[_K] }): Context {
        return new Context(_o.contextType, _o.contextValues, _o.fallback, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `fallback`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_fallback () { return false; }
}

/**
 * @summary The Leading Root Component Types of Context
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Context: $.ComponentSpec[] = [
    new $.ComponentSpec("contextType", false, $.hasTag(_TagClass.universal, 6), undefined, undefined),
    new $.ComponentSpec("contextValues", false, $.hasTag(_TagClass.universal, 17), undefined, undefined),
    new $.ComponentSpec("fallback", true, $.hasTag(_TagClass.universal, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of Context
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Context: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Context
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Context: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Context: $.ASN1Decoder<Context> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Context
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Context (el: _Element): Context {
    if (!_cached_decoder_for_Context) { _cached_decoder_for_Context = function (el: _Element): Context {
    let contextType!: OBJECT_IDENTIFIER;
    let contextValues!: _Element[];
    let fallback: OPTIONAL<BOOLEAN> = Context._default_value_for_fallback;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "contextType": (_el: _Element): void => { contextType = $._decodeObjectIdentifier(_el); },
        "contextValues": (_el: _Element): void => { contextValues = $._decodeSetOf<_Element>(() => $._decodeAny)(_el); },
        "fallback": (_el: _Element): void => { fallback = $._decodeBoolean(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Context,
        _extension_additions_list_spec_for_Context,
        _root_component_type_list_2_spec_for_Context,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Context(
        contextType,
        contextValues,
        fallback,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Context(el);
}

let _cached_encoder_for_Context: $.ASN1Encoder<Context> | null = null;

/**
 * @summary Encodes a(n) Context into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Context, encoded as an ASN.1 Element.
 */
export
function _encode_Context (value: Context, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Context) { _cached_encoder_for_Context = function (value: Context, elGetter: $.ASN1Encoder<Context>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.contextType, $.BER),
            /* REQUIRED   */ $._encodeSetOf<_Element>(() => $._encodeAny, $.BER)(value.contextValues, $.BER),
            /* IF_DEFAULT */ (value.fallback === undefined || $.deepEq(value.fallback, Context._default_value_for_fallback) ? undefined : $._encodeBoolean(value.fallback, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Context(value, elGetter);
}


/* eslint-enable */
