import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { LDAPOID } from "./modules/Lightweight-Directory-Access-Protocol-V3/LDAPOID.ta.mjs";
import { Buffer } from "node:buffer";

export
function encodeLDAPOID (oid: OBJECT_IDENTIFIER): LDAPOID {
    return Buffer.from(oid.dotDelimitedNotation, "ascii");
}

export default encodeLDAPOID;
