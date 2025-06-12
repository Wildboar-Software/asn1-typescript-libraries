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
    Abort_reason,
    Abort_reason_reason_not_specified /* IMPORTED_LONG_NAMED_INTEGER */,
    reason_not_specified /* IMPORTED_SHORT_NAMED_INTEGER */,
    Abort_reason_unrecognized_ppdu /* IMPORTED_LONG_NAMED_INTEGER */,
    unrecognized_ppdu /* IMPORTED_SHORT_NAMED_INTEGER */,
    Abort_reason_unexpected_ppdu /* IMPORTED_LONG_NAMED_INTEGER */,
    unexpected_ppdu /* IMPORTED_SHORT_NAMED_INTEGER */,
    Abort_reason_unexpected_session_service_primitive /* IMPORTED_LONG_NAMED_INTEGER */,
    unexpected_session_service_primitive /* IMPORTED_SHORT_NAMED_INTEGER */,
    Abort_reason_unrecognized_ppdu_parameter /* IMPORTED_LONG_NAMED_INTEGER */,
    unrecognized_ppdu_parameter /* IMPORTED_SHORT_NAMED_INTEGER */,
    Abort_reason_unexpected_ppdu_parameter /* IMPORTED_LONG_NAMED_INTEGER */,
    unexpected_ppdu_parameter /* IMPORTED_SHORT_NAMED_INTEGER */,
    Abort_reason_invalid_ppdu_parameter_value /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_ppdu_parameter_value /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_Abort_reason,
    _encode_Abort_reason,
} from '../ISO8823-PRESENTATION/Abort-reason.ta.js';
export {
    Abort_reason,
    Abort_reason_reason_not_specified /* IMPORTED_LONG_NAMED_INTEGER */,
    reason_not_specified /* IMPORTED_SHORT_NAMED_INTEGER */,
    Abort_reason_unrecognized_ppdu /* IMPORTED_LONG_NAMED_INTEGER */,
    unrecognized_ppdu /* IMPORTED_SHORT_NAMED_INTEGER */,
    Abort_reason_unexpected_ppdu /* IMPORTED_LONG_NAMED_INTEGER */,
    unexpected_ppdu /* IMPORTED_SHORT_NAMED_INTEGER */,
    Abort_reason_unexpected_session_service_primitive /* IMPORTED_LONG_NAMED_INTEGER */,
    unexpected_session_service_primitive /* IMPORTED_SHORT_NAMED_INTEGER */,
    Abort_reason_unrecognized_ppdu_parameter /* IMPORTED_LONG_NAMED_INTEGER */,
    unrecognized_ppdu_parameter /* IMPORTED_SHORT_NAMED_INTEGER */,
    Abort_reason_unexpected_ppdu_parameter /* IMPORTED_LONG_NAMED_INTEGER */,
    unexpected_ppdu_parameter /* IMPORTED_SHORT_NAMED_INTEGER */,
    Abort_reason_invalid_ppdu_parameter_value /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_ppdu_parameter_value /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_Abort_reason,
    _encode_Abort_reason,
} from '../ISO8823-PRESENTATION/Abort-reason.ta.js';
import {
    Event_identifier,
    Event_identifier_cp_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    cp_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_cpa_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    cpa_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_cpr_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    cpr_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_aru_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    aru_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_arp_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    arp_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_ac_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    ac_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_aca_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    aca_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_td_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    td_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_ttd_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    ttd_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_te_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    te_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_tc_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    tc_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_tcc_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    tcc_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_rs_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    rs_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_rsa_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    rsa_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_release_indication /* IMPORTED_LONG_NAMED_INTEGER */,
    s_release_indication /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_release_confirm /* IMPORTED_LONG_NAMED_INTEGER */,
    s_release_confirm /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_token_give_indication /* IMPORTED_LONG_NAMED_INTEGER */,
    s_token_give_indication /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_token_please_indication /* IMPORTED_LONG_NAMED_INTEGER */,
    s_token_please_indication /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_control_give_indication /* IMPORTED_LONG_NAMED_INTEGER */,
    s_control_give_indication /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_sync_minor_indication /* IMPORTED_LONG_NAMED_INTEGER */,
    s_sync_minor_indication /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_sync_minor_confirm /* IMPORTED_LONG_NAMED_INTEGER */,
    s_sync_minor_confirm /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_sync_major_indication /* IMPORTED_LONG_NAMED_INTEGER */,
    s_sync_major_indication /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_sync_major_confirm /* IMPORTED_LONG_NAMED_INTEGER */,
    s_sync_major_confirm /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_p_exception_report_indication /* IMPORTED_LONG_NAMED_INTEGER */,
    s_p_exception_report_indication /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_u_exception_report_indication /* IMPORTED_LONG_NAMED_INTEGER */,
    s_u_exception_report_indication /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_activity_start_indication /* IMPORTED_LONG_NAMED_INTEGER */,
    s_activity_start_indication /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_activity_resume_indication /* IMPORTED_LONG_NAMED_INTEGER */,
    s_activity_resume_indication /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_activity_interrupt_indication /* IMPORTED_LONG_NAMED_INTEGER */,
    s_activity_interrupt_indication /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_activity_interrupt_confirm /* IMPORTED_LONG_NAMED_INTEGER */,
    s_activity_interrupt_confirm /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_activity_discard_indication /* IMPORTED_LONG_NAMED_INTEGER */,
    s_activity_discard_indication /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_activity_discard_confirm /* IMPORTED_LONG_NAMED_INTEGER */,
    s_activity_discard_confirm /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_activity_end_indication /* IMPORTED_LONG_NAMED_INTEGER */,
    s_activity_end_indication /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_activity_end_confirm /* IMPORTED_LONG_NAMED_INTEGER */,
    s_activity_end_confirm /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_Event_identifier,
    _encode_Event_identifier,
} from '../ISO8823-PRESENTATION/Event-identifier.ta.js';
export {
    Event_identifier,
    Event_identifier_cp_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    cp_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_cpa_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    cpa_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_cpr_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    cpr_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_aru_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    aru_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_arp_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    arp_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_ac_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    ac_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_aca_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    aca_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_td_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    td_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_ttd_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    ttd_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_te_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    te_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_tc_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    tc_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_tcc_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    tcc_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_rs_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    rs_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_rsa_PPDU /* IMPORTED_LONG_NAMED_INTEGER */,
    rsa_PPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_release_indication /* IMPORTED_LONG_NAMED_INTEGER */,
    s_release_indication /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_release_confirm /* IMPORTED_LONG_NAMED_INTEGER */,
    s_release_confirm /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_token_give_indication /* IMPORTED_LONG_NAMED_INTEGER */,
    s_token_give_indication /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_token_please_indication /* IMPORTED_LONG_NAMED_INTEGER */,
    s_token_please_indication /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_control_give_indication /* IMPORTED_LONG_NAMED_INTEGER */,
    s_control_give_indication /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_sync_minor_indication /* IMPORTED_LONG_NAMED_INTEGER */,
    s_sync_minor_indication /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_sync_minor_confirm /* IMPORTED_LONG_NAMED_INTEGER */,
    s_sync_minor_confirm /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_sync_major_indication /* IMPORTED_LONG_NAMED_INTEGER */,
    s_sync_major_indication /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_sync_major_confirm /* IMPORTED_LONG_NAMED_INTEGER */,
    s_sync_major_confirm /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_p_exception_report_indication /* IMPORTED_LONG_NAMED_INTEGER */,
    s_p_exception_report_indication /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_u_exception_report_indication /* IMPORTED_LONG_NAMED_INTEGER */,
    s_u_exception_report_indication /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_activity_start_indication /* IMPORTED_LONG_NAMED_INTEGER */,
    s_activity_start_indication /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_activity_resume_indication /* IMPORTED_LONG_NAMED_INTEGER */,
    s_activity_resume_indication /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_activity_interrupt_indication /* IMPORTED_LONG_NAMED_INTEGER */,
    s_activity_interrupt_indication /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_activity_interrupt_confirm /* IMPORTED_LONG_NAMED_INTEGER */,
    s_activity_interrupt_confirm /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_activity_discard_indication /* IMPORTED_LONG_NAMED_INTEGER */,
    s_activity_discard_indication /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_activity_discard_confirm /* IMPORTED_LONG_NAMED_INTEGER */,
    s_activity_discard_confirm /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_activity_end_indication /* IMPORTED_LONG_NAMED_INTEGER */,
    s_activity_end_indication /* IMPORTED_SHORT_NAMED_INTEGER */,
    Event_identifier_s_activity_end_confirm /* IMPORTED_LONG_NAMED_INTEGER */,
    s_activity_end_confirm /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_Event_identifier,
    _encode_Event_identifier,
} from '../ISO8823-PRESENTATION/Event-identifier.ta.js';

