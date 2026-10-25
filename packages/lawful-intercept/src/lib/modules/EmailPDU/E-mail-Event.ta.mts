/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @description
 *
 * The email transfer point reported by one `EmailIRI`.
 *
 * Clause 6 defines send, receive, and download. Each such message in a session
 * is its own event. Login, logoff, partial download, and upload are tied to
 * SMTP, POP3, or IMAP4 in annexes A to C. IRI for an event may be sent without
 * content. There is no IRI for a send, receive, or download attempt, and clause
 * 6 defines no separate success or failure event; `EmailIRI.status` still
 * carries the outcome when it is known.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 6 and annexes A to C.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 */
export
enum _enum_for_E_mail_Event {
    /**
     * The target sent a message. One event per message in the session. The
     * target may be matched on sender address, login name, or IP address.
     * Content shall include the IETF RFC 5322 envelope and text. Fulfils
     * requirement E.1.1. Clause 6.2 does not define an attempt event or a
     * success/failure event, because failure often happens further along the
     * relay path and is hard to correlate.
     *
     * SMTP (clause A.2.2): generate after the client sends `DATA` and the
     * server accepts it (IETF RFC 5321). Do not generate an event for an
     * unsuccessful SMTP send (for further study). Table A.2 still lists an
     * unsuccessful send as HI2 Continue or Report, which conflicts with that
     * rule. The successful send is HI2 Continue or Report, subject Client. For
     * SMTP, send versus receive is semantic and may have legal consequences
     * (clause A.2.3).
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.2 and A.2.2.
     */
    e_mail_send = 1,
    /**
     * A message was received into a target mailbox. One event per message in
     * the session. The target may be matched on recipient address, recipient
     * login name, or client IP address. Content shall include the IETF RFC 5322
     * envelope and text. Fulfils requirement E.1.2. No attempt event, and no
     * success/failure event: the specification treats that as too costly for
     * the information gained.
     *
     * SMTP (clause A.2.3): generate after `DATA` and a successful transfer
     * response. No event on an unsuccessful receive (for further study). The
     * difference from an SMTP send event is semantic and may have legal
     * consequences.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.3 and A.2.3.
     */
    e_mail_receive = 2,
    /**
     * The target downloaded a message from a mailbox. One event per message. If
     * the user takes only the header and some lines from the top, use
     * `e_mail_partial_download` instead. No attempt event. Fulfils requirement
     * E.1.2. Content shall include the IETF RFC 5322 envelope and text of mail
     * received by the target.
     *
     * POP3 (clause B.2.2): generate after `RETR` when the server has returned
     * the whole message. No event on an unsuccessful download (for further
     * study). HI2 Continue or Report (table B.2).
     *
     * IMAP4 (table C.1): `FETCH` of whole messages, and `UID FETCH` of whole
     * messages, are this event and are HI2 Report. Send the IRI immediately
     * after the interaction completes. A `UID FETCH` can return `OK` with no
     * data when the UID does not exist; an IRI with a successful status may
     * still be produced (annex C, note 2).
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.4, B.2.2, and C.2.
     */
    e_mail_download = 3,
    /**
     * A logon was attempted. HI2 Report for SMTP (table A.2) and POP3 (table
     * B.2).
     *
     * Requirement E.1.9: the IRI is delivered without message contents or
     * passwords, and it includes the result of the attempt. Annexes A and B
     * define when to emit login success and login failure, and do not state
     * which protocol exchange produces this value rather than `e_mail_logon` or
     * `e_mail_logon_failure`.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses A.4, B.4, and E.1.9.
     */
    e_mail_logon_attempt = 4,
    /**
     * Login succeeded.
     *
     * SMTP (clause A.2.1): after the client sends the hello and the server
     * returns success (IETF RFC 5321). SMTP login is not well authenticated.
     * HI2 Begin, subject Client (table A.2).
     *
     * POP3 (clause B.2.1): after `PASS` or `APOP` and an `+OK` response (IETF
     * RFC 1939). HI2 Begin (table B.2). The annex B example emits this, with
     * `E-mail-Status` OK, once `APOP` succeeds, and allocates the CIN at
     * session start.
     *
     * IMAP4 (table C.1): `LOGIN` with a clear-text username and password, or
     * `AUTHENTICATE` using SASL (IETF RFC 4422). HI2 Begin. Send the IRI when
     * the interaction completes. Map the tagged response with table C.2.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses A.2.1, B.2.1, and C.2.
     */
    e_mail_logon = 5,
    /**
     * Login failed.
     *
     * SMTP (clause A.2.1): after the hello and a failure response (IETF RFC
     * 5321). Table A.2 does not list a distinct failure record.
     *
     * POP3 (clause B.2.1): after `PASS` or `APOP` and an `-ERR` response (IETF
     * RFC 1939). HI2 Report (table B.2).
     *
     * IMAP4 reports failure as `E-mail-Status` on the logon IRI (table C.2 maps
     * `NO` to failed). Table C.1 does not use this event.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses A.2.1, B.2.1, and C.2.
     */
    e_mail_logon_failure = 6,
    /**
     * The session ended.
     *
     * SMTP: table A.2 maps logoff to HI2 End, subject Client. The annex does
     * not name the SMTP command.
     *
     * POP3: the annex B example emits this on `QUIT`, then releases the CIN.
     * Table B.2 maps logoff to HI2 End.
     *
     * IMAP4 (table C.1): `LOGOUT` closes the session. HI2 End.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses A.4, B.4, B.6, and C.2.
     */
    e_mail_logoff = 7,
    /**
     * The user retrieved less than the whole message, such as the header and
     * some lines at the top. Content is the part that was downloaded. POP3
     * table B.2 and IMAP4 table C.1 map this to HI2 Report.
     *
     * POP3 (clause B.2.3): generate after `TOP` when the server has returned
     * the partial message. No event on failure (for further study).
     *
     * IMAP4 (table C.1): `FETCH` of parts of messages, and `UID FETCH` of
     * parts. The annex C.4 example reports this event for `FETCH n FULL`
     * (envelope and body structure, not the body) and for `BODY[HEADER]`.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.4.1, B.2.3, and C.2.
     */
    e_mail_partial_download = 8,
    /**
     * IMAP4 `APPEND`: the argument is appended as the last message in the
     * mailbox. HI2 Report (table C.1). POP3 has no upload; annex G says
     * injection or upload uses SMTP or IMAP4.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause C.2 and annex G.1.
     */
    e_mail_upload = 9,
}

