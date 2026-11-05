import {
    type ACIItem,
    entryACI as _x500_entryACI,
} from "@wildboar/x500/BasicAccessControl";
import { type ATTRIBUTE } from "@wildboar/x500/InformationFramework";
import { id_aca_entryACI } from "../IN-CS3-object-identifiers/id-aca-entryACI.va.mjs";

export const entryACI: ATTRIBUTE<ACIItem> = {
    ..._x500_entryACI,
    "&id": id_aca_entryACI,
};
