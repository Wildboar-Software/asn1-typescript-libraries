/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BppCommandId
 * @description
 * 
 * Which ES8+ command failed inside a Bound Profile Package. SGP.22 v3.1
 * §2.5.6.1. `storeMetadata2` is allocated in Annex H and is not given a
 * separate function description there.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BppCommandId  ::=  INTEGER {initialiseSecureChannel(0), configureISDP(1), storeMetadata(2), storeMetadata2(3), replaceSessionKeys(4), loadProfileElements(5)}
 * ```
 */
export
type BppCommandId = INTEGER;

/**
 * @summary BppCommandId_initialiseSecureChannel
 * @description
 * 
 * ES8+.InitialiseSecureChannel failed. SGP.22 v3.1 §5.5.1.
 * 
 * @constant
 * @type {number}
 */
export
const BppCommandId_initialiseSecureChannel: BppCommandId = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BppCommandId_initialiseSecureChannel
 * @description
 * 
 * ES8+.InitialiseSecureChannel failed. SGP.22 v3.1 §5.5.1.
 * 
 * @constant
 * @type {number}
 */
export
const initialiseSecureChannel: BppCommandId = BppCommandId_initialiseSecureChannel; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BppCommandId_configureISDP
 * @description
 * 
 * ES8+.ConfigureISDP failed. SGP.22 v3.1 §5.5.2.
 * 
 * @constant
 * @type {number}
 */
export
const BppCommandId_configureISDP: BppCommandId = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BppCommandId_configureISDP
 * @description
 * 
 * ES8+.ConfigureISDP failed. SGP.22 v3.1 §5.5.2.
 * 
 * @constant
 * @type {number}
 */
export
const configureISDP: BppCommandId = BppCommandId_configureISDP; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BppCommandId_storeMetadata
 * @description
 * 
 * ES8+.StoreMetadata failed. SGP.22 v3.1 §5.5.3.
 * 
 * @constant
 * @type {number}
 */
export
const BppCommandId_storeMetadata: BppCommandId = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BppCommandId_storeMetadata
 * @description
 * 
 * ES8+.StoreMetadata failed. SGP.22 v3.1 §5.5.3.
 * 
 * @constant
 * @type {number}
 */
export
const storeMetadata: BppCommandId = BppCommandId_storeMetadata; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BppCommandId_storeMetadata2
 * @description
 * 
 * Value 3. Allocated in SGP.22 v3.1 Annex H. That annex does not describe a
 * separate ES8+ function for this code.
 * 
 * @constant
 * @type {number}
 */
export
const BppCommandId_storeMetadata2: BppCommandId = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BppCommandId_storeMetadata2
 * @description
 * 
 * Value 3. Allocated in SGP.22 v3.1 Annex H. That annex does not describe a
 * separate ES8+ function for this code.
 * 
 * @constant
 * @type {number}
 */
export
const storeMetadata2: BppCommandId = BppCommandId_storeMetadata2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BppCommandId_replaceSessionKeys
 * @description
 * 
 * ES8+.ReplaceSessionKeys failed. SGP.22 v3.1 §5.5.4.
 * 
 * @constant
 * @type {number}
 */
export
const BppCommandId_replaceSessionKeys: BppCommandId = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BppCommandId_replaceSessionKeys
 * @description
 * 
 * ES8+.ReplaceSessionKeys failed. SGP.22 v3.1 §5.5.4.
 * 
 * @constant
 * @type {number}
 */
export
const replaceSessionKeys: BppCommandId = BppCommandId_replaceSessionKeys; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BppCommandId_loadProfileElements
 * @description
 * 
 * ES8+.LoadProfileElements failed while processing Profile Elements. SGP.22
 * v3.1 §5.5.5.
 * 
 * @constant
 * @type {number}
 */
export
const BppCommandId_loadProfileElements: BppCommandId = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BppCommandId_loadProfileElements
 * @description
 * 
 * ES8+.LoadProfileElements failed while processing Profile Elements. SGP.22
 * v3.1 §5.5.5.
 * 
 * @constant
 * @type {number}
 */
export
const loadProfileElements: BppCommandId = BppCommandId_loadProfileElements; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_BppCommandId = $._decodeInteger;
export const _encode_BppCommandId = $._encodeInteger;


/* eslint-enable */
