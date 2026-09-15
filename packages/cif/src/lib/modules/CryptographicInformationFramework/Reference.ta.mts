/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1OverflowError,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { cia_ub_reference } from "../CryptographicInformationFramework/cia-ub-reference.va.mjs";



/**
 * @summary Reference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Reference  ::=  CHOICE {
 *       uniqueByteRef INTEGER(0..cia-ub-reference),
 *       multiByteRef  [1] OCTET STRING(SIZE(4..20))
 * }
 * ```
 */
export
type Reference =
    { uniqueByteRef: INTEGER } /* CHOICE_ALT_ROOT */
    | { multiByteRef: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Reference: $.ASN1Decoder<Reference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Reference
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Reference (el: _Element): Reference {
    if (!_cached_decoder_for_Reference) { _cached_decoder_for_Reference = $._decode_inextensible_choice<Reference>({
    "UNIVERSAL 2": [ "uniqueByteRef", $._decodeInteger ],
    "CONTEXT 1": [ "multiByteRef", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    const value = _cached_decoder_for_Reference(el);
    if ("uniqueByteRef" in value) {
        const n = typeof value.uniqueByteRef === "bigint" ? value.uniqueByteRef : BigInt(value.uniqueByteRef);
        if (n < 0n || n > BigInt(cia_ub_reference)) {
            throw new ASN1OverflowError("Reference.uniqueByteRef violates INTEGER range");
        }
    } else if ("multiByteRef" in value) {
        const len = value.multiByteRef.length;
        if (len < 4 || len > 20) {
            throw new ASN1SizeError("Reference.multiByteRef violates SIZE constraint");
        }
    }
    return value;
}

let _cached_encoder_for_Reference: $.ASN1Encoder<Reference> | null = null;

/**
 * @summary Encodes a(n) Reference into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Reference, encoded as an ASN.1 Element.
 */
export
function _encode_Reference (value: Reference, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Reference) { _cached_encoder_for_Reference = $._encode_choice<Reference>({
    "uniqueByteRef": $._encodeInteger,
    "multiByteRef": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_Reference(value, elGetter);
}


/* eslint-enable */
