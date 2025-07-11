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
    ModifyRights,
    _decode_ModifyRights,
    _encode_ModifyRights,
} from "../DirectoryAbstractService/ModifyRights.ta.mjs";
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
    CommonResults,
    _root_component_type_list_1_spec_for_CommonResults,
    _root_component_type_list_2_spec_for_CommonResults,
    _extension_additions_list_spec_for_CommonResults,
} from "../DirectoryAbstractService/CommonResults.ta.mjs";

/**
 * @summary ReadResultData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReadResultData ::= SET {
 *   entry         [0]  EntryInformation,
 *   modifyRights  [1]  ModifyRights OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF      CommonResults }
 * ```
 *
 */
export class ReadResultData implements CommonResults {
    constructor(
        /**
         * @summary `entry`.
         * @public
         * @readonly
         */
        readonly entry: EntryInformation,
        /**
         * @summary `modifyRights`.
         * @public
         * @readonly
         */
        readonly modifyRights?: OPTIONAL<ModifyRights>,
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
     * @summary Restructures an object into a ReadResultData
     * @description
     *
     * This takes an `object` and converts it to a `ReadResultData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReadResultData`.
     * @returns {ReadResultData}
     */
    public static _from_object(
        _o: { [_K in keyof ReadResultData]: ReadResultData[_K] }
    ): ReadResultData {
        return new ReadResultData(
            _o.entry,
            _o.modifyRights,
            _o._unrecognizedExtensionsList,
            _o.securityParameters,
            _o.performer,
            _o.aliasDereferenced,
            _o.notification
        );
    }

    /**
     * @summary Getter that returns the default value for `aliasDereferenced`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_aliasDereferenced(): BOOLEAN {
        return false;
    }
}

/**
 * @summary The Leading Root Component Types of ReadResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReadResultData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "entry",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "modifyRights",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    ..._root_component_type_list_1_spec_for_CommonResults,
];

/**
 * @summary The Trailing Root Component Types of ReadResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReadResultData: $.ComponentSpec[] = [
    ..._root_component_type_list_2_spec_for_CommonResults,
];

/**
 * @summary The Extension Addition Component Types of ReadResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReadResultData: $.ComponentSpec[] = [
    ..._extension_additions_list_spec_for_CommonResults,
];

let _cached_decoder_for_ReadResultData: $.ASN1Decoder<ReadResultData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReadResultData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReadResultData} The decoded data structure.
 */
export function _decode_ReadResultData(el: _Element): ReadResultData {
    if (!_cached_decoder_for_ReadResultData) {
        _cached_decoder_for_ReadResultData = function (
            el: _Element
        ): ReadResultData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let entry!: EntryInformation;
            let modifyRights: OPTIONAL<ModifyRights>;
            let _unrecognizedExtensionsList: _Element[] = [];
            let securityParameters: OPTIONAL<SecurityParameters>;
            let performer: OPTIONAL<DistinguishedName>;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                ReadResultData._default_value_for_aliasDereferenced;
            let notification: OPTIONAL<Attribute[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                entry: (_el: _Element): void => {
                    entry = $._decode_explicit<EntryInformation>(
                        () => _decode_EntryInformation
                    )(_el);
                },
                modifyRights: (_el: _Element): void => {
                    modifyRights = $._decode_explicit<ModifyRights>(
                        () => _decode_ModifyRights
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
                _root_component_type_list_1_spec_for_ReadResultData,
                _extension_additions_list_spec_for_ReadResultData,
                _root_component_type_list_2_spec_for_ReadResultData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ReadResultData(
                /* SET_CONSTRUCTOR_CALL */ entry,
                modifyRights,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_ReadResultData(el);
}

let _cached_encoder_for_ReadResultData: $.ASN1Encoder<ReadResultData> | null = null;

/**
 * @summary Encodes a(n) ReadResultData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReadResultData, encoded as an ASN.1 Element.
 */
export function _encode_ReadResultData(
    value: ReadResultData,
    elGetter: $.ASN1Encoder<ReadResultData>
): _Element {
    if (!_cached_encoder_for_ReadResultData) {
        _cached_encoder_for_ReadResultData = function (
            value: ReadResultData        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_EntryInformation,
                                $.BER
                            )(value.entry, $.BER),
                            /* IF_ABSENT  */ value.modifyRights === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_ModifyRights,
                                      $.BER
                                  )(value.modifyRights, $.BER),
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
                                ReadResultData._default_value_for_aliasDereferenced
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
    return _cached_encoder_for_ReadResultData(value, elGetter);
}


/* eslint-enable */
