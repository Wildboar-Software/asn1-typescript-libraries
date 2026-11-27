import type { DotDelimitedOidString, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { Filter } from "@wildboar/x500/DirectoryAbstractService";
import { ContextProfile } from "@wildboar/x500/ServiceAdministration";
import { ContextAssertion } from "@wildboar/x500/InformationFramework";
import { BER } from "@wildboar/asn1/functional";
import { commonName, languageContext } from "@wildboar/x500/SelectedAttributeTypes";
import { AttributeValueAssertion } from "@wildboar/x500/InformationFramework";
import { checkForDisallowedContexts } from "./checkForDisallowedContexts.mjs";

describe("checkForDisallowedContexts", () => {
    it("should not find any violations in the simplest compliant case", () => {
        const violations: Set<DotDelimitedOidString> = new Set();
        const filter: Filter = {
            item: {
                equality: new AttributeValueAssertion(
                    commonName["&id"],
                    commonName.encoderFor["&Type"]!({ uTF8String: "John Doe" }, BER),
                    {
                        selectedContexts: [
                            new ContextAssertion(
                                languageContext["&id"],
                                [languageContext.encoderFor["&Type"]!("en", BER)],
                            ),
                        ],
                    }
                ),
            },
        };
        const profiles: Map<DotDelimitedOidString, Map<DotDelimitedOidString, ContextProfile>> = new Map();
        profiles.set(commonName["&id"].toString(), new Map([
            [languageContext["&id"].toString(), new ContextProfile(
                languageContext["&id"],
                [languageContext.encoderFor["&Type"]!("en", BER)],
            )],
        ]));
        checkForDisallowedContexts(filter, profiles, violations);
        expect(violations.size).toBe(0);
    });

    it("should find violations in the simplest non-compliant case", () => {
        const violations: Set<DotDelimitedOidString> = new Set();
        const filter: Filter = {
            item: {
                equality: new AttributeValueAssertion(
                    commonName["&id"],
                    commonName.encoderFor["&Type"]!({ uTF8String: "John Doe" }, BER),
                    {
                        selectedContexts: [
                            new ContextAssertion(
                                languageContext["&id"],
                                [languageContext.encoderFor["&Type"]!("en", BER)],
                            ),
                        ],
                    }
                ),
            },
        };
        const profiles: Map<DotDelimitedOidString, Map<DotDelimitedOidString, ContextProfile>> = new Map();
        profiles.set(commonName["&id"].toString(), new Map()); // No contexts allowed.
        checkForDisallowedContexts(filter, profiles, violations);
        expect(violations.size).toBe(1);
    });
});
