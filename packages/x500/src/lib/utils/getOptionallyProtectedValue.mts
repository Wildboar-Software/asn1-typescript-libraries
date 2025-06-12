import type { OPTIONALLY_PROTECTED } from "@wildboar/x500/src/lib/modules/EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { ASN1Element } from "asn1-ts";

export
function getOptionallyProtectedValue <T> (op: OPTIONALLY_PROTECTED<T>): T {
    return (("signed" in op)
        ? op.signed.toBeSigned
        : op.unsigned);
}

export default getOptionallyProtectedValue;
