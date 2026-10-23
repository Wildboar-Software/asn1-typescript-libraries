/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UserToConnect
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserToConnect  ::=  ENUMERATED {first(0), nofirst(1), newone(2), previous(3)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_UserToConnect {
    first = 0,
    nofirst = 1,
    newone = 2,
    previous = 3,
}

/**
 * @summary UserToConnect
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserToConnect  ::=  ENUMERATED {first(0), nofirst(1), newone(2), previous(3)}
 * ```
 * 
 * @enum {number}
 */
export
type UserToConnect = _enum_for_UserToConnect;

/**
 * @summary UserToConnect
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserToConnect  ::=  ENUMERATED {first(0), nofirst(1), newone(2), previous(3)}
 * ```
 * 
 * @enum {number}
 */
export
const UserToConnect = _enum_for_UserToConnect;

/**
 * @summary UserToConnect_first
 * @constant
 * @type {number}
 */
export
const UserToConnect_first: UserToConnect = UserToConnect.first; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary first
 * @constant
 * @type {number}
 */
export
const first: UserToConnect = UserToConnect.first; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UserToConnect_nofirst
 * @constant
 * @type {number}
 */
export
const UserToConnect_nofirst: UserToConnect = UserToConnect.nofirst; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nofirst
 * @constant
 * @type {number}
 */
export
const nofirst: UserToConnect = UserToConnect.nofirst; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UserToConnect_newone
 * @constant
 * @type {number}
 */
export
const UserToConnect_newone: UserToConnect = UserToConnect.newone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary newone
 * @constant
 * @type {number}
 */
export
const newone: UserToConnect = UserToConnect.newone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UserToConnect_previous
 * @constant
 * @type {number}
 */
export
const UserToConnect_previous: UserToConnect = UserToConnect.previous; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary previous
 * @constant
 * @type {number}
 */
export
const previous: UserToConnect = UserToConnect.previous; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_UserToConnect: $.ASN1Decoder<UserToConnect> = $._decodeEnumerated;

export
const _encode_UserToConnect: $.ASN1Encoder<UserToConnect> = $._encodeEnumerated;

/* eslint-enable */
