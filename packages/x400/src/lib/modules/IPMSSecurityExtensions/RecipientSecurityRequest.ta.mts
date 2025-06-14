/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION RecipientSecurityRequest */
/**
 * @summary RecipientSecurityRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientSecurityRequest  ::=  BIT STRING {
 *   content-non-repudiation(0), content-proof(1), ipn-non-repudiation(2),
 *   ipn-proof(3)}
 * ```
 */
export type RecipientSecurityRequest = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION RecipientSecurityRequest */

/* START_OF_SYMBOL_DEFINITION RecipientSecurityRequest_content_non_repudiation */
/**
 * @summary RecipientSecurityRequest_content_non_repudiation
 * @constant
 */
export const RecipientSecurityRequest_content_non_repudiation: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RecipientSecurityRequest_content_non_repudiation */

/* START_OF_SYMBOL_DEFINITION content_non_repudiation */
/**
 * @summary content_non_repudiation
 * @constant
 */
export const content_non_repudiation: number = RecipientSecurityRequest_content_non_repudiation; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION content_non_repudiation */

/* START_OF_SYMBOL_DEFINITION RecipientSecurityRequest_content_proof */
/**
 * @summary RecipientSecurityRequest_content_proof
 * @constant
 */
export const RecipientSecurityRequest_content_proof: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RecipientSecurityRequest_content_proof */

/* START_OF_SYMBOL_DEFINITION content_proof */
/**
 * @summary content_proof
 * @constant
 */
export const content_proof: number = RecipientSecurityRequest_content_proof; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION content_proof */

/* START_OF_SYMBOL_DEFINITION RecipientSecurityRequest_ipn_non_repudiation */
/**
 * @summary RecipientSecurityRequest_ipn_non_repudiation
 * @constant
 */
export const RecipientSecurityRequest_ipn_non_repudiation: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RecipientSecurityRequest_ipn_non_repudiation */

/* START_OF_SYMBOL_DEFINITION ipn_non_repudiation */
/**
 * @summary ipn_non_repudiation
 * @constant
 */
export const ipn_non_repudiation: number = RecipientSecurityRequest_ipn_non_repudiation; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ipn_non_repudiation */

/* START_OF_SYMBOL_DEFINITION RecipientSecurityRequest_ipn_proof */
/**
 * @summary RecipientSecurityRequest_ipn_proof
 * @constant
 */
export const RecipientSecurityRequest_ipn_proof: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RecipientSecurityRequest_ipn_proof */

/* START_OF_SYMBOL_DEFINITION ipn_proof */
/**
 * @summary ipn_proof
 * @constant
 */
export const ipn_proof: number = RecipientSecurityRequest_ipn_proof; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ipn_proof */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientSecurityRequest */
let _cached_decoder_for_RecipientSecurityRequest: $.ASN1Decoder<RecipientSecurityRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientSecurityRequest */

/* START_OF_SYMBOL_DEFINITION _decode_RecipientSecurityRequest */
/**
 * @summary Decodes an ASN.1 element into a(n) RecipientSecurityRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientSecurityRequest} The decoded data structure.
 */
export function _decode_RecipientSecurityRequest(el: _Element) {
    if (!_cached_decoder_for_RecipientSecurityRequest) {
        _cached_decoder_for_RecipientSecurityRequest = $._decodeBitString;
    }
    return _cached_decoder_for_RecipientSecurityRequest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RecipientSecurityRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientSecurityRequest */
let _cached_encoder_for_RecipientSecurityRequest: $.ASN1Encoder<RecipientSecurityRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientSecurityRequest */

/* START_OF_SYMBOL_DEFINITION _encode_RecipientSecurityRequest */
/**
 * @summary Encodes a(n) RecipientSecurityRequest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientSecurityRequest, encoded as an ASN.1 Element.
 */
export function _encode_RecipientSecurityRequest(
    value: RecipientSecurityRequest,
    elGetter: $.ASN1Encoder<RecipientSecurityRequest>
) {
    if (!_cached_encoder_for_RecipientSecurityRequest) {
        _cached_encoder_for_RecipientSecurityRequest = $._encodeBitString;
    }
    return _cached_encoder_for_RecipientSecurityRequest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RecipientSecurityRequest */

/* eslint-enable */
