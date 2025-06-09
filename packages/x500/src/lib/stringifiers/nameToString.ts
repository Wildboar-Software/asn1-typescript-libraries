import type { Name } from "../modules/InformationFramework/Name.ta.js";
import rdnSequenceToString from "./rdnSequenceToString.js";

/**
 * @deprecated
 */
export default function nameToString(name: Name): string {
    return rdnSequenceToString(name.rdnSequence);
}
