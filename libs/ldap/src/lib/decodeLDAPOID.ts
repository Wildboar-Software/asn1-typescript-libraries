import { OBJECT_IDENTIFIER, ObjectIdentifier } from "asn1-ts";
import type { LDAPOID } from "./modules/Lightweight-Directory-Access-Protocol-V3/LDAPOID.ta";

export
function decodeLDAPOID (ldapoid: LDAPOID): OBJECT_IDENTIFIER {
    const nodes: number[] = [
        (ldapoid[0] - 0x30),
    ];
    let current: number = 0;
    for (let i: number = 2; i < ldapoid.length; i++) {
        if (ldapoid[i] === 0x2E) { // Period
            nodes.push(current);
            current = 0;
        } else {
            current *= 10;
            current += (ldapoid[i] - 0x30);
        }
    }
    nodes.push(current);
    return new ObjectIdentifier(nodes);
}

export default decodeLDAPOID;
