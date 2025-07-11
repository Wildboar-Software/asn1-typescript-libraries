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
    MessageDeliveryTime,
    _decode_MessageDeliveryTime,
    _encode_MessageDeliveryTime,
} from '../MTSAbstractService/MessageDeliveryTime.ta.mjs';
import {
    TypeOfMTSUser,
    public_ /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_TypeOfMTSUser,
    _encode_TypeOfMTSUser,
} from '../MTSAbstractService/TypeOfMTSUser.ta.mjs';
/**
 * @summary DeliveryReport
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveryReport ::= SET {
 *   message-delivery-time  [0]  MessageDeliveryTime,
 *   type-of-MTS-user       [1]  TypeOfMTSUser DEFAULT public
 * }
 * ```
 *
 */
export class DeliveryReport {
    constructor(
        /**
         * @summary `message_delivery_time`.
         * @public
         * @readonly
         */
        readonly message_delivery_time: MessageDeliveryTime,
        /**
         * @summary `type_of_MTS_user`.
         * @public
         * @readonly
         */
        readonly type_of_MTS_user: OPTIONAL<TypeOfMTSUser>
    ) {}

    /**
     * @summary Restructures an object into a DeliveryReport
     * @description
     *
     * This takes an `object` and converts it to a `DeliveryReport`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeliveryReport`.
     * @returns {DeliveryReport}
     */
    public static _from_object(
        _o: { [_K in keyof DeliveryReport]: DeliveryReport[_K] }
    ): DeliveryReport {
        return new DeliveryReport(
            _o.message_delivery_time,
            _o.type_of_MTS_user
        );
    }

    /**
     * @summary Getter that returns the default value for `type_of_MTS_user`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_type_of_MTS_user(): TypeOfMTSUser {
        return public_;
    }
}

/**
 * @summary The Leading Root Component Types of DeliveryReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeliveryReport: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'message-delivery-time',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'type-of-MTS-user',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of DeliveryReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeliveryReport: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DeliveryReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeliveryReport: $.ComponentSpec[] = [];

let _cached_decoder_for_DeliveryReport: $.ASN1Decoder<DeliveryReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeliveryReport
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliveryReport} The decoded data structure.
 */
export function _decode_DeliveryReport(el: _Element): DeliveryReport {
    if (!_cached_decoder_for_DeliveryReport) {
        _cached_decoder_for_DeliveryReport = function (
            el: _Element
        ): DeliveryReport {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let message_delivery_time!: MessageDeliveryTime;
            let type_of_MTS_user: OPTIONAL<TypeOfMTSUser> =
                DeliveryReport._default_value_for_type_of_MTS_user;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                'message-delivery-time': (_el: _Element): void => {
                    message_delivery_time = $._decode_implicit<MessageDeliveryTime>(
                        () => _decode_MessageDeliveryTime
                    )(_el);
                },
                'type-of-MTS-user': (_el: _Element): void => {
                    type_of_MTS_user = $._decode_implicit<TypeOfMTSUser>(
                        () => _decode_TypeOfMTSUser
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeliveryReport,
                _extension_additions_list_spec_for_DeliveryReport,
                _root_component_type_list_2_spec_for_DeliveryReport,
                undefined
            );
            return new DeliveryReport /* SET_CONSTRUCTOR_CALL */(
                message_delivery_time,
                type_of_MTS_user
            );
        };
    }
    return _cached_decoder_for_DeliveryReport(el);
}

let _cached_encoder_for_DeliveryReport: $.ASN1Encoder<DeliveryReport> | null = null;

/**
 * @summary Encodes a(n) DeliveryReport into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliveryReport, encoded as an ASN.1 Element.
 */
export function _encode_DeliveryReport(
    value: DeliveryReport,
    elGetter: $.ASN1Encoder<DeliveryReport>
): _Element {
    if (!_cached_encoder_for_DeliveryReport) {
        _cached_encoder_for_DeliveryReport = function (
            value: DeliveryReport        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_MessageDeliveryTime,
                            $.BER
                        )(value.message_delivery_time, $.BER),
                        /* IF_DEFAULT */ value.type_of_MTS_user === undefined ||
                        $.deepEq(
                            value.type_of_MTS_user,
                            DeliveryReport._default_value_for_type_of_MTS_user
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_TypeOfMTSUser,
                                  $.BER
                              )(value.type_of_MTS_user, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DeliveryReport(value, elGetter);
}


/* eslint-enable */
