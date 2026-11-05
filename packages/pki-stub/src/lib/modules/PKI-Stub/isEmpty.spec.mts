import { BERElement, ObjectIdentifier } from "@wildboar/asn1";
import { Attribute } from "../InformationFramework/Attribute.ta.mjs";
import { Attribute_valuesWithContext_Item } from "../InformationFramework/Attribute-valuesWithContext-Item.ta.mjs";
import { Context } from "../InformationFramework/Context.ta.mjs";
import { AttCertIssuer } from "./AttCertIssuer.ta.mjs";
import { Holder } from "./Holder.ta.mjs";

const cn = new ObjectIdentifier([2, 5, 4, 3]);
const language = new ObjectIdentifier([2, 5, 4, 2]);

describe("Holder.isEmpty", () => {
    it("is true when no identifier is present", () => {
        expect(new Holder().isEmpty()).toBe(true);
        expect(new Holder(undefined, []).isEmpty()).toBe(true);
    });

    it("is false when entityName identifies the holder", () => {
        expect(new Holder(undefined, [{ dNSName: "holder.example" }]).isEmpty())
            .toBe(false);
    });
});

describe("AttCertIssuer.isEmpty", () => {
    it("is true when no identifier is present", () => {
        expect(new AttCertIssuer().isEmpty()).toBe(true);
        expect(new AttCertIssuer([]).isEmpty()).toBe(true);
    });

    it("is false when issuerName identifies the AA", () => {
        expect(new AttCertIssuer([{ dNSName: "issuer.example" }]).isEmpty())
            .toBe(false);
    });
});

describe("Attribute.isEmpty", () => {
    it("is true when there are no values", () => {
        expect(new Attribute(cn, []).isEmpty()).toBe(true);
        expect(new Attribute(cn, [], []).isEmpty()).toBe(true);
    });

    it("is false when values or valuesWithContext are present", () => {
        const value = new BERElement();
        value.utf8String = "Ada";
        expect(new Attribute(cn, [value]).isEmpty()).toBe(false);
        const ctxValue = new BERElement();
        ctxValue.utf8String = "en";
        const withContext = new Attribute_valuesWithContext_Item(
            value,
            [new Context(language, [ctxValue])],
        );
        expect(new Attribute(cn, [], [withContext]).isEmpty()).toBe(false);
    });
});
