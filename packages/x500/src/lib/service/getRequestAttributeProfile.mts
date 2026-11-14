import type { DotDelimitedOidString } from "@wildboar/asn1";
import type { AttributeType } from "@wildboar/x500/InformationFramework";
import type { RequestAttribute } from "@wildboar/x500/ServiceAdministration";

/**
 * Resolve the request attribute profile that governs a filter item's type.
 *
 * An exact profile takes precedence over ancestor profiles. Otherwise, the
 * nearest ancestor with a profile applies only if it includes subtypes; a
 * nearer profile that excludes subtypes stops the lookup.
 *
 * @param attributeType The attribute type asserted in the filter item
 * @param profiles The profiles indexed by their attribute type OIDs
 * @param getAttributeParentTypes The attribute's ancestors, nearest first;
 *  the iterator may also include the asserted attribute type itself
 * @returns The applicable profile, or undefined if the type is not permitted
 * @internal
 */
export function getRequestAttributeProfile(
    attributeType: AttributeType,
    profiles: ReadonlyMap<DotDelimitedOidString, RequestAttribute>,
    getAttributeParentTypes: (attributeType: AttributeType) => IterableIterator<AttributeType>,
): RequestAttribute | undefined {
    const exact_profile = profiles.get(attributeType.toString());
    if (exact_profile) {
        return exact_profile;
    }
    for (const parent of getAttributeParentTypes(attributeType)) {
        const profile = profiles.get(parent.toString());
        if (profile) {
            return profile.includeSubtypes ? profile : undefined;
        }
    }
    return undefined;
}
