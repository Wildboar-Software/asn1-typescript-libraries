/* eslint-disable */
import { ASN1Element as _Element, NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CommonDataObjectAttributes,
    _decode_CommonDataObjectAttributes,
    _encode_CommonDataObjectAttributes,
} from "../PKCS-15/CommonDataObjectAttributes.ta.mjs";
import {
    PKCS15Object,
    _get_decoder_for_PKCS15Object,
    _get_encoder_for_PKCS15Object,
} from "../PKCS-15/PKCS15Object.ta.mjs";

/**
 * @summary DataObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataObject {DataObjectAttributes}  ::=  PKCS15Object {CommonDataObjectAttributes, NULL, DataObjectAttributes}
 * ```
 */
export type DataObject<DataObjectAttributes> = PKCS15Object<
    CommonDataObjectAttributes,
    NULL,
    DataObjectAttributes
>; // DefinedType


/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) DataObject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_DataObject<DataObjectAttributes>(
    _decode_DataObjectAttributes: $.ASN1Decoder<DataObjectAttributes>
): $.ASN1Decoder<DataObject<DataObjectAttributes>> {
    return _get_decoder_for_PKCS15Object<
        CommonDataObjectAttributes,
        NULL,
        DataObjectAttributes
    >(
        _decode_CommonDataObjectAttributes,
        $._decodeNull,
        _decode_DataObjectAttributes
    );
}


/**
 * @summary Returns a function that will encode a(n) DataObject into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) DataObject as an ASN.1 element.
 */
export function _get_encoder_for_DataObject<DataObjectAttributes>(
    _encode_DataObjectAttributes: $.ASN1Encoder<DataObjectAttributes>
): $.ASN1Encoder<DataObject<DataObjectAttributes>> {
    return _get_encoder_for_PKCS15Object<
        CommonDataObjectAttributes,
        NULL,
        DataObjectAttributes
    >(
        _encode_CommonDataObjectAttributes,
        $._encodeNull,
        _encode_DataObjectAttributes
    );
}

/* eslint-enable */