/**
 * @summary E_mail_Event
 * @description
 *
 * The email transfer point reported by one `EmailIRI`.
 *
 * Clause 6 defines send, receive, and download. Each such message in a session
 * is its own event. Login, logoff, partial download, and upload are tied to
 * SMTP, POP3, or IMAP4 in annexes A to C. IRI for an event may be sent without
 * content. There is no IRI for a send, receive, or download attempt, and clause
 * 6 defines no separate success or failure event; `EmailIRI.status` still
 * carries the outcome when it is known.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 6 and annexes A to C.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * E-mail-Event  ::=  ENUMERATED
 * {
 *     e-mail-send(1),
 *     e-mail-receive(2),
 *     e-mail-download(3),
 *     ...,
 *     e-mail-logon-attempt(4),
 *     e-mail-logon(5),
 *     e-mail-logon-failure(6),
 *     e-mail-logoff(7),
 *     e-mail-partial-download(8),
 *     e-mail-upload(9)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type E_mail_Event = _enum_for_E_mail_Event | ENUMERATED;

/**
 * @summary E_mail_Event_e_mail_send
 * @description
 *
 * The target sent a message. One event per message in the session. The target
 * may be matched on sender address, login name, or IP address. Content shall
 * include the IETF RFC 5322 envelope and text. Fulfils requirement E.1.1.
 * Clause 6.2 does not define an attempt event or a success/failure event,
 * because failure often happens further along the relay path and is hard to
 * correlate.
 *
 * SMTP (clause A.2.2): generate after the client sends `DATA` and the server
 * accepts it (IETF RFC 5321). Do not generate an event for an unsuccessful SMTP
 * send (for further study). Table A.2 still lists an unsuccessful send as HI2
 * Continue or Report, which conflicts with that rule. The successful send is
 * HI2 Continue or Report, subject Client. For SMTP, send versus receive is
 * semantic and may have legal consequences (clause A.2.3).
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.2 and A.2.2.
 *
 * @constant
 * @type {number}
 */
export
const E_mail_Event_e_mail_send: _enum_for_E_mail_Event.e_mail_send = _enum_for_E_mail_Event.e_mail_send; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e_mail_send
 * @description
 *
 * The target sent a message. One event per message in the session. The target
 * may be matched on sender address, login name, or IP address. Content shall
 * include the IETF RFC 5322 envelope and text. Fulfils requirement E.1.1.
 * Clause 6.2 does not define an attempt event or a success/failure event,
 * because failure often happens further along the relay path and is hard to
 * correlate.
 *
 * SMTP (clause A.2.2): generate after the client sends `DATA` and the server
 * accepts it (IETF RFC 5321). Do not generate an event for an unsuccessful SMTP
 * send (for further study). Table A.2 still lists an unsuccessful send as HI2
 * Continue or Report, which conflicts with that rule. The successful send is
 * HI2 Continue or Report, subject Client. For SMTP, send versus receive is
 * semantic and may have legal consequences (clause A.2.3).
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.2 and A.2.2.
 *
 * @constant
 * @type {number}
 */
