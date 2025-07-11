/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertStatus,
    _decode_CertStatus,
    _encode_CertStatus,
    _enum_for_CertStatus,
} from "../CaSubscription/CertStatus.ta.mjs";
import {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "@wildboar/pki-stub";
import { Name, _decode_Name, _encode_Name } from "@wildboar/pki-stub";
/**
 * @summary CertUpdateReq_certs_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUpdateReq-certs-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class CertUpdateReq_certs_Item {
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
         * @summary `certStatus`.
         * @public
         * @readonly
         */
        readonly certStatus: CertStatus,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUpdateReq_certs_Item
     * @description
     *
     * This takes an `object` and converts it to a `CertUpdateReq_certs_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUpdateReq_certs_Item`.
     * @returns {CertUpdateReq_certs_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertUpdateReq_certs_Item]: CertUpdateReq_certs_Item[_K];
            }
        >
    ): CertUpdateReq_certs_Item {
        return new CertUpdateReq_certs_Item(
            _o.subject,
            _o.serialNumber,
            _o.certStatus,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `certStatus`
     * @public
     * @static
     */

    public static _enum_for_certStatus = _enum_for_CertStatus;
}

/**
 * @summary The Leading Root Component Types of CertUpdateReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUpdateReq_certs_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("subject", false, $.hasAnyTag),
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "certStatus",
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
];

/**
 * @summary The Trailing Root Component Types of CertUpdateReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUpdateReq_certs_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CertUpdateReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUpdateReq_certs_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_CertUpdateReq_certs_Item: $.ASN1Decoder<CertUpdateReq_certs_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertUpdateReq_certs_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUpdateReq_certs_Item} The decoded data structure.
 */
export function _decode_CertUpdateReq_certs_Item(el: _Element): CertUpdateReq_certs_Item {
    if (!_cached_decoder_for_CertUpdateReq_certs_Item) {
        _cached_decoder_for_CertUpdateReq_certs_Item = function (
            el: _Element
        ): CertUpdateReq_certs_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "CertUpdateReq-certs-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "subject";
            sequence[1].name = "serialNumber";
            sequence[2].name = "certStatus";
            let subject!: Name;
            let serialNumber!: CertificateSerialNumber;
            let certStatus!: CertStatus;
            subject = _decode_Name(sequence[0]);
            serialNumber = _decode_CertificateSerialNumber(sequence[1]);
            certStatus = _decode_CertStatus(sequence[2]);
            return new CertUpdateReq_certs_Item(
                subject,
                serialNumber,
                certStatus,
                sequence.slice(3)
            );
        };
    }
    return _cached_decoder_for_CertUpdateReq_certs_Item(el);
}

let _cached_encoder_for_CertUpdateReq_certs_Item: $.ASN1Encoder<CertUpdateReq_certs_Item> | null = null;

/**
 * @summary Encodes a(n) CertUpdateReq_certs_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUpdateReq_certs_Item, encoded as an ASN.1 Element.
 */
export function _encode_CertUpdateReq_certs_Item(
    value: CertUpdateReq_certs_Item,
    elGetter: $.ASN1Encoder<CertUpdateReq_certs_Item>
): _Element {
    if (!_cached_encoder_for_CertUpdateReq_certs_Item) {
        _cached_encoder_for_CertUpdateReq_certs_Item = function (
            value: CertUpdateReq_certs_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(value.subject, $.DER),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_CertStatus(
                                value.certStatus,
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
    return _cached_encoder_for_CertUpdateReq_certs_Item(value, elGetter);
}


/* eslint-enable */
