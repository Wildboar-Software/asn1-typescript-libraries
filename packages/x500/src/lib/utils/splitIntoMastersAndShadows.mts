import type {
    MasterOrShadowAccessPoint,
} from "../modules/DistributedOperations/MasterOrShadowAccessPoint.ta.mjs";
import {
    MasterOrShadowAccessPoint_category_master,
    MasterOrShadowAccessPoint_category_shadow,
} from "../modules/DistributedOperations/MasterOrShadowAccessPoint-category.ta.mjs";

/**
 * @summary Group access points into masters and shadows
 * @description
 * 
 * Access points that are neither masters nor shadows are silently excluded from
 * both returned arrays.
 * 
 * @param {MasterOrShadowAccessPoint[]} mosaps The access points to be grouped
 * @returns {Array} Master and shadow access points, respectively, in two arrays
 * @function
 */
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
