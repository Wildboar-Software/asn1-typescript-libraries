import type { DistinguishedName } from "../modules/InformationFramework/DistinguishedName.ta.mjs";
import rdnSequenceToString from "./rdnSequenceToString.mjs";

/**
 * @deprecated
 */
export default function distinguishedNameToString(
    dn: DistinguishedName
): string {
    return rdnSequenceToString(dn);
}
