import {
    type ACIItem,
    subentryACI as _x500_subentryACI,
} from "@wildboar/x500/BasicAccessControl";
import { type ATTRIBUTE } from "@wildboar/x500/InformationFramework";
import { id_aca_subentryACI } from "../IN-object-identifiers/id-aca-subentryACI.va.mjs";

export const subentryACI: ATTRIBUTE<ACIItem> = {
    ..._x500_subentryACI,
    "&id": id_aca_subentryACI,
};
