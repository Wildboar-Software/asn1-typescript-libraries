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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    TransferRecipientField,
    _decode_TransferRecipientField,
    _encode_TransferRecipientField,
} from '../MhsAcctAsn1Module/TransferRecipientField.ta.mjs';
/* START_OF_SYMBOL_DEFINITION TransitDomainTransferOutList */
/**
 * @summary TransitDomainTransferOutList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransitDomainTransferOutList  ::=  SET OF TransferRecipientField
 * ```
 */
export type TransitDomainTransferOutList = TransferRecipientField[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION TransitDomainTransferOutList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TransitDomainTransferOutList */
let _cached_decoder_for_TransitDomainTransferOutList: $.ASN1Decoder<TransitDomainTransferOutList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TransitDomainTransferOutList */

/* START_OF_SYMBOL_DEFINITION _decode_TransitDomainTransferOutList */
/**
 * @summary Decodes an ASN.1 element into a(n) TransitDomainTransferOutList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TransitDomainTransferOutList} The decoded data structure.
 */
export function _decode_TransitDomainTransferOutList(el: _Element) {
    if (!_cached_decoder_for_TransitDomainTransferOutList) {
        _cached_decoder_for_TransitDomainTransferOutList = $._decodeSetOf<TransferRecipientField>(
            () => _decode_TransferRecipientField
        );
    }
    return _cached_decoder_for_TransitDomainTransferOutList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TransitDomainTransferOutList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TransitDomainTransferOutList */
let _cached_encoder_for_TransitDomainTransferOutList: $.ASN1Encoder<TransitDomainTransferOutList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TransitDomainTransferOutList */

/* START_OF_SYMBOL_DEFINITION _encode_TransitDomainTransferOutList */
/**
 * @summary Encodes a(n) TransitDomainTransferOutList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransitDomainTransferOutList, encoded as an ASN.1 Element.
 */
export function _encode_TransitDomainTransferOutList(
    value: TransitDomainTransferOutList,
    elGetter: $.ASN1Encoder<TransitDomainTransferOutList>
) {
    if (!_cached_encoder_for_TransitDomainTransferOutList) {
        _cached_encoder_for_TransitDomainTransferOutList = $._encodeSetOf<TransferRecipientField>(
            () => _encode_TransferRecipientField,
            $.BER
        );
    }
    return _cached_encoder_for_TransitDomainTransferOutList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TransitDomainTransferOutList */

/* eslint-enable */
