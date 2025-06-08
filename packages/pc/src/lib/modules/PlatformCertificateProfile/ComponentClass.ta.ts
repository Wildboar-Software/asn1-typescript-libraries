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
import * as $ from "asn1-ts/dist/node/functional";
import { ComponentClassRegistry, _decode_ComponentClassRegistry, _encode_ComponentClassRegistry } from "../PlatformCertificateProfile/ComponentClassRegistry.ta";
export { ComponentClassRegistry, _decode_ComponentClassRegistry, _encode_ComponentClassRegistry } from "../PlatformCertificateProfile/ComponentClassRegistry.ta";


/* START_OF_SYMBOL_DEFINITION ComponentClass */
/**
 * @summary ComponentClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ComponentClass ::= SEQUENCE {
 *     componentClassRegistry      ComponentClassRegistry,
 *     componentClassValue         OCTET STRING (SIZE(4)) }
 * ```
 * 
 * @class
 */
export
class ComponentClass {
    constructor (
        /**
         * @summary `componentClassRegistry`.
         * @public
         * @readonly
         */
        readonly componentClassRegistry: ComponentClassRegistry,
        /**
         * @summary `componentClassValue`.
         * @public
         * @readonly
         */
        readonly componentClassValue: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a ComponentClass
     * @description
     * 
     * This takes an `object` and converts it to a `ComponentClass`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ComponentClass`.
     * @returns {ComponentClass}
     */
    public static _from_object (_o: { [_K in keyof (ComponentClass)]: (ComponentClass)[_K] }): ComponentClass {
        return new ComponentClass(_o.componentClassRegistry, _o.componentClassValue);
    }


}
/* END_OF_SYMBOL_DEFINITION ComponentClass */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ComponentClass */
/**
 * @summary The Leading Root Component Types of ComponentClass
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ComponentClass: $.ComponentSpec[] = [
    new $.ComponentSpec("componentClassRegistry", false, $.hasTag(_TagClass.universal, 6), undefined, undefined),
    new $.ComponentSpec("componentClassValue", false, $.hasTag(_TagClass.universal, 4), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ComponentClass */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ComponentClass */
/**
 * @summary The Trailing Root Component Types of ComponentClass
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ComponentClass: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ComponentClass */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ComponentClass */
/**
 * @summary The Extension Addition Component Types of ComponentClass
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ComponentClass: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ComponentClass */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ComponentClass */
let _cached_decoder_for_ComponentClass: $.ASN1Decoder<ComponentClass> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ComponentClass */

/* START_OF_SYMBOL_DEFINITION _decode_ComponentClass */
/**
 * @summary Decodes an ASN.1 element into a(n) ComponentClass
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ComponentClass} The decoded data structure.
 */
export
function _decode_ComponentClass (el: _Element) {
    if (!_cached_decoder_for_ComponentClass) { _cached_decoder_for_ComponentClass = function (el: _Element): ComponentClass {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ComponentClass contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "componentClassRegistry";
    sequence[1].name = "componentClassValue";
    let componentClassRegistry!: ComponentClassRegistry;
    let componentClassValue!: OCTET_STRING;
    componentClassRegistry = _decode_ComponentClassRegistry(sequence[0]);
    componentClassValue = $._decodeOctetString(sequence[1]);
    return new ComponentClass(
        componentClassRegistry,
        componentClassValue,

    );
}; }
    return _cached_decoder_for_ComponentClass(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ComponentClass */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ComponentClass */
let _cached_encoder_for_ComponentClass: $.ASN1Encoder<ComponentClass> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ComponentClass */

/* START_OF_SYMBOL_DEFINITION _encode_ComponentClass */
/**
 * @summary Encodes a(n) ComponentClass into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ComponentClass, encoded as an ASN.1 Element.
 */
export
function _encode_ComponentClass (value: ComponentClass, elGetter: $.ASN1Encoder<ComponentClass>) {
    if (!_cached_encoder_for_ComponentClass) { _cached_encoder_for_ComponentClass = function (value: ComponentClass, elGetter: $.ASN1Encoder<ComponentClass>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ComponentClassRegistry(value.componentClassRegistry, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.componentClassValue, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ComponentClass(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ComponentClass */

/* eslint-enable */
