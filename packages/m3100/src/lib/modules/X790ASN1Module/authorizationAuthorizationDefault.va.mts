/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import {
    AuthorizationList,
    _decode_AuthorizationList,
    _encode_AuthorizationList,
} from '../X790ASN1Module/AuthorizationList.ta.mjs';
import {
    _enum_for_RequestState,
    RequestState_provided /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_RequestState,
    _encode_RequestState,
} from '../X790ASN1Module/RequestState.ta.mjs';
import {
    _decode_ActivityType,
    _encode_ActivityType,
} from '../X790ASN1Module/ActivityType.ta.mjs';
import {
    _decode_AuthorizationTime,
    _encode_AuthorizationTime,
} from '../X790ASN1Module/AuthorizationTime.ta.mjs';
import {
    _decode_PersonReach,
    _encode_PersonReach,
} from '../X790ASN1Module/PersonReach.ta.mjs';
import { AuthorizationList_Item } from '../X790ASN1Module/AuthorizationList-Item.ta.mjs';


/**
 * @summary authorizationAuthorizationDefault
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authorizationAuthorizationDefault AuthorizationList ::= {{state provided, type '000000000'B}}
 * ```
 *
 * @constant
 */
export const authorizationAuthorizationDefault: AuthorizationList = [
    new AuthorizationList_Item(
        RequestState_provided,
        new Uint8ClampedArray([0, 0, 0, 0, 0, 0, 0, 0, 0]),
        undefined,
        undefined,
    ),
];

/* eslint-enable */
