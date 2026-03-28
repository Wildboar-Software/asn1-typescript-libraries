import { RelativeDistinguishedName } from "../modules/InformationFramework/RelativeDistinguishedName.ta.mjs";
import checkNameForm from "./checkNameForm.mjs";
import { type OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { commonName } from "../modules/SelectedAttributeTypes/commonName.oa.mjs";
import { stateOrProvinceName } from "../modules/SelectedAttributeTypes/stateOrProvinceName.oa.mjs";
import { DER } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";

describe("checkNameForm", () => {
    it("returns true if a basic RDN is compliant", () => {
        const rdn: RelativeDistinguishedName = [
            new AttributeTypeAndValue(
                commonName["&id"],
                commonName.encoderFor["&Type"]!({
                    printableString: "John Doe",
                }, DER),
            ),
        ];
        const mandatories: OBJECT_IDENTIFIER[] = [ commonName["&id"] ];
        const optionals: OBJECT_IDENTIFIER[] = [];
        expect(checkNameForm(rdn, mandatories, optionals)).toBe(true);
    });

    it("returns false if an RDN contains non-permitted attribute types", () => {
        const rdn: RelativeDistinguishedName = [
            new AttributeTypeAndValue(
                commonName["&id"],
                commonName.encoderFor["&Type"]!({
                    printableString: "John Doe",
                }, DER),
            ),
            new AttributeTypeAndValue(
                stateOrProvinceName["&id"],
                stateOrProvinceName.encoderFor["&Type"]!({
                    printableString: "California",
                }, DER),
            ),
        ];
        const mandatories: OBJECT_IDENTIFIER[] = [ commonName["&id"] ];
        const optionals: OBJECT_IDENTIFIER[] = [];
        expect(checkNameForm(rdn, mandatories, optionals)).toBe(false);
    });

    it("returns true if an RDN contains permitted mandatory and optional attribute types", () => {
        const rdn: RelativeDistinguishedName = [
            new AttributeTypeAndValue(
                commonName["&id"],
                commonName.encoderFor["&Type"]!({
                    printableString: "John Doe",
                }, DER),
            ),
            new AttributeTypeAndValue(
                stateOrProvinceName["&id"],
                stateOrProvinceName.encoderFor["&Type"]!({
                    printableString: "California",
                }, DER),
            ),
        ];
        const mandatories: OBJECT_IDENTIFIER[] = [ commonName["&id"] ];
        const optionals: OBJECT_IDENTIFIER[] = [ stateOrProvinceName["&id"] ];
        expect(checkNameForm(rdn, mandatories, optionals)).toBe(true);
    });

    it("returns false if an RDN is missing mandatory attribute types", () => {
        const rdn: RelativeDistinguishedName = [
            new AttributeTypeAndValue(
                stateOrProvinceName["&id"],
                stateOrProvinceName.encoderFor["&Type"]!({
                    printableString: "California",
                }, DER),
            ),
        ];
        const mandatories: OBJECT_IDENTIFIER[] = [ commonName["&id"] ];
        const optionals: OBJECT_IDENTIFIER[] = [ stateOrProvinceName["&id"] ];
        expect(checkNameForm(rdn, mandatories, optionals)).toBe(false);
    });

    it("returns false if an RDN is empty", () => {
        const rdn: RelativeDistinguishedName = [];
        const mandatories: OBJECT_IDENTIFIER[] = [ commonName["&id"] ];
        const optionals: OBJECT_IDENTIFIER[] = [ stateOrProvinceName["&id"] ];
        expect(checkNameForm(rdn, mandatories, optionals)).toBe(false);
        mandatories.pop();
        optionals.pop();
        expect(checkNameForm(rdn, mandatories, optionals)).toBe(false);
    });

    it("returns false if an RDN contains duplicate mandatory attribute types", () => {
        const rdn: RelativeDistinguishedName = [
            new AttributeTypeAndValue(
                stateOrProvinceName["&id"],
                stateOrProvinceName.encoderFor["&Type"]!({
                    printableString: "California",
                }, DER),
            ),
            new AttributeTypeAndValue(
                stateOrProvinceName["&id"],
                stateOrProvinceName.encoderFor["&Type"]!({
                    printableString: "California",
                }, DER),
            ),
        ];
        const mandatories: OBJECT_IDENTIFIER[] = [ stateOrProvinceName["&id"] ];
        const optionals: OBJECT_IDENTIFIER[] = [];
        expect(checkNameForm(rdn, mandatories, optionals)).toBe(false);
    });

    it("returns false if an RDN contains duplicate optional attribute types", () => {
        const rdn: RelativeDistinguishedName = [
            new AttributeTypeAndValue(
                commonName["&id"],
                commonName.encoderFor["&Type"]!({
                    printableString: "Schmoo",
                }, DER),
            ),
            new AttributeTypeAndValue(
                stateOrProvinceName["&id"],
                stateOrProvinceName.encoderFor["&Type"]!({
                    printableString: "California",
                }, DER),
            ),
            new AttributeTypeAndValue(
                stateOrProvinceName["&id"],
                stateOrProvinceName.encoderFor["&Type"]!({
                    printableString: "California",
                }, DER),
            ),
        ];
        const mandatories: OBJECT_IDENTIFIER[] = [ commonName["&id"] ];
        const optionals: OBJECT_IDENTIFIER[] = [ stateOrProvinceName["&id"] ];
        expect(checkNameForm(rdn, mandatories, optionals)).toBe(false);
    });

    it("returns false if there are no mandatory attribute types", () => {
        const rdn: RelativeDistinguishedName = [
            new AttributeTypeAndValue(
                commonName["&id"],
                commonName.encoderFor["&Type"]!({
                    printableString: "John Doe",
                }, DER),
            ),
        ];
        const mandatories: OBJECT_IDENTIFIER[] = [];
        const optionals: OBJECT_IDENTIFIER[] = [];
        expect(checkNameForm(rdn, mandatories, optionals)).toBe(false);
    });
});
