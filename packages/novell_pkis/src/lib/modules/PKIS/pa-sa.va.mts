/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { pkiAttributeType } from "../PKIS/pkiAttributeType.va.mjs";


/**
 * @summary pa_sa
 * @description
 *
 * Object identifier of the Novell Security Attributes extension
 * (`securityAttributes`): `2.16.840.1.113719.1.9.4.1`. The extension
 * value is `SecurityAttributes`. It is included in NICI and PKIS
 * certificates. The critical flag is TRUE only on the NICI Licensed CA
 * certificate, so that an X.509-compliant relying party which does not
 * understand the extension will reject that chain. Certificates above
 * and below that CA leave the extension non-critical, so a closed group
 * can install a self-signed Tree CA out of band. §3.2.
 *
 * The module comment prints `2.16.840.113719.1.9.4.1`, which drops the
 * `organization(1)` arc present in the `novell` assignment.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pa-sa OBJECT IDENTIFIER ::= { pkiAttributeType 1 }
 * ```
 * 
 * @constant
 */
export
const pa_sa: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], pkiAttributeType);

/* eslint-enable */
