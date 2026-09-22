import { DER } from "@wildboar/asn1/functional";
import { _encode_UserPwd } from "../../modules/PasswordPolicy/UserPwd.ta.mjs";
import { createUserPwdMatch } from "./userPwdMatch.mjs";

const match = createUserPwdMatch(() => null);

function clear (password: string) {
    return _encode_UserPwd({ clear: password }, DER);
}

describe("userPwdMatch()", () => {
    it("compares clear passwords with caseExactMatch after string preparation", () => {
        expect(match(clear("Secret"), clear("Secret"))).toBe(true);
        expect(match(clear("  Secret  "), clear("Secret"))).toBe(true);
        expect(match(clear("Secret"), clear("secret"))).toBe(false);
    });
});
