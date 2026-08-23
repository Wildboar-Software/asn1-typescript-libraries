/**
 * Context on an attribute value. Re-exported from `@wildboar/pki-stub`.
 *
 * `contextValues` is SET SIZE (1..MAX). A value with no context of a type
 * is treated as applicable for every value of that type. `fallback`
 * defaults FALSE; TRUE selects the value when no other value matches a
 * context assertion of this type.
 */
export {
    Context,
    _decode_Context,
    _encode_Context,
} from "@wildboar/pki-stub";
