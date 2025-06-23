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
/**
 * @summary PerRecipientNonDeliveryReportFields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerRecipientNonDeliveryReportFields ::= SEQUENCE {
 *   non-delivery-reason-code      NonDeliveryReasonCode,
 *   non-delivery-diagnostic-code  NonDeliveryDiagnosticCode OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class PerRecipientNonDeliveryReportFields {
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
     * @summary Restructures an object into a PerRecipientNonDeliveryReportFields
     * @description
     *
     * This takes an `object` and converts it to a `PerRecipientNonDeliveryReportFields`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PerRecipientNonDeliveryReportFields`.
     * @returns {PerRecipientNonDeliveryReportFields}
     */
    public static _from_object(
        _o: {
            [_K in keyof PerRecipientNonDeliveryReportFields]: PerRecipientNonDeliveryReportFields[_K];
        }
    ): PerRecipientNonDeliveryReportFields {
        return new PerRecipientNonDeliveryReportFields(
            _o.non_delivery_reason_code,
            _o.non_delivery_diagnostic_code
        );
    }
}

/**
 * @summary The Leading Root Component Types of PerRecipientNonDeliveryReportFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PerRecipientNonDeliveryReportFields: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'non-delivery-reason-code',
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        'non-delivery-diagnostic-code',
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of PerRecipientNonDeliveryReportFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PerRecipientNonDeliveryReportFields: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of PerRecipientNonDeliveryReportFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PerRecipientNonDeliveryReportFields: $.ComponentSpec[] = [];

let _cached_decoder_for_PerRecipientNonDeliveryReportFields: $.ASN1Decoder<PerRecipientNonDeliveryReportFields> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PerRecipientNonDeliveryReportFields
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PerRecipientNonDeliveryReportFields} The decoded data structure.
 */
export function _decode_PerRecipientNonDeliveryReportFields(el: _Element) {
    if (!_cached_decoder_for_PerRecipientNonDeliveryReportFields) {
        _cached_decoder_for_PerRecipientNonDeliveryReportFields = function (
            el: _Element
        ): PerRecipientNonDeliveryReportFields {
            let non_delivery_reason_code!: NonDeliveryReasonCode;
            let non_delivery_diagnostic_code: OPTIONAL<NonDeliveryDiagnosticCode>;
            const callbacks: $.DecodingMap = {
                'non-delivery-reason-code': (_el: _Element): void => {
                    non_delivery_reason_code = _decode_NonDeliveryReasonCode(
                        _el
                    );
                },
                'non-delivery-diagnostic-code': (_el: _Element): void => {
                    non_delivery_diagnostic_code = _decode_NonDeliveryDiagnosticCode(
                        _el
                    );
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PerRecipientNonDeliveryReportFields,
                _extension_additions_list_spec_for_PerRecipientNonDeliveryReportFields,
                _root_component_type_list_2_spec_for_PerRecipientNonDeliveryReportFields,
                undefined
            );
            return new PerRecipientNonDeliveryReportFields (
                non_delivery_reason_code,
                non_delivery_diagnostic_code
            );
        };
    }
    return _cached_decoder_for_PerRecipientNonDeliveryReportFields(el);
}

let _cached_encoder_for_PerRecipientNonDeliveryReportFields: $.ASN1Encoder<PerRecipientNonDeliveryReportFields> | null = null;

/**
 * @summary Encodes a(n) PerRecipientNonDeliveryReportFields into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerRecipientNonDeliveryReportFields, encoded as an ASN.1 Element.
 */
export function _encode_PerRecipientNonDeliveryReportFields(
    value: PerRecipientNonDeliveryReportFields,
    elGetter: $.ASN1Encoder<PerRecipientNonDeliveryReportFields>
) {
    if (!_cached_encoder_for_PerRecipientNonDeliveryReportFields) {
        _cached_encoder_for_PerRecipientNonDeliveryReportFields = function (
            value: PerRecipientNonDeliveryReportFields        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_NonDeliveryReasonCode(
                            value.non_delivery_reason_code,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.non_delivery_diagnostic_code ===
                        undefined
                            ? undefined
                            : _encode_NonDeliveryDiagnosticCode(
                                  value.non_delivery_diagnostic_code,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PerRecipientNonDeliveryReportFields(
        value,
        elGetter
    );
}


/* eslint-enable */
