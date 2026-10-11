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
    ASN1Error,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs";


/**
 * @summary DFR_InvokeIDSet
 * @description
 *
 * Invoke-id set used in DFR ROSE PDUs. ISO/IEC 10166-2:1991 §6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DFR-InvokeIDSet  ::=  InvokeId(ALL EXCEPT absent:NULL)
 * ```
 */
export
type DFR_InvokeIDSet = InvokeId; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) DFR_InvokeIDSet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DFR_InvokeIDSet (el: _Element): DFR_InvokeIDSet {
    const value = _decode_InvokeId(el);
    if ("absent" in value) {
        throw new ASN1Error("DFR-InvokeIDSet excludes InvokeId.absent");
    }
    return value;
}

let _cached_encoder_for_DFR_InvokeIDSet: $.ASN1Encoder<DFR_InvokeIDSet> | null = null;

/**
 * @summary Encodes a(n) DFR_InvokeIDSet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DFR_InvokeIDSet, encoded as an ASN.1 Element.
 */
export
function _encode_DFR_InvokeIDSet (value: DFR_InvokeIDSet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DFR_InvokeIDSet) { _cached_encoder_for_DFR_InvokeIDSet = _encode_InvokeId; }
    return _cached_encoder_for_DFR_InvokeIDSet(value, elGetter);
}


/* eslint-enable */
