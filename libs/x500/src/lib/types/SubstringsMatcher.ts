import type { ASN1Element } from "asn1-ts";
import SubstringSelection from "./SubstringSelection";

export
type SubstringsFunction = (
    assertion: ASN1Element,
    value: ASN1Element,
    selection?: SubstringSelection,
) => boolean;

export default SubstringsFunction;
