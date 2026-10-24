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
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from '../MTSAbstractService/UniversalOrBMPString.ta.mjs';
/**
 * @summary ExtendedRegularExpression
 * @description
 *
 * Defined in ITU-T X.412 (1999) (§12).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedRegularExpression  ::=
 *   UniversalOrBMPString{ub-extended-regular-expression}
 * ```
 */
export type ExtendedRegularExpression = UniversalOrBMPString; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedRegularExpression
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtendedRegularExpression} The decoded data structure.
 */
export const _decode_ExtendedRegularExpression: $.ASN1Decoder<ExtendedRegularExpression> = _decode_UniversalOrBMPString;

/**
 * @summary Encodes a(n) ExtendedRegularExpression into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedRegularExpression, encoded as an ASN.1 Element.
 */
export const _encode_ExtendedRegularExpression: $.ASN1Encoder<ExtendedRegularExpression> = _encode_UniversalOrBMPString;


/* eslint-enable */
