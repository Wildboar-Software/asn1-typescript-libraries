/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta';
export {
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta';
import {
    Time,
    _decode_Time,
    _encode_Time,
} from '../MTSAbstractService/Time.ta';
export {
    Time,
    _decode_Time,
    _encode_Time,
} from '../MTSAbstractService/Time.ta';
import {
    DeliveryService,
    _decode_DeliveryService,
    _encode_DeliveryService,
} from '../MhsAcctAsn1Module/DeliveryService.ta';
export {
    DeliveryService,
    _decode_DeliveryService,
    _encode_DeliveryService,
} from '../MhsAcctAsn1Module/DeliveryService.ta';
import {
    ConversionStatistics,
    _decode_ConversionStatistics,
    _encode_ConversionStatistics,
} from '../MhsAcctAsn1Module/ConversionStatistics.ta';
export {
    ConversionStatistics,
    _decode_ConversionStatistics,
    _encode_ConversionStatistics,
} from '../MhsAcctAsn1Module/ConversionStatistics.ta';

/* START_OF_SYMBOL_DEFINITION DeliveredRecipientField */
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
/* END_OF_SYMBOL_DEFINITION DeliveredRecipientField */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeliveredRecipientField */
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
        $.hasTag(_TagClass.application, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'message-delivery-time',
        false,
        $.hasTag(_TagClass.universal, 23),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'delivery-service',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'conversion-statistics',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'edirector-name',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeliveredRecipientField */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeliveredRecipientField */
/**
 * @summary The Trailing Root Component Types of DeliveredRecipientField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeliveredRecipientField: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeliveredRecipientField */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeliveredRecipientField */
/**
 * @summary The Extension Addition Component Types of DeliveredRecipientField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeliveredRecipientField: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeliveredRecipientField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveredRecipientField */
let _cached_decoder_for_DeliveredRecipientField: $.ASN1Decoder<DeliveredRecipientField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveredRecipientField */

/* START_OF_SYMBOL_DEFINITION _decode_DeliveredRecipientField */
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
            /* START_OF_CALLBACKS_MAP */
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
            /* END_OF_CALLBACKS_MAP */
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
/* END_OF_SYMBOL_DEFINITION _decode_DeliveredRecipientField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveredRecipientField */
let _cached_encoder_for_DeliveredRecipientField: $.ASN1Encoder<DeliveredRecipientField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveredRecipientField */

/* START_OF_SYMBOL_DEFINITION _encode_DeliveredRecipientField */
/**
 * @summary Encodes a(n) DeliveredRecipientField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliveredRecipientField, encoded as an ASN.1 Element.
 */
export function _encode_DeliveredRecipientField(
    value: DeliveredRecipientField,
    elGetter: $.ASN1Encoder<DeliveredRecipientField>
) {
    if (!_cached_encoder_for_DeliveredRecipientField) {
        _cached_encoder_for_DeliveredRecipientField = function (
            value: DeliveredRecipientField,
            elGetter: $.ASN1Encoder<DeliveredRecipientField>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_DeliveredRecipientField */

/* eslint-enable */
