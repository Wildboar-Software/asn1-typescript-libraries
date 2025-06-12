/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/DistinguishedName.ta.js';
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/DistinguishedName.ta.js';

/* START_OF_SYMBOL_DEFINITION TestSessionId_globalRef */
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
/* END_OF_SYMBOL_DEFINITION TestSessionId_globalRef */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestSessionId_globalRef */
let _cached_decoder_for_TestSessionId_globalRef: $.ASN1Decoder<TestSessionId_globalRef> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestSessionId_globalRef */

/* START_OF_SYMBOL_DEFINITION _decode_TestSessionId_globalRef */
/**
 * @summary Decodes an ASN.1 element into a(n) TestSessionId_globalRef
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestSessionId_globalRef} The decoded data structure.
 */
export function _decode_TestSessionId_globalRef(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_TestSessionId_globalRef */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestSessionId_globalRef */
let _cached_encoder_for_TestSessionId_globalRef: $.ASN1Encoder<TestSessionId_globalRef> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestSessionId_globalRef */

/* START_OF_SYMBOL_DEFINITION _encode_TestSessionId_globalRef */
/**
 * @summary Encodes a(n) TestSessionId_globalRef into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestSessionId_globalRef, encoded as an ASN.1 Element.
 */
export function _encode_TestSessionId_globalRef(
    value: TestSessionId_globalRef,
    elGetter: $.ASN1Encoder<TestSessionId_globalRef>
) {
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

/* END_OF_SYMBOL_DEFINITION _encode_TestSessionId_globalRef */

/* eslint-enable */
