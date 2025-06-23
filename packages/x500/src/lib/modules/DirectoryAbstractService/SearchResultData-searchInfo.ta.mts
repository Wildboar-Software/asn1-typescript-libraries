/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    EntryInformation,
    _decode_EntryInformation,
    _encode_EntryInformation,
} from "../DirectoryAbstractService/EntryInformation.ta.mjs";
import {
    PartialOutcomeQualifier,
    _decode_PartialOutcomeQualifier,
    _encode_PartialOutcomeQualifier,
} from "../DirectoryAbstractService/PartialOutcomeQualifier.ta.mjs";
import {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta.mjs";
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta.mjs";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.mjs";
import {
    CommonResults,
    _root_component_type_list_1_spec_for_CommonResults,
    _root_component_type_list_2_spec_for_CommonResults,
    _extension_additions_list_spec_for_CommonResults,
} from "../DirectoryAbstractService/CommonResults.ta.mjs";

/**
 * @summary SearchResultData_searchInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchResultData-searchInfo ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class SearchResultData_searchInfo implements CommonResults {
    constructor(
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<Name>,
        /**
         * @summary `entries`.
         * @public
         * @readonly
         */
        readonly entries: EntryInformation[],
        /**
         * @summary `partialOutcomeQualifier`.
         * @public
         * @readonly
         */
        readonly partialOutcomeQualifier?: OPTIONAL<PartialOutcomeQualifier>,
        /**
         * @summary `altMatching`.
         * @public
         * @readonly
         */
        readonly altMatching?: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters?: OPTIONAL<SecurityParameters> /* REPLICATED_COMPONENT */,
        /**
         * @summary `performer`.
         * @public
         * @readonly
         */
        readonly performer?: OPTIONAL<DistinguishedName> /* REPLICATED_COMPONENT */,
        /**
         * @summary `aliasDereferenced`.
         * @public
         * @readonly
         */
        readonly aliasDereferenced?: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        /**
         * @summary `notification`.
         * @public
         * @readonly
         */
        readonly notification?: OPTIONAL<Attribute[]> /* REPLICATED_COMPONENT */
    ) {}

    /**
     * @summary Restructures an object into a SearchResultData_searchInfo
     * @description
     *
     * This takes an `object` and converts it to a `SearchResultData_searchInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SearchResultData_searchInfo`.
     * @returns {SearchResultData_searchInfo}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof SearchResultData_searchInfo]: SearchResultData_searchInfo[_K];
            }
        >
    ): SearchResultData_searchInfo {
        return new SearchResultData_searchInfo(
            _o.name,
            _o.entries,
            _o.partialOutcomeQualifier,
            _o.altMatching,
            _o._unrecognizedExtensionsList,
            _o.securityParameters,
            _o.performer,
            _o.aliasDereferenced,
            _o.notification
        );
    }

    /**
     * @summary Getter that returns the default value for `altMatching`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_altMatching() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `aliasDereferenced`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}

/**
 * @summary The Leading Root Component Types of SearchResultData_searchInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SearchResultData_searchInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'name',
        true,
        $.or($.hasTag(_TagClass.universal, 16))
    ),
    new $.ComponentSpec(
        "entries",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "partialOutcomeQualifier",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "altMatching",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    ..._root_component_type_list_1_spec_for_CommonResults,
];

/**
 * @summary The Trailing Root Component Types of SearchResultData_searchInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SearchResultData_searchInfo: $.ComponentSpec[] = [
    ..._root_component_type_list_2_spec_for_CommonResults,
];

/**
 * @summary The Extension Addition Component Types of SearchResultData_searchInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SearchResultData_searchInfo: $.ComponentSpec[] = [
    ..._extension_additions_list_spec_for_CommonResults,
];

let _cached_decoder_for_SearchResultData_searchInfo: $.ASN1Decoder<SearchResultData_searchInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchResultData_searchInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchResultData_searchInfo} The decoded data structure.
 */
