import { ASN1Element, ASN1TagClass } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import { oRDescriptorElementsMatchTyped } from "./oRDescriptorElementsMatch.mjs";

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
function recipientSpecifierElementsMatchTyped(
    assertion: ASN1Element,
    value: ASN1Element,
): boolean | undefined {
    const assertionRecipientElement = assertion.set.find((el) => (
        (el.tagClass === ASN1TagClass.context)
        && (el.tagNumber === 0)
    ));
    const valueRecipientElement = value.set.find((el) => (
        (el.tagClass === ASN1TagClass.context)
        && (el.tagNumber === 0)
    ));
    if (!valueRecipientElement || !assertionRecipientElement) { // This should not happen, because it is a required field.
        return false;
    }
    return oRDescriptorElementsMatchTyped(assertionRecipientElement, valueRecipientElement);
}

recipientSpecifierElementsMatchTyped satisfies TypedEquationFunction<ASN1Element>;

export
const recipientSpecifierElementsMatch: Matcher = createEqualityMatcher(
    (el: ASN1Element): ASN1Element => el,
    recipientSpecifierElementsMatchTyped,
);

export default recipientSpecifierElementsMatch;
