import { ObjectIdentifier } from "asn1-ts";

/**
 * Modify-Increment [RFC4525]
 */
export const modifyIncrement = new ObjectIdentifier([1,3,6,1,1,14 ]);

/**
 * All Op Attrs [RFC3673]
 */
export const allOpAttrs = new ObjectIdentifier([1,3,6,1,4,1,4203,1,5,1 ]);

/**
 * OC AD Lists [RFC4529]
 */
export const ocadLists = new ObjectIdentifier([1,3,6,1,4,1,4203,1,5,2 ]);

/**
 * True/False filters [RFC4526]
 */
export const trueFalseFilters = new ObjectIdentifier([1,3,6,1,4,1,4203,1,5,3 ]);

/**
 * Language Tag Options [RFC3866]
 */
export const languageTag = new ObjectIdentifier([1,3,6,1,4,1,4203,1,5,4 ]);

/**
 * Language Range Options [RFC3866]
 */
export const languageRange = new ObjectIdentifier([1,3,6,1,4,1,4203,1,5,5 ]);

/**
 * LBURP Incremental Update style OID [RFC4373]
 */
export const lburpIncrementalUpdateStyle = new ObjectIdentifier([1,3,6,1,1,17,7 ]);
