import { ASN1Element } from "@wildboar/asn1";
import SubstringSelection from "./SubstringSelection.mjs";

export
type SubstringsFunction = (
    assertion: ASN1Element,
    value: ASN1Element,
    selection?: SubstringSelection,
) => boolean;

export default SubstringsFunction;
