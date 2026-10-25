/* eslint-disable */
import {
    type RELATIVE_OID
} from "@wildboar/asn1";
import { tS33128IdentityAssociationOID } from "../TS33128IdentityAssociation/tS33128IdentityAssociationOID.va.mjs";
// export { tS33128IdentityAssociationOID } from "../TS33128IdentityAssociation/tS33128IdentityAssociationOID.va.mjs";


/**
 * @summary iEFRecordOID
 * @description
 * 
 * The ASN.1 schema describing the structures used for LI_XER is given in the
 * file TS33128IdentityAssociation.asn which accompanies the present document.
 *
 * 3GPP TS 33.128, Annex F.
 * https://www.3gpp.org/DynaReport/33128.htm
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
