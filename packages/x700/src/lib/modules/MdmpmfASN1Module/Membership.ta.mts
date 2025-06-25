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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/**
 * @summary Membership
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Membership  ::=  SET OF ObjectInstance
 * ```
 */
export type Membership = ObjectInstance[]; // SetOfType

let _cached_decoder_for_Membership: $.ASN1Decoder<Membership> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Membership
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Membership} The decoded data structure.
 */
export function _decode_Membership(el: _Element): Membership {
    if (!_cached_decoder_for_Membership) {
        _cached_decoder_for_Membership = $._decodeSetOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_Membership(el);
}

let _cached_encoder_for_Membership: $.ASN1Encoder<Membership> | null = null;

/**
 * @summary Encodes a(n) Membership into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Membership, encoded as an ASN.1 Element.
 */
export function _encode_Membership(
    value: Membership,
    elGetter: $.ASN1Encoder<Membership>
): _Element {
    if (!_cached_encoder_for_Membership) {
        _cached_encoder_for_Membership = $._encodeSetOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_Membership(value, elGetter);
}


/* eslint-enable */
