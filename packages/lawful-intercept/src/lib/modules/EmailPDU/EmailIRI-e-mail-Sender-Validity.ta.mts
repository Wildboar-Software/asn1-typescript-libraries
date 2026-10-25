/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @description
 *
 * Whether the operator assures the address in `EmailIRI.e_mail_Sender`.
 *
 * Annex F.2: the SMTP `MAIL FROM` address can be spoofed with no loss of
 * delivery, and this value is how that is signalled. When the user must
 * authenticate before access, validity is available. The enumeration is
 * extensible.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annexes D and F.2.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 */
export
enum _enum_for_EmailIRI_e_mail_Sender_Validity {
    /**
     * The operator has assured the email sender.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`EmailIRI`).
     */
    validated = 0,
    /**
     * The operator does not assure the email sender.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`EmailIRI`).
     */
    nonvalidated = 1,
}

/**
 * @summary EmailIRI_e_mail_Sender_Validity
 * @description
 *
 * Whether the operator assures the address in `EmailIRI.e_mail_Sender`.
 *
 * Annex F.2: the SMTP `MAIL FROM` address can be spoofed with no loss of
 * delivery, and this value is how that is signalled. When the user must
 * authenticate before access, validity is available. The enumeration is
 * extensible.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annexes D and F.2.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
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
 * @description
 *
 * The operator has assured the email sender.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`EmailIRI`).
 *
 * @constant
 * @type {number}
 */
export
const EmailIRI_e_mail_Sender_Validity_validated: EmailIRI_e_mail_Sender_Validity = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary validated
 * @description
 *
 * The operator has assured the email sender.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`EmailIRI`).
 *
 * @constant
 * @type {number}
 */
export
const validated: EmailIRI_e_mail_Sender_Validity = EmailIRI_e_mail_Sender_Validity_validated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EmailIRI_e_mail_Sender_Validity_nonvalidated
 * @description
 *
 * The operator does not assure the email sender.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`EmailIRI`).
 *
 * @constant
 * @type {number}
 */
export
const EmailIRI_e_mail_Sender_Validity_nonvalidated: EmailIRI_e_mail_Sender_Validity = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonvalidated
 * @description
 *
 * The operator does not assure the email sender.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`EmailIRI`).
 *
 * @constant
 * @type {number}
 */
export
const nonvalidated: EmailIRI_e_mail_Sender_Validity = EmailIRI_e_mail_Sender_Validity_nonvalidated; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EmailIRI_e_mail_Sender_Validity: $.ASN1Decoder<EmailIRI_e_mail_Sender_Validity> = $._decodeEnumerated;
export const _encode_EmailIRI_e_mail_Sender_Validity: $.ASN1Encoder<EmailIRI_e_mail_Sender_Validity> = $._encodeEnumerated;


/* eslint-enable */
