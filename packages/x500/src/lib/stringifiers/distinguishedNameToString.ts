import type { DistinguishedName } from "../modules/InformationFramework/DistinguishedName.ta.js";
import rdnSequenceToString from "./rdnSequenceToString.js";

/**
 * @deprecated
 */
export default function distinguishedNameToString(
    dn: DistinguishedName
): string {
    return rdnSequenceToString(dn);
}
