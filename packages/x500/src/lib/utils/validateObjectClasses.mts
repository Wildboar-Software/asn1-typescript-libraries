import { ObjectIdentifier, OBJECT_IDENTIFIER } from "asn1-ts";
import {
    ObjectClassKind,
    ObjectClassKind_structural,
    ObjectClassKind_abstract,
    ObjectClassKind_auxiliary,
} from "@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "@wildboar/x500/src/lib/modules/InformationFramework/top.oa.mjs";

function getAncestorObjectClasses (
    oc: OBJECT_IDENTIFIER,
    getSuperclasses: (objectClass: OBJECT_IDENTIFIER) => OBJECT_IDENTIFIER[],
): OBJECT_IDENTIFIER[] {
    return getSuperclasses(oc).flatMap((oid) => getAncestorObjectClasses(oid, getSuperclasses));
}

/**
 * @summary Validate a set of object classes
 * @description
 * 
 * There are restrictions on which object classes may be used together. This
 * function validates a set of object classes for compliance to these
 * restrictions, which are specified in ITU-T Recommendation X.501 (2019),
 * Sections 8.3 and 13.3.1.
 * 
 * Quoting section 13.3.1:
 * 
 * > There are restrictions on subclassing, namely:
 * > 
 * > - only abstract object classes shall be superclasses of other abstract object classes.
 * > - a structural object class shall not be derived from auxiliary object classes.
 * > - an auxiliary object class shall not be derived from structural object classes.
 * >
 * > There is one special object class, of which every structural object class
 * > is a subclass. This object class is called top. top is an abstract object
 * > class.
 * 
 * @param {OBJECT_IDENTIFIER[]} objectClasses The object classes to be validated
 * @param {Function} getKind A function that returns the object class' kind given its OID
 * @param {Function} getSuperclasses A function that returns the object class' superclasses
 *   given its OID
 * @returns {Boolean} `true` if the object classes are valid
 * @function
 */
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
