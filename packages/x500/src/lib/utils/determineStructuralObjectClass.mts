import { ObjectIdentifier, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { top } from "@wildboar/x500/src/lib/modules/InformationFramework/top.oa.mjs";
import {
    ObjectClassKind,
    ObjectClassKind_structural,
    ObjectClassKind_abstract,
} from "@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta.mjs";

/**
 * @summary Determine the structural object class among a set of object classes
 * @description
 * 
 * NOTE: There may only be one structural object class chain in an entry.
 *
 * @param {OBJECT_IDENTIFIER[]} objectClasses The object classes the entry has
 * @param {Function} getKind A function that can retrieve the object class kind by its ID
 * @param {Function} getSuperclasses A function that can retrieve an object class'
 *  superclasses by its ID
 * @returns {OBJECT_IDENTIFIER} 
 */
export
function determineStructuralObjectClass (
    objectClasses: OBJECT_IDENTIFIER[],
    getKind: (objectClass: OBJECT_IDENTIFIER) => ObjectClassKind | undefined | null,
    getSuperclasses: (objectClass: OBJECT_IDENTIFIER) => OBJECT_IDENTIFIER[],
): OBJECT_IDENTIFIER {
    const structural: Set<string> = new Set();
    const abstract_: Set<string> = new Set([ top["&id"].toString() ]);
    const parents: Set<string> = new Set();
    for (const objectClass of objectClasses) {
        const kind = getKind(objectClass);
        const OC: string = objectClass.toString();
        if ((kind === undefined) || (kind === null)) {
            // We treat an unrecognized object class as invalid ALWAYS.
            return top["&id"];
        }
        const superclasses = getSuperclasses(objectClass);
        switch (kind) {
        case (ObjectClassKind_structural):
            structural.add(OC);
            superclasses.forEach((sc) => parents.add(sc.toString()));
            break;
        case (ObjectClassKind_abstract):
            abstract_.add(OC);
            superclasses.forEach((sc) => parents.add(sc.toString()));
            break;
        }
    }
    // The structural object class of the entry is the structural object class that is not the parent of any other.
    const soc = Array.from(structural).find((oc) => !parents.has(oc));
    return soc
        ? ObjectIdentifier.fromString(soc)
        : top["&id"];
}

export default determineStructuralObjectClass;
