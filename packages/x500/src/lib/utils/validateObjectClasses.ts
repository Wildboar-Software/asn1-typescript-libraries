import { ObjectIdentifier, OBJECT_IDENTIFIER } from "asn1-ts";
import {
    ObjectClassKind,
    ObjectClassKind_structural,
    ObjectClassKind_abstract,
    ObjectClassKind_auxiliary,
} from "@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta";
import { top } from "@wildboar/x500/src/lib/modules/InformationFramework/top.oa";

function getAncestorObjectClasses (
    oc: OBJECT_IDENTIFIER,
    getSuperclasses: (objectClass: OBJECT_IDENTIFIER) => OBJECT_IDENTIFIER[],
): OBJECT_IDENTIFIER[] {
    return getSuperclasses(oc).flatMap((oid) => getAncestorObjectClasses(oid, getSuperclasses));
}

export
function validateObjectClasses (
    objectClasses: OBJECT_IDENTIFIER[],
    getKind: (objectClass: OBJECT_IDENTIFIER) => ObjectClassKind | undefined | null,
    getSuperclasses: (objectClass: OBJECT_IDENTIFIER) => OBJECT_IDENTIFIER[],
): boolean {
    const structural: Set<string> = new Set();
    const abstract_: Set<string> = new Set([ top["&id"].toString() ]);
    const auxiliary: Set<string> = new Set();
    const parents: Set<string> = new Set();
    for (const objectClass of objectClasses) {
        const kind = getKind(objectClass);
        const OC: string = objectClass.toString();
        if ((kind === undefined) || (kind === null)) {
            // We treat an unrecognized object class as invalid ALWAYS.
            return false;
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
        case (ObjectClassKind_auxiliary):
            auxiliary.add(OC);
            break;
        }
    }
    // The structural object class of the entry is the structural object class that is not the parent of any other.
    const soc = Array.from(structural).find((oc) => !parents.has(oc));
    if (!soc) {
        return false;
    }
    const chain = getAncestorObjectClasses(ObjectIdentifier.fromString(soc), getSuperclasses);
    const chainIndex: Set<string> = new Set(chain.map((oc) => oc.toString()));
    chainIndex.add(soc);
    for (const structuralMember of chain) {
        const MEMBER: string = structuralMember.toString();
        if (!structural.has(MEMBER) && !abstract_.has(MEMBER)) {
            return false;
        }
    }
    for (const s of structural) {
        if (!chainIndex.has(s)) {
            return false; // There is an extraneous structural class outside of the chain.
        }
    }
    for (const a of auxiliary) {
        const achain = getAncestorObjectClasses(ObjectIdentifier.fromString(a), getSuperclasses);
        for (const achainMember of achain) {
            if (
                !auxiliary.has(achainMember.toString())
                && !abstract_.has(achainMember.toString())
            ) {
                return false; // We have an auxiliary OC that is missing an ancestor.
            }
        }
    }
    for (const a of abstract_) {
        if (!parents.has(a)) {
            return false; // We have an abstract class that is not the parent of another class present.
        }
    }
    return true;
}

export default validateObjectClasses;
