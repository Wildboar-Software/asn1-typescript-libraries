/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from '@wildboar/x500/src/lib/modules/InformationFramework/DistinguishedName.ta.mjs';
/**
 * @summary ObjectIdOrDN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectIdOrDN  ::=  CHOICE {
 *   distinguishedName  DistinguishedName,
 *   oid                OBJECT IDENTIFIER
 * }
 * ```
 */
export type ObjectIdOrDN =
    | { distinguishedName: DistinguishedName } /* CHOICE_ALT_ROOT */
    | { oid: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ObjectIdOrDN: $.ASN1Decoder<ObjectIdOrDN> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObjectIdOrDN
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectIdOrDN} The decoded data structure.
 */
export function _decode_ObjectIdOrDN(el: _Element): ObjectIdOrDN {
    if (!_cached_decoder_for_ObjectIdOrDN) {
        _cached_decoder_for_ObjectIdOrDN = $._decode_inextensible_choice<ObjectIdOrDN>(
            {
                'UNIVERSAL 16': [
                    'distinguishedName',
                    _decode_DistinguishedName,
                ],
                'UNIVERSAL 6': ['oid', $._decodeObjectIdentifier],
            }
        );
    }
    return _cached_decoder_for_ObjectIdOrDN(el);
}

let _cached_encoder_for_ObjectIdOrDN: $.ASN1Encoder<ObjectIdOrDN> | null = null;

/**
 * @summary Encodes a(n) ObjectIdOrDN into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectIdOrDN, encoded as an ASN.1 Element.
 */
export function _encode_ObjectIdOrDN(
    value: ObjectIdOrDN,
    elGetter: $.ASN1Encoder<ObjectIdOrDN>
): _Element {
    if (!_cached_encoder_for_ObjectIdOrDN) {
        _cached_encoder_for_ObjectIdOrDN = $._encode_choice<ObjectIdOrDN>(
            {
                distinguishedName: _encode_DistinguishedName,
                oid: $._encodeObjectIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ObjectIdOrDN(value, elGetter);
}


/* eslint-enable */
