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
 * @summary BlockParamIdent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BlockParamIdent ::= SEQUENCE {
 *     capability [0] IMPLICIT NULL OPTIONAL,
 *     bound      [1] IMPLICIT NULL OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class BlockParamIdent {
    constructor (
        /**
         * @summary `capability`.
         * @public
         * @readonly
         */
        readonly capability: OPTIONAL<NULL>,
        /**
         * @summary `bound`.
         * @public
         * @readonly
         */
        readonly bound: OPTIONAL<NULL>
    ) {}

    /**
     * @summary Restructures an object into a BlockParamIdent
     * @description
     * 
     * This takes an `object` and converts it to a `BlockParamIdent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BlockParamIdent`.
     * @returns {BlockParamIdent}
     */
    public static _from_object (_o: { [_K in keyof (BlockParamIdent)]: (BlockParamIdent)[_K] }): BlockParamIdent {
        return new BlockParamIdent(_o.capability, _o.bound);
    }


}

/**
 * @summary The Leading Root Component Types of BlockParamIdent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BlockParamIdent: $.ComponentSpec[] = [
    new $.ComponentSpec("capability", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("bound", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of BlockParamIdent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BlockParamIdent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BlockParamIdent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BlockParamIdent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BlockParamIdent: $.ASN1Decoder<BlockParamIdent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BlockParamIdent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BlockParamIdent (el: _Element): BlockParamIdent {
    if (!_cached_decoder_for_BlockParamIdent) { _cached_decoder_for_BlockParamIdent = function (el: _Element): BlockParamIdent {
    let capability: OPTIONAL<NULL>;
    let bound: OPTIONAL<NULL>;
    const callbacks: $.DecodingMap = {
        "capability": (_el: _Element): void => { capability = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "bound": (_el: _Element): void => { bound = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BlockParamIdent,
        _extension_additions_list_spec_for_BlockParamIdent,
        _root_component_type_list_2_spec_for_BlockParamIdent,
        undefined,
    );
    return new BlockParamIdent(
        capability,
        bound
    );
}; }
    return _cached_decoder_for_BlockParamIdent(el);
}

let _cached_encoder_for_BlockParamIdent: $.ASN1Encoder<BlockParamIdent> | null = null;

/**
 * @summary Encodes a(n) BlockParamIdent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BlockParamIdent, encoded as an ASN.1 Element.
 */
export
function _encode_BlockParamIdent (value: BlockParamIdent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BlockParamIdent) { _cached_encoder_for_BlockParamIdent = function (value: BlockParamIdent, elGetter: $.ASN1Encoder<BlockParamIdent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.capability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.capability, $.BER)),
            /* IF_ABSENT  */ ((value.bound === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.bound, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BlockParamIdent(value, elGetter);
}


/* eslint-enable */
