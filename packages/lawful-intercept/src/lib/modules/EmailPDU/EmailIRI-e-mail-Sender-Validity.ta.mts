/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_EmailIRI_e_mail_Sender_Validity {
    validated = 0,
    nonvalidated = 1,
}

/**
 * @summary EmailIRI_e_mail_Sender_Validity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EmailIRI-e-mail-Sender-Validity ::= ENUMERATED {
 *     validated(0),
 *     -- The operator has assured the e-mail-sender
 *     nonvalidated(1),
 *     -- The operator does not assure the e-mail-sender
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EmailIRI_e_mail_Sender_Validity = _enum_for_EmailIRI_e_mail_Sender_Validity | ENUMERATED;

/**
 * @summary EmailIRI_e_mail_Sender_Validity_validated
 * @constant
 * @type {number}
 */
export
const EmailIRI_e_mail_Sender_Validity_validated: EmailIRI_e_mail_Sender_Validity = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary validated
 * @constant
 * @type {number}
 */
export
const validated: EmailIRI_e_mail_Sender_Validity = EmailIRI_e_mail_Sender_Validity_validated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EmailIRI_e_mail_Sender_Validity_nonvalidated
 * @constant
 * @type {number}
 */
export
const EmailIRI_e_mail_Sender_Validity_nonvalidated: EmailIRI_e_mail_Sender_Validity = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonvalidated
 * @constant
 * @type {number}
 */
export
const nonvalidated: EmailIRI_e_mail_Sender_Validity = EmailIRI_e_mail_Sender_Validity_nonvalidated; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EmailIRI_e_mail_Sender_Validity: $.ASN1Decoder<EmailIRI_e_mail_Sender_Validity> = $._decodeEnumerated;
export const _encode_EmailIRI_e_mail_Sender_Validity: $.ASN1Encoder<EmailIRI_e_mail_Sender_Validity> = $._encodeEnumerated;


/* eslint-enable */
