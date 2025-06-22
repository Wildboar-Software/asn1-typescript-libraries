/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
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
    ContentConfidentialityAlgorithmIdentifier,
    _decode_ContentConfidentialityAlgorithmIdentifier,
    _encode_ContentConfidentialityAlgorithmIdentifier,
} from '../MTSAbstractService/ContentConfidentialityAlgorithmIdentifier.ta.mjs';
import {
    ContentIntegrityCheck,
    _decode_ContentIntegrityCheck,
    _encode_ContentIntegrityCheck,
} from '../MTSAbstractService/ContentIntegrityCheck.ta.mjs';
import {
    MessageSecurityLabel,
    _decode_MessageSecurityLabel,
    _encode_MessageSecurityLabel,
} from '../MTSAbstractService/MessageSecurityLabel.ta.mjs';
import {
    ProofOfDeliveryRequest,
    _enum_for_ProofOfDeliveryRequest,
    _decode_ProofOfDeliveryRequest,
    _encode_ProofOfDeliveryRequest,
} from '../MTSAbstractService/ProofOfDeliveryRequest.ta.mjs';
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
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'content-integrity-check',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'message-security-label',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'proof-of-delivery-request',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'message-sequence-number',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of MessageTokenSignedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MessageTokenSignedData: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of MessageTokenSignedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MessageTokenSignedData: $.ComponentSpec[] = [];

let _cached_decoder_for_MessageTokenSignedData: $.ASN1Decoder<MessageTokenSignedData> | null = null;

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

let _cached_encoder_for_MessageTokenSignedData: $.ASN1Encoder<MessageTokenSignedData> | null = null;

/**
 * @summary Encodes a(n) MessageTokenSignedData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageTokenSignedData, encoded as an ASN.1 Element.
 */
export function _encode_MessageTokenSignedData(
    value: MessageTokenSignedData,
    elGetter: $.ASN1Encoder<MessageTokenSignedData>
) {
    if (!_cached_encoder_for_MessageTokenSignedData) {
        _cached_encoder_for_MessageTokenSignedData = function (
            value: MessageTokenSignedData        ): _Element {
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


/* eslint-enable */
