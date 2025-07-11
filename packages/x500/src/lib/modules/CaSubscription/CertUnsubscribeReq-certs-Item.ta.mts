/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "@wildboar/pki-stub";
import { Name, _decode_Name, _encode_Name } from "@wildboar/pki-stub";
/**
 * @summary CertUnsubscribeReq_certs_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUnsubscribeReq-certs-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class CertUnsubscribeReq_certs_Item {
    constructor(
        /**
         * @summary `subject`.
         * @public
         * @readonly
         */
        readonly subject: Name,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUnsubscribeReq_certs_Item
     * @description
     *
     * This takes an `object` and converts it to a `CertUnsubscribeReq_certs_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUnsubscribeReq_certs_Item`.
     * @returns {CertUnsubscribeReq_certs_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertUnsubscribeReq_certs_Item]: CertUnsubscribeReq_certs_Item[_K];
            }
        >
    ): CertUnsubscribeReq_certs_Item {
        return new CertUnsubscribeReq_certs_Item(
            _o.subject,
            _o.serialNumber,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of CertUnsubscribeReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUnsubscribeReq_certs_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("subject", false, $.hasAnyTag),
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of CertUnsubscribeReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUnsubscribeReq_certs_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CertUnsubscribeReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUnsubscribeReq_certs_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_CertUnsubscribeReq_certs_Item: $.ASN1Decoder<CertUnsubscribeReq_certs_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertUnsubscribeReq_certs_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUnsubscribeReq_certs_Item} The decoded data structure.
 */
export function _decode_CertUnsubscribeReq_certs_Item(el: _Element): CertUnsubscribeReq_certs_Item {
    if (!_cached_decoder_for_CertUnsubscribeReq_certs_Item) {
        _cached_decoder_for_CertUnsubscribeReq_certs_Item = function (
            el: _Element
        ): CertUnsubscribeReq_certs_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertUnsubscribeReq-certs-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "subject";
            sequence[1].name = "serialNumber";
            let subject!: Name;
            let serialNumber!: CertificateSerialNumber;
            subject = _decode_Name(sequence[0]);
            serialNumber = _decode_CertificateSerialNumber(sequence[1]);
            return new CertUnsubscribeReq_certs_Item(
                subject,
                serialNumber,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_CertUnsubscribeReq_certs_Item(el);
}

let _cached_encoder_for_CertUnsubscribeReq_certs_Item: $.ASN1Encoder<CertUnsubscribeReq_certs_Item> | null = null;

/**
 * @summary Encodes a(n) CertUnsubscribeReq_certs_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUnsubscribeReq_certs_Item, encoded as an ASN.1 Element.
 */
export function _encode_CertUnsubscribeReq_certs_Item(
    value: CertUnsubscribeReq_certs_Item,
    elGetter: $.ASN1Encoder<CertUnsubscribeReq_certs_Item>
): _Element {
    if (!_cached_encoder_for_CertUnsubscribeReq_certs_Item) {
        _cached_encoder_for_CertUnsubscribeReq_certs_Item = function (
            value: CertUnsubscribeReq_certs_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(value.subject, $.DER),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
                                $.DER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_CertUnsubscribeReq_certs_Item(value, elGetter);
}


/* eslint-enable */
