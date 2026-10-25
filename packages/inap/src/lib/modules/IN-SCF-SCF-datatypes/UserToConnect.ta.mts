/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
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
const UserToConnect: typeof _enum_for_UserToConnect = _enum_for_UserToConnect;

/**
 * @summary UserToConnect_first
 * @constant
 * @type {number}
 */
export
const UserToConnect_first: _enum_for_UserToConnect.first = UserToConnect.first; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary first
 * @constant
 * @type {number}
 */
export
const first: _enum_for_UserToConnect.first = UserToConnect.first; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UserToConnect_nofirst
 * @constant
 * @type {number}
 */
export
const UserToConnect_nofirst: _enum_for_UserToConnect.nofirst = UserToConnect.nofirst; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nofirst
 * @constant
 * @type {number}
 */
export
const nofirst: _enum_for_UserToConnect.nofirst = UserToConnect.nofirst; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UserToConnect_newone
 * @constant
 * @type {number}
 */
export
const UserToConnect_newone: _enum_for_UserToConnect.newone = UserToConnect.newone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary newone
 * @constant
 * @type {number}
 */
export
const newone: _enum_for_UserToConnect.newone = UserToConnect.newone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UserToConnect_previous
 * @constant
 * @type {number}
 */
export
const UserToConnect_previous: _enum_for_UserToConnect.previous = UserToConnect.previous; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary previous
 * @constant
 * @type {number}
 */
export
const previous: _enum_for_UserToConnect.previous = UserToConnect.previous; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_UserToConnect(el: _Element): UserToConnect {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case UserToConnect.first: return UserToConnect.first;
        case UserToConnect.nofirst: return UserToConnect.nofirst;
        case UserToConnect.newone: return UserToConnect.newone;
        case UserToConnect.previous: return UserToConnect.previous;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for UserToConnect.",
                el,
            );
    }
}

export
const _encode_UserToConnect: $.ASN1Encoder<UserToConnect> = $._encodeEnumerated as $.ASN1Encoder<UserToConnect>;

/* eslint-enable */
