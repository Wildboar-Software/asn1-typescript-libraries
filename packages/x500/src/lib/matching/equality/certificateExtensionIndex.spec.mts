import { ObjectIdentifier } from "@wildboar/asn1";
import { Extension } from "../../modules/AuthenticationFramework/Extension.ta.mjs";
import { PolicyInformation } from "../../modules/CertificateExtensions/PolicyInformation.ta.mjs";
import {
    certificateExtensionMap,
    certificatePoliciesIntersect,
} from "./certificateExtensionIndex.mjs";

describe("certificate extension helpers", () => {
    it("reads extensions and policy OIDs from iterators", () => {
        const id = ObjectIdentifier.fromString("1.2.3");
        const other = ObjectIdentifier.fromString("1.2.4");
        const extension = new Extension(id, false, new Uint8Array([1]));
        const map = certificateExtensionMap([extension].values());
        expect(map.get(id.toString())).toBe(extension);

        expect(certificatePoliciesIntersect(
            [other, id].values(),
            [new PolicyInformation(other)].values(),
        )).toBe(true);
        expect(certificatePoliciesIntersect(
            [id].values(),
            [new PolicyInformation(other)].values(),
        )).toBe(false);
    });
});
