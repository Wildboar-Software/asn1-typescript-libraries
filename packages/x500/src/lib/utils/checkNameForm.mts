import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type {
    RelativeDistinguishedName as RDN,
} from "../modules/InformationFramework/RelativeDistinguishedName.ta.mjs";

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
    // I don't know why I ever supported missing mandatories.
    if (!mandatories) {
        return false;
    }
    if (rdn.length === 0) {
        return false;
    }
    if (rdn.length < mandatories.length) {
        return false;
    }
    if (rdn.length === 1 && mandatories?.length === 1 && optionals?.length === 0) {
        // Short-circuit case: no allocation needed.
        return rdn[0].type_.isEqualTo(mandatories[0]);
    }
    const unsatisfiedMandatories: Set<string> = new Set(mandatories.map((m) => m.toString()));
    const optionalsSet: Set<string> = new Set(optionals?.map((o) => o.toString()));
    for (const atav of rdn) {
        const key = atav.type_.toString();
        if (unsatisfiedMandatories.delete(key)) {
            continue;
        }
        // The attribute type was not mandatory. Check if it is optional.
        if (!optionalsSet.delete(key)) {
            return false; // The attribute type was neither mandatory nor optional.
        }
    }
    if (unsatisfiedMandatories.size > 0) {
        return false;
    }
    return true;
}

export default checkNameForm;
