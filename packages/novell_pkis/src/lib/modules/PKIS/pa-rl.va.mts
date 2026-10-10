/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { pkiAttributeType } from "../PKIS/pkiAttributeType.va.mjs";


/**
 * @summary pa_rl
 * @description
 *
 * Object identifier of the Reliance Limits attribute (`relianceLimit`):
 * `2.16.840.1.113719.1.9.4.2`. The value is `RelianceLimits`. It is a
 * separate attribute, not one of the four components inside the Novell
 * Security Attributes extension, because reliance limits are not treated
 * uniformly across jurisdictions and a chain-wide comparison is not
 * clearly useful. §2 and §3. The initial PKIS release does not put this
 * attribute in the certificates it creates.
 *
 * The module comment prints `2.16.840.113719.1.9.4.2`, which drops the
 * `organization(1)` arc present in the `novell` assignment. The
 * commented `EXTENSION` production in Appendix F is not compiled.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pa-rl OBJECT IDENTIFIER ::= { pkiAttributeType 2 }
 * ```
 * 
 * @constant
 */
export
const pa_rl: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], pkiAttributeType);

/* eslint-enable */
