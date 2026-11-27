import { SearchRule } from "@wildboar/x500/ServiceAdministration";
import { TRUE_BIT, type BIT_STRING, ObjectIdentifier, FALSE_BIT } from "@wildboar/asn1";
import {
    HierarchySelections_children,
    HierarchySelections_self,
    SearchControlOptions_checkOverspecified, // 2
    SearchControlOptions_dnAttribute, // 6
    SearchControlOptions_searchAliases,
    ServiceControlOptions_allowWriteableCopy, // 14
    ServiceControlOptions_manageDSAIT, // 8
} from "@wildboar/x500/DirectoryAbstractService";
import { ControlOptions } from "@wildboar/x500/ServiceAdministration";
import { type EffectiveControls, getEffectiveControlsFromSearchRule } from "./getEffectiveControlsFromSearchRule.mjs";
import { SearchArgumentData, ServiceControls } from "@wildboar/x500/DirectoryAbstractService";
import { checkOfControlsAndHierarchySelections } from "./checkOfControlsAndHierarchySelections.mjs";

const rule_oid = ObjectIdentifier.fromString("1.2.3.4");

const BITS_WE_USE = 16;

function intToBits(int: number): BIT_STRING {
    const ret = new Uint8ClampedArray(BITS_WE_USE);
    for (let i = 0; i < BITS_WE_USE; i++) {
        ret[i] = (int & (1 << i)) ? TRUE_BIT : FALSE_BIT;
    }
    return ret;
}


