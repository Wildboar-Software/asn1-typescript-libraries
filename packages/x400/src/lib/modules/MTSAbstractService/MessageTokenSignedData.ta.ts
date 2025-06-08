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
    ContentConfidentialityAlgorithmIdentifier,
    _decode_ContentConfidentialityAlgorithmIdentifier,
    _encode_ContentConfidentialityAlgorithmIdentifier,
} from '../MTSAbstractService/ContentConfidentialityAlgorithmIdentifier.ta';
export {
    ContentConfidentialityAlgorithmIdentifier,
    _decode_ContentConfidentialityAlgorithmIdentifier,
    _encode_ContentConfidentialityAlgorithmIdentifier,
} from '../MTSAbstractService/ContentConfidentialityAlgorithmIdentifier.ta';
import {
    ContentIntegrityCheck,
    _decode_ContentIntegrityCheck,
    _encode_ContentIntegrityCheck,
} from '../MTSAbstractService/ContentIntegrityCheck.ta';
export {
    ContentIntegrityCheck,
    _decode_ContentIntegrityCheck,
    _encode_ContentIntegrityCheck,
} from '../MTSAbstractService/ContentIntegrityCheck.ta';
import {
    MessageSecurityLabel,
    _decode_MessageSecurityLabel,
    _encode_MessageSecurityLabel,
} from '../MTSAbstractService/MessageSecurityLabel.ta';
export {
    MessageSecurityLabel,
    _decode_MessageSecurityLabel,
    _encode_MessageSecurityLabel,
} from '../MTSAbstractService/MessageSecurityLabel.ta';
import {
    ProofOfDeliveryRequest,
    _enum_for_ProofOfDeliveryRequest,
    ProofOfDeliveryRequest_proof_of_delivery_not_requested /* IMPORTED_LONG_ENUMERATION_ITEM */,
    proof_of_delivery_not_requested /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ProofOfDeliveryRequest_proof_of_delivery_requested /* IMPORTED_LONG_ENUMERATION_ITEM */,
    proof_of_delivery_requested /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ProofOfDeliveryRequest,
    _encode_ProofOfDeliveryRequest,
} from '../MTSAbstractService/ProofOfDeliveryRequest.ta';
export {
    ProofOfDeliveryRequest,
    _enum_for_ProofOfDeliveryRequest,
    ProofOfDeliveryRequest_proof_of_delivery_not_requested /* IMPORTED_LONG_ENUMERATION_ITEM */,
    proof_of_delivery_not_requested /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ProofOfDeliveryRequest_proof_of_delivery_requested /* IMPORTED_LONG_ENUMERATION_ITEM */,
    proof_of_delivery_requested /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ProofOfDeliveryRequest,
    _encode_ProofOfDeliveryRequest,
} from '../MTSAbstractService/ProofOfDeliveryRequest.ta';

/* START_OF_SYMBOL_DEFINITION MessageTokenSignedData */
/**
 * @summary MessageTokenSignedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageTokenSignedData ::= SEQUENCE {
 *   content-confidentiality-algorithm-identifier
 *     [0]  ContentConfidentialityAlgorithmIdentifier OPTIONAL,
 *   content-integrity-check
 *     [1]  ContentIntegrityCheck OPTIONAL,
 *   message-security-label
 *     [2]  MessageSecurityLabel OPTIONAL,
 *   proof-of-delivery-request
 *     [3]  ProofOfDeliveryRequest OPTIONAL,
 *   message-sequence-number                       [4]  INTEGER OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class MessageTokenSignedData {
    constructor(
        /**
         * @summary `content_confidentiality_algorithm_identifier`.
         * @public
         * @readonly
         */
        readonly content_confidentiality_algorithm_identifier: OPTIONAL<ContentConfidentialityAlgorithmIdentifier>,
        /**
         * @summary `content_integrity_check`.
         * @public
         * @readonly
         */
        readonly content_integrity_check: OPTIONAL<ContentIntegrityCheck>,
        /**
         * @summary `message_security_label`.
         * @public
         * @readonly
         */
        readonly message_security_label: OPTIONAL<MessageSecurityLabel>,
        /**
         * @summary `proof_of_delivery_request`.
         * @public
         * @readonly
         */
        readonly proof_of_delivery_request: OPTIONAL<ProofOfDeliveryRequest>,
        /**
         * @summary `message_sequence_number`.
         * @public
         * @readonly
         */
        readonly message_sequence_number: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a MessageTokenSignedData
     * @description
     *
     * This takes an `object` and converts it to a `MessageTokenSignedData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessageTokenSignedData`.
     * @returns {MessageTokenSignedData}
     */
    public static _from_object(
        _o: { [_K in keyof MessageTokenSignedData]: MessageTokenSignedData[_K] }
    ): MessageTokenSignedData {
        return new MessageTokenSignedData(
            _o.content_confidentiality_algorithm_identifier,
            _o.content_integrity_check,
            _o.message_security_label,
            _o.proof_of_delivery_request,
            _o.message_sequence_number
        );
    }

    /**
     * @summary The enum used as the type of the component `proof_of_delivery_request`
     * @public
     * @static
     */

    public static _enum_for_proof_of_delivery_request = _enum_for_ProofOfDeliveryRequest;
}
/* END_OF_SYMBOL_DEFINITION MessageTokenSignedData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MessageTokenSignedData */
/**
 * @summary The Leading Root Component Types of MessageTokenSignedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MessageTokenSignedData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'content-confidentiality-algorithm-identifier',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'content-integrity-check',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'message-security-label',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'proof-of-delivery-request',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'message-sequence-number',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MessageTokenSignedData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MessageTokenSignedData */
