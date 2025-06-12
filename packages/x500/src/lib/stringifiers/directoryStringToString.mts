import type {
    UnboundedDirectoryString
} from "../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import teletexToString from "./teletexToString.mjs";

/**
 * @summary Convert a DirectoryString to a normal JavaScript `string`.
 * @function
 */
export
function directoryStringToString (
    ds: UnboundedDirectoryString,
): string {
    if ("uTF8String" in ds) {
        return ds.uTF8String;
    } else if ("printableString" in ds) {
        return ds.printableString;
    } else if ("universalString" in ds) {
        return ds.universalString;
    } else if ("bmpString" in ds) {
        return ds.bmpString;
    } else { // Anything else is assumed to be teletex.
        return teletexToString(ds.teletexString);
    }
}

export default directoryStringToString;
