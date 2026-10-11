/**
 * @description
 *
 * ACP 133 common-content syntaxes for the Allied Directory.
 * Import from `@wildboar/acp133` or
 * `@wildboar/acp133/ACP133CommonContent`.
 *
 * ACP 133 (June 1998) defines the directory service and
 * puts the schema in Annex B. That edition's body does
 * not define these syntaxes. Notes cite the body where
 * it states a rule, and otherwise cite
 * [draft-dally-acp133-and-ldap-01](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01)
 * (ACP 133(B) common content) or ACP 133 SUPP-1(A).
 *
 * `AlgorithmIdentifier`, `GeneralNames`, and
 * `UnboundedDirectoryString` are imported from
 * `@wildboar/pki-stub` and are not re-exported here.
 */
export * from "./lib/modules/ACP133CommonContent/index.mjs";
