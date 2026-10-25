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
 * @summary OriginatorsReference
 * @description
 *
 * Defined in ITU-T X.420 (1999) (§18).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorsReference  ::=  UniversalOrBMPString{ub-originators-reference-length}
 * ```
 */
export type OriginatorsReference = UniversalOrBMPString; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorsReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatorsReference} The decoded data structure.
 */
export const _decode_OriginatorsReference: $.ASN1Decoder<OriginatorsReference> = _decode_UniversalOrBMPString;

/**
 * @summary Encodes a(n) OriginatorsReference into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorsReference, encoded as an ASN.1 Element.
 */
export const _encode_OriginatorsReference: $.ASN1Encoder<OriginatorsReference> = _encode_UniversalOrBMPString;


/* eslint-enable */
