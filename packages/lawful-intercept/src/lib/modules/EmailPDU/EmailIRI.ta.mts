/* eslint-disable */
import {
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    type RELATIVE_OID,
    type UTF8String,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type E_mail_Event, _decode_E_mail_Event, _encode_E_mail_Event, _enum_for_E_mail_Event } from "../EmailPDU/E-mail-Event.ta.mjs";
// export { E_mail_Event, _enum_for_E_mail_Event, E_mail_Event_e_mail_send /* IMPORTED_LONG_ENUMERATION_ITEM */, e_mail_send /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Event_e_mail_receive /* IMPORTED_LONG_ENUMERATION_ITEM */, e_mail_receive /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Event_e_mail_download /* IMPORTED_LONG_ENUMERATION_ITEM */, e_mail_download /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Event_e_mail_logon_attempt /* IMPORTED_LONG_ENUMERATION_ITEM */, e_mail_logon_attempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Event_e_mail_logon /* IMPORTED_LONG_ENUMERATION_ITEM */, e_mail_logon /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Event_e_mail_logon_failure /* IMPORTED_LONG_ENUMERATION_ITEM */, e_mail_logon_failure /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Event_e_mail_logoff /* IMPORTED_LONG_ENUMERATION_ITEM */, e_mail_logoff /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Event_e_mail_partial_download /* IMPORTED_LONG_ENUMERATION_ITEM */, e_mail_partial_download /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Event_e_mail_upload /* IMPORTED_LONG_ENUMERATION_ITEM */, e_mail_upload /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_E_mail_Event, _encode_E_mail_Event } from "../EmailPDU/E-mail-Event.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../LI-PS-PDU/IPAddress.ta.mjs";
import { type E_mail_Protocol, _decode_E_mail_Protocol, _encode_E_mail_Protocol, _enum_for_E_mail_Protocol } from "../EmailPDU/E-mail-Protocol.ta.mjs";
// export { E_mail_Protocol, _enum_for_E_mail_Protocol, E_mail_Protocol_smtp /* IMPORTED_LONG_ENUMERATION_ITEM */, smtp /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Protocol_pop3 /* IMPORTED_LONG_ENUMERATION_ITEM */, pop3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Protocol_imap4 /* IMPORTED_LONG_ENUMERATION_ITEM */, imap4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Protocol_webmail /* IMPORTED_LONG_ENUMERATION_ITEM */, webmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Protocol_undefined /* IMPORTED_LONG_ENUMERATION_ITEM */, undefined /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_E_mail_Protocol, _encode_E_mail_Protocol } from "../EmailPDU/E-mail-Protocol.ta.mjs";
import { type E_mail_Address_List, _decode_E_mail_Address_List, _encode_E_mail_Address_List } from "../EmailPDU/E-mail-Address-List.ta.mjs";
// export { E_mail_Address_List, _decode_E_mail_Address_List, _encode_E_mail_Address_List } from "../EmailPDU/E-mail-Address-List.ta.mjs";
import { E_mail_Status, _decode_E_mail_Status, _encode_E_mail_Status, _enum_for_E_mail_Status } from "../EmailPDU/E-mail-Status.ta.mjs";
// export { E_mail_Status, _enum_for_E_mail_Status, E_mail_Status_status_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, status_unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Status_operation_failed /* IMPORTED_LONG_ENUMERATION_ITEM */, operation_failed /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Status_operation_succeeded /* IMPORTED_LONG_ENUMERATION_ITEM */, operation_succeeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_E_mail_Status, _encode_E_mail_Status } from "../EmailPDU/E-mail-Status.ta.mjs";
import { National_EM_ASN1parameters, _decode_National_EM_ASN1parameters, _encode_National_EM_ASN1parameters } from "../EmailPDU/National-EM-ASN1parameters.ta.mjs";
// export { National_EM_ASN1parameters, _decode_National_EM_ASN1parameters, _encode_National_EM_ASN1parameters } from "../EmailPDU/National-EM-ASN1parameters.ta.mjs";
import { type AAAInformation, _decode_AAAInformation, _encode_AAAInformation } from "../EmailPDU/AAAInformation.ta.mjs";
// export { AAAInformation, _decode_AAAInformation, _encode_AAAInformation } from "../EmailPDU/AAAInformation.ta.mjs";
import { type EmailIRI_e_mail_Sender_Validity, _decode_EmailIRI_e_mail_Sender_Validity, _encode_EmailIRI_e_mail_Sender_Validity, _enum_for_EmailIRI_e_mail_Sender_Validity } from "../EmailPDU/EmailIRI-e-mail-Sender-Validity.ta.mjs";
import * as LI_PS_PDU from "../LI-PS-PDU/index.mjs";
// export { EmailIRI_e_mail_Sender_Validity, _enum_for_EmailIRI_e_mail_Sender_Validity, EmailIRI_e_mail_Sender_Validity_validated /* IMPORTED_LONG_ENUMERATION_ITEM */, validated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EmailIRI_e_mail_Sender_Validity_nonvalidated /* IMPORTED_LONG_ENUMERATION_ITEM */, nonvalidated /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EmailIRI_e_mail_Sender_Validity, _encode_EmailIRI_e_mail_Sender_Validity } from "../EmailPDU/EmailIRI-e-mail-Sender-Validity.ta.mjs";


