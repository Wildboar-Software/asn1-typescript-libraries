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
 * @summary FormatSpec
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FormatSpec ::= SEQUENCE {
 *              type     [1] IMPLICIT InternationalString,
 *              size     [2] IMPLICIT INTEGER OPTIONAL,
 *              bestPosn [3] IMPLICIT INTEGER OPTIONAL}
 * ```
 * 
 * @class
 */
export
class FormatSpec {
    constructor (
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: InternationalString,
        /**
         * @summary `size`.
         * @public
         * @readonly
         */
        readonly size: OPTIONAL<INTEGER>,
        /**
         * @summary `bestPosn`.
         * @public
         * @readonly
         */
        readonly bestPosn: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a FormatSpec
     * @description
     * 
     * This takes an `object` and converts it to a `FormatSpec`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FormatSpec`.
     * @returns {FormatSpec}
     */
    public static _from_object (_o: { [_K in keyof (FormatSpec)]: (FormatSpec)[_K] }): FormatSpec {
        return new FormatSpec(_o.type_, _o.size, _o.bestPosn);
    }


}

/**
 * @summary The Leading Root Component Types of FormatSpec
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FormatSpec: $.ComponentSpec[] = [
    /* FIXME: type COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("size", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("bestPosn", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of FormatSpec
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FormatSpec: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FormatSpec
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FormatSpec: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FormatSpec: $.ASN1Decoder<FormatSpec> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FormatSpec
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FormatSpec (el: _Element): FormatSpec {
    if (!_cached_decoder_for_FormatSpec) { _cached_decoder_for_FormatSpec = function (el: _Element): FormatSpec {
    let type_!: InternationalString;
    let size: OPTIONAL<INTEGER>;
    let bestPosn: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "size": (_el: _Element): void => { size = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "bestPosn": (_el: _Element): void => { bestPosn = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FormatSpec,
        _extension_additions_list_spec_for_FormatSpec,
        _root_component_type_list_2_spec_for_FormatSpec,
        undefined,
    );
    return new FormatSpec(
        type_,
        size,
        bestPosn
    );
}; }
    return _cached_decoder_for_FormatSpec(el);
}

let _cached_encoder_for_FormatSpec: $.ASN1Encoder<FormatSpec> | null = null;

/**
 * @summary Encodes a(n) FormatSpec into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FormatSpec, encoded as an ASN.1 Element.
 */
export
function _encode_FormatSpec (value: FormatSpec, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FormatSpec) { _cached_encoder_for_FormatSpec = function (value: FormatSpec, elGetter: $.ASN1Encoder<FormatSpec>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.type_, $.BER),
            /* IF_ABSENT  */ ((value.size === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.size, $.BER)),
            /* IF_ABSENT  */ ((value.bestPosn === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.bestPosn, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FormatSpec(value, elGetter);
}


/* eslint-enable */
