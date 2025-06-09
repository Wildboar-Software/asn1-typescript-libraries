import { RDNSequence } from "../modules/InformationFramework/RDNSequence.ta.js";
import relativeDistinguishedNameToString from "./relativeDistinguishedNameToString.js";

/**
 * @deprecated
 */
export default function rdnSequenceToString(rdns: RDNSequence): string {
    return rdns
        .map(relativeDistinguishedNameToString)
        .map((rdn) => rdn.replace(/\//g, "\\/"))
        .join("/");
}
