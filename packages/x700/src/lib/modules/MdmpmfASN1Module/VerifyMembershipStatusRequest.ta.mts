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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';

/* START_OF_SYMBOL_DEFINITION VerifyMembershipStatusRequest */
/**
 * @summary VerifyMembershipStatusRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VerifyMembershipStatusRequest  ::=  ObjectInstance
 * ```
 */
export type VerifyMembershipStatusRequest = ObjectInstance; // DefinedType
/* END_OF_SYMBOL_DEFINITION VerifyMembershipStatusRequest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_VerifyMembershipStatusRequest */
let _cached_decoder_for_VerifyMembershipStatusRequest: $.ASN1Decoder<VerifyMembershipStatusRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_VerifyMembershipStatusRequest */

/* START_OF_SYMBOL_DEFINITION _decode_VerifyMembershipStatusRequest */
/**
 * @summary Decodes an ASN.1 element into a(n) VerifyMembershipStatusRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VerifyMembershipStatusRequest} The decoded data structure.
 */
export function _decode_VerifyMembershipStatusRequest(el: _Element) {
    if (!_cached_decoder_for_VerifyMembershipStatusRequest) {
        _cached_decoder_for_VerifyMembershipStatusRequest = _decode_ObjectInstance;
    }
    return _cached_decoder_for_VerifyMembershipStatusRequest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_VerifyMembershipStatusRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_VerifyMembershipStatusRequest */
let _cached_encoder_for_VerifyMembershipStatusRequest: $.ASN1Encoder<VerifyMembershipStatusRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_VerifyMembershipStatusRequest */

/* START_OF_SYMBOL_DEFINITION _encode_VerifyMembershipStatusRequest */
/**
 * @summary Encodes a(n) VerifyMembershipStatusRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VerifyMembershipStatusRequest, encoded as an ASN.1 Element.
 */
export function _encode_VerifyMembershipStatusRequest(
    value: VerifyMembershipStatusRequest,
    elGetter: $.ASN1Encoder<VerifyMembershipStatusRequest>
) {
    if (!_cached_encoder_for_VerifyMembershipStatusRequest) {
        _cached_encoder_for_VerifyMembershipStatusRequest = _encode_ObjectInstance;
    }
    return _cached_encoder_for_VerifyMembershipStatusRequest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_VerifyMembershipStatusRequest */

/* eslint-enable */
