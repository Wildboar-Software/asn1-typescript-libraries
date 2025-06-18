import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type {
    RelativeDistinguishedName as RDN,
} from "@wildboar/x500/src/lib/modules/InformationFramework/RelativeDistinguishedName.ta.mjs";

/**
 * @summary Evaluate the compliance of an RDN to a name form
 * @description
 * 
 * Return `true` if the provided relative distinguished name (RDN) does not
 * contain all of the `mandatories` attribute types, and contains nothing
 * outside of the union of `mandatories` and `optionals`.
 * 
 * @param {RelativeDistinguishedName} rdn The Relative Distinguished Name (RDN) to be evaluated
 * @param {OBJECT_IDENTIFIER[] | undefined} mandatories Mandatory attribute types
 * @param {OBJECT_IDENTIFIER[] | undefined} optionals Optional attribute types
 * @returns {Boolean} `true` if the `rdn` is compliant.
 * @function
 */
export
function checkNameForm (
    rdn: RDN,
    mandatories?: OBJECT_IDENTIFIER[],
    optionals?: OBJECT_IDENTIFIER[],
): boolean {
    const unsatisfiedMandatories: Set<string> = new Set(mandatories?.map((m) => m.toString()));
    for (const atav of rdn) {
        unsatisfiedMandatories.delete(atav.type_.toString());
    }
    if (unsatisfiedMandatories.size > 0) {
        return false;
    }
    const permittedTypes: Set<string> = new Set([
        ...mandatories?.map((m) => m.toString()) ?? [],
        ...optionals?.map((o) => o.toString()) ?? [],
    ]);
    for (const atav of rdn) {
        if (!permittedTypes.has(atav.type_.toString())) {
            return false;
        }
    }
    return true;
}

export default checkNameForm;
