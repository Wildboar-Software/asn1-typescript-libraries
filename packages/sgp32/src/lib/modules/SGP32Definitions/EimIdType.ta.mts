/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EimIdType
 * @description
 * 
 * How an eimId string is formed (SGP.32 v1.2, sections 2.11.1.1 and 4.3). An
 * operator that holds or can request an OID should use eimIdTypeOid. When the
 * type is omitted on add, the eUICC stores eimIdTypeProprietary.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EimIdType  ::=  INTEGER {
 *     eimIdTypeOid(1),
 *     eimIdTypeFqdn(2),
 *     eimIdTypeProprietary(3)
 * }
 * ```
 */
export
type EimIdType = INTEGER;

/**
 * @summary EimIdType_eimIdTypeOid
 * @constant
 * @type {number}
 * @description
 * eimId is an OID in dotted form, taken from the IANA enterprise-numbers
 * registry. Child nodes are chosen by the eIM owner (SGP.32 v1.2, section
 * 4.3). https://www.iana.org/assignments/enterprise-numbers/enterprise-numbers
 */
export
const EimIdType_eimIdTypeOid: EimIdType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EimIdType_eimIdTypeOid
 * @constant
 * @type {number}
 * @description
 * eimId is an OID from the IANA enterprise-numbers registry (SGP.32 v1.2,
 * section 4.3).
 */
export
const eimIdTypeOid: EimIdType = EimIdType_eimIdTypeOid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EimIdType_eimIdTypeFqdn
 * @constant
 * @type {number}
 * @description
 * eimId is a fully qualified domain name, for example eim.enterprise.com
 * (SGP.32 v1.2, section 4.3). In that EimConfigurationData, eimFqdn is
 * omitted.
 */
export
const EimIdType_eimIdTypeFqdn: EimIdType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EimIdType_eimIdTypeFqdn
 * @constant
 * @type {number}
 * @description
 * eimId is a fully qualified domain name, and eimFqdn is omitted (SGP.32 v1.2,
 * sections 4.3 and 2.11.1.1).
 */
export
const eimIdTypeFqdn: EimIdType = EimIdType_eimIdTypeFqdn; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EimIdType_eimIdTypeProprietary
 * @constant
 * @type {number}
 * @description
 * eimId is an operator-chosen string of 1 to 128 bytes (SGP.32 v1.2, section
 * 4.3). The eUICC stores this type when eimIdType is omitted on add (section
 * 2.11.1.1).
 */
export
const EimIdType_eimIdTypeProprietary: EimIdType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EimIdType_eimIdTypeProprietary
 * @constant
 * @type {number}
 * @description
 * eimId is an operator-chosen string; the eUICC also assigns this type when
 * eimIdType is omitted on add (SGP.32 v1.2, sections 4.3 and 2.11.1.1).
 */
export
const eimIdTypeProprietary: EimIdType = EimIdType_eimIdTypeProprietary; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EimIdType: $.ASN1Decoder<EimIdType> = $._decodeInteger;
export const _encode_EimIdType: $.ASN1Encoder<EimIdType> = $._encodeInteger;


/* eslint-enable */
