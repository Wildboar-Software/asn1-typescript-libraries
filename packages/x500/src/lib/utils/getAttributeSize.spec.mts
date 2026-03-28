import {
    Attribute,
    Attribute_valuesWithContext_Item,
    Context,
} from "../modules/InformationFramework/index.mjs";
import getAttributeSize from "./getAttributeSize.mjs";
import { commonName } from "../modules/SelectedAttributeTypes/index.mjs";
import { languageContext } from "../modules/SelectedAttributeTypes/languageContext.oa.mjs";
import { DER } from "@wildboar/asn1/functional";

describe("getAttributeSize", () => {
    it("returns the correct size, in bytes, of an attribute", () => {
        const attr = new Attribute(
            commonName["&id"],
            [
                commonName.encoderFor["&Type"]!({
                    printableString: "John Doe",
                }, DER),
            ],
            []
        );
        expect(getAttributeSize(attr)).toBe(19);
        attr.valuesWithContext!.push(new Attribute_valuesWithContext_Item(
            commonName.encoderFor["&Type"]!({
                printableString: "Yohn Doe",
            }, DER),
            [
                new Context(
                    languageContext["&id"],
                    [
                        languageContext.encoderFor["&Type"]!("de", DER),
                    ],
                ),
            ],
        ));
        expect(getAttributeSize(attr)).toBe(46);
    });
});
