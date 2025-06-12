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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    EncryptionKey,
    _decode_EncryptionKey,
    _encode_EncryptionKey,
} from '../MTSAbstractService/EncryptionKey.ta.js';
export {
    EncryptionKey,
    _decode_EncryptionKey,
    _encode_EncryptionKey,
} from '../MTSAbstractService/EncryptionKey.ta.js';
import {
    ContentIntegrityCheck,
    _decode_ContentIntegrityCheck,
    _encode_ContentIntegrityCheck,
} from '../MTSAbstractService/ContentIntegrityCheck.ta.js';
export {
    ContentIntegrityCheck,
    _decode_ContentIntegrityCheck,
    _encode_ContentIntegrityCheck,
} from '../MTSAbstractService/ContentIntegrityCheck.ta.js';
import {
    MessageSecurityLabel,
    _decode_MessageSecurityLabel,
    _encode_MessageSecurityLabel,
} from '../MTSAbstractService/MessageSecurityLabel.ta.js';
export {
    MessageSecurityLabel,
    _decode_MessageSecurityLabel,
    _encode_MessageSecurityLabel,
} from '../MTSAbstractService/MessageSecurityLabel.ta.js';

/* START_OF_SYMBOL_DEFINITION MessageTokenEncryptedData */
/**
 * @summary MessageTokenEncryptedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageTokenEncryptedData ::= SEQUENCE {
 *   content-confidentiality-key  [0]  EncryptionKey OPTIONAL,
 *   content-integrity-check      [1]  ContentIntegrityCheck OPTIONAL,
 *   message-security-label       [2]  MessageSecurityLabel OPTIONAL,
 *   content-integrity-key        [3]  EncryptionKey OPTIONAL,
 *   message-sequence-number      [4]  INTEGER OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class MessageTokenEncryptedData {
    constructor(
        /**
         * @summary `content_confidentiality_key`.
         * @public
         * @readonly
         */
        readonly content_confidentiality_key: OPTIONAL<EncryptionKey>,
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
         * @summary `content_integrity_key`.
         * @public
         * @readonly
         */
        readonly content_integrity_key: OPTIONAL<EncryptionKey>,
        /**
         * @summary `message_sequence_number`.
         * @public
         * @readonly
         */
        readonly message_sequence_number: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a MessageTokenEncryptedData
     * @description
     *
     * This takes an `object` and converts it to a `MessageTokenEncryptedData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessageTokenEncryptedData`.
     * @returns {MessageTokenEncryptedData}
     */
    public static _from_object(
        _o: {
            [_K in keyof MessageTokenEncryptedData]: MessageTokenEncryptedData[_K];
        }
    ): MessageTokenEncryptedData {
        return new MessageTokenEncryptedData(
            _o.content_confidentiality_key,
            _o.content_integrity_check,
            _o.message_security_label,
            _o.content_integrity_key,
            _o.message_sequence_number
        );
    }
}
/* END_OF_SYMBOL_DEFINITION MessageTokenEncryptedData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MessageTokenEncryptedData */
/**
 * @summary The Leading Root Component Types of MessageTokenEncryptedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MessageTokenEncryptedData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'content-confidentiality-key',
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
        'content-integrity-key',
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MessageTokenEncryptedData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MessageTokenEncryptedData */
/**
 * @summary The Trailing Root Component Types of MessageTokenEncryptedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MessageTokenEncryptedData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MessageTokenEncryptedData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MessageTokenEncryptedData */
/**
 * @summary The Extension Addition Component Types of MessageTokenEncryptedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MessageTokenEncryptedData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MessageTokenEncryptedData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageTokenEncryptedData */
let _cached_decoder_for_MessageTokenEncryptedData: $.ASN1Decoder<MessageTokenEncryptedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageTokenEncryptedData */

/* START_OF_SYMBOL_DEFINITION _decode_MessageTokenEncryptedData */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageTokenEncryptedData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageTokenEncryptedData} The decoded data structure.
 */
export function _decode_MessageTokenEncryptedData(el: _Element) {
    if (!_cached_decoder_for_MessageTokenEncryptedData) {
        _cached_decoder_for_MessageTokenEncryptedData = function (
            el: _Element
        ): MessageTokenEncryptedData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let content_confidentiality_key: OPTIONAL<EncryptionKey>;
            let content_integrity_check: OPTIONAL<ContentIntegrityCheck>;
            let message_security_label: OPTIONAL<MessageSecurityLabel>;
            let content_integrity_key: OPTIONAL<EncryptionKey>;
            let message_sequence_number: OPTIONAL<INTEGER>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'content-confidentiality-key': (_el: _Element): void => {
                    content_confidentiality_key = $._decode_implicit<EncryptionKey>(
                        () => _decode_EncryptionKey
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
                'content-integrity-key': (_el: _Element): void => {
                    content_integrity_key = $._decode_implicit<EncryptionKey>(
                        () => _decode_EncryptionKey
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
                _root_component_type_list_1_spec_for_MessageTokenEncryptedData,
                _extension_additions_list_spec_for_MessageTokenEncryptedData,
                _root_component_type_list_2_spec_for_MessageTokenEncryptedData,
                undefined
            );
            return new MessageTokenEncryptedData /* SEQUENCE_CONSTRUCTOR_CALL */(
                content_confidentiality_key,
                content_integrity_check,
                message_security_label,
                content_integrity_key,
                message_sequence_number
            );
        };
    }
    return _cached_decoder_for_MessageTokenEncryptedData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageTokenEncryptedData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageTokenEncryptedData */
let _cached_encoder_for_MessageTokenEncryptedData: $.ASN1Encoder<MessageTokenEncryptedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageTokenEncryptedData */

/* START_OF_SYMBOL_DEFINITION _encode_MessageTokenEncryptedData */
/**
 * @summary Encodes a(n) MessageTokenEncryptedData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageTokenEncryptedData, encoded as an ASN.1 Element.
 */
export function _encode_MessageTokenEncryptedData(
    value: MessageTokenEncryptedData,
    elGetter: $.ASN1Encoder<MessageTokenEncryptedData>
) {
    if (!_cached_encoder_for_MessageTokenEncryptedData) {
        _cached_encoder_for_MessageTokenEncryptedData = function (
            value: MessageTokenEncryptedData,
            elGetter: $.ASN1Encoder<MessageTokenEncryptedData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.content_confidentiality_key ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_EncryptionKey,
                                  $.BER
                              )(value.content_confidentiality_key, $.BER),
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
                        /* IF_ABSENT  */ value.content_integrity_key ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_EncryptionKey,
                                  $.BER
                              )(value.content_integrity_key, $.BER),
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
    return _cached_encoder_for_MessageTokenEncryptedData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageTokenEncryptedData */

/* eslint-enable */
