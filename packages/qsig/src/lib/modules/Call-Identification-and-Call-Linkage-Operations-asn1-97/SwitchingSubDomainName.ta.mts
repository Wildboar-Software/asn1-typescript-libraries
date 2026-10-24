/* eslint-disable */
import {
    type IA5String,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SwitchingSubDomainName
 * @description
 *
 * Name of the switching sub-domain that created the call-identification data
 * (ECMA-314 Annex D, from ECMA-269 §12.2.5). Required when linkageID is not
 * globally unique; may be omitted when it is. The switching function must
 * make the name unique within the switching domain. Length 1..64. When two
 * linkage identifiers and their timestamps compare equal, the higher binary
 * value of this name wins (ECMA-314 §6.5.2.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-314/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SwitchingSubDomainName  ::=  IA5String (SIZE(1..64))
 * ```
 */
export
type SwitchingSubDomainName = IA5String; // IA5String

export
const _decode_SwitchingSubDomainName = (el: _Element): SwitchingSubDomainName => {
    const value = $._decodeIA5String(el);
    if (value.length < 1 || value.length > 64) {
        throw new ASN1SizeError("SwitchingSubDomainName violates SIZE constraint");
    }
    return value;
};

export
const _encode_SwitchingSubDomainName: $.ASN1Encoder<SwitchingSubDomainName> = $._encodeIA5String;

/* eslint-enable */
