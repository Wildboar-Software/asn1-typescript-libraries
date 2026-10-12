/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    RELATIVE_OID,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { E_mail_Event, _decode_E_mail_Event, _encode_E_mail_Event, _enum_for_E_mail_Event } from "../EmailPDU/E-mail-Event.ta.mjs";
// export { E_mail_Event, _enum_for_E_mail_Event, E_mail_Event_e_mail_send /* IMPORTED_LONG_ENUMERATION_ITEM */, e_mail_send /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Event_e_mail_receive /* IMPORTED_LONG_ENUMERATION_ITEM */, e_mail_receive /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Event_e_mail_download /* IMPORTED_LONG_ENUMERATION_ITEM */, e_mail_download /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Event_e_mail_logon_attempt /* IMPORTED_LONG_ENUMERATION_ITEM */, e_mail_logon_attempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Event_e_mail_logon /* IMPORTED_LONG_ENUMERATION_ITEM */, e_mail_logon /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Event_e_mail_logon_failure /* IMPORTED_LONG_ENUMERATION_ITEM */, e_mail_logon_failure /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Event_e_mail_logoff /* IMPORTED_LONG_ENUMERATION_ITEM */, e_mail_logoff /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Event_e_mail_partial_download /* IMPORTED_LONG_ENUMERATION_ITEM */, e_mail_partial_download /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Event_e_mail_upload /* IMPORTED_LONG_ENUMERATION_ITEM */, e_mail_upload /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_E_mail_Event, _encode_E_mail_Event } from "../EmailPDU/E-mail-Event.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../LI-PS-PDU/IPAddress.ta.mjs";
import { E_mail_Protocol, _decode_E_mail_Protocol, _encode_E_mail_Protocol, _enum_for_E_mail_Protocol, undefined /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../EmailPDU/E-mail-Protocol.ta.mjs";
// export { E_mail_Protocol, _enum_for_E_mail_Protocol, E_mail_Protocol_smtp /* IMPORTED_LONG_ENUMERATION_ITEM */, smtp /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Protocol_pop3 /* IMPORTED_LONG_ENUMERATION_ITEM */, pop3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Protocol_imap4 /* IMPORTED_LONG_ENUMERATION_ITEM */, imap4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Protocol_webmail /* IMPORTED_LONG_ENUMERATION_ITEM */, webmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Protocol_undefined /* IMPORTED_LONG_ENUMERATION_ITEM */, undefined /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_E_mail_Protocol, _encode_E_mail_Protocol } from "../EmailPDU/E-mail-Protocol.ta.mjs";
import { E_mail_Address_List, _decode_E_mail_Address_List, _encode_E_mail_Address_List } from "../EmailPDU/E-mail-Address-List.ta.mjs";
// export { E_mail_Address_List, _decode_E_mail_Address_List, _encode_E_mail_Address_List } from "../EmailPDU/E-mail-Address-List.ta.mjs";
import { E_mail_Status, _decode_E_mail_Status, _encode_E_mail_Status, _enum_for_E_mail_Status } from "../EmailPDU/E-mail-Status.ta.mjs";
// export { E_mail_Status, _enum_for_E_mail_Status, E_mail_Status_status_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, status_unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Status_operation_failed /* IMPORTED_LONG_ENUMERATION_ITEM */, operation_failed /* IMPORTED_SHORT_ENUMERATION_ITEM */, E_mail_Status_operation_succeeded /* IMPORTED_LONG_ENUMERATION_ITEM */, operation_succeeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_E_mail_Status, _encode_E_mail_Status } from "../EmailPDU/E-mail-Status.ta.mjs";
import { National_EM_ASN1parameters, _decode_National_EM_ASN1parameters, _encode_National_EM_ASN1parameters } from "../EmailPDU/National-EM-ASN1parameters.ta.mjs";
// export { National_EM_ASN1parameters, _decode_National_EM_ASN1parameters, _encode_National_EM_ASN1parameters } from "../EmailPDU/National-EM-ASN1parameters.ta.mjs";
import { AAAInformation, _decode_AAAInformation, _encode_AAAInformation } from "../EmailPDU/AAAInformation.ta.mjs";
// export { AAAInformation, _decode_AAAInformation, _encode_AAAInformation } from "../EmailPDU/AAAInformation.ta.mjs";
import { EmailIRI_e_mail_Sender_Validity, _decode_EmailIRI_e_mail_Sender_Validity, _encode_EmailIRI_e_mail_Sender_Validity, _enum_for_EmailIRI_e_mail_Sender_Validity } from "../EmailPDU/EmailIRI-e-mail-Sender-Validity.ta.mjs";
// export { EmailIRI_e_mail_Sender_Validity, _enum_for_EmailIRI_e_mail_Sender_Validity, EmailIRI_e_mail_Sender_Validity_validated /* IMPORTED_LONG_ENUMERATION_ITEM */, validated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EmailIRI_e_mail_Sender_Validity_nonvalidated /* IMPORTED_LONG_ENUMERATION_ITEM */, nonvalidated /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EmailIRI_e_mail_Sender_Validity, _encode_EmailIRI_e_mail_Sender_Validity } from "../EmailPDU/EmailIRI-e-mail-Sender-Validity.ta.mjs";


/**
 * @summary EmailIRI
 * @description
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
     * @public
     * @readonly
     */
    readonly emailIRIObjId: RELATIVE_OID;
    /**
     * @summary `eventType`.
     * @public
     * @readonly
     */
    readonly eventType: E_mail_Event;
    /**
     * @summary `client_Address`.
     * @public
     * @readonly
     */
    readonly client_Address: OPTIONAL<LI_PS_PDU.IPAddress>;
    /**
     * @summary `server_Address`.
     * @public
     * @readonly
     */
    readonly server_Address: OPTIONAL<LI_PS_PDU.IPAddress>;
    /**
     * @summary `client_Port`.
     * @public
     * @readonly
     */
    readonly client_Port: OPTIONAL<INTEGER>;
    /**
     * @summary `server_Port`.
     * @public
     * @readonly
     */
    readonly server_Port: OPTIONAL<INTEGER>;
    /**
     * @summary `server_Octets_Sent`.
     * @public
     * @readonly
     */
    readonly server_Octets_Sent: INTEGER;
    /**
     * @summary `client_Octets_Sent`.
     * @public
     * @readonly
     */
    readonly client_Octets_Sent: INTEGER;
    /**
     * @summary `protocol_ID`.
     * @public
     * @readonly
     */
    readonly protocol_ID: E_mail_Protocol;
    /**
     * @summary `e_mail_Sender`.
     * @public
     * @readonly
     */
    readonly e_mail_Sender: OPTIONAL<UTF8String>;
    /**
     * @summary `e_mail_Recipients`.
     * @public
     * @readonly
     */
    readonly e_mail_Recipients: OPTIONAL<E_mail_Address_List>;
    /**
     * @summary `status`.
     * @public
     * @readonly
     */
    readonly status: E_mail_Status;
    /**
     * @summary `total_Recipient_Count`.
     * @public
     * @readonly
     */
    readonly total_Recipient_Count: OPTIONAL<INTEGER>;
    /**
     * @summary `message_ID`.
     * @public
     * @readonly
     */
    readonly message_ID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `nationalParameter`.
     * @public
     * @readonly
     */
    readonly nationalParameter: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `national_EM_ASN1parameters`.
     * @public
     * @readonly
     */
    readonly national_EM_ASN1parameters: OPTIONAL<National_EM_ASN1parameters>;
    /**
     * @summary `aAAInformation`.
     * @public
     * @readonly
     */
    readonly aAAInformation: OPTIONAL<AAAInformation>;
    /**
     * @summary `e_mail_Sender_Validity`.
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
        total_Recipient_Count: OPTIONAL<INTEGER>,
        message_ID: OPTIONAL<OCTET_STRING>,
        nationalParameter: OPTIONAL<OCTET_STRING>,
        national_EM_ASN1parameters: OPTIONAL<National_EM_ASN1parameters>,
        aAAInformation: OPTIONAL<AAAInformation>,
        e_mail_Sender_Validity: OPTIONAL<EmailIRI_e_mail_Sender_Validity>,
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

    public static _enum_for_eventType = _enum_for_E_mail_Event;        /**
         * @summary The enum used as the type of the component `protocol_ID`
         * @public
         * @static
         */

    public static _enum_for_protocol_ID = _enum_for_E_mail_Protocol;        /**
         * @summary The enum used as the type of the component `status`
         * @public
         * @static
         */

    public static _enum_for_status = _enum_for_E_mail_Status;        /**
         * @summary The enum used as the type of the component `e_mail_Sender_Validity`
         * @public
         * @static
         */

    public static _enum_for_e_mail_Sender_Validity = _enum_for_EmailIRI_e_mail_Sender_Validity;
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
    let _unrecognizedExtensionsList: _Element[] = [];
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
        "e-mail-Sender": (_el: _Element): void => { e_mail_Sender = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "e-mail-Recipients": (_el: _Element): void => { e_mail_Recipients = $._decode_implicit<E_mail_Address_List>(() => _decode_E_mail_Address_List)(_el); },
        "status": (_el: _Element): void => { status = $._decode_implicit<E_mail_Status>(() => _decode_E_mail_Status)(_el); },
        "total-Recipient-Count": (_el: _Element): void => { total_Recipient_Count = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
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
