/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
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
import { LimitEncountered, _enum_for_LimitEncountered, _decode_LimitEncountered, _encode_LimitEncountered } from "../DFRAbstractService/LimitEncountered.ta.mjs";
import { DfrEntryList, _decode_DfrEntryList, _encode_DfrEntryList } from "../DFRAbstractService/DfrEntryList.ta.mjs";
import { Warning, _decode_Warning, _encode_Warning } from "../DFRAbstractService/Warning.ta.mjs";
import { TaskId, _decode_TaskId, _encode_TaskId } from "../DFRAbstractService/TaskId.ta.mjs";


/**
 * @summary CommonListSearchResult
 * @description
 *
 * Shared List/Search result: count, optional limit, entry list, warnings,
 * continuation. ISO/IEC 10166-1:1991 §8.1.6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommonListSearchResult ::= SEQUENCE {
 *     number-of-entries   [0] INTEGER,
 *     limit-encountered   [1] LimitEncountered OPTIONAL,
 *     entry-list          [2] DfrEntryList,
 *     warnings            [3] SEQUENCE OF Warning DEFAULT {},
 *     continuation        [4] TaskId OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CommonListSearchResult {
    constructor (
        /**
         * @summary `number_of_entries`.
         * @description
         *
         * How many entries are returned in `entry-list`. ISO/IEC 10166-1:1991
         * §8.1.6.
         * @public
         * @readonly
         */
        readonly number_of_entries: INTEGER,
        /**
         * @summary `limit_encountered`.
         * @description
         *
         * Which limit stopped the operation. Absent if none was hit. ISO/IEC
         * 10166-1:1991 §8.1.6.1.
         * @public
         * @readonly
         */
        readonly limit_encountered: OPTIONAL<LimitEncountered>,
        /**
         * @summary `entry_list`.
         * @description
         *
         * Matching or listed entries in the requested order. UPI and object
         * class are always present. ISO/IEC 10166-1:1991 §8.1.6.2.
         * @public
         * @readonly
         */
        readonly entry_list: DfrEntryList,
        /**
         * @summary `warnings`.
         * @description
         *
         * Access problems for members that were skipped. Never reported if the
         * user has no read right to the entry. ISO/IEC 10166-1:1991 §8.1.3.3.
         * @public
         * @readonly
         */
        readonly warnings: OPTIONAL<Warning[]>,
        /**
         * @summary `continuation`.
         * @description
         *
         * TaskId to resume this List/Search after a limit. Present only with
         * `limit-encountered`. ISO/IEC 10166-1:1991 §8.1.6.1.
         * @public
         * @readonly
         */
        readonly continuation: OPTIONAL<TaskId>
    ) {}

    /**
     * @summary Restructures an object into a CommonListSearchResult
     * @description
     * 
     * This takes an `object` and converts it to a `CommonListSearchResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonListSearchResult`.
     * @returns {CommonListSearchResult}
     */
    public static _from_object (_o: { [_K in keyof (CommonListSearchResult)]: (CommonListSearchResult)[_K] }): CommonListSearchResult {
        return new CommonListSearchResult(_o.number_of_entries, _o.limit_encountered, _o.entry_list, _o.warnings, _o.continuation);
    }

    /**
     * @summary Getter that returns the default value for `warnings`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_warnings (): Warning[] { return []; }        /**
         * @summary The enum used as the type of the component `limit_encountered`
         * @public
         * @static
         */

    public static _enum_for_limit_encountered = _enum_for_LimitEncountered;
}

/**
 * @summary The Leading Root Component Types of CommonListSearchResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommonListSearchResult: $.ComponentSpec[] = [
    new $.ComponentSpec("number-of-entries", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("limit-encountered", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("entry-list", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("warnings", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("continuation", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of CommonListSearchResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommonListSearchResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CommonListSearchResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CommonListSearchResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CommonListSearchResult: $.ASN1Decoder<CommonListSearchResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommonListSearchResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommonListSearchResult (el: _Element): CommonListSearchResult {
    if (!_cached_decoder_for_CommonListSearchResult) { _cached_decoder_for_CommonListSearchResult = function (el: _Element): CommonListSearchResult {
    let number_of_entries!: INTEGER;
    let limit_encountered: OPTIONAL<LimitEncountered>;
    let entry_list!: DfrEntryList;
    let warnings: OPTIONAL<Warning[]> = CommonListSearchResult._default_value_for_warnings;
    let continuation: OPTIONAL<TaskId>;
    const callbacks: $.DecodingMap = {
        "number-of-entries": (_el: _Element): void => { number_of_entries = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "limit-encountered": (_el: _Element): void => { limit_encountered = $._decode_implicit<LimitEncountered>(() => _decode_LimitEncountered)(_el); },
        "entry-list": (_el: _Element): void => { entry_list = $._decode_implicit<DfrEntryList>(() => _decode_DfrEntryList)(_el); },
        "warnings": (_el: _Element): void => { warnings = $._decode_implicit<Warning[]>(() => $._decodeSequenceOf<Warning>(() => _decode_Warning))(_el); },
        "continuation": (_el: _Element): void => { continuation = $._decode_implicit<TaskId>(() => _decode_TaskId)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommonListSearchResult,
        _extension_additions_list_spec_for_CommonListSearchResult,
        _root_component_type_list_2_spec_for_CommonListSearchResult,
        undefined,
    );
    return new CommonListSearchResult(
        number_of_entries,
        limit_encountered,
        entry_list,
        warnings,
        continuation
    );
}; }
    return _cached_decoder_for_CommonListSearchResult(el);
}

let _cached_encoder_for_CommonListSearchResult: $.ASN1Encoder<CommonListSearchResult> | null = null;

/**
 * @summary Encodes a(n) CommonListSearchResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonListSearchResult, encoded as an ASN.1 Element.
 */
export
function _encode_CommonListSearchResult (value: CommonListSearchResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommonListSearchResult) { _cached_encoder_for_CommonListSearchResult = function (value: CommonListSearchResult): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.number_of_entries, $.BER),
            /* IF_ABSENT  */ ((value.limit_encountered === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_LimitEncountered, $.BER)(value.limit_encountered, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_DfrEntryList, $.BER)(value.entry_list, $.BER),
            /* IF_DEFAULT */ (value.warnings === undefined || $.deepEq(value.warnings, CommonListSearchResult._default_value_for_warnings) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<Warning>(() => _encode_Warning, $.BER), $.BER)(value.warnings, $.BER)),
            /* IF_ABSENT  */ ((value.continuation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_TaskId, $.BER)(value.continuation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CommonListSearchResult(value, elGetter);
}


/* eslint-enable */
