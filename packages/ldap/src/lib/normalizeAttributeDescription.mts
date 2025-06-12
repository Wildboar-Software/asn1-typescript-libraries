import type { AttributeDescription } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/AttributeDescription.ta.mjs";
import bytesToAscii from "./utils/bytesToAscii.mjs";

const SEMI_COLON: number = ";".charCodeAt(0);

export
function normalizeAttributeDescription (a: AttributeDescription): string {
    const a_semi_index = a.indexOf(SEMI_COLON);
    const a_oid = (a_semi_index > -1)
        ? a.slice(0, a_semi_index)
        : a;
    return bytesToAscii(a_oid);
}

export default normalizeAttributeDescription;
