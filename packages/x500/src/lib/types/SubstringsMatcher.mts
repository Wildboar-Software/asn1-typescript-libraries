import type { ASN1Element } from "@wildboar/asn1";
import SubstringSelection from "./SubstringSelection.mjs";

/**
 * A function that implements substring matching of X.500 directory values.
 *
 * When `selection` is omitted, `assertion` is a `SubstringAssertion` or
 * `OctetSubstringAssertion` SEQUENCE and pieces are partitioned in order
 * (Rec. ITU-T X.520 clause 8.1.3). When `selection` is provided,
 * `assertion` is a single component of that kind.
 */
export
type SubstringsMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    selection?: SubstringSelection,
) => boolean;

export default SubstringsMatcher;
