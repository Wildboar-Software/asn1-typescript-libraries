import decodeLDAPOID from "../lib/decodeLDAPOID";
import { ObjectIdentifier } from "@wildboar/asn1";

describe("decodeLDAPOID", () => {

    test.each([
        [ [ 50,46,53,46,52,46,48 ], "2.5.4.0" ],
        [ [ 49,46,51,46,54,46,49,46,52,46,49,46,49,52,54,54,46,49,49,53,46,49,50,49,46,49,46,49,55 ], "1.3.6.1.4.1.1466.115.121.1.17" ],
    ])("can encode OID %s", (bytes, expected) => {
        const encoded = new Uint8Array(bytes);
        expect(decodeLDAPOID(encoded).toString()).toBe(expected);
    });

});
