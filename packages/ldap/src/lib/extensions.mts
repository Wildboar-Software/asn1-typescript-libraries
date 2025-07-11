import { ObjectIdentifier, type OBJECT_IDENTIFIER } from "@wildboar/asn1";

/**
 * Cancel Operation [RFC3909]
 */
export const cancel: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([ 1,3,6,1,1,8 ]);

/**
 * Start Transaction Extended Request [RFC5805]
 */
export const startTransactionExtendedRequest: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([ 1,3,6,1,1,21,1 ]);

/**
 * End Transaction Extended Request [RFC5805]
 */
export const endTransactionExtendedRequest: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([ 1,3,6,1,1,21,3 ]);

/**
 * Dynamic Refresh [RFC2589]
 */
export const dynamicRefresh: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([ 1,3,6,1,4,1,1466,101,119,1 ]);

/**
 * StartTLS [RFC4511][RFC4513]
 */
export const startTLS: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([ 1,3,6,1,4,1,1466,20037 ]);

/**
 * Modify Password [RFC3062]
 */
export const modifyPassword: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([ 1,3,6,1,4,1,4203,1,11,1 ]);

/**
 * Who am I? [RFC4532]
 */
export const whoAmI: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([ 1,3,6,1,4,1,4203,1,11,3 ]);

/**
 * StartLBURPRequest LDAP ExtendedRequest message [RFC4373]
 */
export const startLBURPRequest: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([ 1,3,6,1,1,17,1 ]);

/**
 * StartLBURPResponse LDAP ExtendedResponse message [RFC4373]
 */
export const startLBURPResponse: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([ 1,3,6,1,1,17,2 ]);

/**
 * EndLBURPRequest LDAP ExtendedRequest message [RFC4373]
 */
export const endLBURPRequest: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([ 1,3,6,1,1,17,3 ]);

/**
 * EndLBURPResponse LDAP ExtendedResponse message [RFC4373]
 */
export const endLBURPResponse: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([ 1,3,6,1,1,17,4 ]);

/**
 * LBURPUpdateRequest LDAP ExtendedRequest message [RFC4373]
 */
export const lburpUpdateRequest: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([ 1,3,6,1,1,17,5 ]);

/**
 * LBURPUpdateResponse LDAP ExtendedResponse message [RFC4373]
 */
export const lburpUpdateResponse: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([ 1,3,6,1,1,17,6 ]);

/**
 * LDAP Turn Operation [RFC4531]
 */
export const turn: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([ 1,3,6,1,1,19 ]);
