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
 * @summary HitVector
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HitVector ::= SEQUENCE{ 
 *                       -- Each hit vector points to a fragment within the
 *                       -- element, via location and/or token.
 *    satisfier                 Term OPTIONAL, -- sourceword, etc.
 *    offsetIntoElement  [1]    IMPLICIT IntUnit OPTIONAL,
 *    length             [2]    IMPLICIT IntUnit OPTIONAL,
 *    hitRank            [3]    IMPLICIT INTEGER OPTIONAL,
 *    targetToken        [4]    IMPLICIT OCTET STRING OPTIONAL
 *                                 -- Origin may use token subsequently within a
 *                                 -- variantRequest (in an elementRequest) to
 *                                 -- retrieve (or to refer to) the fragment.  
 *                      }
 * ```
 * 
 * @class
 */
export
class HitVector {
    constructor (
        /**
         * @summary `satisfier`.
         * @public
         * @readonly
         */
        readonly satisfier: OPTIONAL<Term>,
        /**
         * @summary `offsetIntoElement`.
         * @public
         * @readonly
         */
        readonly offsetIntoElement: OPTIONAL<IntUnit>,
        /**
         * @summary `length`.
         * @public
         * @readonly
         */
        readonly length: OPTIONAL<IntUnit>,
        /**
         * @summary `hitRank`.
         * @public
         * @readonly
         */
        readonly hitRank: OPTIONAL<INTEGER>,
        /**
         * @summary `targetToken`.
         * @public
         * @readonly
         */
        readonly targetToken: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a HitVector
     * @description
     * 
     * This takes an `object` and converts it to a `HitVector`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HitVector`.
     * @returns {HitVector}
     */
    public static _from_object (_o: { [_K in keyof (HitVector)]: (HitVector)[_K] }): HitVector {
        return new HitVector(_o.satisfier, _o.offsetIntoElement, _o.length, _o.hitRank, _o.targetToken);
    }


}

/**
 * @summary The Leading Root Component Types of HitVector
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HitVector: $.ComponentSpec[] = [
    /* FIXME: satisfier COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: offsetIntoElement COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: length COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("hitRank", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("targetToken", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of HitVector
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HitVector: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HitVector
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_HitVector: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HitVector: $.ASN1Decoder<HitVector> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HitVector
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HitVector (el: _Element): HitVector {
    if (!_cached_decoder_for_HitVector) { _cached_decoder_for_HitVector = function (el: _Element): HitVector {
    let satisfier: OPTIONAL<Term>;
    let offsetIntoElement: OPTIONAL<IntUnit>;
    let length: OPTIONAL<IntUnit>;
    let hitRank: OPTIONAL<INTEGER>;
    let targetToken: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "satisfier": (_el: _Element): void => { satisfier = _decode_Term(_el); },
        "offsetIntoElement": (_el: _Element): void => { offsetIntoElement = $._decode_implicit<IntUnit>(() => _decode_IntUnit)(_el); },
        "length": (_el: _Element): void => { length = $._decode_implicit<IntUnit>(() => _decode_IntUnit)(_el); },
        "hitRank": (_el: _Element): void => { hitRank = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "targetToken": (_el: _Element): void => { targetToken = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_HitVector,
        _extension_additions_list_spec_for_HitVector,
        _root_component_type_list_2_spec_for_HitVector,
        undefined,
    );
    return new HitVector(
        satisfier,
        offsetIntoElement,
        length,
        hitRank,
        targetToken
    );
}; }
    return _cached_decoder_for_HitVector(el);
}

let _cached_encoder_for_HitVector: $.ASN1Encoder<HitVector> | null = null;

/**
 * @summary Encodes a(n) HitVector into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HitVector, encoded as an ASN.1 Element.
 */
export
function _encode_HitVector (value: HitVector, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HitVector) { _cached_encoder_for_HitVector = function (value: HitVector, elGetter: $.ASN1Encoder<HitVector>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.satisfier === undefined) ? undefined : _encode_Term(value.satisfier, $.BER)),
            /* IF_ABSENT  */ ((value.offsetIntoElement === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_IntUnit, $.BER)(value.offsetIntoElement, $.BER)),
            /* IF_ABSENT  */ ((value.length === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_IntUnit, $.BER)(value.length, $.BER)),
            /* IF_ABSENT  */ ((value.hitRank === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.hitRank, $.BER)),
            /* IF_ABSENT  */ ((value.targetToken === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.targetToken, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_HitVector(value, elGetter);
}


/* eslint-enable */
