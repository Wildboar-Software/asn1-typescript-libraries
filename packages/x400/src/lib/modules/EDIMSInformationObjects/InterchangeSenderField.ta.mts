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
 * @summary InterchangeSenderField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InterchangeSenderField ::= SEQUENCE {
 *   sender-identification          [0]  IdentificationCode,
 *   identification-code-qualifier  [1]  IdentificationCodeQualifier OPTIONAL,
 *   address-for-reverse-routing    [2]  RoutingAddress OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class InterchangeSenderField {
    constructor(
        /**
         * @summary `sender_identification`.
         * @public
         * @readonly
         */
        readonly sender_identification: IdentificationCode,
        /**
         * @summary `identification_code_qualifier`.
         * @public
         * @readonly
         */
        readonly identification_code_qualifier: OPTIONAL<IdentificationCodeQualifier>,
        /**
         * @summary `address_for_reverse_routing`.
         * @public
         * @readonly
         */
        readonly address_for_reverse_routing: OPTIONAL<RoutingAddress>
    ) {}

    /**
     * @summary Restructures an object into a InterchangeSenderField
     * @description
     *
     * This takes an `object` and converts it to a `InterchangeSenderField`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InterchangeSenderField`.
     * @returns {InterchangeSenderField}
     */
    public static _from_object(
        _o: { [_K in keyof InterchangeSenderField]: InterchangeSenderField[_K] }
    ): InterchangeSenderField {
        return new InterchangeSenderField(
            _o.sender_identification,
            _o.identification_code_qualifier,
            _o.address_for_reverse_routing
        );
    }
}

/**
 * @summary The Leading Root Component Types of InterchangeSenderField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InterchangeSenderField: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'sender-identification',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'identification-code-qualifier',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'address-for-reverse-routing',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of InterchangeSenderField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InterchangeSenderField: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of InterchangeSenderField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InterchangeSenderField: $.ComponentSpec[] = [];

let _cached_decoder_for_InterchangeSenderField: $.ASN1Decoder<InterchangeSenderField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InterchangeSenderField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InterchangeSenderField} The decoded data structure.
 */
export function _decode_InterchangeSenderField(el: _Element) {
    if (!_cached_decoder_for_InterchangeSenderField) {
        _cached_decoder_for_InterchangeSenderField = function (
            el: _Element
        ): InterchangeSenderField {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let sender_identification!: IdentificationCode;
            let identification_code_qualifier: OPTIONAL<IdentificationCodeQualifier>;
            let address_for_reverse_routing: OPTIONAL<RoutingAddress>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'sender-identification': (_el: _Element): void => {
                    sender_identification = $._decode_implicit<IdentificationCode>(
                        () => _decode_IdentificationCode
                    )(_el);
                },
                'identification-code-qualifier': (_el: _Element): void => {
                    identification_code_qualifier = $._decode_implicit<IdentificationCodeQualifier>(
                        () => _decode_IdentificationCodeQualifier
                    )(_el);
                },
                'address-for-reverse-routing': (_el: _Element): void => {
                    address_for_reverse_routing = $._decode_implicit<RoutingAddress>(
                        () => _decode_RoutingAddress
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_InterchangeSenderField,
                _extension_additions_list_spec_for_InterchangeSenderField,
                _root_component_type_list_2_spec_for_InterchangeSenderField,
                undefined
            );
            return new InterchangeSenderField /* SEQUENCE_CONSTRUCTOR_CALL */(
                sender_identification,
                identification_code_qualifier,
                address_for_reverse_routing
            );
        };
    }
    return _cached_decoder_for_InterchangeSenderField(el);
}

let _cached_encoder_for_InterchangeSenderField: $.ASN1Encoder<InterchangeSenderField> | null = null;

/**
 * @summary Encodes a(n) InterchangeSenderField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InterchangeSenderField, encoded as an ASN.1 Element.
 */
export function _encode_InterchangeSenderField(
    value: InterchangeSenderField,
    elGetter: $.ASN1Encoder<InterchangeSenderField>
) {
    if (!_cached_encoder_for_InterchangeSenderField) {
        _cached_encoder_for_InterchangeSenderField = function (
            value: InterchangeSenderField        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_IdentificationCode,
                            $.BER
                        )(value.sender_identification, $.BER),
                        /* IF_ABSENT  */ value.identification_code_qualifier ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_IdentificationCodeQualifier,
                                  $.BER
                              )(value.identification_code_qualifier, $.BER),
                        /* IF_ABSENT  */ value.address_for_reverse_routing ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_RoutingAddress,
                                  $.BER
                              )(value.address_for_reverse_routing, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_InterchangeSenderField(value, elGetter);
}


/* eslint-enable */
