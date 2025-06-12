import type { Name } from "../modules/InformationFramework/Name.ta.mjs";
import rdnSequenceToString from "./rdnSequenceToString.mjs";

/**
 * @deprecated
 */
export default function nameToString(name: Name): string {
    return rdnSequenceToString(name.rdnSequence);
}
