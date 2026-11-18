import { ASN1Element, ASN1TagClass, ASN1UniversalType } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import { oRDescriptorSingleElementMatchTyped } from "./oRDescriptorSingleElementMatch.mjs";

// RecipientSpecifier ::= SET {
//     recipient              [0]  ORDescriptor,
//     notification-requests  [1]  NotificationRequests DEFAULT {},
//     reply-requested        [2]  BOOLEAN DEFAULT FALSE,
//     recipient-extensions   [3]  RecipientExtensionsField OPTIONAL
// }

// ORDescriptor ::= SET {
//     formal-name       ORName OPTIONAL,
//     free-form-name    [0]  FreeFormName OPTIONAL,
//     telephone-number  [1]  TelephoneNumber OPTIONAL
// }

// FreeFormName ::= TeletexString(SIZE (0..ub-free-form-name))

// TelephoneNumber ::= PrintableString(SIZE (0..ub-telephone-number))

export
function circulationMemberSingleElementMatchTyped(
    assertion: ASN1Element,
    value: ASN1Element,
): boolean | undefined {
    const valueCirculationRecipientElement = value.set.find((el) => (
        (el.tagClass === ASN1TagClass.universal)
        && (el.tagNumber === ASN1UniversalType.set)
    ));
    // This should not happen, because it is a required field.
    if (!valueCirculationRecipientElement) {
        return false;
    }
    const valueRecipientElement = valueCirculationRecipientElement.set.find((el) => (
        (el.tagClass === ASN1TagClass.context)
        && (el.tagNumber === 0)
    ));
    // This should not happen, because it is a required field.
    if (!valueRecipientElement) {
        return false;
    }
    return oRDescriptorSingleElementMatchTyped(assertion, valueRecipientElement);
}

circulationMemberSingleElementMatchTyped satisfies TypedEquationFunction<ASN1Element>;

export
const circulationMemberSingleElementMatch: Matcher = createEqualityMatcher(
    (el: ASN1Element): ASN1Element => el,
    circulationMemberSingleElementMatchTyped,
);

export default circulationMemberSingleElementMatch;
