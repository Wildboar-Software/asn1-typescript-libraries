/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DomainLocalID,
    _decode_DomainLocalID,
    _encode_DomainLocalID,
} from "../DirectoryAbstractService/DomainLocalID.ta.mjs";
import {
    EntryInformationSelection,
    _decode_EntryInformationSelection,
    _encode_EntryInformationSelection,
} from "../DirectoryAbstractService/EntryInformationSelection.ta.mjs";
import {
    Filter,
    _decode_Filter,
    _encode_Filter,
} from "../DirectoryAbstractService/Filter.ta.mjs";
import {
    JoinArgument_joinSubset,
    JoinArgument_joinSubset_baseObject /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_JoinArgument_joinSubset,
    _encode_JoinArgument_joinSubset,
    _enum_for_JoinArgument_joinSubset,
} from "../DirectoryAbstractService/JoinArgument-joinSubset.ta.mjs";
import {
    JoinAttPair,
    _decode_JoinAttPair,
    _encode_JoinAttPair,
} from "../DirectoryAbstractService/JoinAttPair.ta.mjs";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.mjs";
/**
 * @summary JoinArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * JoinArgument ::= SEQUENCE {
 *   joinBaseObject  [0]  Name,
 *   domainLocalID   [1]  DomainLocalID OPTIONAL,
 *   joinSubset      [2]  ENUMERATED {
 *     baseObject   (0),
 *     oneLevel     (1),
 *     wholeSubtree (2),
 *     ... } DEFAULT baseObject,
 *   joinFilter      [3]  Filter OPTIONAL,
 *   joinAttributes  [4]  SEQUENCE SIZE (1..MAX) OF JoinAttPair OPTIONAL,
 *   joinSelection   [5]  EntryInformationSelection,
 *   ... }
 * ```
 *
 */
