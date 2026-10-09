/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
import { DatabaseName, _decode_DatabaseName, _encode_DatabaseName } from "../Z39-50-APDU-2001/DatabaseName.ta.mjs";
import { TermListInfo_termLists_Item, _decode_TermListInfo_termLists_Item, _encode_TermListInfo_termLists_Item } from "../RecordSyntax-explain/TermListInfo-termLists-Item.ta.mjs";


/**
 * @summary TermListInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TermListInfo ::= SEQUENCE {
 *     commonInfo      [0] IMPLICIT CommonInfo OPTIONAL,
 *     -- Key elements follow:
 *     databaseName    [1] IMPLICIT DatabaseName,
 *     -- Non-key brief elements follow:
 *     termLists       [2] IMPLICIT SEQUENCE OF SEQUENCE {
 *         name            [1] IMPLICIT InternationalString,
 *         title           [2] IMPLICIT HumanString OPTIONAL,
 *         -- see comment 5
 *         searchCost      [3] IMPLICIT INTEGER {
 *             -- see comment 6
 *             optimized              (0),
 *             normal                 (1),
 *             expensive              (2),
 *             filter                 (3)
 *         } OPTIONAL,
 *         scanable        [4] IMPLICIT BOOLEAN,
 *         -- 'true' means this list can be scanned
 *         -- see comment 7
 *         broader         [5] IMPLICIT SEQUENCE OF InternationalString OPTIONAL,
 *         narrower        [6] IMPLICIT SEQUENCE OF InternationalString OPTIONAL
 *         -- Broader and narrower list alternative term lists related to this one.
 *         -- The term lists so listed should also be in this termLists structure.
 *     }
 *     -- No non-brief elements
 * }
 * ```
 * 
 * @class
 */
export
class TermListInfo {
    /**
     * @summary `commonInfo`.
     * @public
     * @readonly
     */
    readonly commonInfo: OPTIONAL<CommonInfo>;
    /**
     * @summary `databaseName`.
     * @public
     * @readonly
     */
    readonly databaseName: DatabaseName;
    /**
     * @summary `termLists`.
     * @public
     * @readonly
     */
    readonly termLists: TermListInfo_termLists_Item[];

    constructor (
        commonInfo: OPTIONAL<CommonInfo>,
        databaseName: DatabaseName,
        termLists: TermListInfo_termLists_Item[]
    ) {
        this.commonInfo = commonInfo;
        this.databaseName = databaseName;
        this.termLists = termLists;
    }

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
    new $.ComponentSpec("databaseName", false, $.hasTag(_TagClass.context, 1)),
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
    const _components: _Element[] = new Array(3);
    let _components_i = 0;
    if (value.commonInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_CommonInfo, $.BER)(value.commonInfo, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_DatabaseName, $.BER)(value.databaseName, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<TermListInfo_termLists_Item>(() => _encode_TermListInfo_termLists_Item, $.BER), $.BER)(value.termLists, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TermListInfo(value, elGetter);
}


/* eslint-enable */
