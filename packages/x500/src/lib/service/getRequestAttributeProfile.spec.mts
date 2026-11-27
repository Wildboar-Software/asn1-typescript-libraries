import { ObjectIdentifier } from "@wildboar/asn1";
import type { AttributeType } from "@wildboar/x500/InformationFramework";
import { commonName, name } from "@wildboar/x500/SelectedAttributeTypes";
import { RequestAttribute } from "@wildboar/x500/ServiceAdministration";
import { getRequestAttributeProfile } from "./getRequestAttributeProfile.mjs";

describe("getRequestAttributeProfile", () => {
    const child = ObjectIdentifier.fromString("1.2.3.4.5");

    function* getAttributeParentTypes(type: AttributeType): IterableIterator<AttributeType> {
        yield type;
        yield commonName["&id"];
        yield name["&id"];
    }

    it("uses an exact profile even when it does not include subtypes", () => {
        const exact = new RequestAttribute(child, false);
        const parent = new RequestAttribute(commonName["&id"], true);
        const profiles = new Map([
            [parent.attributeType.toString(), parent],
            [exact.attributeType.toString(), exact],
        ]);
        expect(getRequestAttributeProfile(child, profiles, getAttributeParentTypes)).toBe(exact);
    });

    it("uses the nearest ancestor profile that includes subtypes", () => {
        const parent = new RequestAttribute(commonName["&id"], true);
        const ancestor = new RequestAttribute(name["&id"], true);
        const profiles = new Map([
            [ancestor.attributeType.toString(), ancestor],
            [parent.attributeType.toString(), parent],
        ]);
        expect(getRequestAttributeProfile(child, profiles, getAttributeParentTypes)).toBe(parent);
    });

    it("walks past ancestors without profiles", () => {
        const ancestor = new RequestAttribute(name["&id"], true);
        const profiles = new Map([[ancestor.attributeType.toString(), ancestor]]);
        expect(getRequestAttributeProfile(child, profiles, getAttributeParentTypes)).toBe(ancestor);
    });

    it("supports ancestry iterators that omit the asserted type", () => {
        const ancestor = new RequestAttribute(name["&id"], true);
        const profiles = new Map([[ancestor.attributeType.toString(), ancestor]]);
        expect(getRequestAttributeProfile(
            child,
            profiles,
            () => [commonName["&id"], name["&id"]].values(),
        )).toBe(ancestor);
    });

    it.each([undefined, false])("stops at a nearer profile with includeSubtypes=%s", (include_subtypes) => {
        const parent = new RequestAttribute(commonName["&id"], include_subtypes);
        const ancestor = new RequestAttribute(name["&id"], true);
        const profiles = new Map([
            [ancestor.attributeType.toString(), ancestor],
            [parent.attributeType.toString(), parent],
        ]);
        expect(getRequestAttributeProfile(child, profiles, getAttributeParentTypes)).toBeUndefined();
    });

    it("returns undefined if no profile applies", () => {
        expect(getRequestAttributeProfile(child, new Map(), getAttributeParentTypes)).toBeUndefined();
    });
});
