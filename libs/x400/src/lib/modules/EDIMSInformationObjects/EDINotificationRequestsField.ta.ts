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
    EDINotificationRequests,
    EDINotificationRequests_pn /* IMPORTED_LONG_NAMED_BIT */,
    pn /* IMPORTED_SHORT_NAMED_BIT */,
    EDINotificationRequests_nn /* IMPORTED_LONG_NAMED_BIT */,
    nn /* IMPORTED_SHORT_NAMED_BIT */,
    EDINotificationRequests_fn /* IMPORTED_LONG_NAMED_BIT */,
    fn /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_EDINotificationRequests,
    _encode_EDINotificationRequests,
} from '../EDIMSInformationObjects/EDINotificationRequests.ta';
export {
    EDINotificationRequests,
    EDINotificationRequests_pn /* IMPORTED_LONG_NAMED_BIT */,
    pn /* IMPORTED_SHORT_NAMED_BIT */,
    EDINotificationRequests_nn /* IMPORTED_LONG_NAMED_BIT */,
    nn /* IMPORTED_SHORT_NAMED_BIT */,
    EDINotificationRequests_fn /* IMPORTED_LONG_NAMED_BIT */,
    fn /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_EDINotificationRequests,
    _encode_EDINotificationRequests,
} from '../EDIMSInformationObjects/EDINotificationRequests.ta';
import {
    EDINotificationSecurity,
    EDINotificationSecurity_proof /* IMPORTED_LONG_NAMED_BIT */,
    EDINotificationSecurity_non_repudiation /* IMPORTED_LONG_NAMED_BIT */,
    _decode_EDINotificationSecurity,
    _encode_EDINotificationSecurity,
} from '../EDIMSInformationObjects/EDINotificationSecurity.ta';
export {
    EDINotificationSecurity,
    EDINotificationSecurity_proof /* IMPORTED_LONG_NAMED_BIT */,
    EDINotificationSecurity_non_repudiation /* IMPORTED_LONG_NAMED_BIT */,
    _decode_EDINotificationSecurity,
    _encode_EDINotificationSecurity,
} from '../EDIMSInformationObjects/EDINotificationSecurity.ta';
import {
    EDIReceptionSecurity,
    EDIReceptionSecurity_proof /* IMPORTED_LONG_NAMED_BIT */,
    EDIReceptionSecurity_non_repudiation /* IMPORTED_LONG_NAMED_BIT */,
    _decode_EDIReceptionSecurity,
    _encode_EDIReceptionSecurity,
} from '../EDIMSInformationObjects/EDIReceptionSecurity.ta';
export {
    EDIReceptionSecurity,
    EDIReceptionSecurity_proof /* IMPORTED_LONG_NAMED_BIT */,
    EDIReceptionSecurity_non_repudiation /* IMPORTED_LONG_NAMED_BIT */,
    _decode_EDIReceptionSecurity,
    _encode_EDIReceptionSecurity,
} from '../EDIMSInformationObjects/EDIReceptionSecurity.ta';

/* START_OF_SYMBOL_DEFINITION EDINotificationRequestsField */
/**
 * @summary EDINotificationRequestsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDINotificationRequestsField ::= SEQUENCE {
 *   edi-notification-requests  [0]  EDINotificationRequests DEFAULT {},
 *   edi-notification-security  [1]  EDINotificationSecurity DEFAULT {},
 *   edi-reception-security     [2]  EDIReceptionSecurity DEFAULT {}
 * }
 * ```
 *
 * @class
 */
export class EDINotificationRequestsField {
    constructor(
        /**
         * @summary `edi_notification_requests`.
         * @public
         * @readonly
         */
        readonly edi_notification_requests: OPTIONAL<EDINotificationRequests>,
        /**
         * @summary `edi_notification_security`.
         * @public
         * @readonly
         */
        readonly edi_notification_security: OPTIONAL<EDINotificationSecurity>,
        /**
         * @summary `edi_reception_security`.
         * @public
         * @readonly
         */
        readonly edi_reception_security: OPTIONAL<EDIReceptionSecurity>
    ) {}

    /**
     * @summary Restructures an object into a EDINotificationRequestsField
     * @description
     *
     * This takes an `object` and converts it to a `EDINotificationRequestsField`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EDINotificationRequestsField`.
     * @returns {EDINotificationRequestsField}
     */
    public static _from_object(
        _o: {
            [_K in keyof EDINotificationRequestsField]: EDINotificationRequestsField[_K];
        }
    ): EDINotificationRequestsField {
        return new EDINotificationRequestsField(
            _o.edi_notification_requests,
            _o.edi_notification_security,
            _o.edi_reception_security
        );
    }

