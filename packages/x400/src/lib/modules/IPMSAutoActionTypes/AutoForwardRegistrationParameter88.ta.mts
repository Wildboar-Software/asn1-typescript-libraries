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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    Filter,
    _decode_Filter,
    _encode_Filter,
} from '../MSAbstractService/Filter.ta.mjs';
import {
    AutoForwardArguments,
    _decode_AutoForwardArguments,
    _encode_AutoForwardArguments,
} from '../IPMSAutoActionTypes/AutoForwardArguments.ta.mjs';
import {
    EncodedForwardingInformation,
    _decode_EncodedForwardingInformation,
    _encode_EncodedForwardingInformation,
} from '../IPMSAutoActionTypes/EncodedForwardingInformation.ta.mjs';
/**
 * @summary AutoForwardRegistrationParameter88
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoForwardRegistrationParameter88 ::= SET {
 *   filter                        [0]  Filter OPTIONAL,
 *   auto-forward-arguments        [1]  AutoForwardArguments,
 *   delete-after-auto-forwarding  [2]  BOOLEAN DEFAULT FALSE,
 *   forwarding-information        [3]  EncodedForwardingInformation
 * }
 * ```
 *
 * @class
 */
export class AutoForwardRegistrationParameter88 {
    constructor(
        /**
         * @summary `filter`.
         * @public
         * @readonly
         */
        readonly filter: OPTIONAL<Filter>,
        /**
         * @summary `auto_forward_arguments`.
         * @public
         * @readonly
         */
        readonly auto_forward_arguments: AutoForwardArguments,
        /**
         * @summary `delete_after_auto_forwarding`.
         * @public
         * @readonly
         */
        readonly delete_after_auto_forwarding: OPTIONAL<BOOLEAN>,
        /**
         * @summary `forwarding_information`.
         * @public
         * @readonly
         */
        readonly forwarding_information: EncodedForwardingInformation
    ) {}

    /**
     * @summary Restructures an object into a AutoForwardRegistrationParameter88
     * @description
     *
     * This takes an `object` and converts it to a `AutoForwardRegistrationParameter88`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AutoForwardRegistrationParameter88`.
     * @returns {AutoForwardRegistrationParameter88}
     */
    public static _from_object(
        _o: {
            [_K in keyof AutoForwardRegistrationParameter88]: AutoForwardRegistrationParameter88[_K];
        }
    ): AutoForwardRegistrationParameter88 {
        return new AutoForwardRegistrationParameter88(
            _o.filter,
            _o.auto_forward_arguments,
            _o.delete_after_auto_forwarding,
            _o.forwarding_information
        );
    }

    /**
     * @summary Getter that returns the default value for `delete_after_auto_forwarding`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_delete_after_auto_forwarding() {
        return false;
    }
}

/**
 * @summary The Leading Root Component Types of AutoForwardRegistrationParameter88
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AutoForwardRegistrationParameter88: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'filter',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'auto-forward-arguments',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'delete-after-auto-forwarding',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'forwarding-information',
        false,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of AutoForwardRegistrationParameter88
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AutoForwardRegistrationParameter88: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AutoForwardRegistrationParameter88
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AutoForwardRegistrationParameter88: $.ComponentSpec[] = [];

let _cached_decoder_for_AutoForwardRegistrationParameter88: $.ASN1Decoder<AutoForwardRegistrationParameter88> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AutoForwardRegistrationParameter88
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AutoForwardRegistrationParameter88} The decoded data structure.
 */
export function _decode_AutoForwardRegistrationParameter88(el: _Element) {
    if (!_cached_decoder_for_AutoForwardRegistrationParameter88) {
        _cached_decoder_for_AutoForwardRegistrationParameter88 = function (
            el: _Element
        ): AutoForwardRegistrationParameter88 {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let filter: OPTIONAL<Filter>;
            let auto_forward_arguments!: AutoForwardArguments;
            let delete_after_auto_forwarding: OPTIONAL<BOOLEAN> =
                AutoForwardRegistrationParameter88._default_value_for_delete_after_auto_forwarding;
            let forwarding_information!: EncodedForwardingInformation;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                filter: (_el: _Element): void => {
                    filter = $._decode_explicit<Filter>(() => _decode_Filter)(
                        _el
                    );
                },
                'auto-forward-arguments': (_el: _Element): void => {
                    auto_forward_arguments = $._decode_explicit<AutoForwardArguments>(
                        () => _decode_AutoForwardArguments
                    )(_el);
                },
                'delete-after-auto-forwarding': (_el: _Element): void => {
                    delete_after_auto_forwarding = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                'forwarding-information': (_el: _Element): void => {
                    forwarding_information = $._decode_explicit<EncodedForwardingInformation>(
                        () => _decode_EncodedForwardingInformation
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AutoForwardRegistrationParameter88,
                _extension_additions_list_spec_for_AutoForwardRegistrationParameter88,
                _root_component_type_list_2_spec_for_AutoForwardRegistrationParameter88,
                undefined
            );
            return new AutoForwardRegistrationParameter88 /* SET_CONSTRUCTOR_CALL */(
                filter,
                auto_forward_arguments,
                delete_after_auto_forwarding,
                forwarding_information
            );
        };
    }
    return _cached_decoder_for_AutoForwardRegistrationParameter88(el);
}

let _cached_encoder_for_AutoForwardRegistrationParameter88: $.ASN1Encoder<AutoForwardRegistrationParameter88> | null = null;

/**
 * @summary Encodes a(n) AutoForwardRegistrationParameter88 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoForwardRegistrationParameter88, encoded as an ASN.1 Element.
 */
export function _encode_AutoForwardRegistrationParameter88(
    value: AutoForwardRegistrationParameter88,
    elGetter: $.ASN1Encoder<AutoForwardRegistrationParameter88>
) {
    if (!_cached_encoder_for_AutoForwardRegistrationParameter88) {
        _cached_encoder_for_AutoForwardRegistrationParameter88 = function (
            value: AutoForwardRegistrationParameter88        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.filter === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Filter,
                                  $.BER
                              )(value.filter, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_AutoForwardArguments,
                            $.BER
                        )(value.auto_forward_arguments, $.BER),
                        /* IF_DEFAULT */ value.delete_after_auto_forwarding ===
                            undefined ||
                        $.deepEq(
                            value.delete_after_auto_forwarding,
                            AutoForwardRegistrationParameter88._default_value_for_delete_after_auto_forwarding
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.delete_after_auto_forwarding, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            3,
                            () => _encode_EncodedForwardingInformation,
                            $.BER
                        )(value.forwarding_information, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AutoForwardRegistrationParameter88(
        value,
        elGetter
    );
}


/* eslint-enable */
