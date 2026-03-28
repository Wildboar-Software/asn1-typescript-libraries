import { ObjectIdentifier, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    ObjectClassKind,
    ObjectClassKind_structural,
    ObjectClassKind_abstract,
    ObjectClassKind_auxiliary,
} from "../modules/InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../modules/InformationFramework/top.oa.mjs";
import validateObjectClasses from "./validateObjectClasses.mjs";
import { person } from "../modules/SelectedObjectClasses/person.oa.mjs";
import { organizationalPerson } from "../modules/SelectedObjectClasses/organizationalPerson.oa.mjs";
import { applicationEntity } from "../modules/SelectedObjectClasses/applicationEntity.oa.mjs";
import { dSA } from "../modules/SelectedObjectClasses/dSA.oa.mjs";
import { strongAuthenticationUser } from "../modules/SelectedObjectClasses/strongAuthenticationUser.oa.mjs";
import { certificationAuthority } from "../modules/SelectedObjectClasses/certificationAuthority.oa.mjs";
import { certificationAuthority_V2 } from "../modules/SelectedObjectClasses/certificationAuthority-V2.oa.mjs";
import { child } from "../modules/InformationFramework/child.oa.mjs";
import { parent } from "../modules/InformationFramework/parent.oa.mjs";

const getKind = (objectClass: OBJECT_IDENTIFIER) => {
    if (
        objectClass.isEqualTo(top["&id"])
        || objectClass.isEqualTo(parent["&id"])
    ) {
        return ObjectClassKind_abstract;
    }
    if (
        objectClass.isEqualTo(strongAuthenticationUser["&id"])
        || objectClass.isEqualTo(child["&id"])
        || objectClass.isEqualTo(certificationAuthority["&id"])
        || objectClass.isEqualTo(certificationAuthority_V2["&id"])
    ) {
        return ObjectClassKind_auxiliary;
    }
    return ObjectClassKind_structural;
};

const getSuperclasses = (objectClass: OBJECT_IDENTIFIER): OBJECT_IDENTIFIER[] => {
    switch (objectClass.toString()) {
        case person["&id"].toString():
            return [top["&id"]];
        case organizationalPerson["&id"].toString():
            return [person["&id"]];
        case dSA["&id"].toString():
            return [applicationEntity["&id"]];
        case certificationAuthority_V2["&id"].toString():
            return [certificationAuthority["&id"]];
        default:
            return [];
    }
};

const getSuperclassesDoS = (objectClass: OBJECT_IDENTIFIER) => {
    switch (objectClass.toString()) {
        case person["&id"].toString():
            return [organizationalPerson["&id"]];
        case organizationalPerson["&id"].toString():
            return [person["&id"]];
        default:
            return [];
    }
};

