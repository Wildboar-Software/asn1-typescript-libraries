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
    EDIM_ExtendedBodyPart,
    _decode_EDIM_ExtendedBodyPart,
    _encode_EDIM_ExtendedBodyPart,
} from '../EDIMSInformationObjects/EDIM-ExtendedBodyPart.ta.mjs';
/**
 * @summary BodyPartPlaceHolder
 * @description
 *
 * Defined in ITU-T X.435 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPartPlaceHolder  ::=
 *   EDIM-ExtendedBodyPart
 * ```
 */
export type BodyPartPlaceHolder = EDIM_ExtendedBodyPart; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) BodyPartPlaceHolder
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BodyPartPlaceHolder} The decoded data structure.
 */
export const _decode_BodyPartPlaceHolder: $.ASN1Decoder<BodyPartPlaceHolder> = _decode_EDIM_ExtendedBodyPart;

/**
 * @summary Encodes a(n) BodyPartPlaceHolder into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyPartPlaceHolder, encoded as an ASN.1 Element.
 */
export const _encode_BodyPartPlaceHolder: $.ASN1Encoder<BodyPartPlaceHolder> = _encode_EDIM_ExtendedBodyPart;


/* eslint-enable */
