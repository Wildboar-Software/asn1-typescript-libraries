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
    MSSubmissionOptions,
    _decode_MSSubmissionOptions,
    _encode_MSSubmissionOptions,
} from '../MSAbstractService/MSSubmissionOptions.ta.mjs';
/**
 * @summary IPMAutoDiscardRegistrationParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMAutoDiscardRegistrationParameter ::= SET {
 *   filter                             [0]  Filter OPTIONAL,
 *   submission-options                 [1]  MSSubmissionOptions OPTIONAL,
 *   auto-discard-expired-ipms          [2]  BOOLEAN,
 *   auto-discard-obsoleted-ipms        [3]  BOOLEAN,
 *   restrict-obsoleting-to-originator  [4]  BOOLEAN
 * }
 * ```
 *
 * @class
 */
export class IPMAutoDiscardRegistrationParameter {
    constructor(
        /**
         * @summary `filter`.
         * @public
         * @readonly
         */
        readonly filter: OPTIONAL<Filter>,
        /**
         * @summary `submission_options`.
         * @public
         * @readonly
         */
        readonly submission_options: OPTIONAL<MSSubmissionOptions>,
        /**
         * @summary `auto_discard_expired_ipms`.
         * @public
         * @readonly
         */
        readonly auto_discard_expired_ipms: BOOLEAN,
        /**
         * @summary `auto_discard_obsoleted_ipms`.
         * @public
         * @readonly
         */
        readonly auto_discard_obsoleted_ipms: BOOLEAN,
        /**
         * @summary `restrict_obsoleting_to_originator`.
         * @public
         * @readonly
         */
        readonly restrict_obsoleting_to_originator: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a IPMAutoDiscardRegistrationParameter
     * @description
     *
     * This takes an `object` and converts it to a `IPMAutoDiscardRegistrationParameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPMAutoDiscardRegistrationParameter`.
     * @returns {IPMAutoDiscardRegistrationParameter}
     */
    public static _from_object(
        _o: {
            [_K in keyof IPMAutoDiscardRegistrationParameter]: IPMAutoDiscardRegistrationParameter[_K];
        }
    ): IPMAutoDiscardRegistrationParameter {
        return new IPMAutoDiscardRegistrationParameter(
            _o.filter,
            _o.submission_options,
            _o.auto_discard_expired_ipms,
            _o.auto_discard_obsoleted_ipms,
            _o.restrict_obsoleting_to_originator
        );
    }
}

/**
 * @summary The Leading Root Component Types of IPMAutoDiscardRegistrationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IPMAutoDiscardRegistrationParameter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'filter',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'submission-options',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'auto-discard-expired-ipms',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'auto-discard-obsoleted-ipms',
        false,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'restrict-obsoleting-to-originator',
        false,
        $.hasTag(_TagClass.context, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of IPMAutoDiscardRegistrationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IPMAutoDiscardRegistrationParameter: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of IPMAutoDiscardRegistrationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IPMAutoDiscardRegistrationParameter: $.ComponentSpec[] = [];

let _cached_decoder_for_IPMAutoDiscardRegistrationParameter: $.ASN1Decoder<IPMAutoDiscardRegistrationParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPMAutoDiscardRegistrationParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IPMAutoDiscardRegistrationParameter} The decoded data structure.
 */
export function _decode_IPMAutoDiscardRegistrationParameter(el: _Element) {
    if (!_cached_decoder_for_IPMAutoDiscardRegistrationParameter) {
        _cached_decoder_for_IPMAutoDiscardRegistrationParameter = function (
            el: _Element
        ): IPMAutoDiscardRegistrationParameter {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let filter: OPTIONAL<Filter>;
            let submission_options: OPTIONAL<MSSubmissionOptions>;
            let auto_discard_expired_ipms!: BOOLEAN;
            let auto_discard_obsoleted_ipms!: BOOLEAN;
            let restrict_obsoleting_to_originator!: BOOLEAN;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                filter: (_el: _Element): void => {
                    filter = $._decode_explicit<Filter>(() => _decode_Filter)(
                        _el
                    );
                },
                'submission-options': (_el: _Element): void => {
                    submission_options = $._decode_explicit<MSSubmissionOptions>(
                        () => _decode_MSSubmissionOptions
                    )(_el);
                },
                'auto-discard-expired-ipms': (_el: _Element): void => {
                    auto_discard_expired_ipms = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                'auto-discard-obsoleted-ipms': (_el: _Element): void => {
                    auto_discard_obsoleted_ipms = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                'restrict-obsoleting-to-originator': (_el: _Element): void => {
                    restrict_obsoleting_to_originator = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IPMAutoDiscardRegistrationParameter,
                _extension_additions_list_spec_for_IPMAutoDiscardRegistrationParameter,
                _root_component_type_list_2_spec_for_IPMAutoDiscardRegistrationParameter,
                undefined
            );
            return new IPMAutoDiscardRegistrationParameter /* SET_CONSTRUCTOR_CALL */(
                filter,
                submission_options,
                auto_discard_expired_ipms,
                auto_discard_obsoleted_ipms,
                restrict_obsoleting_to_originator
            );
        };
    }
    return _cached_decoder_for_IPMAutoDiscardRegistrationParameter(el);
}

let _cached_encoder_for_IPMAutoDiscardRegistrationParameter: $.ASN1Encoder<IPMAutoDiscardRegistrationParameter> | null = null;

/**
 * @summary Encodes a(n) IPMAutoDiscardRegistrationParameter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPMAutoDiscardRegistrationParameter, encoded as an ASN.1 Element.
 */
export function _encode_IPMAutoDiscardRegistrationParameter(
    value: IPMAutoDiscardRegistrationParameter,
    elGetter: $.ASN1Encoder<IPMAutoDiscardRegistrationParameter>
) {
    if (!_cached_encoder_for_IPMAutoDiscardRegistrationParameter) {
        _cached_encoder_for_IPMAutoDiscardRegistrationParameter = function (
            value: IPMAutoDiscardRegistrationParameter        ): _Element {
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
                        /* IF_ABSENT  */ value.submission_options === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_MSSubmissionOptions,
                                  $.BER
                              )(value.submission_options, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            2,
                            () => $._encodeBoolean,
                            $.BER
                        )(value.auto_discard_expired_ipms, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            3,
                            () => $._encodeBoolean,
                            $.BER
                        )(value.auto_discard_obsoleted_ipms, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            4,
                            () => $._encodeBoolean,
                            $.BER
                        )(value.restrict_obsoleting_to_originator, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_IPMAutoDiscardRegistrationParameter(
        value,
        elGetter
    );
}


/* eslint-enable */
