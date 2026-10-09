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
import { Limits, _decode_Limits, _encode_Limits } from "../DFRAbstractService/Limits.ta.mjs";
import { AttributeSelection, _decode_AttributeSelection, _encode_AttributeSelection } from "../DFRAbstractService/AttributeSelection.ta.mjs";
import { OrderingRule, _decode_OrderingRule, _encode_OrderingRule } from "../DFRAbstractService/OrderingRule.ta.mjs";


/**
 * @summary CommonListSearchArguments
 * @description
 *
 * Shared List/Search arguments. Tags are [1]..[4] (ISO/IEC
 * 10166-1:1991/Cor.1:1994 §8.1.6). ISO/IEC 10166-1:1991 §8.1.6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommonListSearchArguments ::= SEQUENCE {
 *     continue    [1] BOOLEAN DEFAULT FALSE,
 *     limits      [2] Limits OPTIONAL,
 *     selection   [3] AttributeSelection OPTIONAL,
 *     ordering    [4] OrderingRule OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CommonListSearchArguments {
    constructor (
        /**
         * @summary `continue_`.
         * @description
         *
         * If true, resume the List/Search identified by `task-id` instead of
         * starting over. ISO/IEC 10166-1:1991 §8.1.6.1.
         * @public
         * @readonly
         */
        readonly continue_: OPTIONAL<BOOLEAN>,
        /**
         * @summary `limits`.
         * @description
         *
         * Optional count and/or time caps for this List/Search. ISO/IEC
         * 10166-1:1991 §8.1.6.1.
         * @public
         * @readonly
         */
        readonly limits: OPTIONAL<Limits>,
        /**
         * @summary `selection`.
         * @description
         *
         * Which attributes of each listed or found entry to return. Required
         * on List; optional on Search. UPI and object-class are always
         * returned. ISO/IEC 10166-1:1991 §8.1.6.2, §8.2.7.1, §8.2.8.1.
         * @public
         * @readonly
         */
        readonly selection: OPTIONAL<AttributeSelection>,
        /**
         * @summary `ordering`.
         * @description
         *
         * Sort keys and directions. Overrides the group's `dfr-ordering` for
         * this request. Only attributes that MATCH FOR ORDERING may be used.
         * ISO/IEC 10166-1:1991 §8.1.6.3.
         * @public
         * @readonly
         */
        readonly ordering: OPTIONAL<OrderingRule>
    ) {}

    /**
     * @summary Restructures an object into a CommonListSearchArguments
     * @description
     * 
     * This takes an `object` and converts it to a `CommonListSearchArguments`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonListSearchArguments`.
     * @returns {CommonListSearchArguments}
     */
    public static _from_object (_o: { [_K in keyof (CommonListSearchArguments)]: (CommonListSearchArguments)[_K] }): CommonListSearchArguments {
        return new CommonListSearchArguments(_o.continue_, _o.limits, _o.selection, _o.ordering);
    }

    /**
     * @summary Getter that returns the default value for `continue_`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_continue_ () { return false; }
}

/**
 * @summary The Leading Root Component Types of CommonListSearchArguments
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommonListSearchArguments: $.ComponentSpec[] = [
    new $.ComponentSpec("continue", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("limits", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("selection", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("ordering", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of CommonListSearchArguments
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommonListSearchArguments: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CommonListSearchArguments
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CommonListSearchArguments: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CommonListSearchArguments: $.ASN1Decoder<CommonListSearchArguments> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommonListSearchArguments
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommonListSearchArguments (el: _Element): CommonListSearchArguments {
    if (!_cached_decoder_for_CommonListSearchArguments) { _cached_decoder_for_CommonListSearchArguments = function (el: _Element): CommonListSearchArguments {
    let continue_: OPTIONAL<BOOLEAN> = CommonListSearchArguments._default_value_for_continue_;
    let limits: OPTIONAL<Limits>;
    let selection: OPTIONAL<AttributeSelection>;
    let ordering: OPTIONAL<OrderingRule>;
    const callbacks: $.DecodingMap = {
        "continue": (_el: _Element): void => { continue_ = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "limits": (_el: _Element): void => { limits = $._decode_implicit<Limits>(() => _decode_Limits)(_el); },
        "selection": (_el: _Element): void => { selection = $._decode_explicit<AttributeSelection>(() => _decode_AttributeSelection)(_el); },
        "ordering": (_el: _Element): void => { ordering = $._decode_implicit<OrderingRule>(() => _decode_OrderingRule)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommonListSearchArguments,
        _extension_additions_list_spec_for_CommonListSearchArguments,
        _root_component_type_list_2_spec_for_CommonListSearchArguments,
        undefined,
    );
    return new CommonListSearchArguments(
        continue_,
        limits,
        selection,
        ordering
    );
}; }
    return _cached_decoder_for_CommonListSearchArguments(el);
}

let _cached_encoder_for_CommonListSearchArguments: $.ASN1Encoder<CommonListSearchArguments> | null = null;

/**
 * @summary Encodes a(n) CommonListSearchArguments into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonListSearchArguments, encoded as an ASN.1 Element.
 */
export
function _encode_CommonListSearchArguments (value: CommonListSearchArguments, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommonListSearchArguments) { _cached_encoder_for_CommonListSearchArguments = function (value: CommonListSearchArguments): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.continue_ === undefined || $.deepEq(value.continue_, CommonListSearchArguments._default_value_for_continue_) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.continue_, $.BER)),
            /* IF_ABSENT  */ ((value.limits === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Limits, $.BER)(value.limits, $.BER)),
            /* IF_ABSENT  */ ((value.selection === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_AttributeSelection, $.BER)(value.selection, $.BER)),
            /* IF_ABSENT  */ ((value.ordering === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_OrderingRule, $.BER)(value.ordering, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CommonListSearchArguments(value, elGetter);
}


/* eslint-enable */
