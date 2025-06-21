/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    NonDeliveryReasonCode,
    _decode_NonDeliveryReasonCode,
    _encode_NonDeliveryReasonCode,
} from '../MTSAbstractService/NonDeliveryReasonCode.ta.mjs';
import {
    NonDeliveryDiagnosticCode,
    _decode_NonDeliveryDiagnosticCode,
    _encode_NonDeliveryDiagnosticCode,
} from '../MTSAbstractService/NonDeliveryDiagnosticCode.ta.mjs';
import {
    SupplementaryError,
    _decode_SupplementaryError,
    _encode_SupplementaryError,
} from '../MhsAcctAsn1Module/SupplementaryError.ta.mjs';
/**
 * @summary ProcessingError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProcessingError ::= SET {
 *   non-delivery-reason       [0]  NonDeliveryReasonCode OPTIONAL,
 *   non-delivery-diagnostics  [1]  NonDeliveryDiagnosticCode OPTIONAL,
 *   supplementary-info        [2]  SupplementaryError
 * }
 * ```
 *
 * @class
 */
export class ProcessingError {
    constructor(
        /**
         * @summary `non_delivery_reason`.
         * @public
         * @readonly
         */
        readonly non_delivery_reason: OPTIONAL<NonDeliveryReasonCode>,
        /**
         * @summary `non_delivery_diagnostics`.
         * @public
         * @readonly
         */
        readonly non_delivery_diagnostics: OPTIONAL<NonDeliveryDiagnosticCode>,
        /**
         * @summary `supplementary_info`.
         * @public
         * @readonly
         */
        readonly supplementary_info: SupplementaryError
    ) {}

    /**
     * @summary Restructures an object into a ProcessingError
     * @description
     *
     * This takes an `object` and converts it to a `ProcessingError`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProcessingError`.
     * @returns {ProcessingError}
     */
    public static _from_object(
        _o: { [_K in keyof ProcessingError]: ProcessingError[_K] }
    ): ProcessingError {
        return new ProcessingError(
            _o.non_delivery_reason,
            _o.non_delivery_diagnostics,
            _o.supplementary_info
        );
    }
}

/**
 * @summary The Leading Root Component Types of ProcessingError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProcessingError: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'non-delivery-reason',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'non-delivery-diagnostics',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'supplementary-info',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of ProcessingError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProcessingError: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ProcessingError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProcessingError: $.ComponentSpec[] = [];

let _cached_decoder_for_ProcessingError: $.ASN1Decoder<ProcessingError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProcessingError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProcessingError} The decoded data structure.
 */
export function _decode_ProcessingError(el: _Element) {
    if (!_cached_decoder_for_ProcessingError) {
        _cached_decoder_for_ProcessingError = function (
            el: _Element
        ): ProcessingError {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let non_delivery_reason: OPTIONAL<NonDeliveryReasonCode>;
            let non_delivery_diagnostics: OPTIONAL<NonDeliveryDiagnosticCode>;
            let supplementary_info!: SupplementaryError;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'non-delivery-reason': (_el: _Element): void => {
                    non_delivery_reason = $._decode_implicit<NonDeliveryReasonCode>(
                        () => _decode_NonDeliveryReasonCode
                    )(_el);
                },
                'non-delivery-diagnostics': (_el: _Element): void => {
                    non_delivery_diagnostics = $._decode_implicit<NonDeliveryDiagnosticCode>(
                        () => _decode_NonDeliveryDiagnosticCode
                    )(_el);
                },
                'supplementary-info': (_el: _Element): void => {
                    supplementary_info = $._decode_implicit<SupplementaryError>(
                        () => _decode_SupplementaryError
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ProcessingError,
                _extension_additions_list_spec_for_ProcessingError,
                _root_component_type_list_2_spec_for_ProcessingError,
                undefined
            );
            return new ProcessingError /* SET_CONSTRUCTOR_CALL */(
                non_delivery_reason,
                non_delivery_diagnostics,
                supplementary_info
            );
        };
    }
    return _cached_decoder_for_ProcessingError(el);
}

let _cached_encoder_for_ProcessingError: $.ASN1Encoder<ProcessingError> | null = null;

/**
 * @summary Encodes a(n) ProcessingError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProcessingError, encoded as an ASN.1 Element.
 */
export function _encode_ProcessingError(
    value: ProcessingError,
    elGetter: $.ASN1Encoder<ProcessingError>
) {
    if (!_cached_encoder_for_ProcessingError) {
        _cached_encoder_for_ProcessingError = function (
            value: ProcessingError        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.non_delivery_reason === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_NonDeliveryReasonCode,
                                  $.BER
                              )(value.non_delivery_reason, $.BER),
                        /* IF_ABSENT  */ value.non_delivery_diagnostics ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_NonDeliveryDiagnosticCode,
                                  $.BER
                              )(value.non_delivery_diagnostics, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () => _encode_SupplementaryError,
                            $.BER
                        )(value.supplementary_info, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ProcessingError(value, elGetter);
}


/* eslint-enable */
