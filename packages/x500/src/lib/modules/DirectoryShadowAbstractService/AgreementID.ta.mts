/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    OperationalBindingID,
    _decode_OperationalBindingID,
    _encode_OperationalBindingID,
} from "../OperationalBindingManagement/OperationalBindingID.ta.mjs";
/**
 * @summary AgreementID
 * @description
 *
 * Identifies one shadowing agreement between a pair of DSAs. Must be unique
 * for that pair. Changed by `modifyOperationalBinding` (old and new IDs are
 * both supplied). Reusing an active ID on establish yields `duplicateID`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AgreementID  ::=  OperationalBindingID
 * ```
 */
export type AgreementID = OperationalBindingID; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) AgreementID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AgreementID} The decoded data structure.
 */
export const _decode_AgreementID: $.ASN1Decoder<AgreementID> = _decode_OperationalBindingID;

/**
 * @summary Encodes a(n) AgreementID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgreementID, encoded as an ASN.1 Element.
 */
export const _encode_AgreementID: $.ASN1Encoder<AgreementID> = _encode_OperationalBindingID;


/* eslint-enable */
