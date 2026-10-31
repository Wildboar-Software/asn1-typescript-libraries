/* eslint-disable */
import { type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_zimbraReverseProxyIPLoginLimit } from "../LdapZimbra/id-at-zimbraReverseProxyIPLoginLimit.va.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";

/**
 * @summary zimbraReverseProxyIPLoginLimit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraReverseProxyIPLoginLimit ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   EQUALITY MATCHING RULE    integerMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"zimbraReverseProxyIPLoginLimit"}
 *   LDAP-DESC                 "Sets the upper limit on logins from a remote IP via POP or IMAP to this proxy server after which login is rejected with an appropriate protocol specific bye response. This counter is cumulative for all users that appear to the proxy to be logging in from the same IP address. If multiple users appear to the proxy to be logging in from the same IP address (usual with NATing), then each of the different users login will contribute to increasing the hit counter for that IP address, and when the counter eventually exceeds the limit, then the connections from that IP address will be throttled. Therefore, all users from the same IP will contribute to (and be affected by) this counter. Logins using all protocols (POP3/POP3S/IMAP/IMAPS) will affect this counter (the counter is aggregate for all protocols, *not* separate). If this value is set to 0, then no limiting will take place for any IP."
 *   ID                        id-at-zimbraReverseProxyIPLoginLimit }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
export
const zimbraReverseProxyIPLoginLimit: ATTRIBUTE<INTEGER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraReverseProxyIPLoginLimit"],
    "&ldapDesc": "Sets the upper limit on logins from a remote IP via POP or IMAP to this proxy server after which login is rejected with an appropriate protocol specific bye response. This counter is cumulative for all users that appear to the proxy to be logging in from the same IP address. If multiple users appear to the proxy to be logging in from the same IP address (usual with NATing), then each of the different users login will contribute to increasing the hit counter for that IP address, and when the counter eventually exceeds the limit, then the connections from that IP address will be throttled. Therefore, all users from the same IP will contribute to (and be affected by) this counter. Logins using all protocols (POP3/POP3S/IMAP/IMAPS) will affect this counter (the counter is aggregate for all protocols, *not* separate). If this value is set to 0, then no limiting will take place for any IP." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraReverseProxyIPLoginLimit /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
