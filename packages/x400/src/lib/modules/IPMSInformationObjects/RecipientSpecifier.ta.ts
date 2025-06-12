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
    ORDescriptor,
    _decode_ORDescriptor,
    _encode_ORDescriptor,
} from '../IPMSInformationObjects/ORDescriptor.ta.js';
export {
    ORDescriptor,
    _decode_ORDescriptor,
    _encode_ORDescriptor,
} from '../IPMSInformationObjects/ORDescriptor.ta.js';
import {
    NotificationRequests,
    NotificationRequests_rn /* IMPORTED_LONG_NAMED_BIT */,
    rn /* IMPORTED_SHORT_NAMED_BIT */,
    NotificationRequests_nrn /* IMPORTED_LONG_NAMED_BIT */,
    nrn /* IMPORTED_SHORT_NAMED_BIT */,
    NotificationRequests_ipm_return /* IMPORTED_LONG_NAMED_BIT */,
    ipm_return /* IMPORTED_SHORT_NAMED_BIT */,
    NotificationRequests_an_supported /* IMPORTED_LONG_NAMED_BIT */,
    an_supported /* IMPORTED_SHORT_NAMED_BIT */,
    NotificationRequests_suppress_an /* IMPORTED_LONG_NAMED_BIT */,
    suppress_an /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_NotificationRequests,
    _encode_NotificationRequests,
} from '../IPMSInformationObjects/NotificationRequests.ta.js';
export {
    NotificationRequests,
    NotificationRequests_rn /* IMPORTED_LONG_NAMED_BIT */,
    rn /* IMPORTED_SHORT_NAMED_BIT */,
    NotificationRequests_nrn /* IMPORTED_LONG_NAMED_BIT */,
    nrn /* IMPORTED_SHORT_NAMED_BIT */,
    NotificationRequests_ipm_return /* IMPORTED_LONG_NAMED_BIT */,
    ipm_return /* IMPORTED_SHORT_NAMED_BIT */,
    NotificationRequests_an_supported /* IMPORTED_LONG_NAMED_BIT */,
    an_supported /* IMPORTED_SHORT_NAMED_BIT */,
    NotificationRequests_suppress_an /* IMPORTED_LONG_NAMED_BIT */,
    suppress_an /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_NotificationRequests,
    _encode_NotificationRequests,
} from '../IPMSInformationObjects/NotificationRequests.ta.js';
import {
    RecipientExtensionsField,
    _decode_RecipientExtensionsField,
    _encode_RecipientExtensionsField,
} from '../IPMSInformationObjects/RecipientExtensionsField.ta.js';
export {
    RecipientExtensionsField,
    _decode_RecipientExtensionsField,
    _encode_RecipientExtensionsField,
} from '../IPMSInformationObjects/RecipientExtensionsField.ta.js';

/* START_OF_SYMBOL_DEFINITION RecipientSpecifier */
/**
 * @summary RecipientSpecifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientSpecifier ::= SET {
 *   recipient              [0]  ORDescriptor,
 *   notification-requests  [1]  NotificationRequests DEFAULT {},
 *   reply-requested        [2]  BOOLEAN DEFAULT FALSE,
 *   recipient-extensions   [3]  RecipientExtensionsField OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class RecipientSpecifier {
    constructor(
        /**
         * @summary `recipient`.
         * @public
         * @readonly
         */
        readonly recipient: ORDescriptor,
        /**
         * @summary `notification_requests`.
         * @public
         * @readonly
         */
        readonly notification_requests: OPTIONAL<NotificationRequests>,
        /**
         * @summary `reply_requested`.
         * @public
         * @readonly
         */
        readonly reply_requested: OPTIONAL<BOOLEAN>,
        /**
         * @summary `recipient_extensions`.
         * @public
         * @readonly
         */
        readonly recipient_extensions: OPTIONAL<RecipientExtensionsField>
    ) {}

    /**
     * @summary Restructures an object into a RecipientSpecifier
     * @description
     *
     * This takes an `object` and converts it to a `RecipientSpecifier`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RecipientSpecifier`.
     * @returns {RecipientSpecifier}
     */
    public static _from_object(
        _o: { [_K in keyof RecipientSpecifier]: RecipientSpecifier[_K] }
    ): RecipientSpecifier {
        return new RecipientSpecifier(
            _o.recipient,
            _o.notification_requests,
            _o.reply_requested,
            _o.recipient_extensions
        );
    }

    /**
     * @summary Getter that returns the default value for `notification_requests`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_notification_requests() {
        return new Uint8ClampedArray([]);
    }
    /**
     * @summary Getter that returns the default value for `reply_requested`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_reply_requested() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION RecipientSpecifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RecipientSpecifier */
