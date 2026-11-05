import {
    type ACIItem,
    prescriptiveACI as _x500_prescriptiveACI,
} from "@wildboar/x500/BasicAccessControl";
import { type ATTRIBUTE } from "@wildboar/x500/InformationFramework";
import { id_aca_prescriptiveACI } from "../IN-CS3-object-identifiers/id-aca-prescriptiveACI.va.mjs";

export const prescriptiveACI: ATTRIBUTE<ACIItem> = {
    ..._x500_prescriptiveACI,
    "&id": id_aca_prescriptiveACI,
};
