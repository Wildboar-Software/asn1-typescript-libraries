/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../CryptographicInformationFramework/Identifier.ta.mjs";
import { AuthReference, _decode_AuthReference, _encode_AuthReference } from "../CryptographicInformationFramework/AuthReference.ta.mjs";
import { cia_ub_securityConditions } from "../CryptographicInformationFramework/cia-ub-securityConditions.va.mjs";


// TODO: CHECK_RECURSIVE_DEFINITION
/**
 * @summary SecurityCondition
 * @description
 * 
 * Boolean expression over authentication: always, a named auth object, an
 * ISO/IEC 7816 security-environment reference, negation, or
 * conjunction/disjunction of 2..`cia-ub-securityConditions` sub-conditions.
 * ISO/IEC 7816-15:2016 §8.2.8.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityCondition  ::=  CHOICE {
 *     always          NULL,
 *     authId          Identifier,
 *     authReference   AuthReference,
 *     not             [0] SecurityCondition,
 *     and             [1] SEQUENCE SIZE (2..cia-ub-securityConditions) OF SecurityCondition,
 *     or              [2] SEQUENCE SIZE (2..cia-ub-securityConditions) OF SecurityCondition,
 *     ... -- For future extensions
 * }
 * ```
 */
export
type SecurityCondition =
    { always: NULL } /* CHOICE_ALT_ROOT */
    | { authId: Identifier } /* CHOICE_ALT_ROOT */
    | { authReference: AuthReference } /* CHOICE_ALT_ROOT */
    | { not: SecurityCondition } /* CHOICE_ALT_ROOT */
    | { and: SecurityCondition[] } /* CHOICE_ALT_ROOT */
    | { or: SecurityCondition[] } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_SecurityCondition: $.ASN1Decoder<SecurityCondition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityCondition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SecurityCondition (el: _Element): SecurityCondition {
    if (!_cached_decoder_for_SecurityCondition) { _cached_decoder_for_SecurityCondition = $._decode_extensible_choice<SecurityCondition>({
    "UNIVERSAL 5": [ "always", $._decodeNull ],
    "UNIVERSAL 4": [ "authId", _decode_Identifier ],
    "UNIVERSAL 16": [ "authReference", _decode_AuthReference ],
    "CONTEXT 0": [ "not", $._decode_explicit<SecurityCondition>(() => _decode_SecurityCondition) ],
    "CONTEXT 1": [ "and", $._decode_implicit<SecurityCondition[]>(() => $._decodeSequenceOf<SecurityCondition>(() => _decode_SecurityCondition)) ],
    "CONTEXT 2": [ "or", $._decode_implicit<SecurityCondition[]>(() => $._decodeSequenceOf<SecurityCondition>(() => _decode_SecurityCondition)) ]
}); }
    const value = _cached_decoder_for_SecurityCondition(el);
    if ("and" in value) {
        if (value.and.length < 2 || value.and.length > cia_ub_securityConditions) {
            throw new ASN1SizeError("SecurityCondition.and violates SIZE constraint");
        }
    } else if ("or" in value) {
        if (value.or.length < 2 || value.or.length > cia_ub_securityConditions) {
            throw new ASN1SizeError("SecurityCondition.or violates SIZE constraint");
        }
    }
    return value;
}

let _cached_encoder_for_SecurityCondition: $.ASN1Encoder<SecurityCondition> | null = null;

/**
 * @summary Encodes a(n) SecurityCondition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityCondition, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityCondition (value: SecurityCondition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SecurityCondition) { _cached_encoder_for_SecurityCondition = $._encode_choice<SecurityCondition>({
    "always": $._encodeNull,
    "authId": _encode_Identifier,
    "authReference": _encode_AuthReference,
    "not": $._encode_explicit(_TagClass.context, 0, () => _encode_SecurityCondition, $.BER),
    "and": $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<SecurityCondition>(() => _encode_SecurityCondition, $.BER), $.BER),
    "or": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<SecurityCondition>(() => _encode_SecurityCondition, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_SecurityCondition(value, elGetter);
}


/* eslint-enable */
