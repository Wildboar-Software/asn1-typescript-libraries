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
    MessageDeliveryTime,
    _decode_MessageDeliveryTime,
    _encode_MessageDeliveryTime,
} from '../MTSAbstractService/MessageDeliveryTime.ta.js';
export {
    MessageDeliveryTime,
    _decode_MessageDeliveryTime,
    _encode_MessageDeliveryTime,
} from '../MTSAbstractService/MessageDeliveryTime.ta.js';
import {
    TypeOfMTSUser,
    public_ /* IMPORTED_SHORT_NAMED_INTEGER */,
    private_ /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfMTSUser_ms /* IMPORTED_LONG_NAMED_INTEGER */,
    ms /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfMTSUser_dl /* IMPORTED_LONG_NAMED_INTEGER */,
    dl /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfMTSUser_pdau /* IMPORTED_LONG_NAMED_INTEGER */,
    pdau /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfMTSUser_physical_recipient /* IMPORTED_LONG_NAMED_INTEGER */,
    physical_recipient /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfMTSUser_other /* IMPORTED_LONG_NAMED_INTEGER */,
    other /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_TypeOfMTSUser,
    _encode_TypeOfMTSUser,
} from '../MTSAbstractService/TypeOfMTSUser.ta.js';
export {
    TypeOfMTSUser,
    public_ /* IMPORTED_SHORT_NAMED_INTEGER */,
    private_ /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfMTSUser_ms /* IMPORTED_LONG_NAMED_INTEGER */,
    ms /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfMTSUser_dl /* IMPORTED_LONG_NAMED_INTEGER */,
    dl /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfMTSUser_pdau /* IMPORTED_LONG_NAMED_INTEGER */,
    pdau /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfMTSUser_physical_recipient /* IMPORTED_LONG_NAMED_INTEGER */,
    physical_recipient /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfMTSUser_other /* IMPORTED_LONG_NAMED_INTEGER */,
    other /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_TypeOfMTSUser,
    _encode_TypeOfMTSUser,
} from '../MTSAbstractService/TypeOfMTSUser.ta.js';

/* START_OF_SYMBOL_DEFINITION DeliveryReport */
/**
 * @summary DeliveryReport
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveryReport ::= SET {
 *   message-delivery-time  [0]  MessageDeliveryTime,
 *   type-of-MTS-user       [1]  TypeOfMTSUser DEFAULT public
 * }
 * ```
 *
 * @class
 */
export class DeliveryReport {
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
        readonly type_of_MTS_user: OPTIONAL<TypeOfMTSUser>
    ) {}

    /**
     * @summary Restructures an object into a DeliveryReport
     * @description
     *
     * This takes an `object` and converts it to a `DeliveryReport`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeliveryReport`.
     * @returns {DeliveryReport}
     */
    public static _from_object(
        _o: { [_K in keyof DeliveryReport]: DeliveryReport[_K] }
    ): DeliveryReport {
        return new DeliveryReport(
            _o.message_delivery_time,
            _o.type_of_MTS_user
        );
    }

    /**
     * @summary Getter that returns the default value for `type_of_MTS_user`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_type_of_MTS_user() {
        return public_;
    }
}
/* END_OF_SYMBOL_DEFINITION DeliveryReport */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeliveryReport */
/**
 * @summary The Leading Root Component Types of DeliveryReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeliveryReport: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'message-delivery-time',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'type-of-MTS-user',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeliveryReport */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeliveryReport */
/**
 * @summary The Trailing Root Component Types of DeliveryReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeliveryReport: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeliveryReport */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeliveryReport */
/**
 * @summary The Extension Addition Component Types of DeliveryReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeliveryReport: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeliveryReport */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveryReport */
let _cached_decoder_for_DeliveryReport: $.ASN1Decoder<DeliveryReport> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveryReport */

/* START_OF_SYMBOL_DEFINITION _decode_DeliveryReport */
/**
 * @summary Decodes an ASN.1 element into a(n) DeliveryReport
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliveryReport} The decoded data structure.
 */
export function _decode_DeliveryReport(el: _Element) {
    if (!_cached_decoder_for_DeliveryReport) {
        _cached_decoder_for_DeliveryReport = function (
            el: _Element
        ): DeliveryReport {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let message_delivery_time!: MessageDeliveryTime;
            let type_of_MTS_user: OPTIONAL<TypeOfMTSUser> =
                DeliveryReport._default_value_for_type_of_MTS_user;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'message-delivery-time': (_el: _Element): void => {
                    message_delivery_time = $._decode_implicit<MessageDeliveryTime>(
                        () => _decode_MessageDeliveryTime
                    )(_el);
                },
                'type-of-MTS-user': (_el: _Element): void => {
                    type_of_MTS_user = $._decode_implicit<TypeOfMTSUser>(
                        () => _decode_TypeOfMTSUser
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeliveryReport,
                _extension_additions_list_spec_for_DeliveryReport,
                _root_component_type_list_2_spec_for_DeliveryReport,
                undefined
            );
            return new DeliveryReport /* SET_CONSTRUCTOR_CALL */(
                message_delivery_time,
                type_of_MTS_user
            );
        };
    }
    return _cached_decoder_for_DeliveryReport(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeliveryReport */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveryReport */
let _cached_encoder_for_DeliveryReport: $.ASN1Encoder<DeliveryReport> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveryReport */

/* START_OF_SYMBOL_DEFINITION _encode_DeliveryReport */
/**
 * @summary Encodes a(n) DeliveryReport into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliveryReport, encoded as an ASN.1 Element.
 */
export function _encode_DeliveryReport(
    value: DeliveryReport,
    elGetter: $.ASN1Encoder<DeliveryReport>
) {
    if (!_cached_encoder_for_DeliveryReport) {
        _cached_encoder_for_DeliveryReport = function (
            value: DeliveryReport,
            elGetter: $.ASN1Encoder<DeliveryReport>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_MessageDeliveryTime,
                            $.BER
                        )(value.message_delivery_time, $.BER),
                        /* IF_DEFAULT */ value.type_of_MTS_user === undefined ||
                        $.deepEq(
                            value.type_of_MTS_user,
                            DeliveryReport._default_value_for_type_of_MTS_user
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_TypeOfMTSUser,
                                  $.BER
                              )(value.type_of_MTS_user, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DeliveryReport(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeliveryReport */

/* eslint-enable */
