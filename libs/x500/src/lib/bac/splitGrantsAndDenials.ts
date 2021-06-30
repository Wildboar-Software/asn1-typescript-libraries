import { TRUE_BIT } from "asn1-ts";
import type {
    GrantsAndDenials,
} from "../modules/BasicAccessControl/GrantsAndDenials.ta";

export
function splitGrantsAndDenials (gad: GrantsAndDenials): [ GrantsAndDenials ] | [ GrantsAndDenials, GrantsAndDenials ] {
    const grants: GrantsAndDenials = new Uint8ClampedArray(24);
    const denials: GrantsAndDenials = new Uint8ClampedArray(24);
    let grantsEncountered: boolean = false;
    let denialsEncountered: boolean = false;
    const len: number = Math.min(gad.length, 24);
    for (let i = 0; i < len; i++) {
        if ((i % 2) && gad[i]) { // Odd bits are denials. If it is set...
            denials[i] = TRUE_BIT;
            denialsEncountered = true;
        } else if (gad[i]) { // Even bits are grants.
            grants[i] = TRUE_BIT;
            grantsEncountered = true;
        }
    }
    if (grantsEncountered && denialsEncountered) {
        return [ grants, denials ];
    } else {
        return [ gad ];
    }
}

export default splitGrantsAndDenials;
