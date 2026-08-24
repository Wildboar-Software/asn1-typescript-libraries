/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    EntryInformation_information_Item,
    _decode_EntryInformation_information_Item,
    _encode_EntryInformation_information_Item,
} from "../DirectoryAbstractService/EntryInformation-information-Item.ta.mjs";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.mjs";
/**
 * @summary EntryInformation
 * @description
 *
 * `name` may be a valid alias if DN ACI is denied. If `derivedEntry` is
 * TRUE, do not use `name` in subsequent operations. `incompleteEntry` is
 * not set merely because an alias name was returned. `partialName` only
 * with `partialNameResolution` after name-resolution is fully exhausted.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntryInformation ::= SEQUENCE {
 *   name                  Name,
 *   fromEntry             BOOLEAN DEFAULT TRUE,
 *   information           SET SIZE (1..MAX) OF CHOICE {
 *     attributeType         AttributeType,
 *     attribute             Attribute{{SupportedAttributes}},
 *     ...} OPTIONAL,
 *   incompleteEntry  [3]  BOOLEAN DEFAULT FALSE,
 *   partialName      [4]  BOOLEAN DEFAULT FALSE,
 *   derivedEntry     [5]  BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 *
 */
export class EntryInformation {
    constructor(
        /**
         * @summary `name`.
         * @description
         *
         * DN if ACI allows; else a valid alias or omit. Prefer a stable
         * alias for the same requester. If `derivedEntry` TRUE, may be any
         * related entry or alias — do not use in subsequent operations.
         *
         * @public
         * @readonly
         */
        readonly name: Name,
        /**
         * @summary `fromEntry`.
         * @description
         *
         * DEFAULT TRUE. TRUE = entry; FALSE = copy.
         *
         * @public
         * @readonly
         */
        readonly fromEntry?: OPTIONAL<BOOLEAN>,
        /**
         * @summary `information`.
         * @description
         *
         * SET SIZE (1..MAX). Omitted if no attr info. CHOICE type-only vs
         * full Attribute.
         *
         * @public
         * @readonly
         */
        readonly information?: OPTIONAL<EntryInformation_information_Item[]>,
        /**
         * @summary `incompleteEntry`.
         * @description
         *
         * DEFAULT FALSE. TRUE if incomplete vs request (ACI omission if
         * DiscloseOnError, incomplete shadow + `copyShallDo`,
         * `attributeSizeLimit`). Not set merely because an alias name was
         * returned. Absent in 1988 impls.
         *
         * @public
         * @readonly
         */
        readonly incompleteEntry?: OPTIONAL<BOOLEAN>,
        /**
         * @summary `partialName`.
         * @description
         *
         * DEFAULT FALSE. TRUE only if the request had
         * `partialNameResolution`, name resolution was fully exhausted
         * (incl. knowledge/referrals), ≥1 RDN resolved, and not all RDNs
         * resolved. Info is from the last successfully resolved entry.
         * 1997+.
         *
         * @public
         * @readonly
         */
        readonly partialName?: OPTIONAL<BOOLEAN>,
        /**
         * @summary `derivedEntry`.
         * @description
         *
         * DEFAULT FALSE. TRUE if joined from more than one entry. If
         * signed, the signature is of the joining DSA. Do not use `name`
         * subsequently. 2001+.
         *
         * @public
         * @readonly
         */
        readonly derivedEntry?: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EntryInformation
     * @description
     *
     * This takes an `object` and converts it to a `EntryInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EntryInformation`.
     * @returns {EntryInformation}
     */
    public static _from_object(
        _o: { [_K in keyof EntryInformation]: EntryInformation[_K] }
    ): EntryInformation {
        return new EntryInformation(
            _o.name,
            _o.fromEntry,
            _o.information,
            _o.incompleteEntry,
            _o.partialName,
            _o.derivedEntry,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `fromEntry`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_fromEntry(): BOOLEAN {
        return true;
    }
    /**
     * @summary Getter that returns the default value for `incompleteEntry`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_incompleteEntry(): BOOLEAN {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `partialName`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_partialName(): BOOLEAN {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `derivedEntry`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_derivedEntry(): BOOLEAN {
        return false;
    }
}

/**
 * @summary The Leading Root Component Types of EntryInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EntryInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("name", false, $.hasAnyTag),
    new $.ComponentSpec(
        "fromEntry",
        true,
        $.hasTag(_TagClass.universal, 1)
    ),
    new $.ComponentSpec(
        "information",
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        "incompleteEntry",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        "partialName",
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        "derivedEntry",
        true,
        $.hasTag(_TagClass.context, 5)
    ),
];

/**
 * @summary The Trailing Root Component Types of EntryInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EntryInformation: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of EntryInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EntryInformation: $.ComponentSpec[] = [];

let _cached_decoder_for_EntryInformation: $.ASN1Decoder<EntryInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntryInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntryInformation} The decoded data structure.
 */
export function _decode_EntryInformation(el: _Element): EntryInformation {
    if (!_cached_decoder_for_EntryInformation) {
        _cached_decoder_for_EntryInformation = function (
            el: _Element
        ): EntryInformation {
            let name!: Name;
            let fromEntry: OPTIONAL<BOOLEAN> =
                EntryInformation._default_value_for_fromEntry;
            let information: OPTIONAL<EntryInformation_information_Item[]>;
            let incompleteEntry: OPTIONAL<BOOLEAN> =
                EntryInformation._default_value_for_incompleteEntry;
            let partialName: OPTIONAL<BOOLEAN> =
                EntryInformation._default_value_for_partialName;
            let derivedEntry: OPTIONAL<BOOLEAN> =
                EntryInformation._default_value_for_derivedEntry;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                name: (_el: _Element): void => {
                    name = _decode_Name(_el);
                },
                fromEntry: (_el: _Element): void => {
                    fromEntry = $._decodeBoolean(_el);
                },
                information: (_el: _Element): void => {
                    information = $._decodeSetOf<EntryInformation_information_Item>(
                        () => _decode_EntryInformation_information_Item
                    )(_el);
                },
                incompleteEntry: (_el: _Element): void => {
                    incompleteEntry = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                partialName: (_el: _Element): void => {
                    partialName = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                derivedEntry: (_el: _Element): void => {
                    derivedEntry = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EntryInformation,
                _extension_additions_list_spec_for_EntryInformation,
                _root_component_type_list_2_spec_for_EntryInformation,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new EntryInformation(
                name,
                fromEntry,
                information,
                incompleteEntry,
                partialName,
                derivedEntry,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_EntryInformation(el);
}

let _cached_encoder_for_EntryInformation: $.ASN1Encoder<EntryInformation> | null = null;

/**
 * @summary Encodes a(n) EntryInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryInformation, encoded as an ASN.1 Element.
 */
export function _encode_EntryInformation(
    value: EntryInformation,
    elGetter: $.ASN1Encoder<EntryInformation>
): _Element {
    if (!_cached_encoder_for_EntryInformation) {
        _cached_encoder_for_EntryInformation = function (
            value: EntryInformation        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(value.name, $.BER),
                            /* IF_DEFAULT */ value.fromEntry === undefined ||
                            $.deepEq(
                                value.fromEntry,
                                EntryInformation._default_value_for_fromEntry
                            )
                                ? undefined
                                : $._encodeBoolean(value.fromEntry, $.BER),
                            /* IF_ABSENT  */ value.information === undefined
                                ? undefined
                                : $._encodeSetOf<EntryInformation_information_Item>(
                                      () =>
                                          _encode_EntryInformation_information_Item,
                                      $.BER
                                  )(value.information, $.BER),
                            /* IF_DEFAULT */ value.incompleteEntry ===
                                undefined ||
                            $.deepEq(
                                value.incompleteEntry,
                                EntryInformation._default_value_for_incompleteEntry
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.incompleteEntry, $.BER),
                            /* IF_DEFAULT */ value.partialName === undefined ||
                            $.deepEq(
                                value.partialName,
                                EntryInformation._default_value_for_partialName
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.partialName, $.BER),
                            /* IF_DEFAULT */ value.derivedEntry === undefined ||
                            $.deepEq(
                                value.derivedEntry,
                                EntryInformation._default_value_for_derivedEntry
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      5,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.derivedEntry, $.BER),
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
    return _cached_encoder_for_EntryInformation(value, elGetter);
}


/* eslint-enable */
