import { DER } from "@wildboar/asn1/functional";
import {
    DualStringSyntax,
    _encode_DualStringSyntax,
} from "../../modules/AttributeCertificateDefinitions/DualStringSyntax.ta.mjs";
import dualStringMatch from "./dualStringMatch.mjs";

function encode (operation: string, object: string) {
    return _encode_DualStringSyntax(new DualStringSyntax(
        { uTF8String: operation },
        { uTF8String: object },
    ), DER);
}

describe("dualStringMatch()", () => {
    it("compares prepared strings rather than the raw DirectoryString encodings", () => {
        expect(dualStringMatch(encode("  read  ", "file"), encode("read", "file"))).toBe(true);
        expect(dualStringMatch(encode("read", "file"), encode("READ", "file"))).toBe(false);
    });
});
