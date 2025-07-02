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
    _decode_TypeOfMTSUser,
    _encode_TypeOfMTSUser,
} from '../MTSAbstractService/TypeOfMTSUser.ta.mjs';
import {
    RecipientCertificate,
    _decode_RecipientCertificate,
    _encode_RecipientCertificate,
} from '../MTSAbstractService/RecipientCertificate.ta.mjs';
import {
    ProofOfDelivery,
    _decode_ProofOfDelivery,
    _encode_ProofOfDelivery,
} from '../MTSAbstractService/ProofOfDelivery.ta.mjs';
/**
 * @summary PerRecipientDeliveryReportFields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerRecipientDeliveryReportFields ::= SEQUENCE {
 *   message-delivery-time  MessageDeliveryTime,
 *   type-of-MTS-user       TypeOfMTSUser,
 *   recipient-certificate  [0]  RecipientCertificate OPTIONAL,
 *   proof-of-delivery      [1]  ProofOfDelivery OPTIONAL
 * }
 * ```
 *
 */
export class PerRecipientDeliveryReportFields {
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
        readonly type_of_MTS_user: TypeOfMTSUser,
        /**
         * @summary `recipient_certificate`.
         * @public
         * @readonly
         */
        readonly recipient_certificate: OPTIONAL<RecipientCertificate>,
        /**
         * @summary `proof_of_delivery`.
         * @public
         * @readonly
         */
        readonly proof_of_delivery: OPTIONAL<ProofOfDelivery>
    ) {}

    /**
     * @summary Restructures an object into a PerRecipientDeliveryReportFields
     * @description
     *
     * This takes an `object` and converts it to a `PerRecipientDeliveryReportFields`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PerRecipientDeliveryReportFields`.
     * @returns {PerRecipientDeliveryReportFields}
     */
    public static _from_object(
        _o: {
            [_K in keyof PerRecipientDeliveryReportFields]: PerRecipientDeliveryReportFields[_K];
        }
    ): PerRecipientDeliveryReportFields {
        return new PerRecipientDeliveryReportFields(
            _o.message_delivery_time,
            _o.type_of_MTS_user,
            _o.recipient_certificate,
            _o.proof_of_delivery
        );
    }
}

/**
 * @summary The Leading Root Component Types of PerRecipientDeliveryReportFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PerRecipientDeliveryReportFields: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'message-delivery-time',
        false,
        $.hasTag(_TagClass.universal, 23)
    ),
    new $.ComponentSpec(
        'type-of-MTS-user',
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        'recipient-certificate',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'proof-of-delivery',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of PerRecipientDeliveryReportFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PerRecipientDeliveryReportFields: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of PerRecipientDeliveryReportFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PerRecipientDeliveryReportFields: $.ComponentSpec[] = [];

let _cached_decoder_for_PerRecipientDeliveryReportFields: $.ASN1Decoder<PerRecipientDeliveryReportFields> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PerRecipientDeliveryReportFields
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PerRecipientDeliveryReportFields} The decoded data structure.
 */
export function _decode_PerRecipientDeliveryReportFields(el: _Element): PerRecipientDeliveryReportFields {
    if (!_cached_decoder_for_PerRecipientDeliveryReportFields) {
        _cached_decoder_for_PerRecipientDeliveryReportFields = function (
            el: _Element
        ): PerRecipientDeliveryReportFields {
            let message_delivery_time!: MessageDeliveryTime;
            let type_of_MTS_user!: TypeOfMTSUser;
            let recipient_certificate: OPTIONAL<RecipientCertificate>;
            let proof_of_delivery: OPTIONAL<ProofOfDelivery>;
            const callbacks: $.DecodingMap = {
                'message-delivery-time': (_el: _Element): void => {
                    message_delivery_time = _decode_MessageDeliveryTime(_el);
                },
                'type-of-MTS-user': (_el: _Element): void => {
                    type_of_MTS_user = _decode_TypeOfMTSUser(_el);
                },
                'recipient-certificate': (_el: _Element): void => {
                    recipient_certificate = $._decode_implicit<RecipientCertificate>(
                        () => _decode_RecipientCertificate
                    )(_el);
                },
                'proof-of-delivery': (_el: _Element): void => {
                    proof_of_delivery = $._decode_implicit<ProofOfDelivery>(
                        () => _decode_ProofOfDelivery
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PerRecipientDeliveryReportFields,
                _extension_additions_list_spec_for_PerRecipientDeliveryReportFields,
                _root_component_type_list_2_spec_for_PerRecipientDeliveryReportFields,
                undefined
            );
            return new PerRecipientDeliveryReportFields (
                message_delivery_time,
                type_of_MTS_user,
                recipient_certificate,
                proof_of_delivery
            );
        };
    }
    return _cached_decoder_for_PerRecipientDeliveryReportFields(el);
}

let _cached_encoder_for_PerRecipientDeliveryReportFields: $.ASN1Encoder<PerRecipientDeliveryReportFields> | null = null;

/**
 * @summary Encodes a(n) PerRecipientDeliveryReportFields into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerRecipientDeliveryReportFields, encoded as an ASN.1 Element.
 */
export function _encode_PerRecipientDeliveryReportFields(
    value: PerRecipientDeliveryReportFields,
    elGetter: $.ASN1Encoder<PerRecipientDeliveryReportFields>
): _Element {
    if (!_cached_encoder_for_PerRecipientDeliveryReportFields) {
        _cached_encoder_for_PerRecipientDeliveryReportFields = function (
            value: PerRecipientDeliveryReportFields        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_MessageDeliveryTime(
                            value.message_delivery_time,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_TypeOfMTSUser(
                            value.type_of_MTS_user,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.recipient_certificate ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_RecipientCertificate,
                                  $.BER
                              )(value.recipient_certificate, $.BER),
                        /* IF_ABSENT  */ value.proof_of_delivery === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_ProofOfDelivery,
                                  $.BER
                              )(value.proof_of_delivery, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PerRecipientDeliveryReportFields(
        value,
        elGetter
    );
}


/* eslint-enable */
