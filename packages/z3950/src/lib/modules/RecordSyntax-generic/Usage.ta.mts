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
import { Usage_type, Usage_type_redistributable /* IMPORTED_LONG_NAMED_INTEGER */, redistributable /* IMPORTED_SHORT_NAMED_INTEGER */, Usage_type_restricted /* IMPORTED_LONG_NAMED_INTEGER */, restricted /* IMPORTED_SHORT_NAMED_INTEGER */, Usage_type_licensePointer /* IMPORTED_LONG_NAMED_INTEGER */, licensePointer /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Usage_type, _encode_Usage_type } from "../RecordSyntax-generic/Usage-type.ta.mjs";
// export { Usage_type, Usage_type_redistributable /* IMPORTED_LONG_NAMED_INTEGER */, redistributable /* IMPORTED_SHORT_NAMED_INTEGER */, Usage_type_restricted /* IMPORTED_LONG_NAMED_INTEGER */, restricted /* IMPORTED_SHORT_NAMED_INTEGER */, Usage_type_licensePointer /* IMPORTED_LONG_NAMED_INTEGER */, licensePointer /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Usage_type, _encode_Usage_type } from "../RecordSyntax-generic/Usage-type.ta.mjs";


/**
 * @summary Usage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Usage ::= SEQUENCE   {
 *    type            [1] IMPLICIT INTEGER{
 *                           redistributable    (1),    
 *                              -- Element is freely redistributable.
 *                           restricted         (2),    
 *                              -- Restriction contains statement.
 *                           licensePointer     (3)    
 *                              -- Restriction contains license pointer.
 *                           },
 *    restriction     [2] IMPLICIT InternationalString OPTIONAL}
 * ```
 * 
 * @class
 */
export
class Usage {
    constructor (
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: Usage_type,
        /**
         * @summary `restriction`.
         * @public
         * @readonly
         */
        readonly restriction: OPTIONAL<InternationalString>
    ) {}

    /**
     * @summary Restructures an object into a Usage
     * @description
     * 
     * This takes an `object` and converts it to a `Usage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Usage`.
     * @returns {Usage}
     */
    public static _from_object (_o: { [_K in keyof (Usage)]: (Usage)[_K] }): Usage {
        return new Usage(_o.type_, _o.restriction);
    }


}

/**
 * @summary The Leading Root Component Types of Usage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Usage: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.context, 1)),
    /* FIXME: restriction COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of Usage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Usage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Usage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Usage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Usage: $.ASN1Decoder<Usage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Usage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Usage (el: _Element): Usage {
    if (!_cached_decoder_for_Usage) { _cached_decoder_for_Usage = function (el: _Element): Usage {
    let type_!: Usage_type;
    let restriction: OPTIONAL<InternationalString>;
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = $._decode_implicit<Usage_type>(() => _decode_Usage_type)(_el); },
        "restriction": (_el: _Element): void => { restriction = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Usage,
        _extension_additions_list_spec_for_Usage,
        _root_component_type_list_2_spec_for_Usage,
        undefined,
    );
    return new Usage(
        type_,
        restriction
    );
}; }
    return _cached_decoder_for_Usage(el);
}

let _cached_encoder_for_Usage: $.ASN1Encoder<Usage> | null = null;

/**
 * @summary Encodes a(n) Usage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Usage, encoded as an ASN.1 Element.
 */
export
function _encode_Usage (value: Usage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Usage) { _cached_encoder_for_Usage = function (value: Usage, elGetter: $.ASN1Encoder<Usage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Usage_type, $.BER)(value.type_, $.BER),
            /* IF_ABSENT  */ ((value.restriction === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.restriction, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Usage(value, elGetter);
}


/* eslint-enable */
