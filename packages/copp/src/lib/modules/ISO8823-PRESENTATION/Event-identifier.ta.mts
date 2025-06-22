/* eslint-disable */
import {
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


/**
 * @summary Event_identifier
 * @description
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
export const Event_identifier_cp_PPDU: Event_identifier = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_cp_PPDU
 * @constant
 * @type {number}
 */
export const cp_PPDU: Event_identifier = Event_identifier_cp_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_cpa_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_cpa_PPDU: Event_identifier = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_cpa_PPDU
 * @constant
 * @type {number}
 */
export const cpa_PPDU: Event_identifier = Event_identifier_cpa_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_cpr_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_cpr_PPDU: Event_identifier = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_cpr_PPDU
 * @constant
 * @type {number}
 */
export const cpr_PPDU: Event_identifier = Event_identifier_cpr_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_aru_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_aru_PPDU: Event_identifier = 3; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_aru_PPDU
 * @constant
 * @type {number}
 */
export const aru_PPDU: Event_identifier = Event_identifier_aru_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_arp_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_arp_PPDU: Event_identifier = 4; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_arp_PPDU
 * @constant
 * @type {number}
 */
export const arp_PPDU: Event_identifier = Event_identifier_arp_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_ac_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_ac_PPDU: Event_identifier = 5; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_ac_PPDU
 * @constant
 * @type {number}
 */
export const ac_PPDU: Event_identifier = Event_identifier_ac_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_aca_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_aca_PPDU: Event_identifier = 6; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_aca_PPDU
 * @constant
 * @type {number}
 */
export const aca_PPDU: Event_identifier = Event_identifier_aca_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_td_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_td_PPDU: Event_identifier = 7; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_td_PPDU
 * @constant
 * @type {number}
 */
export const td_PPDU: Event_identifier = Event_identifier_td_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_ttd_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_ttd_PPDU: Event_identifier = 8; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_ttd_PPDU
 * @constant
 * @type {number}
 */
export const ttd_PPDU: Event_identifier = Event_identifier_ttd_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_te_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_te_PPDU: Event_identifier = 9; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_te_PPDU
 * @constant
 * @type {number}
 */
export const te_PPDU: Event_identifier = Event_identifier_te_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_tc_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_tc_PPDU: Event_identifier = 10; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_tc_PPDU
 * @constant
 * @type {number}
 */
export const tc_PPDU: Event_identifier = Event_identifier_tc_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_tcc_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_tcc_PPDU: Event_identifier = 11; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_tcc_PPDU
 * @constant
 * @type {number}
 */
export const tcc_PPDU: Event_identifier = Event_identifier_tcc_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_rs_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_rs_PPDU: Event_identifier = 12; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_rs_PPDU
 * @constant
 * @type {number}
 */
export const rs_PPDU: Event_identifier = Event_identifier_rs_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_rsa_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_rsa_PPDU: Event_identifier = 13; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_rsa_PPDU
 * @constant
 * @type {number}
 */
export const rsa_PPDU: Event_identifier = Event_identifier_rsa_PPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_release_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_release_indication: Event_identifier = 14; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_release_indication
 * @constant
 * @type {number}
 */
export const s_release_indication: Event_identifier = Event_identifier_s_release_indication; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_release_confirm
 * @constant
 * @type {number}
 */
export const Event_identifier_s_release_confirm: Event_identifier = 15; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_release_confirm
 * @constant
 * @type {number}
 */
export const s_release_confirm: Event_identifier = Event_identifier_s_release_confirm; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_token_give_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_token_give_indication: Event_identifier = 16; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_token_give_indication
 * @constant
 * @type {number}
 */
export const s_token_give_indication: Event_identifier = Event_identifier_s_token_give_indication; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_token_please_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_token_please_indication: Event_identifier = 17; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_token_please_indication
 * @constant
 * @type {number}
 */
export const s_token_please_indication: Event_identifier = Event_identifier_s_token_please_indication; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_control_give_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_control_give_indication: Event_identifier = 18; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_control_give_indication
 * @constant
 * @type {number}
 */
export const s_control_give_indication: Event_identifier = Event_identifier_s_control_give_indication; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_sync_minor_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_sync_minor_indication: Event_identifier = 19; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_sync_minor_indication
 * @constant
 * @type {number}
 */
export const s_sync_minor_indication: Event_identifier = Event_identifier_s_sync_minor_indication; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_sync_minor_confirm
 * @constant
 * @type {number}
 */
export const Event_identifier_s_sync_minor_confirm: Event_identifier = 20; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_sync_minor_confirm
 * @constant
 * @type {number}
 */
export const s_sync_minor_confirm: Event_identifier = Event_identifier_s_sync_minor_confirm; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_sync_major_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_sync_major_indication: Event_identifier = 21; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_sync_major_indication
 * @constant
 * @type {number}
 */
export const s_sync_major_indication: Event_identifier = Event_identifier_s_sync_major_indication; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_sync_major_confirm
 * @constant
 * @type {number}
 */
export const Event_identifier_s_sync_major_confirm: Event_identifier = 22; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_sync_major_confirm
 * @constant
 * @type {number}
 */
export const s_sync_major_confirm: Event_identifier = Event_identifier_s_sync_major_confirm; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_p_exception_report_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_p_exception_report_indication: Event_identifier = 23; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_p_exception_report_indication
 * @constant
 * @type {number}
 */
export const s_p_exception_report_indication: Event_identifier = Event_identifier_s_p_exception_report_indication; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_u_exception_report_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_u_exception_report_indication: Event_identifier = 24; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_u_exception_report_indication
 * @constant
 * @type {number}
 */
export const s_u_exception_report_indication: Event_identifier = Event_identifier_s_u_exception_report_indication; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_start_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_activity_start_indication: Event_identifier = 25; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_start_indication
 * @constant
 * @type {number}
 */
export const s_activity_start_indication: Event_identifier = Event_identifier_s_activity_start_indication; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_resume_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_activity_resume_indication: Event_identifier = 26; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_resume_indication
 * @constant
 * @type {number}
 */
export const s_activity_resume_indication: Event_identifier = Event_identifier_s_activity_resume_indication; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_interrupt_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_activity_interrupt_indication: Event_identifier = 27; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_interrupt_indication
 * @constant
 * @type {number}
 */
export const s_activity_interrupt_indication: Event_identifier = Event_identifier_s_activity_interrupt_indication; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_interrupt_confirm
 * @constant
 * @type {number}
 */
export const Event_identifier_s_activity_interrupt_confirm: Event_identifier = 28; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_interrupt_confirm
 * @constant
 * @type {number}
 */
export const s_activity_interrupt_confirm: Event_identifier = Event_identifier_s_activity_interrupt_confirm; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_discard_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_activity_discard_indication: Event_identifier = 29; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_discard_indication
 * @constant
 * @type {number}
 */
export const s_activity_discard_indication: Event_identifier = Event_identifier_s_activity_discard_indication; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_discard_confirm
 * @constant
 * @type {number}
 */
export const Event_identifier_s_activity_discard_confirm: Event_identifier = 30; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_discard_confirm
 * @constant
 * @type {number}
 */
export const s_activity_discard_confirm: Event_identifier = Event_identifier_s_activity_discard_confirm; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_end_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_activity_end_indication: Event_identifier = 31; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_end_indication
 * @constant
 * @type {number}
 */
export const s_activity_end_indication: Event_identifier = Event_identifier_s_activity_end_indication; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_end_confirm
 * @constant
 * @type {number}
 */
export const Event_identifier_s_activity_end_confirm: Event_identifier = 32; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Event_identifier_s_activity_end_confirm
 * @constant
 * @type {number}
 */
export const s_activity_end_confirm: Event_identifier = Event_identifier_s_activity_end_confirm; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_Event_identifier = $._decodeInteger;




export const _encode_Event_identifier = $._encodeInteger;


/* eslint-enable */
