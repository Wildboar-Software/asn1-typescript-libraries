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
} from '@wildboar/cmip';
/**
 * @summary TestSessionId_globalRef
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestSessionId-globalRef ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TestSessionId_globalRef =
    | { dnGlobRef: DistinguishedName } /* CHOICE_ALT_ROOT */
    | { oidGlobRef: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TestSessionId_globalRef: $.ASN1Decoder<TestSessionId_globalRef> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestSessionId_globalRef
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestSessionId_globalRef} The decoded data structure.
 */
export function _decode_TestSessionId_globalRef(el: _Element): TestSessionId_globalRef {
    if (!_cached_decoder_for_TestSessionId_globalRef) {
        _cached_decoder_for_TestSessionId_globalRef = $._decode_inextensible_choice<TestSessionId_globalRef>(
            {
                'UNIVERSAL 16': ['dnGlobRef', _decode_DistinguishedName],
                'UNIVERSAL 6': ['oidGlobRef', $._decodeObjectIdentifier],
            }
        );
    }
    return _cached_decoder_for_TestSessionId_globalRef(el);
}

let _cached_encoder_for_TestSessionId_globalRef: $.ASN1Encoder<TestSessionId_globalRef> | null = null;

/**
 * @summary Encodes a(n) TestSessionId_globalRef into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestSessionId_globalRef, encoded as an ASN.1 Element.
 */
export function _encode_TestSessionId_globalRef(
    value: TestSessionId_globalRef,
    elGetter: $.ASN1Encoder<TestSessionId_globalRef>
): _Element {
    if (!_cached_encoder_for_TestSessionId_globalRef) {
        _cached_encoder_for_TestSessionId_globalRef = $._encode_choice<TestSessionId_globalRef>(
            {
                dnGlobRef: _encode_DistinguishedName,
                oidGlobRef: $._encodeObjectIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_TestSessionId_globalRef(value, elGetter);
}


/* eslint-enable */
