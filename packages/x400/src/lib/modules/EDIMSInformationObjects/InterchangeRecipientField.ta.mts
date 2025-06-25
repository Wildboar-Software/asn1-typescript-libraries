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
    IdentificationCode,
    _decode_IdentificationCode,
    _encode_IdentificationCode,
} from '../EDIMSInformationObjects/IdentificationCode.ta.mjs';
import {
    IdentificationCodeQualifier,
    _decode_IdentificationCodeQualifier,
    _encode_IdentificationCodeQualifier,
} from '../EDIMSInformationObjects/IdentificationCodeQualifier.ta.mjs';
import {
    RoutingAddress,
    _decode_RoutingAddress,
    _encode_RoutingAddress,
} from '../EDIMSInformationObjects/RoutingAddress.ta.mjs';
/**
 * @summary InterchangeRecipientField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InterchangeRecipientField ::= SEQUENCE {
 *   recipient-identification       [0]  IdentificationCode,
 *   identification-code-qualifier  [1]  IdentificationCodeQualifier OPTIONAL,
 *   routing-address                [2]  RoutingAddress OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class InterchangeRecipientField {
    constructor(
        /**
         * @summary `recipient_identification`.
         * @public
         * @readonly
         */
        readonly recipient_identification: IdentificationCode,
        /**
         * @summary `identification_code_qualifier`.
         * @public
         * @readonly
         */
        readonly identification_code_qualifier: OPTIONAL<IdentificationCodeQualifier>,
        /**
         * @summary `routing_address`.
         * @public
         * @readonly
         */
        readonly routing_address: OPTIONAL<RoutingAddress>
    ) {}

    /**
     * @summary Restructures an object into a InterchangeRecipientField
     * @description
     *
     * This takes an `object` and converts it to a `InterchangeRecipientField`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InterchangeRecipientField`.
     * @returns {InterchangeRecipientField}
     */
    public static _from_object(
        _o: {
            [_K in keyof InterchangeRecipientField]: InterchangeRecipientField[_K];
        }
    ): InterchangeRecipientField {
        return new InterchangeRecipientField(
            _o.recipient_identification,
            _o.identification_code_qualifier,
            _o.routing_address
        );
    }
}

/**
 * @summary The Leading Root Component Types of InterchangeRecipientField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InterchangeRecipientField: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'recipient-identification',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'identification-code-qualifier',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'routing-address',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of InterchangeRecipientField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InterchangeRecipientField: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of InterchangeRecipientField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InterchangeRecipientField: $.ComponentSpec[] = [];

let _cached_decoder_for_InterchangeRecipientField: $.ASN1Decoder<InterchangeRecipientField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InterchangeRecipientField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InterchangeRecipientField} The decoded data structure.
 */
export function _decode_InterchangeRecipientField(el: _Element): InterchangeRecipientField {
    if (!_cached_decoder_for_InterchangeRecipientField) {
        _cached_decoder_for_InterchangeRecipientField = function (
            el: _Element
        ): InterchangeRecipientField {
            let recipient_identification!: IdentificationCode;
            let identification_code_qualifier: OPTIONAL<IdentificationCodeQualifier>;
            let routing_address: OPTIONAL<RoutingAddress>;
            const callbacks: $.DecodingMap = {
                'recipient-identification': (_el: _Element): void => {
                    recipient_identification = $._decode_implicit<IdentificationCode>(
                        () => _decode_IdentificationCode
                    )(_el);
                },
                'identification-code-qualifier': (_el: _Element): void => {
                    identification_code_qualifier = $._decode_implicit<IdentificationCodeQualifier>(
                        () => _decode_IdentificationCodeQualifier
                    )(_el);
                },
                'routing-address': (_el: _Element): void => {
                    routing_address = $._decode_implicit<RoutingAddress>(
                        () => _decode_RoutingAddress
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_InterchangeRecipientField,
                _extension_additions_list_spec_for_InterchangeRecipientField,
                _root_component_type_list_2_spec_for_InterchangeRecipientField,
                undefined
            );
            return new InterchangeRecipientField (
                recipient_identification,
                identification_code_qualifier,
                routing_address
            );
        };
    }
    return _cached_decoder_for_InterchangeRecipientField(el);
}

let _cached_encoder_for_InterchangeRecipientField: $.ASN1Encoder<InterchangeRecipientField> | null = null;

/**
 * @summary Encodes a(n) InterchangeRecipientField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InterchangeRecipientField, encoded as an ASN.1 Element.
 */
export function _encode_InterchangeRecipientField(
    value: InterchangeRecipientField,
    elGetter: $.ASN1Encoder<InterchangeRecipientField>
): _Element {
    if (!_cached_encoder_for_InterchangeRecipientField) {
        _cached_encoder_for_InterchangeRecipientField = function (
            value: InterchangeRecipientField        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_IdentificationCode,
                            $.BER
                        )(value.recipient_identification, $.BER),
                        /* IF_ABSENT  */ value.identification_code_qualifier ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_IdentificationCodeQualifier,
                                  $.BER
                              )(value.identification_code_qualifier, $.BER),
                        /* IF_ABSENT  */ value.routing_address === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_RoutingAddress,
                                  $.BER
                              )(value.routing_address, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_InterchangeRecipientField(value, elGetter);
}


/* eslint-enable */
