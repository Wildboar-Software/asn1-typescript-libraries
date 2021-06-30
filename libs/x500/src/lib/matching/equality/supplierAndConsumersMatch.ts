import type EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element, OBJECT_IDENTIFIER } from "asn1-ts";
import {
    SupplierAndConsumers,
    _decode_SupplierAndConsumers,
} from "../../modules/DSAOperationalAttributeTypes/SupplierAndConsumers.ta";
import {
    Name,
    _decode_Name,
} from "../../modules/InformationFramework/Name.ta";
import { compareName } from "../../comparators";

export
const supplierAndConsumersMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean => {
    const a: Name = _decode_Name(assertion);
    const v: SupplierAndConsumers = _decode_SupplierAndConsumers(value);
    return compareName(a, v.ae_title, getEqualityMatcher);
}

export default supplierAndConsumersMatch;
