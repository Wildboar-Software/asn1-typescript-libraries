/* eslint-disable */
import {
    ASN1Element as _Element,
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
 * EmailIRI-e-mail-Sender-Validity ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
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

let _cached_decoder_for_EmailIRI_e_mail_Sender_Validity: $.ASN1Decoder<EmailIRI_e_mail_Sender_Validity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EmailIRI_e_mail_Sender_Validity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EmailIRI_e_mail_Sender_Validity (el: _Element): EmailIRI_e_mail_Sender_Validity {
    if (!_cached_decoder_for_EmailIRI_e_mail_Sender_Validity) { _cached_decoder_for_EmailIRI_e_mail_Sender_Validity = $._decodeEnumerated; }
    return _cached_decoder_for_EmailIRI_e_mail_Sender_Validity(el);
}

let _cached_encoder_for_EmailIRI_e_mail_Sender_Validity: $.ASN1Encoder<EmailIRI_e_mail_Sender_Validity> | null = null;

/**
 * @summary Encodes a(n) EmailIRI_e_mail_Sender_Validity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EmailIRI_e_mail_Sender_Validity, encoded as an ASN.1 Element.
 */
export
function _encode_EmailIRI_e_mail_Sender_Validity (value: EmailIRI_e_mail_Sender_Validity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EmailIRI_e_mail_Sender_Validity) { _cached_encoder_for_EmailIRI_e_mail_Sender_Validity = $._encodeEnumerated; }
    return _cached_encoder_for_EmailIRI_e_mail_Sender_Validity(value, elGetter);
}


/* eslint-enable */
