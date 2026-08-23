/**
 * Unbounded directory string (no upper bound). Re-exported from
 * `@wildboar/pki-stub`. CHOICE of Teletex/Printable/BMP/Universal/UTF-8.
 * Empty strings forbidden (`SIZE (1..MAX)`). Equality is on characters, not
 * which string type was used. Prefer UTF-8.
 */
export type {
    UnboundedDirectoryString,
} from "@wildboar/pki-stub";
export {
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "@wildboar/pki-stub";
