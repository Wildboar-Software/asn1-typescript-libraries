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
    IdentificationCode,
    _decode_IdentificationCode,
    _encode_IdentificationCode,
} from '../EDIMSInformationObjects/IdentificationCode.ta';
export {
    IdentificationCode,
    _decode_IdentificationCode,
    _encode_IdentificationCode,
} from '../EDIMSInformationObjects/IdentificationCode.ta';
import {
    IdentificationCodeQualifier,
    _decode_IdentificationCodeQualifier,
    _encode_IdentificationCodeQualifier,
} from '../EDIMSInformationObjects/IdentificationCodeQualifier.ta';
export {
    IdentificationCodeQualifier,
    _decode_IdentificationCodeQualifier,
    _encode_IdentificationCodeQualifier,
} from '../EDIMSInformationObjects/IdentificationCodeQualifier.ta';
import {
    RoutingAddress,
    _decode_RoutingAddress,
    _encode_RoutingAddress,
} from '../EDIMSInformationObjects/RoutingAddress.ta';
export {
    RoutingAddress,
    _decode_RoutingAddress,
    _encode_RoutingAddress,
} from '../EDIMSInformationObjects/RoutingAddress.ta';

/* START_OF_SYMBOL_DEFINITION InterchangeRecipientField */
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
/* END_OF_SYMBOL_DEFINITION InterchangeRecipientField */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InterchangeRecipientField */
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
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'identification-code-qualifier',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'routing-address',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InterchangeRecipientField */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InterchangeRecipientField */
/**
 * @summary The Trailing Root Component Types of InterchangeRecipientField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InterchangeRecipientField: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InterchangeRecipientField */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InterchangeRecipientField */
/**
 * @summary The Extension Addition Component Types of InterchangeRecipientField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InterchangeRecipientField: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InterchangeRecipientField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InterchangeRecipientField */
let _cached_decoder_for_InterchangeRecipientField: $.ASN1Decoder<InterchangeRecipientField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InterchangeRecipientField */

/* START_OF_SYMBOL_DEFINITION _decode_InterchangeRecipientField */
/**
 * @summary Decodes an ASN.1 element into a(n) InterchangeRecipientField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InterchangeRecipientField} The decoded data structure.
 */
export function _decode_InterchangeRecipientField(el: _Element) {
    if (!_cached_decoder_for_InterchangeRecipientField) {
        _cached_decoder_for_InterchangeRecipientField = function (
            el: _Element
        ): InterchangeRecipientField {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let recipient_identification!: IdentificationCode;
            let identification_code_qualifier: OPTIONAL<IdentificationCodeQualifier>;
            let routing_address: OPTIONAL<RoutingAddress>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
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
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_InterchangeRecipientField,
                _extension_additions_list_spec_for_InterchangeRecipientField,
                _root_component_type_list_2_spec_for_InterchangeRecipientField,
                undefined
            );
            return new InterchangeRecipientField /* SEQUENCE_CONSTRUCTOR_CALL */(
                recipient_identification,
                identification_code_qualifier,
                routing_address
            );
        };
    }
    return _cached_decoder_for_InterchangeRecipientField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InterchangeRecipientField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InterchangeRecipientField */
let _cached_encoder_for_InterchangeRecipientField: $.ASN1Encoder<InterchangeRecipientField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InterchangeRecipientField */

/* START_OF_SYMBOL_DEFINITION _encode_InterchangeRecipientField */
/**
 * @summary Encodes a(n) InterchangeRecipientField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InterchangeRecipientField, encoded as an ASN.1 Element.
 */
export function _encode_InterchangeRecipientField(
    value: InterchangeRecipientField,
    elGetter: $.ASN1Encoder<InterchangeRecipientField>
) {
    if (!_cached_encoder_for_InterchangeRecipientField) {
        _cached_encoder_for_InterchangeRecipientField = function (
            value: InterchangeRecipientField,
            elGetter: $.ASN1Encoder<InterchangeRecipientField>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_InterchangeRecipientField */

/* eslint-enable */
