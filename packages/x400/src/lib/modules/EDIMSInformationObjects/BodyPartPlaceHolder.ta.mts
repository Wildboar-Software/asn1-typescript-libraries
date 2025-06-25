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
    EDIM_ExtendedBodyPart,
    _decode_EDIM_ExtendedBodyPart,
    _encode_EDIM_ExtendedBodyPart,
} from '../EDIMSInformationObjects/EDIM-ExtendedBodyPart.ta.mjs';
/**
 * @summary BodyPartPlaceHolder
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPartPlaceHolder  ::=
 *   EDIM-ExtendedBodyPart
 * ```
 */
export type BodyPartPlaceHolder = EDIM_ExtendedBodyPart; // DefinedType

let _cached_decoder_for_BodyPartPlaceHolder: $.ASN1Decoder<BodyPartPlaceHolder> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BodyPartPlaceHolder
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BodyPartPlaceHolder} The decoded data structure.
 */
export function _decode_BodyPartPlaceHolder(el: _Element): BodyPartPlaceHolder {
    if (!_cached_decoder_for_BodyPartPlaceHolder) {
        _cached_decoder_for_BodyPartPlaceHolder = _decode_EDIM_ExtendedBodyPart;
    }
    return _cached_decoder_for_BodyPartPlaceHolder(el);
}

let _cached_encoder_for_BodyPartPlaceHolder: $.ASN1Encoder<BodyPartPlaceHolder> | null = null;

/**
 * @summary Encodes a(n) BodyPartPlaceHolder into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyPartPlaceHolder, encoded as an ASN.1 Element.
 */
export function _encode_BodyPartPlaceHolder(
    value: BodyPartPlaceHolder,
    elGetter: $.ASN1Encoder<BodyPartPlaceHolder>
): _Element {
    if (!_cached_encoder_for_BodyPartPlaceHolder) {
        _cached_encoder_for_BodyPartPlaceHolder = _encode_EDIM_ExtendedBodyPart;
    }
    return _cached_encoder_for_BodyPartPlaceHolder(value, elGetter);
}


/* eslint-enable */
