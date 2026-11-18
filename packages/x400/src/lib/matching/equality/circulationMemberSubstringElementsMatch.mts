import { ASN1Element, ASN1TagClass, ASN1UniversalType } from "@wildboar/asn1";
import type { AttributeType } from "@wildboar/x500/InformationFramework";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import { oRDescriptorSubstringElementsMatchTyped } from "./oRDescriptorSubstringElementsMatch.mjs";

// CirculationMember ::= SET {
//     circulation-recipient
//       RecipientSpecifier
//         (WITH COMPONENTS {
//            ...,
//            recipient  (WITH COMPONENTS {
//                          ...,
//                          formal-name  PRESENT
//                        })
//          }),
//     checked                Checkmark OPTIONAL
// }

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
function circulationMemberSubstringElementsMatchTyped(
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const assertionCirculationRecipientElement = assertion.set.find((el) => (
        (el.tagClass === ASN1TagClass.universal)
        && (el.tagNumber === ASN1UniversalType.set)
    ));
    const valueCirculationRecipientElement = value.set.find((el) => (
        (el.tagClass === ASN1TagClass.universal)
        && (el.tagNumber === ASN1UniversalType.set)
    ));
    // This should not happen, because it is a required field.
    if (!assertionCirculationRecipientElement || !valueCirculationRecipientElement) {
        return false;
    }
    const assertionRecipientElement = assertionCirculationRecipientElement.set.find((el) => (
        (el.tagClass === ASN1TagClass.context)
        && (el.tagNumber === 0)
    ));
    const valueRecipientElement = valueCirculationRecipientElement.set.find((el) => (
        (el.tagClass === ASN1TagClass.context)
        && (el.tagNumber === 0)
    ));
    // This should not happen, because it is a required field.
    if (!assertionRecipientElement || !valueRecipientElement) {
        return false;
    }
    return oRDescriptorSubstringElementsMatchTyped(
        assertionRecipientElement,
        valueRecipientElement,
        getEqualityMatcher,
        flags,
    );
}

circulationMemberSubstringElementsMatchTyped satisfies TypedEquationFunction<ASN1Element>;

export
const circulationMemberSubstringElementsMatch: Matcher = createEqualityMatcher(
    (el: ASN1Element): ASN1Element => el,
    circulationMemberSubstringElementsMatchTyped,
);

export default circulationMemberSubstringElementsMatch;
