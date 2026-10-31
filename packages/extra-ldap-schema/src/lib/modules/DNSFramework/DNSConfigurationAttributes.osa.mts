/* eslint-disable */
import { type ATTRIBUTE} from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { dnsServiceURL } from "../DNSFramework/dnsServiceURL.oa.mjs";
// export { dnsServiceURL } from "../DNSFramework/dnsServiceURL.oa.mjs";
import { dnsSearchDomain } from "../DNSFramework/dnsSearchDomain.oa.mjs";
// export { dnsSearchDomain } from "../DNSFramework/dnsSearchDomain.oa.mjs";
import { dnsRequestAttempts } from "../DNSFramework/dnsRequestAttempts.oa.mjs";
// export { dnsRequestAttempts } from "../DNSFramework/dnsRequestAttempts.oa.mjs";
import { dnsTimeoutInMilliseconds } from "../DNSFramework/dnsTimeoutInMilliseconds.oa.mjs";
// export { dnsTimeoutInMilliseconds } from "../DNSFramework/dnsTimeoutInMilliseconds.oa.mjs";
import { dnsResolverRotation } from "../DNSFramework/dnsResolverRotation.oa.mjs";
// export { dnsResolverRotation } from "../DNSFramework/dnsResolverRotation.oa.mjs";
import { dnsIPv6First } from "../DNSFramework/dnsIPv6First.oa.mjs";
// export { dnsIPv6First } from "../DNSFramework/dnsIPv6First.oa.mjs";
import { dnsNoTLDQuery } from "../DNSFramework/dnsNoTLDQuery.oa.mjs";
// export { dnsNoTLDQuery } from "../DNSFramework/dnsNoTLDQuery.oa.mjs";


/**
 * @summary DNSConfigurationAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNSConfigurationAttributes ATTRIBUTE ::= {
 *     dnsServiceURL
 *     | dnsSearchDomain
 *     | dnsRequestAttempts
 *     | dnsTimeoutInMilliseconds
 *     | dnsResolverRotation
 *     | dnsIPv6First
 *     | dnsNoTLDQuery,
 *     ...
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE[]}
 * 
 */
export
const DNSConfigurationAttributes: (ATTRIBUTE)[] = [ dnsServiceURL, dnsSearchDomain, dnsRequestAttempts, dnsTimeoutInMilliseconds, dnsResolverRotation, dnsIPv6First, dnsNoTLDQuery, ];

/* eslint-enable */
