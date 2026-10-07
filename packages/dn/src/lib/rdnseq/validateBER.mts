import {
    ASN1Construction,
    ASN1ConstructionError,
    ASN1Error,
    ASN1TagClass,
    ASN1UniversalType,
    BERElement,
    type ASN1Element,
} from "@wildboar/asn1";
import { validateRelativeDistinguishedNameElement } from "../rdn/validateBER.mjs";
import decodeBERElement from "../decodeBERElement.mjs";
import type { RDNSequenceBER } from "../brands.mjs";

/**
 * @summary Validate the structure of a decoded `RDNSequence` element.
 * @description
 *
 * Checks that `el` is a `SEQUENCE` whose components are each
 * BER-encoded and validated with
 * {@link validateRelativeDistinguishedNameElement}. An empty
 * `SEQUENCE`, which is the root DN, is valid.
 *
 * Attribute values are not verified: they are not decoded or checked
 * against the syntaxes of their attribute types.
 *
 * @param el The element.
 * @throws {ASN1Error} If `el` is invalid.
 * @function
 */
export
function validateRDNSequenceElement (el: ASN1Element): void {
    if (
        el.tagClass !== ASN1TagClass.universal
        || el.construction !== ASN1Construction.constructed
        || el.tagNumber !== ASN1UniversalType.sequence
    ) {
        throw new ASN1ConstructionError("rdn sequence is not a sequence", el);
    }
    const content: Uint8Array = el.value;
    const rdn = new BERElement();
    for (let i = 0; i < content.length;) {
        i += rdn.fromBytes(content.subarray(i), true);
        validateRelativeDistinguishedNameElement(rdn);
    }
}

/**
 * @summary Validate the Basic Encoding Rules (BER) encoding of an
 * `RDNSequence`.
 * @description
 *
 * Checks that `bytes` is exactly one BER element, validated with
 * {@link validateRDNSequenceElement}. This accepts any valid BER, so
 * it does not check that `bytes` is also valid DER. Valid encodings
 * of `RDNSequence` are also valid encodings of `DistinguishedName`
 * and `Name`.
 *
 * Attribute values are not verified: they are not decoded or checked
 * against the syntaxes of their attribute types.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RDNSequence ::= SEQUENCE OF RelativeDistinguishedName
 * ```
 *
 * @param bytes The BER encoding.
 * @throws {ASN1Error} If `bytes` is invalid.
 * @function
 */
export
function validateRDNSequenceBER (
    bytes: Uint8Array,
): asserts bytes is RDNSequenceBER {
    validateRDNSequenceElement(decodeBERElement(bytes, "rdn sequence"));
}

/**
 * @summary Check whether bytes are a valid Basic Encoding Rules (BER)
 * encoding of an `RDNSequence`.
 * @description
 *
 * Returns whether {@link validateRDNSequenceBER} accepts `bytes`.
 * Like that function, this does not verify attribute values.
 *
 * @param bytes The BER encoding.
 * @returns Whether `bytes` is valid.
 * @function
 */
export
function isRDNSequenceBER (
    bytes: Uint8Array,
): bytes is RDNSequenceBER {
    try {
        validateRDNSequenceBER(bytes);
        return true;
    } catch (e) {
        if (e instanceof ASN1Error) {
            return false;
        }
        throw e;
    }
}

export default validateRDNSequenceBER;
