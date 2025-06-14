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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/* START_OF_SYMBOL_DEFINITION AccountableObjectsReferenceList */
/**
 * @summary AccountableObjectsReferenceList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AccountableObjectsReferenceList  ::=  SET OF ObjectInstance
 * ```
 */
export type AccountableObjectsReferenceList = ObjectInstance[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION AccountableObjectsReferenceList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AccountableObjectsReferenceList */
let _cached_decoder_for_AccountableObjectsReferenceList: $.ASN1Decoder<AccountableObjectsReferenceList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AccountableObjectsReferenceList */

/* START_OF_SYMBOL_DEFINITION _decode_AccountableObjectsReferenceList */
/**
 * @summary Decodes an ASN.1 element into a(n) AccountableObjectsReferenceList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AccountableObjectsReferenceList} The decoded data structure.
 */
export function _decode_AccountableObjectsReferenceList(el: _Element) {
    if (!_cached_decoder_for_AccountableObjectsReferenceList) {
        _cached_decoder_for_AccountableObjectsReferenceList = $._decodeSetOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_AccountableObjectsReferenceList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AccountableObjectsReferenceList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AccountableObjectsReferenceList */
let _cached_encoder_for_AccountableObjectsReferenceList: $.ASN1Encoder<AccountableObjectsReferenceList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AccountableObjectsReferenceList */

/* START_OF_SYMBOL_DEFINITION _encode_AccountableObjectsReferenceList */
/**
 * @summary Encodes a(n) AccountableObjectsReferenceList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccountableObjectsReferenceList, encoded as an ASN.1 Element.
 */
export function _encode_AccountableObjectsReferenceList(
    value: AccountableObjectsReferenceList,
    elGetter: $.ASN1Encoder<AccountableObjectsReferenceList>
) {
    if (!_cached_encoder_for_AccountableObjectsReferenceList) {
        _cached_encoder_for_AccountableObjectsReferenceList = $._encodeSetOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_AccountableObjectsReferenceList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AccountableObjectsReferenceList */

/* eslint-enable */
