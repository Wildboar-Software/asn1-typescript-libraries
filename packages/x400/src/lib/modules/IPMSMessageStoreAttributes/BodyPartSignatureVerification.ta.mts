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
    BodyPartSignatureVerification_Item,
    _decode_BodyPartSignatureVerification_Item,
    _encode_BodyPartSignatureVerification_Item,
} from '../IPMSMessageStoreAttributes/BodyPartSignatureVerification-Item.ta.mjs';
/**
 * @summary BodyPartSignatureVerification
 * @description
 *
 * `BodyPartSignatureVerification`. The-Body Part Signature Verification Status attribute
 * reports the outcome of verification by the IPMS-MS that body parts of a delivered IPM
 * have not been modified in the MTS, if the IPMS-MS has the capability to perform such
 * verification and a signature of the body part was present in the IPM. It is generated
 * by the IPMS-MS. See ITU-T X.420 (1999), §19.6.1.5. SET OF: order is insignificant;
 * duplicates are typically meaningless.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPartSignatureVerification  ::=
 *   SET OF
 *     SET {body-part-sequence-number  [0]  BodyPartNumber,
 *          body-part-signature        [1]  SignatureStatus}
 * ```
 */
export type BodyPartSignatureVerification = BodyPartSignatureVerification_Item[]; // SetOfType

let _cached_decoder_for_BodyPartSignatureVerification: $.ASN1Decoder<BodyPartSignatureVerification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BodyPartSignatureVerification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BodyPartSignatureVerification} The decoded data structure.
 */
export function _decode_BodyPartSignatureVerification(el: _Element): BodyPartSignatureVerification {
    if (!_cached_decoder_for_BodyPartSignatureVerification) {
        _cached_decoder_for_BodyPartSignatureVerification = $._decodeSetOf<BodyPartSignatureVerification_Item>(
            () => _decode_BodyPartSignatureVerification_Item
        );
    }
    return _cached_decoder_for_BodyPartSignatureVerification(el);
}

let _cached_encoder_for_BodyPartSignatureVerification: $.ASN1Encoder<BodyPartSignatureVerification> | null = null;

/**
 * @summary Encodes a(n) BodyPartSignatureVerification into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyPartSignatureVerification, encoded as an ASN.1 Element.
 */
export function _encode_BodyPartSignatureVerification(
    value: BodyPartSignatureVerification,
    elGetter: $.ASN1Encoder<BodyPartSignatureVerification>
): _Element {
    if (!_cached_encoder_for_BodyPartSignatureVerification) {
        _cached_encoder_for_BodyPartSignatureVerification = $._encodeSetOf<BodyPartSignatureVerification_Item>(
            () => _encode_BodyPartSignatureVerification_Item,
            $.BER
        );
    }
    return _cached_encoder_for_BodyPartSignatureVerification(value, elGetter);
}


/* eslint-enable */
