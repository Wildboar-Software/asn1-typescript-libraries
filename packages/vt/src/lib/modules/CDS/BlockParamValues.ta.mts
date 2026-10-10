/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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
import { BlockParamValues_bound, _decode_BlockParamValues_bound, _encode_BlockParamValues_bound } from "../CDS/BlockParamValues-bound.ta.mjs";


/**
 * @summary BlockParamValues
 * @description
 *
 * Selected block-definition-capability and `b-bound`. `capability`
 * `true` = `"yes"`; `false` or absent = `"no"`. ISO/IEC 9040:1997
 * §18.2.1; ISO/IEC 9041-1:1997 §12.3.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BlockParamValues ::= SEQUENCE {
 *     capability  [0] IMPLICIT BOOLEAN OPTIONAL,
 *     bound       [1] CHOICE { unbounded NULL, limit INTEGER } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class BlockParamValues {
    constructor (
        /**
         * @summary `capability`.
         * @description
         * Selected `block-definition-capability`. `true` = `"yes"`;
         * `false` or absent = `"no"`. ISO/IEC 9040:1997 §18.1,
         * §18.2.1.
         * @public
         * @readonly
         */
        readonly capability: OPTIONAL<BOOLEAN>,
        /**
         * @summary `bound`.
         * @description
         * Selected `b-bound` (max blocks per Y-array; default 1).
         * ISO/IEC 9040:1997 §18.2.1.
         * @public
         * @readonly
         */
        readonly bound: OPTIONAL<BlockParamValues_bound>
    ) {}

    /**
     * @summary Restructures an object into a BlockParamValues
     * @description
     * 
     * This takes an `object` and converts it to a `BlockParamValues`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BlockParamValues`.
     * @returns {BlockParamValues}
     */
    public static _from_object (_o: { [_K in keyof (BlockParamValues)]: (BlockParamValues)[_K] }): BlockParamValues {
        return new BlockParamValues(_o.capability, _o.bound);
    }


}

/**
 * @summary The Leading Root Component Types of BlockParamValues
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BlockParamValues: $.ComponentSpec[] = [
    new $.ComponentSpec("capability", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("bound", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of BlockParamValues
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BlockParamValues: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BlockParamValues
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BlockParamValues: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BlockParamValues: $.ASN1Decoder<BlockParamValues> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BlockParamValues
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BlockParamValues (el: _Element): BlockParamValues {
    if (!_cached_decoder_for_BlockParamValues) { _cached_decoder_for_BlockParamValues = function (el: _Element): BlockParamValues {
    let capability: OPTIONAL<BOOLEAN>;
    let bound: OPTIONAL<BlockParamValues_bound>;
    const callbacks: $.DecodingMap = {
        "capability": (_el: _Element): void => { capability = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "bound": (_el: _Element): void => { bound = $._decode_explicit<BlockParamValues_bound>(() => _decode_BlockParamValues_bound)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BlockParamValues,
        _extension_additions_list_spec_for_BlockParamValues,
        _root_component_type_list_2_spec_for_BlockParamValues,
        undefined,
    );
    return new BlockParamValues(
        capability,
        bound
    );
}; }
    return _cached_decoder_for_BlockParamValues(el);
}

let _cached_encoder_for_BlockParamValues: $.ASN1Encoder<BlockParamValues> | null = null;

/**
 * @summary Encodes a(n) BlockParamValues into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BlockParamValues, encoded as an ASN.1 Element.
 */
export
function _encode_BlockParamValues (value: BlockParamValues, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BlockParamValues) { _cached_encoder_for_BlockParamValues = function (value: BlockParamValues): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.capability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.capability, $.BER)),
            /* IF_ABSENT  */ ((value.bound === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_BlockParamValues_bound, $.BER)(value.bound, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BlockParamValues(value, elGetter);
}


/* eslint-enable */