export
const e_mail_send: _enum_for_E_mail_Event.e_mail_send = E_mail_Event_e_mail_send; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Event_e_mail_receive
 * @description
 *
 * A message was received into a target mailbox. One event per message in the
 * session. The target may be matched on recipient address, recipient login
 * name, or client IP address. Content shall include the IETF RFC 5322 envelope
 * and text. Fulfils requirement E.1.2. No attempt event, and no success/failure
 * event: the specification treats that as too costly for the information
 * gained.
 *
 * SMTP (clause A.2.3): generate after `DATA` and a successful transfer
 * response. No event on an unsuccessful receive (for further study). The
 * difference from an SMTP send event is semantic and may have legal
 * consequences.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.3 and A.2.3.
 *
 * @constant
 * @type {number}
 */
export
const E_mail_Event_e_mail_receive: _enum_for_E_mail_Event.e_mail_receive = _enum_for_E_mail_Event.e_mail_receive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e_mail_receive
 * @description
 *
 * A message was received into a target mailbox. One event per message in the
 * session. The target may be matched on recipient address, recipient login
 * name, or client IP address. Content shall include the IETF RFC 5322 envelope
 * and text. Fulfils requirement E.1.2. No attempt event, and no success/failure
 * event: the specification treats that as too costly for the information
 * gained.
 *
 * SMTP (clause A.2.3): generate after `DATA` and a successful transfer
 * response. No event on an unsuccessful receive (for further study). The
 * difference from an SMTP send event is semantic and may have legal
 * consequences.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.3 and A.2.3.
 *
 * @constant
 * @type {number}
 */
export
const e_mail_receive: _enum_for_E_mail_Event.e_mail_receive = E_mail_Event_e_mail_receive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Event_e_mail_download
 * @description
 *
 * The target downloaded a message from a mailbox. One event per message. If the
 * user takes only the header and some lines from the top, use
 * `e_mail_partial_download` instead. No attempt event. Fulfils requirement
 * E.1.2. Content shall include the IETF RFC 5322 envelope and text of mail
 * received by the target.
 *
 * POP3 (clause B.2.2): generate after `RETR` when the server has returned the
 * whole message. No event on an unsuccessful download (for further study). HI2
 * Continue or Report (table B.2).
 *
 * IMAP4 (table C.1): `FETCH` of whole messages, and `UID FETCH` of whole
 * messages, are this event and are HI2 Report. Send the IRI immediately after
 * the interaction completes. A `UID FETCH` can return `OK` with no data when
 * the UID does not exist; an IRI with a successful status may still be produced
 * (annex C, note 2).
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.4, B.2.2, and C.2.
 *
 * @constant
 * @type {number}
 */
export
const E_mail_Event_e_mail_download: _enum_for_E_mail_Event.e_mail_download = _enum_for_E_mail_Event.e_mail_download; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e_mail_download
 * @description
 *
 * The target downloaded a message from a mailbox. One event per message. If the
 * user takes only the header and some lines from the top, use
 * `e_mail_partial_download` instead. No attempt event. Fulfils requirement
 * E.1.2. Content shall include the IETF RFC 5322 envelope and text of mail
 * received by the target.
 *
 * POP3 (clause B.2.2): generate after `RETR` when the server has returned the
 * whole message. No event on an unsuccessful download (for further study). HI2
 * Continue or Report (table B.2).
 *
 * IMAP4 (table C.1): `FETCH` of whole messages, and `UID FETCH` of whole
 * messages, are this event and are HI2 Report. Send the IRI immediately after
 * the interaction completes. A `UID FETCH` can return `OK` with no data when
 * the UID does not exist; an IRI with a successful status may still be produced
 * (annex C, note 2).
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.4, B.2.2, and C.2.
 *
 * @constant
 * @type {number}
 */
export
const e_mail_download: _enum_for_E_mail_Event.e_mail_download = E_mail_Event_e_mail_download; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Event_e_mail_logon_attempt
 * @description
 *
 * A logon was attempted. HI2 Report for SMTP (table A.2) and POP3 (table B.2).
 *
 * Requirement E.1.9: the IRI is delivered without message contents or
 * passwords, and it includes the result of the attempt. Annexes A and B define
 * when to emit login success and login failure, and do not state which protocol
 * exchange produces this value rather than `e_mail_logon` or
 * `e_mail_logon_failure`.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses A.4, B.4, and E.1.9.
 *
 * @constant
 * @type {number}
 */
