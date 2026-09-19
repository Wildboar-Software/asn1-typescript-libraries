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
import { ParameterType, ParameterType_null /* IMPORTED_LONG_NAMED_INTEGER */, null_ /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterType_integer /* IMPORTED_LONG_NAMED_INTEGER */, integer /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterType_real /* IMPORTED_LONG_NAMED_INTEGER */, real /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterType_string /* IMPORTED_LONG_NAMED_INTEGER */, string_ /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterType_boolean /* IMPORTED_LONG_NAMED_INTEGER */, boolean_ /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterType_trigger /* IMPORTED_LONG_NAMED_INTEGER */, trigger /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterType_enum /* IMPORTED_LONG_NAMED_INTEGER */, enum_ /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterType_octets /* IMPORTED_LONG_NAMED_INTEGER */, octets /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ParameterType, _encode_ParameterType } from "../EmberPlus-Glow/ParameterType.ta.mjs";
// export { ParameterType, ParameterType_null /* IMPORTED_LONG_NAMED_INTEGER */, null_ /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterType_integer /* IMPORTED_LONG_NAMED_INTEGER */, integer /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterType_real /* IMPORTED_LONG_NAMED_INTEGER */, real /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterType_string /* IMPORTED_LONG_NAMED_INTEGER */, string_ /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterType_boolean /* IMPORTED_LONG_NAMED_INTEGER */, boolean_ /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterType_trigger /* IMPORTED_LONG_NAMED_INTEGER */, trigger /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterType_enum /* IMPORTED_LONG_NAMED_INTEGER */, enum_ /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterType_octets /* IMPORTED_LONG_NAMED_INTEGER */, octets /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ParameterType, _encode_ParameterType } from "../EmberPlus-Glow/ParameterType.ta.mjs";
import { EmberString, _decode_EmberString, _encode_EmberString } from "../EmberPlus-Glow/EmberString.ta.mjs";
// export { EmberString, _decode_EmberString, _encode_EmberString } from "../EmberPlus-Glow/EmberString.ta.mjs";


/**
 * @summary TupleItemDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TupleItemDescription ::= [APPLICATION 21] IMPLICIT
 *         SEQUENCE {
 *             type     [0] ParameterType,
 *             name     [1] EmberString            OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class TupleItemDescription {
    constructor (
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: ParameterType,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<EmberString>
    ) {}

    /**
     * @summary Restructures an object into a TupleItemDescription
     * @description
     * 
     * This takes an `object` and converts it to a `TupleItemDescription`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TupleItemDescription`.
     * @returns {TupleItemDescription}
     */
    public static _from_object (_o: { [_K in keyof (TupleItemDescription)]: (TupleItemDescription)[_K] }): TupleItemDescription {
        return new TupleItemDescription(_o.type_, _o.name);
    }


}

/**
 * @summary The Leading Root Component Types of TupleItemDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TupleItemDescription: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("name", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TupleItemDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TupleItemDescription: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TupleItemDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TupleItemDescription: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TupleItemDescription: $.ASN1Decoder<TupleItemDescription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TupleItemDescription
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TupleItemDescription (el: _Element): TupleItemDescription {
    if (!_cached_decoder_for_TupleItemDescription) { _cached_decoder_for_TupleItemDescription = $._decode_implicit<TupleItemDescription>(() => function (el: _Element): TupleItemDescription {
    let type_!: ParameterType;
    let name: OPTIONAL<EmberString>;
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = $._decode_explicit<ParameterType>(() => _decode_ParameterType)(_el); },
        "name": (_el: _Element): void => { name = $._decode_explicit<EmberString>(() => _decode_EmberString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TupleItemDescription,
        _extension_additions_list_spec_for_TupleItemDescription,
        _root_component_type_list_2_spec_for_TupleItemDescription,
        undefined,
    );
    return new TupleItemDescription(
        type_,
        name
    );
}); }
    return _cached_decoder_for_TupleItemDescription(el);
}

let _cached_encoder_for_TupleItemDescription: $.ASN1Encoder<TupleItemDescription> | null = null;

/**
 * @summary Encodes a(n) TupleItemDescription into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TupleItemDescription, encoded as an ASN.1 Element.
 */
export
function _encode_TupleItemDescription (value: TupleItemDescription, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TupleItemDescription) { _cached_encoder_for_TupleItemDescription = $._encode_implicit(_TagClass.application, 21, () => function (value: TupleItemDescription, elGetter: $.ASN1Encoder<TupleItemDescription>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ParameterType, $.BER)(value.type_, $.BER),
            /* IF_ABSENT  */ ((value.name === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_EmberString, $.BER)(value.name, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_TupleItemDescription(value, elGetter);
}


/* eslint-enable */
