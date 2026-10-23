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
    IPN,
    _decode_IPN,
    _encode_IPN,
} from '../IPMSInformationObjects/IPN.ta.mjs';
/**
 * @summary ON
 * @description
 *
 * Defined in ITU-T X.420 (1999) (§7).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ON  ::=
 *   IPN
 *     (WITH COMPONENTS {
 *        ...,
 *        choice  (WITH COMPONENTS {
 *                   other-notification-type-fields  PRESENT
 *                 })
 *      })
 * ```
 */
export type ON = IPN; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ON
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ON} The decoded data structure.
 */
export const _decode_ON: $.ASN1Decoder<ON> = _decode_IPN;

/**
 * @summary Encodes a(n) ON into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ON, encoded as an ASN.1 Element.
 */
export const _encode_ON: $.ASN1Encoder<ON> = _encode_IPN;


/* eslint-enable */