/**
 * @summary The Leading Root Component Types of RecipientSpecifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RecipientSpecifier: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'recipient',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'notification-requests',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'reply-requested',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'recipient-extensions',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RecipientSpecifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RecipientSpecifier */
/**
 * @summary The Trailing Root Component Types of RecipientSpecifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RecipientSpecifier: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RecipientSpecifier */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RecipientSpecifier */
/**
 * @summary The Extension Addition Component Types of RecipientSpecifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RecipientSpecifier: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RecipientSpecifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientSpecifier */
let _cached_decoder_for_RecipientSpecifier: $.ASN1Decoder<RecipientSpecifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientSpecifier */

/* START_OF_SYMBOL_DEFINITION _decode_RecipientSpecifier */
/**
 * @summary Decodes an ASN.1 element into a(n) RecipientSpecifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientSpecifier} The decoded data structure.
 */
export function _decode_RecipientSpecifier(el: _Element) {
    if (!_cached_decoder_for_RecipientSpecifier) {
        _cached_decoder_for_RecipientSpecifier = function (
            el: _Element
        ): RecipientSpecifier {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let recipient!: ORDescriptor;
            let notification_requests: OPTIONAL<NotificationRequests> =
                RecipientSpecifier._default_value_for_notification_requests;
            let reply_requested: OPTIONAL<BOOLEAN> =
                RecipientSpecifier._default_value_for_reply_requested;
            let recipient_extensions: OPTIONAL<RecipientExtensionsField>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                recipient: (_el: _Element): void => {
                    recipient = $._decode_implicit<ORDescriptor>(
                        () => _decode_ORDescriptor
                    )(_el);
                },
                'notification-requests': (_el: _Element): void => {
                    notification_requests = $._decode_implicit<NotificationRequests>(
                        () => _decode_NotificationRequests
                    )(_el);
                },
                'reply-requested': (_el: _Element): void => {
                    reply_requested = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                'recipient-extensions': (_el: _Element): void => {
                    recipient_extensions = $._decode_implicit<RecipientExtensionsField>(
                        () => _decode_RecipientExtensionsField
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RecipientSpecifier,
                _extension_additions_list_spec_for_RecipientSpecifier,
                _root_component_type_list_2_spec_for_RecipientSpecifier,
                undefined
            );
            return new RecipientSpecifier /* SET_CONSTRUCTOR_CALL */(
                recipient,
                notification_requests,
                reply_requested,
                recipient_extensions
            );
        };
    }
    return _cached_decoder_for_RecipientSpecifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RecipientSpecifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientSpecifier */
let _cached_encoder_for_RecipientSpecifier: $.ASN1Encoder<RecipientSpecifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientSpecifier */

/* START_OF_SYMBOL_DEFINITION _encode_RecipientSpecifier */
/**
 * @summary Encodes a(n) RecipientSpecifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientSpecifier, encoded as an ASN.1 Element.
 */
export function _encode_RecipientSpecifier(
    value: RecipientSpecifier,
    elGetter: $.ASN1Encoder<RecipientSpecifier>
) {
    if (!_cached_encoder_for_RecipientSpecifier) {
        _cached_encoder_for_RecipientSpecifier = function (
            value: RecipientSpecifier,
            elGetter: $.ASN1Encoder<RecipientSpecifier>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_ORDescriptor,
                            $.BER
                        )(value.recipient, $.BER),
                        /* IF_DEFAULT */ value.notification_requests ===
                            undefined ||
                        $.deepEq(
                            value.notification_requests,
                            RecipientSpecifier._default_value_for_notification_requests
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_NotificationRequests,
                                  $.BER
                              )(value.notification_requests, $.BER),
                        /* IF_DEFAULT */ value.reply_requested === undefined ||
                        $.deepEq(
                            value.reply_requested,
                            RecipientSpecifier._default_value_for_reply_requested
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.reply_requested, $.BER),
                        /* IF_ABSENT  */ value.recipient_extensions ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_RecipientExtensionsField,
                                  $.BER
                              )(value.recipient_extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RecipientSpecifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RecipientSpecifier */

/* eslint-enable */
