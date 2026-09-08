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
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { SupportedAttributes } from "../InformationFramework/SupportedAttributes.osa.mjs";
// export { SupportedAttributes } from "../InformationFramework/SupportedAttributes.osa.mjs";
import { AttributeValueAssertion_assertedContexts, _decode_AttributeValueAssertion_assertedContexts, _encode_AttributeValueAssertion_assertedContexts } from "../InformationFramework/AttributeValueAssertion-assertedContexts.ta.mjs";
// export { AttributeValueAssertion_assertedContexts, _decode_AttributeValueAssertion_assertedContexts, _encode_AttributeValueAssertion_assertedContexts } from "../InformationFramework/AttributeValueAssertion-assertedContexts.ta.mjs";


/**
 * @summary AttributeValueAssertion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeValueAssertion ::= SEQUENCE {
 *   type              ATTRIBUTE.&id({SupportedAttributes}),
 *   assertion         ATTRIBUTE.&equality-match.&AssertionType
 *                       ({SupportedAttributes}{@type}),
 *   assertedContexts  CHOICE {
 *     allContexts       [0]  NULL,
 *     selectedContexts  [1]  SET SIZE (1..MAX) OF ContextAssertion } OPTIONAL,
 *   ... }
 * ```
 * 
 * @class
 */
export
class AttributeValueAssertion {
    constructor (
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OBJECT_IDENTIFIER,
        /**
         * @summary `assertion`.
         * @public
         * @readonly
         */
        readonly assertion: _Element,
        /**
         * @summary `assertedContexts`.
         * @public
         * @readonly
         */
        readonly assertedContexts: OPTIONAL<AttributeValueAssertion_assertedContexts>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeValueAssertion
     * @description
     * 
     * This takes an `object` and converts it to a `AttributeValueAssertion`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeValueAssertion`.
     * @returns {AttributeValueAssertion}
     */
    public static _from_object (_o: { [_K in keyof (AttributeValueAssertion)]: (AttributeValueAssertion)[_K] }): AttributeValueAssertion {
        return new AttributeValueAssertion(_o.type_, _o.assertion, _o.assertedContexts, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AttributeValueAssertion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttributeValueAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.universal, 6), undefined, undefined),
    new $.ComponentSpec("assertion", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("assertedContexts", true, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1)), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of AttributeValueAssertion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttributeValueAssertion: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttributeValueAssertion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttributeValueAssertion: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttributeValueAssertion: $.ASN1Decoder<AttributeValueAssertion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeValueAssertion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeValueAssertion (el: _Element): AttributeValueAssertion {
    if (!_cached_decoder_for_AttributeValueAssertion) { _cached_decoder_for_AttributeValueAssertion = function (el: _Element): AttributeValueAssertion {
    let type_!: OBJECT_IDENTIFIER;
    let assertion!: _Element;
    let assertedContexts: OPTIONAL<AttributeValueAssertion_assertedContexts>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = $._decodeObjectIdentifier(_el); },
        "assertion": (_el: _Element): void => { assertion = $._decodeAny(_el); },
        "assertedContexts": (_el: _Element): void => { assertedContexts = _decode_AttributeValueAssertion_assertedContexts(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeValueAssertion,
        _extension_additions_list_spec_for_AttributeValueAssertion,
        _root_component_type_list_2_spec_for_AttributeValueAssertion,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AttributeValueAssertion(
        type_,
        assertion,
        assertedContexts,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AttributeValueAssertion(el);
}

let _cached_encoder_for_AttributeValueAssertion: $.ASN1Encoder<AttributeValueAssertion> | null = null;

/**
 * @summary Encodes a(n) AttributeValueAssertion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeValueAssertion, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeValueAssertion (value: AttributeValueAssertion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeValueAssertion) { _cached_encoder_for_AttributeValueAssertion = function (value: AttributeValueAssertion, elGetter: $.ASN1Encoder<AttributeValueAssertion>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.type_, $.BER),
            /* REQUIRED   */ $._encodeAny(value.assertion, $.BER),
            /* IF_ABSENT  */ ((value.assertedContexts === undefined) ? undefined : _encode_AttributeValueAssertion_assertedContexts(value.assertedContexts, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AttributeValueAssertion(value, elGetter);
}


/* eslint-enable */