export
const E_mail_Event_e_mail_logon_attempt: _enum_for_E_mail_Event.e_mail_logon_attempt = _enum_for_E_mail_Event.e_mail_logon_attempt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e_mail_logon_attempt
 * @description
 *
 * A logon was attempted. HI2 Report for SMTP (table A.2) and POP3 (table B.2).
 *
 * Requirement E.1.9: the IRI is delivered without message contents or
 * passwords, and it includes the result of the attempt. Annexes A and B define
 * when to emit login success and login failure, and do not state which protocol
 * exchange produces this value rather than `e_mail_logon` or
 * `e_mail_logon_failure`.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses A.4, B.4, and E.1.9.
 *
 * @constant
 * @type {number}
 */
export
const e_mail_logon_attempt: _enum_for_E_mail_Event.e_mail_logon_attempt = E_mail_Event_e_mail_logon_attempt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Event_e_mail_logon
 * @description
 *
 * Login succeeded.
 *
 * SMTP (clause A.2.1): after the client sends the hello and the server returns
 * success (IETF RFC 5321). SMTP login is not well authenticated. HI2 Begin,
 * subject Client (table A.2).
 *
 * POP3 (clause B.2.1): after `PASS` or `APOP` and an `+OK` response (IETF RFC
 * 1939). HI2 Begin (table B.2). The annex B example emits this, with
 * `E-mail-Status` OK, once `APOP` succeeds, and allocates the CIN at session
 * start.
 *
 * IMAP4 (table C.1): `LOGIN` with a clear-text username and password, or
 * `AUTHENTICATE` using SASL (IETF RFC 4422). HI2 Begin. Send the IRI when the
 * interaction completes. Map the tagged response with table C.2.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses A.2.1, B.2.1, and C.2.
 *
 * @constant
 * @type {number}
 */
export
const E_mail_Event_e_mail_logon: _enum_for_E_mail_Event.e_mail_logon = _enum_for_E_mail_Event.e_mail_logon; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e_mail_logon
 * @description
 *
 * Login succeeded.
 *
 * SMTP (clause A.2.1): after the client sends the hello and the server returns
 * success (IETF RFC 5321). SMTP login is not well authenticated. HI2 Begin,
 * subject Client (table A.2).
 *
 * POP3 (clause B.2.1): after `PASS` or `APOP` and an `+OK` response (IETF RFC
 * 1939). HI2 Begin (table B.2). The annex B example emits this, with
 * `E-mail-Status` OK, once `APOP` succeeds, and allocates the CIN at session
 * start.
 *
 * IMAP4 (table C.1): `LOGIN` with a clear-text username and password, or
 * `AUTHENTICATE` using SASL (IETF RFC 4422). HI2 Begin. Send the IRI when the
 * interaction completes. Map the tagged response with table C.2.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses A.2.1, B.2.1, and C.2.
 *
 * @constant
 * @type {number}
 */
export
const e_mail_logon: _enum_for_E_mail_Event.e_mail_logon = E_mail_Event_e_mail_logon; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Event_e_mail_logon_failure
 * @description
 *
 * Login failed.
 *
 * SMTP (clause A.2.1): after the hello and a failure response (IETF RFC 5321).
 * Table A.2 does not list a distinct failure record.
 *
 * POP3 (clause B.2.1): after `PASS` or `APOP` and an `-ERR` response (IETF RFC
 * 1939). HI2 Report (table B.2).
 *
 * IMAP4 reports failure as `E-mail-Status` on the logon IRI (table C.2 maps
 * `NO` to failed). Table C.1 does not use this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses A.2.1, B.2.1, and C.2.
 *
 * @constant
 * @type {number}
 */
export
const E_mail_Event_e_mail_logon_failure: _enum_for_E_mail_Event.e_mail_logon_failure = _enum_for_E_mail_Event.e_mail_logon_failure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e_mail_logon_failure
 * @description
 *
 * Login failed.
 *
 * SMTP (clause A.2.1): after the hello and a failure response (IETF RFC 5321).
 * Table A.2 does not list a distinct failure record.
 *
 * POP3 (clause B.2.1): after `PASS` or `APOP` and an `-ERR` response (IETF RFC
 * 1939). HI2 Report (table B.2).
 *
 * IMAP4 reports failure as `E-mail-Status` on the logon IRI (table C.2 maps
 * `NO` to failed). Table C.1 does not use this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses A.2.1, B.2.1, and C.2.
 *
 * @constant
 * @type {number}
 */
