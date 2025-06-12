import { RDNSequence } from "../modules/InformationFramework/RDNSequence.ta.mjs";
import relativeDistinguishedNameToString from "./relativeDistinguishedNameToString.mjs";

/**
 * @deprecated
 */
export default function rdnSequenceToString(rdns: RDNSequence): string {
    return rdns
        .map(relativeDistinguishedNameToString)
        .map((rdn) => rdn.replace(/\//g, "\\/"))
        .join("/");
}
