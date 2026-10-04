import { ASN1Error, type ASN1Element } from "@wildboar/asn1";
import {
    validateRDNSequenceBER,
    validateRDNSequenceElement,
} from "../rdnseq/validateBER.mjs";
import type { NameBER } from "../brands.mjs";

/**
 * @summary Validate the structure of a decoded `Name` element.
 * @description
 *
 * `Name` is an untagged `CHOICE` with only the `rdnSequence` alternative, so
 * this is {@link validateRDNSequenceElement}.
 *
 * Attribute values are not verified.
 *
 * @param el The element.
 * @throws {ASN1Error} If `el` is invalid.
 * @function
 */
export
function validateNameElement (el: ASN1Element): void {
    validateRDNSequenceElement(el);
}

/**
 * @summary Validate the Basic Encoding Rules (BER) encoding of a `Name`.
 * @description
 *
 * Checks that `bytes` is exactly one BER element that is a valid
 * `RDNSequence`, as described for {@link validateRDNSequenceBER}. This accepts
 * any valid BER, and does not verify attribute values.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Name ::= CHOICE { -- only one possibility for now -- rdnSequence RDNSequence }
 * ```
 *
 * @param bytes The BER encoding.
 * @throws {ASN1Error} If `bytes` is invalid.
 * @function
 */
export
function validateNameBER (bytes: Uint8Array): asserts bytes is NameBER {
    validateRDNSequenceBER(bytes);
}

/**
 * @summary Check whether bytes are a valid Basic Encoding Rules (BER)
 * encoding of a `Name`.
 * @description
 *
 * Returns whether {@link validateNameBER} accepts `bytes`.
 *
 * @param bytes The BER encoding.
 * @returns Whether `bytes` is valid.
 * @function
 */
export
function isNameBER (bytes: Uint8Array): bytes is NameBER {
    try {
        validateNameBER(bytes);
        return true;
    } catch (e) {
        if (e instanceof ASN1Error) {
            return false;
        }
        throw e;
    }
}

export default validateNameBER;
