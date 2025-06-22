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
    RecipientCertificate,
    _decode_RecipientCertificate,
    _encode_RecipientCertificate,
} from '../MTSAbstractService/RecipientCertificate.ta.mjs';
import {
    ProofOfDelivery,
    _decode_ProofOfDelivery,
    _encode_ProofOfDelivery,
} from '../MTSAbstractService/ProofOfDelivery.ta.mjs';
import {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta.mjs';
/**
 * @summary MessageDeliveryResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageDeliveryResult ::= SET {
 *   recipient-certificate  [0]  RecipientCertificate OPTIONAL,
 *   proof-of-delivery      [1] IMPLICIT ProofOfDelivery OPTIONAL,
 *   ...,
 *   extensions
 *     [2]  SET OF ExtensionField{{MessageDeliveryResultExtensions}} DEFAULT {}
 * }
 * ```
 *
 * @class
 */
export class MessageDeliveryResult {
    constructor(
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
        readonly proof_of_delivery: OPTIONAL<ProofOfDelivery>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MessageDeliveryResult
     * @description
     *
     * This takes an `object` and converts it to a `MessageDeliveryResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessageDeliveryResult`.
     * @returns {MessageDeliveryResult}
     */
    public static _from_object(
        _o: { [_K in keyof MessageDeliveryResult]: MessageDeliveryResult[_K] }
    ): MessageDeliveryResult {
        return new MessageDeliveryResult(
            _o.recipient_certificate,
            _o.proof_of_delivery,
            _o.extensions,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `extensions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_extensions(): ExtensionField[] {
        return [];
    }
}

/**
 * @summary The Leading Root Component Types of MessageDeliveryResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MessageDeliveryResult: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of MessageDeliveryResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MessageDeliveryResult: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of MessageDeliveryResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MessageDeliveryResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'extensions',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

let _cached_decoder_for_MessageDeliveryResult: $.ASN1Decoder<MessageDeliveryResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageDeliveryResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageDeliveryResult} The decoded data structure.
 */
export function _decode_MessageDeliveryResult(el: _Element) {
    if (!_cached_decoder_for_MessageDeliveryResult) {
        _cached_decoder_for_MessageDeliveryResult = function (
            el: _Element
        ): MessageDeliveryResult {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let recipient_certificate: OPTIONAL<RecipientCertificate>;
            let proof_of_delivery: OPTIONAL<ProofOfDelivery>;
            let extensions: OPTIONAL<ExtensionField[]> =
                MessageDeliveryResult._default_value_for_extensions;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
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
                extensions: (_el: _Element): void => {
                    extensions = $._decode_implicit<ExtensionField[]>(() =>
                        $._decodeSetOf<ExtensionField>(
                            () => _decode_ExtensionField
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MessageDeliveryResult,
                _extension_additions_list_spec_for_MessageDeliveryResult,
                _root_component_type_list_2_spec_for_MessageDeliveryResult,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new MessageDeliveryResult /* SET_CONSTRUCTOR_CALL */(
                recipient_certificate,
                proof_of_delivery,
                extensions,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_MessageDeliveryResult(el);
}

let _cached_encoder_for_MessageDeliveryResult: $.ASN1Encoder<MessageDeliveryResult> | null = null;

/**
 * @summary Encodes a(n) MessageDeliveryResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageDeliveryResult, encoded as an ASN.1 Element.
 */
export function _encode_MessageDeliveryResult(
    value: MessageDeliveryResult,
    elGetter: $.ASN1Encoder<MessageDeliveryResult>
) {
    if (!_cached_encoder_for_MessageDeliveryResult) {
        _cached_encoder_for_MessageDeliveryResult = function (
            value: MessageDeliveryResult        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.recipient_certificate ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_RecipientCertificate,
                                      $.BER
                                  )(value.recipient_certificate, $.BER),
                            /* IF_ABSENT  */ value.proof_of_delivery ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_ProofOfDelivery,
                                      $.BER
                                  )(value.proof_of_delivery, $.BER),
                        ],
                        [
                            /* IF_DEFAULT */ value.extensions === undefined ||
                            $.deepEq(
                                value.extensions,
                                MessageDeliveryResult._default_value_for_extensions
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<ExtensionField>(
                                              () => _encode_ExtensionField,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.extensions, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MessageDeliveryResult(value, elGetter);
}


/* eslint-enable */
