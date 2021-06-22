/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
import { _root_component_type_list_1_spec_for_CommonResultsSeq } from "../DirectoryAbstractService/CommonResultsSeq.ta";

/* START_OF_SYMBOL_DEFINITION AddEntryResultData */
/**
 * @summary AddEntryResultData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddEntryResultData ::= SEQUENCE {
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResultsSeq }
 * ```
 *
 * @class
 */
export class AddEntryResultData {
    constructor(
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
        readonly securityParameters: OPTIONAL<SecurityParameters> /* REPLICATED_COMPONENT */,
        /**
         * @summary `performer`.
         * @public
         * @readonly
         */
        readonly performer: OPTIONAL<DistinguishedName> /* REPLICATED_COMPONENT */,
        /**
         * @summary `aliasDereferenced`.
         * @public
         * @readonly
         */
        readonly aliasDereferenced: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        /**
         * @summary `notification`.
         * @public
         * @readonly
         */
        readonly notification: OPTIONAL<Attribute[]> /* REPLICATED_COMPONENT */
    ) {}

    /**
     * @summary Restructures an object into a AddEntryResultData
     * @description
     *
     * This takes an `object` and converts it to a `AddEntryResultData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddEntryResultData`.
     * @returns {AddEntryResultData}
     */
    public static _from_object(
        _o: { [_K in keyof AddEntryResultData]: AddEntryResultData[_K] }
    ): AddEntryResultData {
        return new AddEntryResultData(
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
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION AddEntryResultData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AddEntryResultData */
/**
 * @summary The Leading Root Component Types of AddEntryResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddEntryResultData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AddEntryResultData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AddEntryResultData */
/**
 * @summary The Trailing Root Component Types of AddEntryResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddEntryResultData: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_CommonResultsSeq,
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AddEntryResultData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AddEntryResultData */
/**
 * @summary The Extension Addition Component Types of AddEntryResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddEntryResultData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AddEntryResultData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddEntryResultData */
let _cached_decoder_for_AddEntryResultData: $.ASN1Decoder<AddEntryResultData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddEntryResultData */

/* START_OF_SYMBOL_DEFINITION _decode_AddEntryResultData */
/**
 * @summary Decodes an ASN.1 element into a(n) AddEntryResultData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddEntryResultData} The decoded data structure.
 */
export function _decode_AddEntryResultData(el: _Element) {
    if (!_cached_decoder_for_AddEntryResultData) {
        _cached_decoder_for_AddEntryResultData = function (
            el: _Element
        ): AddEntryResultData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let _unrecognizedExtensionsList: _Element[] = [];
            let securityParameters: OPTIONAL<SecurityParameters>;
            let performer: OPTIONAL<DistinguishedName>;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                AddEntryResultData._default_value_for_aliasDereferenced;
            let notification: OPTIONAL<Attribute[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
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
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AddEntryResultData,
                _extension_additions_list_spec_for_AddEntryResultData,
                _root_component_type_list_2_spec_for_AddEntryResultData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AddEntryResultData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_AddEntryResultData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddEntryResultData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddEntryResultData */
let _cached_encoder_for_AddEntryResultData: $.ASN1Encoder<AddEntryResultData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddEntryResultData */

/* START_OF_SYMBOL_DEFINITION _encode_AddEntryResultData */
/**
 * @summary Encodes a(n) AddEntryResultData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddEntryResultData, encoded as an ASN.1 Element.
 */
export function _encode_AddEntryResultData(
    value: AddEntryResultData,
    elGetter: $.ASN1Encoder<AddEntryResultData>
) {
    if (!_cached_encoder_for_AddEntryResultData) {
        _cached_encoder_for_AddEntryResultData = function (
            value: AddEntryResultData,
            elGetter: $.ASN1Encoder<AddEntryResultData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
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
                                AddEntryResultData._default_value_for_aliasDereferenced
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
    return _cached_encoder_for_AddEntryResultData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddEntryResultData */

/* eslint-enable */
