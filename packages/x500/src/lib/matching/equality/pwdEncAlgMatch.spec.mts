import { DERElement, ObjectIdentifier } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import { AlgorithmIdentifier } from "../../modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { _encode_PwdEncAlg } from "../../modules/PasswordPolicy/PwdEncAlg.ta.mjs";
import { _encode_UserPwd } from "../../modules/PasswordPolicy/UserPwd.ta.mjs";
import { UserPwd_encrypted } from "../../modules/PasswordPolicy/UserPwd-encrypted.ta.mjs";
import pwdEncAlgMatch from "./pwdEncAlgMatch.mjs";

const OID = ObjectIdentifier.fromString("1.2.840.113549.1.1.1");

function assertion (parameters?: DERElement) {
    return _encode_PwdEncAlg(new AlgorithmIdentifier(OID, parameters), DER);
}

function stored (parameters?: DERElement) {
    return _encode_UserPwd({
        encrypted: new UserPwd_encrypted(
            new AlgorithmIdentifier(OID, parameters),
            new Uint8Array([ 1, 2, 3 ]),
        ),
    }, DER);
}

describe("pwdEncAlgMatch()", () => {
    it("matches when algorithm identifiers agree and both omit parameters", () => {
        expect(pwdEncAlgMatch(assertion(), stored())).toBe(true);
    });

    it("returns false without throwing when only one side has parameters", () => {
        const params = new DERElement();
        expect(() => pwdEncAlgMatch(assertion(params), stored())).not.toThrow();
        expect(pwdEncAlgMatch(assertion(params), stored())).toBe(false);
        expect(pwdEncAlgMatch(assertion(), stored(params))).toBe(false);
    });
});
