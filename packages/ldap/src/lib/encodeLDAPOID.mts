import { OBJECT_IDENTIFIER, ObjectIdentifier } from "@wildboar/asn1";
import type { LDAPOID } from "./modules/Lightweight-Directory-Access-Protocol-V3/LDAPOID.ta.mjs";

export
function encodeLDAPOID (oid: OBJECT_IDENTIFIER): LDAPOID {
    return new Uint8Array(Array.from(oid.dotDelimitedNotation).map((char) => char.charCodeAt(0)));
}

export default encodeLDAPOID;
