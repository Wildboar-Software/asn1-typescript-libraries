/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { tS33128IdentityAssociationOID } from "../TS33128IdentityAssociation/tS33128IdentityAssociationOID.va.mjs";
// export { tS33128IdentityAssociationOID } from "../TS33128IdentityAssociation/tS33128IdentityAssociationOID.va.mjs";


/**
 * @summary iEFRecordOID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iEFRecordOID RELATIVE-OID ::= {tS33128IdentityAssociationOID iEF(1)}
 * ```
 * 
 * @constant
 */
export
const iEFRecordOID: RELATIVE_OID = [ ...tS33128IdentityAssociationOID, /* iEF */ 1 ];

/* eslint-enable */
