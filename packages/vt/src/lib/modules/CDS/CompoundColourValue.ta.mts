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
import { ColourAssignment, _decode_ColourAssignment, _encode_ColourAssignment } from "../CDS/ColourAssignment.ta.mjs";
// export { ColourAssignment, _decode_ColourAssignment, _encode_ColourAssignment } from "../CDS/ColourAssignment.ta.mjs";


/**
 * @summary CompoundColourValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompoundColourValue ::= SEQUENCE {
 *     capability  [0] IMPLICIT INTEGER OPTIONAL,
 *     assignments [1] IMPLICIT SEQUENCE OF ColourAssignment OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CompoundColourValue {
    constructor (
        /**
         * @summary `capability`.
         * @public
         * @readonly
         */
        readonly capability: OPTIONAL<INTEGER>,
        /**
         * @summary `assignments`.
         * @public
         * @readonly
         */
        readonly assignments: OPTIONAL<ColourAssignment[]>
    ) {}

    /**
     * @summary Restructures an object into a CompoundColourValue
     * @description
     * 
     * This takes an `object` and converts it to a `CompoundColourValue`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompoundColourValue`.
     * @returns {CompoundColourValue}
     */
    public static _from_object (_o: { [_K in keyof (CompoundColourValue)]: (CompoundColourValue)[_K] }): CompoundColourValue {
        return new CompoundColourValue(_o.capability, _o.assignments);
    }


}

/**
 * @summary The Leading Root Component Types of CompoundColourValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CompoundColourValue: $.ComponentSpec[] = [
    new $.ComponentSpec("capability", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("assignments", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CompoundColourValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CompoundColourValue: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CompoundColourValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CompoundColourValue: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CompoundColourValue: $.ASN1Decoder<CompoundColourValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompoundColourValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompoundColourValue (el: _Element): CompoundColourValue {
    if (!_cached_decoder_for_CompoundColourValue) { _cached_decoder_for_CompoundColourValue = function (el: _Element): CompoundColourValue {
    let capability: OPTIONAL<INTEGER>;
    let assignments: OPTIONAL<ColourAssignment[]>;
    const callbacks: $.DecodingMap = {
        "capability": (_el: _Element): void => { capability = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "assignments": (_el: _Element): void => { assignments = $._decode_implicit<ColourAssignment[]>(() => $._decodeSequenceOf<ColourAssignment>(() => _decode_ColourAssignment))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CompoundColourValue,
        _extension_additions_list_spec_for_CompoundColourValue,
        _root_component_type_list_2_spec_for_CompoundColourValue,
        undefined,
    );
    return new CompoundColourValue(
        capability,
        assignments
    );
}; }
    return _cached_decoder_for_CompoundColourValue(el);
}

let _cached_encoder_for_CompoundColourValue: $.ASN1Encoder<CompoundColourValue> | null = null;

/**
 * @summary Encodes a(n) CompoundColourValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompoundColourValue, encoded as an ASN.1 Element.
 */
export
function _encode_CompoundColourValue (value: CompoundColourValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompoundColourValue) { _cached_encoder_for_CompoundColourValue = function (value: CompoundColourValue, elGetter: $.ASN1Encoder<CompoundColourValue>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.capability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.capability, $.BER)),
            /* IF_ABSENT  */ ((value.assignments === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ColourAssignment>(() => _encode_ColourAssignment, $.BER), $.BER)(value.assignments, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CompoundColourValue(value, elGetter);
}


/* eslint-enable */