/**
 * @summary The Trailing Root Component Types of MessageTokenSignedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MessageTokenSignedData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MessageTokenSignedData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MessageTokenSignedData */
/**
 * @summary The Extension Addition Component Types of MessageTokenSignedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MessageTokenSignedData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MessageTokenSignedData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageTokenSignedData */
let _cached_decoder_for_MessageTokenSignedData: $.ASN1Decoder<MessageTokenSignedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageTokenSignedData */

/* START_OF_SYMBOL_DEFINITION _decode_MessageTokenSignedData */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageTokenSignedData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageTokenSignedData} The decoded data structure.
 */
export function _decode_MessageTokenSignedData(el: _Element) {
    if (!_cached_decoder_for_MessageTokenSignedData) {
        _cached_decoder_for_MessageTokenSignedData = function (
            el: _Element
        ): MessageTokenSignedData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let content_confidentiality_algorithm_identifier: OPTIONAL<ContentConfidentialityAlgorithmIdentifier>;
            let content_integrity_check: OPTIONAL<ContentIntegrityCheck>;
            let message_security_label: OPTIONAL<MessageSecurityLabel>;
            let proof_of_delivery_request: OPTIONAL<ProofOfDeliveryRequest>;
            let message_sequence_number: OPTIONAL<INTEGER>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'content-confidentiality-algorithm-identifier': (
                    _el: _Element
                ): void => {
                    content_confidentiality_algorithm_identifier = $._decode_implicit<ContentConfidentialityAlgorithmIdentifier>(
                        () => _decode_ContentConfidentialityAlgorithmIdentifier
                    )(_el);
                },
                'content-integrity-check': (_el: _Element): void => {
                    content_integrity_check = $._decode_implicit<ContentIntegrityCheck>(
                        () => _decode_ContentIntegrityCheck
                    )(_el);
                },
                'message-security-label': (_el: _Element): void => {
                    message_security_label = $._decode_implicit<MessageSecurityLabel>(
                        () => _decode_MessageSecurityLabel
                    )(_el);
                },
                'proof-of-delivery-request': (_el: _Element): void => {
                    proof_of_delivery_request = $._decode_implicit<ProofOfDeliveryRequest>(
                        () => _decode_ProofOfDeliveryRequest
                    )(_el);
                },
                'message-sequence-number': (_el: _Element): void => {
                    message_sequence_number = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MessageTokenSignedData,
                _extension_additions_list_spec_for_MessageTokenSignedData,
                _root_component_type_list_2_spec_for_MessageTokenSignedData,
                undefined
            );
            return new MessageTokenSignedData /* SEQUENCE_CONSTRUCTOR_CALL */(
                content_confidentiality_algorithm_identifier,
                content_integrity_check,
                message_security_label,
                proof_of_delivery_request,
                message_sequence_number
            );
        };
    }
    return _cached_decoder_for_MessageTokenSignedData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageTokenSignedData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageTokenSignedData */
let _cached_encoder_for_MessageTokenSignedData: $.ASN1Encoder<MessageTokenSignedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageTokenSignedData */

/* START_OF_SYMBOL_DEFINITION _encode_MessageTokenSignedData */
/**
 * @summary Encodes a(n) MessageTokenSignedData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageTokenSignedData, encoded as an ASN.1 Element.
 */
export function _encode_MessageTokenSignedData(
    value: MessageTokenSignedData,
    elGetter: $.ASN1Encoder<MessageTokenSignedData>
) {
    if (!_cached_encoder_for_MessageTokenSignedData) {
        _cached_encoder_for_MessageTokenSignedData = function (
            value: MessageTokenSignedData,
            elGetter: $.ASN1Encoder<MessageTokenSignedData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.content_confidentiality_algorithm_identifier ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      _encode_ContentConfidentialityAlgorithmIdentifier,
                                  $.BER
                              )(
                                  value.content_confidentiality_algorithm_identifier,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.content_integrity_check ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_ContentIntegrityCheck,
                                  $.BER
                              )(value.content_integrity_check, $.BER),
                        /* IF_ABSENT  */ value.message_security_label ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_MessageSecurityLabel,
                                  $.BER
                              )(value.message_security_label, $.BER),
                        /* IF_ABSENT  */ value.proof_of_delivery_request ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_ProofOfDeliveryRequest,
                                  $.BER
                              )(value.proof_of_delivery_request, $.BER),
                        /* IF_ABSENT  */ value.message_sequence_number ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.message_sequence_number, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MessageTokenSignedData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageTokenSignedData */

/* eslint-enable */
