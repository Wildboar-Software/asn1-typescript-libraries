/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Event_identifier
 * @description
 *
 * On ARP: the PPDU or session primitive that triggered provider abort
 * (X.226 §6.4.3.2). Required except for `reason-not-specified` and
 * `unrecognized-ppdu` (X.226 §6.4.3.1). Values 0–13 are PPDU types
 * (including TD/TTD/TE/TC/TCC, which have no distinct ASN.1 SEQUENCE
 * of their own—those are `User-data` mapped onto S-DATA /
 * S-TYPED-DATA / S-EXPEDITED-DATA / S-CAPABILITY-DATA). Values 14–32
 * are session primitives.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Event-identifier  ::=  INTEGER {
 *   cp-PPDU(0), cpa-PPDU(1), cpr-PPDU(2), aru-PPDU(3), arp-PPDU(4), ac-PPDU(5),
 *   aca-PPDU(6), td-PPDU(7), ttd-PPDU(8), te-PPDU(9), tc-PPDU(10), tcc-PPDU(11),
 *   rs-PPDU(12), rsa-PPDU(13), s-release-indication(14), s-release-confirm(15),
 *   s-token-give-indication(16), s-token-please-indication(17),
 *   s-control-give-indication(18), s-sync-minor-indication(19),
 *   s-sync-minor-confirm(20), s-sync-major-indication(21),
 *   s-sync-major-confirm(22), s-p-exception-report-indication(23),
 *   s-u-exception-report-indication(24), s-activity-start-indication(25),
 *   s-activity-resume-indication(26), s-activity-interrupt-indication(27),
 *   s-activity-interrupt-confirm(28), s-activity-discard-indication(29),
 *   s-activity-discard-confirm(30), s-activity-end-indication(31),
 *   s-activity-end-confirm(32)}
 * ```
 */
export type Event_identifier = INTEGER;


/**
 * @summary Event_identifier_cp_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_cp_PPDU: 0 = 0 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_cp_PPDU
 * @constant
 * @type {number}
 */
export const cp_PPDU: 0 = Event_identifier_cp_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_cpa_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_cpa_PPDU: 1 = 1 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_cpa_PPDU
 * @constant
 * @type {number}
 */
export const cpa_PPDU: 1 = Event_identifier_cpa_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_cpr_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_cpr_PPDU: 2 = 2 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_cpr_PPDU
 * @constant
 * @type {number}
 */
export const cpr_PPDU: 2 = Event_identifier_cpr_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_aru_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_aru_PPDU: 3 = 3 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_aru_PPDU
 * @constant
 * @type {number}
 */
export const aru_PPDU: 3 = Event_identifier_aru_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_arp_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_arp_PPDU: 4 = 4 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_arp_PPDU
 * @constant
 * @type {number}
 */
export const arp_PPDU: 4 = Event_identifier_arp_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_ac_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_ac_PPDU: 5 = 5 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_ac_PPDU
 * @constant
 * @type {number}
 */
export const ac_PPDU: 5 = Event_identifier_ac_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_aca_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_aca_PPDU: 6 = 6 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_aca_PPDU
 * @constant
 * @type {number}
 */
export const aca_PPDU: 6 = Event_identifier_aca_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_td_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_td_PPDU: 7 = 7 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_td_PPDU
 * @constant
 * @type {number}
 */
export const td_PPDU: 7 = Event_identifier_td_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_ttd_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_ttd_PPDU: 8 = 8 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_ttd_PPDU
 * @constant
 * @type {number}
 */
export const ttd_PPDU: 8 = Event_identifier_ttd_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_te_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_te_PPDU: 9 = 9 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_te_PPDU
 * @constant
 * @type {number}
 */
export const te_PPDU: 9 = Event_identifier_te_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_tc_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_tc_PPDU: 10 = 10 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_tc_PPDU
 * @constant
 * @type {number}
 */
export const tc_PPDU: 10 = Event_identifier_tc_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_tcc_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_tcc_PPDU: 11 = 11 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_tcc_PPDU
 * @constant
 * @type {number}
 */
export const tcc_PPDU: 11 = Event_identifier_tcc_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_rs_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_rs_PPDU: 12 = 12 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_rs_PPDU
 * @constant
 * @type {number}
 */
export const rs_PPDU: 12 = Event_identifier_rs_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_rsa_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_rsa_PPDU: 13 = 13 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_rsa_PPDU
 * @constant
 * @type {number}
 */
export const rsa_PPDU: 13 = Event_identifier_rsa_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_release_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_release_indication: 14 = 14 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_release_indication
 * @constant
 * @type {number}
 */
export const s_release_indication: 14 = Event_identifier_s_release_indication; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_release_confirm
 * @constant
 * @type {number}
 */
export const Event_identifier_s_release_confirm: 15 = 15 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_release_confirm
 * @constant
 * @type {number}
 */
export const s_release_confirm: 15 = Event_identifier_s_release_confirm; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_token_give_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_token_give_indication: 16 = 16 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_token_give_indication
 * @constant
 * @type {number}
 */
export const s_token_give_indication: 16 = Event_identifier_s_token_give_indication; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_token_please_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_token_please_indication: 17 = 17 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_token_please_indication
 * @constant
 * @type {number}
 */
export const s_token_please_indication: 17 = Event_identifier_s_token_please_indication; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_control_give_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_control_give_indication: 18 = 18 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_control_give_indication
 * @constant
 * @type {number}
 */
export const s_control_give_indication: 18 = Event_identifier_s_control_give_indication; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_sync_minor_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_sync_minor_indication: 19 = 19 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_sync_minor_indication
 * @constant
 * @type {number}
 */
export const s_sync_minor_indication: 19 = Event_identifier_s_sync_minor_indication; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_sync_minor_confirm
 * @constant
 * @type {number}
 */
export const Event_identifier_s_sync_minor_confirm: 20 = 20 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_sync_minor_confirm
 * @constant
 * @type {number}
 */
export const s_sync_minor_confirm: 20 = Event_identifier_s_sync_minor_confirm; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_sync_major_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_sync_major_indication: 21 = 21 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_sync_major_indication
 * @constant
 * @type {number}
 */
export const s_sync_major_indication: 21 = Event_identifier_s_sync_major_indication; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_sync_major_confirm
 * @constant
 * @type {number}
 */
export const Event_identifier_s_sync_major_confirm: 22 = 22 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_sync_major_confirm
 * @constant
 * @type {number}
 */
export const s_sync_major_confirm: 22 = Event_identifier_s_sync_major_confirm; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_p_exception_report_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_p_exception_report_indication: 23 = 23 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_p_exception_report_indication
 * @constant
 * @type {number}
 */
export const s_p_exception_report_indication: 23 = Event_identifier_s_p_exception_report_indication; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_u_exception_report_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_u_exception_report_indication: 24 = 24 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_u_exception_report_indication
 * @constant
 * @type {number}
 */
export const s_u_exception_report_indication: 24 = Event_identifier_s_u_exception_report_indication; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_start_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_activity_start_indication: 25 = 25 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_start_indication
 * @constant
 * @type {number}
 */
export const s_activity_start_indication: 25 = Event_identifier_s_activity_start_indication; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_resume_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_activity_resume_indication: 26 = 26 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_resume_indication
 * @constant
 * @type {number}
 */
export const s_activity_resume_indication: 26 = Event_identifier_s_activity_resume_indication; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_interrupt_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_activity_interrupt_indication: 27 = 27 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_interrupt_indication
 * @constant
 * @type {number}
 */
export const s_activity_interrupt_indication: 27 = Event_identifier_s_activity_interrupt_indication; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_interrupt_confirm
 * @constant
 * @type {number}
 */
export const Event_identifier_s_activity_interrupt_confirm: 28 = 28 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_interrupt_confirm
 * @constant
 * @type {number}
 */
export const s_activity_interrupt_confirm: 28 = Event_identifier_s_activity_interrupt_confirm; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_discard_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_activity_discard_indication: 29 = 29 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_discard_indication
 * @constant
 * @type {number}
 */
export const s_activity_discard_indication: 29 = Event_identifier_s_activity_discard_indication; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_discard_confirm
 * @constant
 * @type {number}
 */
export const Event_identifier_s_activity_discard_confirm: 30 = 30 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_discard_confirm
 * @constant
 * @type {number}
 */
export const s_activity_discard_confirm: 30 = Event_identifier_s_activity_discard_confirm; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_end_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_activity_end_indication: 31 = 31 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_end_indication
 * @constant
 * @type {number}
 */
export const s_activity_end_indication: 31 = Event_identifier_s_activity_end_indication; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_end_confirm
 * @constant
 * @type {number}
 */
export const Event_identifier_s_activity_end_confirm: 32 = 32 satisfies Event_identifier; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_end_confirm
 * @constant
 * @type {number}
 */
export const s_activity_end_confirm: 32 = Event_identifier_s_activity_end_confirm; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_Event_identifier: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_Event_identifier: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
