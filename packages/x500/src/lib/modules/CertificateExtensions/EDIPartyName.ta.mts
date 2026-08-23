/**
 * Re-export of {@link EDIPartyName} from `@wildboar/pki-stub`.
 *
 * `nameAssigner` optional; `partyName` required. A GeneralName form that
 * generally does **not** support name-constraint subtrees (only hierarchical
 * forms do: directoryName, dNSName, rfc822Name, iPAddress).
 */
export {
    EDIPartyName,
    _decode_EDIPartyName,
    _encode_EDIPartyName,
} from "@wildboar/pki-stub";
