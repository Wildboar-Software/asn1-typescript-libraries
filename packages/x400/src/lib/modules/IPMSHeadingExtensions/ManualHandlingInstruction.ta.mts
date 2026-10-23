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
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from '../MTSAbstractService/UniversalOrBMPString.ta.mjs';
/**
 * @summary ManualHandlingInstruction
 * @description
 *
 * Defined in ITU-T X.420 (1999) (§18).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ManualHandlingInstruction  ::=
 *   UniversalOrBMPString{ub-manual-handling-instruction-length}
 * ```
 */
export type ManualHandlingInstruction = UniversalOrBMPString; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ManualHandlingInstruction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ManualHandlingInstruction} The decoded data structure.
 */
export const _decode_ManualHandlingInstruction: $.ASN1Decoder<ManualHandlingInstruction> = _decode_UniversalOrBMPString;

/**
 * @summary Encodes a(n) ManualHandlingInstruction into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManualHandlingInstruction, encoded as an ASN.1 Element.
 */
export const _encode_ManualHandlingInstruction: $.ASN1Encoder<ManualHandlingInstruction> = _encode_UniversalOrBMPString;


/* eslint-enable */
