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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { Named_Variable_Definition, _decode_Named_Variable_Definition, _encode_Named_Variable_Definition } from "../MMS-SCI-Module-1/Named-Variable-Definition.ta.mjs";
// export { Named_Variable_Definition, _decode_Named_Variable_Definition, _encode_Named_Variable_Definition } from "../MMS-SCI-Module-1/Named-Variable-Definition.ta.mjs";


/**
 * @summary Nullable_Named_Variable_instance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Nullable-Named-Variable-instance ::= SEQUENCE {
 *     name            [0] ObjectName OPTIONAL,
 *     definition      Named-Variable-Definition OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Nullable_Named_Variable_instance {
    constructor (
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<ObjectName>,
        /**
         * @summary `definition`.
         * @public
         * @readonly
         */
        readonly definition: OPTIONAL<Named_Variable_Definition>
    ) {}

    /**
     * @summary Restructures an object into a Nullable_Named_Variable_instance
     * @description
     * 
     * This takes an `object` and converts it to a `Nullable_Named_Variable_instance`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Nullable_Named_Variable_instance`.
     * @returns {Nullable_Named_Variable_instance}
     */
    public static _from_object (_o: { [_K in keyof (Nullable_Named_Variable_instance)]: (Nullable_Named_Variable_instance)[_K] }): Nullable_Named_Variable_instance {
        return new Nullable_Named_Variable_instance(_o.name, _o.definition);
    }


}

/**
 * @summary The Leading Root Component Types of Nullable_Named_Variable_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Nullable_Named_Variable_instance: $.ComponentSpec[] = [
    new $.ComponentSpec("name", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("definition", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of Nullable_Named_Variable_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Nullable_Named_Variable_instance: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Nullable_Named_Variable_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Nullable_Named_Variable_instance: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Nullable_Named_Variable_instance: $.ASN1Decoder<Nullable_Named_Variable_instance> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Nullable_Named_Variable_instance
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Nullable_Named_Variable_instance (el: _Element): Nullable_Named_Variable_instance {
    if (!_cached_decoder_for_Nullable_Named_Variable_instance) { _cached_decoder_for_Nullable_Named_Variable_instance = function (el: _Element): Nullable_Named_Variable_instance {
    let name: OPTIONAL<ObjectName>;
    let definition: OPTIONAL<Named_Variable_Definition>;
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "definition": (_el: _Element): void => { definition = _decode_Named_Variable_Definition(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Nullable_Named_Variable_instance,
        _extension_additions_list_spec_for_Nullable_Named_Variable_instance,
        _root_component_type_list_2_spec_for_Nullable_Named_Variable_instance,
        undefined,
    );
    return new Nullable_Named_Variable_instance(
        name,
        definition
    );
}; }
    return _cached_decoder_for_Nullable_Named_Variable_instance(el);
}

let _cached_encoder_for_Nullable_Named_Variable_instance: $.ASN1Encoder<Nullable_Named_Variable_instance> | null = null;

/**
 * @summary Encodes a(n) Nullable_Named_Variable_instance into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Nullable_Named_Variable_instance, encoded as an ASN.1 Element.
 */
export
function _encode_Nullable_Named_Variable_instance (value: Nullable_Named_Variable_instance, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Nullable_Named_Variable_instance) { _cached_encoder_for_Nullable_Named_Variable_instance = function (value: Nullable_Named_Variable_instance, elGetter: $.ASN1Encoder<Nullable_Named_Variable_instance>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.name === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.name, $.BER)),
            /* IF_ABSENT  */ ((value.definition === undefined) ? undefined : _encode_Named_Variable_Definition(value.definition, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Nullable_Named_Variable_instance(value, elGetter);
}


/* eslint-enable */
