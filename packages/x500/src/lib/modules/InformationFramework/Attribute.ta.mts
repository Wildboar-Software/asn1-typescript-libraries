/**
 * Directory {@link Attribute}: type OID plus SET OF values (and optional
 * values-with-context). Re-exported from `@wildboar/pki-stub`.
 *
 * `values` / `valuesWithContext` are unordered and unique. A stored
 * attribute has at least one value; a transferred Attribute may have none
 * (e.g. access control). Contexts are not part of an RDN distinguished
 * value. Operational attributes shall not have contexts.
 */
export {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "@wildboar/pki-stub";
