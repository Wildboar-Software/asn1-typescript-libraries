import encodeLDAPOID from "../lib/encodeLDAPOID.mjs";
import { ObjectIdentifier } from "@wildboar/asn1";

describe("encodeLDAPOID", () => {

    test.each([
        [ [ 2, 5, 4, 0 ], "2.5.4.0" ],
        [ [ 1, 3, 6, 1, 4, 1, 1466, 115, 121, 1, 17 ], "1.3.6.1.4.1.1466.115.121.1.17" ],
    ])("can encode OID %s", (nodes, expected) => {
        const oid = ObjectIdentifier.fromParts(nodes);
        expect(Buffer.from(encodeLDAPOID(oid)).toString("ascii")).toBe(expected);
    });

});