export function _decode_SearchResultData_searchInfo(el: _Element) {
    if (!_cached_decoder_for_SearchResultData_searchInfo) {
        _cached_decoder_for_SearchResultData_searchInfo = function (
            el: _Element
        ): SearchResultData_searchInfo {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let name: OPTIONAL<Name>;
            let entries!: EntryInformation[];
            let partialOutcomeQualifier: OPTIONAL<PartialOutcomeQualifier>;
            let altMatching: OPTIONAL<BOOLEAN> =
                SearchResultData_searchInfo._default_value_for_altMatching;
            let _unrecognizedExtensionsList: _Element[] = [];
            let securityParameters: OPTIONAL<SecurityParameters>;
            let performer: OPTIONAL<DistinguishedName>;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                SearchResultData_searchInfo._default_value_for_aliasDereferenced;
            let notification: OPTIONAL<Attribute[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                name: (_el: _Element): void => {
                    name = _decode_Name(_el);
                },
                entries: (_el: _Element): void => {
                    entries = $._decode_explicit<EntryInformation[]>(() =>
                        $._decodeSetOf<EntryInformation>(
                            () => _decode_EntryInformation
                        )
                    )(_el);
                },
                partialOutcomeQualifier: (_el: _Element): void => {
                    partialOutcomeQualifier = $._decode_explicit<PartialOutcomeQualifier>(
                        () => _decode_PartialOutcomeQualifier
                    )(_el);
                },
                altMatching: (_el: _Element): void => {
                    altMatching = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                securityParameters: (_el: _Element): void => {
                    securityParameters = $._decode_explicit<SecurityParameters>(
                        () => _decode_SecurityParameters
                    )(_el);
                },
                performer: (_el: _Element): void => {
                    performer = $._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: _Element): void => {
                    aliasDereferenced = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                notification: (_el: _Element): void => {
                    notification = $._decode_explicit<Attribute[]>(() =>
                        $._decodeSequenceOf<Attribute>(() => _decode_Attribute)
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SearchResultData_searchInfo,
                _extension_additions_list_spec_for_SearchResultData_searchInfo,
                _root_component_type_list_2_spec_for_SearchResultData_searchInfo,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SearchResultData_searchInfo(
                /* SET_CONSTRUCTOR_CALL */ name,
                entries,
                partialOutcomeQualifier,
                altMatching,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_SearchResultData_searchInfo(el);
}

let _cached_encoder_for_SearchResultData_searchInfo: $.ASN1Encoder<SearchResultData_searchInfo> | null = null;

/**
 * @summary Encodes a(n) SearchResultData_searchInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchResultData_searchInfo, encoded as an ASN.1 Element.
 */
export function _encode_SearchResultData_searchInfo(
    value: SearchResultData_searchInfo,
    elGetter: $.ASN1Encoder<SearchResultData_searchInfo>
) {
    if (!_cached_encoder_for_SearchResultData_searchInfo) {
        _cached_encoder_for_SearchResultData_searchInfo = function (
            value: SearchResultData_searchInfo        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : _encode_Name(value.name, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () =>
                                    $._encodeSetOf<EntryInformation>(
                                        () => _encode_EntryInformation,
                                        $.BER
                                    ),
                                $.BER
                            )(value.entries, $.BER),
                            /* IF_ABSENT  */ value.partialOutcomeQualifier ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_PartialOutcomeQualifier,
                                      $.BER
                                  )(value.partialOutcomeQualifier, $.BER),
                            /* IF_DEFAULT */ value.altMatching === undefined ||
                            $.deepEq(
                                value.altMatching,
                                SearchResultData_searchInfo._default_value_for_altMatching
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.altMatching, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      $.BER
                                  )(value.securityParameters, $.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      $.BER
                                  )(value.performer, $.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            $.deepEq(
                                value.aliasDereferenced,
                                SearchResultData_searchInfo._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      28,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.aliasDereferenced, $.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      27,
                                      () =>
                                          $._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.notification, $.BER),
                        ]
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SearchResultData_searchInfo(value, elGetter);
}


/* eslint-enable */
