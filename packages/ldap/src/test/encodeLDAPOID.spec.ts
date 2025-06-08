import encodeLDAPOID from "../lib/encodeLDAPOID";
import { ObjectIdentifier } from "asn1-ts";

describe("encodeLDAPOID", () => {

    test.each([
        [ [ 2, 5, 4, 0 ], "50,46,53,46,52,46,48" ],
        [ [ 1, 3, 6, 1, 4, 1, 1466, 115, 121, 1, 17 ], "49,46,51,46,54,46,49,46,52,46,49,46,49,52,54,54,46,49,49,53,46,49,50,49,46,49,46,49,55" ],
    ])("can encode OID %s", (nodes, expected) => {
        const oid = new ObjectIdentifier(nodes);
        expect(encodeLDAPOID(oid).toString()).toBe(expected);
    });

});
