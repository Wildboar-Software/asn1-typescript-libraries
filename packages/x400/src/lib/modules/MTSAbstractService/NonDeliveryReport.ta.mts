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
/* START_OF_SYMBOL_DEFINITION NonDeliveryReport */
/**
 * @summary NonDeliveryReport
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonDeliveryReport ::= SET {
 *   non-delivery-reason-code      [0]  NonDeliveryReasonCode,
 *   non-delivery-diagnostic-code  [1]  NonDeliveryDiagnosticCode OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class NonDeliveryReport {
    constructor(
        /**
         * @summary `non_delivery_reason_code`.
         * @public
         * @readonly
         */
        readonly non_delivery_reason_code: NonDeliveryReasonCode,
        /**
         * @summary `non_delivery_diagnostic_code`.
         * @public
         * @readonly
         */
        readonly non_delivery_diagnostic_code: OPTIONAL<NonDeliveryDiagnosticCode>
    ) {}

    /**
     * @summary Restructures an object into a NonDeliveryReport
     * @description
     *
     * This takes an `object` and converts it to a `NonDeliveryReport`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NonDeliveryReport`.
     * @returns {NonDeliveryReport}
     */
    public static _from_object(
        _o: { [_K in keyof NonDeliveryReport]: NonDeliveryReport[_K] }
    ): NonDeliveryReport {
        return new NonDeliveryReport(
            _o.non_delivery_reason_code,
            _o.non_delivery_diagnostic_code
        );
    }
}
/* END_OF_SYMBOL_DEFINITION NonDeliveryReport */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NonDeliveryReport */
/**
 * @summary The Leading Root Component Types of NonDeliveryReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NonDeliveryReport: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'non-delivery-reason-code',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'non-delivery-diagnostic-code',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NonDeliveryReport */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NonDeliveryReport */
/**
 * @summary The Trailing Root Component Types of NonDeliveryReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NonDeliveryReport: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NonDeliveryReport */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NonDeliveryReport */
/**
 * @summary The Extension Addition Component Types of NonDeliveryReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NonDeliveryReport: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NonDeliveryReport */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NonDeliveryReport */
let _cached_decoder_for_NonDeliveryReport: $.ASN1Decoder<NonDeliveryReport> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NonDeliveryReport */

/* START_OF_SYMBOL_DEFINITION _decode_NonDeliveryReport */
/**
 * @summary Decodes an ASN.1 element into a(n) NonDeliveryReport
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NonDeliveryReport} The decoded data structure.
 */
export function _decode_NonDeliveryReport(el: _Element) {
    if (!_cached_decoder_for_NonDeliveryReport) {
        _cached_decoder_for_NonDeliveryReport = function (
            el: _Element
        ): NonDeliveryReport {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let non_delivery_reason_code!: NonDeliveryReasonCode;
            let non_delivery_diagnostic_code: OPTIONAL<NonDeliveryDiagnosticCode>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'non-delivery-reason-code': (_el: _Element): void => {
                    non_delivery_reason_code = $._decode_implicit<NonDeliveryReasonCode>(
                        () => _decode_NonDeliveryReasonCode
                    )(_el);
                },
                'non-delivery-diagnostic-code': (_el: _Element): void => {
                    non_delivery_diagnostic_code = $._decode_implicit<NonDeliveryDiagnosticCode>(
                        () => _decode_NonDeliveryDiagnosticCode
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NonDeliveryReport,
                _extension_additions_list_spec_for_NonDeliveryReport,
                _root_component_type_list_2_spec_for_NonDeliveryReport,
                undefined
            );
            return new NonDeliveryReport /* SET_CONSTRUCTOR_CALL */(
                non_delivery_reason_code,
                non_delivery_diagnostic_code
            );
        };
    }
    return _cached_decoder_for_NonDeliveryReport(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NonDeliveryReport */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NonDeliveryReport */
let _cached_encoder_for_NonDeliveryReport: $.ASN1Encoder<NonDeliveryReport> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NonDeliveryReport */

/* START_OF_SYMBOL_DEFINITION _encode_NonDeliveryReport */
/**
 * @summary Encodes a(n) NonDeliveryReport into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NonDeliveryReport, encoded as an ASN.1 Element.
 */
export function _encode_NonDeliveryReport(
    value: NonDeliveryReport,
    elGetter: $.ASN1Encoder<NonDeliveryReport>
) {
    if (!_cached_encoder_for_NonDeliveryReport) {
        _cached_encoder_for_NonDeliveryReport = function (
            value: NonDeliveryReport        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_NonDeliveryReasonCode,
                            $.BER
                        )(value.non_delivery_reason_code, $.BER),
                        /* IF_ABSENT  */ value.non_delivery_diagnostic_code ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_NonDeliveryDiagnosticCode,
                                  $.BER
                              )(value.non_delivery_diagnostic_code, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NonDeliveryReport(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NonDeliveryReport */

/* eslint-enable */
