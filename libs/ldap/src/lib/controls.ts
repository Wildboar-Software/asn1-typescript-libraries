import { ObjectIdentifier } from "asn1-ts";

/**
 * Matched Values Control [RFC3876]
 */
export const matchedValues = new ObjectIdentifier([ 1,2,826,0,1,3344810,2,3 ]);

/**
 * LDAP Simple Paged Results Control [RFC2696]
 */
export const simpledPagedResults = new ObjectIdentifier([ 1,2,840,113556,1,4,319 ]);

/**
 * Sort Request [RFC2891]
 */
export const sortRequest = new ObjectIdentifier([ 1,2,840,113556,1,4,473 ]);

/**
 * Sort Response [RFC2891]
 */
export const sortResponse = new ObjectIdentifier([ 1,2,840,113556,1,4,474 ]);

/**
 * LCUP Sync Request Control [RFC3928]
 */
export const lcupSyncRequest = new ObjectIdentifier([ 1,3,6,1,1,7,1 ]);

/**
 * LCUP Sync Update Control [RFC3928]
 */
export const lcupSyncUpdate = new ObjectIdentifier([ 1,3,6,1,1,7,2 ]);

/**
 * LCUP Sync Done Control [RFC3928]
 */
export const lcupSyncDone = new ObjectIdentifier([ 1,3,6,1,1,7,3 ]);

/**
 * Assertion Control [RFC4528]
 */
export const assertion = new ObjectIdentifier([ 1,3,6,1,1,12 ]);

/**
 * LDAP Pre-read Control [RFC4527]
 */
export const preread = new ObjectIdentifier([ 1,3,6,1,1,13,1 ]);

/**
 * LDAP Post-read Control [RFC4527]
 */
export const postread = new ObjectIdentifier([ 1,3,6,1,1,13,2 ]);

/**
 * Transaction Specification Control [RFC5805]
 */
export const transactionSpecification = new ObjectIdentifier([ 1,3,6,1,1,21,2 ]);

/**
 * LDAP Content Synchronization Control [RFC4533]
 */
export const contentSynchronization = new ObjectIdentifier([ 1,3,6,1,4,1,4203,1,9,1,1 ]);

/**
 * Subentries [RFC3672]
 */
export const subentries = new ObjectIdentifier([ 1,3,6,1,4,1,4203,1,10,1 ]);

/**
 * ManageDsaIT [RFC3296]
 */
export const managedDSAIT = new ObjectIdentifier([ 2,16,840,1,113730,3,4,2 ]);

/**
 * Authorization Identity Response Control [RFC3829]
 */
export const authorizationIdentityResponse = new ObjectIdentifier([ 2,16,840,1,113730,3,4,15 ]);

/**
 * Authorization Identity Request Control [RFC3829]
 */
export const authorizationIdentityRequest = new ObjectIdentifier([ 2,16,840,1,113730,3,4,16 ]);

/**
 * Proxy Authorization Control [RFC4370]
 */
export const proxyAuthorization = new ObjectIdentifier([ 2,16,840,1,113730,3,4,18 ]);

/**
 * LDAP Don't Use Copy Control [RFC6171]
 */
export const dontUseCopy = new ObjectIdentifier([ 1,3,6,1,1,22 ]);
