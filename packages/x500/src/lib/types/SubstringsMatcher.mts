import type { ASN1Element } from "@wildboar/asn1";
import SubstringSelection from "./SubstringSelection.mjs";

/**
 * A function for implement substring matching of X.500 directory values.
 */
export
type SubstringsMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    selection?: SubstringSelection,
) => boolean;

export default SubstringsMatcher;
