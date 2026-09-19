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
 * @summary DiagFormat_attribute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-attribute ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class DiagFormat_attribute {
    constructor (
        /**
         * @summary `id`.
         * @public
         * @readonly
         */
        readonly id: OBJECT_IDENTIFIER,
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OPTIONAL<INTEGER>,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: OPTIONAL<INTEGER>,
        /**
         * @summary `term`.
         * @public
         * @readonly
         */
        readonly term: OPTIONAL<Term>
    ) {}

    /**
     * @summary Restructures an object into a DiagFormat_attribute
     * @description
     * 
     * This takes an `object` and converts it to a `DiagFormat_attribute`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DiagFormat_attribute`.
     * @returns {DiagFormat_attribute}
     */
    public static _from_object (_o: { [_K in keyof (DiagFormat_attribute)]: (DiagFormat_attribute)[_K] }): DiagFormat_attribute {
        return new DiagFormat_attribute(_o.id, _o.type_, _o.value, _o.term);
    }


}

/**
 * @summary The Leading Root Component Types of DiagFormat_attribute
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DiagFormat_attribute: $.ComponentSpec[] = [
    new $.ComponentSpec("id", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("type", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("value", true, $.hasTag(_TagClass.context, 3)),
    /* FIXME: term COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of DiagFormat_attribute
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DiagFormat_attribute: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DiagFormat_attribute
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DiagFormat_attribute: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DiagFormat_attribute: $.ASN1Decoder<DiagFormat_attribute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_attribute
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_attribute (el: _Element): DiagFormat_attribute {
    if (!_cached_decoder_for_DiagFormat_attribute) { _cached_decoder_for_DiagFormat_attribute = function (el: _Element): DiagFormat_attribute {
    let id!: OBJECT_IDENTIFIER;
    let type_: OPTIONAL<INTEGER>;
    let value: OPTIONAL<INTEGER>;
    let term: OPTIONAL<Term>;
    const callbacks: $.DecodingMap = {
        "id": (_el: _Element): void => { id = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "type": (_el: _Element): void => { type_ = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "value": (_el: _Element): void => { value = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "term": (_el: _Element): void => { term = $._decode_explicit<Term>(() => _decode_Term)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DiagFormat_attribute,
        _extension_additions_list_spec_for_DiagFormat_attribute,
        _root_component_type_list_2_spec_for_DiagFormat_attribute,
        undefined,
    );
    return new DiagFormat_attribute(
        id,
        type_,
        value,
        term
    );
}; }
    return _cached_decoder_for_DiagFormat_attribute(el);
}

let _cached_encoder_for_DiagFormat_attribute: $.ASN1Encoder<DiagFormat_attribute> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_attribute into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_attribute, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_attribute (value: DiagFormat_attribute, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_attribute) { _cached_encoder_for_DiagFormat_attribute = function (value: DiagFormat_attribute, elGetter: $.ASN1Encoder<DiagFormat_attribute>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.id, $.BER),
            /* IF_ABSENT  */ ((value.type_ === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.type_, $.BER)),
            /* IF_ABSENT  */ ((value.value === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.value, $.BER)),
            /* IF_ABSENT  */ ((value.term === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_Term, $.BER)(value.term, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DiagFormat_attribute(value, elGetter);
}


/* eslint-enable */