/**
 * @summary EmailIRI
 * @description
 *
 * HI2 intercept-related information for one email event.
 *
 * Each message sent, received, or downloaded in a client/server session is a
 * separate event, with its own IRI and, when required, content. There is no
 * separate IRI for a send, receive, or download attempt. Optional information
 * is included when the implementation and national regulations make it
 * available. An IRI may contain empty fields, or zero, when the messaging
 * service does not have that attribute.
 *
 * Handover of intercepted email uses `EmailIRI` and `EmailCC`. Subject to
 * national agreement, that may be overridden and the messaging structures used
 * instead.
 *
 * Clauses 6.2.3, 6.3.3, and 6.4.3 list the attributes that may appear on send,
 * receive, and download IRI: server and client addresses and ports, protocol,
 * sender, recipient list, total recipient count, octet counts, message
 * identifier, and status. `aAAInformation` is listed for send and download.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 4.2, 6, and 7.0.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EmailIRI ::= SEQUENCE
 *     -- EmailIRI is the PDU sent for each "piece" of E-mail IRI
 * {
 *     emailIRIObjId               [0] RELATIVE-OID,
 *     eventType                   [1] E-mail-Event,
 *     client-Address              [2] LI-PS-PDU.IPAddress OPTIONAL,
 *         -- Provided if available
 *     server-Address              [3] LI-PS-PDU.IPAddress OPTIONAL,
 *         -- Provided if available
 *     client-Port                 [4] INTEGER OPTIONAL,
 *         -- Provided if available
 *     server-Port                 [5] INTEGER OPTIONAL,
 *         -- Provided if available
 *     server-Octets-Sent          [6] INTEGER,
 *     client-Octets-Sent          [7] INTEGER,
 *     protocol-ID                 [8] E-mail-Protocol,
 *     e-mail-Sender               [9] UTF8String (SIZE (0..255)) OPTIONAL,
 *         -- Not available in some cases; if a value is available, it shall be provided.
 *         -- Note that as of version 3.13.1, this field may contain RFC 6530-compliant addresses.
 *     e-mail-Recipients           [10] E-mail-Address-List OPTIONAL,
 *         -- Not available in some cases; if a value is available, it shall be provided
 *         -- Note that as of version 3.13.1, this field may contain RFC 6530-compliant addresses.
 *     status                      [11] E-mail-Status,
 *     total-Recipient-Count       [12] INTEGER (0..4294967295) OPTIONAL,
 *     message-ID                  [13] OCTET STRING OPTIONAL,
 *         -- Network byte order
 *     nationalParameter           [14] OCTET STRING OPTIONAL,
 *         -- Completely defined on a national basis, including byte ordering
 *     ...,
 *     national-EM-ASN1parameters  [15] National-EM-ASN1parameters OPTIONAL,
 *         -- Completely defined on a national basis
 *     aAAInformation              [16] AAAInformation OPTIONAL,
 *     e-mail-Sender-Validity      [17] ENUMERATED
 *         {
 *             validated(0),
 *                 -- The operator has assured the e-mail-sender
 *             nonvalidated(1),
 *                 -- The operator does not assure the e-mail-sender
 *             ...
 *         } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EmailIRI {
    /**
     * @summary `emailIRIObjId`.
     * @description
     *
     * Set to `emailIRIObjId`, `{emailPDUObjId iRI(1)}`.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 6 and annex D.
     *
     * @public
     * @readonly
     */
    readonly emailIRIObjId: RELATIVE_OID;
    /**
     * @summary `eventType`.
     * @description
     *
     * Which point in the email transfer this IRI reports. Send, receive, and
     * download each have their own information rules in clause 6. Login,
     * logoff, partial download, and upload are specified in annexes A to C.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 6 and annexes A to C.
     *
     * @public
     * @readonly
     */
    readonly eventType: E_mail_Event;
    /**
     * @summary `client_Address`.
     * @description
     *
     * Layer-3 address of the email client, when available. Included to meet
     * requirement E.1.7.
     *
     * SMTP (table A.1): source IP address of the `HELO` or `MAIL FROM` message.
     * POP3 (table B.1): source IP address of the password or `APOP` message.
     * Annexes C and H do not define an equivalent mapping for IMAP4 or webmail.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.2.3, 6.3.3, 6.4.3, and 7,
     * and annexes A and B.
     *
     * @public
     * @readonly
     */
    readonly client_Address: OPTIONAL<LI_PS_PDU.IPAddress>;
    /**
     * @summary `server_Address`.
     * @description
     *
     * Layer-3 address of the email server, when available. Included to meet
     * requirement E.1.7.
     *
     * SMTP (table A.1): destination IP address of the `HELO` or `MAIL FROM`
     * message. POP3 (table B.1): destination IP address of the password or
     * `APOP` message. Annexes C and H do not define an equivalent mapping for
     * IMAP4 or webmail.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.2.3, 6.3.3, 6.4.3, and 7,
     * and annexes A and B.
     *
     * @public
     * @readonly
     */
    readonly server_Address: OPTIONAL<LI_PS_PDU.IPAddress>;
    /**
     * @summary `client_Port`.
     * @description
     *
     * Layer-4 port of the client, when available. Clause 7.8 leaves the
     * client/server distinction to the application annexes.
     *
     * SMTP (table A.1): TCP source port of the `HELO` or `MAIL FROM` message.
     * POP3 (table B.1): TCP source port of the password or `APOP` message.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 7.8 and E.1.7, and annexes A
     * and B.
     *
     * @public
     * @readonly
     */
    readonly client_Port: OPTIONAL<INTEGER>;
    /**
     * @summary `server_Port`.
     * @description
     *
     * Layer-4 port of the server, when available.
     *
     * SMTP (table A.1): TCP destination port of the `HELO` or `MAIL FROM`
     * message. POP3 (table B.1): TCP destination port of the password or `APOP`
     * message.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 7.8 and E.1.7, and annexes A
     * and B.
     *
     * @public
     * @readonly
     */
    readonly server_Port: OPTIONAL<INTEGER>;
    /**
     * @summary `server_Octets_Sent`.
     * @description
     *
     * Octets sent by the server for this email. The count has to represent
     * information transferred for the target message. It is not the byte count
     * of a whole session in which other messages were not the target's, and it
     * is not required to equal the length of the RFC 5322 message: setup
     * traffic or filing overhead may be included. A file-system intercept of a
     * send may report 0 when the server sent little or nothing back to the
     * client.
     *
     * SMTP (table A.1): octets the server sent during the send operation. POP3
     * (table B.1): octets the server sent during the download.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.2.3, 6.3.3, 6.4.3, and
     * 7.9.
     *
     * @public
     * @readonly
     */
    readonly server_Octets_Sent: INTEGER;
    /**
     * @summary `client_Octets_Sent`.
     * @description
     *
     * Octets sent by the client for this email. Same accuracy rule as
     * `server_Octets_Sent`. On a receive, a file-system intercept may report 0
     * when the client sent little or nothing. POP3 table B.1 allows 0 when that
     * is an accurate picture of a download.
     *
     * SMTP (table A.1): octets the client sent during the send operation. POP3
     * (table B.1): octets the client sent during the download.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.2.3, 6.3.3, 6.4.3, and
     * 7.9.
     *
     * @public
     * @readonly
     */
    readonly client_Octets_Sent: INTEGER;
    /**
     * @summary `protocol_ID`.
     * @description
     *
     * Email application or protocol at the intercept point. It selects which
     * annex supplies the encoding rules. Meets requirement E.1.10.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 7.1.
     *
     * @public
     * @readonly
     */
    readonly protocol_ID: E_mail_Protocol;
    /**
     * @summary `e_mail_Sender`.
     * @description
     *
     * Intercepted sender address, in the form in which it was seen. It may be
     * unqualified. The mediation function does not add a missing domain
     * (requirement E.1.4). Absent when no value is available; if a value is
     * available it shall be provided. From version 3.13.1 this may be an IETF
     * RFC 6530 address.
     *
     * SMTP (table A.1): the address in `MAIL FROM`. That address routes replies
     * and can be spoofed without stopping delivery (annex F.2); report that
     * with `e_mail_Sender_Validity`. POP3 (table B.1): the `From:` address.
     * POP3 does not interpret it, it is not used by the service, and it may not
     * equal the SMTP `MAIL FROM` address (annex G.2).
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 7.2 and 7.4.
     *
     * @public
     * @readonly
     */
    readonly e_mail_Sender: OPTIONAL<UTF8String>;
    /**
     * @summary `e_mail_Recipients`.
     * @description
     *
     * Intended recipients that the intercept equipment could see. The list may
     * be incomplete; SMTP in particular may show only a subset, depending on
     * where the equipment is placed. Each address is kept as intercepted
     * (clause 7.2), and from version 3.13.1 may be an IETF RFC 6530 address.
     * Absent when no value is available; if a value is available it shall be
     * provided.
     *
     * SMTP (table A.1): each address from an `RCPT TO` that the server accepted
     * for this message. There is no protocol limit on how many `RCPT TO`
     * commands one message may have (annex F.2). POP3 (table B.1): only the
     * mailbox address used to log in.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 7.3.
     *
     * @public
     * @readonly
     */
    readonly e_mail_Recipients: OPTIONAL<E_mail_Address_List>;
    /**
     * @summary `status`.
     * @description
     *
     * Success or failure of the email interaction, to the degree that
     * information is available (requirement E.1.11). See `E_mail_Status` for
     * how the termination point of each event is judged.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 7.7.
     *
     * @public
     * @readonly
     */
    readonly status: E_mail_Status;
    /**
     * @summary `total_Recipient_Count`.
     * @description
     *
     * How many recipients the intercept equipment noticed, including recipients
     * that could not be written into `e_mail_Recipients`. Requirement E.1.5
     * uses this so the LEA can see that a resource limit dropped some addresses
     * (the example is a very large SMTP `RCPT TO` set). Range is 0 to
     * 4294967295.
     *
     * SMTP (table A.1): number of `RCPT TO` commands that received a positive
     * server response. POP3 (table B.1): always one.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 7.5.
     *
     * @public
     * @readonly
     */
    readonly total_Recipient_Count: OPTIONAL<INTEGER>;
    /**
     * @summary `message_ID`.
     * @description
     *
     * Application message identifier, when the service has one. Its meaning
     * depends on the email application and is specified in that application's
     * annex. Network byte order. Requirement E.1.12: this supports correlation
     * with email logs.
     *
     * SMTP and POP3 (tables A.1 and B.1): the IETF RFC 5322 `Message-ID` or
     * `Resent-Message-ID` header.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 7.6.
     *
     * @public
     * @readonly
     */
    readonly message_ID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `nationalParameter`.
     * @description
     *
     * National octet string. The module says the entire value, including byte
     * order, is defined nationally. Clause 7 does not define the contents.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`EmailIRI`).
     *
     * @public
     * @readonly
     */
    readonly nationalParameter: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `national_EM_ASN1parameters`.
     * @description
     *
     * National parameters encoded in ASN.1, for the country identified inside
     * that value. See `National_EM_ASN1parameters`.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D.
     *
     * @public
     * @readonly
     */
    readonly national_EM_ASN1parameters: OPTIONAL<National_EM_ASN1parameters>;
    /**
     * @summary `aAAInformation`.
     * @description
     *
     * Authentication attributes for POP3, IMAP4, or SMTP. Whether the values
     * may be present depends on national legislation.
     *
     * On an application-layer intercept, authentication data from sending or
     * downloading mail shall be in the IRI (requirement E.1.13). On an
     * IP-packet intercept the same data is HI3, as the IP packets of the
     * authentication exchange, and is not mapped into this field (requirement
     * E.2.3).
     *
     * Authenticated SMTP (IETF RFC 4954) carries the username, authentication
     * method, challenge, response, and result (clause 6.2.3). POP3, and IMAP4
     * with a clear-text username and password, carry the username, password,
     * and result (clause 6.4.3). Clause 6.4.3 cites IETF RFC 3493 for POP3;
     * that RFC is the IPv6 socket API. POP3 is IETF RFC 1939, which annex B
     * uses.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.2.3, 6.4.3, and 7.10.
     *
     * @public
     * @readonly
     */
    readonly aAAInformation: OPTIONAL<AAAInformation>;
    /**
     * @summary `e_mail_Sender_Validity`.
     * @description
     *
     * `validated` means the operator has assured the sender address.
     * `nonvalidated` means the operator does not assure it.
     *
     * Annex F.2: an SMTP address can be spoofed, and this field is how that is
     * signalled. When the user has to authenticate before using the service,
     * the validity is available.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D and annex F.2.
     *
     * @public
     * @readonly
     */
    readonly e_mail_Sender_Validity: OPTIONAL<EmailIRI_e_mail_Sender_Validity>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        emailIRIObjId: RELATIVE_OID,
        eventType: E_mail_Event,
        client_Address: OPTIONAL<LI_PS_PDU.IPAddress>,
        server_Address: OPTIONAL<LI_PS_PDU.IPAddress>,
        client_Port: OPTIONAL<INTEGER>,
        server_Port: OPTIONAL<INTEGER>,
        server_Octets_Sent: INTEGER,
        client_Octets_Sent: INTEGER,
        protocol_ID: E_mail_Protocol,
        e_mail_Sender: OPTIONAL<UTF8String>,
        e_mail_Recipients: OPTIONAL<E_mail_Address_List>,
        status: E_mail_Status,
        total_Recipient_Count?: OPTIONAL<INTEGER>,
        message_ID?: OPTIONAL<OCTET_STRING>,
        nationalParameter?: OPTIONAL<OCTET_STRING>,
        national_EM_ASN1parameters?: OPTIONAL<National_EM_ASN1parameters>,
        aAAInformation?: OPTIONAL<AAAInformation>,
        e_mail_Sender_Validity?: OPTIONAL<EmailIRI_e_mail_Sender_Validity>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.emailIRIObjId = emailIRIObjId;
        this.eventType = eventType;
        this.client_Address = client_Address;
        this.server_Address = server_Address;
        this.client_Port = client_Port;
        this.server_Port = server_Port;
        this.server_Octets_Sent = server_Octets_Sent;
        this.client_Octets_Sent = client_Octets_Sent;
        this.protocol_ID = protocol_ID;
        this.e_mail_Sender = e_mail_Sender;
        this.e_mail_Recipients = e_mail_Recipients;
        this.status = status;
        this.total_Recipient_Count = total_Recipient_Count;
        this.message_ID = message_ID;
        this.nationalParameter = nationalParameter;
        this.national_EM_ASN1parameters = national_EM_ASN1parameters;
        this.aAAInformation = aAAInformation;
        this.e_mail_Sender_Validity = e_mail_Sender_Validity;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EmailIRI
     * @description
     * 
     * This takes an `object` and converts it to a `EmailIRI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EmailIRI`.
     * @returns {EmailIRI}
     */
    public static _from_object (_o: { [_K in keyof (EmailIRI)]: (EmailIRI)[_K] }): EmailIRI {
        return new EmailIRI(_o.emailIRIObjId, _o.eventType, _o.client_Address, _o.server_Address, _o.client_Port, _o.server_Port, _o.server_Octets_Sent, _o.client_Octets_Sent, _o.protocol_ID, _o.e_mail_Sender, _o.e_mail_Recipients, _o.status, _o.total_Recipient_Count, _o.message_ID, _o.nationalParameter, _o.national_EM_ASN1parameters, _o.aAAInformation, _o.e_mail_Sender_Validity, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `eventType`
         * @public
         * @static
         */

    public static _enum_for_eventType: typeof _enum_for_E_mail_Event = _enum_for_E_mail_Event;        /**
         * @summary The enum used as the type of the component `protocol_ID`
         * @public
         * @static
         */

    public static _enum_for_protocol_ID: typeof _enum_for_E_mail_Protocol = _enum_for_E_mail_Protocol;        /**
         * @summary The enum used as the type of the component `status`
         * @public
         * @static
         */

    public static _enum_for_status: typeof _enum_for_E_mail_Status = _enum_for_E_mail_Status;        /**
         * @summary The enum used as the type of the component `e_mail_Sender_Validity`
         * @public
         * @static
         */

    public static _enum_for_e_mail_Sender_Validity: typeof _enum_for_EmailIRI_e_mail_Sender_Validity = _enum_for_EmailIRI_e_mail_Sender_Validity;
}

/**
 * @summary The Leading Root Component Types of EmailIRI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EmailIRI: $.ComponentSpec[] = [
    new $.ComponentSpec("emailIRIObjId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eventType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("client-Address", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("server-Address", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("client-Port", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("server-Port", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("server-Octets-Sent", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("client-Octets-Sent", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("protocol-ID", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("e-mail-Sender", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("e-mail-Recipients", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("status", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("total-Recipient-Count", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("message-ID", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("nationalParameter", true, $.hasTag(_TagClass.context, 14))
];

/**
 * @summary The Trailing Root Component Types of EmailIRI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EmailIRI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EmailIRI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EmailIRI: $.ComponentSpec[] = [
    new $.ComponentSpec("national-EM-ASN1parameters", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("aAAInformation", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("e-mail-Sender-Validity", true, $.hasTag(_TagClass.context, 17))
];

let _cached_decoder_for_EmailIRI: $.ASN1Decoder<EmailIRI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EmailIRI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EmailIRI (el: _Element): EmailIRI {
    if (!_cached_decoder_for_EmailIRI) { _cached_decoder_for_EmailIRI = function (el: _Element): EmailIRI {
    let emailIRIObjId!: RELATIVE_OID;
    let eventType!: E_mail_Event;
    let client_Address: OPTIONAL<LI_PS_PDU.IPAddress>;
    let server_Address: OPTIONAL<LI_PS_PDU.IPAddress>;
    let client_Port: OPTIONAL<INTEGER>;
    let server_Port: OPTIONAL<INTEGER>;
    let server_Octets_Sent!: INTEGER;
    let client_Octets_Sent!: INTEGER;
    let protocol_ID!: E_mail_Protocol;
    let e_mail_Sender: OPTIONAL<UTF8String>;
    let e_mail_Recipients: OPTIONAL<E_mail_Address_List>;
    let status!: E_mail_Status;
    let total_Recipient_Count: OPTIONAL<INTEGER>;
    let message_ID: OPTIONAL<OCTET_STRING>;
    let nationalParameter: OPTIONAL<OCTET_STRING>;
    let national_EM_ASN1parameters: OPTIONAL<National_EM_ASN1parameters>;
    let aAAInformation: OPTIONAL<AAAInformation>;
    let e_mail_Sender_Validity: OPTIONAL<EmailIRI_e_mail_Sender_Validity>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "emailIRIObjId": (_el: _Element): void => { emailIRIObjId = $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID)(_el); },
        "eventType": (_el: _Element): void => { eventType = $._decode_implicit<E_mail_Event>(() => _decode_E_mail_Event)(_el); },
        "client-Address": (_el: _Element): void => { client_Address = $._decode_implicit<LI_PS_PDU.IPAddress>(() => LI_PS_PDU._decode_IPAddress)(_el); },
        "server-Address": (_el: _Element): void => { server_Address = $._decode_implicit<LI_PS_PDU.IPAddress>(() => LI_PS_PDU._decode_IPAddress)(_el); },
        "client-Port": (_el: _Element): void => { client_Port = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "server-Port": (_el: _Element): void => { server_Port = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "server-Octets-Sent": (_el: _Element): void => { server_Octets_Sent = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "client-Octets-Sent": (_el: _Element): void => { client_Octets_Sent = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "protocol-ID": (_el: _Element): void => { protocol_ID = $._decode_implicit<E_mail_Protocol>(() => _decode_E_mail_Protocol)(_el); },
        "e-mail-Sender": (_el: _Element): void => {
            e_mail_Sender = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el);
            if (e_mail_Sender.length > 255) {
                throw new ASN1SizeError("EmailIRI.e_mail_Sender violates SIZE constraint");
            }
        },
        "e-mail-Recipients": (_el: _Element): void => { e_mail_Recipients = $._decode_implicit<E_mail_Address_List>(() => _decode_E_mail_Address_List)(_el); },
        "status": (_el: _Element): void => { status = $._decode_implicit<E_mail_Status>(() => _decode_E_mail_Status)(_el); },
        "total-Recipient-Count": (_el: _Element): void => {
            total_Recipient_Count = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof total_Recipient_Count === "bigint" ? total_Recipient_Count : BigInt(total_Recipient_Count);
            if (_n < 0n || _n > 4294967295n) {
                throw new ASN1OverflowError("EmailIRI.total_Recipient_Count violates INTEGER range");
            }
        },
        "message-ID": (_el: _Element): void => { message_ID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "nationalParameter": (_el: _Element): void => { nationalParameter = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "national-EM-ASN1parameters": (_el: _Element): void => { national_EM_ASN1parameters = $._decode_implicit<National_EM_ASN1parameters>(() => _decode_National_EM_ASN1parameters)(_el); },
        "aAAInformation": (_el: _Element): void => { aAAInformation = $._decode_explicit<AAAInformation>(() => _decode_AAAInformation)(_el); },
        "e-mail-Sender-Validity": (_el: _Element): void => { e_mail_Sender_Validity = $._decode_implicit<EmailIRI_e_mail_Sender_Validity>(() => _decode_EmailIRI_e_mail_Sender_Validity)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EmailIRI,
        _extension_additions_list_spec_for_EmailIRI,
        _root_component_type_list_2_spec_for_EmailIRI,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EmailIRI(
        emailIRIObjId,
        eventType,
        client_Address,
        server_Address,
        client_Port,
        server_Port,
        server_Octets_Sent,
        client_Octets_Sent,
        protocol_ID,
        e_mail_Sender,
        e_mail_Recipients,
        status,
        total_Recipient_Count,
        message_ID,
        nationalParameter,
        national_EM_ASN1parameters,
        aAAInformation,
        e_mail_Sender_Validity,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EmailIRI(el);
}

let _cached_encoder_for_EmailIRI: $.ASN1Encoder<EmailIRI> | null = null;

/**
 * @summary Encodes a(n) EmailIRI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EmailIRI, encoded as an ASN.1 Element.
 */
export
function _encode_EmailIRI (value: EmailIRI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EmailIRI) { _cached_encoder_for_EmailIRI = function (value: EmailIRI, elGetter: $.ASN1Encoder<EmailIRI>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(18 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER)(value.emailIRIObjId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_E_mail_Event, $.BER)(value.eventType, $.BER);
    if (value.client_Address !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => LI_PS_PDU._encode_IPAddress, $.BER)(value.client_Address, $.BER);
    }
    if (value.server_Address !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => LI_PS_PDU._encode_IPAddress, $.BER)(value.server_Address, $.BER);
    }
    if (value.client_Port !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.client_Port, $.BER);
    }
    if (value.server_Port !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.server_Port, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.server_Octets_Sent, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.client_Octets_Sent, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_E_mail_Protocol, $.BER)(value.protocol_ID, $.BER);
    if (value.e_mail_Sender !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeUTF8String, $.BER)(value.e_mail_Sender, $.BER);
    }
    if (value.e_mail_Recipients !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_E_mail_Address_List, $.BER)(value.e_mail_Recipients, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => _encode_E_mail_Status, $.BER)(value.status, $.BER);
    if (value.total_Recipient_Count !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeInteger, $.BER)(value.total_Recipient_Count, $.BER);
    }
    if (value.message_ID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.message_ID, $.BER);
    }
    if (value.nationalParameter !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeOctetString, $.BER)(value.nationalParameter, $.BER);
    }
    if (value.national_EM_ASN1parameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_National_EM_ASN1parameters, $.BER)(value.national_EM_ASN1parameters, $.BER);
    }
    if (value.aAAInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 16, () => _encode_AAAInformation, $.BER)(value.aAAInformation, $.BER);
    }
    if (value.e_mail_Sender_Validity !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_EmailIRI_e_mail_Sender_Validity, $.BER)(value.e_mail_Sender_Validity, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EmailIRI(value, elGetter);
}


/* eslint-enable */
