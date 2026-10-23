/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PrivateEnterpriseNumber
 * @description
 *
 * IANA Private Enterprise Number, encoded as an object identifier. Used for a
 * platform or component manufacturer.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.5 and §4.2.10.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateEnterpriseNumber  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type PrivateEnterpriseNumber = OBJECT_IDENTIFIER; // ObjectIdentifierType

export
const _decode_PrivateEnterpriseNumber: $.ASN1Decoder<PrivateEnterpriseNumber> = $._decodeObjectIdentifier;

export
const _encode_PrivateEnterpriseNumber: $.ASN1Encoder<PrivateEnterpriseNumber> = $._encodeObjectIdentifier;

/* eslint-enable */
