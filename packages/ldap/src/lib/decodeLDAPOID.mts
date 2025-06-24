import { OBJECT_IDENTIFIER, ObjectIdentifier } from "@wildboar/asn1";
import type { LDAPOID } from "./modules/Lightweight-Directory-Access-Protocol-V3/LDAPOID.ta.mjs";
import bytesToAscii from "./utils/bytesToAscii.mjs";

export
function decodeLDAPOID (ldapoid: LDAPOID): OBJECT_IDENTIFIER {
    return ObjectIdentifier.fromString(bytesToAscii(ldapoid));
}

export default decodeLDAPOID;
