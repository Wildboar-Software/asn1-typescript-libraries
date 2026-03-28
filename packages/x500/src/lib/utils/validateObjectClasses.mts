import { ObjectIdentifier, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    ObjectClassKind,
    ObjectClassKind_structural,
    ObjectClassKind_abstract,
    ObjectClassKind_auxiliary,
} from "../modules/InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../modules/InformationFramework/top.oa.mjs";

function getAncestorObjectClasses (
    oc: OBJECT_IDENTIFIER,
    getSuperclasses: (objectClass: OBJECT_IDENTIFIER) => OBJECT_IDENTIFIER[],
    encountered: Set<string>,
): OBJECT_IDENTIFIER[] {
    const key = oc.toString();
    if (encountered.has(key)) {
        return []; // To prevent infinite recursion.
    }
    encountered.add(key);
    return getSuperclasses(oc).flatMap((oid) => {
        const sub = getAncestorObjectClasses(oid, getSuperclasses, encountered);
        sub.push(oid);
        return sub;
    });
}

function getSingleObjectClass(objectClasses: OBJECT_IDENTIFIER[]): OBJECT_IDENTIFIER | null {
    // Moved to caller to avoid a function call.
    // if (objectClasses.length === 1) {
    //     return objectClasses[0];
    // }
    if (objectClasses.length === 2) {
        if (objectClasses[0].isEqualTo(objectClasses[1])) {
            return null;
        }
        const topIdx = objectClasses.findIndex((oc) => oc.isEqualTo(top["&id"]));
        if (topIdx === -1) {
            return null;
        }
        return objectClasses[top ? 0 : 1];
    }
    return null;
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
 * I don't think an implementation of this can be done without allocation and
 * without introducing O(n^2) time complexity, since each object class must be
 * compared against other object classes in the set. You need at least one `Set`.
 *
 * @param {OBJECT_IDENTIFIER[]} objectClasses The object classes to be validated
 * @param {Function} getKind A function that returns the object class' kind given its OID
 * @param {Function} getSuperclasses A function that returns the object class' superclasses
 *   given its OID
 * @returns {ObjectIdentifier} The structural object class if the object classes
 *  are valid, or `null` otherwise.
 * @function
 */
export
function validateObjectClasses (
    objectClasses: OBJECT_IDENTIFIER[],
    getKind: (objectClass: OBJECT_IDENTIFIER) => ObjectClassKind | undefined | null,
    getSuperclasses: (objectClass: OBJECT_IDENTIFIER) => OBJECT_IDENTIFIER[],
): OBJECT_IDENTIFIER | null {
    if (objectClasses.length === 0) {
        return null; // No structural object class. Automatically invalid.
    }
    // This is a short-circuit: many DSEs have pretty short structural chains.
    // This short-circuits for both a single structural object class and the
    // single structural object class along with `top`.
    const shortChain = (objectClasses.length === 1)
        ? objectClasses[0] // Just to avoid a function call.
        : getSingleObjectClass(objectClasses);
    if (shortChain) {
        if (getKind(shortChain) !== ObjectClassKind_structural) {
            return null; // If only one object class, it MUST be structural.
        }
        const superclasses = getSuperclasses(shortChain);
        if (superclasses.length > 1) {
            return null; // There were missing superclasses.
        }
        if (superclasses.length === 1 && !superclasses[0].isEqualTo(top["&id"])) {
            return null; // Again, missing superclasses.
        }
        return shortChain;
    }

    const structural: Set<string> = new Set();
    const abstract_: Set<string> = new Set();
    const auxiliary: Set<string> = new Set();
    const parents: Set<string> = new Set(); // Object classes with subclasses
    for (const objectClass of objectClasses) {
        const kind = getKind(objectClass);
        const OC: string = objectClass.toString();
        if ((kind === undefined) || (kind === null)) {
            // We treat an unrecognized object class as invalid ALWAYS.
            return null;
        }
        const superclasses = getSuperclasses(objectClass);
        switch (kind) {
        case (ObjectClassKind_structural):
            if (structural.has(OC)) {
                return null;
            }
            structural.add(OC);
            superclasses.forEach((sc) => parents.add(sc.toString()));
            break;
        case (ObjectClassKind_abstract):
            if (abstract_.has(OC)) {
                return null;
            }
            abstract_.add(OC);
            superclasses.forEach((sc) => parents.add(sc.toString()));
            break;
        case (ObjectClassKind_auxiliary):
            if (auxiliary.has(OC)) {
                return null;
            }
            auxiliary.add(OC);
            break;
        }
    }
    // By doing this here instead of at define-time, we check for duplicates
    // in the user-supplied abstract object classes without triggering
    // duplicates by having this object class "hard-coded."
    abstract_.add(top["&id"].toString());

    // The structural object class of the entry is the structural object class that is not the parent of any other.
    const soc = Array.from(structural).find((oc) => !parents.has(oc));
    if (!soc) {
        return null;
    }
    const chain = getAncestorObjectClasses(ObjectIdentifier.fromString(soc), getSuperclasses, new Set());
    const chainIndex: Set<string> = new Set(chain.map((oc) => oc.toString()));
    chainIndex.add(soc);
    for (const structuralMember of chain) {
        const MEMBER: string = structuralMember.toString();
        if (!structural.has(MEMBER) && !abstract_.has(MEMBER)) {
            return null;
        }
    }
    for (const s of structural) {
        if (!chainIndex.has(s)) {
            return null; // There is an extraneous structural class outside of the chain.
        }
    }
    for (const a of auxiliary) {
        const achain = getAncestorObjectClasses(ObjectIdentifier.fromString(a), getSuperclasses, new Set());
        for (const achainMember of achain) {
            if (
                !auxiliary.has(achainMember.toString())
                && !abstract_.has(achainMember.toString())
            ) {
                return null; // We have an auxiliary OC that is missing an ancestor.
            }
        }
    }
    return ObjectIdentifier.fromString(soc);
}

export default validateObjectClasses;
