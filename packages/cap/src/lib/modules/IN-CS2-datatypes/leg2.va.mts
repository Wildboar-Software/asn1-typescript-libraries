/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { LegType, _decode_LegType, _encode_LegType } from "../IN-CS2-datatypes/LegType.ta.mjs";
// export { LegType, _decode_LegType, _encode_LegType } from "../IN-CS2-datatypes/LegType.ta.mjs";


/**
 * @summary leg2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * leg2 LegType ::= '02'H
 * ```
 * 
 * @constant
 */
export
const leg2: LegType = new Uint8Array([ 0x02 ]);

/* eslint-enable */