/* START_OF_SYMBOL_DEFINITION ARP_PPDU */
/**
 * @summary ARP_PPDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ARP-PPDU ::= SEQUENCE {
 *   provider-reason   [0] IMPLICIT Abort-reason OPTIONAL,
 *   event-identifier  [1] IMPLICIT Event-identifier OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ARP_PPDU {
    constructor(
        /**
         * @summary `provider_reason`.
         * @public
         * @readonly
         */
        readonly provider_reason: OPTIONAL<Abort_reason>,
        /**
         * @summary `event_identifier`.
         * @public
         * @readonly
         */
        readonly event_identifier: OPTIONAL<Event_identifier>
    ) {}

    /**
     * @summary Restructures an object into a ARP_PPDU
     * @description
     *
     * This takes an `object` and converts it to a `ARP_PPDU`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ARP_PPDU`.
     * @returns {ARP_PPDU}
     */
    public static _from_object(
        _o: { [_K in keyof ARP_PPDU]: ARP_PPDU[_K] }
    ): ARP_PPDU {
        return new ARP_PPDU(_o.provider_reason, _o.event_identifier);
    }
}
/* END_OF_SYMBOL_DEFINITION ARP_PPDU */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ARP_PPDU */
/**
 * @summary The Leading Root Component Types of ARP_PPDU
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ARP_PPDU: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'provider-reason',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'event-identifier',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ARP_PPDU */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ARP_PPDU */
/**
 * @summary The Trailing Root Component Types of ARP_PPDU
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ARP_PPDU: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ARP_PPDU */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ARP_PPDU */
/**
 * @summary The Extension Addition Component Types of ARP_PPDU
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ARP_PPDU: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ARP_PPDU */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ARP_PPDU */
let _cached_decoder_for_ARP_PPDU: $.ASN1Decoder<ARP_PPDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ARP_PPDU */

