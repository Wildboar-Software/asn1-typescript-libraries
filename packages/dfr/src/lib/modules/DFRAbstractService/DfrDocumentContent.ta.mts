/* eslint-disable */
import {
    EXTERNAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DfrDocumentContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DfrDocumentContent  ::=  EXTERNAL
 *     (WITH COMPONENTS {
 *         ...,
 *         direct-reference PRESENT,
 *         indirect-reference ABSENT,
 *         encoding (WITH COMPONENTS { ... , arbitrary ABSENT })
 *     })
 * ```
 */
export
type DfrDocumentContent = EXTERNAL; // ExternalType
export const _decode_DfrDocumentContent = (el: _Element): DfrDocumentContent => {
    const value = $._decodeExternal(el);
    if (value.directReference === undefined) {
        throw new _ConstructionError("DfrDocumentContent.direct-reference shall be present");
    }
    if (value.indirectReference !== undefined) {
        throw new _ConstructionError("DfrDocumentContent.indirect-reference shall be absent");
    }
    if (value.encoding instanceof Uint8ClampedArray) {
        throw new _ConstructionError("DfrDocumentContent.encoding.arbitrary shall be absent");
    }
    return value;
};
export const _encode_DfrDocumentContent = $._encodeExternal;


/* eslint-enable */
