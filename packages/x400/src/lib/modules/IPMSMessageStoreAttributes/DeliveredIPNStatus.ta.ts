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

/* START_OF_SYMBOL_DEFINITION DeliveredIPNStatus */
/**
 * @summary DeliveredIPNStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveredIPNStatus  ::=  INTEGER {
 *   no-ipn-requested(0), an-requested(3), nrn-requested(5), rn-requested(10),
 *   an-received(13), ipm-auto-forwarded(15), ipm-discarded(20), rn-received(25)
 * }
 * ```
 */
export type DeliveredIPNStatus = INTEGER;
/* END_OF_SYMBOL_DEFINITION DeliveredIPNStatus */

/* START_OF_SYMBOL_DEFINITION DeliveredIPNStatus_no_ipn_requested */
/**
 * @summary DeliveredIPNStatus_no_ipn_requested
 * @constant
 * @type {number}
 */
export const DeliveredIPNStatus_no_ipn_requested: DeliveredIPNStatus = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliveredIPNStatus_no_ipn_requested */

/* START_OF_SYMBOL_DEFINITION no_ipn_requested */
/**
 * @summary DeliveredIPNStatus_no_ipn_requested
 * @constant
 * @type {number}
 */
export const no_ipn_requested: DeliveredIPNStatus = DeliveredIPNStatus_no_ipn_requested; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION no_ipn_requested */

/* START_OF_SYMBOL_DEFINITION DeliveredIPNStatus_an_requested */
/**
 * @summary DeliveredIPNStatus_an_requested
 * @constant
 * @type {number}
 */
export const DeliveredIPNStatus_an_requested: DeliveredIPNStatus = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliveredIPNStatus_an_requested */

/* START_OF_SYMBOL_DEFINITION an_requested */
/**
 * @summary DeliveredIPNStatus_an_requested
 * @constant
 * @type {number}
 */
export const an_requested: DeliveredIPNStatus = DeliveredIPNStatus_an_requested; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION an_requested */

/* START_OF_SYMBOL_DEFINITION DeliveredIPNStatus_nrn_requested */
/**
 * @summary DeliveredIPNStatus_nrn_requested
 * @constant
 * @type {number}
 */
export const DeliveredIPNStatus_nrn_requested: DeliveredIPNStatus = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliveredIPNStatus_nrn_requested */

/* START_OF_SYMBOL_DEFINITION nrn_requested */
/**
 * @summary DeliveredIPNStatus_nrn_requested
 * @constant
 * @type {number}
 */
export const nrn_requested: DeliveredIPNStatus = DeliveredIPNStatus_nrn_requested; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION nrn_requested */

/* START_OF_SYMBOL_DEFINITION DeliveredIPNStatus_rn_requested */
/**
 * @summary DeliveredIPNStatus_rn_requested
 * @constant
 * @type {number}
 */
export const DeliveredIPNStatus_rn_requested: DeliveredIPNStatus = 10; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliveredIPNStatus_rn_requested */

/* START_OF_SYMBOL_DEFINITION rn_requested */
/**
 * @summary DeliveredIPNStatus_rn_requested
 * @constant
 * @type {number}
 */
export const rn_requested: DeliveredIPNStatus = DeliveredIPNStatus_rn_requested; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION rn_requested */

/* START_OF_SYMBOL_DEFINITION DeliveredIPNStatus_an_received */
/**
 * @summary DeliveredIPNStatus_an_received
 * @constant
 * @type {number}
 */
export const DeliveredIPNStatus_an_received: DeliveredIPNStatus = 13; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliveredIPNStatus_an_received */

/* START_OF_SYMBOL_DEFINITION an_received */
/**
 * @summary DeliveredIPNStatus_an_received
 * @constant
 * @type {number}
 */
export const an_received: DeliveredIPNStatus = DeliveredIPNStatus_an_received; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION an_received */

/* START_OF_SYMBOL_DEFINITION DeliveredIPNStatus_ipm_auto_forwarded */
/**
 * @summary DeliveredIPNStatus_ipm_auto_forwarded
 * @constant
 * @type {number}
 */
export const DeliveredIPNStatus_ipm_auto_forwarded: DeliveredIPNStatus = 15; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliveredIPNStatus_ipm_auto_forwarded */

/* START_OF_SYMBOL_DEFINITION ipm_auto_forwarded */
/**
 * @summary DeliveredIPNStatus_ipm_auto_forwarded
 * @constant
 * @type {number}
 */
export const ipm_auto_forwarded: DeliveredIPNStatus = DeliveredIPNStatus_ipm_auto_forwarded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ipm_auto_forwarded */

/* START_OF_SYMBOL_DEFINITION DeliveredIPNStatus_ipm_discarded */
/**
 * @summary DeliveredIPNStatus_ipm_discarded
 * @constant
 * @type {number}
 */
export const DeliveredIPNStatus_ipm_discarded: DeliveredIPNStatus = 20; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliveredIPNStatus_ipm_discarded */

/* START_OF_SYMBOL_DEFINITION ipm_discarded */
/**
 * @summary DeliveredIPNStatus_ipm_discarded
 * @constant
 * @type {number}
 */
export const ipm_discarded: DeliveredIPNStatus = DeliveredIPNStatus_ipm_discarded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ipm_discarded */

/* START_OF_SYMBOL_DEFINITION DeliveredIPNStatus_rn_received */
/**
 * @summary DeliveredIPNStatus_rn_received
 * @constant
 * @type {number}
 */
export const DeliveredIPNStatus_rn_received: DeliveredIPNStatus = 25; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliveredIPNStatus_rn_received */

/* START_OF_SYMBOL_DEFINITION rn_received */
/**
 * @summary DeliveredIPNStatus_rn_received
 * @constant
 * @type {number}
 */
export const rn_received: DeliveredIPNStatus = DeliveredIPNStatus_rn_received; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION rn_received */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveredIPNStatus */
let _cached_decoder_for_DeliveredIPNStatus: $.ASN1Decoder<DeliveredIPNStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveredIPNStatus */

/* START_OF_SYMBOL_DEFINITION _decode_DeliveredIPNStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) DeliveredIPNStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliveredIPNStatus} The decoded data structure.
 */
export function _decode_DeliveredIPNStatus(el: _Element) {
    if (!_cached_decoder_for_DeliveredIPNStatus) {
        _cached_decoder_for_DeliveredIPNStatus = $._decodeInteger;
    }
    return _cached_decoder_for_DeliveredIPNStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeliveredIPNStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveredIPNStatus */
let _cached_encoder_for_DeliveredIPNStatus: $.ASN1Encoder<DeliveredIPNStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveredIPNStatus */

/* START_OF_SYMBOL_DEFINITION _encode_DeliveredIPNStatus */
/**
 * @summary Encodes a(n) DeliveredIPNStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliveredIPNStatus, encoded as an ASN.1 Element.
 */
export function _encode_DeliveredIPNStatus(
    value: DeliveredIPNStatus,
    elGetter: $.ASN1Encoder<DeliveredIPNStatus>
) {
    if (!_cached_encoder_for_DeliveredIPNStatus) {
        _cached_encoder_for_DeliveredIPNStatus = $._encodeInteger;
    }
    return _cached_encoder_for_DeliveredIPNStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeliveredIPNStatus */

/* eslint-enable */