/* START_OF_SYMBOL_DEFINITION _decode_ARP_PPDU */
/**
 * @summary Decodes an ASN.1 element into a(n) ARP_PPDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ARP_PPDU} The decoded data structure.
 */
export function _decode_ARP_PPDU(el: _Element) {
    if (!_cached_decoder_for_ARP_PPDU) {
        _cached_decoder_for_ARP_PPDU = function (el: _Element): ARP_PPDU {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let provider_reason: OPTIONAL<Abort_reason>;
            let event_identifier: OPTIONAL<Event_identifier>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'provider-reason': (_el: _Element): void => {
                    provider_reason = $._decode_implicit<Abort_reason>(
                        () => _decode_Abort_reason
                    )(_el);
                },
                'event-identifier': (_el: _Element): void => {
                    event_identifier = $._decode_implicit<Event_identifier>(
                        () => _decode_Event_identifier
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ARP_PPDU,
                _extension_additions_list_spec_for_ARP_PPDU,
                _root_component_type_list_2_spec_for_ARP_PPDU,
                undefined
            );
            return new ARP_PPDU /* SEQUENCE_CONSTRUCTOR_CALL */(
                provider_reason,
                event_identifier
            );
        };
    }
    return _cached_decoder_for_ARP_PPDU(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ARP_PPDU */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ARP_PPDU */
let _cached_encoder_for_ARP_PPDU: $.ASN1Encoder<ARP_PPDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ARP_PPDU */

/* START_OF_SYMBOL_DEFINITION _encode_ARP_PPDU */
/**
 * @summary Encodes a(n) ARP_PPDU into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ARP_PPDU, encoded as an ASN.1 Element.
 */
export function _encode_ARP_PPDU(
    value: ARP_PPDU,
    elGetter: $.ASN1Encoder<ARP_PPDU>
) {
    if (!_cached_encoder_for_ARP_PPDU) {
        _cached_encoder_for_ARP_PPDU = function (
            value: ARP_PPDU,
            elGetter: $.ASN1Encoder<ARP_PPDU>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.provider_reason === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Abort_reason,
                                  $.BER
                              )(value.provider_reason, $.BER),
                        /* IF_ABSENT  */ value.event_identifier === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Event_identifier,
                                  $.BER
                              )(value.event_identifier, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ARP_PPDU(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ARP_PPDU */

/* eslint-enable */
