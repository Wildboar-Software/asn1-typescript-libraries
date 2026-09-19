/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
// export { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
import { TermListInfo_termLists_Item, _decode_TermListInfo_termLists_Item, _encode_TermListInfo_termLists_Item } from "../RecordSyntax-explain/TermListInfo-termLists-Item.ta.mjs";
// export { TermListInfo_termLists_Item, _decode_TermListInfo_termLists_Item, _encode_TermListInfo_termLists_Item } from "../RecordSyntax-explain/TermListInfo-termLists-Item.ta.mjs";


/**
 * @summary TermListInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TermListInfo ::= SEQUENCE{
 *   commonInfo    [0]   IMPLICIT CommonInfo OPTIONAL,
 *      -- Key elements follow:
 *   databaseName  [1]   IMPLICIT DatabaseName,
 *      -- Non-key brief elements follow:
 *   termLists     [2] IMPLICIT SEQUENCE OF SEQUENCE{
 *                       name         [1] IMPLICIT InternationalString,
 *                       title        [2] IMPLICIT HumanString OPTIONAL,
 *                                           -- Title is for users to see 
 *                                           -- and can differ by language. 
 *                                           -- Name, on the other hand, is 
 *                                           -- typically a short string 
 *                                           -- not necessarily meant to be 
 *                                           -- human-readable, and not 
 *                                           -- variable by language. 
 *                       searchCost   [3] IMPLICIT INTEGER {
 *                                           optimized    (0),      
 *                                              -- The attribute (or combination)
 *                                              -- associated with this list will
 *                                              -- do fast searches. 
 *                                           normal       (1),      
 *                                              -- The attribute (combination) will
 *                                              -- work expected. So there's
 *                                              -- probably an index for the
 *                                              -- attribute (combination) or some
 *                                              -- similar mechanism.
 *                                           expensive    (2),      
 *                                              -- Can use the attribute
 *                                              -- (combination), but it might not
 *                                              -- provide satisfactory results. 
 *                                              -- Probably there is no index, or
 *                                              -- post-processing of records is
 *                                              -- required.
 *                                           filter       (3)      
 *                                              -- can't search with this
 *                                              -- attribute (combination) alone.
 *                                                     } OPTIONAL,
 *                     scanable       [4] IMPLICIT BOOLEAN, 
 *                                           -- 'true' means this list can be
 *                                           -- scanned. 
 *                      broader       [5] IMPLICIT SEQUENCE OF InternationalString
 *                                                      OPTIONAL,
 *                      narrower      [6] IMPLICIT SEQUENCE OF InternationalString
 *                                                      OPTIONAL
 *                                           -- broader and narrower list
 *                                           -- alternative term lists related to
 *                                           -- this one. The term lists so listed
 *                                           -- should also be in this termLists
 *                                           -- structure.
 *                                        }
 *    -- no non-brief elements
 *                   }
 * ```
 * 
 * @class
 */
export
class TermListInfo {
    constructor (
        /**
         * @summary `commonInfo`.
         * @public
         * @readonly
         */
        readonly commonInfo: OPTIONAL<CommonInfo>,
        /**
         * @summary `databaseName`.
         * @public
         * @readonly
         */
        readonly databaseName: DatabaseName,
        /**
         * @summary `termLists`.
         * @public
         * @readonly
         */
        readonly termLists: TermListInfo_termLists_Item[]
    ) {}

    /**
     * @summary Restructures an object into a TermListInfo
     * @description
     * 
     * This takes an `object` and converts it to a `TermListInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TermListInfo`.
     * @returns {TermListInfo}
     */
    public static _from_object (_o: { [_K in keyof (TermListInfo)]: (TermListInfo)[_K] }): TermListInfo {
        return new TermListInfo(_o.commonInfo, _o.databaseName, _o.termLists);
    }


}

/**
 * @summary The Leading Root Component Types of TermListInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TermListInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("commonInfo", true, $.hasTag(_TagClass.context, 0)),
    /* FIXME: databaseName COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("termLists", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TermListInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TermListInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TermListInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TermListInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TermListInfo: $.ASN1Decoder<TermListInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TermListInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TermListInfo (el: _Element): TermListInfo {
    if (!_cached_decoder_for_TermListInfo) { _cached_decoder_for_TermListInfo = function (el: _Element): TermListInfo {
    let commonInfo: OPTIONAL<CommonInfo>;
    let databaseName!: DatabaseName;
    let termLists!: TermListInfo_termLists_Item[];
    const callbacks: $.DecodingMap = {
        "commonInfo": (_el: _Element): void => { commonInfo = $._decode_implicit<CommonInfo>(() => _decode_CommonInfo)(_el); },
        "databaseName": (_el: _Element): void => { databaseName = $._decode_implicit<DatabaseName>(() => _decode_DatabaseName)(_el); },
        "termLists": (_el: _Element): void => { termLists = $._decode_implicit<TermListInfo_termLists_Item[]>(() => $._decodeSequenceOf<TermListInfo_termLists_Item>(() => _decode_TermListInfo_termLists_Item))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TermListInfo,
        _extension_additions_list_spec_for_TermListInfo,
        _root_component_type_list_2_spec_for_TermListInfo,
        undefined,
    );
    return new TermListInfo(
        commonInfo,
        databaseName,
        termLists
    );
}; }
    return _cached_decoder_for_TermListInfo(el);
}

let _cached_encoder_for_TermListInfo: $.ASN1Encoder<TermListInfo> | null = null;

/**
 * @summary Encodes a(n) TermListInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TermListInfo, encoded as an ASN.1 Element.
 */
export
function _encode_TermListInfo (value: TermListInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TermListInfo) { _cached_encoder_for_TermListInfo = function (value: TermListInfo, elGetter: $.ASN1Encoder<TermListInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.commonInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CommonInfo, $.BER)(value.commonInfo, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_DatabaseName, $.BER)(value.databaseName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<TermListInfo_termLists_Item>(() => _encode_TermListInfo_termLists_Item, $.BER), $.BER)(value.termLists, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TermListInfo(value, elGetter);
}


/* eslint-enable */