export
const e_mail_logon_failure: _enum_for_E_mail_Event.e_mail_logon_failure = E_mail_Event_e_mail_logon_failure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Event_e_mail_logoff
 * @description
 *
 * The session ended.
 *
 * SMTP: table A.2 maps logoff to HI2 End, subject Client. The annex does not
 * name the SMTP command.
 *
 * POP3: the annex B example emits this on `QUIT`, then releases the CIN. Table
 * B.2 maps logoff to HI2 End.
 *
 * IMAP4 (table C.1): `LOGOUT` closes the session. HI2 End.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses A.4, B.4, B.6, and C.2.
 *
 * @constant
 * @type {number}
 */
export
const E_mail_Event_e_mail_logoff: _enum_for_E_mail_Event.e_mail_logoff = _enum_for_E_mail_Event.e_mail_logoff; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e_mail_logoff
 * @description
 *
 * The session ended.
 *
 * SMTP: table A.2 maps logoff to HI2 End, subject Client. The annex does not
 * name the SMTP command.
 *
 * POP3: the annex B example emits this on `QUIT`, then releases the CIN. Table
 * B.2 maps logoff to HI2 End.
 *
 * IMAP4 (table C.1): `LOGOUT` closes the session. HI2 End.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses A.4, B.4, B.6, and C.2.
 *
 * @constant
 * @type {number}
 */
export
const e_mail_logoff: _enum_for_E_mail_Event.e_mail_logoff = E_mail_Event_e_mail_logoff; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Event_e_mail_partial_download
 * @description
 *
 * The user retrieved less than the whole message, such as the header and some
 * lines at the top. Content is the part that was downloaded. POP3 table B.2 and
 * IMAP4 table C.1 map this to HI2 Report.
 *
 * POP3 (clause B.2.3): generate after `TOP` when the server has returned the
 * partial message. No event on failure (for further study).
 *
 * IMAP4 (table C.1): `FETCH` of parts of messages, and `UID FETCH` of parts.
 * The annex C.4 example reports this event for `FETCH n FULL` (envelope and
 * body structure, not the body) and for `BODY[HEADER]`.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.4.1, B.2.3, and C.2.
 *
 * @constant
 * @type {number}
 */
export
const E_mail_Event_e_mail_partial_download: _enum_for_E_mail_Event.e_mail_partial_download = _enum_for_E_mail_Event.e_mail_partial_download; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e_mail_partial_download
 * @description
 *
 * The user retrieved less than the whole message, such as the header and some
 * lines at the top. Content is the part that was downloaded. POP3 table B.2 and
 * IMAP4 table C.1 map this to HI2 Report.
 *
 * POP3 (clause B.2.3): generate after `TOP` when the server has returned the
 * partial message. No event on failure (for further study).
 *
 * IMAP4 (table C.1): `FETCH` of parts of messages, and `UID FETCH` of parts.
 * The annex C.4 example reports this event for `FETCH n FULL` (envelope and
 * body structure, not the body) and for `BODY[HEADER]`.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.4.1, B.2.3, and C.2.
 *
 * @constant
 * @type {number}
 */
export
const e_mail_partial_download: _enum_for_E_mail_Event.e_mail_partial_download = E_mail_Event_e_mail_partial_download; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Event_e_mail_upload
 * @description
 *
 * IMAP4 `APPEND`: the argument is appended as the last message in the mailbox.
 * HI2 Report (table C.1). POP3 has no upload; annex G says injection or upload
 * uses SMTP or IMAP4.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause C.2 and annex G.1.
 *
 * @constant
 * @type {number}
 */
export
const E_mail_Event_e_mail_upload: _enum_for_E_mail_Event.e_mail_upload = _enum_for_E_mail_Event.e_mail_upload; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e_mail_upload
 * @description
 *
 * IMAP4 `APPEND`: the argument is appended as the last message in the mailbox.
 * HI2 Report (table C.1). POP3 has no upload; annex G says injection or upload
 * uses SMTP or IMAP4.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause C.2 and annex G.1.
 *
 * @constant
 * @type {number}
 */
export
const e_mail_upload: _enum_for_E_mail_Event.e_mail_upload = E_mail_Event_e_mail_upload; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_E_mail_Event: $.ASN1Decoder<E_mail_Event> = $._decodeEnumerated;
export const _encode_E_mail_Event: $.ASN1Encoder<E_mail_Event> = $._encodeEnumerated;


/* eslint-enable */
