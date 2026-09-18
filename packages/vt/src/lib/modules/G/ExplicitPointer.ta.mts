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
 * @summary ExplicitPointer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExplicitPointer ::= SEQUENCE {
 *     x [0] IMPLICIT INTEGER OPTIONAL,
 *     y [1] IMPLICIT INTEGER OPTIONAL,
 *     z [2] IMPLICIT INTEGER OPTIONAL,
 *     b [3] IMPLICIT INTEGER OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ExplicitPointer {
    constructor (
        /**
         * @summary `x`.
         * @public
         * @readonly
         */
        readonly x: OPTIONAL<INTEGER>,
        /**
         * @summary `y`.
         * @public
         * @readonly
         */
        readonly y: OPTIONAL<INTEGER>,
        /**
         * @summary `z`.
         * @public
         * @readonly
         */
        readonly z: OPTIONAL<INTEGER>,
        /**
         * @summary `b`.
         * @public
         * @readonly
         */
        readonly b: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a ExplicitPointer
     * @description
     * 
     * This takes an `object` and converts it to a `ExplicitPointer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExplicitPointer`.
     * @returns {ExplicitPointer}
     */
    public static _from_object (_o: { [_K in keyof (ExplicitPointer)]: (ExplicitPointer)[_K] }): ExplicitPointer {
        return new ExplicitPointer(_o.x, _o.y, _o.z, _o.b);
    }


}

/**
 * @summary The Leading Root Component Types of ExplicitPointer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExplicitPointer: $.ComponentSpec[] = [
    new $.ComponentSpec("x", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("y", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("z", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("b", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ExplicitPointer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExplicitPointer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExplicitPointer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExplicitPointer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExplicitPointer: $.ASN1Decoder<ExplicitPointer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExplicitPointer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExplicitPointer (el: _Element): ExplicitPointer {
    if (!_cached_decoder_for_ExplicitPointer) { _cached_decoder_for_ExplicitPointer = function (el: _Element): ExplicitPointer {
    let x: OPTIONAL<INTEGER>;
    let y: OPTIONAL<INTEGER>;
    let z: OPTIONAL<INTEGER>;
    let b: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "x": (_el: _Element): void => { x = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "y": (_el: _Element): void => { y = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "z": (_el: _Element): void => { z = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "b": (_el: _Element): void => { b = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExplicitPointer,
        _extension_additions_list_spec_for_ExplicitPointer,
        _root_component_type_list_2_spec_for_ExplicitPointer,
        undefined,
    );
    return new ExplicitPointer(
        x,
        y,
        z,
        b
    );
}; }
    return _cached_decoder_for_ExplicitPointer(el);
}

let _cached_encoder_for_ExplicitPointer: $.ASN1Encoder<ExplicitPointer> | null = null;

/**
 * @summary Encodes a(n) ExplicitPointer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExplicitPointer, encoded as an ASN.1 Element.
 */
export
function _encode_ExplicitPointer (value: ExplicitPointer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExplicitPointer) { _cached_encoder_for_ExplicitPointer = function (value: ExplicitPointer, elGetter: $.ASN1Encoder<ExplicitPointer>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.x === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.x, $.BER)),
            /* IF_ABSENT  */ ((value.y === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.y, $.BER)),
            /* IF_ABSENT  */ ((value.z === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.z, $.BER)),
            /* IF_ABSENT  */ ((value.b === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.b, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ExplicitPointer(value, elGetter);
}


/* eslint-enable */
