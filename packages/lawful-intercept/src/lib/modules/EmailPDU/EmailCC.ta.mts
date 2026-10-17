/* eslint-disable */
import {
    OCTET_STRING,
    RELATIVE_OID,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Email_Format, _decode_Email_Format, _encode_Email_Format, _enum_for_Email_Format } from "../EmailPDU/Email-Format.ta.mjs";
// export { Email_Format, _enum_for_Email_Format, Email_Format_ip_packet /* IMPORTED_LONG_ENUMERATION_ITEM */, ip_packet /* IMPORTED_SHORT_ENUMERATION_ITEM */, Email_Format_application /* IMPORTED_LONG_ENUMERATION_ITEM */, application /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Email_Format, _encode_Email_Format } from "../EmailPDU/Email-Format.ta.mjs";


/**
 * @summary EmailCC
 * @description
 *
 * HI3 captured content for one piece of an intercepted email.
 *
 * Send, receive, and download content shall include the IETF RFC 5322 envelope
 * and message text for mail of the target. A partial download contains only the
 * part the user retrieved. Anything less than the message body is incomplete,
 * and the whole envelope is included when the message has one. Optional RFC
 * 5322 header fields are content. The body itself is content and is not sent as
 * IRI.
 *
 * POP3 content is the complete data of every session the target starts, from
 * the AUTHORIZATION-state commands through the UPDATE-state commands, including
 * `USER`, `PASS`, `APOP`, and `QUIT`. Because a session can be held open (the
 * auto-logoff timer is at least 10 minutes, and `NOOP` keeps it alive), content
 * is delivered at least after every finished command and response, not only
 * when the session closes.
 *
 * IMAP4 content is the complete data of every session the target starts, from
 * `LOGIN` or `AUTHENTICATE` through `LOGOUT`, including those commands. It
 * includes folder operations and mail-status flags, not only message data.
 * Sessions can last a long time, so content is delivered at least after every
 * finished interaction.
 *
 * IP-packet delivery may include control packets that set up and tear down the
 * email exchange, outside the RFC 5322 message, so the mediation function does
 * not have to normalise different intercept points.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 4.1, 6.2.2, 6.3.2,
 * and 6.4.2, annexes B.5 and C.3, and clause E.2.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EmailCC ::= SEQUENCE
 *     -- EmailCC is the PDU sent for each "piece" of E-mail captured content
 * {
 *     emailCCObjId        [0] RELATIVE-OID,
 *     email-Format        [1] Email-Format,
 *     content             [2] OCTET STRING
 *         -- Network byte order
 * }
 * ```
 * 
 * @class
 */
export
class EmailCC {
    /**
     * @summary `emailCCObjId`.
     * @description
     *
     * Set to `emailCCObjId`, `{emailPDUObjId cC(2)}`.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 6 and annex D.
     *
     * @public
     * @readonly
     */
    readonly emailCCObjId: RELATIVE_OID;
    /**
     * @summary `email_Format`.
     * @description
     *
     * Selects IP-packet delivery or application (layer-4 payload) delivery.
     * Requirement E.2.6 asks HI3 to show which application appendix was used to
     * encode the content; the protocol identity for that choice is
     * `EmailIRI.protocol_ID`.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses E.2.6, E.2.7, and E.2.8.
     *
     * @public
     * @readonly
     */
    readonly email_Format: Email_Format;
    /**
     * @summary `content`.
     * @description
     *
     * Captured bytes, in network byte order. For `ip-packet`, the IP packet
     * from the IP header through the end of the packet, including TCP
     * acknowledgements. For `application`, only the layer-4 payload: the
     * commands and data of the email, with no IP or TCP headers.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses E.2.7 and E.2.8.
     *
     * @public
     * @readonly
     */
    readonly content: OCTET_STRING;

    constructor (
        emailCCObjId: RELATIVE_OID,
        email_Format: Email_Format,
        content: OCTET_STRING
    ) {
        this.emailCCObjId = emailCCObjId;
        this.email_Format = email_Format;
        this.content = content;
    }

    /**
     * @summary Restructures an object into a EmailCC
     * @description
     * 
     * This takes an `object` and converts it to a `EmailCC`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EmailCC`.
     * @returns {EmailCC}
     */
    public static _from_object (_o: { [_K in keyof (EmailCC)]: (EmailCC)[_K] }): EmailCC {
        return new EmailCC(_o.emailCCObjId, _o.email_Format, _o.content);
    }

        /**
         * @summary The enum used as the type of the component `email_Format`
         * @public
         * @static
         */

    public static _enum_for_email_Format = _enum_for_Email_Format;
}

/**
 * @summary The Leading Root Component Types of EmailCC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EmailCC: $.ComponentSpec[] = [
    new $.ComponentSpec("emailCCObjId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("email-Format", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("content", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of EmailCC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EmailCC: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EmailCC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EmailCC: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EmailCC: $.ASN1Decoder<EmailCC> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EmailCC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EmailCC (el: _Element): EmailCC {
    if (!_cached_decoder_for_EmailCC) { _cached_decoder_for_EmailCC = function (el: _Element): EmailCC {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("EmailCC contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "emailCCObjId";
    sequence[1].name = "email-Format";
    sequence[2].name = "content";
    let emailCCObjId!: RELATIVE_OID;
    let email_Format!: Email_Format;
    let content!: OCTET_STRING;
    emailCCObjId = $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID)(sequence[0]);
    email_Format = $._decode_implicit<Email_Format>(() => _decode_Email_Format)(sequence[1]);
    content = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[2]);
    return new EmailCC(
        emailCCObjId,
        email_Format,
        content,

    );
}; }
    return _cached_decoder_for_EmailCC(el);
}

let _cached_encoder_for_EmailCC: $.ASN1Encoder<EmailCC> | null = null;

/**
 * @summary Encodes a(n) EmailCC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EmailCC, encoded as an ASN.1 Element.
 */
export
function _encode_EmailCC (value: EmailCC, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EmailCC) { _cached_encoder_for_EmailCC = function (value: EmailCC, elGetter: $.ASN1Encoder<EmailCC>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER)(value.emailCCObjId, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Email_Format, $.BER)(value.email_Format, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.content, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_EmailCC(value, elGetter);
}


/* eslint-enable */
