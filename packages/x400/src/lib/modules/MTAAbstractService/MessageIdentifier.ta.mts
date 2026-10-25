/* eslint-disable */
import {
    type ASN1Element as _Element,
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
 * @summary MessageIdentifier
 * @description
 *
 * This argument contains an MTS-identifier that distinguishes the message from all other
 * messages, probes and reports within the MTS. See ITU-T X.411 (1999), §12.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageIdentifier  ::=  MTSIdentifier
 * ```
 */
export type MessageIdentifier = MTSIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MessageIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageIdentifier} The decoded data structure.
 */
export const _decode_MessageIdentifier: $.ASN1Decoder<MessageIdentifier> = _decode_MTSIdentifier;

/**
 * @summary Encodes a(n) MessageIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_MessageIdentifier: $.ASN1Encoder<MessageIdentifier> = _encode_MTSIdentifier;


/* eslint-enable */
