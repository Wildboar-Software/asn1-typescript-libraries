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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
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
    SupplementaryInformation,
    _decode_SupplementaryInformation,
    _encode_SupplementaryInformation,
} from '../MTSAbstractService/SupplementaryInformation.ta.mjs';
/**
 * @summary NonDeliveryInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonDeliveryInformation ::= SEQUENCE {
 *   reason                     [0]  NonDeliveryReasonCode,
 *   diagnostic                 [1]  NonDeliveryDiagnosticCode OPTIONAL,
 *   supplementary-information  [2]  SupplementaryInformation OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class NonDeliveryInformation {
    constructor(
        /**
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: NonDeliveryReasonCode,
        /**
         * @summary `diagnostic`.
         * @public
         * @readonly
         */
        readonly diagnostic: OPTIONAL<NonDeliveryDiagnosticCode>,
        /**
         * @summary `supplementary_information`.
         * @public
         * @readonly
         */
        readonly supplementary_information: OPTIONAL<SupplementaryInformation>
    ) {}

    /**
     * @summary Restructures an object into a NonDeliveryInformation
     * @description
     *
     * This takes an `object` and converts it to a `NonDeliveryInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NonDeliveryInformation`.
     * @returns {NonDeliveryInformation}
     */
    public static _from_object(
        _o: { [_K in keyof NonDeliveryInformation]: NonDeliveryInformation[_K] }
    ): NonDeliveryInformation {
        return new NonDeliveryInformation(
            _o.reason,
            _o.diagnostic,
            _o.supplementary_information
        );
    }
}

/**
 * @summary The Leading Root Component Types of NonDeliveryInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NonDeliveryInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'reason',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'diagnostic',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'supplementary-information',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of NonDeliveryInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NonDeliveryInformation: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of NonDeliveryInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NonDeliveryInformation: $.ComponentSpec[] = [];

let _cached_decoder_for_NonDeliveryInformation: $.ASN1Decoder<NonDeliveryInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NonDeliveryInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NonDeliveryInformation} The decoded data structure.
 */
export function _decode_NonDeliveryInformation(el: _Element) {
    if (!_cached_decoder_for_NonDeliveryInformation) {
        _cached_decoder_for_NonDeliveryInformation = function (
            el: _Element
        ): NonDeliveryInformation {
            let reason!: NonDeliveryReasonCode;
            let diagnostic: OPTIONAL<NonDeliveryDiagnosticCode>;
            let supplementary_information: OPTIONAL<SupplementaryInformation>;
            const callbacks: $.DecodingMap = {
                reason: (_el: _Element): void => {
                    reason = $._decode_implicit<NonDeliveryReasonCode>(
                        () => _decode_NonDeliveryReasonCode
                    )(_el);
                },
                diagnostic: (_el: _Element): void => {
                    diagnostic = $._decode_implicit<NonDeliveryDiagnosticCode>(
                        () => _decode_NonDeliveryDiagnosticCode
                    )(_el);
                },
                'supplementary-information': (_el: _Element): void => {
                    supplementary_information = $._decode_implicit<SupplementaryInformation>(
                        () => _decode_SupplementaryInformation
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NonDeliveryInformation,
                _extension_additions_list_spec_for_NonDeliveryInformation,
                _root_component_type_list_2_spec_for_NonDeliveryInformation,
                undefined
            );
            return new NonDeliveryInformation (
                reason,
                diagnostic,
                supplementary_information
            );
        };
    }
    return _cached_decoder_for_NonDeliveryInformation(el);
}

let _cached_encoder_for_NonDeliveryInformation: $.ASN1Encoder<NonDeliveryInformation> | null = null;

/**
 * @summary Encodes a(n) NonDeliveryInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NonDeliveryInformation, encoded as an ASN.1 Element.
 */
export function _encode_NonDeliveryInformation(
    value: NonDeliveryInformation,
    elGetter: $.ASN1Encoder<NonDeliveryInformation>
) {
    if (!_cached_encoder_for_NonDeliveryInformation) {
        _cached_encoder_for_NonDeliveryInformation = function (
            value: NonDeliveryInformation        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_NonDeliveryReasonCode,
                            $.BER
                        )(value.reason, $.BER),
                        /* IF_ABSENT  */ value.diagnostic === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_NonDeliveryDiagnosticCode,
                                  $.BER
                              )(value.diagnostic, $.BER),
                        /* IF_ABSENT  */ value.supplementary_information ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_SupplementaryInformation,
                                  $.BER
                              )(value.supplementary_information, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NonDeliveryInformation(value, elGetter);
}


/* eslint-enable */
