import { RDNSequence } from "../modules/InformationFramework/RDNSequence.ta";
import relativeDistinguishedNameToString from "./relativeDistinguishedNameToString";

/**
 * @deprecated
 */
export default function rdnSequenceToString(rdns: RDNSequence): string {
    return rdns
        .map(relativeDistinguishedNameToString)
        .map((rdn) => rdn.replace(/\//g, "\\/"))
        .join("/");
}
