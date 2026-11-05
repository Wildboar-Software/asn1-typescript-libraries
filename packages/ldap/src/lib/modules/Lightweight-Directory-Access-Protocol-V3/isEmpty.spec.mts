import { Buffer } from "node:buffer";
import { IntermediateResponse } from "./IntermediateResponse.ta.mjs";
import { PartialAttribute } from "./PartialAttribute.ta.mjs";
import { SaslCredentials } from "./SaslCredentials.ta.mjs";

const utf8 = (text: string): Buffer => Buffer.from(text, "utf8");

describe("PartialAttribute.isEmpty", () => {
    it("is true when vals is empty", () => {
        expect(new PartialAttribute(utf8("cn"), []).isEmpty()).toBe(true);
    });

    it("is false when vals has members", () => {
        expect(new PartialAttribute(utf8("cn"), [utf8("Ada")]).isEmpty())
            .toBe(false);
    });
});

describe("IntermediateResponse.isEmpty", () => {
    it("is true when both components are absent", () => {
        expect(new IntermediateResponse().isEmpty()).toBe(true);
        expect(new IntermediateResponse(undefined, new Uint8Array()).isEmpty())
            .toBe(true);
    });

    it("is false when a name or value is present", () => {
        expect(new IntermediateResponse(utf8("1.2.3")).isEmpty()).toBe(false);
        expect(new IntermediateResponse(undefined, utf8("x")).isEmpty())
            .toBe(false);
    });
});

describe("SaslCredentials.isEmpty", () => {
    it("is true when mechanism is the empty string", () => {
        expect(new SaslCredentials(utf8("")).isEmpty()).toBe(true);
    });

    it("is false when mechanism names a SASL mechanism", () => {
        expect(new SaslCredentials(utf8("EXTERNAL")).isEmpty()).toBe(false);
    });
});
