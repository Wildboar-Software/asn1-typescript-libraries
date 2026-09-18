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
import { BlockParamOffer_capability, BlockParamOffer_capability_yes /* IMPORTED_LONG_NAMED_BIT */, yes /* IMPORTED_SHORT_NAMED_BIT */, BlockParamOffer_capability_no /* IMPORTED_LONG_NAMED_BIT */, no /* IMPORTED_SHORT_NAMED_BIT */, _decode_BlockParamOffer_capability, _encode_BlockParamOffer_capability } from "../CDS/BlockParamOffer-capability.ta.mjs";
// export { BlockParamOffer_capability, BlockParamOffer_capability_yes /* IMPORTED_LONG_NAMED_BIT */, yes /* IMPORTED_SHORT_NAMED_BIT */, BlockParamOffer_capability_no /* IMPORTED_LONG_NAMED_BIT */, no /* IMPORTED_SHORT_NAMED_BIT */, _decode_BlockParamOffer_capability, _encode_BlockParamOffer_capability } from "../CDS/BlockParamOffer-capability.ta.mjs";
import { BlockParamOffer_bound, _decode_BlockParamOffer_bound, _encode_BlockParamOffer_bound } from "../CDS/BlockParamOffer-bound.ta.mjs";
// export { BlockParamOffer_bound, _decode_BlockParamOffer_bound, _encode_BlockParamOffer_bound } from "../CDS/BlockParamOffer-bound.ta.mjs";


/**
 * @summary BlockParamOffer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BlockParamOffer ::= SEQUENCE {
 *     capability  [0] IMPLICIT BIT STRING { yes (0), no (1) } OPTIONAL,
 *     bound       [1] IMPLICIT SEQUENCE {
 *         unbounded NULL OPTIONAL,
 *         limit G.IntegerOffer OPTIONAL
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class BlockParamOffer {
    constructor (
        /**
         * @summary `capability`.
         * @public
         * @readonly
         */
        readonly capability: OPTIONAL<BlockParamOffer_capability>,
        /**
         * @summary `bound`.
         * @public
         * @readonly
         */
        readonly bound: OPTIONAL<BlockParamOffer_bound>
    ) {}

    /**
     * @summary Restructures an object into a BlockParamOffer
     * @description
     * 
     * This takes an `object` and converts it to a `BlockParamOffer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BlockParamOffer`.
     * @returns {BlockParamOffer}
     */
    public static _from_object (_o: { [_K in keyof (BlockParamOffer)]: (BlockParamOffer)[_K] }): BlockParamOffer {
        return new BlockParamOffer(_o.capability, _o.bound);
    }


}

/**
 * @summary The Leading Root Component Types of BlockParamOffer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BlockParamOffer: $.ComponentSpec[] = [
    new $.ComponentSpec("capability", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("bound", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of BlockParamOffer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BlockParamOffer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BlockParamOffer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BlockParamOffer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BlockParamOffer: $.ASN1Decoder<BlockParamOffer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BlockParamOffer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BlockParamOffer (el: _Element): BlockParamOffer {
    if (!_cached_decoder_for_BlockParamOffer) { _cached_decoder_for_BlockParamOffer = function (el: _Element): BlockParamOffer {
    let capability: OPTIONAL<BlockParamOffer_capability>;
    let bound: OPTIONAL<BlockParamOffer_bound>;
    const callbacks: $.DecodingMap = {
        "capability": (_el: _Element): void => { capability = $._decode_implicit<BlockParamOffer_capability>(() => _decode_BlockParamOffer_capability)(_el); },
        "bound": (_el: _Element): void => { bound = $._decode_implicit<BlockParamOffer_bound>(() => _decode_BlockParamOffer_bound)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BlockParamOffer,
        _extension_additions_list_spec_for_BlockParamOffer,
        _root_component_type_list_2_spec_for_BlockParamOffer,
        undefined,
    );
    return new BlockParamOffer(
        capability,
        bound
    );
}; }
    return _cached_decoder_for_BlockParamOffer(el);
}

let _cached_encoder_for_BlockParamOffer: $.ASN1Encoder<BlockParamOffer> | null = null;

/**
 * @summary Encodes a(n) BlockParamOffer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BlockParamOffer, encoded as an ASN.1 Element.
 */
export
function _encode_BlockParamOffer (value: BlockParamOffer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BlockParamOffer) { _cached_encoder_for_BlockParamOffer = function (value: BlockParamOffer, elGetter: $.ASN1Encoder<BlockParamOffer>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.capability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_BlockParamOffer_capability, $.BER)(value.capability, $.BER)),
            /* IF_ABSENT  */ ((value.bound === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_BlockParamOffer_bound, $.BER)(value.bound, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BlockParamOffer(value, elGetter);
}


/* eslint-enable */