describe("validateObjectClasses", () => {
    it("returns true for a valid set of object classes", () => {
        const objectClasses: OBJECT_IDENTIFIER[] = [
            person["&id"],
            organizationalPerson["&id"],
            top["&id"],
        ];
        let isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeTruthy();

        objectClasses.pop(); // Remove the `top` class
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        // It should still be valid. The `top` class should be ignored.
        expect(isValid).toBeTruthy();

        objectClasses.push(strongAuthenticationUser["&id"]);
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeTruthy();

        objectClasses.push(parent["&id"]);
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeTruthy();

        objectClasses.push(child["&id"]);
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeTruthy();

        objectClasses.push(top["&id"]);
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeTruthy();
    });

    it("returns false for a broken structural chain of object classes", () => {
        const objectClasses: OBJECT_IDENTIFIER[] = [
            organizationalPerson["&id"],
            top["&id"],
        ];
        let isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeNull();

        objectClasses.pop(); // Remove the `top` class
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        // It should still be invalid. The `top` class should be ignored.
        expect(isValid).toBeNull();

        objectClasses.push(strongAuthenticationUser["&id"]);
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeNull();

        objectClasses.push(parent["&id"]);
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeNull();

        objectClasses.push(child["&id"]);
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeNull();

        objectClasses.push(top["&id"]);
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeNull();
    });

    it("handles cyclical class inheritance gracefully", () => {
        const objectClasses: OBJECT_IDENTIFIER[] = [
            organizationalPerson["&id"],
            top["&id"],
        ];
        let isValid = validateObjectClasses(objectClasses, getKind, getSuperclassesDoS);
        expect(isValid).toBeNull();

        objectClasses.pop(); // Remove the `top` class
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclassesDoS);
        // It should still be invalid. The `top` class should be ignored.
        expect(isValid).toBeNull();

        objectClasses.push(strongAuthenticationUser["&id"]);
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclassesDoS);
        expect(isValid).toBeNull();

        objectClasses.push(parent["&id"]);
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclassesDoS);
        expect(isValid).toBeNull();

        objectClasses.push(child["&id"]);
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclassesDoS);
        expect(isValid).toBeNull();

        objectClasses.push(top["&id"]);
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclassesDoS);
        expect(isValid).toBeNull();
    });

    it("returns false for object classes with dual structural chains", () => {
        const objectClasses: OBJECT_IDENTIFIER[] = [
            person["&id"],
            organizationalPerson["&id"],
            applicationEntity["&id"],
            dSA["&id"],
            top["&id"],
        ];
        let isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeNull();

        objectClasses.pop(); // Remove the `top` class
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        // It should still be invalid. The `top` class should be ignored.
        expect(isValid).toBeNull();

        objectClasses.push(strongAuthenticationUser["&id"]);
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeNull();

        objectClasses.push(parent["&id"]);
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeNull();

        objectClasses.push(child["&id"]);
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeNull();

        objectClasses.push(top["&id"]);
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeNull();
    });

    it("returns false for object classes with a broken auxiliary chain", () => {
        const objectClasses: OBJECT_IDENTIFIER[] = [
            applicationEntity["&id"],
            dSA["&id"],
            // This is what's wrong: there should be `certificationAuthority`
            // class if `certificationAuthority-V2` is used.
            certificationAuthority_V2["&id"],
            top["&id"],
        ];
        let isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeNull();

        objectClasses.pop(); // Remove the `top` class
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        // It should still be invalid. The `top` class should be ignored.
        expect(isValid).toBeNull();

        objectClasses.push(strongAuthenticationUser["&id"]);
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeNull();

        objectClasses.push(parent["&id"]);
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeNull();

        objectClasses.push(child["&id"]);
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeNull();

        objectClasses.push(top["&id"]);
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeNull();
    });

    it("returns false for object classes with no structural object class", () => {
        const objectClasses: OBJECT_IDENTIFIER[] = [
            top["&id"],
        ];
        let isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeNull();

        objectClasses.pop(); // Remove the `top` class
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        // It should still be invalid. The `top` class should be ignored.
        expect(isValid).toBeNull();

        objectClasses.push(parent["&id"]);
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeNull();

        objectClasses.push(strongAuthenticationUser["&id"]);
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeNull();

        objectClasses.push(child["&id"]);
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeNull();
    });

    it("returns false for a valid set of object classes that has duplicates", () => {
        const objectClasses: OBJECT_IDENTIFIER[] = [
            person["&id"],
            organizationalPerson["&id"],
            top["&id"],
        ];
        let isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeTruthy();

        objectClasses.push(organizationalPerson["&id"]);
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeNull();
        objectClasses.pop();

        objectClasses.push(parent["&id"]);
        objectClasses.push(parent["&id"]);
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeNull();
        objectClasses.pop();
        objectClasses.pop();

        objectClasses.push(child["&id"]);
        objectClasses.push(child["&id"]);
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeNull();
        objectClasses.pop();
        objectClasses.pop();

        objectClasses.push(top["&id"]);
        isValid = validateObjectClasses(objectClasses, getKind, getSuperclasses);
        expect(isValid).toBeNull();
    });
});