    /**
     * @summary Getter that returns the default value for `edi_notification_requests`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_edi_notification_requests() {
        return new Uint8ClampedArray([]);
    }
    /**
     * @summary Getter that returns the default value for `edi_notification_security`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_edi_notification_security() {
        return new Uint8ClampedArray([]);
    }
    /**
     * @summary Getter that returns the default value for `edi_reception_security`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_edi_reception_security() {
        return new Uint8ClampedArray([]);
    }
}
/* END_OF_SYMBOL_DEFINITION EDINotificationRequestsField */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EDINotificationRequestsField */
/**
 * @summary The Leading Root Component Types of EDINotificationRequestsField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EDINotificationRequestsField: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'edi-notification-requests',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'edi-notification-security',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'edi-reception-security',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EDINotificationRequestsField */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EDINotificationRequestsField */
/**
 * @summary The Trailing Root Component Types of EDINotificationRequestsField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EDINotificationRequestsField: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EDINotificationRequestsField */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EDINotificationRequestsField */
/**
 * @summary The Extension Addition Component Types of EDINotificationRequestsField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EDINotificationRequestsField: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EDINotificationRequestsField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EDINotificationRequestsField */
let _cached_decoder_for_EDINotificationRequestsField: $.ASN1Decoder<EDINotificationRequestsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EDINotificationRequestsField */

/* START_OF_SYMBOL_DEFINITION _decode_EDINotificationRequestsField */
/**
 * @summary Decodes an ASN.1 element into a(n) EDINotificationRequestsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDINotificationRequestsField} The decoded data structure.
 */
export function _decode_EDINotificationRequestsField(el: _Element) {
    if (!_cached_decoder_for_EDINotificationRequestsField) {
        _cached_decoder_for_EDINotificationRequestsField = function (
            el: _Element
        ): EDINotificationRequestsField {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let edi_notification_requests: OPTIONAL<EDINotificationRequests> =
                EDINotificationRequestsField._default_value_for_edi_notification_requests;
            let edi_notification_security: OPTIONAL<EDINotificationSecurity> =
                EDINotificationRequestsField._default_value_for_edi_notification_security;
            let edi_reception_security: OPTIONAL<EDIReceptionSecurity> =
                EDINotificationRequestsField._default_value_for_edi_reception_security;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'edi-notification-requests': (_el: _Element): void => {
                    edi_notification_requests = $._decode_implicit<EDINotificationRequests>(
                        () => _decode_EDINotificationRequests
                    )(_el);
                },
                'edi-notification-security': (_el: _Element): void => {
                    edi_notification_security = $._decode_implicit<EDINotificationSecurity>(
                        () => _decode_EDINotificationSecurity
                    )(_el);
                },
                'edi-reception-security': (_el: _Element): void => {
                    edi_reception_security = $._decode_implicit<EDIReceptionSecurity>(
                        () => _decode_EDIReceptionSecurity
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EDINotificationRequestsField,
                _extension_additions_list_spec_for_EDINotificationRequestsField,
                _root_component_type_list_2_spec_for_EDINotificationRequestsField,
                undefined
            );
            return new EDINotificationRequestsField /* SEQUENCE_CONSTRUCTOR_CALL */(
                edi_notification_requests,
                edi_notification_security,
                edi_reception_security
            );
        };
    }
    return _cached_decoder_for_EDINotificationRequestsField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EDINotificationRequestsField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EDINotificationRequestsField */
let _cached_encoder_for_EDINotificationRequestsField: $.ASN1Encoder<EDINotificationRequestsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EDINotificationRequestsField */

/* START_OF_SYMBOL_DEFINITION _encode_EDINotificationRequestsField */
/**
 * @summary Encodes a(n) EDINotificationRequestsField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDINotificationRequestsField, encoded as an ASN.1 Element.
 */
export function _encode_EDINotificationRequestsField(
    value: EDINotificationRequestsField,
    elGetter: $.ASN1Encoder<EDINotificationRequestsField>
) {
    if (!_cached_encoder_for_EDINotificationRequestsField) {
        _cached_encoder_for_EDINotificationRequestsField = function (
            value: EDINotificationRequestsField,
            elGetter: $.ASN1Encoder<EDINotificationRequestsField>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.edi_notification_requests ===
                            undefined ||
                        $.deepEq(
                            value.edi_notification_requests,
                            EDINotificationRequestsField._default_value_for_edi_notification_requests
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_EDINotificationRequests,
                                  $.BER
                              )(value.edi_notification_requests, $.BER),
                        /* IF_DEFAULT */ value.edi_notification_security ===
                            undefined ||
                        $.deepEq(
                            value.edi_notification_security,
                            EDINotificationRequestsField._default_value_for_edi_notification_security
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_EDINotificationSecurity,
                                  $.BER
                              )(value.edi_notification_security, $.BER),
                        /* IF_DEFAULT */ value.edi_reception_security ===
                            undefined ||
                        $.deepEq(
                            value.edi_reception_security,
                            EDINotificationRequestsField._default_value_for_edi_reception_security
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_EDIReceptionSecurity,
                                  $.BER
                              )(value.edi_reception_security, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EDINotificationRequestsField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EDINotificationRequestsField */

/* eslint-enable */
