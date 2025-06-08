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
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField */
/**
 * @summary NNPDAUDiagnosticField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NNPDAUDiagnosticField  ::=  INTEGER {
 *   -- This field may be used to further specify the error signalled in
 *   -- nn-pdau-basic-code
 *   -- Additional information may be indicated in the nn-supplementary-information
 *   undeliverable-mail-physical-delivery-address-incorrect(32),
 *   undeliverable-mail-physical-delivery-office-incorrect-or-invalid(33),
 *   undeliverable-mail-physical-delivery-address-incomplete(34),
 *   undeliverable-mail-recipient-unknown(35),
 *   undeliverable-mail-recipient-deceased(36),
 *   undeliverable-mail-organization-expired(37),
 *   undeliverable-mail-recipient-refused-to-accept(38),
 *   undeliverable-mail-recipient-did-not-claim(39),
 *   undeliverable-mail-recipient-changed-address-permanently(40),
 *   undeliverable-mail-recipient-changed-address-temporarily(41),
 *   undeliverable-mail-recipient-changed-temporary-address(42),
 *   undeliverable-mail-new-address-unknown(43),
 *   undeliverable-mail-recipient-did-not-want-forwarding(44),
 *   undeliverable-mail-originator-prohibited-forwarding(45),
 *   physical-rendition-attributes-not-supported(31)}(1..ub-reason-code)
 * ```
 */
export type NNPDAUDiagnosticField = INTEGER;
/* END_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField */

/* START_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incorrect */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incorrect
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incorrect: NNPDAUDiagnosticField = 32; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incorrect */

/* START_OF_SYMBOL_DEFINITION undeliverable_mail_physical_delivery_address_incorrect */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incorrect
 * @constant
 * @type {number}
 */
export const undeliverable_mail_physical_delivery_address_incorrect: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incorrect; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION undeliverable_mail_physical_delivery_address_incorrect */

/* START_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_office_incorrect_or_invalid */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_office_incorrect_or_invalid
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_office_incorrect_or_invalid: NNPDAUDiagnosticField = 33; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_office_incorrect_or_invalid */

/* START_OF_SYMBOL_DEFINITION undeliverable_mail_physical_delivery_office_incorrect_or_invalid */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_office_incorrect_or_invalid
 * @constant
 * @type {number}
 */
export const undeliverable_mail_physical_delivery_office_incorrect_or_invalid: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_office_incorrect_or_invalid; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION undeliverable_mail_physical_delivery_office_incorrect_or_invalid */

/* START_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incomplete */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incomplete
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incomplete: NNPDAUDiagnosticField = 34; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incomplete */

/* START_OF_SYMBOL_DEFINITION undeliverable_mail_physical_delivery_address_incomplete */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incomplete
 * @constant
 * @type {number}
 */
export const undeliverable_mail_physical_delivery_address_incomplete: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incomplete; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION undeliverable_mail_physical_delivery_address_incomplete */

/* START_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_recipient_unknown */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_unknown
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_recipient_unknown: NNPDAUDiagnosticField = 35; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_recipient_unknown */

/* START_OF_SYMBOL_DEFINITION undeliverable_mail_recipient_unknown */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_unknown
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_unknown: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_recipient_unknown; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION undeliverable_mail_recipient_unknown */

/* START_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_recipient_deceased */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_deceased
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_recipient_deceased: NNPDAUDiagnosticField = 36; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_recipient_deceased */

/* START_OF_SYMBOL_DEFINITION undeliverable_mail_recipient_deceased */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_deceased
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_deceased: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_recipient_deceased; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION undeliverable_mail_recipient_deceased */

/* START_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_organization_expired */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_organization_expired
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_organization_expired: NNPDAUDiagnosticField = 37; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_organization_expired */

/* START_OF_SYMBOL_DEFINITION undeliverable_mail_organization_expired */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_organization_expired
 * @constant
 * @type {number}
 */
export const undeliverable_mail_organization_expired: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_organization_expired; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION undeliverable_mail_organization_expired */

/* START_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_recipient_refused_to_accept */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_refused_to_accept
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_recipient_refused_to_accept: NNPDAUDiagnosticField = 38; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_recipient_refused_to_accept */

/* START_OF_SYMBOL_DEFINITION undeliverable_mail_recipient_refused_to_accept */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_refused_to_accept
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_refused_to_accept: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_recipient_refused_to_accept; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION undeliverable_mail_recipient_refused_to_accept */

/* START_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_claim */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_claim
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_claim: NNPDAUDiagnosticField = 39; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_claim */

/* START_OF_SYMBOL_DEFINITION undeliverable_mail_recipient_did_not_claim */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_claim
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_did_not_claim: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_claim; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION undeliverable_mail_recipient_did_not_claim */

/* START_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_permanently */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_permanently
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_permanently: NNPDAUDiagnosticField = 40; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_permanently */

