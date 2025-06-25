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
    TransferRecipientField,
    _decode_TransferRecipientField,
    _encode_TransferRecipientField,
} from '../MhsAcctAsn1Module/TransferRecipientField.ta.mjs';
/**
 * @summary OriginatingDomainTransferOutList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatingDomainTransferOutList  ::=  SET OF TransferRecipientField
 * ```
 */
export type OriginatingDomainTransferOutList = TransferRecipientField[]; // SetOfType

let _cached_decoder_for_OriginatingDomainTransferOutList: $.ASN1Decoder<OriginatingDomainTransferOutList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginatingDomainTransferOutList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatingDomainTransferOutList} The decoded data structure.
 */
export function _decode_OriginatingDomainTransferOutList(el: _Element): OriginatingDomainTransferOutList {
    if (!_cached_decoder_for_OriginatingDomainTransferOutList) {
        _cached_decoder_for_OriginatingDomainTransferOutList = $._decodeSetOf<TransferRecipientField>(
            () => _decode_TransferRecipientField
        );
    }
    return _cached_decoder_for_OriginatingDomainTransferOutList(el);
}

let _cached_encoder_for_OriginatingDomainTransferOutList: $.ASN1Encoder<OriginatingDomainTransferOutList> | null = null;

/**
 * @summary Encodes a(n) OriginatingDomainTransferOutList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatingDomainTransferOutList, encoded as an ASN.1 Element.
 */
export function _encode_OriginatingDomainTransferOutList(
    value: OriginatingDomainTransferOutList,
    elGetter: $.ASN1Encoder<OriginatingDomainTransferOutList>
): _Element {
    if (!_cached_encoder_for_OriginatingDomainTransferOutList) {
        _cached_encoder_for_OriginatingDomainTransferOutList = $._encodeSetOf<TransferRecipientField>(
            () => _encode_TransferRecipientField,
            $.BER
        );
    }
    return _cached_encoder_for_OriginatingDomainTransferOutList(
        value,
        elGetter
    );
}


/* eslint-enable */
