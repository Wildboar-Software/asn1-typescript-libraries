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
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta.mjs';
import {
    Time,
    _decode_Time,
    _encode_Time,
} from '../MTSAbstractService/Time.ta.mjs';
import {
    DeliveryService,
    _decode_DeliveryService,
    _encode_DeliveryService,
} from '../MhsAcctAsn1Module/DeliveryService.ta.mjs';
import {
    ConversionStatistics,
    _decode_ConversionStatistics,
    _encode_ConversionStatistics,
} from '../MhsAcctAsn1Module/ConversionStatistics.ta.mjs';
/**
 * @summary DeliveredRecipientField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveredRecipientField ::= SET {
 *   recipient-name         ORAddressAndOptionalDirectoryName,
 *   message-delivery-time  Time,
 *   delivery-service       [1]  DeliveryService OPTIONAL,
 *   --  absence means no delivery cost incurred
 *   conversion-statistics  [2]  ConversionStatistics OPTIONAL, --  absence means no conversion cost incurred
 *   edirector-name         [5]  ORAddressAndOptionalDirectoryName OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class DeliveredRecipientField {
    constructor(
        /**
         * @summary `recipient_name`.
         * @public
         * @readonly
         */
        readonly recipient_name: ORAddressAndOptionalDirectoryName,
        /**
         * @summary `message_delivery_time`.
         * @public
         * @readonly
         */
        readonly message_delivery_time: Time,
        /**
         * @summary `delivery_service`.
         * @public
         * @readonly
         */
        readonly delivery_service: OPTIONAL<DeliveryService>,
        /**
         * @summary `conversion_statistics`.
         * @public
         * @readonly
         */
        readonly conversion_statistics: OPTIONAL<ConversionStatistics>,
        /**
         * @summary `edirector_name`.
         * @public
         * @readonly
         */
        readonly edirector_name: OPTIONAL<ORAddressAndOptionalDirectoryName>
    ) {}

    /**
     * @summary Restructures an object into a DeliveredRecipientField
     * @description
     *
     * This takes an `object` and converts it to a `DeliveredRecipientField`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeliveredRecipientField`.
     * @returns {DeliveredRecipientField}
     */
    public static _from_object(
        _o: {
            [_K in keyof DeliveredRecipientField]: DeliveredRecipientField[_K];
        }
    ): DeliveredRecipientField {
        return new DeliveredRecipientField(
            _o.recipient_name,
            _o.message_delivery_time,
            _o.delivery_service,
            _o.conversion_statistics,
            _o.edirector_name
        );
    }
}

/**
 * @summary The Leading Root Component Types of DeliveredRecipientField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeliveredRecipientField: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'recipient-name',
        false,
        $.hasTag(_TagClass.application, 0)
    ),
    new $.ComponentSpec(
        'message-delivery-time',
        false,
        $.hasTag(_TagClass.universal, 23)
    ),
    new $.ComponentSpec(
        'delivery-service',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'conversion-statistics',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'edirector-name',
        true,
        $.hasTag(_TagClass.context, 5)
    ),
];

/**
 * @summary The Trailing Root Component Types of DeliveredRecipientField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeliveredRecipientField: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DeliveredRecipientField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeliveredRecipientField: $.ComponentSpec[] = [];

let _cached_decoder_for_DeliveredRecipientField: $.ASN1Decoder<DeliveredRecipientField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeliveredRecipientField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliveredRecipientField} The decoded data structure.
 */
export function _decode_DeliveredRecipientField(el: _Element) {
    if (!_cached_decoder_for_DeliveredRecipientField) {
        _cached_decoder_for_DeliveredRecipientField = function (
            el: _Element
        ): DeliveredRecipientField {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let recipient_name!: ORAddressAndOptionalDirectoryName;
            let message_delivery_time!: Time;
            let delivery_service: OPTIONAL<DeliveryService>;
            let conversion_statistics: OPTIONAL<ConversionStatistics>;
            let edirector_name: OPTIONAL<ORAddressAndOptionalDirectoryName>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                'recipient-name': (_el: _Element): void => {
                    recipient_name = _decode_ORAddressAndOptionalDirectoryName(
                        _el
                    );
                },
                'message-delivery-time': (_el: _Element): void => {
                    message_delivery_time = _decode_Time(_el);
                },
                'delivery-service': (_el: _Element): void => {
                    delivery_service = $._decode_implicit<DeliveryService>(
                        () => _decode_DeliveryService
                    )(_el);
                },
                'conversion-statistics': (_el: _Element): void => {
                    conversion_statistics = $._decode_implicit<ConversionStatistics>(
                        () => _decode_ConversionStatistics
                    )(_el);
                },
                'edirector-name': (_el: _Element): void => {
                    edirector_name = $._decode_implicit<ORAddressAndOptionalDirectoryName>(
                        () => _decode_ORAddressAndOptionalDirectoryName
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeliveredRecipientField,
                _extension_additions_list_spec_for_DeliveredRecipientField,
                _root_component_type_list_2_spec_for_DeliveredRecipientField,
                undefined
            );
            return new DeliveredRecipientField /* SET_CONSTRUCTOR_CALL */(
                recipient_name,
                message_delivery_time,
                delivery_service,
                conversion_statistics,
                edirector_name
            );
        };
    }
    return _cached_decoder_for_DeliveredRecipientField(el);
}

let _cached_encoder_for_DeliveredRecipientField: $.ASN1Encoder<DeliveredRecipientField> | null = null;

/**
 * @summary Encodes a(n) DeliveredRecipientField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliveredRecipientField, encoded as an ASN.1 Element.
 */
export function _encode_DeliveredRecipientField(
    value: DeliveredRecipientField,
    elGetter: $.ASN1Encoder<DeliveredRecipientField>
) {
    if (!_cached_encoder_for_DeliveredRecipientField) {
        _cached_encoder_for_DeliveredRecipientField = function (
            value: DeliveredRecipientField        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ORAddressAndOptionalDirectoryName(
                            value.recipient_name,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Time(
                            value.message_delivery_time,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.delivery_service === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_DeliveryService,
                                  $.BER
                              )(value.delivery_service, $.BER),
                        /* IF_ABSENT  */ value.conversion_statistics ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_ConversionStatistics,
                                  $.BER
                              )(value.conversion_statistics, $.BER),
                        /* IF_ABSENT  */ value.edirector_name === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () =>
                                      _encode_ORAddressAndOptionalDirectoryName,
                                  $.BER
                              )(value.edirector_name, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DeliveredRecipientField(value, elGetter);
}


/* eslint-enable */
