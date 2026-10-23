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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    CmipPduType,
    _decode_CmipPduType,
    _encode_CmipPduType,
} from '../CMISE-ROSE-SMASE-ASN1Module/CmipPduType.ta.mjs';
/**
 * @summary CmipPduSendingSupport
 * @description
 *
 * Syntax of the X.727 `cmipPduSendingSupport` attribute
 * (`{crsAttribute 2}`) on `cmise`: CMIP PDU types supported
 * for sending. ITU-T Rec. X.727 (03/99)
 * [§7.2](https://www.itu.int/rec/T-REC-X.727-199903-I),
 * Annex A.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CmipPduSendingSupport  ::=  CmipPduType
 * ```
 */
export type CmipPduSendingSupport = CmipPduType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) CmipPduSendingSupport
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CmipPduSendingSupport} The decoded data structure.
 */
export const _decode_CmipPduSendingSupport: $.ASN1Decoder<CmipPduSendingSupport> = _decode_CmipPduType;

/**
 * @summary Encodes a(n) CmipPduSendingSupport into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CmipPduSendingSupport, encoded as an ASN.1 Element.
 */
export const _encode_CmipPduSendingSupport: $.ASN1Encoder<CmipPduSendingSupport> = _encode_CmipPduType;


/* eslint-enable */
