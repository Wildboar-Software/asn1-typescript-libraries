/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AreaOfInterestTAIList, _decode_AreaOfInterestTAIList, _encode_AreaOfInterestTAIList } from "../TS33128Payloads/AreaOfInterestTAIList.ta.mjs";
// export { AreaOfInterestTAIList, _decode_AreaOfInterestTAIList, _encode_AreaOfInterestTAIList } from "../TS33128Payloads/AreaOfInterestTAIList.ta.mjs";
import { AreaOfInterestCellList, _decode_AreaOfInterestCellList, _encode_AreaOfInterestCellList } from "../TS33128Payloads/AreaOfInterestCellList.ta.mjs";
// export { AreaOfInterestCellList, _decode_AreaOfInterestCellList, _encode_AreaOfInterestCellList } from "../TS33128Payloads/AreaOfInterestCellList.ta.mjs";
import { AreaOfInterestRANNodeList, _decode_AreaOfInterestRANNodeList, _encode_AreaOfInterestRANNodeList } from "../TS33128Payloads/AreaOfInterestRANNodeList.ta.mjs";
// export { AreaOfInterestRANNodeList, _decode_AreaOfInterestRANNodeList, _encode_AreaOfInterestRANNodeList } from "../TS33128Payloads/AreaOfInterestRANNodeList.ta.mjs";


/**
 * @summary AreaOfInterest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AreaOfInterest ::= SEQUENCE
 * {
 *     areaOfInterestTAIList     [1] AreaOfInterestTAIList OPTIONAL,
 *     areaOfInterestCellList    [2] AreaOfInterestCellList OPTIONAL,
 *     areaOfInterestRANNodeList [3] AreaOfInterestRANNodeList OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AreaOfInterest {
    constructor (
        /**
         * @summary `areaOfInterestTAIList`.
         * @public
         * @readonly
         */
        readonly areaOfInterestTAIList: OPTIONAL<AreaOfInterestTAIList>,
        /**
         * @summary `areaOfInterestCellList`.
         * @public
         * @readonly
         */
        readonly areaOfInterestCellList: OPTIONAL<AreaOfInterestCellList>,
        /**
         * @summary `areaOfInterestRANNodeList`.
         * @public
         * @readonly
         */
        readonly areaOfInterestRANNodeList: OPTIONAL<AreaOfInterestRANNodeList>
    ) {}

    /**
     * @summary Restructures an object into a AreaOfInterest
     * @description
     * 
     * This takes an `object` and converts it to a `AreaOfInterest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AreaOfInterest`.
     * @returns {AreaOfInterest}
     */
    public static _from_object (_o: { [_K in keyof (AreaOfInterest)]: (AreaOfInterest)[_K] }): AreaOfInterest {
        return new AreaOfInterest(_o.areaOfInterestTAIList, _o.areaOfInterestCellList, _o.areaOfInterestRANNodeList);
    }


}

/**
 * @summary The Leading Root Component Types of AreaOfInterest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AreaOfInterest: $.ComponentSpec[] = [
    new $.ComponentSpec("areaOfInterestTAIList", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("areaOfInterestCellList", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("areaOfInterestRANNodeList", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of AreaOfInterest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AreaOfInterest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AreaOfInterest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AreaOfInterest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AreaOfInterest: $.ASN1Decoder<AreaOfInterest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AreaOfInterest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AreaOfInterest (el: _Element): AreaOfInterest {
    if (!_cached_decoder_for_AreaOfInterest) { _cached_decoder_for_AreaOfInterest = function (el: _Element): AreaOfInterest {
    let areaOfInterestTAIList: OPTIONAL<AreaOfInterestTAIList>;
    let areaOfInterestCellList: OPTIONAL<AreaOfInterestCellList>;
    let areaOfInterestRANNodeList: OPTIONAL<AreaOfInterestRANNodeList>;
    const callbacks: $.DecodingMap = {
        "areaOfInterestTAIList": (_el: _Element): void => { areaOfInterestTAIList = $._decode_implicit<AreaOfInterestTAIList>(() => _decode_AreaOfInterestTAIList)(_el); },
        "areaOfInterestCellList": (_el: _Element): void => { areaOfInterestCellList = $._decode_implicit<AreaOfInterestCellList>(() => _decode_AreaOfInterestCellList)(_el); },
        "areaOfInterestRANNodeList": (_el: _Element): void => { areaOfInterestRANNodeList = $._decode_implicit<AreaOfInterestRANNodeList>(() => _decode_AreaOfInterestRANNodeList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AreaOfInterest,
        _extension_additions_list_spec_for_AreaOfInterest,
        _root_component_type_list_2_spec_for_AreaOfInterest,
        undefined,
    );
    return new AreaOfInterest(
        areaOfInterestTAIList,
        areaOfInterestCellList,
        areaOfInterestRANNodeList
    );
}; }
    return _cached_decoder_for_AreaOfInterest(el);
}

let _cached_encoder_for_AreaOfInterest: $.ASN1Encoder<AreaOfInterest> | null = null;

/**
 * @summary Encodes a(n) AreaOfInterest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AreaOfInterest, encoded as an ASN.1 Element.
 */
export
function _encode_AreaOfInterest (value: AreaOfInterest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AreaOfInterest) { _cached_encoder_for_AreaOfInterest = function (value: AreaOfInterest, elGetter: $.ASN1Encoder<AreaOfInterest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.areaOfInterestTAIList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AreaOfInterestTAIList, $.BER)(value.areaOfInterestTAIList, $.BER)),
            /* IF_ABSENT  */ ((value.areaOfInterestCellList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AreaOfInterestCellList, $.BER)(value.areaOfInterestCellList, $.BER)),
            /* IF_ABSENT  */ ((value.areaOfInterestRANNodeList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_AreaOfInterestRANNodeList, $.BER)(value.areaOfInterestRANNodeList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AreaOfInterest(value, elGetter);
}


/* eslint-enable */