/* START_OF_SYMBOL_DEFINITION undeliverable_mail_recipient_changed_address_permanently */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_permanently
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_changed_address_permanently: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_permanently; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION undeliverable_mail_recipient_changed_address_permanently */

/* START_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_temporarily */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_temporarily
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_temporarily: NNPDAUDiagnosticField = 41; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_temporarily */

/* START_OF_SYMBOL_DEFINITION undeliverable_mail_recipient_changed_address_temporarily */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_temporarily
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_changed_address_temporarily: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_temporarily; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION undeliverable_mail_recipient_changed_address_temporarily */

/* START_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_temporary_address */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_temporary_address
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_temporary_address: NNPDAUDiagnosticField = 42; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_temporary_address */

/* START_OF_SYMBOL_DEFINITION undeliverable_mail_recipient_changed_temporary_address */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_temporary_address
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_changed_temporary_address: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_temporary_address; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION undeliverable_mail_recipient_changed_temporary_address */

/* START_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_new_address_unknown */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_new_address_unknown
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_new_address_unknown: NNPDAUDiagnosticField = 43; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_new_address_unknown */

/* START_OF_SYMBOL_DEFINITION undeliverable_mail_new_address_unknown */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_new_address_unknown
 * @constant
 * @type {number}
 */
export const undeliverable_mail_new_address_unknown: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_new_address_unknown; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION undeliverable_mail_new_address_unknown */

/* START_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_want_forwarding */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_want_forwarding
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_want_forwarding: NNPDAUDiagnosticField = 44; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_want_forwarding */

/* START_OF_SYMBOL_DEFINITION undeliverable_mail_recipient_did_not_want_forwarding */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_want_forwarding
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_did_not_want_forwarding: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_want_forwarding; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION undeliverable_mail_recipient_did_not_want_forwarding */

/* START_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_originator_prohibited_forwarding */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_originator_prohibited_forwarding
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_originator_prohibited_forwarding: NNPDAUDiagnosticField = 45; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_undeliverable_mail_originator_prohibited_forwarding */

/* START_OF_SYMBOL_DEFINITION undeliverable_mail_originator_prohibited_forwarding */
/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_originator_prohibited_forwarding
 * @constant
 * @type {number}
 */
export const undeliverable_mail_originator_prohibited_forwarding: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_originator_prohibited_forwarding; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION undeliverable_mail_originator_prohibited_forwarding */

/* START_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_physical_rendition_attributes_not_supported */
/**
 * @summary NNPDAUDiagnosticField_physical_rendition_attributes_not_supported
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_physical_rendition_attributes_not_supported: NNPDAUDiagnosticField = 31; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNPDAUDiagnosticField_physical_rendition_attributes_not_supported */

/* START_OF_SYMBOL_DEFINITION physical_rendition_attributes_not_supported */
/**
 * @summary NNPDAUDiagnosticField_physical_rendition_attributes_not_supported
 * @constant
 * @type {number}
 */
export const physical_rendition_attributes_not_supported: NNPDAUDiagnosticField = NNPDAUDiagnosticField_physical_rendition_attributes_not_supported; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION physical_rendition_attributes_not_supported */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NNPDAUDiagnosticField */
let _cached_decoder_for_NNPDAUDiagnosticField: $.ASN1Decoder<NNPDAUDiagnosticField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NNPDAUDiagnosticField */

/* START_OF_SYMBOL_DEFINITION _decode_NNPDAUDiagnosticField */
/**
 * @summary Decodes an ASN.1 element into a(n) NNPDAUDiagnosticField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NNPDAUDiagnosticField} The decoded data structure.
 */
export function _decode_NNPDAUDiagnosticField(el: _Element) {
    if (!_cached_decoder_for_NNPDAUDiagnosticField) {
        _cached_decoder_for_NNPDAUDiagnosticField = $._decodeInteger;
    }
    return _cached_decoder_for_NNPDAUDiagnosticField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NNPDAUDiagnosticField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NNPDAUDiagnosticField */
let _cached_encoder_for_NNPDAUDiagnosticField: $.ASN1Encoder<NNPDAUDiagnosticField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NNPDAUDiagnosticField */

/* START_OF_SYMBOL_DEFINITION _encode_NNPDAUDiagnosticField */
/**
 * @summary Encodes a(n) NNPDAUDiagnosticField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NNPDAUDiagnosticField, encoded as an ASN.1 Element.
 */
export function _encode_NNPDAUDiagnosticField(
    value: NNPDAUDiagnosticField,
    elGetter: $.ASN1Encoder<NNPDAUDiagnosticField>
) {
    if (!_cached_encoder_for_NNPDAUDiagnosticField) {
        _cached_encoder_for_NNPDAUDiagnosticField = $._encodeInteger;
    }
    return _cached_encoder_for_NNPDAUDiagnosticField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NNPDAUDiagnosticField */

/* eslint-enable */