describe("getEffectiveControlsFromSearchRule", () => {
    describe("search-rule override masks", () => {
        const hs_self = 1 << HierarchySelections_self;
        const hs_children = 1 << HierarchySelections_children;
        const search_aliases = 1 << SearchControlOptions_searchAliases;
        const search_dn = 1 << SearchControlOptions_dnAttribute;
        const search_check = 1 << SearchControlOptions_checkOverspecified;
        const service_copy = 1 << ServiceControlOptions_allowWriteableCopy;
        const service_manage = 1 << ServiceControlOptions_manageDSAIT;

        function getRule(defaults?: ControlOptions, overrides?: ControlOptions): SearchRule {
            return new SearchRule(
                1, rule_oid, undefined, undefined, undefined, undefined, undefined,
                defaults, undefined, overrides,
            );
        }

        const defaults = new ControlOptions(
            intToBits(service_copy),
            intToBits(search_aliases | search_dn),
            intToBits(hs_self | hs_children),
        );
        const cases: {
            name: string;
            defaults?: ControlOptions;
            hs?: BIT_STRING;
            search?: BIT_STRING;
            service?: BIT_STRING;
            expected: EffectiveControls;
        }[] = [
            {
                name: "an explicitly cleared searchAliases bit",
                search: new Uint8ClampedArray([FALSE_BIT]),
                expected: { hs: intToBits(hs_self), search: intToBits(0), service: intToBits(0) },
            },
            {
                name: "an explicitly cleared self hierarchy bit",
                hs: new Uint8ClampedArray([FALSE_BIT]),
                expected: { hs: intToBits(0), search: intToBits(search_aliases), service: intToBits(0) },
            },
            {
                name: "explicit user choices that differ from rule defaults",
                defaults,
                hs: intToBits(hs_children),
                search: intToBits(search_check),
                service: intToBits(service_manage),
                expected: { hs: intToBits(hs_children), search: intToBits(search_check), service: intToBits(service_manage) },
            },
            {
                name: "short user strings supplemented by trailing default bits",
                defaults,
                hs: new Uint8ClampedArray([FALSE_BIT]),
                search: intToBits(search_check).slice(0, SearchControlOptions_checkOverspecified + 1),
                service: intToBits(service_manage).slice(0, ServiceControlOptions_manageDSAIT + 1),
                expected: {
                    hs: intToBits(hs_children),
                    search: intToBits(search_check | search_dn),
                    service: intToBits(service_manage | service_copy),
                },
            },
            {
                name: "omitted user controls filled from rule defaults",
                defaults,
                expected: {
                    hs: intToBits(hs_self | hs_children),
                    search: intToBits(search_aliases | search_dn),
                    service: intToBits(service_copy),
                },
            },
            {
                name: "omitted user controls and standard defaults",
                expected: { hs: intToBits(hs_self), search: intToBits(search_aliases), service: intToBits(0) },
            },
        ];

        it.each(cases)("preserves $name when searchRuleControls is absent", ({ defaults, hs, search, service, expected }) => {
            const rule = getRule(defaults);
            const effective = getEffectiveControlsFromSearchRule(rule, hs, search, service);
            expect(effective).toEqual(expected);

            const argument = SearchArgumentData._from_object({
                baseObject: { rdnSequence: [] },
                hierarchySelections: hs,
                searchControlOptions: search,
                serviceControls: new ServiceControls(service),
                _unrecognizedExtensionsList: [],
            });
            const checked = checkOfControlsAndHierarchySelections(argument, rule);
            expect(checked.step_failed).toBeUndefined();
            expect(effective).toEqual({
                hs: checked.hierarchySelectList,
                search: checked.searchControlOptionsList,
                service: checked.serviceControlOptionsList,
            });
        });

        it("treats absent overrides like explicit all-zero override masks", () => {
            const hs = intToBits(hs_children);
            const search = intToBits(search_check);
            const service = intToBits(service_manage);
            const zero_masks = new ControlOptions(intToBits(0), intToBits(0), intToBits(0));
            expect(getEffectiveControlsFromSearchRule(getRule(defaults), hs, search, service)).toEqual(
                getEffectiveControlsFromSearchRule(getRule(defaults, zero_masks), hs, search, service),
            );
        });

        it("still allows explicit override masks to clear user-supplied bits", () => {
            const zero_defaults = new ControlOptions(intToBits(0), intToBits(0), intToBits(0));
            const overrides = new ControlOptions(intToBits(service_manage), intToBits(search_aliases), intToBits(hs_self));
            const result = getEffectiveControlsFromSearchRule(
                getRule(zero_defaults, overrides),
                intToBits(hs_self),
                intToBits(search_aliases),
                intToBits(service_manage),
            );
            expect(result).toEqual({ hs: intToBits(0), search: intToBits(0), service: intToBits(0) });
        });
    });

    it("should set effective controls using the searchRuleControls values", () => {
        const hs = new Uint8ClampedArray(HierarchySelections_children + 1);
        hs[HierarchySelections_children] = TRUE_BIT;
        const search_co = new Uint8ClampedArray(SearchControlOptions_dnAttribute + 1);
        search_co[SearchControlOptions_dnAttribute] = TRUE_BIT;
        const service_co = new Uint8ClampedArray(ServiceControlOptions_allowWriteableCopy + 1);
        service_co[ServiceControlOptions_allowWriteableCopy] = TRUE_BIT;
        const default_controls = new ControlOptions(
            service_co, // service_co
            search_co, // search_co
            hs,
        );
        const search_rule_controls = new ControlOptions(
            service_co, // service_co,
            search_co, // search_co,
            hs,
        );
        const rule = new SearchRule(
            1,
            rule_oid,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            default_controls, // default_controls
            undefined, // mandatory_controls
            search_rule_controls, // search_rule_controls
        );

        const user_search_co = new Uint8ClampedArray(SearchControlOptions_checkOverspecified + 1);
        user_search_co[SearchControlOptions_checkOverspecified] = TRUE_BIT;
        const user_service_co = new Uint8ClampedArray(ServiceControlOptions_manageDSAIT + 1);
        user_service_co[ServiceControlOptions_manageDSAIT] = TRUE_BIT;

        const result1 = getEffectiveControlsFromSearchRule(
            rule,
            new Uint8ClampedArray(0),
            user_search_co,
            user_service_co,
        );
        expect(result1).toEqual({
            hs: intToBits(2),
            search: intToBits((1 << SearchControlOptions_dnAttribute)
                | (1 << SearchControlOptions_checkOverspecified)),
            service: intToBits((1 << ServiceControlOptions_manageDSAIT)
                | (1 << ServiceControlOptions_allowWriteableCopy)),
        });
    });
});
