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



/**
 * @summary ExtensionParameter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtensionParameter ::= SEQUENCE{
 *         assignmentAuthority OBJECT IDENTIFIER,
 *         parameters ANY DEFINED BY assignmentAuthority
 *     }
 * ```
 * 
 * @class
 */
export
class ExtensionParameter {
    constructor (
        /**
         * @summary `assignmentAuthority`.
         * @public
         * @readonly
         */
        readonly assignmentAuthority: OBJECT_IDENTIFIER,
// FIXME: readonly parameters: AnyType
    ) {}

    /**
     * @summary Restructures an object into a ExtensionParameter
     * @description
     * 
     * This takes an `object` and converts it to a `ExtensionParameter`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtensionParameter`.
     * @returns {ExtensionParameter}
     */
    public static _from_object (_o: { [_K in keyof (ExtensionParameter)]: (ExtensionParameter)[_K] }): ExtensionParameter {
        return new ExtensionParameter(_o.assignmentAuthority, _o.);
    }


}

/**
 * @summary The Leading Root Component Types of ExtensionParameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExtensionParameter: $.ComponentSpec[] = [
    new $.ComponentSpec("assignmentAuthority", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("parameters", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of ExtensionParameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExtensionParameter: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExtensionParameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExtensionParameter: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExtensionParameter: $.ASN1Decoder<ExtensionParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionParameter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtensionParameter (el: _Element): ExtensionParameter {
    if (!_cached_decoder_for_ExtensionParameter) { _cached_decoder_for_ExtensionParameter = function (el: _Element): ExtensionParameter {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ExtensionParameter contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "assignmentAuthority";
    sequence[1].name = "parameters";
    let assignmentAuthority!: OBJECT_IDENTIFIER;
    let parameters!: /* FIXME: parameters COULD_NOT_COMPILE_TYPE */;
    assignmentAuthority = $._decodeObjectIdentifier(sequence[0]);
    parameters = $._decodeAny(sequence[1]);
    return new ExtensionParameter(
        assignmentAuthority,
        parameters,

    );
}; }
    return _cached_decoder_for_ExtensionParameter(el);
}

let _cached_encoder_for_ExtensionParameter: $.ASN1Encoder<ExtensionParameter> | null = null;

/**
 * @summary Encodes a(n) ExtensionParameter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionParameter, encoded as an ASN.1 Element.
 */
export
function _encode_ExtensionParameter (value: ExtensionParameter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtensionParameter) { _cached_encoder_for_ExtensionParameter = function (value: ExtensionParameter, elGetter: $.ASN1Encoder<ExtensionParameter>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.assignmentAuthority, $.BER),
            /* REQUIRED   */ $._encodeAny(value.parameters, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ExtensionParameter(value, elGetter);
}


/* eslint-enable */
