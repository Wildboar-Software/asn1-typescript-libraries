import type {
    MasterOrShadowAccessPoint,
} from "../modules/DistributedOperations/MasterOrShadowAccessPoint.ta.js";
import {
    MasterOrShadowAccessPoint_category_master,
    MasterOrShadowAccessPoint_category_shadow,
} from "../modules/DistributedOperations/MasterOrShadowAccessPoint-category.ta.js";

export
function splitIntoMastersAndShadows (
    mosaps: MasterOrShadowAccessPoint[],
): [ masters: MasterOrShadowAccessPoint[], shadows: MasterOrShadowAccessPoint[] ] {
    const masters: MasterOrShadowAccessPoint[] = [];
    const shadows: MasterOrShadowAccessPoint[] = [];
    for (const mosap of mosaps) {
        if (mosap.category === MasterOrShadowAccessPoint_category_master) {
            masters.push(mosap);
        } else if (mosap.category === MasterOrShadowAccessPoint_category_shadow) {
            shadows.push(mosap);
        }
    }
    return [ masters, shadows ];
}

export default splitIntoMastersAndShadows;
