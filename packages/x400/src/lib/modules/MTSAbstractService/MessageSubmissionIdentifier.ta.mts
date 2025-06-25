/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    MTSIdentifier,
    _decode_MTSIdentifier,
    _encode_MTSIdentifier,
} from '../MTSAbstractService/MTSIdentifier.ta.mjs';
/**
 * @summary MessageSubmissionIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageSubmissionIdentifier  ::=  MTSIdentifier
 * ```
 */
export type MessageSubmissionIdentifier = MTSIdentifier; // DefinedType

let _cached_decoder_for_MessageSubmissionIdentifier: $.ASN1Decoder<MessageSubmissionIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageSubmissionIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageSubmissionIdentifier} The decoded data structure.
 */
export function _decode_MessageSubmissionIdentifier(el: _Element): MessageSubmissionIdentifier {
    if (!_cached_decoder_for_MessageSubmissionIdentifier) {
        _cached_decoder_for_MessageSubmissionIdentifier = _decode_MTSIdentifier;
    }
    return _cached_decoder_for_MessageSubmissionIdentifier(el);
}

let _cached_encoder_for_MessageSubmissionIdentifier: $.ASN1Encoder<MessageSubmissionIdentifier> | null = null;

/**
 * @summary Encodes a(n) MessageSubmissionIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageSubmissionIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_MessageSubmissionIdentifier(
    value: MessageSubmissionIdentifier,
    elGetter: $.ASN1Encoder<MessageSubmissionIdentifier>
): _Element {
    if (!_cached_encoder_for_MessageSubmissionIdentifier) {
        _cached_encoder_for_MessageSubmissionIdentifier = _encode_MTSIdentifier;
    }
    return _cached_encoder_for_MessageSubmissionIdentifier(value, elGetter);
}


/* eslint-enable */
