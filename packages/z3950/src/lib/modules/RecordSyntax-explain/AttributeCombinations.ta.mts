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
import { AttributeCombination, _decode_AttributeCombination, _encode_AttributeCombination } from "../RecordSyntax-explain/AttributeCombination.ta.mjs";
// export { AttributeCombination, _decode_AttributeCombination, _encode_AttributeCombination } from "../RecordSyntax-explain/AttributeCombination.ta.mjs";


/**
 * @summary AttributeCombinations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeCombinations ::= SEQUENCE {
 *   defaultAttributeSet     [0] IMPLICIT AttributeSetId,
 *                                 -- Default for the combinations. Also probably
 *                                 -- a good choice for the default
 *                                 -- in searches, but that isn't required.
 *   legalCombinations       [1] IMPLICIT SEQUENCE OF AttributeCombination }
 * ```
 * 
 * @class
 */
export
class AttributeCombinations {
    constructor (
        /**
         * @summary `defaultAttributeSet`.
         * @public
         * @readonly
         */
        readonly defaultAttributeSet: AttributeSetId,
        /**
         * @summary `legalCombinations`.
         * @public
         * @readonly
         */
        readonly legalCombinations: AttributeCombination[]
    ) {}

    /**
     * @summary Restructures an object into a AttributeCombinations
     * @description
     * 
     * This takes an `object` and converts it to a `AttributeCombinations`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeCombinations`.
     * @returns {AttributeCombinations}
     */
    public static _from_object (_o: { [_K in keyof (AttributeCombinations)]: (AttributeCombinations)[_K] }): AttributeCombinations {
        return new AttributeCombinations(_o.defaultAttributeSet, _o.legalCombinations);
    }


}

/**
 * @summary The Leading Root Component Types of AttributeCombinations
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttributeCombinations: $.ComponentSpec[] = [
    /* FIXME: defaultAttributeSet COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("legalCombinations", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of AttributeCombinations
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttributeCombinations: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttributeCombinations
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttributeCombinations: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttributeCombinations: $.ASN1Decoder<AttributeCombinations> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCombinations
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeCombinations (el: _Element): AttributeCombinations {
    if (!_cached_decoder_for_AttributeCombinations) { _cached_decoder_for_AttributeCombinations = function (el: _Element): AttributeCombinations {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AttributeCombinations contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "defaultAttributeSet";
    sequence[1].name = "legalCombinations";
    let defaultAttributeSet!: AttributeSetId;
    let legalCombinations!: AttributeCombination[];
    defaultAttributeSet = $._decode_implicit<AttributeSetId>(() => _decode_AttributeSetId)(sequence[0]);
    legalCombinations = $._decode_implicit<AttributeCombination[]>(() => $._decodeSequenceOf<AttributeCombination>(() => _decode_AttributeCombination))(sequence[1]);
    return new AttributeCombinations(
        defaultAttributeSet,
        legalCombinations,

    );
}; }
    return _cached_decoder_for_AttributeCombinations(el);
}

let _cached_encoder_for_AttributeCombinations: $.ASN1Encoder<AttributeCombinations> | null = null;

/**
 * @summary Encodes a(n) AttributeCombinations into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCombinations, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeCombinations (value: AttributeCombinations, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeCombinations) { _cached_encoder_for_AttributeCombinations = function (value: AttributeCombinations, elGetter: $.ASN1Encoder<AttributeCombinations>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AttributeSetId, $.BER)(value.defaultAttributeSet, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<AttributeCombination>(() => _encode_AttributeCombination, $.BER), $.BER)(value.legalCombinations, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AttributeCombinations(value, elGetter);
}


/* eslint-enable */