export class JoinArgument {
    constructor(
        /**
         * @summary `joinBaseObject`.
         * @public
         * @readonly
         */
        readonly joinBaseObject: Name,
        /**
         * @summary `domainLocalID`.
         * @public
         * @readonly
         */
        readonly domainLocalID: OPTIONAL<DomainLocalID>,
        /**
         * @summary `joinSubset`.
         * @public
         * @readonly
         */
        readonly joinSubset: OPTIONAL<JoinArgument_joinSubset>,
        /**
         * @summary `joinFilter`.
         * @public
         * @readonly
         */
        readonly joinFilter: OPTIONAL<Filter>,
        /**
         * @summary `joinAttributes`.
         * @public
         * @readonly
         */
        readonly joinAttributes: OPTIONAL<JoinAttPair[]>,
        /**
         * @summary `joinSelection`.
         * @public
         * @readonly
         */
        readonly joinSelection: EntryInformationSelection,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a JoinArgument
     * @description
     *
     * This takes an `object` and converts it to a `JoinArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `JoinArgument`.
     * @returns {JoinArgument}
     */
    public static _from_object(
        _o: { [_K in keyof JoinArgument]: JoinArgument[_K] }
    ): JoinArgument {
        return new JoinArgument(
            _o.joinBaseObject,
            _o.domainLocalID,
            _o.joinSubset,
            _o.joinFilter,
            _o.joinAttributes,
            _o.joinSelection,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `joinSubset`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_joinSubset(): JoinArgument_joinSubset {
        return JoinArgument_joinSubset_baseObject;
    }
    /**
     * @summary The enum used as the type of the component `joinSubset`
     * @public
     * @static
     */

    public static _enum_for_joinSubset = _enum_for_JoinArgument_joinSubset;
}

/**
 * @summary The Leading Root Component Types of JoinArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_JoinArgument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "joinBaseObject",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "domainLocalID",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "joinSubset",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "joinFilter",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        "joinAttributes",
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        "joinSelection",
        false,
        $.hasTag(_TagClass.context, 5)
    ),
];

/**
 * @summary The Trailing Root Component Types of JoinArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_JoinArgument: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of JoinArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_JoinArgument: $.ComponentSpec[] = [];

let _cached_decoder_for_JoinArgument: $.ASN1Decoder<JoinArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) JoinArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {JoinArgument} The decoded data structure.
 */
export function _decode_JoinArgument(el: _Element): JoinArgument {
    if (!_cached_decoder_for_JoinArgument) {
        _cached_decoder_for_JoinArgument = function (
            el: _Element
        ): JoinArgument {
            let joinBaseObject!: Name;
            let domainLocalID: OPTIONAL<DomainLocalID>;
            let joinSubset: OPTIONAL<JoinArgument_joinSubset> =
                JoinArgument._default_value_for_joinSubset;
            let joinFilter: OPTIONAL<Filter>;
            let joinAttributes: OPTIONAL<JoinAttPair[]>;
            let joinSelection!: EntryInformationSelection;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                joinBaseObject: (_el: _Element): void => {
                    joinBaseObject = $._decode_explicit<Name>(
                        () => _decode_Name
                    )(_el);
                },
                domainLocalID: (_el: _Element): void => {
                    domainLocalID = $._decode_explicit<DomainLocalID>(
                        () => _decode_DomainLocalID
                    )(_el);
                },
                joinSubset: (_el: _Element): void => {
                    joinSubset = $._decode_explicit<JoinArgument_joinSubset>(
                        () => _decode_JoinArgument_joinSubset
                    )(_el);
                },
                joinFilter: (_el: _Element): void => {
                    joinFilter = $._decode_explicit<Filter>(
                        () => _decode_Filter
                    )(_el);
                },
                joinAttributes: (_el: _Element): void => {
                    joinAttributes = $._decode_explicit<JoinAttPair[]>(() =>
                        $._decodeSequenceOf<JoinAttPair>(
                            () => _decode_JoinAttPair
                        )
                    )(_el);
                },
                joinSelection: (_el: _Element): void => {
                    joinSelection = $._decode_explicit<EntryInformationSelection>(
                        () => _decode_EntryInformationSelection
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_JoinArgument,
                _extension_additions_list_spec_for_JoinArgument,
                _root_component_type_list_2_spec_for_JoinArgument,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new JoinArgument(
                joinBaseObject,
                domainLocalID,
                joinSubset,
                joinFilter,
                joinAttributes,
                joinSelection,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_JoinArgument(el);
}

let _cached_encoder_for_JoinArgument: $.ASN1Encoder<JoinArgument> | null = null;

/**
 * @summary Encodes a(n) JoinArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The JoinArgument, encoded as an ASN.1 Element.
 */
export function _encode_JoinArgument(
    value: JoinArgument,
    elGetter: $.ASN1Encoder<JoinArgument>
): _Element {
    if (!_cached_encoder_for_JoinArgument) {
        _cached_encoder_for_JoinArgument = function (
            value: JoinArgument        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_Name,
                                $.BER
                            )(value.joinBaseObject, $.BER),
                            /* IF_ABSENT  */ value.domainLocalID === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_DomainLocalID,
                                      $.BER
                                  )(value.domainLocalID, $.BER),
                            /* IF_DEFAULT */ value.joinSubset === undefined ||
                            $.deepEq(
                                value.joinSubset,
                                JoinArgument._default_value_for_joinSubset
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_JoinArgument_joinSubset,
                                      $.BER
                                  )(value.joinSubset, $.BER),
                            /* IF_ABSENT  */ value.joinFilter === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_Filter,
                                      $.BER
                                  )(value.joinFilter, $.BER),
                            /* IF_ABSENT  */ value.joinAttributes === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () =>
                                          $._encodeSequenceOf<JoinAttPair>(
                                              () => _encode_JoinAttPair,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.joinAttributes, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                5,
                                () => _encode_EntryInformationSelection,
                                $.BER
                            )(value.joinSelection, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_JoinArgument(value, elGetter);
}


/* eslint-enable */
