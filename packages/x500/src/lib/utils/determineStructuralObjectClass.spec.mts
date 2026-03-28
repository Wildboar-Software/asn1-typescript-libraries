import { ObjectIdentifier, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { top } from "../modules/InformationFramework/top.oa.mjs";
import {
    ObjectClassKind,
    ObjectClassKind_structural,
    ObjectClassKind_abstract,
    ObjectClassKind_auxiliary,
} from "../modules/InformationFramework/ObjectClassKind.ta.mjs";
import { determineStructuralObjectClass } from "./determineStructuralObjectClass.mjs";
import { person } from "../modules/SelectedObjectClasses/person.oa.mjs";
import { organizationalPerson } from "../modules/SelectedObjectClasses/organizationalPerson.oa.mjs";
import { strongAuthenticationUser } from "../modules/SelectedObjectClasses/strongAuthenticationUser.oa.mjs";
import { parent } from "../modules/InformationFramework/parent.oa.mjs";

const id_oc_organism = ObjectIdentifier.fromString("2.5.400.100");

describe("determineStructuralObjectClass", () => {
    it("returns the structural object class of an entry in the simplest case", () => {
        const objectClasses: OBJECT_IDENTIFIER[] = [
            top["&id"],
            person["&id"],
            organizationalPerson["&id"],
        ];
        const getKind = (objectClass: OBJECT_IDENTIFIER) => ObjectClassKind_structural;
        const getSuperclasses = (objectClass: OBJECT_IDENTIFIER) => {
            switch (objectClass.toString()) {
            case person["&id"].toString():
                return [top["&id"]];
            case organizationalPerson["&id"].toString():
                return [person["&id"]];
            default:
                return [top["&id"]];
            }
        };
        const structuralObjectClass1 = determineStructuralObjectClass(objectClasses, getKind, getSuperclasses);
        expect(structuralObjectClass1.toString()).toBe(organizationalPerson["&id"].toString());

        objectClasses.pop();
        const structuralObjectClass2 = determineStructuralObjectClass(objectClasses, getKind, getSuperclasses);
        expect(structuralObjectClass2.toString()).toBe(person["&id"].toString());
    });

    it("returns the structural object class of an entry with an auxiliary object classes", () => {
        const objectClasses: OBJECT_IDENTIFIER[] = [
            top["&id"],
            person["&id"],
            strongAuthenticationUser["&id"],
            parent["&id"],
            organizationalPerson["&id"],
        ];
        const getKind = (objectClass: OBJECT_IDENTIFIER) => {
            if (objectClass.isEqualTo(strongAuthenticationUser["&id"])) {
                return ObjectClassKind_auxiliary;
            }
            if (
                objectClass.isEqualTo(top["&id"])
                || objectClass.isEqualTo(parent["&id"])
            ) {
                return ObjectClassKind_abstract;
            }
            return ObjectClassKind_structural;
        };
        const getSuperclasses = (objectClass: OBJECT_IDENTIFIER) => {
            switch (objectClass.toString()) {
            case strongAuthenticationUser["&id"].toString():
                return [];
            case person["&id"].toString():
                return [top["&id"]];
            case organizationalPerson["&id"].toString():
                return [person["&id"]];
            case parent["&id"].toString():
                return [];
            default:
                return [top["&id"]];
            }
        };
        const structuralObjectClass1 = determineStructuralObjectClass(objectClasses, getKind, getSuperclasses);
        expect(structuralObjectClass1.toString()).toBe(organizationalPerson["&id"].toString());

        objectClasses.pop();
        const structuralObjectClass2 = determineStructuralObjectClass(objectClasses, getKind, getSuperclasses);
        expect(structuralObjectClass2.toString()).toBe(person["&id"].toString());
    });

    it("returns the structural object class of an entry with an abstract object classes in its structural chain", () => {
        const objectClasses: OBJECT_IDENTIFIER[] = [
            top["&id"],
            id_oc_organism,
            person["&id"],
            strongAuthenticationUser["&id"],
            parent["&id"],
            organizationalPerson["&id"],
        ];
        const getKind = (objectClass: OBJECT_IDENTIFIER) => {
            if (objectClass.isEqualTo(strongAuthenticationUser["&id"])) {
                return ObjectClassKind_auxiliary;
            }
            if (
                objectClass.isEqualTo(top["&id"])
                || objectClass.isEqualTo(parent["&id"])
                || objectClass.isEqualTo(id_oc_organism)
            ) {
                return ObjectClassKind_abstract;
            }
            return ObjectClassKind_structural;
        };
        const getSuperclasses = (objectClass: OBJECT_IDENTIFIER) => {
            switch (objectClass.toString()) {
            case strongAuthenticationUser["&id"].toString():
                return [top["&id"]];
            case person["&id"].toString():
                return [top["&id"], id_oc_organism];
            case organizationalPerson["&id"].toString():
                return [person["&id"]];
            case parent["&id"].toString():
                return [top["&id"]];
            case "2.5.400.100":
                return [top["&id"]];
            default:
                return [top["&id"]];
            }
        };
        const structuralObjectClass1 = determineStructuralObjectClass(objectClasses, getKind, getSuperclasses);
        expect(structuralObjectClass1.toString()).toBe(organizationalPerson["&id"].toString());

        objectClasses.pop();
        const structuralObjectClass2 = determineStructuralObjectClass(objectClasses, getKind, getSuperclasses);
        expect(structuralObjectClass2.toString()).toBe(person["&id"].toString());
    });
});
