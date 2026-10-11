import { describe, expect, it } from "vitest";
import { generalNameFromString } from "./generalNameFromString.mjs";
import { generalNameToString } from "./generalNameToString.mjs";
import { bytesToHex } from "./hex.mjs";

describe("generalNameFromString", () => {
    it("parses the text alternatives and a CIDR range", () => {
        expect(generalNameFromString("rfc822Name:User@Example.com"))
            .toEqual({ rfc822Name: "User@Example.com" });
        expect(generalNameFromString("dNSName:example.com"))
            .toEqual({ dNSName: "example.com" });
        expect(generalNameFromString("DNSName:example.com"))
            .toEqual({ dNSName: "example.com" });
        expect(generalNameFromString("uniformResourceIdentifier:https://example.com"))
            .toEqual({ uniformResourceIdentifier: "https://example.com" });
        expect(generalNameFromString("registeredID:1.2.3").registeredID?.toString())
            .toBe("1.2.3");
        const ip = generalNameFromString("iPAddress:192.0.2.0/24");
        expect("iPAddress" in ip && bytesToHex(ip.iPAddress)).toBe("c0000200ffffff00");
        expect(generalNameToString(generalNameFromString("iPAddress:192.0.2.1")))
            .toBe("iPAddress:192.0.2.1");
    });

    it("parses a directory name and an X.400 address", () => {
        const directory = generalNameFromString("directoryName:CN=Bob,C=US");
        expect(generalNameToString(directory)).toBe("directoryName:cn=Bob,c=US");
        const x400 = generalNameFromString(
            "x400Address:G=Jonathan;I=M;S=Wilbur;O=Wildboar Software;A=123;C=US",
        );
        expect("x400Address" in x400 && x400.x400Address.toString()).toContain("S=Wilbur");
    });

    it("parses string otherName forms and a hardware module name", () => {
        const roundTrips: string[] = [
            "otherName:UPN:user@example.com",
            "otherName:XMPPAddr:user@example.com",
            "otherName:NAIRealm:example.com",
            "otherName:SmtpUTF8Mailbox:user@example.com",
            "otherName:AcpNodeName:node",
            "otherName:BundleEID:dtn://example",
            "otherName:HardwareModuleName:{ hwType:1.2.3, hwSerialNum:aabb }",
        ];
        for (const sample of roundTrips) {
            expect(generalNameToString(generalNameFromString(sample))).toBe(sample);
        }
        expect(generalNameToString(generalNameFromString(
            "otherName:srvname:_ldap._tcp.example.com",
        ))).toBe("otherName:SRVName:_ldap._tcp.example.com");
        expect(generalNameToString(generalNameFromString(
            "otherName:HARDWAREMODULENAME:{ HWTYPE:1.2.3, HWSERIALNUM:AABB }",
        ))).toBe("otherName:HardwareModuleName:{ hwType:1.2.3, hwSerialNum:aabb }");
    });

    it("refuses ediPartyName, unparsed otherName forms, an unknown alternative, and a non-IA5 value", () => {
        expect(() => generalNameFromString("otherName:1.2.3")).toThrow(SyntaxError);
        expect(() => generalNameFromString("otherName:PermanentIdentifier:{ identifierValue:\"x\" }")).toThrow(SyntaxError);
        expect(() => generalNameFromString("otherName:SIM:{ hashAlg:{ algorithm:1.2.3 } }")).toThrow(SyntaxError);
        expect(() => generalNameFromString("otherName:srvname:éxample.com")).toThrow(SyntaxError);
        expect(() => generalNameFromString("ediPartyName:{ partyName:\"Acme\" }")).toThrow(SyntaxError);
        expect(() => generalNameFromString("nope:value")).toThrow(SyntaxError);
        expect(() => generalNameFromString("dNSName:éxample.com")).toThrow(SyntaxError);
        expect(() => generalNameFromString("not a name")).toThrow(SyntaxError);
    });
});
