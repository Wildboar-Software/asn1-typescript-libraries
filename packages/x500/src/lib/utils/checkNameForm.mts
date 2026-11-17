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
 * @param {RelativeDistinguishedName | IterableIterator} rdn The Relative Distinguished Name (RDN) to be evaluated.
 *  An array of one AVA whose only mandatory is that type, with no optionals, returns before the sets are built.
 *  Any other array, and any iterator, is read once.
 * @param {OBJECT_IDENTIFIER[] | IterableIterator<OBJECT_IDENTIFIER> | undefined} mandatories Mandatory attribute types
 * @param {OBJECT_IDENTIFIER[] | IterableIterator<OBJECT_IDENTIFIER> | undefined} optionals Optional attribute types
 * @returns {Boolean} `true` if the `rdn` is compliant.
 * @function
 */
export
function checkNameForm (
    rdn: RDN | IterableIterator<RDN[number]>,
    mandatories?: OBJECT_IDENTIFIER[] | IterableIterator<OBJECT_IDENTIFIER>,
    optionals?: OBJECT_IDENTIFIER[] | IterableIterator<OBJECT_IDENTIFIER>,
): boolean {
    // I don't know why I ever supported missing mandatories.
    if (!mandatories) {
        return false;
    }
    // Length and random access exist only for arrays. Iterators share the
    // general check below, which counts members so duplicate OIDs still fail.
    let rdnIterator: IterableIterator<RDN[number]>;
    let mandatoryIterator: IterableIterator<OBJECT_IDENTIFIER>;
    if (Array.isArray(rdn) && Array.isArray(mandatories)) {
        if (rdn.length === 0) {
            return false;
        }
        if (rdn.length < mandatories.length) {
            return false;
        }
        if (
            rdn.length === 1
            && mandatories.length === 1
            && Array.isArray(optionals)
            && optionals.length === 0
        ) {
            // Short-circuit case: no allocation needed.
            return rdn[0].type_.isEqualTo(mandatories[0]);
        }
        rdnIterator = rdn.values();
        mandatoryIterator = mandatories.values();
    } else {
        rdnIterator = Array.isArray(rdn) ? rdn.values() : rdn;
        mandatoryIterator = Array.isArray(mandatories) ? mandatories.values() : mandatories;
    }
    const unsatisfiedMandatories: Set<string> = new Set();
    let mandatoryCount: number = 0;
    for (const mandatory of mandatoryIterator) {
        unsatisfiedMandatories.add(mandatory.toString());
        mandatoryCount++;
    }
    const optionalsSet: Set<string> = new Set();
    if (optionals) {
        const optionalIterator = Array.isArray(optionals) ? optionals.values() : optionals;
        for (const optional of optionalIterator) {
            optionalsSet.add(optional.toString());
        }
    }
    let rdnCount: number = 0;
    for (const atav of rdnIterator) {
        rdnCount++;
        const key = atav.type_.toString();
        if (unsatisfiedMandatories.delete(key)) {
            continue;
        }
        // The attribute type was not mandatory. Check if it is optional.
        if (!optionalsSet.delete(key)) {
            return false; // The attribute type was neither mandatory nor optional.
        }
    }
    if (rdnCount === 0 || rdnCount < mandatoryCount) {
        return false;
    }
    if (unsatisfiedMandatories.size > 0) {
        return false;
    }
    return true;
}

export default checkNameForm;
